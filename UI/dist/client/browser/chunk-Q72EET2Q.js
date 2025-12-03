import {
  API_ENDPOINTS
} from "./chunk-VBB7B4UY.js";
import {
  ApiService
} from "./chunk-7V4CR2SO.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/core/services/category.service.ts
var CategoryService = class _CategoryService {
  apiService;
  constructor(apiService) {
    this.apiService = apiService;
  }
  /**
   * Get all categories
   */
  getCategories() {
    return this.apiService.get(API_ENDPOINTS.CATEGORIES.LIST);
  }
  /**
   * Get category by ID
   */
  getCategoryById(id) {
    return this.apiService.get(API_ENDPOINTS.CATEGORIES.DETAIL(id));
  }
  /**
   * Get full image URL
   */
  getImageUrl(imageUrl) {
    if (!imageUrl) {
      return "/assets/i18n/placeholder-food.png";
    }
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      return imageUrl;
    }
    const apiUrl = "http://localhost:5071";
    return `${apiUrl}${imageUrl}`;
  }
  static \u0275fac = function CategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  CategoryService
};
//# sourceMappingURL=chunk-Q72EET2Q.js.map
