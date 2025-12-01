import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/services/auth.service';
import { StorageService } from '@core/services/storage.service';
import { MenuItem, MENU_ITEMS } from '@constants/menu-items';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<boolean>();
  
  menuItems: MenuItem[] = [];
  isCollapsed = false;
  activeRoute = '';
  expandedMenus: { [key: string]: boolean } = {};

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeRoute = event.urlAfterRedirects;
      });
  }

  ngOnInit(): void {
    // Load sidebar state from storage
    const savedState = this.storageService.getItem('sidebar_collapsed');
    this.isCollapsed = savedState === 'true';
    
    // Emit initial state
    this.sidebarToggle.emit(this.isCollapsed);

    // Filter menu items based on user roles
    this.menuItems = this.filterMenuItemsByRole(MENU_ITEMS);
    
    // Fallback: If no menu items after filtering, show all items (for development)
    if (this.menuItems.length === 0) {
      console.warn('No menu items found after role filtering. Showing all items as fallback.');
      this.menuItems = MENU_ITEMS;
    }
    
    // Debug: Log menu items to console
    console.log('Menu items loaded:', this.menuItems);
    console.log('Menu items count:', this.menuItems.length);
    
    this.activeRoute = this.router.url;
  }

  /**
   * Filter menu items based on user roles
   */
  private filterMenuItemsByRole(items: MenuItem[]): MenuItem[] {
    // If not authenticated, show all items (for development/testing)
    const isAuthenticated = this.authService.isAuthenticated;
    
    return items.filter(item => {
      // If no roles specified, show to all
      if (!item.roles || item.roles.length === 0) {
        return true;
      }

      // If not authenticated, still show items for development (comment out in production)
      if (!isAuthenticated) {
        // For development: show all items
        // For production: return false;
        return true; // Remove this line in production
      }

      // Check if user has required role
      const hasRole = this.authService.hasAnyRole(item.roles);
      
      // Filter children recursively
      if (hasRole && item.children) {
        item.children = this.filterMenuItemsByRole(item.children);
      } else if (!hasRole && item.children) {
        // If parent doesn't have role, don't show children either
        item.children = [];
      }

      return hasRole;
    });
  }

  /**
   * Toggle sidebar collapse state
   */
  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.storageService.setItem('sidebar_collapsed', this.isCollapsed.toString());
    // Emit state change to parent component
    this.sidebarToggle.emit(this.isCollapsed);
  }

  /**
   * Toggle submenu expand/collapse
   */
  toggleSubmenu(label: string): void {
    this.expandedMenus[label] = !this.expandedMenus[label];
  }

  /**
   * Check if menu item is active
   */
  isActive(item: MenuItem): boolean {
    if (item.route) {
      return this.activeRoute === item.route || this.activeRoute.startsWith(item.route + '/');
    }
    
    // Check if any child is active
    if (item.children) {
      return item.children.some(child => this.isActive(child));
    }

    return false;
  }

  /**
   * Check if submenu is expanded
   */
  isExpanded(label: string): boolean {
    return this.expandedMenus[label] || false;
  }

  /**
   * Track by function for ngFor
   */
  trackByLabel(index: number, item: MenuItem): string {
    return item.label || index.toString();
  }
}

