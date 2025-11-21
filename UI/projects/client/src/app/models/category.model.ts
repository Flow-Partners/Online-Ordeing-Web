export interface Category {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  displayOrder: number;
  isVisible: boolean;
  createdAt?: string;
  menuItemCount?: number;
}

export interface CategoryListViewModel {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  displayOrder: number;
  isVisible: boolean;
  createdAt?: string;
  menuItemCount?: number;
}

