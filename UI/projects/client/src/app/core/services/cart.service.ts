import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '@models/menu-item.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<CartItem[]>;
  public cartItems$: Observable<CartItem[]>;
  private readonly CART_STORAGE_KEY = 'cart_items';

  constructor(private storageService: StorageService) {
    const savedCart = this.storageService.getObject<CartItem[]>(this.CART_STORAGE_KEY) || [];
    this.cartItemsSubject = new BehaviorSubject<CartItem[]>(savedCart);
    this.cartItems$ = this.cartItemsSubject.asObservable();
  }

  /**
   * Get current cart items
   */
  get cartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  /**
   * Get cart item count
   */
  get cartItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Get cart total
   */
  get cartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  /**
   * Add item to cart
   */
  addToCart(item: CartItem): void {
    const currentCart = [...this.cartItems];
    const existingItemIndex = currentCart.findIndex(
      cartItem =>
        cartItem.menuItemId === item.menuItemId &&
        cartItem.portionId === item.portionId &&
        cartItem.portionDetailId === item.portionDetailId
    );

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      currentCart[existingItemIndex].quantity += item.quantity;
    } else {
      // Add new item
      currentCart.push(item);
    }

    this.updateCart(currentCart);
  }

  /**
   * Remove item from cart
   */
  removeFromCart(menuItemId: number, portionId: number, portionDetailId: number): void {
    const currentCart = this.cartItems.filter(
      item =>
        !(item.menuItemId === menuItemId &&
          item.portionId === portionId &&
          item.portionDetailId === portionDetailId)
    );
    this.updateCart(currentCart);
  }

  /**
   * Update item quantity
   */
  updateQuantity(menuItemId: number, portionId: number, portionDetailId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(menuItemId, portionId, portionDetailId);
      return;
    }

    const currentCart = this.cartItems.map(item => {
      if (
        item.menuItemId === menuItemId &&
        item.portionId === portionId &&
        item.portionDetailId === portionDetailId
      ) {
        return { ...item, quantity };
      }
      return item;
    });

    this.updateCart(currentCart);
  }

  /**
   * Clear cart
   */
  clearCart(): void {
    this.updateCart([]);
  }

  /**
   * Update cart and persist to storage
   */
  private updateCart(cart: CartItem[]): void {
    this.cartItemsSubject.next(cart);
    this.storageService.setObject(this.CART_STORAGE_KEY, cart);
  }
}

