import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '@core/services/cart.service';
import { CartItem } from '@models/menu-item.model';
import { MenuItemService } from '@core/services/menu-item.service';
import { NotificationService } from '@core/services/notification.service';
import { OrderService } from '@core/services/order.service';
import { CustomerAuthService } from '@core/services/customer-auth.service';

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
  
  isPlacingOrder = false;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private menuItemService: MenuItemService,
    private notificationService: NotificationService,
    private router: Router,
    private orderService: OrderService,
    private customerAuthService: CustomerAuthService
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

    // Auto-fill form with logged-in customer information
    this.loadCustomerData();
  }

  loadCustomerData(): void {
    const customer = this.customerAuthService.currentCustomer;
    
    if (customer) {
      // Build full name from firstName and lastName
      const fullName = customer.lastName 
        ? `${customer.firstName} ${customer.lastName}`.trim()
        : customer.firstName;

      // Populate form with customer data
      this.checkoutForm.patchValue({
        fullName: fullName,
        mobileNumber: customer.mobile || customer.phone || '',
        emailAddress: customer.email || ''
      });
    }
  }

  initForm(): void {
    this.checkoutForm = this.fb.group({
      fullName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      emailAddress: ['', [Validators.email]],
      address: ['', [Validators.required]],
      specialInstructions: ['']
    });
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

    if (this.isPlacingOrder) {
      return; // Prevent multiple submissions
    }

    this.isPlacingOrder = true;
    const formValue = this.checkoutForm.value;

    // Parse full name into first and last name
    const nameParts = formValue.fullName.trim().split(' ').filter((part: string) => part.length > 0);
    const firstName = nameParts[0] || formValue.fullName;
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ').trim() : null;

    // Parse address - simple parsing (can be improved)
    // Only include address if it's not empty
    let addressInfo = undefined;
    if (formValue.address && formValue.address.trim().length > 0) {
      const addressParts = formValue.address.split(',');
      const addressLine1 = addressParts[0]?.trim() || formValue.address.trim();
      const city = addressParts.length > 1 
        ? addressParts[addressParts.length - 1]?.trim() || 'Unknown'
        : 'Unknown';
      
      // Only create address object if we have valid data
      if (addressLine1.length > 0 && city.length > 0) {
        const addressLine2 = addressParts.length > 2 ? addressParts.slice(1, -1).join(', ').trim() : '';
        
        addressInfo = {
          addressType: 'Home',
          addressLine1: addressLine1,
          city: city,
          country: 'Pakistan',
          ...(addressLine2 && { addressLine2: addressLine2 }),
          ...(formValue.specialInstructions && formValue.specialInstructions.trim() && { 
            deliveryInstructions: formValue.specialInstructions.trim() 
          })
        };
      }
    }
    
    // Prepare customer info with address - remove undefined values
    const customerInfo: any = {
      firstName: firstName,
      phone: formValue.mobileNumber,
      mobile: formValue.mobileNumber
    };
    
    // Only add lastName if it exists and is not empty
    if (lastName && lastName.length > 0) {
      customerInfo.lastName = lastName;
    }
    
    // Only add email if it exists
    if (formValue.emailAddress && formValue.emailAddress.trim()) {
      customerInfo.email = formValue.emailAddress.trim();
    }
    
    // Only add address if it exists
    if (addressInfo) {
      customerInfo.address = addressInfo;
    }

    // Convert cart items to order items
    const orderItems = this.orderService.convertCartItemsToOrderItems(this.cartItems);

    // Prepare order data - API will create customer if it doesn't exist
    // DO NOT send customerId - only send customerInfo
    const orderData: any = {
      // Explicitly do NOT include customerId - API will create customer from customerInfo
      customerInfo: customerInfo, // Send customer info instead of customerId
      departmentId: this.orderService.getDefaultDepartmentId(),
      ticketTypeId: this.orderService.getDefaultTicketTypeId(),
      orderItems: orderItems,
      exchangeRate: 1,
      taxIncluded: false
    };
    
    // Only add optional fields if they have values
    if (formValue.specialInstructions && formValue.specialInstructions.trim()) {
      orderData.note = formValue.specialInstructions.trim();
    }
    
    if (formValue.fullName && formValue.fullName.trim()) {
      orderData.name = formValue.fullName.trim();
    }

    // Debug log (remove in production)
    console.log('=== PLACING ORDER ===');
    console.log('Order data:', JSON.stringify(orderData, null, 2));
    console.log('Order items:', orderItems);
    console.log('Customer info:', customerInfo);
    console.log('Order items count:', orderItems.length);
    console.log('========================');

    // Place the order - API will handle customer creation
    this.orderService.placeOrder(orderData).subscribe({
      next: (response) => {
        this.isPlacingOrder = false;
        
        if (response.success && response.data) {
          this.notificationService.success(`Order placed successfully! Ticket #${response.data.ticketNumber || response.data.ticketId}`);
          
          // Clear cart
          this.cartService.clearCart();
          
          // Navigate to order confirmation or dashboard
          setTimeout(() => {
            this.router.navigate(['/menu'], { queryParams: { orderPlaced: 'true' } });
          }, 1500);
        } else {
          this.notificationService.error(response.message || 'Failed to place order');
        }
      },
      error: (error) => {
        this.isPlacingOrder = false;
        console.error('=== ORDER PLACEMENT ERROR ===');
        console.error('Full error object:', error);
        console.error('Error.error:', error.error);
        console.error('Error.error.errors:', error.error?.errors);
        if (error.error?.errors) {
          console.error('Errors object keys:', Object.keys(error.error.errors));
          console.error('Errors object full:', JSON.stringify(error.error.errors, null, 2));
        }
        console.error('Error status:', error.status);
        console.error('Error statusText:', error.statusText);
        console.error('============================');
        
        // Extract validation errors if available
        let errorMessage = 'Failed to place order. Please try again.';
        let validationErrors: string[] = [];
        
        if (error.error) {
          // Check if it's an ApiResponse format
          if (error.error.message) {
            errorMessage = error.error.message;
          }
          
          // Check for validation errors in ApiResponse format
          if (error.error.errors && Array.isArray(error.error.errors)) {
            validationErrors = error.error.errors;
            if (validationErrors.length > 0) {
              errorMessage = `Validation failed:\n${validationErrors.join('\n')}`;
              console.error('Validation errors:', validationErrors);
            }
          }
          // Check for validation errors in ASP.NET Core format
          else if (error.error.errors && typeof error.error.errors === 'object') {
            const errorObj = error.error.errors;
            Object.keys(errorObj).forEach(key => {
              const fieldErrors = errorObj[key];
              if (Array.isArray(fieldErrors)) {
                fieldErrors.forEach((err: string) => {
                  validationErrors.push(`${key}: ${err}`);
                });
              } else if (typeof fieldErrors === 'string') {
                validationErrors.push(`${key}: ${fieldErrors}`);
              }
            });
            
            if (validationErrors.length > 0) {
              errorMessage = `Validation errors:\n${validationErrors.join('\n')}`;
              console.error('Validation errors:', validationErrors);
            }
          }
          
          // Fallback to title or message
          if (validationErrors.length === 0) {
            errorMessage = error.error.message || error.error.title || errorMessage;
          }
        } else {
          errorMessage = error.message || errorMessage;
        }
        
        // Show error notification
        if (validationErrors.length > 0) {
          // Show first few validation errors
          const displayMessage = validationErrors.length > 3 
            ? `${validationErrors.slice(0, 3).join(', ')}... (${validationErrors.length} total errors)`
            : validationErrors.join(', ');
          this.notificationService.error(displayMessage);
        } else {
          this.notificationService.error(errorMessage);
        }
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.checkoutForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}

