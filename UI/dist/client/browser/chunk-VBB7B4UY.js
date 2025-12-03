import {
  BehaviorSubject,
  Injectable,
  StorageService,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/core/services/cart.service.ts
var CartService = class _CartService {
  storageService;
  cartItemsSubject;
  cartItems$;
  CART_STORAGE_KEY = "cart_items";
  constructor(storageService) {
    this.storageService = storageService;
    const savedCart = this.storageService.getObject(this.CART_STORAGE_KEY) || [];
    this.cartItemsSubject = new BehaviorSubject(savedCart);
    this.cartItems$ = this.cartItemsSubject.asObservable();
  }
  /**
   * Get current cart items
   */
  get cartItems() {
    return this.cartItemsSubject.value;
  }
  /**
   * Get cart item count
   */
  get cartItemCount() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  /**
   * Get cart total
   */
  get cartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  /**
   * Add item to cart
   */
  addToCart(item) {
    const currentCart = [...this.cartItems];
    const existingItemIndex = currentCart.findIndex((cartItem) => cartItem.menuItemId === item.menuItemId && cartItem.portionId === item.portionId && cartItem.portionDetailId === item.portionDetailId);
    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += item.quantity;
    } else {
      currentCart.push(item);
    }
    this.updateCart(currentCart);
  }
  /**
   * Remove item from cart
   */
  removeFromCart(menuItemId, portionId, portionDetailId) {
    const currentCart = this.cartItems.filter((item) => !(item.menuItemId === menuItemId && item.portionId === portionId && item.portionDetailId === portionDetailId));
    this.updateCart(currentCart);
  }
  /**
   * Update item quantity
   */
  updateQuantity(menuItemId, portionId, portionDetailId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(menuItemId, portionId, portionDetailId);
      return;
    }
    const currentCart = this.cartItems.map((item) => {
      if (item.menuItemId === menuItemId && item.portionId === portionId && item.portionDetailId === portionDetailId) {
        return __spreadProps(__spreadValues({}, item), { quantity });
      }
      return item;
    });
    this.updateCart(currentCart);
  }
  /**
   * Clear cart
   */
  clearCart() {
    this.updateCart([]);
  }
  /**
   * Update cart and persist to storage
   */
  updateCart(cart) {
    this.cartItemsSubject.next(cart);
    this.storageService.setObject(this.CART_STORAGE_KEY, cart);
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)(\u0275\u0275inject(StorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }], null);
})();

// projects/client/src/app/constants/api-endpoints.ts
var API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
    VERIFY_EMAIL: "/auth/verify-email"
  },
  USER: {
    PROFILE: "/user/profile",
    UPDATE: "/user/update",
    UPDATE_AVATAR: "/user/avatar",
    DELETE: "/user/delete"
  },
  MENU_ITEMS: {
    LIST: "/MenuItems",
    DETAIL: (id) => `/MenuItems/${id}`,
    BY_CATEGORY: (categoryId) => `/MenuItems/category/${categoryId}`
  },
  CATEGORIES: {
    LIST: "/Categories",
    DETAIL: (id) => `/Categories/${id}`
  }
};

export {
  CartService,
  API_ENDPOINTS
};
//# sourceMappingURL=chunk-VBB7B4UY.js.map
