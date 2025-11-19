import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MenuItemService } from '@core/services/menu-item.service';
import { CartService } from '@core/services/cart.service';
import { NotificationService } from '@core/services/notification.service';
import { MenuItem, MenuItemDetail, CartItem } from '@models/menu-item.model';
import { ApiResponse } from '@models/api-response.model';
import { PagedResult } from '@models/menu-item.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [];
  loading = false;
  currentPage = 1;
  pageSize = 12;
  totalPages = 1;
  totalCount = 0;
  searchTerm = '';
  favoriteItems: Set<number> = new Set();
  itemPrices: Map<number, number> = new Map(); // Cache for item prices
  Math = Math; // Expose Math to template
  
  private destroy$ = new Subject<void>();

  constructor(
    private menuItemService: MenuItemService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {
    // Load favorites from storage
    const savedFavorites = localStorage.getItem('favorite_menu_items');
    if (savedFavorites) {
      this.favoriteItems = new Set(JSON.parse(savedFavorites));
    }
  }

  ngOnInit(): void {
    this.loadMenuItems();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMenuItems(): void {
    this.loading = true;
    console.log('Loading menu items...', { page: this.currentPage, limit: this.pageSize, search: this.searchTerm });
    this.menuItemService
      .getMenuItems({
        page: this.currentPage,
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

  addToCart(menuItem: MenuItem): void {
    // First, get the menu item details to access portions and prices
    this.menuItemService
      .getMenuItemById(menuItem.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ApiResponse<MenuItemDetail>) => {
          if (response.success && response.data) {
            const menuItemDetail = response.data;
            
            // If there are portions, we need to show a dialog to select portion
            // For now, let's add the first available portion detail
            if (menuItemDetail.portions && menuItemDetail.portions.length > 0) {
              const firstPortion = menuItemDetail.portions[0];
              if (firstPortion.portionDetails && firstPortion.portionDetails.length > 0) {
                const firstPortionDetail = firstPortion.portionDetails[0];
                
                const cartItem: CartItem = {
                  menuItemId: menuItem.id,
                  menuItemName: menuItem.name,
                  menuItemImage: menuItem.baseImageUrl,
                  portionId: firstPortion.id,
                  portionName: firstPortion.name,
                  portionDetailId: firstPortionDetail.id,
                  portionDetailName: firstPortionDetail.name,
                  price: firstPortionDetail.price,
                  quantity: 1
                };
                
                this.cartService.addToCart(cartItem);
                this.notificationService.success(`${menuItem.name} added to cart!`);
              } else {
                this.notificationService.warning('No portion details available for this item');
              }
            } else {
              this.notificationService.warning('No portions available for this item');
            }
          } else {
            this.notificationService.error('Failed to load menu item details');
          }
        },
        error: (error) => {
          console.error('Error loading menu item details:', error);
          this.notificationService.error('Failed to add item to cart');
        }
      });
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
}

