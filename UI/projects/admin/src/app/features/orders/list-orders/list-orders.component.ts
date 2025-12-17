import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OrderService, OrderList } from '@core/services/order.service';
import { NotificationService } from '@core/services/notification.service';
import { ApiResponse } from '@models/api-response.model';

interface PagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
}

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {
  orders: OrderList[] = [];
  isLoading = false;
  updatingTicketIds = new Set<number>(); // Track which tickets are being updated
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  totalPages = 0;
  searchText = '';
  sortBy = 'date';
  sortDescending = true;
  statusFilter: 'all' | 'open' | 'closed' = 'all';

  constructor(
    private orderService: OrderService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading = true;
    this.orderService.getAllOrders(
      this.currentPage,
      this.pageSize,
      this.searchText || undefined,
      this.sortBy,
      this.sortDescending
    ).subscribe({
      next: (response: ApiResponse<PagedResult<OrderList>>) => {
        debugger;
        this.isLoading = false;
        if (response.success && response.data) {
          let orders = response.data.items || [];
          
          // Apply status filter
          if (this.statusFilter !== 'all') {
            orders = orders.filter(order => 
              this.statusFilter === 'open' ? !order.ticketIsClosed : order.ticketIsClosed
            );
          }
          
          this.orders = orders;
          this.totalCount = response.data.totalCount || 0;
          this.totalPages = response.data.totalPages || 0;
          this.currentPage = response.data.pageNumber || 1;
        } else {
          this.orders = [];
          this.notificationService.warning('No orders found');
        }
      },
      error: (error: unknown) => {
        this.isLoading = false;
        console.error('Error loading orders:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to load orders';
        this.notificationService.error(errorMessage);
      }
    });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadOrders();
    }
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadOrders();
  }

  onSort(column: string): void {
    if (this.sortBy === column) {
      this.sortDescending = !this.sortDescending;
    } else {
      this.sortBy = column;
      this.sortDescending = true;
    }
    this.loadOrders();
  }

  onStatusFilterChange(): void {
    this.currentPage = 1;
    this.loadOrders();
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
    this.loadOrders();
  }

  getSortIcon(column: string): string {
    if (this.sortBy !== column) {
      return 'bi-arrow-down-up';
    }
    return this.sortDescending ? 'bi-arrow-down' : 'bi-arrow-up';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  get filteredOrders(): OrderList[] {
    return this.orders;
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  getStatusBadgeClass(isClosed: boolean): string {
    return isClosed ? 'bg-secondary' : 'bg-success';
  }

  getStatusText(isClosed: boolean): string {
    return isClosed ? 'Closed' : 'Open';
  }

  /**
   * Handle status change from dropdown
   */
  onStatusChange(order: OrderList, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newStatus = target.value; // 'open' or 'closed'
    
    // Determine current status from ticketIsClosed
    const currentStatus = order.ticketIsClosed ? 'closed' : 'open';
    
    // If status hasn't changed, do nothing
    if (currentStatus === newStatus) {
      // Reset dropdown to current value
      target.value = currentStatus;
      return;
    }

    this.updateTicketStatus(order, newStatus, target);
  }

  /**
   * Update ticket status
   */
  updateTicketStatus(order: OrderList, status: string, selectElement?: HTMLSelectElement): void {
    if (!order.ticketId) {
      this.notificationService.error('Ticket ID is missing');
      if (selectElement) {
        selectElement.value = order.ticketIsClosed ? 'closed' : 'open';
      }
      return;
    }

    // Validate status
    if (status !== 'open' && status !== 'closed') {
      this.notificationService.error('Invalid status');
      if (selectElement) {
        selectElement.value = order.ticketIsClosed ? 'closed' : 'open';
      }
      return;
    }

    const statusText = status === 'closed' ? 'Closed' : 'Open';

    // Add ticket to updating set
    this.updatingTicketIds.add(order.ticketId);

    this.orderService.updateTicketStatus(order.ticketId, status).subscribe({
      next: (response: ApiResponse<any>) => {
        this.updatingTicketIds.delete(order.ticketId);
        
        if (response.success) {
          this.notificationService.success(`Order status updated to ${statusText}`);
          // Update all orders with the same ticketId in the local array
          this.orders.forEach(o => {
            if (o.ticketId === order.ticketId) {
              o.ticketIsClosed = status === 'closed';
            }
          });
        } else {
          this.notificationService.error(response.message || 'Failed to update order status');
          // Reset dropdown on error
          if (selectElement) {
            selectElement.value = order.ticketIsClosed ? 'closed' : 'open';
          }
        }
      },
      error: (error: unknown) => {
        this.updatingTicketIds.delete(order.ticketId);
        console.error('Error updating ticket status:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to update order status';
        this.notificationService.error(errorMessage);
        // Reset dropdown on error
        if (selectElement) {
          selectElement.value = order.ticketIsClosed ? 'closed' : 'open';
        }
      }
    });
  }

  /**
   * Check if a ticket is being updated
   */
  isUpdating(ticketId: number): boolean {
    return this.updatingTicketIds.has(ticketId);
  }
}

