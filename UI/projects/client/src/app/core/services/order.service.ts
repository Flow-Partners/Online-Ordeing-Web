import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '@models/api-response.model';
import { CartItem } from '@models/menu-item.model';

export interface PlaceOrderDto {
  customerId?: number; // Optional - if not provided, customerInfo must be provided
  customerAddressId?: number;
  customerInfo?: CustomerInfoDto; // Required if customerId is not provided
  departmentId: number;
  ticketTypeId: number;
  orderItems: OrderItemDto[];
  note?: string;
  exchangeRate?: number;
  taxIncluded?: boolean;
  name?: string;
}

export interface CustomerInfoDto {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  mobile?: string;
  address?: CustomerAddressInfoDto;
}

export interface CustomerAddressInfoDto {
  addressType?: string;
  label?: string;
  contactName?: string;
  contactPhone?: string;
  addressLine1: string;
  addressLine2?: string;
  buildingNumber?: string;
  floor?: string;
  apartment?: string;
  landmark?: string;
  city: string;
  state?: string;
  country?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  deliveryInstructions?: string;
}

export interface OrderItemDto {
  menuItemId: number;
  portionId?: number;
  portionDetailId?: number;
  quantity: number;
  price: number;
  portionCount?: number;
  warehouseId: number;
  departmentId: number;
  accountTransactionTypeId: number;
  calculatePrice?: boolean;
  decreaseInventory?: boolean;
  increaseInventory?: boolean;
  priceTag?: string;
  tag?: string;
}

export interface OrderResponse {
  ticketId: number;
  ticketNumber?: string;
  date: string;
  totalAmount: number;
  remainingAmount: number;
  isClosed: boolean;
  customerId: number;
  customerAddressId?: number;
  orderItems: OrderItemResponse[];
}

export interface OrderItemResponse {
  id: number;
  menuItemId: number;
  menuItemName: string;
  portionId?: number;
  portionName?: string;
  portionDetailId?: number;
  price: number;
  quantity: number;
  portionCount: number;
  createdDateTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Default values - these should ideally come from configuration
  private readonly DEFAULT_DEPARTMENT_ID = 1;
  private readonly DEFAULT_TICKET_TYPE_ID = 1;
  private readonly DEFAULT_WAREHOUSE_ID = 1;
  private readonly DEFAULT_ACCOUNT_TRANSACTION_TYPE_ID = 1;

  constructor(private apiService: ApiService) {}

  /**
   * Place an order
   */
  placeOrder(orderData: PlaceOrderDto): Observable<ApiResponse<OrderResponse>> {
    debugger;
    return this.apiService.post<OrderResponse>('/Orders/place', orderData);
  }

  /**
   * Convert cart items to order items
   */
  convertCartItemsToOrderItems(cartItems: CartItem[]): OrderItemDto[] {
    return cartItems.map(item => ({
      menuItemId: item.menuItemId,
      // Only include portionId if it's a valid number (not 0 or undefined)
      portionId: (item.portionId && item.portionId > 0) ? item.portionId : undefined,
      // Only include portionDetailId if it's a valid number (not 0 or undefined)
      portionDetailId: (item.portionDetailId && item.portionDetailId > 0) ? item.portionDetailId : undefined,
      quantity: item.quantity,
      price: item.price,
      portionCount: 1,
      warehouseId: this.DEFAULT_WAREHOUSE_ID,
      departmentId: this.DEFAULT_DEPARTMENT_ID,
      accountTransactionTypeId: this.DEFAULT_ACCOUNT_TRANSACTION_TYPE_ID,
      calculatePrice: true,
      decreaseInventory: false,
      increaseInventory: false
    }));
  }

  /**
   * Get default department ID
   */
  getDefaultDepartmentId(): number {
    return this.DEFAULT_DEPARTMENT_ID;
  }

  /**
   * Get default ticket type ID
   */
  getDefaultTicketTypeId(): number {
    return this.DEFAULT_TICKET_TYPE_ID;
  }

  /**
   * Get customer orders by customer ID
   */
  getCustomerOrders(customerId: number, pageNumber: number = 1, pageSize: number = 10, searchTerm?: string): Observable<ApiResponse<PagedResult<CustomerOrder>>> {
    const params: any = {
      pageNumber: pageNumber.toString(),
      pageSize: pageSize.toString()
    };
    
    if (searchTerm) {
      params.searchTerm = searchTerm;
    }

    return this.apiService.get<PagedResult<CustomerOrder>>(`/Orders/customer/${customerId}`, { params });
  }
}

export interface CustomerOrder {
  id: number;
  ticketNumber?: string;
  date: string;
  totalAmount: number;
  remainingAmount: number;
  isClosed: boolean;
  isLocked: boolean;
  customerId: number;
  customerName?: string;
  customerPhone?: string;
  customerAddressId?: number;
  customerAddress?: string;
  orderCount: number;
  lastUpdateTime: string;
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

