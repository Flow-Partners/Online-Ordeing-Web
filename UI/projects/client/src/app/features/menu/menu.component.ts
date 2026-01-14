import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MenuItemService } from '@core/services/menu-item.service';
import { CategoryService } from '@core/services/category.service';
import { CartService } from '@core/services/cart.service';
import { NotificationService } from '@core/services/notification.service';
import { MenuItem, MenuItemDetail, CartItem } from '@models/menu-item.model';
import { CategoryListViewModel } from '@models/category.model';
import { ApiResponse } from '@models/api-response.model';
import { PagedResult } from '@models/menu-item.model';
import { ProductPopupSimpleComponent } from '@shared/components/product-popup-simple/product-popup-simple.component';
import { ProductPopupComplexComponent } from '@shared/components/product-popup-complex/product-popup-complex.component';

export interface CategorySection {
  category: CategoryListViewModel;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    ProductPopupSimpleComponent,
    ProductPopupComplexComponent
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [];
  categorySections: CategorySection[] = [];
  loading = false;
  currentPage = 1;
  pageSize = 1000; // Load all items for section view
  totalPages = 1;
  totalCount = 0;
  searchTerm = '';
  favoriteItems: Set<number> = new Set();
  itemPrices: Map<number, number> = new Map(); // Cache for item prices
  Math = Math; // Expose Math to template
  
  // Category properties
  categories: CategoryListViewModel[] = [];
  selectedCategoryId: number | null = null;
  categoriesLoading = false;
  activeCategoryId: number | null = null; // For scroll spy
  isScrolling = false; // Prevent scroll spy during programmatic scroll
  
  // Slider properties
  sliderImages: string[] = [
    '/images/Slider/slid1.jpg',
    '/images/Slider/slid2.jpg',
    '/images/Slider/slid3.jpg'
  ];
  currentSlideIndex = 0;
  private sliderInterval: any;
  private readonly sliderIntervalTime = 5000; // 5 seconds
  
  // Popup properties
  showSimplePopup = false;
  showComplexPopup = false;
  selectedMenuItemDetail: MenuItemDetail | null = null;
  
  // Test: Force show popup for debugging
  testShowPopup(): void {
    console.log('TEST: Force showing simple popup');
    this.showSimplePopup = true;
    this.showComplexPopup = false;
    // Create a mock menu item detail for testing
    this.selectedMenuItemDetail = {
      id: 1,
      categoryId: 1,
      categoryName: 'Test',
      name: 'Test Item',
      description: 'Test Description',
      baseImageUrl: '',
      isAvailable: true,
      preparationTime: 15,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      portionCount: 1,
      portions: [{
        id: 1,
        menuItemId: 1,
        menuItemName: 'Test Item',
        name: 'Regular',
        isActive: true,
        displayOrder: 1,
        minSelection: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        portionDetails: [{
          id: 1,
          name: 'Regular',
          price: 100
        }]
      }]
    } as MenuItemDetail;
  }
  
  private destroy$ = new Subject<void>();

  constructor(
    private menuItemService: MenuItemService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Load favorites from storage
    const savedFavorites = localStorage.getItem('favorite_menu_items');
    if (savedFavorites) {
      this.favoriteItems = new Set(JSON.parse(savedFavorites));
    }
  }

  ngOnInit(): void {
    // Listen to route query params for category selection from header
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const categoryId = params['category'];
        if (categoryId !== undefined) {
          const id = categoryId === 'null' || categoryId === null ? null : parseInt(categoryId, 10);
          if (id !== this.selectedCategoryId) {
            this.selectedCategoryId = id;
            this.activeCategoryId = id;
            this.loadMenuItems();
          }
        }
      });

    this.loadCategories();
    this.loadMenuItems();
    this.startSlider();
    this.setupScrollSpy();
  }

  ngOnDestroy(): void {
    this.stopSlider();
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', () => this.onScroll());
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCategories(): void {
    this.categoriesLoading = true;
    this.categoryService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ApiResponse<PagedResult<CategoryListViewModel>>) => {
          if (response.success && response.data) {
            const data = response.data as any;
            this.categories = (data.items || data.Items || []).filter((cat: CategoryListViewModel) => cat.isVisible);
            // Sort by display order
            this.categories.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
            console.log('Categories loaded:', this.categories.length);
            
            // Reload menu items to group them after categories are loaded
            if (this.menuItems.length > 0) {
              this.groupItemsByCategory();
            }
          }
          this.categoriesLoading = false;
        },
        error: (error) => {
          console.error('Error loading categories:', error);
          this.categoriesLoading = false;
        }
      });
  }

  loadMenuItems(): void {
    this.loading = true;
    console.log('Loading menu items...', { page: this.currentPage, limit: this.pageSize, search: this.searchTerm, categoryId: this.selectedCategoryId });
    
    // If a category is selected, filter by category
    if (this.selectedCategoryId !== null) {
      this.menuItemService
        .getMenuItemsByCategory(this.selectedCategoryId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: ApiResponse<MenuItem[]>) => {
            if (response.success && response.data) {
              this.menuItems = response.data as MenuItem[];
              this.totalPages = 1;
              this.totalCount = this.menuItems.length;
              this.groupItemsByCategory();
              this.loadPricesForItems(this.menuItems);
            }
            this.loading = false;
          },
          error: (error) => {
            console.error('Error loading menu items by category:', error);
            this.notificationService.error('Failed to load menu items.');
            this.loading = false;
          }
        });
    } else {
      // Load all menu items for section view
      this.menuItemService
        .getMenuItems({
          page: 1,
          limit: this.pageSize,
          search: this.searchTerm || undefined
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: ApiResponse<PagedResult<MenuItem>>) => {
            console.log('Menu items response:', response);
            if (response.success && response.data) {
              // Handle both camelCase and PascalCase property names
              const data = response.data as any;
              this.menuItems = (data.items || data.Items || []) as MenuItem[];
              this.totalPages = data.totalPages || data.TotalPages || 1;
              this.totalCount = data.totalCount || data.TotalCount || 0;
              
              console.log('Menu items loaded:', this.menuItems.length, 'items');
              
              // Group items by category
              this.groupItemsByCategory();
              
              // Fetch prices for all menu items
              this.loadPricesForItems(this.menuItems);
            } else {
              console.warn('Menu items response not successful:', response);
              this.notificationService.error(response.message || 'Failed to load menu items');
            }
            this.loading = false;
            console.log('Loading set to false');
          },
          error: (error) => {
            console.error('Error loading menu items:', error);
            this.notificationService.error('Failed to load menu items. Please check if the API is running.');
            this.loading = false;
            console.log('Loading set to false (error)');
          }
        });
    }
  }

  groupItemsByCategory(): void {
    const grouped = new Map<number, MenuItem[]>();
    
    // Group items by category
    this.menuItems.forEach(item => {
      const categoryId = item.categoryId || 0;
      if (!grouped.has(categoryId)) {
        grouped.set(categoryId, []);
      }
      grouped.get(categoryId)!.push(item);
    });
    
    // Create category sections
    this.categorySections = this.categories
      .filter(cat => grouped.has(cat.id) && grouped.get(cat.id)!.length > 0)
      .map(cat => ({
        category: cat,
        items: grouped.get(cat.id)!
      }))
      .sort((a, b) => (a.category.displayOrder || 0) - (b.category.displayOrder || 0));
    
    console.log('Grouped items into', this.categorySections.length, 'sections');
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadMenuItems();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadMenuItems();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getImageUrl(imageUrl?: string): string {
    return this.menuItemService.getImageUrl(imageUrl);
  }

  toggleFavorite(menuItemId: number): void {
    if (this.favoriteItems.has(menuItemId)) {
      this.favoriteItems.delete(menuItemId);
    } else {
      this.favoriteItems.add(menuItemId);
    }
    localStorage.setItem('favorite_menu_items', JSON.stringify(Array.from(this.favoriteItems)));
  }

  isFavorite(menuItemId: number): boolean {
    return this.favoriteItems.has(menuItemId);
  }

  // Open product popup (called when clicking on product card)
  openProductPopup(menuItem: MenuItem, event?: Event): void {
    // Prevent default and stop propagation
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    console.log('=== openProductPopup CALLED ===');
    console.log('Menu item:', menuItem);
    console.log('Menu item ID:', menuItem?.id);
    console.log('Menu item name:', menuItem?.name);
    
    if (!menuItem) {
      console.error('Menu item is null or undefined');
      alert('Error: Menu item is null');
      return;
    }
    
    if (!menuItem.id) {
      console.error('Menu item ID is missing');
      alert('Error: Menu item ID is missing');
      return;
    }
    
    // Call addToCart which handles the popup logic
    console.log('Calling addToCart with menu item:', menuItem);
    this.addToCart(menuItem);
  }

  addToCart(menuItem: MenuItem): void {
    console.log('=== addToCart METHOD CALLED ===');
    console.log('Menu item:', menuItem);
    console.log('Menu item ID:', menuItem?.id);
    console.log('Menu item available:', menuItem?.isAvailable);
    
    if (!menuItem || !menuItem.id) {
      console.error('Invalid menu item:', menuItem);
      this.notificationService.error('Invalid menu item');
      return;
    }
    
    // Get the menu item details to show appropriate popup
    console.log('Calling getMenuItemById with ID:', menuItem.id);
    this.menuItemService
      .getMenuItemById(menuItem.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ApiResponse<MenuItemDetail>) => {
          console.log('Menu item detail response:', response);
          if (response.success && response.data) {
            this.selectedMenuItemDetail = response.data;
            console.log('Selected menu item detail:', this.selectedMenuItemDetail);
            console.log('Portion count:', this.selectedMenuItemDetail.portionCount);
            console.log('Portions array:', this.selectedMenuItemDetail.portions);
            console.log('Portions length:', this.selectedMenuItemDetail.portions?.length);
            
            // Close any existing popups first
            this.showSimplePopup = false;
            this.showComplexPopup = false;
            
            // Count total portion details (options) across all portions
            let totalPortionDetails = 0;
            if (this.selectedMenuItemDetail.portions && this.selectedMenuItemDetail.portions.length > 0) {
              this.selectedMenuItemDetail.portions.forEach(portion => {
                if (portion.portionDetails && portion.portionDetails.length > 0) {
                  totalPortionDetails += portion.portionDetails.length;
                }
              });
            }
            
            const hasPortions = this.selectedMenuItemDetail.portions && 
                              this.selectedMenuItemDetail.portions.length > 0;
            
            console.log('Total portion details count:', totalPortionDetails);
            console.log('Portions array length:', this.selectedMenuItemDetail.portions?.length);
            console.log('PortionCount property:', this.selectedMenuItemDetail.portionCount);
            
            if (!hasPortions || totalPortionDetails === 0) {
              console.log('No portions available');
              this.notificationService.warning('No portions available for this item');
              this.selectedMenuItemDetail = null;
              return;
            }
            
            // Show simple popup if only one portion detail option, complex popup if multiple options
            if (totalPortionDetails === 1) {
              console.log('Showing SIMPLE popup - totalPortionDetails:', totalPortionDetails);
              this.showSimplePopup = true;
              this.showComplexPopup = false;
              console.log('showSimplePopup set to:', this.showSimplePopup);
            } else {
              console.log('Showing COMPLEX popup - totalPortionDetails:', totalPortionDetails);
              this.showSimplePopup = false;
              this.showComplexPopup = true;
              console.log('showComplexPopup set to:', this.showComplexPopup);
            }
            
            // Log popup state
            setTimeout(() => {
              console.log('=== POPUP STATE CHECK ===');
              console.log('showSimplePopup:', this.showSimplePopup);
              console.log('showComplexPopup:', this.showComplexPopup);
              console.log('selectedMenuItemDetail exists:', !!this.selectedMenuItemDetail);
              console.log('selectedMenuItemDetail:', this.selectedMenuItemDetail);
            }, 100);
          } else {
            console.error('Response not successful:', response);
            this.notificationService.error('Failed to load menu item details');
          }
        },
        error: (error) => {
          console.error('Error loading menu item details:', error);
          this.notificationService.error('Failed to load item details');
        }
      });
  }

  onClosePopup(): void {
    this.showSimplePopup = false;
    this.showComplexPopup = false;
    this.selectedMenuItemDetail = null;
  }

  onAddToCartFromPopup(cartItem: CartItem): void {
    this.cartService.addToCart(cartItem);
    this.notificationService.success(`${cartItem.menuItemName} added to cart!`);
    this.onClosePopup();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      // Prevent infinite loop: check if we're already trying to load a placeholder
      const currentSrc = img.src || '';
      const placeholderPath = '/assets/i18n/placeholder-food.png';
      
      // Only set placeholder if we haven't already tried it
      if (!currentSrc.includes('placeholder-food.png') && !currentSrc.includes('data:image')) {
        img.src = placeholderPath;
        // Remove the error handler to prevent infinite loop if placeholder also fails
        img.onerror = () => {
          // If placeholder also fails, use a data URL to break the loop
          if (img && !img.src.includes('data:image')) {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ececec" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3ENo Image%3C/text%3E%3C/svg%3E';
            img.onerror = null; // Remove handler to prevent further attempts
          }
        };
      } else {
        // If we're already on placeholder and it failed, use data URL
        if (!currentSrc.includes('data:image')) {
          img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ececec" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3ENo Image%3C/text%3E%3C/svg%3E';
          img.onerror = null; // Remove handler to prevent further attempts
        }
      }
    }
  }

  loadPricesForItems(items: MenuItem[]): void {
    // Fetch prices for items that don't have cached prices
    items.forEach(item => {
      if (!this.itemPrices.has(item.id)) {
        this.getItemStartingPrice(item.id);
      }
    });
  }

  getItemStartingPrice(itemId: number): void {
    this.menuItemService
      .getMenuItemById(itemId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ApiResponse<MenuItemDetail>) => {
          if (response.success && response.data) {
            const menuItemDetail = response.data;
            // Find the minimum price from all portion details
            let minPrice: number | null = null;
            
            if (menuItemDetail.portions && menuItemDetail.portions.length > 0) {
              menuItemDetail.portions.forEach(portion => {
                if (portion.portionDetails && portion.portionDetails.length > 0) {
                  portion.portionDetails.forEach(detail => {
                    if (minPrice === null || detail.price < minPrice) {
                      minPrice = detail.price;
                    }
                  });
                }
              });
            }
            
            if (minPrice !== null) {
              this.itemPrices.set(itemId, minPrice);
            }
          }
        },
        error: (error) => {
          console.error(`Error loading price for item ${itemId}:`, error);
        }
      });
  }

  getItemPrice(itemId: number): number | null {
    return this.itemPrices.get(itemId) || null;
  }

  formatPrice(price: number): string {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  truncateDescription(description: string | undefined, maxLength: number = 50): string {
    if (!description) {
      return 'Delicious food item with great taste.';
    }
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength).trim() + '...';
  }

  // Slider methods
  getSliderImageUrl(imagePath: string): string {
    const apiUrl = 'http://localhost:5071';
    const fullUrl = `${apiUrl}${imagePath}`;
    console.log('Slider image URL:', fullUrl);
    return fullUrl;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderImages.length;
    this.resetSliderInterval();
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
    this.resetSliderInterval();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.resetSliderInterval();
  }

  startSlider(): void {
    this.resetSliderInterval();
  }

  stopSlider(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
      this.sliderInterval = null;
    }
  }

  private resetSliderInterval(): void {
    this.stopSlider();
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, this.sliderIntervalTime);
  }

  // Category methods
  selectCategory(categoryId: number | null): void {
    this.isScrolling = true;
    
    if (categoryId === null) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.isScrolling = false;
        this.activeCategoryId = null;
      }, 1000);
    } else {
      // Scroll to category section
      setTimeout(() => {
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
          const offset = 120; // Account for sticky header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            this.isScrolling = false;
            this.activeCategoryId = categoryId;
          }, 1000);
        } else {
          this.isScrolling = false;
        }
      }, 100);
    }
  }

  setupScrollSpy(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }
  }

  onScroll(): void {
    if (this.isScrolling) return;
    
    const scrollY = window.scrollY || window.pageYOffset;
    const offset = 200; // Offset for sticky header
    
    // Check if we're at the top
    if (scrollY < 100) {
      this.activeCategoryId = null;
      this.categoryService.setActiveCategoryId(null);
      return;
    }
    
    // Find which section is currently in view
    let currentSection: number | null = null;
    
    for (let i = 0; i < this.categorySections.length; i++) {
      const section = this.categorySections[i];
      const element = document.getElementById(`category-${section.category.id}`);
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        
        // Check if section is in view (with offset)
        if (scrollY + offset >= elementTop - 50) {
          currentSection = section.category.id;
        }
      }
    }
    
    if (currentSection !== null && this.activeCategoryId !== currentSection) {
      this.activeCategoryId = currentSection;
      this.categoryService.setActiveCategoryId(currentSection);
    } else if (currentSection === null && this.activeCategoryId !== null) {
      this.activeCategoryId = null;
      this.categoryService.setActiveCategoryId(null);
    }
  }

  getCategoryImageUrl(imageUrl?: string): string {
    return this.categoryService.getImageUrl(imageUrl);
  }

  scrollCategories(direction: 'left' | 'right'): void {
    const container = document.querySelector('.category-tabs-container');
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}

