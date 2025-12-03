import {
  MenuItemService
} from "./chunk-DAG6DS4M.js";
import {
  CategoryService
} from "./chunk-Q72EET2Q.js";
import {
  CartService
} from "./chunk-VBB7B4UY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3PINP6LG.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-7V4CR2SO.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  NotificationService,
  Output,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/shared/components/product-popup-simple/product-popup-simple.component.ts
function ProductPopupSimpleComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.menuItemDetail.description);
  }
}
var ProductPopupSimpleComponent = class _ProductPopupSimpleComponent {
  menuItemService;
  menuItemDetail;
  close = new EventEmitter();
  addToCart = new EventEmitter();
  quantity = 1;
  selectedPortion = null;
  selectedPortionDetail = null;
  totalPrice = 0;
  constructor(menuItemService) {
    this.menuItemService = menuItemService;
  }
  ngOnInit() {
    if (this.menuItemDetail.portions && this.menuItemDetail.portions.length > 0) {
      this.selectedPortion = this.menuItemDetail.portions[0];
      if (this.selectedPortion.portionDetails && this.selectedPortion.portionDetails.length > 0) {
        this.selectedPortionDetail = this.selectedPortion.portionDetails[0];
        this.totalPrice = this.selectedPortionDetail.price;
      }
    }
    this.updateTotalPrice();
  }
  onClose() {
    this.close.emit();
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }
  increaseQuantity() {
    this.quantity++;
    this.updateTotalPrice();
  }
  updateTotalPrice() {
    if (this.selectedPortionDetail) {
      this.totalPrice = this.selectedPortionDetail.price * this.quantity;
    }
  }
  onAddToCart() {
    if (this.selectedPortion && this.selectedPortionDetail) {
      const cartItem = {
        menuItemId: this.menuItemDetail.id,
        menuItemName: this.menuItemDetail.name,
        menuItemImage: this.menuItemDetail.baseImageUrl,
        portionId: this.selectedPortion.id,
        portionName: this.selectedPortion.name,
        portionDetailId: this.selectedPortionDetail.id,
        portionDetailName: this.selectedPortionDetail.name,
        price: this.selectedPortionDetail.price,
        quantity: this.quantity
      };
      this.addToCart.emit(cartItem);
    }
  }
  getImageUrl(imageUrl) {
    return this.menuItemService.getImageUrl(imageUrl);
  }
  formatPrice(price) {
    return `Rs. ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  static \u0275fac = function ProductPopupSimpleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductPopupSimpleComponent)(\u0275\u0275directiveInject(MenuItemService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductPopupSimpleComponent, selectors: [["app-product-popup-simple"]], inputs: { menuItemDetail: "menuItemDetail" }, outputs: { close: "close", addToCart: "addToCart" }, decls: 49, vars: 7, consts: [[1, "popup-overlay", 3, "click"], [1, "popup-container", 3, "click"], ["type", "button", 1, "close-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "popup-header"], [1, "header-left"], [1, "logo-section"], [1, "logo-circles"], [1, "circle"], [1, "logo-text"], [1, "logo-title"], [1, "logo-subtitle"], [1, "bi", "bi-mortarboard-fill", "logo-icon"], [1, "header-right"], [1, "deal-title"], [1, "deal-title-white"], [1, "deal-title-blue"], [1, "deal-info"], [1, "deal-number"], [1, "deal-description"], [4, "ngIf"], [1, "deal-price-section"], [1, "deal-label"], [1, "deal-price"], [1, "food-images"], [1, "food-image", 3, "src", "alt"], [1, "bottom-bar"], [1, "quantity-selector"], ["type", "button", 1, "qty-btn", "minus", 3, "click"], [1, "qty-value"], ["type", "button", 1, "qty-btn", "plus", 3, "click"], [1, "total-price"], ["type", "button", 1, "add-to-cart-btn", 3, "click"]], template: function ProductPopupSimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ProductPopupSimpleComponent_Template_div_click_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ProductPopupSimpleComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "button", 2);
      \u0275\u0275listener("click", function ProductPopupSimpleComponent_Template_button_click_2_listener() {
        return ctx.onClose();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "span", 8)(9, "span", 8)(10, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "h2", 10);
      \u0275\u0275text(13, "M21");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 11);
      \u0275\u0275text(15, "KITCHEN");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "h1", 14)(19, "span", 15);
      \u0275\u0275text(20, "WINTER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 16);
      \u0275\u0275text(22, "DEALS");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "div", 17)(24, "div", 18);
      \u0275\u0275text(25, "Deal-03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19)(27, "p");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, ProductPopupSimpleComponent_p_29_Template, 2, 1, "p", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 22);
      \u0275\u0275text(32, "Winter Deal 3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 23);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 24);
      \u0275\u0275element(36, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 26)(38, "div", 27)(39, "button", 28);
      \u0275\u0275listener("click", function ProductPopupSimpleComponent_Template_button_click_39_listener() {
        return ctx.decreaseQuantity();
      });
      \u0275\u0275text(40, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 29);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 30);
      \u0275\u0275listener("click", function ProductPopupSimpleComponent_Template_button_click_43_listener() {
        return ctx.increaseQuantity();
      });
      \u0275\u0275text(44, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 31);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 32);
      \u0275\u0275listener("click", function ProductPopupSimpleComponent_Template_button_click_47_listener() {
        return ctx.onAddToCart();
      });
      \u0275\u0275text(48, " Add To Cart ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275textInterpolate(ctx.menuItemDetail.name);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.menuItemDetail.description);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatPrice((ctx.selectedPortionDetail == null ? null : ctx.selectedPortionDetail.price) || 0));
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.getImageUrl(ctx.menuItemDetail.baseImageUrl), \u0275\u0275sanitizeUrl)("alt", ctx.menuItemDetail.name);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.quantity);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.formatPrice(ctx.totalPrice));
    }
  }, dependencies: [CommonModule, NgIf, FormsModule], styles: ["\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  backdrop-filter: blur(0px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 2rem;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_fadeInOverlay 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInOverlay {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    backdrop-filter: blur(0px);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n    backdrop-filter: blur(5px);\n  }\n}\n.popup-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n  border-radius: 16px;\n  max-width: 600px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  opacity: 0;\n  transform: scale(0.9) translateY(20px);\n  animation: _ngcontent-%COMP%_slideInPopup 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_slideInPopup {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.popup-header[_ngcontent-%COMP%], \n.deal-info[_ngcontent-%COMP%], \n.food-images[_ngcontent-%COMP%], \n.bottom-bar[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInContent 0.5s ease-out 0.3s both;\n}\n@keyframes _ngcontent-%COMP%_fadeInContent {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: transparent;\n  border: none;\n  color: #ffffff;\n  font-size: 1.5rem;\n  cursor: pointer;\n  z-index: 10;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #000000 0%,\n      #1a1a1a 100%);\n  border-bottom: 2px solid #333333;\n}\n.popup-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.popup-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-circles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.popup-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: #ffd700;\n  border-radius: 50%;\n  display: block;\n}\n.popup-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #ffd700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1;\n}\n.popup-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #ffffff;\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.popup-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #ffd700;\n}\n.popup-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .deal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.popup-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .deal-title[_ngcontent-%COMP%]   .deal-title-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.popup-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .deal-title[_ngcontent-%COMP%]   .deal-title-blue[_ngcontent-%COMP%] {\n  color: #4a9eff;\n}\n.deal-info[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.deal-info[_ngcontent-%COMP%]   .deal-number[_ngcontent-%COMP%] {\n  color: #4a9eff;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.deal-info[_ngcontent-%COMP%]   .deal-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: 0.25rem 0;\n  font-size: 1.1rem;\n  line-height: 1.4;\n}\n.deal-info[_ngcontent-%COMP%]   .deal-price-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-top: 0.5rem;\n}\n.deal-info[_ngcontent-%COMP%]   .deal-price-section[_ngcontent-%COMP%]   .deal-label[_ngcontent-%COMP%] {\n  color: #4a9eff;\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n}\n.deal-info[_ngcontent-%COMP%]   .deal-price-section[_ngcontent-%COMP%]   .deal-price[_ngcontent-%COMP%] {\n  color: #ffd700;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.food-images[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.food-images[_ngcontent-%COMP%]   .food-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 300px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.bottom-bar[_ngcontent-%COMP%] {\n  background-color: #2d2d2d;\n  padding: 1.25rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  border-top: 2px solid #333333;\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background-color: #1a1a1a;\n  padding: 0.5rem;\n  border-radius: 8px;\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%] {\n  background-color: #333333;\n  border: none;\n  color: #ffffff;\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s;\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:hover {\n  background-color: #444444;\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-value[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 600;\n  min-width: 30px;\n  text-align: center;\n}\n.bottom-bar[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  color: #ffffff;\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  background-color: #ff6b35;\n  color: #ffffff;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e55a2b;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .popup-overlay[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .popup-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .popup-header[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .popup-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .deal-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .deal-info[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n  .food-images[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 150px;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n    flex-wrap: wrap;\n  }\n  .bottom-bar[_ngcontent-%COMP%]   .total-price[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 3;\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=product-popup-simple.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductPopupSimpleComponent, [{
    type: Component,
    args: [{ selector: "app-product-popup-simple", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="popup-overlay" (click)="onClose()">\n  <div class="popup-container" (click)="$event.stopPropagation()">\n    <!-- Close Button -->\n    <button class="close-btn" (click)="onClose()" type="button">\n      <i class="bi bi-x-lg"></i>\n    </button>\n\n    <!-- Header -->\n    <div class="popup-header">\n      <div class="header-left">\n        <div class="logo-section">\n          <div class="logo-circles">\n            <span class="circle"></span>\n            <span class="circle"></span>\n            <span class="circle"></span>\n          </div>\n          <div class="logo-text">\n            <h2 class="logo-title">M21</h2>\n            <p class="logo-subtitle">KITCHEN</p>\n          </div>\n          <i class="bi bi-mortarboard-fill logo-icon"></i>\n        </div>\n      </div>\n      <div class="header-right">\n        <h1 class="deal-title">\n          <span class="deal-title-white">WINTER</span>\n          <span class="deal-title-blue">DEALS</span>\n        </h1>\n      </div>\n    </div>\n\n    <!-- Deal Info -->\n    <div class="deal-info">\n      <div class="deal-number">Deal-03</div>\n      <div class="deal-description">\n        <p>{{ menuItemDetail.name }}</p>\n        <p *ngIf="menuItemDetail.description">{{ menuItemDetail.description }}</p>\n      </div>\n      <div class="deal-price-section">\n        <div class="deal-label">Winter Deal 3</div>\n        <div class="deal-price">{{ formatPrice(selectedPortionDetail?.price || 0) }}</div>\n      </div>\n    </div>\n\n    <!-- Food Images -->\n    <div class="food-images">\n      <img \n        [src]="getImageUrl(menuItemDetail.baseImageUrl)" \n        [alt]="menuItemDetail.name"\n        class="food-image"\n      />\n    </div>\n\n    <!-- Bottom Bar -->\n    <div class="bottom-bar">\n      <div class="quantity-selector">\n        <button class="qty-btn minus" (click)="decreaseQuantity()" type="button">-</button>\n        <span class="qty-value">{{ quantity }}</span>\n        <button class="qty-btn plus" (click)="increaseQuantity()" type="button">+</button>\n      </div>\n      <div class="total-price">{{ formatPrice(totalPrice) }}</div>\n      <button class="add-to-cart-btn" (click)="onAddToCart()" type="button">\n        Add To Cart\n      </button>\n    </div>\n  </div>\n</div>\n\n', styles: ["/* projects/client/src/app/shared/components/product-popup-simple/product-popup-simple.component.scss */\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  backdrop-filter: blur(0px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 2rem;\n  overflow-y: auto;\n  animation: fadeInOverlay 0.3s ease-out forwards;\n}\n@keyframes fadeInOverlay {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    backdrop-filter: blur(0px);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n    backdrop-filter: blur(5px);\n  }\n}\n.popup-container {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n  border-radius: 16px;\n  max-width: 600px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  opacity: 0;\n  transform: scale(0.9) translateY(20px);\n  animation: slideInPopup 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes slideInPopup {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.popup-header,\n.deal-info,\n.food-images,\n.bottom-bar {\n  animation: fadeInContent 0.5s ease-out 0.3s both;\n}\n@keyframes fadeInContent {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: transparent;\n  border: none;\n  color: #ffffff;\n  font-size: 1.5rem;\n  cursor: pointer;\n  z-index: 10;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #000000 0%,\n      #1a1a1a 100%);\n  border-bottom: 2px solid #333333;\n}\n.popup-header .header-left .logo-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.popup-header .header-left .logo-section .logo-circles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.popup-header .header-left .logo-section .logo-circles .circle {\n  width: 8px;\n  height: 8px;\n  background-color: #ffd700;\n  border-radius: 50%;\n  display: block;\n}\n.popup-header .header-left .logo-section .logo-text .logo-title {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: #ffd700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1;\n}\n.popup-header .header-left .logo-section .logo-text .logo-subtitle {\n  font-size: 0.6rem;\n  color: #ffffff;\n  margin: 0;\n  letter-spacing: 0.5px;\n}\n.popup-header .header-left .logo-section .logo-icon {\n  font-size: 1.2rem;\n  color: #ffd700;\n}\n.popup-header .header-right .deal-title {\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.popup-header .header-right .deal-title .deal-title-white {\n  color: #ffffff;\n}\n.popup-header .header-right .deal-title .deal-title-blue {\n  color: #4a9eff;\n}\n.deal-info {\n  padding: 1.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.deal-info .deal-number {\n  color: #4a9eff;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.deal-info .deal-description p {\n  color: #ffffff;\n  margin: 0.25rem 0;\n  font-size: 1.1rem;\n  line-height: 1.4;\n}\n.deal-info .deal-price-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-top: 0.5rem;\n}\n.deal-info .deal-price-section .deal-label {\n  color: #4a9eff;\n  font-size: 0.85rem;\n  margin-bottom: 0.25rem;\n}\n.deal-info .deal-price-section .deal-price {\n  color: #ffd700;\n  font-size: 1.8rem;\n  font-weight: 900;\n}\n.food-images {\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.food-images .food-image {\n  max-width: 100%;\n  max-height: 300px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.bottom-bar {\n  background-color: #2d2d2d;\n  padding: 1.25rem 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  border-top: 2px solid #333333;\n}\n.bottom-bar .quantity-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background-color: #1a1a1a;\n  padding: 0.5rem;\n  border-radius: 8px;\n}\n.bottom-bar .quantity-selector .qty-btn {\n  background-color: #333333;\n  border: none;\n  color: #ffffff;\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s;\n}\n.bottom-bar .quantity-selector .qty-btn:hover {\n  background-color: #444444;\n}\n.bottom-bar .quantity-selector .qty-btn:active {\n  transform: scale(0.95);\n}\n.bottom-bar .quantity-selector .qty-value {\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 600;\n  min-width: 30px;\n  text-align: center;\n}\n.bottom-bar .total-price {\n  flex: 1;\n  text-align: center;\n  color: #ffffff;\n  font-size: 1.3rem;\n  font-weight: 700;\n}\n.bottom-bar .add-to-cart-btn {\n  background-color: #ff6b35;\n  color: #ffffff;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bottom-bar .add-to-cart-btn:hover {\n  background-color: #e55a2b;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);\n}\n.bottom-bar .add-to-cart-btn:active {\n  transform: translateY(0);\n}\n@media (max-width: 768px) {\n  .popup-overlay {\n    padding: 1rem;\n  }\n  .popup-container {\n    max-width: 100%;\n  }\n  .popup-header {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .popup-header .header-right .deal-title {\n    font-size: 1.5rem;\n  }\n  .deal-info {\n    padding: 1rem 1.5rem;\n  }\n  .food-images {\n    padding: 1rem;\n    min-height: 150px;\n  }\n  .bottom-bar {\n    padding: 1rem 1.5rem;\n    flex-wrap: wrap;\n  }\n  .bottom-bar .total-price {\n    width: 100%;\n    order: 3;\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=product-popup-simple.component.css.map */\n"] }]
  }], () => [{ type: MenuItemService }], { menuItemDetail: [{
    type: Input
  }], close: [{
    type: Output
  }], addToCart: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductPopupSimpleComponent, { className: "ProductPopupSimpleComponent", filePath: "src/app/shared/components/product-popup-simple/product-popup-simple.component.ts", lineNumber: 14 });
})();

// projects/client/src/app/shared/components/product-popup-complex/product-popup-complex.component.ts
function ProductPopupComplexComponent_div_17_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function ProductPopupComplexComponent_div_17_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "Selected");
    \u0275\u0275elementEnd();
  }
}
function ProductPopupComplexComponent_div_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label", 41)(2, "input", 42);
    \u0275\u0275listener("change", function ProductPopupComplexComponent_div_17_div_11_Template_input_change_2_listener() {
      const detail_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const portion_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPortionDetail(portion_r2, detail_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const detail_r5 = ctx.$implicit;
    const portion_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.isSelected(portion_r2.id, detail_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "portion-" + portion_r2.id)("value", detail_r5.id)("checked", ctx_r2.isSelected(portion_r2.id, detail_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(detail_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(detail_r5.price));
  }
}
function ProductPopupComplexComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275listener("click", function ProductPopupComplexComponent_div_17_Template_div_click_1_listener() {
      const portion_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePortionCollapse(portion_r2.id));
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "h3", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProductPopupComplexComponent_div_17_span_5_Template, 2, 0, "span", 31)(6, ProductPopupComplexComponent_div_17_span_6_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275element(8, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 35)(10, "div", 36);
    \u0275\u0275template(11, ProductPopupComplexComponent_div_17_div_11_Template, 7, 7, "div", 37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const portion_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(portion_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.hasSelection(portion_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.hasSelection(portion_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-chevron-up", !ctx_r2.isPortionCollapsed(portion_r2.id))("bi-chevron-down", ctx_r2.isPortionCollapsed(portion_r2.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("collapsed", ctx_r2.isPortionCollapsed(portion_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getPortionDetails(portion_r2));
  }
}
function ProductPopupComplexComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "from ");
    \u0275\u0275elementEnd();
  }
}
var ProductPopupComplexComponent = class _ProductPopupComplexComponent {
  menuItemService;
  menuItemDetail;
  close = new EventEmitter();
  addToCart = new EventEmitter();
  quantity = 1;
  portionSelections = /* @__PURE__ */ new Map();
  collapsedPortions = /* @__PURE__ */ new Map();
  instructions = "";
  minPrice = 0;
  totalPrice = 0;
  constructor(menuItemService) {
    this.menuItemService = menuItemService;
  }
  ngOnInit() {
    if (this.menuItemDetail.portions && this.menuItemDetail.portions.length > 0) {
      this.menuItemDetail.portions.forEach((portion) => {
        this.collapsedPortions.set(portion.id, false);
        if (portion.portionDetails && portion.portionDetails.length > 0) {
          this.portionSelections.set(portion.id, {
            portion,
            selectedDetail: portion.portionDetails[0]
          });
        } else {
          this.portionSelections.set(portion.id, {
            portion,
            selectedDetail: null
          });
        }
      });
    }
    this.updatePrices();
  }
  onClose() {
    this.close.emit();
  }
  togglePortionCollapse(portionId) {
    const current = this.collapsedPortions.get(portionId) || false;
    this.collapsedPortions.set(portionId, !current);
  }
  isPortionCollapsed(portionId) {
    return this.collapsedPortions.get(portionId) || false;
  }
  selectPortionDetail(portion, portionDetail) {
    this.portionSelections.set(portion.id, {
      portion,
      selectedDetail: portionDetail
    });
    this.updatePrices();
  }
  isSelected(portionId, portionDetailId) {
    const selection = this.portionSelections.get(portionId);
    return selection?.selectedDetail?.id === portionDetailId;
  }
  hasSelection(portionId) {
    const selection = this.portionSelections.get(portionId);
    return !!selection?.selectedDetail;
  }
  getSelectedDetail(portionId) {
    const selection = this.portionSelections.get(portionId);
    return selection?.selectedDetail || null;
  }
  getMinPrice() {
    let min = Infinity;
    this.menuItemDetail.portions?.forEach((portion) => {
      portion.portionDetails?.forEach((detail) => {
        if (detail.price < min) {
          min = detail.price;
        }
      });
    });
    return min === Infinity ? 0 : min;
  }
  getCurrentPrice() {
    let selectedPrice = 0;
    this.portionSelections.forEach((selection) => {
      if (selection.selectedDetail && selectedPrice === 0) {
        selectedPrice = selection.selectedDetail.price;
      }
    });
    return selectedPrice || this.minPrice;
  }
  showFromPrice() {
    let hasSelection = false;
    this.portionSelections.forEach((selection) => {
      if (selection.selectedDetail) {
        hasSelection = true;
      }
    });
    return !hasSelection;
  }
  updatePrices() {
    this.minPrice = this.getMinPrice();
    const currentPrice = this.getCurrentPrice();
    this.totalPrice = currentPrice * this.quantity;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updatePrices();
    }
  }
  increaseQuantity() {
    this.quantity++;
    this.updatePrices();
  }
  onAddToCart() {
    let selectedPortion = null;
    let selectedPortionDetail = null;
    for (const selection of this.portionSelections.values()) {
      if (selection.selectedDetail) {
        selectedPortion = selection.portion;
        selectedPortionDetail = selection.selectedDetail;
        break;
      }
    }
    if (!selectedPortion || !selectedPortionDetail) {
      return;
    }
    const cartItem = {
      menuItemId: this.menuItemDetail.id,
      menuItemName: this.menuItemDetail.name,
      menuItemImage: this.menuItemDetail.baseImageUrl,
      portionId: selectedPortion.id,
      portionName: selectedPortion.name,
      portionDetailId: selectedPortionDetail.id,
      portionDetailName: selectedPortionDetail.name,
      price: this.totalPrice / this.quantity,
      // Price per item
      quantity: this.quantity
    };
    this.addToCart.emit(cartItem);
  }
  getImageUrl(imageUrl) {
    return this.menuItemService.getImageUrl(imageUrl);
  }
  formatPrice(price) {
    return `Rs. ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  getPortions() {
    return this.menuItemDetail.portions || [];
  }
  getPortionDetails(portion) {
    return portion.portionDetails || [];
  }
  static \u0275fac = function ProductPopupComplexComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductPopupComplexComponent)(\u0275\u0275directiveInject(MenuItemService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductPopupComplexComponent, selectors: [["app-product-popup-complex"]], inputs: { menuItemDetail: "menuItemDetail" }, outputs: { close: "close", addToCart: "addToCart" }, decls: 37, vars: 9, consts: [[1, "popup-overlay", 3, "click"], [1, "popup-wrapper", 3, "click"], [1, "food-display-panel"], [1, "food-display-content"], [1, "food-image-container"], [1, "food-main-image", 3, "src", "alt"], [1, "product-title-section"], [1, "product-title"], [1, "product-description-section"], [1, "product-description"], [1, "ordering-panel"], ["type", "button", 1, "close-btn-top", 3, "click"], [1, "bi", "bi-x-lg"], [1, "panel-content"], [1, "portions-container"], ["class", "portion-section", 4, "ngFor", "ngForOf"], [1, "instructions-section"], [1, "section-title"], ["placeholder", "e.g. No onions, extra spicy, etc.", "rows", "3", 1, "instructions-input", 3, "ngModelChange", "ngModel"], [1, "bottom-bar"], [1, "quantity-selector"], ["type", "button", 1, "qty-btn", "minus", 3, "click"], [1, "qty-value"], ["type", "button", 1, "qty-btn", "plus", 3, "click"], ["type", "button", 1, "add-to-cart-btn", 3, "click"], [1, "price-in-button"], [4, "ngIf"], [1, "button-text"], [1, "portion-section"], [1, "portion-section-header", 3, "click"], [1, "header-left"], ["class", "required-badge", 4, "ngIf"], ["class", "selected-badge", 4, "ngIf"], [1, "header-right"], [1, "bi"], [1, "portion-details"], [1, "portion-options"], ["class", "portion-option", 3, "selected", 4, "ngFor", "ngForOf"], [1, "required-badge"], [1, "selected-badge"], [1, "portion-option"], [1, "portion-label"], ["type", "radio", 1, "portion-radio", 3, "change", "name", "value", "checked"], [1, "portion-name"], [1, "portion-price"]], template: function ProductPopupComplexComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ProductPopupComplexComponent_Template_div_click_0_listener() {
        return ctx.onClose();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ProductPopupComplexComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "h2", 7);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8)(10, "p", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275listener("click", function ProductPopupComplexComponent_Template_button_click_13_listener() {
        return ctx.onClose();
      });
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "div", 14);
      \u0275\u0275template(17, ProductPopupComplexComponent_div_17_Template, 12, 10, "div", 15);
      \u0275\u0275elementStart(18, "div", 16)(19, "h3", 17);
      \u0275\u0275text(20, "Instructions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "textarea", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ProductPopupComplexComponent_Template_textarea_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.instructions, $event) || (ctx.instructions = $event);
        return $event;
      });
      \u0275\u0275text(22, "            ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 19)(24, "div", 20)(25, "button", 21);
      \u0275\u0275listener("click", function ProductPopupComplexComponent_Template_button_click_25_listener() {
        return ctx.decreaseQuantity();
      });
      \u0275\u0275text(26, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 22);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 23);
      \u0275\u0275listener("click", function ProductPopupComplexComponent_Template_button_click_29_listener() {
        return ctx.increaseQuantity();
      });
      \u0275\u0275text(30, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "button", 24);
      \u0275\u0275listener("click", function ProductPopupComplexComponent_Template_button_click_31_listener() {
        return ctx.onAddToCart();
      });
      \u0275\u0275elementStart(32, "span", 25);
      \u0275\u0275template(33, ProductPopupComplexComponent_span_33_Template, 2, 0, "span", 26);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 27);
      \u0275\u0275text(36, "Add To Cart");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.getImageUrl(ctx.menuItemDetail.baseImageUrl), \u0275\u0275sanitizeUrl)("alt", ctx.menuItemDetail.name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.menuItemDetail.name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.menuItemDetail.description || "");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.getPortions());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.instructions);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.quantity);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.showFromPrice());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("", ctx.formatPrice(ctx.getCurrentPrice()), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  backdrop-filter: blur(0px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 2rem;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_fadeInOverlay 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInOverlay {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    backdrop-filter: blur(0px);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n    backdrop-filter: blur(5px);\n  }\n}\n.popup-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1000px;\n  width: 100%;\n  background-color: #ffffff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n  max-height: 90vh;\n  position: relative;\n  opacity: 0;\n  transform: scale(0.9) translateY(20px);\n  animation: _ngcontent-%COMP%_slideInPopup 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_slideInPopup {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.food-display-panel[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  min-height: 600px;\n  animation: _ngcontent-%COMP%_fadeInLeft 0.5s ease-out 0.2s both;\n}\n.food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n.food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .food-image-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n}\n.food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .food-image-container[_ngcontent-%COMP%]   .food-main-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .product-title-section[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .product-title-section[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  margin: 0;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1.2;\n}\n.food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .product-description-section[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n.food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .product-description-section[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #ffffff;\n  opacity: 0.9;\n  line-height: 1.5;\n}\n@keyframes _ngcontent-%COMP%_fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.ordering-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  animation: _ngcontent-%COMP%_fadeInRight 0.5s ease-out 0.2s both;\n}\n@keyframes _ngcontent-%COMP%_fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.close-btn-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: transparent;\n  border: none;\n  color: #666666;\n  font-size: 1.5rem;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  z-index: 10;\n  transition: all 0.2s;\n}\n.close-btn-top[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #333333;\n}\n.panel-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem 1.5rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  overflow-y: auto;\n  padding-bottom: 120px;\n}\n.portions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.portion-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #ffffff;\n  animation: _ngcontent-%COMP%_fadeInUp 0.4s ease-out both;\n}\n.portion-section[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.3s;\n}\n.portion-section[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.4s;\n}\n.portion-section[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.5s;\n}\n.portion-section[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.6s;\n}\n.portion-section[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n  color: #333333;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .required-badge[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: #ffffff;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .selected-badge[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: #ffffff;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 1.2rem;\n  transition: transform 0.2s;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-details[_ngcontent-%COMP%] {\n  padding: 0 1.5rem 1.25rem;\n  max-height: 400px;\n  overflow-y: auto;\n  transition: all 0.3s ease;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-details.collapsed[_ngcontent-%COMP%] {\n  max-height: 0;\n  padding: 0 1.5rem;\n  overflow: hidden;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-details[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-details[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f0f0f0;\n  border-radius: 3px;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-details[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cccccc;\n  border-radius: 3px;\n}\n.portion-section[_ngcontent-%COMP%]   .portion-details[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #999999;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.portion-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n.portion-option[_ngcontent-%COMP%]   .portion-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background-color: #ffffff;\n}\n.portion-option[_ngcontent-%COMP%]   .portion-label[_ngcontent-%COMP%]:hover {\n  border-color: #ff6b35;\n  background-color: #fff5f0;\n}\n.portion-option[_ngcontent-%COMP%]   .portion-label[_ngcontent-%COMP%]   .portion-radio[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  accent-color: #ff6b35;\n}\n.portion-option[_ngcontent-%COMP%]   .portion-label[_ngcontent-%COMP%]   .portion-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 1rem;\n  color: #333333;\n  font-weight: 500;\n}\n.portion-option[_ngcontent-%COMP%]   .portion-label[_ngcontent-%COMP%]   .portion-price[_ngcontent-%COMP%] {\n  color: #333333;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.portion-option.selected[_ngcontent-%COMP%]   .portion-label[_ngcontent-%COMP%] {\n  border-color: #ff6b35;\n  background-color: #fff5f0;\n}\n.instructions-section[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  background-color: #ffffff;\n  border-bottom: 1px solid #e0e0e0;\n}\n.instructions-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.75rem 0;\n  color: #333333;\n}\n.instructions-section[_ngcontent-%COMP%]   .instructions-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-family: inherit;\n  resize: vertical;\n  transition: border-color 0.2s;\n}\n.instructions-section[_ngcontent-%COMP%]   .instructions-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ff6b35;\n}\n.instructions-section[_ngcontent-%COMP%]   .instructions-input[_ngcontent-%COMP%]::placeholder {\n  color: #999999;\n}\n.bottom-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ffffff;\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid #e0e0e0;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border: none;\n  color: #ffffff;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  font-weight: 600;\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:hover {\n  background-color: #c82333;\n  transform: scale(1.1);\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n.bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   .qty-value[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 2px solid #e0e0e0;\n  width: 45px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333333;\n  border-radius: 8px;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #000000;\n  border: 2px solid #000000;\n  padding: 0.875rem 2rem;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: auto;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]   .price-in-button[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  color: #000000;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #000000;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover   .price-in-button[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 992px) {\n  .popup-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-height: 95vh;\n  }\n  .food-display-panel[_ngcontent-%COMP%] {\n    min-height: 300px;\n    flex: 0 0 auto;\n    padding: 2rem 1.5rem;\n  }\n  .food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .product-title-section[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .food-display-panel[_ngcontent-%COMP%]   .food-display-content[_ngcontent-%COMP%]   .product-description-section[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .ordering-panel[_ngcontent-%COMP%] {\n    flex: 1;\n    max-height: 60vh;\n  }\n  .panel-content[_ngcontent-%COMP%] {\n    padding-bottom: 140px;\n  }\n  .bottom-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1rem;\n  }\n  .bottom-bar[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .bottom-bar[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .popup-overlay[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .food-display-panel[_ngcontent-%COMP%] {\n    min-height: 250px;\n    padding: 1.5rem 1rem;\n  }\n  .panel-content[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n    padding-bottom: 160px;\n  }\n  .portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .portion-section[_ngcontent-%COMP%]   .portion-section-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .portion-section[_ngcontent-%COMP%]   .portion-details[_ngcontent-%COMP%] {\n    padding: 0 1rem 1rem;\n  }\n  .instructions-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=product-popup-complex.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductPopupComplexComponent, [{
    type: Component,
    args: [{ selector: "app-product-popup-complex", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="popup-overlay" (click)="onClose()">
  <div class="popup-wrapper" (click)="$event.stopPropagation()">
    <!-- Left Panel: Food Display -->
    <div class="food-display-panel">
      <div class="food-display-content">
        <!-- Food Image -->
        <div class="food-image-container">
          <img 
            [src]="getImageUrl(menuItemDetail.baseImageUrl)" 
            [alt]="menuItemDetail.name"
            class="food-main-image"
          />
        </div>
        
        <!-- Product Title -->
        <div class="product-title-section">
          <h2 class="product-title">{{ menuItemDetail.name }}</h2>
        </div>
        
        <!-- Product Description -->
        <div class="product-description-section">
          <p class="product-description">{{ menuItemDetail.description || '' }}</p>
        </div>
      </div>
    </div>

    <!-- Right Panel: Ordering Interface -->
    <div class="ordering-panel">
      <!-- Close Button -->
      <button class="close-btn-top" (click)="onClose()" type="button">
        <i class="bi bi-x-lg"></i>
      </button>

      <!-- Portion Sections -->
      <div class="panel-content">
        <div class="portions-container">
          <!-- Each Portion as a Collapsible Section -->
          <div *ngFor="let portion of getPortions()" class="portion-section">
            <div class="portion-section-header" (click)="togglePortionCollapse(portion.id)">
              <div class="header-left">
                <h3 class="section-title">{{ portion.name }}</h3>
                <span class="required-badge" *ngIf="!hasSelection(portion.id)">Required</span>
                <span class="selected-badge" *ngIf="hasSelection(portion.id)">Selected</span>
              </div>
              <div class="header-right">
                <i class="bi" 
                   [class.bi-chevron-up]="!isPortionCollapsed(portion.id)" 
                   [class.bi-chevron-down]="isPortionCollapsed(portion.id)">
                </i>
              </div>
            </div>

            <!-- Portion Details (Collapsible) -->
            <div class="portion-details" [class.collapsed]="isPortionCollapsed(portion.id)">
              <div class="portion-options">
                <div 
                  *ngFor="let detail of getPortionDetails(portion)" 
                  class="portion-option"
                  [class.selected]="isSelected(portion.id, detail.id)">
                  <label class="portion-label">
                    <input 
                      type="radio" 
                      [name]="'portion-' + portion.id" 
                      [value]="detail.id"
                      [checked]="isSelected(portion.id, detail.id)"
                      (change)="selectPortionDetail(portion, detail)"
                      class="portion-radio">
                    <span class="portion-name">{{ detail.name }}</span>
                    <span class="portion-price">{{ formatPrice(detail.price) }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Instructions Field -->
          <div class="instructions-section">
            <h3 class="section-title">Instructions</h3>
            <textarea 
              class="instructions-input"
              placeholder="e.g. No onions, extra spicy, etc."
              [(ngModel)]="instructions"
              rows="3">
            </textarea>
          </div>
        </div>

        <!-- Bottom Bar: Quantity, Add to Cart -->
        <div class="bottom-bar">
          <div class="quantity-selector">
            <button class="qty-btn minus" (click)="decreaseQuantity()" type="button">-</button>
            <span class="qty-value">{{ quantity }}</span>
            <button class="qty-btn plus" (click)="increaseQuantity()" type="button">+</button>
          </div>
          <button class="add-to-cart-btn" (click)="onAddToCart()" type="button">
            <span class="price-in-button">
              <span *ngIf="showFromPrice()">from </span>{{ formatPrice(getCurrentPrice()) }}
            </span>
            <span class="button-text">Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* projects/client/src/app/shared/components/product-popup-complex/product-popup-complex.component.scss */\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0);\n  backdrop-filter: blur(0px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 2rem;\n  overflow-y: auto;\n  animation: fadeInOverlay 0.3s ease-out forwards;\n}\n@keyframes fadeInOverlay {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n    backdrop-filter: blur(0px);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.7);\n    backdrop-filter: blur(5px);\n  }\n}\n.popup-wrapper {\n  display: flex;\n  max-width: 1000px;\n  width: 100%;\n  background-color: #ffffff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\n  max-height: 90vh;\n  position: relative;\n  opacity: 0;\n  transform: scale(0.9) translateY(20px);\n  animation: slideInPopup 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes slideInPopup {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.food-display-panel {\n  flex: 0 0 45%;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a1a 0%,\n      #2d2d2d 100%);\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  min-height: 600px;\n  animation: fadeInLeft 0.5s ease-out 0.2s both;\n}\n.food-display-panel .food-display-content {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 2rem;\n}\n.food-display-panel .food-display-content .food-image-container {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 300px;\n  max-height: 400px;\n}\n.food-display-panel .food-display-content .food-image-container .food-main-image {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.food-display-panel .food-display-content .product-title-section {\n  text-align: center;\n  width: 100%;\n}\n.food-display-panel .food-display-content .product-title-section .product-title {\n  font-size: 2rem;\n  font-weight: 900;\n  margin: 0;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1.2;\n}\n.food-display-panel .food-display-content .product-description-section {\n  text-align: center;\n  width: 100%;\n}\n.food-display-panel .food-display-content .product-description-section .product-description {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #ffffff;\n  opacity: 0.9;\n  line-height: 1.5;\n}\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.ordering-panel {\n  flex: 1;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  animation: fadeInRight 0.5s ease-out 0.2s both;\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.close-btn-top {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: transparent;\n  border: none;\n  color: #666666;\n  font-size: 1.5rem;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  z-index: 10;\n  transition: all 0.2s;\n}\n.close-btn-top:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  color: #333333;\n}\n.panel-content {\n  flex: 1;\n  padding: 2rem 1.5rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  overflow-y: auto;\n  padding-bottom: 120px;\n}\n.portions-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.portion-section {\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #ffffff;\n  animation: fadeInUp 0.4s ease-out both;\n}\n.portion-section:nth-child(1) {\n  animation-delay: 0.3s;\n}\n.portion-section:nth-child(2) {\n  animation-delay: 0.4s;\n}\n.portion-section:nth-child(3) {\n  animation-delay: 0.5s;\n}\n.portion-section:nth-child(4) {\n  animation-delay: 0.6s;\n}\n.portion-section:last-of-type {\n  border-bottom: none;\n}\n.portion-section .portion-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.portion-section .portion-section-header:hover {\n  background-color: #f8f8f8;\n}\n.portion-section .portion-section-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.portion-section .portion-section-header .header-left .section-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n  color: #333333;\n}\n.portion-section .portion-section-header .header-left .required-badge {\n  background-color: #dc3545;\n  color: #ffffff;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.portion-section .portion-section-header .header-left .selected-badge {\n  background-color: #28a745;\n  color: #ffffff;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.portion-section .portion-section-header .header-right i {\n  color: #666666;\n  font-size: 1.2rem;\n  transition: transform 0.2s;\n}\n.portion-section .portion-details {\n  padding: 0 1.5rem 1.25rem;\n  max-height: 400px;\n  overflow-y: auto;\n  transition: all 0.3s ease;\n}\n.portion-section .portion-details.collapsed {\n  max-height: 0;\n  padding: 0 1.5rem;\n  overflow: hidden;\n}\n.portion-section .portion-details::-webkit-scrollbar {\n  width: 6px;\n}\n.portion-section .portion-details::-webkit-scrollbar-track {\n  background: #f0f0f0;\n  border-radius: 3px;\n}\n.portion-section .portion-details::-webkit-scrollbar-thumb {\n  background: #cccccc;\n  border-radius: 3px;\n}\n.portion-section .portion-details::-webkit-scrollbar-thumb:hover {\n  background: #999999;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.portion-options {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n.portion-option .portion-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background-color: #ffffff;\n}\n.portion-option .portion-label:hover {\n  border-color: #ff6b35;\n  background-color: #fff5f0;\n}\n.portion-option .portion-label .portion-radio {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  accent-color: #ff6b35;\n}\n.portion-option .portion-label .portion-name {\n  flex: 1;\n  font-size: 1rem;\n  color: #333333;\n  font-weight: 500;\n}\n.portion-option .portion-label .portion-price {\n  color: #333333;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.portion-option.selected .portion-label {\n  border-color: #ff6b35;\n  background-color: #fff5f0;\n}\n.instructions-section {\n  padding: 1.25rem 1.5rem;\n  background-color: #ffffff;\n  border-bottom: 1px solid #e0e0e0;\n}\n.instructions-section .section-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.75rem 0;\n  color: #333333;\n}\n.instructions-section .instructions-input {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-family: inherit;\n  resize: vertical;\n  transition: border-color 0.2s;\n}\n.instructions-section .instructions-input:focus {\n  outline: none;\n  border-color: #ff6b35;\n}\n.instructions-section .instructions-input::placeholder {\n  color: #999999;\n}\n.bottom-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ffffff;\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-top: 1px solid #e0e0e0;\n  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);\n}\n.bottom-bar .quantity-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.bottom-bar .quantity-selector .qty-btn {\n  background-color: #dc3545;\n  border: none;\n  color: #ffffff;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  font-weight: 600;\n}\n.bottom-bar .quantity-selector .qty-btn:hover {\n  background-color: #c82333;\n  transform: scale(1.1);\n}\n.bottom-bar .quantity-selector .qty-btn:active {\n  transform: scale(0.95);\n}\n.bottom-bar .quantity-selector .qty-value {\n  background-color: #ffffff;\n  border: 2px solid #e0e0e0;\n  width: 45px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333333;\n  border-radius: 8px;\n}\n.bottom-bar .add-to-cart-btn {\n  background-color: #ffffff;\n  color: #000000;\n  border: 2px solid #000000;\n  padding: 0.875rem 2rem;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-left: auto;\n}\n.bottom-bar .add-to-cart-btn .price-in-button {\n  color: #dc3545;\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.bottom-bar .add-to-cart-btn .button-text {\n  color: #000000;\n}\n.bottom-bar .add-to-cart-btn:hover {\n  background-color: #000000;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n}\n.bottom-bar .add-to-cart-btn:hover .price-in-button {\n  color: #ff6b6b;\n}\n.bottom-bar .add-to-cart-btn:hover .button-text {\n  color: #ffffff;\n}\n.bottom-bar .add-to-cart-btn:active {\n  transform: translateY(0);\n}\n@media (max-width: 992px) {\n  .popup-wrapper {\n    flex-direction: column;\n    max-height: 95vh;\n  }\n  .food-display-panel {\n    min-height: 300px;\n    flex: 0 0 auto;\n    padding: 2rem 1.5rem;\n  }\n  .food-display-panel .food-display-content .product-title-section .product-title {\n    font-size: 1.5rem;\n  }\n  .food-display-panel .food-display-content .product-description-section .product-description {\n    font-size: 0.85rem;\n  }\n  .ordering-panel {\n    flex: 1;\n    max-height: 60vh;\n  }\n  .panel-content {\n    padding-bottom: 140px;\n  }\n  .bottom-bar {\n    flex-direction: column;\n    padding: 1rem;\n  }\n  .bottom-bar .quantity-selector {\n    width: 100%;\n    justify-content: center;\n  }\n  .bottom-bar .add-to-cart-btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .popup-overlay {\n    padding: 1rem;\n  }\n  .food-display-panel {\n    min-height: 250px;\n    padding: 1.5rem 1rem;\n  }\n  .panel-content {\n    padding: 1.5rem 1rem;\n    padding-bottom: 160px;\n  }\n  .portion-section .portion-section-header {\n    padding: 1rem;\n  }\n  .portion-section .portion-section-header .header-left .section-title {\n    font-size: 1rem;\n  }\n  .portion-section .portion-details {\n    padding: 0 1rem 1rem;\n  }\n  .instructions-section {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=product-popup-complex.component.css.map */\n"] }]
  }], () => [{ type: MenuItemService }], { menuItemDetail: [{
    type: Input
  }], close: [{
    type: Output
  }], addToCart: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductPopupComplexComponent, { className: "ProductPopupComplexComponent", filePath: "src/app/shared/components/product-popup-complex/product-popup-complex.component.ts", lineNumber: 19 });
})();

// projects/client/src/app/features/menu/menu.component.ts
function MenuComponent_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "img", 17);
    \u0275\u0275listener("error", function MenuComponent_div_1_div_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r5 === ctx_r1.currentSlideIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getSliderImageUrl(image_r4), \u0275\u0275sanitizeUrl)("alt", "Slide " + (i_r5 + 1));
  }
}
function MenuComponent_div_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function MenuComponent_div_1_button_9_Template_button_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToSlide(i_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", i_r7 === ctx_r1.currentSlideIndex);
    \u0275\u0275attribute("aria-label", "Go to slide " + (i_r7 + 1));
  }
}
function MenuComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "button", 8);
    \u0275\u0275listener("click", function MenuComponent_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prevSlide());
    });
    \u0275\u0275element(3, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275template(5, MenuComponent_div_1_div_5_Template, 2, 4, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 12);
    \u0275\u0275listener("click", function MenuComponent_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextSlide());
    });
    \u0275\u0275element(7, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275template(9, MenuComponent_div_1_button_9_Template, 1, 3, "button", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.sliderImages);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.sliderImages);
  }
}
function MenuComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3, "Loading menu items...");
    \u0275\u0275elementEnd()();
  }
}
function MenuComponent_div_3_div_2_div_4_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.getItemPrice(item_r9.id)));
  }
}
function MenuComponent_div_3_div_2_div_4_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "Loading price...");
    \u0275\u0275elementEnd();
  }
}
function MenuComponent_div_3_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275listener("click", function MenuComponent_div_3_div_2_div_4_Template_div_click_1_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openProductPopup(item_r9, $event));
    });
    \u0275\u0275elementStart(2, "img", 31);
    \u0275\u0275listener("error", function MenuComponent_div_3_div_2_div_4_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275listener("click", function MenuComponent_div_3_div_2_div_4_Template_div_click_3_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openProductPopup(item_r9, $event));
    });
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275listener("click", function MenuComponent_div_3_div_2_div_4_Template_div_click_4_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openProductPopup(item_r9, $event));
    });
    \u0275\u0275elementStart(5, "h3", 34);
    \u0275\u0275listener("click", function MenuComponent_div_3_div_2_div_4_Template_h3_click_5_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openProductPopup(item_r9, $event));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275template(10, MenuComponent_div_3_div_2_div_4_span_10_Template, 2, 1, "span", 37)(11, MenuComponent_div_3_div_2_div_4_span_11_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 39)(13, "button", 40);
    \u0275\u0275listener("click", function MenuComponent_div_3_div_2_div_4_Template_button_click_13_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.addToCart(item_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(14, " Add To Cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 41);
    \u0275\u0275listener("click", function MenuComponent_div_3_div_2_div_4_Template_button_click_15_listener($event) {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.toggleFavorite(item_r9.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(16, "i", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getImageUrl(item_r9.baseImageUrl), \u0275\u0275sanitizeUrl)("alt", item_r9.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.truncateDescription(item_r9.description), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getItemPrice(item_r9.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.getItemPrice(item_r9.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !item_r9.isAvailable);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isFavorite(item_r9.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-heart", !ctx_r1.isFavorite(item_r9.id))("bi-heart-fill", ctx_r1.isFavorite(item_r9.id));
  }
}
function MenuComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275template(4, MenuComponent_div_3_div_2_div_4_Template, 17, 13, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    \u0275\u0275property("id", "category-" + section_r10.category.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r10.category.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r10.items);
  }
}
function MenuComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275template(2, MenuComponent_div_3_div_2_Template, 5, 3, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categorySections);
  }
}
function MenuComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "No menu items found");
    \u0275\u0275elementEnd()();
  }
}
function MenuComponent_app_product_popup_simple_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-popup-simple", 46);
    \u0275\u0275listener("close", function MenuComponent_app_product_popup_simple_5_Template_app_product_popup_simple_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClosePopup());
    })("addToCart", function MenuComponent_app_product_popup_simple_5_Template_app_product_popup_simple_addToCart_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddToCartFromPopup($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("menuItemDetail", ctx_r1.selectedMenuItemDetail);
  }
}
function MenuComponent_app_product_popup_complex_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-popup-complex", 46);
    \u0275\u0275listener("close", function MenuComponent_app_product_popup_complex_6_Template_app_product_popup_complex_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClosePopup());
    })("addToCart", function MenuComponent_app_product_popup_complex_6_Template_app_product_popup_complex_addToCart_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddToCartFromPopup($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("menuItemDetail", ctx_r1.selectedMenuItemDetail);
  }
}
var MenuComponent = class _MenuComponent {
  menuItemService;
  categoryService;
  cartService;
  notificationService;
  route;
  router;
  menuItems = [];
  categorySections = [];
  loading = false;
  currentPage = 1;
  pageSize = 1e3;
  // Load all items for section view
  totalPages = 1;
  totalCount = 0;
  searchTerm = "";
  favoriteItems = /* @__PURE__ */ new Set();
  itemPrices = /* @__PURE__ */ new Map();
  // Cache for item prices
  Math = Math;
  // Expose Math to template
  // Category properties
  categories = [];
  selectedCategoryId = null;
  categoriesLoading = false;
  activeCategoryId = null;
  // For scroll spy
  isScrolling = false;
  // Prevent scroll spy during programmatic scroll
  // Slider properties
  sliderImages = [
    "/images/Slider/slid1.jpg",
    "/images/Slider/slid2.jpg",
    "/images/Slider/slid3.jpg"
  ];
  currentSlideIndex = 0;
  sliderInterval;
  sliderIntervalTime = 5e3;
  // 5 seconds
  // Popup properties
  showSimplePopup = false;
  showComplexPopup = false;
  selectedMenuItemDetail = null;
  // Test: Force show popup for debugging
  testShowPopup() {
    console.log("TEST: Force showing simple popup");
    this.showSimplePopup = true;
    this.showComplexPopup = false;
    this.selectedMenuItemDetail = {
      id: 1,
      categoryId: 1,
      categoryName: "Test",
      name: "Test Item",
      description: "Test Description",
      baseImageUrl: "",
      isAvailable: true,
      preparationTime: 15,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      portionCount: 1,
      portions: [{
        id: 1,
        menuItemId: 1,
        menuItemName: "Test Item",
        name: "Regular",
        isActive: true,
        displayOrder: 1,
        minSelection: 1,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        portionDetails: [{
          id: 1,
          name: "Regular",
          price: 100
        }]
      }]
    };
  }
  destroy$ = new Subject();
  constructor(menuItemService, categoryService, cartService, notificationService, route, router) {
    this.menuItemService = menuItemService;
    this.categoryService = categoryService;
    this.cartService = cartService;
    this.notificationService = notificationService;
    this.route = route;
    this.router = router;
    const savedFavorites = localStorage.getItem("favorite_menu_items");
    if (savedFavorites) {
      this.favoriteItems = new Set(JSON.parse(savedFavorites));
    }
  }
  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const categoryId = params["category"];
      if (categoryId !== void 0) {
        const id = categoryId === "null" || categoryId === null ? null : parseInt(categoryId, 10);
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
  ngOnDestroy() {
    this.stopSlider();
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", () => this.onScroll());
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCategories() {
    this.categoriesLoading = true;
    this.categoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const data = response.data;
          this.categories = (data.items || data.Items || []).filter((cat) => cat.isVisible);
          this.categories.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
          console.log("Categories loaded:", this.categories.length);
          if (this.menuItems.length > 0) {
            this.groupItemsByCategory();
          }
        }
        this.categoriesLoading = false;
      },
      error: (error) => {
        console.error("Error loading categories:", error);
        this.categoriesLoading = false;
      }
    });
  }
  loadMenuItems() {
    this.loading = true;
    console.log("Loading menu items...", { page: this.currentPage, limit: this.pageSize, search: this.searchTerm, categoryId: this.selectedCategoryId });
    if (this.selectedCategoryId !== null) {
      this.menuItemService.getMenuItemsByCategory(this.selectedCategoryId).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.menuItems = response.data;
            this.totalPages = 1;
            this.totalCount = this.menuItems.length;
            this.groupItemsByCategory();
            this.loadPricesForItems(this.menuItems);
          }
          this.loading = false;
        },
        error: (error) => {
          console.error("Error loading menu items by category:", error);
          this.notificationService.error("Failed to load menu items.");
          this.loading = false;
        }
      });
    } else {
      this.menuItemService.getMenuItems({
        page: 1,
        limit: this.pageSize,
        search: this.searchTerm || void 0
      }).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          console.log("Menu items response:", response);
          if (response.success && response.data) {
            const data = response.data;
            this.menuItems = data.items || data.Items || [];
            this.totalPages = data.totalPages || data.TotalPages || 1;
            this.totalCount = data.totalCount || data.TotalCount || 0;
            console.log("Menu items loaded:", this.menuItems.length, "items");
            this.groupItemsByCategory();
            this.loadPricesForItems(this.menuItems);
          } else {
            console.warn("Menu items response not successful:", response);
            this.notificationService.error(response.message || "Failed to load menu items");
          }
          this.loading = false;
          console.log("Loading set to false");
        },
        error: (error) => {
          console.error("Error loading menu items:", error);
          this.notificationService.error("Failed to load menu items. Please check if the API is running.");
          this.loading = false;
          console.log("Loading set to false (error)");
        }
      });
    }
  }
  groupItemsByCategory() {
    const grouped = /* @__PURE__ */ new Map();
    this.menuItems.forEach((item) => {
      const categoryId = item.categoryId || 0;
      if (!grouped.has(categoryId)) {
        grouped.set(categoryId, []);
      }
      grouped.get(categoryId).push(item);
    });
    this.categorySections = this.categories.filter((cat) => grouped.has(cat.id) && grouped.get(cat.id).length > 0).map((cat) => ({
      category: cat,
      items: grouped.get(cat.id)
    })).sort((a, b) => (a.category.displayOrder || 0) - (b.category.displayOrder || 0));
    console.log("Grouped items into", this.categorySections.length, "sections");
  }
  onSearch() {
    this.currentPage = 1;
    this.loadMenuItems();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadMenuItems();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  getImageUrl(imageUrl) {
    return this.menuItemService.getImageUrl(imageUrl);
  }
  toggleFavorite(menuItemId) {
    if (this.favoriteItems.has(menuItemId)) {
      this.favoriteItems.delete(menuItemId);
    } else {
      this.favoriteItems.add(menuItemId);
    }
    localStorage.setItem("favorite_menu_items", JSON.stringify(Array.from(this.favoriteItems)));
  }
  isFavorite(menuItemId) {
    return this.favoriteItems.has(menuItemId);
  }
  // Open product popup (called when clicking on product card)
  openProductPopup(menuItem, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("=== openProductPopup CALLED ===");
    console.log("Menu item:", menuItem);
    console.log("Menu item ID:", menuItem?.id);
    console.log("Menu item name:", menuItem?.name);
    if (!menuItem) {
      console.error("Menu item is null or undefined");
      alert("Error: Menu item is null");
      return;
    }
    if (!menuItem.id) {
      console.error("Menu item ID is missing");
      alert("Error: Menu item ID is missing");
      return;
    }
    console.log("Calling addToCart with menu item:", menuItem);
    this.addToCart(menuItem);
  }
  addToCart(menuItem) {
    console.log("=== addToCart METHOD CALLED ===");
    console.log("Menu item:", menuItem);
    console.log("Menu item ID:", menuItem?.id);
    console.log("Menu item available:", menuItem?.isAvailable);
    if (!menuItem || !menuItem.id) {
      console.error("Invalid menu item:", menuItem);
      this.notificationService.error("Invalid menu item");
      return;
    }
    console.log("Calling getMenuItemById with ID:", menuItem.id);
    this.menuItemService.getMenuItemById(menuItem.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Menu item detail response:", response);
        if (response.success && response.data) {
          this.selectedMenuItemDetail = response.data;
          console.log("Selected menu item detail:", this.selectedMenuItemDetail);
          console.log("Portion count:", this.selectedMenuItemDetail.portionCount);
          console.log("Portions array:", this.selectedMenuItemDetail.portions);
          console.log("Portions length:", this.selectedMenuItemDetail.portions?.length);
          this.showSimplePopup = false;
          this.showComplexPopup = false;
          let totalPortionDetails = 0;
          if (this.selectedMenuItemDetail.portions && this.selectedMenuItemDetail.portions.length > 0) {
            this.selectedMenuItemDetail.portions.forEach((portion) => {
              if (portion.portionDetails && portion.portionDetails.length > 0) {
                totalPortionDetails += portion.portionDetails.length;
              }
            });
          }
          const hasPortions = this.selectedMenuItemDetail.portions && this.selectedMenuItemDetail.portions.length > 0;
          console.log("Total portion details count:", totalPortionDetails);
          console.log("Portions array length:", this.selectedMenuItemDetail.portions?.length);
          console.log("PortionCount property:", this.selectedMenuItemDetail.portionCount);
          if (!hasPortions || totalPortionDetails === 0) {
            console.log("No portions available");
            this.notificationService.warning("No portions available for this item");
            this.selectedMenuItemDetail = null;
            return;
          }
          if (totalPortionDetails === 1) {
            console.log("Showing SIMPLE popup - totalPortionDetails:", totalPortionDetails);
            this.showSimplePopup = true;
            this.showComplexPopup = false;
            console.log("showSimplePopup set to:", this.showSimplePopup);
          } else {
            console.log("Showing COMPLEX popup - totalPortionDetails:", totalPortionDetails);
            this.showSimplePopup = false;
            this.showComplexPopup = true;
            console.log("showComplexPopup set to:", this.showComplexPopup);
          }
          setTimeout(() => {
            console.log("=== POPUP STATE CHECK ===");
            console.log("showSimplePopup:", this.showSimplePopup);
            console.log("showComplexPopup:", this.showComplexPopup);
            console.log("selectedMenuItemDetail exists:", !!this.selectedMenuItemDetail);
            console.log("selectedMenuItemDetail:", this.selectedMenuItemDetail);
          }, 100);
        } else {
          console.error("Response not successful:", response);
          this.notificationService.error("Failed to load menu item details");
        }
      },
      error: (error) => {
        console.error("Error loading menu item details:", error);
        this.notificationService.error("Failed to load item details");
      }
    });
  }
  onClosePopup() {
    this.showSimplePopup = false;
    this.showComplexPopup = false;
    this.selectedMenuItemDetail = null;
  }
  onAddToCartFromPopup(cartItem) {
    this.cartService.addToCart(cartItem);
    this.notificationService.success(`${cartItem.menuItemName} added to cart!`);
    this.onClosePopup();
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  onImageError(event) {
    const img = event.target;
    if (img) {
      const currentSrc = img.src || "";
      const placeholderPath = "/assets/i18n/placeholder-food.png";
      if (!currentSrc.includes("placeholder-food.png") && !currentSrc.includes("data:image")) {
        img.src = placeholderPath;
        img.onerror = () => {
          if (img && !img.src.includes("data:image")) {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ececec" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3ENo Image%3C/text%3E%3C/svg%3E';
            img.onerror = null;
          }
        };
      } else {
        if (!currentSrc.includes("data:image")) {
          img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ececec" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-family="Arial" font-size="14"%3ENo Image%3C/text%3E%3C/svg%3E';
          img.onerror = null;
        }
      }
    }
  }
  loadPricesForItems(items) {
    items.forEach((item) => {
      if (!this.itemPrices.has(item.id)) {
        this.getItemStartingPrice(item.id);
      }
    });
  }
  getItemStartingPrice(itemId) {
    this.menuItemService.getMenuItemById(itemId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const menuItemDetail = response.data;
          let minPrice = null;
          if (menuItemDetail.portions && menuItemDetail.portions.length > 0) {
            menuItemDetail.portions.forEach((portion) => {
              if (portion.portionDetails && portion.portionDetails.length > 0) {
                portion.portionDetails.forEach((detail) => {
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
  getItemPrice(itemId) {
    return this.itemPrices.get(itemId) || null;
  }
  formatPrice(price) {
    return `Rs. ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  truncateDescription(description, maxLength = 50) {
    if (!description) {
      return "Delicious food item with great taste.";
    }
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength).trim() + "...";
  }
  // Slider methods
  getSliderImageUrl(imagePath) {
    const apiUrl = "http://localhost:5071";
    const fullUrl = `${apiUrl}${imagePath}`;
    console.log("Slider image URL:", fullUrl);
    return fullUrl;
  }
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderImages.length;
    this.resetSliderInterval();
  }
  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
    this.resetSliderInterval();
  }
  goToSlide(index) {
    this.currentSlideIndex = index;
    this.resetSliderInterval();
  }
  startSlider() {
    this.resetSliderInterval();
  }
  stopSlider() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
      this.sliderInterval = null;
    }
  }
  resetSliderInterval() {
    this.stopSlider();
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, this.sliderIntervalTime);
  }
  // Category methods
  selectCategory(categoryId) {
    this.isScrolling = true;
    if (categoryId === null) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        this.isScrolling = false;
        this.activeCategoryId = null;
      }, 1e3);
    } else {
      setTimeout(() => {
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
          const offset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          setTimeout(() => {
            this.isScrolling = false;
            this.activeCategoryId = categoryId;
          }, 1e3);
        } else {
          this.isScrolling = false;
        }
      }, 100);
    }
  }
  setupScrollSpy() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => this.onScroll(), { passive: true });
    }
  }
  onScroll() {
    if (this.isScrolling)
      return;
    const scrollY = window.scrollY || window.pageYOffset;
    const offset = 200;
    if (scrollY < 100) {
      this.activeCategoryId = null;
      return;
    }
    let currentSection = null;
    for (let i = 0; i < this.categorySections.length; i++) {
      const section = this.categorySections[i];
      const element = document.getElementById(`category-${section.category.id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        if (scrollY + offset >= elementTop - 50) {
          currentSection = section.category.id;
        }
      }
    }
    if (currentSection !== null && this.activeCategoryId !== currentSection) {
      this.activeCategoryId = currentSection;
    }
  }
  getCategoryImageUrl(imageUrl) {
    return this.categoryService.getImageUrl(imageUrl);
  }
  scrollCategories(direction) {
    const container = document.querySelector(".category-tabs-container");
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  }
  static \u0275fac = function MenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuComponent)(\u0275\u0275directiveInject(MenuItemService), \u0275\u0275directiveInject(CategoryService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-menu"]], decls: 7, vars: 6, consts: [[1, "menu-container"], ["class", "slider-container w-100 mb-4 mb-md-3", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "menu-content-wrapper", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [3, "menuItemDetail", "close", "addToCart", 4, "ngIf"], [1, "slider-container", "w-100", "mb-4", "mb-md-3"], [1, "slider-wrapper", "position-relative", "w-100"], ["aria-label", "Previous slide", "type", "button", 1, "slider-nav-btn", "slider-prev", "d-none", "d-md-flex", 3, "click"], [1, "bi", "bi-chevron-left"], [1, "slider-content", "w-100"], ["class", "slider-slide", 3, "active", 4, "ngFor", "ngForOf"], ["aria-label", "Next slide", "type", "button", 1, "slider-nav-btn", "slider-next", "d-none", "d-md-flex", 3, "click"], [1, "bi", "bi-chevron-right"], [1, "slider-indicators", "d-flex", "justify-content-center", "py-2", "py-md-3"], ["class", "slider-indicator", "type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "slider-slide"], ["loading", "eager", 1, "w-100", "h-100", 3, "error", "src", "alt"], ["type", "button", 1, "slider-indicator", 3, "click"], [1, "loading-container"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2"], [1, "menu-content-wrapper"], [1, "menu-sections"], ["class", "category-section", 3, "id", 4, "ngFor", "ngForOf"], [1, "category-section", 3, "id"], [1, "category-heading"], [1, "deal-grid", "row", "g-2", "g-md-3", "d-md-grid"], ["class", "deal-card col-12 col-md-6 col-lg-4 me-3", "style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "deal-card", "col-12", "col-md-6", "col-lg-4", "me-3", 2, "cursor", "pointer"], [1, "deal-image", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "w-100", "h-100", "object-fit-cover", 3, "error", "src", "alt"], [1, "deal-content", "d-flex", "flex-column", 3, "click"], [1, "deal-header", 3, "click"], [1, "deal-title", "mb-2", 3, "click"], [1, "deal-desc", "mb-2"], [1, "deal-price"], [4, "ngIf"], ["class", "price-loading", 4, "ngIf"], [1, "deal-footer", "d-flex", "align-items-center", "justify-content-between"], ["type", "button", 1, "deal-btn", "btn", 3, "click", "disabled"], ["type", "button", 1, "fav-btn", "btn", "border-0", "bg-transparent", 3, "click"], [1, "bi"], [1, "price-loading"], [1, "empty"], [1, "bi", "bi-inbox", "fs-1", "text-muted"], [3, "close", "addToCart", "menuItemDetail"]], template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, MenuComponent_div_1_Template, 10, 2, "div", 1)(2, MenuComponent_div_2_Template, 4, 0, "div", 2)(3, MenuComponent_div_3_Template, 3, 1, "div", 3)(4, MenuComponent_div_4_Template, 4, 0, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, MenuComponent_app_product_popup_simple_5_Template, 1, 1, "app-product-popup-simple", 5)(6, MenuComponent_app_product_popup_complex_6_Template, 1, 1, "app-product-popup-complex", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sliderImages && ctx.sliderImages.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.categorySections.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.categorySections.length === 0 && ctx.menuItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSimplePopup && ctx.selectedMenuItemDetail);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showComplexPopup && ctx.selectedMenuItemDetail);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    ProductPopupSimpleComponent,
    ProductPopupComplexComponent
  ], styles: ['@charset "UTF-8";\n\n\n\n.menu-container[_ngcontent-%COMP%] {\n  padding: 0;\n  background: #faf7f2;\n  min-height: 100vh;\n  margin: -2rem;\n  width: calc(100% + 4rem);\n}\n@media (max-width: 768px) {\n  .menu-container[_ngcontent-%COMP%] {\n    margin: -1rem;\n    width: calc(100% + 2rem);\n  }\n}\n.slider-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  margin-bottom: 2rem;\n  background: #fff;\n  min-height: 400px;\n}\n@media (max-width: 768px) {\n  .slider-container[_ngcontent-%COMP%] {\n    min-height: 250px;\n  }\n}\n.slider-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.slider-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 400px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n@media (max-width: 768px) {\n  .slider-content[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n}\n.slider-slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.6s ease-in-out;\n  visibility: hidden;\n}\n.slider-slide.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n  visibility: visible;\n}\n.slider-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  background: #f0f0f0;\n}\n.slider-nav-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.8);\n  border: none;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.3s ease;\n  color: #333;\n  font-size: 1.5rem;\n}\n.slider-nav-btn[_ngcontent-%COMP%]:hover {\n  background: rgb(255, 255, 255);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.slider-nav-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-50%) scale(0.95);\n}\n.slider-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n@media (max-width: 768px) {\n  .slider-nav-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .slider-nav-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n.slider-prev[_ngcontent-%COMP%] {\n  left: 20px;\n}\n@media (max-width: 768px) {\n  .slider-prev[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n}\n.slider-next[_ngcontent-%COMP%] {\n  right: 20px;\n}\n@media (max-width: 768px) {\n  .slider-next[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n.slider-indicators[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 15px 0;\n  background: #fff;\n}\n@media (max-width: 768px) {\n  .slider-indicators[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .slider-indicators[_ngcontent-%COMP%] {\n    padding: 8px 0;\n    gap: 6px;\n  }\n}\n.slider-indicator[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #ddd;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0;\n}\n.slider-indicator[_ngcontent-%COMP%]:hover {\n  border-color: #f97316;\n  transform: scale(1.2);\n}\n.slider-indicator.active[_ngcontent-%COMP%] {\n  background: #f97316;\n  border-color: #f97316;\n  width: 30px;\n  border-radius: 6px;\n}\n@media (max-width: 480px) {\n  .slider-indicator[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n    border-width: 1.5px;\n  }\n  .slider-indicator.active[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n.category-tabs-section[_ngcontent-%COMP%] {\n  background: #000;\n  padding: 0;\n  margin-bottom: 2rem;\n  position: sticky;\n  top: 60px;\n  z-index: 100;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .category-tabs-section[_ngcontent-%COMP%] {\n    top: 0;\n    margin-bottom: 1rem;\n  }\n}\n.category-tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 200px;\n  align-items: center;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  padding: 0.75rem 1rem;\n  gap: 0;\n}\n.category-tabs-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n@media (max-width: 768px) {\n  .category-tabs-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: 0.6rem 0.75rem;\n  }\n}\n.category-tab[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  padding: 0.5rem 1.25rem;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  font-size: 0.95rem;\n  color: #fff;\n  flex-shrink: 0;\n  min-width: fit-content;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.category-tab[_ngcontent-%COMP%]:hover {\n  color: #f97316;\n}\n.category-tab.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.category-tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 1.25rem;\n  right: 1.25rem;\n  height: 2px;\n  background: #f97316;\n}\n@media (max-width: 768px) {\n  .category-tab[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.9rem;\n    font-size: 0.8rem;\n    letter-spacing: 0.3px;\n  }\n  .category-tab.active[_ngcontent-%COMP%]::after {\n    left: 0.9rem;\n    right: 0.9rem;\n    height: 2px;\n  }\n}\n.category-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1rem;\n  color: #999;\n  flex-shrink: 0;\n}\n.category-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 768px) {\n  .category-arrow[_ngcontent-%COMP%] {\n    padding: 0 0.75rem;\n  }\n  .category-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n.menu-content-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n@media (max-width: 768px) {\n  .menu-content-wrapper[_ngcontent-%COMP%] {\n    padding: 1rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .menu-content-wrapper[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.25rem;\n  }\n}\n.menu-sections[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.category-section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  scroll-margin-top: 120px;\n}\n.category-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .category-section[_ngcontent-%COMP%] {\n    scroll-margin-top: 60px;\n    margin-bottom: 1.5rem;\n  }\n  .category-section[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 1.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .category-section[_ngcontent-%COMP%] {\n    scroll-margin-top: 50px;\n    margin-bottom: 1rem;\n  }\n  .category-section[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 1rem;\n  }\n}\n.category-heading[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #1d1d1c;\n}\n@media (max-width: 768px) {\n  .category-heading[_ngcontent-%COMP%] {\n    margin-left: 0;\n    font-size: 1.4rem;\n    margin-bottom: 1rem;\n    padding-left: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .category-heading[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-bottom: 0.75rem;\n    padding-left: 0.25rem;\n  }\n}\n.deal-grid[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  width: 90%;\n}\n@media (min-width: 992px) {\n  .deal-grid[_ngcontent-%COMP%] {\n    display: grid !important;\n    grid-template-columns: repeat(3, 1fr) !important;\n    gap: 0.15rem;\n    margin-left: 80px;\n    width: 90%;\n  }\n}\n@media (min-width: 992px) and (max-width: 1200px) {\n  .deal-grid[_ngcontent-%COMP%] {\n    gap: 0.4rem;\n  }\n}\n@media (min-width: 992px) {\n  .deal-grid[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%], \n   .deal-grid[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n   .deal-grid[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex: none !important;\n    max-width: none !important;\n    padding: 0 !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .deal-grid[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n    padding: 0 0.5rem;\n    display: block;\n  }\n}\n@media (max-width: 480px) {\n  .deal-grid[_ngcontent-%COMP%] {\n    padding: 0 0.25rem;\n  }\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 400px;\n}\n@media (max-width: 768px) {\n  .loading-container[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n    min-height: 300px;\n  }\n}\n@media (max-width: 480px) {\n  .loading-container[_ngcontent-%COMP%] {\n    padding: 1.5rem 0.5rem;\n    min-height: 250px;\n  }\n}\n.deal-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  padding: 10px;\n  gap: 0.6rem;\n  background: #ffffff;\n  border-radius: 14px;\n  border: 1px solid #ffe8a3;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  transition: 0.25s ease;\n  cursor: pointer;\n  height: 90%;\n  align-items: stretch;\n  width: auto;\n}\n.deal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.deal-card[_ngcontent-%COMP%]:active {\n  transform: translateY(-2px);\n}\n.deal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);\n}\n@media (min-width: 992px) {\n  .deal-card[_ngcontent-%COMP%] {\n    width: 90%;\n    min-width: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .deal-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .deal-card[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 0.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .deal-card[_ngcontent-%COMP%] {\n    padding: 10px;\n    gap: 0.6rem;\n  }\n}\n.deal-image[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 160px;\n  min-width: 99px;\n  height: 160px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #ececec;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.deal-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n  display: block;\n}\n@media (max-width: 1200px) {\n  .deal-image[_ngcontent-%COMP%] {\n    width: 150px;\n    min-width: 150px;\n    height: 150px;\n  }\n}\n@media (max-width: 768px) {\n  .deal-image[_ngcontent-%COMP%] {\n    width: 120px;\n    min-width: 120px;\n    height: 120px;\n  }\n}\n@media (max-width: 480px) {\n  .deal-image[_ngcontent-%COMP%] {\n    width: 100px;\n    min-width: 100px;\n    height: 100px;\n  }\n}\n.deal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 140px;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .deal-content[_ngcontent-%COMP%] {\n    min-height: 120px;\n  }\n}\n@media (max-width: 480px) {\n  .deal-content[_ngcontent-%COMP%] {\n    min-height: 100px;\n  }\n}\n.deal-header[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  display: block;\n  width: 210px;\n  justify-content: space-between;\n  align-items: center;\n}\n.deal-header[_ngcontent-%COMP%]   .deal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .deal-header[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .deal-header[_ngcontent-%COMP%]   .deal-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .deal-header[_ngcontent-%COMP%]   .deal-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.deal-desc[_ngcontent-%COMP%] {\n  text-wrap: balance;\n  font-size: 0.95rem;\n  color: #0a0a0a;\n  margin: 4px 0 5px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 2.8em;\n}\n@media (max-width: 768px) {\n  .deal-desc[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    margin: 3px 0 4px;\n  }\n}\n@media (max-width: 480px) {\n  .deal-desc[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin: 2px 0 3px;\n  }\n}\n.deal-price[_ngcontent-%COMP%] {\n  background-color: #e36310;\n  width: fit-content;\n  min-width: 100px;\n  padding: 0.3rem 0.2rem;\n  border-radius: 30px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0.5rem 0;\n  text-align: center;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .deal-price[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    min-width: 90px;\n    padding: 0.25rem 0.8rem;\n    margin: 0.4rem 0;\n  }\n}\n@media (max-width: 480px) {\n  .deal-price[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    min-width: 80px;\n    padding: 0.2rem 0.7rem;\n    margin: 0.3rem 0;\n  }\n}\n.deal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 10px;\n}\n.deal-btn[_ngcontent-%COMP%] {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  padding: 0.3rem 1.1rem;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: 0.25s;\n}\n.deal-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e36310;\n  transform: translateY(-2px);\n}\n.deal-btn[_ngcontent-%COMP%]:disabled {\n  background: #bcbcbc;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n@media (max-width: 768px) {\n  .deal-btn[_ngcontent-%COMP%] {\n    padding: 0.4rem 1rem;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .deal-btn[_ngcontent-%COMP%] {\n    padding: 0.35rem 0.9rem;\n    font-size: 0.85rem;\n  }\n}\n.fav-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #aaa;\n  transition: 0.2s;\n}\n.fav-btn[_ngcontent-%COMP%]:hover {\n  color: #ff4a4a;\n  transform: scale(1.15);\n}\n.fav-btn.active[_ngcontent-%COMP%] {\n  color: #ff4a4a;\n}\n@media (max-width: 768px) {\n  .fav-btn[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .fav-btn[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4rem;\n  color: #777;\n  padding: 2rem;\n}\n@media (max-width: 768px) {\n  .empty[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    padding: 1.5rem 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .empty[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n    padding: 1rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=menu.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{ selector: "app-menu", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ProductPopupSimpleComponent,
      ProductPopupComplexComponent
    ], template: `<div class="menu-container">

  <!-- Slider Section -->
  <div class="slider-container w-100 mb-4 mb-md-3" *ngIf="sliderImages && sliderImages.length > 0">
    <div class="slider-wrapper position-relative w-100">
      <button class="slider-nav-btn slider-prev d-none d-md-flex" (click)="prevSlide()" aria-label="Previous slide" type="button">
        <i class="bi bi-chevron-left"></i>
      </button>
      
      <div class="slider-content w-100">
        <div 
          class="slider-slide" 
          *ngFor="let image of sliderImages; let i = index"
          [class.active]="i === currentSlideIndex"
        >
          <img 
            [src]="getSliderImageUrl(image)" 
            [alt]="'Slide ' + (i + 1)"
            (error)="onImageError($event)"
            loading="eager"
            class="w-100 h-100"
          />
        </div>
      </div>
      
      <button class="slider-nav-btn slider-next d-none d-md-flex" (click)="nextSlide()" aria-label="Next slide" type="button">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
    
    <!-- Slider Indicators -->
    <div class="slider-indicators d-flex justify-content-center py-2 py-md-3">
      <button 
        *ngFor="let image of sliderImages; let i = index"
        class="slider-indicator"
        [class.active]="i === currentSlideIndex"
        (click)="goToSlide(i)"
        [attr.aria-label]="'Go to slide ' + (i + 1)"
        type="button"
      ></button>
    </div>
  </div>

  <!-- Category Tabs Section - Now moved to header, hidden here -->
  <!-- <div class="category-tabs-section w-100 mb-3 mb-md-2 mb-lg-4" *ngIf="categories.length > 0">
    <div class="category-tabs-container d-flex align-items-center overflow-auto px-2 px-md-3">
      <button
        class="category-tab"
        [class.active]="activeCategoryId === null"
        (click)="selectCategory(null)"
        type="button"
      >
        All
      </button>
      <button
        *ngFor="let category of categories"
        class="category-tab"
        [class.active]="activeCategoryId === category.id"
        (click)="selectCategory(category.id)"
        type="button"
      >
        {{ category.name }}
      </button>
      <div class="category-arrow d-flex align-items-center justify-content-center px-2 px-md-3">
        <i class="bi bi-chevron-right"></i>
      </div>
    </div>
  </div> -->

  <!-- Loading -->
  <div *ngIf="loading" class="loading-container">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-2">Loading menu items...</p>
  </div>

  <!-- Category Sections -->
  <div *ngIf="!loading && categorySections.length > 0" class="menu-content-wrapper">
    <div class="menu-sections">
      
      <div *ngFor="let section of categorySections" class="category-section" [id]="'category-' + section.category.id">
        
        <!-- Category Heading -->
        <h2 class="category-heading">{{ section.category.name }}</h2>
        
        <!-- Deals Grid for this Category -->
        <div class="deal-grid row g-2 g-md-3 d-md-grid">
          <div *ngFor="let item of section.items" class="deal-card col-12 col-md-6 col-lg-4 me-3" style="cursor: pointer;">
            
            <!-- LEFT: Image -->
            <div class="deal-image d-flex align-items-center justify-content-center" (click)="openProductPopup(item, $event)">
              <img 
                [src]="getImageUrl(item.baseImageUrl)" 
                [alt]="item.name"
                (error)="onImageError($event)"
                class="w-100 h-100 object-fit-cover"
              />
            </div>

            <!-- RIGHT: Content -->
            <div class="deal-content d-flex flex-column" (click)="openProductPopup(item, $event)">
              <div class="deal-header" (click)="openProductPopup(item, $event)">
                <h3 class="deal-title mb-2" (click)="openProductPopup(item, $event)">{{ item.name }}</h3>
                <p class="deal-desc mb-2">
                  {{ truncateDescription(item.description) }}
                </p>
              </div>

              <div class="deal-price">
                <span *ngIf="getItemPrice(item.id)">{{ formatPrice(getItemPrice(item.id)!) }}</span>
                <span *ngIf="!getItemPrice(item.id)" class="price-loading">Loading price...</span>
              </div>
              
              <div class="deal-footer d-flex align-items-center justify-content-between">
                <button 
                  class="deal-btn btn" 
                  (click)="addToCart(item); $event.stopPropagation()"
                  [disabled]="!item.isAvailable"
                  type="button"
                >
                  Add To Cart
                </button>
                <button 
                  class="fav-btn btn border-0 bg-transparent"
                  (click)="toggleFavorite(item.id); $event.stopPropagation()"
                  [class.active]="isFavorite(item.id)"
                  type="button"
                >
                  <i class="bi" 
                     [class.bi-heart]="!isFavorite(item.id)" 
                     [class.bi-heart-fill]="isFavorite(item.id)">
                  </i>
                </button>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div *ngIf="!loading && categorySections.length === 0 && menuItems.length === 0" class="empty">
    <i class="bi bi-inbox fs-1 text-muted"></i>
    <h3>No menu items found</h3>
  </div>
</div>


<!-- Simple Popup (Single Portion) -->
<app-product-popup-simple
  *ngIf="showSimplePopup && selectedMenuItemDetail"
  [menuItemDetail]="selectedMenuItemDetail!"
  (close)="onClosePopup()"
  (addToCart)="onAddToCartFromPopup($event)">
</app-product-popup-simple>

<!-- Complex Popup (Multiple Portions) -->
<app-product-popup-complex
  *ngIf="showComplexPopup && selectedMenuItemDetail"
  [menuItemDetail]="selectedMenuItemDetail!"
  (close)="onClosePopup()"
  (addToCart)="onAddToCartFromPopup($event)">
</app-product-popup-complex>
`, styles: ['@charset "UTF-8";\n\n/* projects/client/src/app/features/menu/menu.component.scss */\n.menu-container {\n  padding: 0;\n  background: #faf7f2;\n  min-height: 100vh;\n  margin: -2rem;\n  width: calc(100% + 4rem);\n}\n@media (max-width: 768px) {\n  .menu-container {\n    margin: -1rem;\n    width: calc(100% + 2rem);\n  }\n}\n.slider-container {\n  width: 100%;\n  position: relative;\n  margin-bottom: 2rem;\n  background: #fff;\n  min-height: 400px;\n}\n@media (max-width: 768px) {\n  .slider-container {\n    min-height: 250px;\n  }\n}\n.slider-wrapper {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.slider-content {\n  position: relative;\n  width: 100%;\n  height: 400px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n@media (max-width: 768px) {\n  .slider-content {\n    height: 250px;\n  }\n}\n.slider-slide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.6s ease-in-out;\n  visibility: hidden;\n}\n.slider-slide.active {\n  opacity: 1;\n  z-index: 1;\n  visibility: visible;\n}\n.slider-slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  background: #f0f0f0;\n}\n.slider-nav-btn {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.8);\n  border: none;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.3s ease;\n  color: #333;\n  font-size: 1.5rem;\n}\n.slider-nav-btn:hover {\n  background: rgb(255, 255, 255);\n  transform: translateY(-50%) scale(1.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.slider-nav-btn:active {\n  transform: translateY(-50%) scale(0.95);\n}\n.slider-nav-btn i {\n  font-size: 1.5rem;\n}\n@media (max-width: 768px) {\n  .slider-nav-btn {\n    width: 40px;\n    height: 40px;\n  }\n  .slider-nav-btn i {\n    font-size: 1.2rem;\n  }\n}\n.slider-prev {\n  left: 20px;\n}\n@media (max-width: 768px) {\n  .slider-prev {\n    left: 10px;\n  }\n}\n.slider-next {\n  right: 20px;\n}\n@media (max-width: 768px) {\n  .slider-next {\n    right: 10px;\n  }\n}\n.slider-indicators {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 15px 0;\n  background: #fff;\n}\n@media (max-width: 768px) {\n  .slider-indicators {\n    padding: 10px 0;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .slider-indicators {\n    padding: 8px 0;\n    gap: 6px;\n  }\n}\n.slider-indicator {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #ddd;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0;\n}\n.slider-indicator:hover {\n  border-color: #f97316;\n  transform: scale(1.2);\n}\n.slider-indicator.active {\n  background: #f97316;\n  border-color: #f97316;\n  width: 30px;\n  border-radius: 6px;\n}\n@media (max-width: 480px) {\n  .slider-indicator {\n    width: 10px;\n    height: 10px;\n    border-width: 1.5px;\n  }\n  .slider-indicator.active {\n    width: 24px;\n  }\n}\n.category-tabs-section {\n  background: #000;\n  padding: 0;\n  margin-bottom: 2rem;\n  position: sticky;\n  top: 60px;\n  z-index: 100;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .category-tabs-section {\n    top: 0;\n    margin-bottom: 1rem;\n  }\n}\n.category-tabs-container {\n  display: flex;\n  margin-left: 200px;\n  align-items: center;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  padding: 0.75rem 1rem;\n  gap: 0;\n}\n.category-tabs-container::-webkit-scrollbar {\n  display: none;\n}\n@media (max-width: 768px) {\n  .category-tabs-container {\n    margin-left: 0;\n    padding: 0.6rem 0.75rem;\n  }\n}\n.category-tab {\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  padding: 0.5rem 1.25rem;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  font-size: 0.95rem;\n  color: #fff;\n  flex-shrink: 0;\n  min-width: fit-content;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.category-tab:hover {\n  color: #f97316;\n}\n.category-tab.active {\n  color: #fff;\n}\n.category-tab.active::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 1.25rem;\n  right: 1.25rem;\n  height: 2px;\n  background: #f97316;\n}\n@media (max-width: 768px) {\n  .category-tab {\n    padding: 0.5rem 0.9rem;\n    font-size: 0.8rem;\n    letter-spacing: 0.3px;\n  }\n  .category-tab.active::after {\n    left: 0.9rem;\n    right: 0.9rem;\n    height: 2px;\n  }\n}\n.category-arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1rem;\n  color: #999;\n  flex-shrink: 0;\n}\n.category-arrow i {\n  font-size: 1rem;\n}\n@media (max-width: 768px) {\n  .category-arrow {\n    padding: 0 0.75rem;\n  }\n  .category-arrow i {\n    font-size: 0.9rem;\n  }\n}\n.menu-content-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 2rem 1rem;\n}\n@media (max-width: 768px) {\n  .menu-content-wrapper {\n    padding: 1rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .menu-content-wrapper {\n    padding: 0.75rem 0.25rem;\n  }\n}\n.menu-sections {\n  width: 100%;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.category-section {\n  margin-bottom: 1rem;\n  scroll-margin-top: 120px;\n}\n.category-section:last-child {\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .category-section {\n    scroll-margin-top: 60px;\n    margin-bottom: 1.5rem;\n  }\n  .category-section:last-child {\n    margin-bottom: 1.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .category-section {\n    scroll-margin-top: 50px;\n    margin-bottom: 1rem;\n  }\n  .category-section:last-child {\n    margin-bottom: 1rem;\n  }\n}\n.category-heading {\n  margin-left: 80px;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #1d1d1c;\n}\n@media (max-width: 768px) {\n  .category-heading {\n    margin-left: 0;\n    font-size: 1.4rem;\n    margin-bottom: 1rem;\n    padding-left: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .category-heading {\n    font-size: 1.2rem;\n    margin-bottom: 0.75rem;\n    padding-left: 0.25rem;\n  }\n}\n.deal-grid {\n  margin-left: 80px;\n  width: 90%;\n}\n@media (min-width: 992px) {\n  .deal-grid {\n    display: grid !important;\n    grid-template-columns: repeat(3, 1fr) !important;\n    gap: 0.15rem;\n    margin-left: 80px;\n    width: 90%;\n  }\n}\n@media (min-width: 992px) and (max-width: 1200px) {\n  .deal-grid {\n    gap: 0.4rem;\n  }\n}\n@media (min-width: 992px) {\n  .deal-grid .col-12,\n  .deal-grid .col-md-6,\n  .deal-grid .col-lg-4 {\n    width: auto !important;\n    flex: none !important;\n    max-width: none !important;\n    padding: 0 !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .deal-grid {\n    margin-left: 0;\n    width: 100%;\n    padding: 0 0.5rem;\n    display: block;\n  }\n}\n@media (max-width: 480px) {\n  .deal-grid {\n    padding: 0 0.25rem;\n  }\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  min-height: 400px;\n}\n@media (max-width: 768px) {\n  .loading-container {\n    padding: 2rem 1rem;\n    min-height: 300px;\n  }\n}\n@media (max-width: 480px) {\n  .loading-container {\n    padding: 1.5rem 0.5rem;\n    min-height: 250px;\n  }\n}\n.deal-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  display: flex;\n  padding: 10px;\n  gap: 0.6rem;\n  background: #ffffff;\n  border-radius: 14px;\n  border: 1px solid #ffe8a3;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n  transition: 0.25s ease;\n  cursor: pointer;\n  height: 90%;\n  align-items: stretch;\n  width: auto;\n}\n.deal-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n.deal-card:active {\n  transform: translateY(-2px);\n}\n.deal-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);\n}\n@media (min-width: 992px) {\n  .deal-card {\n    width: 90%;\n    min-width: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .deal-card {\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .deal-card {\n    padding: 12px;\n    gap: 0.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .deal-card {\n    padding: 10px;\n    gap: 0.6rem;\n  }\n}\n.deal-image {\n  margin: 10px;\n  width: 160px;\n  min-width: 99px;\n  height: 160px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #ececec;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.deal-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n  display: block;\n}\n@media (max-width: 1200px) {\n  .deal-image {\n    width: 150px;\n    min-width: 150px;\n    height: 150px;\n  }\n}\n@media (max-width: 768px) {\n  .deal-image {\n    width: 120px;\n    min-width: 120px;\n    height: 120px;\n  }\n}\n@media (max-width: 480px) {\n  .deal-image {\n    width: 100px;\n    min-width: 100px;\n    height: 100px;\n  }\n}\n.deal-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 140px;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n  .deal-content {\n    min-height: 120px;\n  }\n}\n@media (max-width: 480px) {\n  .deal-content {\n    min-height: 100px;\n  }\n}\n.deal-header {\n  margin-top: 5px;\n  display: block;\n  width: 210px;\n  justify-content: space-between;\n  align-items: center;\n}\n.deal-header .deal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #333;\n}\n@media (max-width: 768px) {\n  .deal-header {\n    width: 100%;\n  }\n  .deal-header .deal-title {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .deal-header .deal-title {\n    font-size: 1rem;\n  }\n}\n.deal-desc {\n  text-wrap: balance;\n  font-size: 0.95rem;\n  color: #0a0a0a;\n  margin: 4px 0 5px;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 2.8em;\n}\n@media (max-width: 768px) {\n  .deal-desc {\n    font-size: 0.85rem;\n    margin: 3px 0 4px;\n  }\n}\n@media (max-width: 480px) {\n  .deal-desc {\n    font-size: 0.8rem;\n    margin: 2px 0 3px;\n  }\n}\n.deal-price {\n  background-color: #e36310;\n  width: fit-content;\n  min-width: 100px;\n  padding: 0.3rem 0.2rem;\n  border-radius: 30px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0.5rem 0;\n  text-align: center;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .deal-price {\n    font-size: 0.95rem;\n    min-width: 90px;\n    padding: 0.25rem 0.8rem;\n    margin: 0.4rem 0;\n  }\n}\n@media (max-width: 480px) {\n  .deal-price {\n    font-size: 0.9rem;\n    min-width: 80px;\n    padding: 0.2rem 0.7rem;\n    margin: 0.3rem 0;\n  }\n}\n.deal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 10px;\n}\n.deal-btn {\n  background: #f97316;\n  color: #fff;\n  border: none;\n  padding: 0.3rem 1.1rem;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: 0.25s;\n}\n.deal-btn:hover:not(:disabled) {\n  background: #e36310;\n  transform: translateY(-2px);\n}\n.deal-btn:disabled {\n  background: #bcbcbc;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n@media (max-width: 768px) {\n  .deal-btn {\n    padding: 0.4rem 1rem;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .deal-btn {\n    padding: 0.35rem 0.9rem;\n    font-size: 0.85rem;\n  }\n}\n.fav-btn {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: #aaa;\n  transition: 0.2s;\n}\n.fav-btn:hover {\n  color: #ff4a4a;\n  transform: scale(1.15);\n}\n.fav-btn.active {\n  color: #ff4a4a;\n}\n@media (max-width: 768px) {\n  .fav-btn {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 480px) {\n  .fav-btn {\n    font-size: 1rem;\n  }\n}\n.empty {\n  text-align: center;\n  margin-top: 4rem;\n  color: #777;\n  padding: 2rem;\n}\n@media (max-width: 768px) {\n  .empty {\n    margin-top: 2rem;\n    padding: 1.5rem 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .empty {\n    margin-top: 1.5rem;\n    padding: 1rem 0.5rem;\n  }\n}\n/*# sourceMappingURL=menu.component.css.map */\n'] }]
  }], () => [{ type: MenuItemService }, { type: CategoryService }, { type: CartService }, { type: NotificationService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src/app/features/menu/menu.component.ts", lineNumber: 34 });
})();
export {
  MenuComponent
};
//# sourceMappingURL=chunk-LKXPED7G.js.map
