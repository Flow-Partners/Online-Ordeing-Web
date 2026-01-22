export interface MenuItem {
  id: number;
  categoryId: number;
  categoryName: string;
  name: string;
  description?: string;
  baseImageUrl?: string;
  isAvailable: boolean;
  preparationTime: number;
  displayOrder: number;
  createdAt: string;
  portionCount: number;
}

export interface PortionDetail {
  id: number;
  name: string;
  price: number;
}

export interface Portion {
  id: number;
  menuItemId: number;
  menuItemName: string;
  name: string;
  description?: string;
  imageUrl?: string;
  isActive: boolean;
  displayOrder: number;
  minSelection: number;
  maxSelection?: number;
  createdAt: string;
  updatedAt: string;
  portionDetails: PortionDetail[];
}

export interface MenuItemDetail extends MenuItem {
  updatedAt: string;
  createdBy?: number;
  updatedBy?: number;
  portions: Portion[];
}

export interface CartItem {
  menuItemId: number;
  menuItemName: string;
  menuItemImage?: string;
  portionId: number;
  portionName: string;
  portionDetailId: number;
  portionDetailName: string;
  price: number;
  quantity: number;
}

export interface PaginationRequest {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

