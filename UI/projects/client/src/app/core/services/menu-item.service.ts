import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '@constants/api-endpoints';
import { MenuItem, MenuItemDetail, PaginationRequest, PagedResult } from '@models/menu-item.model';
import { ApiResponse } from '@models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  constructor(private apiService: ApiService) {}

  /**
   * Get all menu items with pagination
   */
  getMenuItems(request?: PaginationRequest): Observable<ApiResponse<PagedResult<MenuItem>>> {
    const params: any = {};
    if (request?.page) params.pageNumber = request.page;
    if (request?.limit) params.pageSize = request.limit;
    if (request?.search) params.searchTerm = request.search;
    if (request?.sortBy) params.sortBy = request.sortBy;
    if (request?.sortOrder) params.sortDescending = request.sortOrder === 'desc';

    return this.apiService.get<PagedResult<MenuItem>>(API_ENDPOINTS.MENU_ITEMS.LIST, { params });
  }

  /**
   * Get menu item by ID
   */
  getMenuItemById(id: number): Observable<ApiResponse<MenuItemDetail>> {
    return this.apiService.get<MenuItemDetail>(API_ENDPOINTS.MENU_ITEMS.DETAIL(id));
  }

  /**
   * Get menu items by category
   */
  getMenuItemsByCategory(categoryId: number): Observable<ApiResponse<MenuItem[]>> {
    return this.apiService.get<MenuItem[]>(API_ENDPOINTS.MENU_ITEMS.BY_CATEGORY(categoryId));
  }

  /**
   * Get full image URL
   */
  getImageUrl(imageUrl?: string): string {
    if (!imageUrl) {
      return '/assets/i18n/placeholder-food.png'; // Placeholder image
    }
    // If imageUrl is already a full URL, return it
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    }
    // Otherwise, construct the full URL
    const apiUrl = 'http://localhost:5071';
    return `${apiUrl}${imageUrl}`;
  }
}

