import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '@constants/api-endpoints';
import { Category, CategoryListViewModel } from '@models/category.model';
import { ApiResponse } from '@models/api-response.model';
import { PagedResult } from '@models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private apiService: ApiService) {}

  /**
   * Get all categories
   */
  getCategories(): Observable<ApiResponse<PagedResult<CategoryListViewModel>>> {
    return this.apiService.get<PagedResult<CategoryListViewModel>>(API_ENDPOINTS.CATEGORIES.LIST);
  }

  /**
   * Get category by ID
   */
  getCategoryById(id: number): Observable<ApiResponse<CategoryListViewModel>> {
    return this.apiService.get<CategoryListViewModel>(API_ENDPOINTS.CATEGORIES.DETAIL(id));
  }

  /**
   * Get full image URL
   */
  getImageUrl(imageUrl?: string): string {
    if (!imageUrl) {
      return '/assets/i18n/placeholder-food.png';
    }
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    }
    const apiUrl = 'http://localhost:5071';
    return `${apiUrl}${imageUrl}`;
  }
}

