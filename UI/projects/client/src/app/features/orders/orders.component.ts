import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { OrderService, CustomerOrder, PagedResult } from '@core/services/order.service';
import { NotificationService } from '@core/services/notification.service';
import { CustomerAuthService } from '@core/services/customer-auth.service';
import { ApiResponse } from '@models/api-response.model';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  customerId: number = 0;
  orders: CustomerOrder[] = [];
  loading = false;
  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  totalCount = 0;
  hasPreviousPage = false;
  hasNextPage = false;
  searchTerm = '';
  
  private destroy$ = new Subject<void>();

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    public customerAuthService: CustomerAuthService
  ) {}

  ngOnInit(): void {
    // First, try to get customer ID from logged-in customer
    const loggedInCustomerId = this.customerAuthService.customerId;
    if (loggedInCustomerId) {
      this.customerId = loggedInCustomerId;
      this.loadOrders();
      return;
    }

    // If not logged in, get customer ID from route params or query params
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['customerId']) {
        this.customerId = +params['customerId'];
        this.loadOrders();
      }
    });

    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['customerId']) {
        this.customerId = +params['customerId'];
        this.loadOrders();
      } else if (!this.customerId && params['page']) {
        this.currentPage = +params['page'] || 1;
        if (this.customerId > 0) {
          this.loadOrders();
        }
      }
    });

    // If no customer ID in route, try to get from query param
    if (!this.customerId) {
      const queryCustomerId = this.route.snapshot.queryParams['customerId'];
      if (queryCustomerId) {
        this.customerId = +queryCustomerId;
        this.loadOrders();
      } else {
        // No customer ID found - redirect to login
        this.notificationService.warning('Please login to view your orders');
        this.router.navigate(['/auth/login']);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadOrders(): void {
    if (!this.customerId || this.customerId <= 0) {
      this.notificationService.error('Customer ID is required');
      return;
    }

    this.loading = true;
    this.orderService.getCustomerOrders(
      this.customerId,
      this.currentPage,
      this.pageSize,
      this.searchTerm || undefined
    ).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response: ApiResponse<PagedResult<CustomerOrder>>) => {
        this.loading = false;
        if (response.success && response.data) {
          this.orders = response.data.items;
          this.totalCount = response.data.totalCount;
          this.totalPages = response.data.totalPages;
          this.currentPage = response.data.pageNumber;
          this.hasPreviousPage = response.data.hasPreviousPage;
          this.hasNextPage = response.data.hasNextPage;
        } else {
          this.notificationService.error(response.message || 'Failed to load orders');
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error loading orders:', error);
        this.notificationService.error('Failed to load orders. Please try again.');
      }
    });
  }

  onSearch(): void {
    this.currentPage = 1;
    this.loadOrders();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadOrders();
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  viewOrderDetails(orderId: number): void {
    // Navigate to order details page if needed
    // For now, we can show a notification
    this.notificationService.info(`Order details for order #${orderId}`);
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
      currency: 'PKR',
      minimumFractionDigits: 2
    }).format(amount);
  }

  getStatusClass(isClosed: boolean): string {
    return isClosed ? 'badge-success' : 'badge-warning';
  }

  getStatusText(isClosed: boolean): string {
    return isClosed ? 'Completed' : 'Pending';
  }

  navigateToMenu(): void {
    this.router.navigate(['/menu']);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxPages = 5; // Show max 5 page numbers
    let startPage = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxPages - 1);
    
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  }
}

