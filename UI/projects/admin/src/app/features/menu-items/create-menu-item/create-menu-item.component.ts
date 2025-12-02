import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MenuItemService } from '@core/services/menu-item.service';
import { NotificationService } from '@core/services/notification.service';
import { Category, MenuItemDetail } from '@models/menu-item.model';
import { ApiResponse } from '@models/api-response.model';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-create-menu-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-menu-item.component.html',
  styleUrls: ['./create-menu-item.component.scss']
})
export class CreateMenuItemComponent implements OnInit {
  menuItemForm!: FormGroup;
  isSubmitting = false;
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  isLoadingCategories = false;
  showCategoryDropdown = false;
  categorySearchText = '';
  isCreatingCategory = false;
  menuItemId: number | null = null;
  isLoadingMenuItem = false;
  isEditMode = false;
  menuItemImageFile: File | null = null;
  menuItemImagePreview: string | null = null;
  portionImageFiles: Map<number, File> = new Map();
  portionImagePreviews: Map<number, string> = new Map();

  constructor(
    private fb: FormBuilder,
    private menuItemService: MenuItemService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    
    // Check if we're in edit mode (query parameter)
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.menuItemId = parseInt(id, 10);
        this.isEditMode = true;
        
        // Load categories first, then menu item
        this.isLoadingCategories = true;
        this.menuItemService.getCategories().subscribe({
          next: (response: ApiResponse<Category[]>) => {
            this.isLoadingCategories = false;
            if (response.success && response.data) {
              this.categories = response.data.filter((cat: Category) => cat.isVisible);
              this.filteredCategories = [...this.categories];
              
              // Now load the menu item
              if (this.menuItemId) {
                this.loadMenuItem(this.menuItemId);
              }
            }
          },
          error: (error: unknown) => {
            this.isLoadingCategories = false;
            console.error('Error loading categories:', error);
          }
        });
      } else {
        // Not in edit mode, just load categories normally
        this.loadCategories();
      }
    });
  }

  initForm(): void {
    this.menuItemForm = this.fb.group({
      categoryId: ['', [Validators.required]],
      menuItemName: ['', [Validators.required, Validators.maxLength(200)]],
      menuItemDescription: ['', [Validators.maxLength(1000)]],
      menuItemBaseImage: [null], // File input
      menuItemBaseImageUrl: ['', [Validators.maxLength(500)]], // Keep for backward compatibility
      menuItemIsAvailable: [true],
      menuItemPreparationTime: [0, [Validators.min(0)]],
      portions: this.fb.array([])
    });

    // Watch for category changes to update search text
    this.menuItemForm.get('categoryId')?.valueChanges.subscribe(categoryId => {
      if (categoryId && this.categories.length > 0) {
        const category = this.categories.find(cat => cat.id === categoryId);
        if (category) {
          this.categorySearchText = category.name;
        }
      } else if (!categoryId) {
        this.categorySearchText = '';
      }
    });

    // Initialize with at least one portion only if not in edit mode
    // In edit mode, portions will be loaded from the menu item data
    if (!this.isEditMode) {
      this.addPortion();
    }
  }

  get f() {
    return this.menuItemForm.controls;
  }

  get portions(): FormArray {
    return this.menuItemForm.get('portions') as FormArray;
  }

  getPortionDetails(portionIndex: number): FormArray {
    return this.portions.at(portionIndex).get('portionDetails') as FormArray;
  }

  getPortionFormGroup(portionIndex: number): FormGroup {
    return this.portions.at(portionIndex) as FormGroup;
  }

  getPortionDetailFormGroup(portionIndex: number, detailIndex: number): FormGroup {
    return this.getPortionDetails(portionIndex).at(detailIndex) as FormGroup;
  }

  /**
   * Calculate total price from all portion details
   */
  getTotalPrice(): number {
    let total = 0;
    for (let i = 0; i < this.portions.length; i++) {
      const portionDetails = this.getPortionDetails(i);
      for (let j = 0; j < portionDetails.length; j++) {
        const detail = portionDetails.at(j);
        const price = detail.get('price')?.value;
        if (price && !isNaN(parseFloat(price))) {
          total += parseFloat(price);
        }
      }
    }
    return total;
  }

  /**
   * Format price for display
   */
  formatPrice(price: number): string {
    return price.toFixed(2);
  }

         addPortion(): void {
           const portionForm = this.fb.group({
             name: ['', [Validators.required, Validators.maxLength(100)]],
             description: ['', [Validators.maxLength(500)]],
             image: [null], // File input
             imageUrl: ['', [Validators.maxLength(500)]], // Keep for backward compatibility
             isActive: [true],
             displayOrder: [0],
             minSelection: [1, [Validators.required, Validators.min(0)]],
             maxSelection: [null as number | null],
             portionDetails: this.fb.array([])
           }, { validators: this.validateSelectionRange });
           
           // Setup validation listeners
           this.setupPortionValidationListeners(portionForm);
           
           this.portions.push(portionForm);
           this.addPortionDetail(this.portions.length - 1);
         }

  /**
   * Custom validator to ensure maxSelection >= minSelection when maxSelection is provided
   */
  validateSelectionRange(group: FormGroup): { [key: string]: any } | null {
    const minSelection = group.get('minSelection')?.value;
    const maxSelection = group.get('maxSelection')?.value;

    if (maxSelection !== null && maxSelection !== undefined && maxSelection !== '') {
      const maxVal = parseInt(maxSelection, 10);
      const minVal = parseInt(minSelection, 10);
      
      if (!isNaN(maxVal) && !isNaN(minVal) && maxVal < minVal) {
        group.get('maxSelection')?.setErrors({ maxLessThanMin: true });
        return { maxLessThanMin: true };
      }
    }
    
    // Clear error if validation passes
    if (group.get('maxSelection')?.hasError('maxLessThanMin')) {
      const currentErrors = { ...group.get('maxSelection')?.errors };
      delete currentErrors['maxLessThanMin'];
      if (Object.keys(currentErrors).length === 0) {
        group.get('maxSelection')?.setErrors(null);
      } else {
        group.get('maxSelection')?.setErrors(currentErrors);
      }
    }
    
    return null;
  }

  /**
   * Setup validation listeners for portion form
   */
  setupPortionValidationListeners(portionForm: FormGroup): void {
    // Re-validate when minSelection or maxSelection changes
    portionForm.get('minSelection')?.valueChanges.subscribe(() => {
      portionForm.updateValueAndValidity();
    });
    portionForm.get('maxSelection')?.valueChanges.subscribe(() => {
      portionForm.updateValueAndValidity();
    });
  }

  removePortion(index: number): void {
    this.portions.removeAt(index);
  }

  addPortionDetail(portionIndex: number): void {
    const portionDetails = this.getPortionDetails(portionIndex);
    const detailForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(200)]],
      price: ['', [Validators.required, Validators.min(0.01)]]
    });
    portionDetails.push(detailForm);
  }

  removePortionDetail(portionIndex: number, detailIndex: number): void {
    const portionDetails = this.getPortionDetails(portionIndex);
    portionDetails.removeAt(detailIndex);
  }

  loadCategories(): void {
    this.isLoadingCategories = true;
    this.menuItemService.getCategories().subscribe({
      next: (response: ApiResponse<Category[]>) => {
        this.isLoadingCategories = false;
        if (response.success && response.data) {
          this.categories = response.data.filter((cat: Category) => cat.isVisible);
          this.filteredCategories = [...this.categories];
          console.log('Categories loaded:', this.categories);
          
          // Update search text if category is already selected (for edit mode)
          const categoryId = this.menuItemForm.get('categoryId')?.value;
          if (categoryId) {
            const category = this.categories.find(cat => cat.id === categoryId);
            if (category) {
              this.categorySearchText = category.name;
            }
          }
          
          if (this.categories.length === 0) {
            this.notificationService.warning('No visible categories found');
          }
        } else {
          console.warn('Categories response not successful:', response);
          this.notificationService.warning('No categories found');
        }
      },
      error: (error: unknown) => {
        this.isLoadingCategories = false;
        console.error('Error loading categories:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || (error as { message?: string })?.message || 'Failed to load categories. Please check if the API server is running.';
        this.notificationService.error(errorMessage);
      }
    });
  }

  onCategorySearch(event: Event): void {
    const searchText = (event.target as HTMLInputElement).value;
    this.categorySearchText = searchText;
    
    // Clear category selection if input is cleared
    if (this.categorySearchText.trim() === '') {
      this.menuItemForm.patchValue({ categoryId: '' }, { emitEvent: false });
      this.filteredCategories = [...this.categories];
      this.showCategoryDropdown = false;
      return;
    }
    
    const searchLower = searchText.toLowerCase().trim();
    
    // Filter categories
    this.filteredCategories = this.categories.filter(cat =>
      cat.name.toLowerCase().includes(searchLower)
    );
    
    // Check if exact match exists
    const exactMatch = this.categories.find(cat => 
      cat.name.toLowerCase() === searchLower
    );
    
    if (exactMatch) {
      // Exact match found, select it
      this.menuItemForm.patchValue({ categoryId: exactMatch.id }, { emitEvent: false });
      this.showCategoryDropdown = false;
    } else if (this.filteredCategories.length === 0 && searchText.trim().length > 0) {
      // No match found, show option to create new category
      this.showCategoryDropdown = true;
    } else {
      // Show filtered results
      this.showCategoryDropdown = true;
    }
  }

  selectCategory(category: Category): void {
    this.menuItemForm.patchValue({ categoryId: category.id });
    this.categorySearchText = category.name;
    this.showCategoryDropdown = false;
  }

  createNewCategory(): void {
    const categoryName = this.categorySearchText.trim();
    
    if (!categoryName) {
      this.notificationService.error('Please enter a category name');
      return;
    }

    // Check if category already exists (case-insensitive)
    const existingCategory = this.categories.find(cat => 
      cat.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (existingCategory) {
      this.selectCategory(existingCategory);
      return;
    }

    this.isCreatingCategory = true;
    this.menuItemService.createCategory({
      name: categoryName,
      displayOrder: this.categories.length,
      isVisible: true
    }).subscribe({
      next: (response: ApiResponse<Category>) => {
        this.isCreatingCategory = false;
        if (response.success && response.data) {
          // Add new category to the list
          this.categories.push(response.data);
          this.filteredCategories = [...this.categories];
          
          // Select the newly created category
          this.selectCategory(response.data);
          
          this.notificationService.success(`Category "${categoryName}" created successfully!`);
        } else {
          this.notificationService.error('Failed to create category');
        }
      },
      error: (error: unknown) => {
        this.isCreatingCategory = false;
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || (error as { message?: string })?.message || 'Failed to create category';
        this.notificationService.error(errorMessage);
      }
    });
  }

  onCategoryInputFocus(): void {
    if (this.categorySearchText === '') {
      this.filteredCategories = [...this.categories];
    }
    if (this.categories.length > 0 || this.categorySearchText.trim().length > 0) {
      this.showCategoryDropdown = true;
    }
  }

  onCategoryInputBlur(): void {
    // Delay to allow click event on dropdown items to fire first
    setTimeout(() => {
      this.showCategoryDropdown = false;
    }, 200);
  }

  getSelectedCategoryName(): string {
    const categoryId = this.menuItemForm.get('categoryId')?.value;
    if (categoryId) {
      const category = this.categories.find(cat => cat.id === categoryId);
      return category ? category.name : '';
    }
    return '';
  }

  shouldShowCreateOption(): boolean {
    const searchText = this.categorySearchText.trim().toLowerCase();
    if (!searchText) return false;
    
    // Check if exact match exists
    const exactMatch = this.categories.find(cat => 
      cat.name.toLowerCase() === searchText
    );
    
    // Show create option if no exact match and we have filtered results showing no matches
    return !exactMatch && this.filteredCategories.length === 0 && searchText.length > 0;
  }

  loadMenuItem(id: number): void {
    this.isLoadingMenuItem = true;
    this.menuItemService.getMenuItemById(id).subscribe({
      next: (response: ApiResponse<MenuItemDetail>) => {
        this.isLoadingMenuItem = false;
        if (response.success && response.data) {
          this.populateForm(response.data);
        } else {
          this.notificationService.error('Failed to load menu item');
          this.router.navigate(['/menu-items']);
        }
      },
      error: (error: unknown) => {
        this.isLoadingMenuItem = false;
        console.error('Error loading menu item:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to load menu item';
        this.notificationService.error(errorMessage);
        this.router.navigate(['/menu-items']);
      }
    });
  }

  populateForm(menuItem: MenuItemDetail): void {
    // Populate basic fields
    this.menuItemForm.patchValue({
      categoryId: menuItem.categoryId,
      menuItemName: menuItem.name,
      menuItemDescription: menuItem.description || '',
      menuItemBaseImageUrl: menuItem.baseImageUrl || '',
      menuItemIsAvailable: menuItem.isAvailable,
      menuItemPreparationTime: menuItem.preparationTime
    });

    // Set image preview if URL exists - construct full URL
    if (menuItem.baseImageUrl) {
      this.menuItemImagePreview = this.getImageUrl(menuItem.baseImageUrl);
    }

    // Update category search text
    const category = this.categories.find(cat => cat.id === menuItem.categoryId);
    if (category) {
      this.categorySearchText = category.name;
    }

    // Clear existing portions
    while (this.portions.length !== 0) {
      this.portions.removeAt(0);
    }

    // Populate portions and portion details
    if (menuItem.portions && menuItem.portions.length > 0) {
      menuItem.portions.forEach((portion: MenuItemDetail['portions'][0]) => {
        // Add portion form
        const portionForm = this.fb.group({
          name: [portion.name, [Validators.required, Validators.maxLength(100)]],
          description: [portion.description || '', [Validators.maxLength(500)]],
          image: [null], // File input
          imageUrl: [portion.imageUrl || '', [Validators.maxLength(500)]],
          isActive: [portion.isActive],
          displayOrder: [portion.displayOrder || 0],
          minSelection: [portion.minSelection ?? 1, [Validators.required, Validators.min(0)]],
          maxSelection: [portion.maxSelection ?? null],
          portionDetails: this.fb.array([])
        }, { validators: this.validateSelectionRange });
        
        // Setup validation listeners
        this.setupPortionValidationListeners(portionForm);
        
        this.portions.push(portionForm);
        const portionIndex = this.portions.length - 1;

        // Set image preview if URL exists - construct full URL
        if (portion.imageUrl) {
          this.portionImagePreviews.set(portionIndex, this.getImageUrl(portion.imageUrl));
        }

        // Populate portion details
        if (portion.portionDetails && portion.portionDetails.length > 0) {
          portion.portionDetails.forEach((detail: { name: string; price: number }) => {
            const detailForm = this.fb.group({
              name: [detail.name, [Validators.required, Validators.maxLength(200)]],
              price: [detail.price, [Validators.required, Validators.min(0.01)]]
            });
            this.getPortionDetails(portionIndex).push(detailForm);
          });
        } else {
          // If no portion details, add one default
          this.addPortionDetail(portionIndex);
        }
      });
    } else {
      // If no portions, add one default
      this.addPortion();
    }
  }

  onMenuItemImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Validate file size
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        this.notificationService.error('File size exceeds 5MB limit');
        input.value = '';
        return;
      }
      
      this.menuItemImageFile = file;
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.menuItemImagePreview = e.target.result;
      };
      reader.onerror = () => {
        this.notificationService.error('Failed to load image preview');
      };
      reader.readAsDataURL(file);
      
      // Update form
      this.menuItemForm.patchValue({ menuItemBaseImage: file });
    }
  }

  onPortionImageChange(event: Event, portionIndex: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      // Validate file size
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        this.notificationService.error('File size exceeds 5MB limit');
        input.value = '';
        return;
      }
      
      this.portionImageFiles.set(portionIndex, file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.portionImagePreviews.set(portionIndex, e.target.result);
      };
      reader.onerror = () => {
        this.notificationService.error('Failed to load image preview');
      };
      reader.readAsDataURL(file);
      
      // Update form
      const portionForm = this.getPortionFormGroup(portionIndex);
      portionForm.patchValue({ image: file });
    }
  }

  /**
   * Get full image URL (prepend API base URL if relative path)
   */
  getImageUrl(imageUrl: string | undefined): string {
    if (!imageUrl) {
      return '';
    }
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    }
    // If it's a relative path starting with /, prepend the API base URL (without /api)
    if (imageUrl.startsWith('/')) {
      const baseUrl = environment.apiUrl.replace(/\/api$/, '');
      return `${baseUrl}${imageUrl}`;
    }
    return imageUrl;
  }

  /**
   * Clear menu item image
   */
  clearMenuItemImage(): void {
    this.menuItemImageFile = null;
    this.menuItemImagePreview = null;
    this.menuItemForm.patchValue({ menuItemBaseImage: null });
    const fileInput = document.getElementById('menuItemBaseImage') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  /**
   * Clear portion image
   */
  clearPortionImage(portionIndex: number): void {
    this.portionImageFiles.delete(portionIndex);
    this.portionImagePreviews.delete(portionIndex);
    const portionForm = this.getPortionFormGroup(portionIndex);
    portionForm.patchValue({ image: null });
    const fileInput = document.getElementById(`portionImage${portionIndex}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  /**
   * Handle image URL input change for menu item
   */
  onImageUrlChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const url = input.value.trim();
    if (url) {
      this.menuItemImagePreview = this.getImageUrl(url);
    } else {
      this.menuItemImagePreview = null;
    }
  }

  /**
   * Handle image URL input change for portion
   */
  onPortionImageUrlChange(event: Event, portionIndex: number): void {
    const input = event.target as HTMLInputElement;
    const url = input.value.trim();
    if (url) {
      this.portionImagePreviews.set(portionIndex, this.getImageUrl(url));
    } else {
      this.portionImagePreviews.delete(portionIndex);
    }
  }

  onSubmit(): void {
    if (this.menuItemForm.invalid) {
      Object.keys(this.menuItemForm.controls).forEach(key => {
        const control = this.menuItemForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
      // Mark form arrays as touched
      this.portions.controls.forEach(portion => {
        portion.markAllAsTouched();
        const details = portion.get('portionDetails') as FormArray;
        details.controls.forEach(detail => detail.markAllAsTouched());
      });
      this.notificationService.error('Please fill in all required fields');
      return;
    }

    // Validate that at least one portion exists
    if (this.portions.length === 0) {
      this.notificationService.error('Please add at least one portion');
      return;
    }

    // Validate that each portion has at least one detail
    for (let i = 0; i < this.portions.length; i++) {
      const details = this.getPortionDetails(i);
      if (details.length === 0) {
        this.notificationService.error(`Portion ${i + 1} must have at least one portion detail`);
        return;
      }
    }

    this.isSubmitting = true;
    const formValue = this.menuItemForm.value;

    // Create FormData for file upload
    const formData = new FormData();
    
    formData.append('categoryId', formValue.categoryId);
    formData.append('menuItemName', formValue.menuItemName);
    if (formValue.menuItemDescription) {
      formData.append('menuItemDescription', formValue.menuItemDescription);
    }
    if (this.menuItemImageFile) {
      formData.append('MenuItemBaseImage', this.menuItemImageFile);
    } else if (formValue.menuItemBaseImageUrl) {
      formData.append('MenuItemBaseImageUrl', formValue.menuItemBaseImageUrl);
    }
    formData.append('MenuItemIsAvailable', formValue.menuItemIsAvailable ?? true);
    formData.append('MenuItemPreparationTime', (formValue.menuItemPreparationTime || 0).toString());

    // Add ID if in edit mode
    if (this.isEditMode && this.menuItemId) {
      formData.append('Id', this.menuItemId.toString());
    }

    // Handle portions
    if (formValue.portions && formValue.portions.length > 0) {
      formValue.portions.forEach((portion: any, index: number) => {
        formData.append(`Portions[${index}].Name`, portion.name);
        if (portion.description) {
          formData.append(`Portions[${index}].Description`, portion.description);
        }
        const portionImageFile = this.portionImageFiles.get(index);
        if (portionImageFile) {
          formData.append(`Portions[${index}].Image`, portionImageFile);
        } else if (portion.imageUrl) {
          formData.append(`Portions[${index}].ImageUrl`, portion.imageUrl);
        }
        formData.append(`Portions[${index}].IsActive`, portion.isActive ?? true);
        formData.append(`Portions[${index}].DisplayOrder`, (portion.displayOrder || 0).toString());
        formData.append(`Portions[${index}].MinSelection`, (portion.minSelection ?? 1).toString());
        // Only append MaxSelection if it has a value, otherwise leave it null
        if (portion.maxSelection !== null && portion.maxSelection !== undefined && portion.maxSelection !== '') {
          formData.append(`Portions[${index}].MaxSelection`, portion.maxSelection.toString());
        } else {
          formData.append(`Portions[${index}].MaxSelection`, '');
        }

        if (portion.portionDetails && portion.portionDetails.length > 0) {
          portion.portionDetails.forEach((detail: any, detailIndex: number) => {
            formData.append(`Portions[${index}].PortionDetails[${detailIndex}].Name`, detail.name);
            formData.append(`Portions[${index}].PortionDetails[${detailIndex}].Price`, detail.price.toString());
          });
        }
      });
    }

    this.menuItemService.createMenuItemWithPrice(formData).subscribe({
      next: (response: ApiResponse<MenuItemDetail>) => {
        if (response.success) {
          const message = this.isEditMode 
            ? 'Menu item updated successfully!' 
            : 'Menu item created successfully!';
          this.notificationService.success(message);
          this.router.navigate(['/menu-items']);
        }
      },
      error: (error: unknown) => {
        this.isSubmitting = false;
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || (error as { message?: string })?.message || 'Failed to create menu item';
        this.notificationService.error(errorMessage);
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}

