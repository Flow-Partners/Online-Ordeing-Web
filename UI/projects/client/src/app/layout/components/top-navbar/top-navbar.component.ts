import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { CartService } from '@core/services/cart.service';
import { User } from '@models/user.model';
import { CartItem } from '@models/menu-item.model';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ClickOutsideDirective],
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit, OnDestroy {
  @Output() toggleSidebar = new EventEmitter<void>();

  currentUser: User | null = null;
  isUserMenuOpen = false;
  isNotificationOpen = false;
  isCartOpen = false;
  cartItems: CartItem[] = [];
  cartItemCount = 0;
  cartTotal = 0;

  private destroy$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    public cartService: CartService
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
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isNotificationOpen = false;
    this.isCartOpen = false;
  }

  toggleNotifications(): void {
    this.isNotificationOpen = !this.isNotificationOpen;
    this.isUserMenuOpen = false;
    this.isCartOpen = false;
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
    this.isUserMenuOpen = false;
    this.isNotificationOpen = false;
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
    this.isNotificationOpen = false;
    this.isCartOpen = false;
  }

  formatPrice(price: number): string {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  getDeliveryCharges(): number {
    // You can make this configurable or fetch from API
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

