import {
  MenuItemService
} from "./chunk-DAG6DS4M.js";
import {
  CartService
} from "./chunk-VBB7B4UY.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-3PINP6LG.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-7V4CR2SO.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NotificationService,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/features/checkout/checkout.component.ts
function CheckoutComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " Full name is required ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " Valid mobile number is required ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " Valid email address is required ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1, " Address is required ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275element(2, "img", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "h5", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 54)(11, "div", 55)(12, "button", 56);
    \u0275\u0275listener("click", function CheckoutComponent_div_63_Template_button_click_12_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, -1));
    });
    \u0275\u0275element(13, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 58);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 59);
    \u0275\u0275listener("click", function CheckoutComponent_div_63_Template_button_click_16_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r2, 1));
    });
    \u0275\u0275element(17, "i", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 61);
    \u0275\u0275listener("click", function CheckoutComponent_div_63_Template_button_click_18_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeFromCart(item_r2));
    });
    \u0275\u0275element(19, "i", 62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getImageUrl(item_r2.menuItemImage), \u0275\u0275sanitizeUrl)("alt", item_r2.menuItemName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.menuItemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.portionName, " - ", item_r2.portionDetailName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(item_r2.price * item_r2.quantity));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", item_r2.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.quantity);
  }
}
var CheckoutComponent = class _CheckoutComponent {
  fb;
  cartService;
  menuItemService;
  notificationService;
  router;
  checkoutForm;
  cartItems = [];
  selectedPaymentMethod = "cash";
  deliveryCharges = 300;
  // Fixed delivery charges
  constructor(fb, cartService, menuItemService, notificationService, router) {
    this.fb = fb;
    this.cartService = cartService;
    this.menuItemService = menuItemService;
    this.notificationService = notificationService;
    this.router = router;
    this.initForm();
  }
  ngOnInit() {
    this.loadCartItems();
    if (this.cartItems.length === 0) {
      this.notificationService.warning("Your cart is empty");
      this.router.navigate(["/menu"]);
    }
  }
  initForm() {
    this.checkoutForm = this.fb.group({
      fullName: ["", [Validators.required]],
      mobileNumber: ["", [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      emailAddress: ["", [Validators.email]],
      address: ["", [Validators.required]],
      specialInstructions: [""]
    });
  }
  loadCartItems() {
    this.cartItems = this.cartService.cartItems;
  }
  getImageUrl(imageUrl) {
    return this.menuItemService.getImageUrl(imageUrl);
  }
  updateQuantity(item, change) {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      this.cartService.updateQuantity(item.menuItemId, item.portionId, item.portionDetailId, newQuantity);
      this.loadCartItems();
    }
  }
  removeFromCart(item) {
    this.cartService.removeFromCart(item.menuItemId, item.portionId, item.portionDetailId);
    this.loadCartItems();
    if (this.cartItems.length === 0) {
      this.router.navigate(["/menu"]);
    }
  }
  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  getDeliveryCharges() {
    return this.deliveryCharges;
  }
  getGrandTotal() {
    return this.getSubtotal() + this.getDeliveryCharges();
  }
  formatPrice(price) {
    return `Rs. ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  selectPaymentMethod(method) {
    this.selectedPaymentMethod = method;
  }
  onPlaceOrder() {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      this.notificationService.error("Please fill in all required fields");
      return;
    }
    if (this.cartItems.length === 0) {
      this.notificationService.error("Your cart is empty");
      return;
    }
    const orderData = __spreadProps(__spreadValues({}, this.checkoutForm.value), {
      paymentMethod: this.selectedPaymentMethod,
      cartItems: this.cartItems,
      subtotal: this.getSubtotal(),
      deliveryCharges: this.getDeliveryCharges(),
      grandTotal: this.getGrandTotal()
    });
    console.log("Order Data:", orderData);
    this.notificationService.success("Order placed successfully!");
  }
  isFieldInvalid(fieldName) {
    const field = this.checkoutForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  static \u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(MenuItemService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 96, vars: 22, consts: [[1, "checkout-container"], [1, "checkout-wrapper"], [1, "checkout-form-section"], ["aria-label", "breadcrumb", 1, "breadcrumb-nav"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/menu"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "mb-3"], ["for", "fullName", 1, "form-label"], ["type", "text", "id", "fullName", "formControlName", "fullName", "placeholder", "Enter your name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "mobileNumber", 1, "form-label"], [1, "input-group"], [1, "input-group-text", "country-code"], [1, "flag"], [1, "code"], ["type", "tel", "id", "mobileNumber", "formControlName", "mobileNumber", "placeholder", "Enter your mobile number", 1, "form-control"], ["for", "emailAddress", 1, "form-label"], ["type", "email", "id", "emailAddress", "formControlName", "emailAddress", "placeholder", "Enter your email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-dark", "address-btn"], [1, "mt-3"], ["formControlName", "address", "rows", "3", "placeholder", "Enter your delivery address", 1, "form-control"], ["formControlName", "specialInstructions", "rows", "4", "placeholder", "Add any comment, e.g. about allergies, or delivery instructions here.", 1, "form-control"], [1, "payment-methods"], ["type", "button", 1, "payment-method-btn", 3, "click"], [1, "bi", "bi-check-circle-fill", "text-success"], [1, "bi", "bi-credit-card", "text-muted"], [1, "cart-summary-section"], [1, "cart-title"], [1, "cart-items"], ["class", "cart-item-card", 4, "ngFor", "ngForOf"], [1, "add-more-items"], ["routerLink", "/menu", 1, "add-more-link"], [1, "bi", "bi-plus-circle"], [1, "promo-section"], [1, "promo-message"], ["type", "text", "placeholder", "Promo Code", "disabled", "", 1, "form-control"], ["type", "button", "disabled", "", 1, "btn", "btn-outline-secondary"], [1, "order-summary"], [1, "summary-row"], [1, "summary-row", "total-row"], ["type", "button", 1, "btn", "btn-dark", "w-100", "place-order-btn", 3, "click", "disabled"], [1, "invalid-feedback"], [1, "cart-item-card"], [1, "cart-item-image"], ["onerror", "this.src='/assets/i18n/placeholder-food.png'", 3, "src", "alt"], [1, "cart-item-details"], [1, "cart-item-name"], [1, "cart-item-desc"], [1, "cart-item-price"], [1, "cart-item-actions"], [1, "quantity-controls"], ["type", "button", 1, "btn", "btn-sm", "quantity-btn", 3, "click", "disabled"], [1, "bi", "bi-dash"], [1, "quantity"], ["type", "button", 1, "btn", "btn-sm", "quantity-btn", 3, "click"], [1, "bi", "bi-plus"], ["type", "button", "title", "Remove", 1, "btn", "btn-link", "text-danger", "remove-btn", 3, "click"], [1, "bi", "bi-trash"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "ol", 4)(5, "li", 5)(6, "a", 6);
      \u0275\u0275text(7, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "li", 7);
      \u0275\u0275text(9, "Checkout");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onPlaceOrder();
      });
      \u0275\u0275elementStart(11, "div", 9)(12, "h3", 10);
      \u0275\u0275text(13, "Personal Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "label", 12);
      \u0275\u0275text(16, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 13);
      \u0275\u0275template(18, CheckoutComponent_div_18_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 11)(20, "label", 15);
      \u0275\u0275text(21, "Mobile Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16)(23, "span", 17)(24, "span", 18);
      \u0275\u0275text(25, "\u{1F1F5}\u{1F1F0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 19);
      \u0275\u0275text(27, "+92");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 20);
      \u0275\u0275template(29, CheckoutComponent_div_29_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 11)(31, "label", 21);
      \u0275\u0275text(32, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 22);
      \u0275\u0275template(34, CheckoutComponent_div_34_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 9)(36, "h3", 10);
      \u0275\u0275text(37, "Your Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 23);
      \u0275\u0275text(39, " Add / Change Address ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 24);
      \u0275\u0275element(41, "textarea", 25);
      \u0275\u0275template(42, CheckoutComponent_div_42_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 9)(44, "h3", 10);
      \u0275\u0275text(45, "Special Instructions (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "textarea", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 9)(48, "h3", 10);
      \u0275\u0275text(49, "Select Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 27)(51, "button", 28);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_51_listener() {
        return ctx.selectPaymentMethod("cash");
      });
      \u0275\u0275element(52, "i", 29);
      \u0275\u0275elementStart(53, "span");
      \u0275\u0275text(54, "Cash On Delivery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "button", 28);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_55_listener() {
        return ctx.selectPaymentMethod("card");
      });
      \u0275\u0275element(56, "i", 30);
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Credit/Debit Card, JazzCash, Easypaisa");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(59, "div", 31)(60, "h3", 32);
      \u0275\u0275text(61, "Your Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 33);
      \u0275\u0275template(63, CheckoutComponent_div_63_Template, 20, 8, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 35)(65, "a", 36);
      \u0275\u0275element(66, "i", 37);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "+ Add more items");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 38)(70, "p", 39);
      \u0275\u0275text(71, "*To apply Promo Code, please login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 16);
      \u0275\u0275element(73, "input", 40);
      \u0275\u0275elementStart(74, "button", 41);
      \u0275\u0275text(75, "Apply");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 42)(77, "div", 43)(78, "span");
      \u0275\u0275text(79, "Subtotal:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span");
      \u0275\u0275text(81);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 43)(83, "span");
      \u0275\u0275text(84, "Delivery Charges:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 44)(88, "span")(89, "strong");
      \u0275\u0275text(90, "Grand total:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "span")(92, "strong");
      \u0275\u0275text(93);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "button", 45);
      \u0275\u0275listener("click", function CheckoutComponent_Template_button_click_94_listener() {
        return ctx.onPlaceOrder();
      });
      \u0275\u0275text(95, " Place Order ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.checkoutForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("fullName"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("fullName"));
      \u0275\u0275advance(10);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("mobileNumber"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("mobileNumber"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("emailAddress"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("emailAddress"));
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("address"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("address"));
      \u0275\u0275advance(9);
      \u0275\u0275classProp("active", ctx.selectedPaymentMethod === "cash");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.selectedPaymentMethod === "card");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.cartItems);
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate(ctx.formatPrice(ctx.getSubtotal()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatPrice(ctx.getDeliveryCharges()));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatPrice(ctx.getGrandTotal()));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.cartItems.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.checkout-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #f8f9fa;\n  min-height: calc(100vh - 60px);\n}\n.checkout-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n  .checkout-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  margin: 0;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6c757d;\n  text-decoration: none;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f97316;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.checkout-form-section[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  color: #333;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.75rem;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #f97316;\n  box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25);\n}\n.country-code[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-right: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.country-code[_ngcontent-%COMP%]   .flag[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.country-code[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.address-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.payment-method-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  border: 2px solid #dee2e6;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: left;\n  width: 100%;\n}\n.payment-method-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.payment-method-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.payment-method-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f97316;\n  background: #fff5f0;\n}\n.payment-method-btn.active[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: #f0fff4;\n}\n.payment-method-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.cart-summary-section[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  height: fit-content;\n  position: sticky;\n  top: 80px;\n}\n@media (max-width: 1024px) {\n  .cart-summary-section[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.cart-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n.cart-items[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.cart-item-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  background: #f8f9fa;\n}\n.cart-item-card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.cart-item-image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.cart-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cart-item-details[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cart-item-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  color: #333;\n}\n.cart-item-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0;\n}\n.cart-item-price[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #f97316;\n}\n.cart-item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n}\n.quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.25rem;\n}\n.quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #333;\n  padding: 0.25rem 0.5rem;\n}\n.quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f0f0;\n}\n.quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.quantity-controls[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  font-weight: 600;\n  min-width: 2rem;\n  text-align: center;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 1rem;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545 !important;\n}\n.add-more-items[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e9ecef;\n}\n.add-more-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #f97316;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.add-more-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.add-more-link[_ngcontent-%COMP%]:hover {\n  color: #e36310;\n  text-decoration: underline;\n}\n.promo-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e9ecef;\n}\n.promo-section[_ngcontent-%COMP%]   .promo-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n}\n.order-summary[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e9ecef;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n  font-size: 1rem;\n}\n.summary-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.summary-row.total-row[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e9ecef;\n  margin-top: 0.75rem;\n}\n.place-order-btn[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.place-order-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .checkout-form-section[_ngcontent-%COMP%], \n   .cart-summary-section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .checkout-wrapper[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule], template: `<div class="checkout-container">
  <div class="checkout-wrapper">
    
    <!-- Left Section: Checkout Form -->
    <div class="checkout-form-section">
      
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="breadcrumb-nav">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a routerLink="/menu">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Checkout</li>
        </ol>
      </nav>

      <form [formGroup]="checkoutForm" (ngSubmit)="onPlaceOrder()">
        
        <!-- Personal Information -->
        <div class="form-section">
          <h3 class="section-title">Personal Information</h3>
          
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              [class.is-invalid]="isFieldInvalid('fullName')"
              id="fullName"
              formControlName="fullName"
              placeholder="Enter your name"
            />
            <div class="invalid-feedback" *ngIf="isFieldInvalid('fullName')">
              Full name is required
            </div>
          </div>

          <div class="mb-3">
            <label for="mobileNumber" class="form-label">Mobile Number</label>
            <div class="input-group">
              <span class="input-group-text country-code">
                <span class="flag">\u{1F1F5}\u{1F1F0}</span>
                <span class="code">+92</span>
              </span>
              <input
                type="tel"
                class="form-control"
                [class.is-invalid]="isFieldInvalid('mobileNumber')"
                id="mobileNumber"
                formControlName="mobileNumber"
                placeholder="Enter your mobile number"
              />
              <div class="invalid-feedback" *ngIf="isFieldInvalid('mobileNumber')">
                Valid mobile number is required
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="emailAddress" class="form-label">Email Address</label>
            <input
              type="email"
              class="form-control"
              [class.is-invalid]="isFieldInvalid('emailAddress')"
              id="emailAddress"
              formControlName="emailAddress"
              placeholder="Enter your email address"
            />
            <div class="invalid-feedback" *ngIf="isFieldInvalid('emailAddress')">
              Valid email address is required
            </div>
          </div>
        </div>

        <!-- Address -->
        <div class="form-section">
          <h3 class="section-title">Your Address</h3>
          <button type="button" class="btn btn-dark address-btn">
            Add / Change Address
          </button>
          <div class="mt-3">
            <textarea
              class="form-control"
              [class.is-invalid]="isFieldInvalid('address')"
              formControlName="address"
              rows="3"
              placeholder="Enter your delivery address"
            ></textarea>
            <div class="invalid-feedback" *ngIf="isFieldInvalid('address')">
              Address is required
            </div>
          </div>
        </div>

        <!-- Special Instructions -->
        <div class="form-section">
          <h3 class="section-title">Special Instructions (Optional)</h3>
          <textarea
            class="form-control"
            formControlName="specialInstructions"
            rows="4"
            placeholder="Add any comment, e.g. about allergies, or delivery instructions here."
          ></textarea>
        </div>

        <!-- Payment Method -->
        <div class="form-section">
          <h3 class="section-title">Select Payment Method</h3>
          <div class="payment-methods">
            <button
              type="button"
              class="payment-method-btn"
              [class.active]="selectedPaymentMethod === 'cash'"
              (click)="selectPaymentMethod('cash')"
            >
              <i class="bi bi-check-circle-fill text-success"></i>
              <span>Cash On Delivery</span>
            </button>
            <button
              type="button"
              class="payment-method-btn"
              [class.active]="selectedPaymentMethod === 'card'"
              (click)="selectPaymentMethod('card')"
            >
              <i class="bi bi-credit-card text-muted"></i>
              <span>Credit/Debit Card, JazzCash, Easypaisa</span>
            </button>
          </div>
        </div>

      </form>
    </div>

    <!-- Right Section: Cart Summary -->
    <div class="cart-summary-section">
      <h3 class="cart-title">Your Cart</h3>
      
      <div class="cart-items">
        <div *ngFor="let item of cartItems" class="cart-item-card">
          <div class="cart-item-image">
            <img
              [src]="getImageUrl(item.menuItemImage)"
              [alt]="item.menuItemName"
              onerror="this.src='/assets/i18n/placeholder-food.png'"
            />
          </div>
          <div class="cart-item-details">
            <h5 class="cart-item-name">{{ item.menuItemName }}</h5>
            <p class="cart-item-desc">{{ item.portionName }} - {{ item.portionDetailName }}</p>
            <div class="cart-item-price">{{ formatPrice(item.price * item.quantity) }}</div>
            
            <div class="cart-item-actions">
              <div class="quantity-controls">
                <button
                  type="button"
                  class="btn btn-sm quantity-btn"
                  (click)="updateQuantity(item, -1)"
                  [disabled]="item.quantity <= 1"
                >
                  <i class="bi bi-dash"></i>
                </button>
                <span class="quantity">{{ item.quantity }}</span>
                <button
                  type="button"
                  class="btn btn-sm quantity-btn"
                  (click)="updateQuantity(item, 1)"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
              <button
                type="button"
                class="btn btn-link text-danger remove-btn"
                (click)="removeFromCart(item)"
                title="Remove"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Add More Items Link -->
      <div class="add-more-items">
        <a routerLink="/menu" class="add-more-link">
          <i class="bi bi-plus-circle"></i>
          <span>+ Add more items</span>
        </a>
      </div>

      <!-- Promo Code -->
      <div class="promo-section">
        <p class="promo-message">*To apply Promo Code, please login</p>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Promo Code"
            disabled
          />
          <button class="btn btn-outline-secondary" type="button" disabled>Apply</button>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="order-summary">
        <div class="summary-row">
          <span>Subtotal:</span>
          <span>{{ formatPrice(getSubtotal()) }}</span>
        </div>
        <div class="summary-row">
          <span>Delivery Charges:</span>
          <span>{{ formatPrice(getDeliveryCharges()) }}</span>
        </div>
        <div class="summary-row total-row">
          <span><strong>Grand total:</strong></span>
          <span><strong>{{ formatPrice(getGrandTotal()) }}</strong></span>
        </div>
      </div>

      <!-- Place Order Button -->
      <button
        type="button"
        class="btn btn-dark w-100 place-order-btn"
        (click)="onPlaceOrder()"
        [disabled]="cartItems.length === 0"
      >
        Place Order
      </button>
    </div>

  </div>
</div>

`, styles: ["/* projects/client/src/app/features/checkout/checkout.component.scss */\n.checkout-container {\n  padding: 2rem;\n  background: #f8f9fa;\n  min-height: calc(100vh - 60px);\n}\n.checkout-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n@media (max-width: 1024px) {\n  .checkout-wrapper {\n    grid-template-columns: 1fr;\n  }\n}\n.breadcrumb-nav {\n  margin-bottom: 2rem;\n}\n.breadcrumb-nav .breadcrumb {\n  background: transparent;\n  padding: 0;\n  margin: 0;\n}\n.breadcrumb-nav .breadcrumb .breadcrumb-item a {\n  color: #6c757d;\n  text-decoration: none;\n}\n.breadcrumb-nav .breadcrumb .breadcrumb-item a:hover {\n  color: #f97316;\n}\n.breadcrumb-nav .breadcrumb .breadcrumb-item.active {\n  color: #f97316;\n}\n.checkout-form-section {\n  background: #fff;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.form-section {\n  margin-bottom: 2.5rem;\n}\n.form-section:last-child {\n  margin-bottom: 0;\n}\n.section-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  color: #333;\n}\n.form-label {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.form-control {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.75rem;\n}\n.form-control:focus {\n  border-color: #f97316;\n  box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25);\n}\n.country-code {\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-right: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.country-code .flag {\n  font-size: 1.2rem;\n}\n.country-code .code {\n  font-weight: 500;\n  color: #333;\n}\n.address-btn {\n  width: 100%;\n  padding: 0.75rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n}\n.payment-methods {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.payment-method-btn {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  border: 2px solid #dee2e6;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: left;\n  width: 100%;\n}\n.payment-method-btn i {\n  font-size: 1.5rem;\n}\n.payment-method-btn span {\n  font-weight: 500;\n  color: #333;\n}\n.payment-method-btn:hover {\n  border-color: #f97316;\n  background: #fff5f0;\n}\n.payment-method-btn.active {\n  border-color: #28a745;\n  background: #f0fff4;\n}\n.payment-method-btn.active i {\n  color: #28a745;\n}\n.cart-summary-section {\n  background: #fff;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  height: fit-content;\n  position: sticky;\n  top: 80px;\n}\n@media (max-width: 1024px) {\n  .cart-summary-section {\n    position: static;\n  }\n}\n.cart-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n.cart-items {\n  margin-bottom: 2rem;\n}\n.cart-item-card {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  background: #f8f9fa;\n}\n.cart-item-card:last-child {\n  margin-bottom: 0;\n}\n.cart-item-image {\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.cart-item-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cart-item-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cart-item-name {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  color: #333;\n}\n.cart-item-desc {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin: 0;\n}\n.cart-item-price {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #f97316;\n}\n.cart-item-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n}\n.quantity-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.25rem;\n}\n.quantity-controls .quantity-btn {\n  border: none;\n  background: transparent;\n  color: #333;\n  padding: 0.25rem 0.5rem;\n}\n.quantity-controls .quantity-btn:hover:not(:disabled) {\n  background: #f0f0f0;\n}\n.quantity-controls .quantity-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.quantity-controls .quantity {\n  font-weight: 600;\n  min-width: 2rem;\n  text-align: center;\n}\n.remove-btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 1rem;\n}\n.remove-btn:hover {\n  color: #dc3545 !important;\n}\n.add-more-items {\n  margin-bottom: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e9ecef;\n}\n.add-more-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #f97316;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.add-more-link i {\n  font-size: 1.2rem;\n}\n.add-more-link:hover {\n  color: #e36310;\n  text-decoration: underline;\n}\n.promo-section {\n  margin-bottom: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e9ecef;\n}\n.promo-section .promo-message {\n  font-size: 0.875rem;\n  color: #6c757d;\n  margin-bottom: 0.75rem;\n}\n.order-summary {\n  margin-bottom: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #e9ecef;\n}\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n  font-size: 1rem;\n}\n.summary-row:last-child {\n  margin-bottom: 0;\n}\n.summary-row.total-row {\n  font-size: 1.2rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e9ecef;\n  margin-top: 0.75rem;\n}\n.place-order-btn {\n  padding: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.place-order-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .checkout-container {\n    padding: 1rem;\n  }\n  .checkout-form-section,\n  .cart-summary-section {\n    padding: 1.5rem;\n  }\n  .checkout-wrapper {\n    gap: 1.5rem;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: CartService }, { type: MenuItemService }, { type: NotificationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout.component.ts", lineNumber: 17 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-SR6ISKGD.js.map
