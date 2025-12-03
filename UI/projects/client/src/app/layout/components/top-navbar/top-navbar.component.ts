import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { CartService } from '@core/services/cart.service';
import { CategoryService } from '@core/services/category.service';
import { User } from '@models/user.model';
import { CartItem } from '@models/menu-item.model';
import { CategoryListViewModel } from '@models/category.model';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { Subject, takeUntil } from 'rxjs';
import { ApiResponse } from '@models/api-response.model';
import { PagedResult } from '@models/menu-item.model';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ClickOutsideDirective],
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit, OnDestroy {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() categorySelected = new EventEmitter<number | null>();

  currentUser: User | null = null;
  isUserMenuOpen = false;
  isCartOpen = false;
  isLocationDropdownOpen = false;
  cartItems: CartItem[] = [];
  cartItemCount = 0;
  cartTotal = 0;
  searchTerm = '';
  
  // Categories for header tabs
  categories: CategoryListViewModel[] = [];
  selectedCategoryId: number | null = null;
  
  // Location info
  deliveryAddress = 'Ahmed Avenue, Lahore';
  estimatedTime = '~ eta 45 min';

  private destroy$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    public cartService: CartService,
    private categoryService: CategoryService
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    // Subscribe to cart changes
    this.cartService.cartItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        this.cartItems = items;
        this.cartItemCount = this.cartService.cartItemCount;
        this.cartTotal = this.cartService.cartTotal;
      });

    // Load categories for header tabs
    this.loadCategories();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCategories(): void {
    this.categoryService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ApiResponse<PagedResult<CategoryListViewModel>>) => {
          if (response.success && response.data) {
            const data = response.data as any;
            this.categories = (data.items || data.Items || []).filter((cat: CategoryListViewModel) => cat.isVisible);
            // Sort by display order
            this.categories.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
          }
        },
        error: (error) => {
          console.error('Error loading categories:', error);
        }
      });
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isCartOpen = false;
    this.isLocationDropdownOpen = false;
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
    this.isUserMenuOpen = false;
    this.isLocationDropdownOpen = false;
  }

  toggleLocationDropdown(): void {
    this.isLocationDropdownOpen = !this.isLocationDropdownOpen;
    this.isUserMenuOpen = false;
    this.isCartOpen = false;
  }

  selectCategory(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
  }

  onSearch(): void {
    // Emit search event or navigate to search results
    console.log('Searching for:', this.searchTerm);
  }

  onLogout(): void {
    this.authService.logout();
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item.menuItemId, item.portionId, item.portionDetailId);
  }

  updateQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    this.cartService.updateQuantity(item.menuItemId, item.portionId, item.portionDetailId, newQuantity);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  closeDropdowns(): void {
    this.isUserMenuOpen = false;
    this.isCartOpen = false;
    this.isLocationDropdownOpen = false;
  }

  formatPrice(price: number): string {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  getDeliveryCharges(): number {
    return 200;
  }

  getSubtotal(): number {
    return this.cartTotal;
  }

  getTotal(): number {
    return this.cartTotal + this.getDeliveryCharges();
  }

  getImageUrl(imageUrl?: string): string {
    if (!imageUrl) {
      return '/assets/i18n/placeholder-food.png';
    }
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    }
    const apiUrl = 'http://localhost:5071';
    return `${apiUrl}${imageUrl}`;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = '/assets/i18n/placeholder-food.png';
    }
  }
}
