import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { API_ENDPOINTS } from '@constants/api-endpoints';
import { Category, CategoryListViewModel } from '@models/category.model';
import { ApiResponse } from '@models/api-response.model';
import { PagedResult } from '@models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // Shared state for active category (used for scroll spy sync between menu and header)
  private activeCategoryId$ = new BehaviorSubject<number | null>(null);
  
  constructor(private apiService: ApiService) {}

  /**
   * Get active category observable
   */
  getActiveCategoryId(): Observable<number | null> {
    return this.activeCategoryId$.asObservable();
  }

  /**
   * Set active category (called by menu component scroll spy)
   */
  setActiveCategoryId(categoryId: number | null): void {
    this.activeCategoryId$.next(categoryId);
  }

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

