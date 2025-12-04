import {
  API_ENDPOINTS
} from "./chunk-VBB7B4UY.js";
import {
  ApiService
} from "./chunk-7V4CR2SO.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/core/services/menu-item.service.ts
var MenuItemService = class _MenuItemService {
  apiService;
  constructor(apiService) {
    this.apiService = apiService;
  }
  /**
   * Get all menu items with pagination
   */
  getMenuItems(request) {
    const params = {};
    if (request?.page)
      params.pageNumber = request.page;
    if (request?.limit)
      params.pageSize = request.limit;
    if (request?.search)
      params.searchTerm = request.search;
    if (request?.sortBy)
      params.sortBy = request.sortBy;
    if (request?.sortOrder)
      params.sortDescending = request.sortOrder === "desc";
    return this.apiService.get(API_ENDPOINTS.MENU_ITEMS.LIST, { params });
  }
  /**
   * Get menu item by ID
   */
  getMenuItemById(id) {
    return this.apiService.get(API_ENDPOINTS.MENU_ITEMS.DETAIL(id)).pipe(map((response) => {
      if (response.success && response.data) {
        const apiData = response.data;
        const mappedData = {
          id: apiData.id,
          categoryId: apiData.categoryId,
          categoryName: apiData.categoryName || "",
          name: apiData.name,
          description: apiData.description,
          baseImageUrl: apiData.baseImageUrl,
          isAvailable: apiData.isAvailable,
          preparationTime: apiData.preparationTime,
          createdAt: apiData.createdAt,
          updatedAt: apiData.updatedAt,
          createdBy: apiData.createdBy,
          updatedBy: apiData.updatedBy,
          portionCount: (apiData.Portions || apiData.portions || []).length,
          portions: (apiData.Portions || apiData.portions || []).map((p) => ({
            id: p.id,
            menuItemId: p.menuItemId,
            menuItemName: p.menuItemName || apiData.name,
            name: p.name,
            description: p.description,
            imageUrl: p.imageUrl,
            isActive: p.isActive,
            displayOrder: p.displayOrder,
            minSelection: p.minSelection,
            maxSelection: p.maxSelection,
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
            portionDetails: (p.PortionDetails || p.portionDetails || []).map((pd) => ({
              id: pd.id,
              name: pd.name,
              price: pd.price
            }))
          }))
        };
        return __spreadProps(__spreadValues({}, response), {
          data: mappedData
        });
      }
      return response;
    }));
  }
  /**
   * Get menu items by category
   */
  getMenuItemsByCategory(categoryId) {
    return this.apiService.get(API_ENDPOINTS.MENU_ITEMS.BY_CATEGORY(categoryId));
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
  static \u0275fac = function MenuItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuItemService, factory: _MenuItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

export {
  MenuItemService
};
//# sourceMappingURL=chunk-DAG6DS4M.js.map
