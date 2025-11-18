import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MenuItemService, MenuItemList } from '@core/services/menu-item.service';
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
  selector: 'app-list-menu-items',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.scss']
})
export class ListMenuItemsComponent implements OnInit {
  menuItems: MenuItemList[] = [];
  isLoading = false;
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  totalPages = 0;
  searchText = '';

  constructor(
    private menuItemService: MenuItemService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMenuItems();
  }

  loadMenuItems(): void {
    this.isLoading = true;
    this.menuItemService.getMenuItems(this.currentPage, this.pageSize).subscribe({
      next: (response: ApiResponse<PagedResult<MenuItemList>>) => {
        this.isLoading = false;
        if (response.success && response.data) {
          this.menuItems = response.data.items || [];
          this.totalCount = response.data.totalCount || 0;
          this.totalPages = response.data.totalPages || 0;
          this.currentPage = response.data.pageNumber || 1;
        } else {
          this.menuItems = [];
          this.notificationService.warning('No menu items found');
        }
      },
      error: (error: unknown) => {
        this.isLoading = false;
        console.error('Error loading menu items:', error);
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to load menu items';
        this.notificationService.error(errorMessage);
      }
    });
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadMenuItems();
    }
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this menu item?')) {
      this.menuItemService.deleteMenuItem(id).subscribe({
        next: (response: ApiResponse<boolean>) => {
          if (response.success) {
            this.notificationService.success('Menu item deleted successfully');
            this.loadMenuItems();
          } else {
            this.notificationService.error('Failed to delete menu item');
          }
        },
        error: (error: unknown) => {
          const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                              (error as { message?: string })?.message || 
                              'Failed to delete menu item';
          this.notificationService.error(errorMessage);
        }
      });
    }
  }

  onToggleAvailability(item: MenuItemList): void {
    this.menuItemService.toggleAvailability(item.id, !item.isAvailable).subscribe({
      next: (response: ApiResponse<boolean>) => {
        if (response.success) {
          item.isAvailable = !item.isAvailable;
          this.notificationService.success(
            `Menu item ${item.isAvailable ? 'activated' : 'deactivated'} successfully`
          );
        } else {
          this.notificationService.error('Failed to update menu item availability');
        }
      },
      error: (error: unknown) => {
        const errorMessage = (error as { error?: { message?: string }; message?: string })?.error?.message || 
                            (error as { message?: string })?.message || 
                            'Failed to update menu item availability';
        this.notificationService.error(errorMessage);
      }
    });
  }

  get filteredMenuItems(): MenuItemList[] {
    if (!this.searchText.trim()) {
      return this.menuItems;
    }
    const searchLower = this.searchText.toLowerCase();
    return this.menuItems.filter(item =>
      item.name.toLowerCase().includes(searchLower) ||
      item.categoryName.toLowerCase().includes(searchLower) ||
      (item.description && item.description.toLowerCase().includes(searchLower))
    );
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}

