import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '@models/api-response.model';
import { API_ENDPOINTS } from '@constants/api-endpoints';

interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

export interface OrderList {
  id: number;
  ticketId: number;
  ticketNumber?: string;
  menuItemId: number;
  menuItemName: string;
  portionName?: string;
  price: number;
  quantity: number;
  totalAmount: number;
  createdDateTime: string;
  creatingUserName?: string;
  customerId: number;
  customerName?: string;
  customerPhone?: string;
  customerAddress?: string;
  ticketIsClosed: boolean;
  orderNumber: number;
}

export interface TicketDetailViewModel {
  id: number;
  ticketNumber?: string;
  date: string;
  lastUpdateTime: string;
  lastOrderDate: string;
  lastPaymentDate: string;
  isClosed: boolean;
  isLocked: boolean;
  remainingAmount: number;
  totalAmount: number;
  departmentId: number;
  ticketTypeId: number;
  note?: string;
  lastModifiedUserName?: string;
  ticketTags?: string;
  ticketStates?: string;
  exchangeRate: number;
  taxIncluded: boolean;
  name?: string;
  customerId?: number;
  customer?: CustomerViewModel;
  customerAddressId?: number;
  customerAddress?: CustomerAddressViewModel;
  orders: OrderItemViewModel[];
}

export interface CustomerViewModel {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  mobile?: string;
  isActive: boolean;
  isVerified: boolean;
  loyaltyPoints: number;
  totalOrders: number;
  totalSpent: number;
}

export interface CustomerAddressViewModel {
  id: number;
  addressType: string;
  isDefault: boolean;
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
  country: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  deliveryInstructions?: string;
}

export interface OrderItemViewModel {
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
  constructor(private apiService: ApiService) {}

  /**
   * Get all orders with pagination
   */
  getAllOrders(pageNumber: number = 1, pageSize: number = 10, searchTerm?: string, sortBy?: string, sortDescending?: boolean): Observable<ApiResponse<PagedResult<OrderList>>> {
    const params: any = {
      PageNumber: pageNumber.toString(),
      PageSize: pageSize.toString()
    };

    if (searchTerm) {
      params.SearchTerm = searchTerm;
    }

    if (sortBy) {
      params.SortBy = sortBy;
    }

    if (sortDescending !== undefined) {
      params.SortDescending = sortDescending.toString();
    }

    return this.apiService.get<PagedResult<OrderList>>(API_ENDPOINTS.ORDERS.LIST, { params });
  }

  /**
   * Get order by ID
   */
  getOrderById(id: number): Observable<ApiResponse<OrderList>> {
    return this.apiService.get<OrderList>(API_ENDPOINTS.ORDERS.GET(id));
  }

  /**
   * Get orders by ticket ID
   */
  getOrdersByTicketId(ticketId: number): Observable<ApiResponse<OrderList[]>> {
    return this.apiService.get<OrderList[]>(API_ENDPOINTS.ORDERS.GET_BY_TICKET(ticketId));
  }

  /**
   * Update ticket status
   */
  updateTicketStatus(ticketId: number, status: string): Observable<ApiResponse<any>> {
    return this.apiService.put<any>(API_ENDPOINTS.ORDERS.UPDATE_STATUS(ticketId), { status });
  }

  /**
   * Get all tickets by status
   */
  getAllTicketsByStatus(ticketStatus: boolean): Observable<ApiResponse<TicketDetailViewModel[]>> {
    return this.apiService.get<TicketDetailViewModel[]>(API_ENDPOINTS.ORDERS.GET_ALL_TICKETS_BY_STATUS(ticketStatus));
  }
}

