import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '@core/services/cart.service';
import { CartItem } from '@models/menu-item.model';
import { MenuItemService } from '@core/services/menu-item.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  cartItems: CartItem[] = [];
  selectedPaymentMethod: 'cash' | 'card' = 'cash';
  deliveryCharges = 300; // Fixed delivery charges
  
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private menuItemService: MenuItemService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadCartItems();
    
    // Redirect if cart is empty
    if (this.cartItems.length === 0) {
      this.notificationService.warning('Your cart is empty');
      this.router.navigate(['/menu']);
    }
  }

  initForm(): void {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      emailAddress: ['', [Validators.email]],
      address: ['', [Validators.required]],
      specialInstructions: ['']
    });
  }

  onMobileNumberKeyPress(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow only numbers (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return;
    }
    // Prevent entering more than 10 digits
    const input = event.target as HTMLInputElement;
    if (input.value.length >= 10) {
      event.preventDefault();
      return;
    }
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.cartItems;
  }

  getImageUrl(imageUrl?: string): string {
    return this.menuItemService.getImageUrl(imageUrl);
  }

  updateQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      this.cartService.updateQuantity(
        item.menuItemId,
        item.portionId,
        item.portionDetailId,
        newQuantity
      );
      this.loadCartItems();
    }
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(
      item.menuItemId,
      item.portionId,
      item.portionDetailId
    );
    this.loadCartItems();
    
    if (this.cartItems.length === 0) {
      this.router.navigate(['/menu']);
    }
  }

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getDeliveryCharges(): number {
    return this.deliveryCharges;
  }

  getGrandTotal(): number {
    return this.getSubtotal() + this.getDeliveryCharges();
  }

  formatPrice(price: number): string {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  selectPaymentMethod(method: 'cash' | 'card'): void {
    this.selectedPaymentMethod = method;
  }

  onPlaceOrder(): void {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      this.notificationService.error('Please fill in all required fields');
      return;
    }

    if (this.cartItems.length === 0) {
      this.notificationService.error('Your cart is empty');
      return;
    }

    // TODO: Implement order placement API call
    const orderData = {
      ...this.checkoutForm.value,
      paymentMethod: this.selectedPaymentMethod,
      cartItems: this.cartItems,
      subtotal: this.getSubtotal(),
      deliveryCharges: this.getDeliveryCharges(),
      grandTotal: this.getGrandTotal()
    };

    console.log('Order Data:', orderData);
    this.notificationService.success('Order placed successfully!');
    // this.cartService.clearCart();
    // this.router.navigate(['/order-confirmation']);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.checkoutForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}

