import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService, TicketDetailViewModel } from '@core/services/order.service';
import { NotificationService } from '@core/services/notification.service';
import { ApiResponse } from '@models/api-response.model';
import { StorageService } from '@core/services/storage.service';

@Component({
  selector: 'app-list-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit, OnDestroy {
  tickets: TicketDetailViewModel[] = [];
  allTickets: TicketDetailViewModel[] = []; // Store all tickets for counting
  isLoading = false;
  selectedTicket: TicketDetailViewModel | null = null;
  showViewModal = false;
  statusFilter: 'all' | 'open' | 'accept' | 'closed' = 'all';
  updatingTicketIds = new Set<number>(); // Track which tickets are being updated
  private refreshInterval: any = null;

  constructor(
    private orderService: OrderService,
    private notificationService: NotificationService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.loadTickets();
    this.startAutoRefresh();
  }

  ngOnDestroy(): void {
    this.stopAutoRefresh();
  }

  private startAutoRefresh(): void {
    this.stopAutoRefresh(); // Clear any existing interval
    
    // Get refresh time from sessionStorage
    const refreshTimeStr = this.storageService.getSessionItem('orderReceivedRefreshTime');
    const refreshTime = refreshTimeStr ? parseInt(refreshTimeStr, 10) : 0;
    
    // Only start refresh if value is greater than 0
    if (refreshTime > 0) {
      this.refreshInterval = setInterval(() => {
        // Reload tickets data instead of full page reload for better UX
        this.loadTickets();
      }, refreshTime * 1000); // Convert seconds to milliseconds
    }
  }

  private stopAutoRefresh(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
      this.refreshInterval = null;
    }
  }

  loadTickets(): void {
    this.isLoading = true;
    
    // Fetch all tickets (both open and closed) to filter by TicketStates
    const openTickets$ = this.orderService.getAllTicketsByStatus(false);
    const closedTickets$ = this.orderService.getAllTicketsByStatus(true);

    openTickets$.subscribe({
      next: (openResponse: ApiResponse<TicketDetailViewModel[]>) => {
        closedTickets$.subscribe({
          next: (closedResponse: ApiResponse<TicketDetailViewModel[]>) => {
            this.isLoading = false;
            const allTickets: TicketDetailViewModel[] = [];
            
            if (openResponse.success && openResponse.data) {
              allTickets.push(...openResponse.data);
            }
            if (closedResponse.success && closedResponse.data) {
              allTickets.push(...closedResponse.data);
            }

            // Store all tickets for counting
            this.allTickets = allTickets;

            // Filter by status
            let filteredTickets = allTickets;
            if (this.statusFilter !== 'all') {
              filteredTickets = allTickets.filter(ticket => {
                const currentStatus = this.getCurrentStatus(ticket);
                return currentStatus === this.statusFilter;
              });
            }

            // Sort by date descending
            this.tickets = filteredTickets.sort((a, b) => 
              new Date(b.date).getTime() - new Date(a.date).getTime()
            );

            if (this.tickets.length === 0) {
              this.notificationService.warning('No tickets found');
            }
          },
          error: (error: unknown) => {
            this.isLoading = false;
            this.handleError(error, 'Failed to load closed tickets');
          }
        });
      },
      error: (error: unknown) => {
        this.isLoading = false;
        this.handleError(error, 'Failed to load open tickets');
      }
    });
  }

  onStatusFilterChange(): void {
    this.filterTickets();
  }

  setStatusFilter(status: 'all' | 'open' | 'accept' | 'closed'): void {
    this.statusFilter = status;
    this.filterTickets();
  }

  /**
   * Parse a date string as UTC (handles both with and without 'Z' suffix)
   */
  private parseAsUTC(dateString: string): Date {
    // API returns dates in format like "2025-12-17T00:03:01.9036087" (UTC but no Z)
    // If the string doesn't have timezone indicator, treat it as UTC
    if (dateString.endsWith('Z')) {
      return new Date(dateString);
    }
    // Check if it has timezone offset (+HH:MM or -HH:MM)
    if (dateString.match(/[+-]\d{2}:\d{2}$/)) {
      return new Date(dateString);
    }
    // Otherwise, append 'Z' to force UTC parsing
    return new Date(dateString + 'Z');
  }

  /**
   * Check if a closed ticket was closed within the last 5 hours
   */
  isClosedWithinLast5Hours(ticket: TicketDetailViewModel): boolean {
    const currentStatus = this.getCurrentStatus(ticket);
    if (currentStatus !== 'closed') {
      return false;
    }

    // Parse dates as UTC - API returns UTC dates but may not have 'Z' suffix
    const lastUpdateDate = this.parseAsUTC(ticket.lastUpdateTime);
    const lastPaymentDate = ticket.lastPaymentDate ? this.parseAsUTC(ticket.lastPaymentDate) : null;
    
    // Use the more recent date between lastUpdateTime and lastPaymentDate
    // When ticket is closed, lastUpdateTime is updated, so use that
    const closedDate = lastPaymentDate && lastPaymentDate.getTime() > lastUpdateDate.getTime()
      ? lastPaymentDate 
      : lastUpdateDate;
    
    // Get current time in UTC
    const now = new Date();
    const fiveHoursAgo = new Date(now.getTime() - (5 * 60 * 60 * 1000)); // 5 hours in milliseconds

    // Compare UTC timestamps directly
    const closedTimestamp = closedDate.getTime();
    const fiveHoursAgoTimestamp = fiveHoursAgo.getTime();
    const isWithin5Hours = closedTimestamp >= fiveHoursAgoTimestamp;
    
    // Debug logging - check browser console to see what's happening
    if (this.statusFilter === 'closed') {
      console.log('Checking ticket:', ticket.ticketNumber, 
        'Status:', currentStatus,
        'IsClosed:', ticket.isClosed,
        'TicketStates:', ticket.ticketStates,
        'LastUpdateTime (raw):', ticket.lastUpdateTime,
        'LastUpdateTime (parsed UTC):', lastUpdateDate.toISOString(),
        'LastPaymentDate (raw):', ticket.lastPaymentDate,
        'LastPaymentDate (parsed UTC):', lastPaymentDate?.toISOString(),
        'Closed Date Timestamp:', closedTimestamp,
        'Current Timestamp:', now.getTime(),
        '5 Hours Ago Timestamp:', fiveHoursAgoTimestamp,
        'Difference (hours):', ((now.getTime() - closedTimestamp) / (1000 * 60 * 60)).toFixed(2),
        'Is Within 5 Hours:', isWithin5Hours);
    }

    return isWithin5Hours;
  }

  filterTickets(): void {
    if (this.statusFilter === 'all') {
      this.tickets = [...this.allTickets].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (this.statusFilter === 'closed') {
      // For closed tab, only show tickets closed within last 5 hours
      console.log('Filtering closed tickets. Total tickets:', this.allTickets.length);
      const closedTickets = this.allTickets.filter(ticket => {
        const currentStatus = this.getCurrentStatus(ticket);
        const isClosed = currentStatus === 'closed';
        const within5Hours = this.isClosedWithinLast5Hours(ticket);
        console.log(`Ticket ${ticket.ticketNumber}: status=${currentStatus}, isClosed=${isClosed}, within5Hours=${within5Hours}`);
        return isClosed && within5Hours;
      });
      console.log('Filtered closed tickets count:', closedTickets.length);
      this.tickets = closedTickets.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else {
      this.tickets = this.allTickets.filter(ticket => {
        const currentStatus = this.getCurrentStatus(ticket);
        return currentStatus === this.statusFilter;
      }).sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
  }

  getTicketCount(status: 'all' | 'open' | 'accept' | 'closed'): number {
    if (status === 'all') {
      return this.allTickets.length;
    } else if (status === 'closed') {
      // For closed count, only count tickets closed within last 5 hours
      return this.allTickets.filter(ticket => {
        const currentStatus = this.getCurrentStatus(ticket);
        return currentStatus === 'closed' && this.isClosedWithinLast5Hours(ticket);
      }).length;
    }
    return this.allTickets.filter(ticket => {
      const currentStatus = this.getCurrentStatus(ticket);
      return currentStatus === status;
    }).length;
  }

  viewTicket(ticket: TicketDetailViewModel): void {
    this.selectedTicket = ticket;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedTicket = null;
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

  getCurrentStatus(ticket: TicketDetailViewModel): string {
    // Get status from TicketStates, default to 'open' if not set
    if (ticket.ticketStates) {
      const status = ticket.ticketStates.toLowerCase().trim();
      if (status === 'open' || status === 'accept' || status === 'closed') {
        return status;
      }
    }
    // Fallback: use isClosed to determine status
    return ticket.isClosed ? 'closed' : 'open';
  }

  getStatusBadgeClass(ticket: TicketDetailViewModel): string {
    const status = this.getCurrentStatus(ticket);
    if (status === 'closed') {
      return 'bg-secondary';
    } else if (status === 'accept') {
      return 'bg-warning';
    }
    return 'bg-success';
  }

  getStatusText(ticket: TicketDetailViewModel): string {
    const status = this.getCurrentStatus(ticket);
    if (status === 'closed') {
      return 'Closed';
    } else if (status === 'accept') {
      return 'Accept';
    }
    return 'Open';
  }

  getCustomerName(ticket: TicketDetailViewModel): string {
    if (ticket.customer) {
      const firstName = ticket.customer.firstName || '';
      const lastName = ticket.customer.lastName?.trim() || '';
      
      if (firstName && lastName) {
        return `${firstName} ${lastName}`;
      } else if (firstName) {
        return firstName;
      }
      return 'Guest';
    }
    return 'Guest';
  }

  getCustomerPhone(ticket: TicketDetailViewModel): string {
    return ticket.customer?.phone || 'N/A';
  }

  getCustomerEmail(ticket: TicketDetailViewModel): string {
    return ticket.customer?.email || 'N/A';
  }

  getAddressString(ticket: TicketDetailViewModel): string {
    if (ticket.customerAddress) {
      const addr = ticket.customerAddress;
      const parts = [
        addr.addressLine1,
        addr.addressLine2,
        addr.city,
        addr.state,
        addr.country,
        addr.postalCode
      ].filter(part => part && part.trim() !== '');
      return parts.join(', ');
    }
    return 'N/A';
  }

  /**
   * Handle status change from dropdown
   */
  onStatusChange(ticket: TicketDetailViewModel, event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newStatus = target.value;
    
    // If status hasn't changed, do nothing
    const currentStatus = this.getCurrentStatus(ticket);
    if (currentStatus === newStatus) {
      // Reset dropdown to current value
      target.value = currentStatus;
      return;
    }

    this.updateTicketStatus(ticket, newStatus, target);
  }

  /**
   * Update ticket status
   */
  updateTicketStatus(ticket: TicketDetailViewModel, status: string, selectElement?: HTMLSelectElement): void {
    if (!ticket.id) {
      this.notificationService.error('Ticket ID is missing');
      if (selectElement) {
        selectElement.value = this.getCurrentStatus(ticket);
      }
      return;
    }

    // Validate status
    if (status !== 'open' && status !== 'accept' && status !== 'closed') {
      this.notificationService.error('Invalid status');
      if (selectElement) {
        selectElement.value = this.getCurrentStatus(ticket);
      }
      return;
    }

    const statusText = status === 'closed' ? 'Closed' : status === 'accept' ? 'Accept' : 'Open';

    // Add ticket to updating set
    this.updatingTicketIds.add(ticket.id);

    this.orderService.updateTicketStatus(ticket.id, status).subscribe({
      next: (response: ApiResponse<any>) => {
        this.updatingTicketIds.delete(ticket.id);
        
        if (response.success) {
          this.notificationService.success(`Ticket status updated to ${statusText}`);
          // Update the ticket in allTickets array
          const allTicketsIndex = this.allTickets.findIndex(t => t.id === ticket.id);
          if (allTicketsIndex !== -1) {
            this.allTickets[allTicketsIndex].ticketStates = status;
            this.allTickets[allTicketsIndex].isClosed = status === 'closed';
          }
          // Update the ticket in the filtered tickets array
          const ticketIndex = this.tickets.findIndex(t => t.id === ticket.id);
          if (ticketIndex !== -1) {
            this.tickets[ticketIndex].ticketStates = status;
            this.tickets[ticketIndex].isClosed = status === 'closed';
          }
          // If viewing the ticket in modal, update it too
          if (this.selectedTicket && this.selectedTicket.id === ticket.id) {
            this.selectedTicket.ticketStates = status;
            this.selectedTicket.isClosed = status === 'closed';
          }
          // Re-filter tickets to update the current view
          this.filterTickets();
        } else {
          this.notificationService.error(response.message || 'Failed to update ticket status');
          // Reset dropdown on error
          if (selectElement) {
            selectElement.value = this.getCurrentStatus(ticket);
          }
        }
      },
      error: (error: unknown) => {
        this.updatingTicketIds.delete(ticket.id);
        console.error('Error updating ticket status:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to update ticket status';
        this.notificationService.error(errorMessage);
        // Reset dropdown on error
        if (selectElement) {
          selectElement.value = this.getCurrentStatus(ticket);
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

  private handleError(error: unknown, defaultMessage: string): void {
    console.error('Error loading tickets:', error);
    const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                        (error as { message?: string })?.message || 
                        defaultMessage;
    this.notificationService.error(errorMessage);
    this.tickets = [];
  }
}

