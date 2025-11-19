export interface Category {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  displayOrder: number;
  isVisible: boolean;
}

export interface PortionDetailInput {
  name: string;
  price: number;
}

export interface PortionInput {
  name: string;
  description?: string;
  imageUrl?: string;
  isActive?: boolean;
  displayOrder?: number;
  minSelection?: number;
  maxSelection?: number | null;
  portionDetails: PortionDetailInput[];
}

export interface CreateMenuItemWithPriceRequest {
  id?: number; // Optional: If provided, this is an update operation
  categoryId: number;
  menuItemName: string;
  menuItemDescription?: string;
  menuItemBaseImageUrl?: string;
  menuItemIsAvailable?: boolean;
  menuItemPreparationTime?: number;
  portions?: PortionInput[];
  portionName?: string;
  portionDescription?: string;
  portionImageUrl?: string;
  portionDetailName?: string;
  price?: number;
}

export interface MenuItemDetail {
  id: number;
  categoryId: number;
  categoryName: string;
  name: string;
  description?: string;
  baseImageUrl?: string;
  isAvailable: boolean;
  preparationTime: number;
  createdAt: string;
  updatedAt: string;
  createdBy?: number;
  updatedBy?: number;
  portionCount: number;
  portions: PortionDetail[];
}

export interface PortionDetail {
  id: number;
  menuItemId: number;
  menuItemName: string;
  name: string;
  description?: string;
  imageUrl?: string;
  isActive: boolean;
  displayOrder: number;
  minSelection: number;
  maxSelection?: number | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: number;
  updatedBy?: number;
  portionDetails: PortionDetailBasic[];
}

export interface PortionDetailBasic {
  id: number;
  name: string;
  price: number;
}

export interface PortionBasic {
  id: number;
  name: string;
  isActive: boolean;
  portionDetailCount: number;
}

