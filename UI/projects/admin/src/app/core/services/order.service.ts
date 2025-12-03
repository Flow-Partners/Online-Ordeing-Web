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
}

