import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MenuItemService, MenuItemList } from '@core/services/menu-item.service';
import { Category } from '@models/menu-item.model';
import { NotificationService } from '@core/services/notification.service';
import { ApiResponse } from '@models/api-response.model';
import { environment } from '@environments/environment';

interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

@Component({
  selector: 'app-list-menu-items',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.scss']
})
export class ListMenuItemsComponent implements OnInit {
  menuItems: MenuItemList[] = [];
  isLoading = false;
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  totalPages = 0;
  searchText = '';
  
  // Category order modal
  showCategoryOrderModal = false;
  categories: Category[] = [];
  isLoadingCategories = false;
  isSavingOrder = false;
  originalOrder: Map<number, number> = new Map();

  constructor(
    private menuItemService: MenuItemService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.isLoading = true;
    this.menuItemService.getMenuItems(this.currentPage, this.pageSize).subscribe({
      next: (response: ApiResponse<PagedResult<MenuItemList>>) => {
        this.isLoading = false;
        if (response.success && response.data) {
          this.menuItems = response.data.items || [];
          this.totalCount = response.data.totalCount || 0;
          this.totalPages = response.data.totalPages || 0;
          this.currentPage = response.data.pageNumber || 1;
        } else {
          this.menuItems = [];
          this.notificationService.warning('No menu items found');
        }
      },
      error: (error: unknown) => {
        this.isLoading = false;
        console.error('Error loading menu items:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to load menu items';
        this.notificationService.error(errorMessage);
      }
    });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadMenuItems();
    }
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this menu item?')) {
      this.menuItemService.deleteMenuItem(id).subscribe({
        next: (response: ApiResponse<boolean>) => {
          if (response.success) {
            this.notificationService.success('Menu item deleted successfully');
            this.loadMenuItems();
          } else {
            this.notificationService.error('Failed to delete menu item');
          }
        },
        error: (error: unknown) => {
          const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                              (error as { message?: string })?.message || 
                              'Failed to delete menu item';
          this.notificationService.error(errorMessage);
        }
      });
    }
  }

  onToggleAvailability(item: MenuItemList): void {
    this.menuItemService.toggleAvailability(item.id, !item.isAvailable).subscribe({
      next: (response: ApiResponse<boolean>) => {
        if (response.success) {
          item.isAvailable = !item.isAvailable;
          this.notificationService.success(
            `Menu item ${item.isAvailable ? 'activated' : 'deactivated'} successfully`
          );
        } else {
          this.notificationService.error('Failed to update menu item availability');
        }
      },
      error: (error: unknown) => {
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to update menu item availability';
        this.notificationService.error(errorMessage);
      }
    });
  }

  get filteredMenuItems(): MenuItemList[] {
    if (!this.searchText.trim()) {
      return this.menuItems;
    }
    const searchLower = this.searchText.toLowerCase();
    return this.menuItems.filter(item =>
      item.name.toLowerCase().includes(searchLower) ||
      item.categoryName.toLowerCase().includes(searchLower) ||
      (item.description && item.description.toLowerCase().includes(searchLower))
    );
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
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
      // Remove /api from the end of apiUrl if present
      const baseUrl = environment.apiUrl.replace(/\/api$/, '');
      return `${baseUrl}${imageUrl}`;
    }
    return imageUrl;
  }

  /**
   * Handle image load error
   */
  onImageError(event: Event, item: MenuItemList): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    // Mark item as having image error
    item.imageError = true;
    // Show placeholder instead
    const placeholder = img.nextElementSibling as HTMLElement;
    if (placeholder && placeholder.classList.contains('menu-item-placeholder')) {
      placeholder.classList.remove('d-none');
    }
  }

  /**
   * Open category order modal
   */
  openCategoryOrderModal(): void {
    this.showCategoryOrderModal = true;
    this.loadCategories();
  }

  /**
   * Close category order modal
   */
  closeCategoryOrderModal(): void {
    this.showCategoryOrderModal = false;
    this.categories = [];
    this.originalOrder.clear();
  }

  /**
   * Load categories for ordering
   */
  loadCategories(): void {
    this.isLoadingCategories = true;
    this.menuItemService.getCategories().subscribe({
      next: (response: ApiResponse<Category[]>) => {
        this.isLoadingCategories = false;
        if (response.success && response.data) {
          // Sort by display order
          this.categories = response.data.sort((a, b) => a.displayOrder - b.displayOrder);
          // Store original order
          this.categories.forEach(cat => {
            this.originalOrder.set(cat.id, cat.displayOrder);
          });
        } else {
          this.categories = [];
        }
      },
      error: (error: unknown) => {
        this.isLoadingCategories = false;
        console.error('Error loading categories:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to load categories';
        this.notificationService.error(errorMessage);
      }
    });
  }

  /**
   * Move category up
   */
  moveCategoryUp(index: number): void {
    if (index > 0) {
      const temp = this.categories[index].displayOrder;
      this.categories[index].displayOrder = this.categories[index - 1].displayOrder;
      this.categories[index - 1].displayOrder = temp;
      this.categories = [...this.categories].sort((a, b) => a.displayOrder - b.displayOrder);
      // Reassign sequential orders
      this.categories.forEach((cat, idx) => {
        cat.displayOrder = idx + 1;
      });
    }
  }

  /**
   * Move category down
   */
  moveCategoryDown(index: number): void {
    if (index < this.categories.length - 1) {
      const temp = this.categories[index].displayOrder;
      this.categories[index].displayOrder = this.categories[index + 1].displayOrder;
      this.categories[index + 1].displayOrder = temp;
      this.categories = [...this.categories].sort((a, b) => a.displayOrder - b.displayOrder);
      // Reassign sequential orders
      this.categories.forEach((cat, idx) => {
        cat.displayOrder = idx + 1;
      });
    }
  }

  /**
   * Handle order number change
   */
  onOrderChange(category: Category): void {
    // Reorder all categories
    this.categories = [...this.categories].sort((a, b) => a.displayOrder - b.displayOrder);
    // Reassign sequential orders
    this.categories.forEach((cat, index) => {
      cat.displayOrder = index + 1;
    });
  }

  /**
   * Save category order
   */
  saveCategoryOrder(): void {
    this.isSavingOrder = true;
    
    const updateOrderDto = {
      categories: this.categories.map((cat, index) => ({
        id: cat.id,
        displayOrder: index + 1
      }))
    };

    this.menuItemService.updateCategoryOrder(updateOrderDto).subscribe({
      next: (response: ApiResponse<boolean>) => {
        this.isSavingOrder = false;
        if (response.success) {
          this.notificationService.success('Category order saved successfully');
          // Update original order
          this.categories.forEach(cat => {
            this.originalOrder.set(cat.id, cat.displayOrder);
          });
          this.closeCategoryOrderModal();
        } else {
          this.notificationService.error(response.message || 'Failed to save category order');
        }
      },
      error: (error: unknown) => {
        this.isSavingOrder = false;
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to save category order';
        this.notificationService.error(errorMessage);
      }
    });
  }

  /**
   * Check if order has changed
   */
  hasOrderChanged(): boolean {
    return this.categories.some(cat => {
      const original = this.originalOrder.get(cat.id);
      return original !== undefined && original !== cat.displayOrder;
    });
  }
}

