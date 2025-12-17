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
import { WhatsAppService } from '@core/services/whatsapp.service';

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
    private customerAuthService: CustomerAuthService,
    private whatsappService: WhatsAppService
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
      mobileNumber: ['', [Validators.required, this.mobileNumberValidator]],
      emailAddress: ['', [this.emailValidator]], // Optional - only validate format if provided
      address: ['', [Validators.required]],
      specialInstructions: ['']
    });
  }

  
   
  private mobileNumberValidator(control: { value: string | null | undefined }) {
    if (!control.value) {
      return { required: true };
    }

    // Remove dashes and spaces for validation
    const cleanValue = control.value.replace(/[-\s]/g, '');

    // Check if empty
    if (cleanValue.length === 0) {
      return { required: true };
    }

    // Check if starts with 0
    if (cleanValue.startsWith('0')) {
      return { startsWithZero: true };
    }

    // Check if contains only digits
    if (!/^\d+$/.test(cleanValue)) {
      return { invalidCharacters: true };
    }

    // Check length (should be 10 digits)
    if (cleanValue.length !== 10) {
      return { invalidLength: true, actualLength: cleanValue.length };
    }

    return null; // Valid
  }

  /**
   * Format mobile number as XXX-XXXXXXX
   * Prevents leading zero
   */
  formatMobileNumber(value: string): string {
    // Remove all non-digit characters
    let digits = value.replace(/\D/g, '');

    // Prevent leading zero - remove it if present
    if (digits.startsWith('0')) {
      digits = digits.substring(1);
    }

    // Limit to 10 digits
    const limitedDigits = digits.substring(0, 10);

    // Format as XXX-XXXXXXX
    if (limitedDigits.length <= 3) {
      return limitedDigits;
    } else {
      return `${limitedDigits.substring(0, 3)}-${limitedDigits.substring(3)}`;
    }
  }

  /**
   * Handle mobile number input
   */
  onMobileNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const formatted = this.formatMobileNumber(input.value);
    
    // Update form control value without triggering validation errors
    this.checkoutForm.patchValue({ mobileNumber: formatted }, { emitEvent: false });
    
    // Set the input value directly to maintain cursor position
    input.value = formatted;
  }

  /**
   * Custom email validator - only validates format if email is provided
   */
  private emailValidator(control: { value: string | null | undefined }) {
    if (!control.value || control.value.trim() === '') {
      return null; // Empty is valid (optional field)
    }
    // Validate email format if provided
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(control.value) ? null : { email: true };
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
    const nameParts = formValue.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || undefined;

    // Parse address - try to extract city (last part after comma, or use default)
    const addressParts = formValue.address.split(',').map((part: string) => part.trim());
    const city = addressParts.length > 1 ? addressParts[addressParts.length - 1] : 'Unknown';

    // Clean mobile number (remove dashes) before sending to API
    const cleanMobileNumber = formValue.mobileNumber.replace(/[-\s]/g, '');

    // Prepare customer info
    const customerInfo = {
      firstName: firstName,
      lastName: lastName,
      email: formValue.emailAddress || undefined,
      phone: cleanMobileNumber,
      mobile: cleanMobileNumber,
      address: {
        addressLine1: formValue.address,
        city: city,
        country: 'Pakistan',
        deliveryInstructions: formValue.specialInstructions || undefined
      }
    };

    // Convert cart items to order items
    const orderItems = this.orderService.convertCartItemsToOrderItems(this.cartItems);

    // Prepare order data
    const orderData = {
      customerInfo: customerInfo,
      departmentId: this.orderService.getDefaultDepartmentId(),
      ticketTypeId: this.orderService.getDefaultTicketTypeId(),
      orderItems: orderItems,
      note: formValue.specialInstructions || undefined,
      exchangeRate: 1,
      taxIncluded: false,
      name: `Order from ${formValue.fullName}`
    };

    debugger;
    // Place order via API
    this.orderService.placeOrder(orderData).subscribe({
      next: (response) => {
        // Keep button disabled until we're done processing
        if (response.success && response.data) {
          const orderResponse = response.data;
          
          // Format order items for WhatsApp message
          const whatsappOrderItems = orderResponse.orderItems.map(item => ({
            name: item.menuItemName,
            portion: item.portionName || 'Standard',
            portionDetail: '',
            quantity: item.quantity,
            price: item.price
          }));

          // Prepare order details for WhatsApp with ticket number
          const orderDetails = {
            ticketNumber: orderResponse.ticketNumber || `#${orderResponse.ticketId}`,
            customerName: formValue.fullName,
            mobileNumber: cleanMobileNumber,
            email: formValue.emailAddress || undefined,
            address: formValue.address,
            specialInstructions: formValue.specialInstructions || undefined,
            paymentMethod: this.selectedPaymentMethod === 'cash' ? 'Cash On Delivery' : 'Credit/Debit Card, JazzCash, Easypaisa',
            items: whatsappOrderItems,
            subtotal: orderResponse.totalAmount,
            deliveryCharges: this.getDeliveryCharges(),
            grandTotal: orderResponse.totalAmount + this.getDeliveryCharges()
          };

          // Format and send WhatsApp message
          const message = this.whatsappService.formatOrderMessage(orderDetails);
          this.whatsappService.openWhatsApp(message);

          // Show success notification
          this.notificationService.success(`Order placed successfully! Ticket: ${orderResponse.ticketNumber || orderResponse.ticketId}`);
          
          // Clear cart
          this.cartService.clearCart();
          
          // Navigate after a short delay (button stays disabled during this time)
          setTimeout(() => {
            this.isPlacingOrder = false;
            this.router.navigate(['/menu'], { queryParams: { orderPlaced: 'success', ticketNumber: orderResponse.ticketNumber || orderResponse.ticketId } });
          }, 2000);
        } else {
          // Re-enable button on error
          this.isPlacingOrder = false;
          this.notificationService.error(response.message || 'Failed to place order. Please try again.');
        }
      },
      error: (error) => {
        // Re-enable button on error
        this.isPlacingOrder = false;
        console.error('Error placing order:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to place order. Please try again.';
        this.notificationService.error(errorMessage);
      }
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.checkoutForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  /**
   * Get mobile number error message
   */
  getMobileNumberError(): string {
    const field = this.checkoutForm.get('mobileNumber');
    if (!field || !field.errors) {
      return '';
    }

    if (field.errors['required']) {
      return 'Mobile number is required';
    }
    if (field.errors['startsWithZero']) {
      return 'Mobile number cannot start with 0';
    }
    if (field.errors['invalidCharacters']) {
      return 'Mobile number must contain only digits';
    }
    if (field.errors['invalidLength']) {
      const actualLength = field.errors['actualLength'];
      return `Mobile number must be 10 digits (currently ${actualLength})`;
    }

    return 'Please enter a valid mobile number';
  }
}

