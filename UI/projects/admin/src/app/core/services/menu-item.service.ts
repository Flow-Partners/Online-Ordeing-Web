import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ApiResponse } from '@models/api-response.model';
import { CreateMenuItemWithPriceRequest, MenuItemDetail, Category } from '@models/menu-item.model';
import { API_ENDPOINTS } from '@constants/api-endpoints';

interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  constructor(private apiService: ApiService) {}

  /**
   * Get all categories
   */
  getCategories(): Observable<ApiResponse<Category[]>> {
    console.log('Fetching categories from:', API_ENDPOINTS.CATEGORIES.LIST);
    return this.apiService.get<PagedResult<Category>>(API_ENDPOINTS.CATEGORIES.LIST, {
      params: { PageNumber: '1', PageSize: '100' }
    }).pipe(
      map(response => {
        console.log('Categories API response:', response);
        if (response.success && response.data) {
          const categories = response.data.items || [];
          console.log('Extracted categories:', categories);
          return {
            ...response,
            data: categories
          } as unknown as ApiResponse<Category[]>;
        }
        console.warn('Categories response not successful or no data');
        return { ...response, data: [] } as ApiResponse<Category[]>;
      })
    );
  }

  /**
   * Create menu item with price (accepts FormData for file uploads)
   */
  createMenuItemWithPrice(data: FormData): Observable<ApiResponse<MenuItemDetail>> {
    return this.apiService.postFormData<MenuItemDetail>(API_ENDPOINTS.MENU_ITEMS.CREATE, data);
  }

  /**
   * Create a new category
   */
  createCategory(data: { name: string; description?: string; imageUrl?: string; displayOrder?: number; isVisible?: boolean }): Observable<ApiResponse<Category>> {
    return this.apiService.post<Category>(API_ENDPOINTS.CATEGORIES.CREATE, {
      name: data.name,
      description: data.description || null,
      imageUrl: data.imageUrl || null,
      displayOrder: data.displayOrder ?? 0,
      isVisible: data.isVisible ?? true
    });
  }

  /**
   * Get all menu items with pagination
   */
  getMenuItems(pageNumber: number = 1, pageSize: number = 10): Observable<ApiResponse<PagedResult<MenuItemList>>> {
    return this.apiService.get<PagedResult<MenuItemList>>(API_ENDPOINTS.MENU_ITEMS.LIST, {
      params: { PageNumber: pageNumber.toString(), PageSize: pageSize.toString() }
    });
  }

  /**
   * Delete a menu item
   */
  deleteMenuItem(id: number): Observable<ApiResponse<boolean>> {
    return this.apiService.delete<boolean>(API_ENDPOINTS.MENU_ITEMS.DELETE(id));
  }

  /**
   * Toggle menu item availability
   */
  toggleAvailability(id: number, isAvailable: boolean): Observable<ApiResponse<boolean>> {
    return this.apiService.put<boolean>(API_ENDPOINTS.MENU_ITEMS.TOGGLE_AVAILABILITY(id), isAvailable);
  }

  /**
   * Get menu item by ID
   */
  getMenuItemById(id: number): Observable<ApiResponse<MenuItemDetail>> {
    return this.apiService.get<MenuItemDetail>(API_ENDPOINTS.MENU_ITEMS.GET(id));
  }

  /**
   * Update category order
   */
  updateCategoryOrder(orderData: { categories: Array<{ id: number; displayOrder: number }> }): Observable<ApiResponse<boolean>> {
    return this.apiService.put<boolean>(API_ENDPOINTS.CATEGORIES.UPDATE_ORDER, orderData);
  }
}

export interface MenuItemList {
  id: number;
  categoryId: number;
  categoryName: string;
  name: string;
  description?: string;
  baseImageUrl?: string;
  isAvailable: boolean;
  preparationTime: number;
  createdAt: string;
  portionCount: number;
  imageError?: boolean; // Track if image failed to load
}

