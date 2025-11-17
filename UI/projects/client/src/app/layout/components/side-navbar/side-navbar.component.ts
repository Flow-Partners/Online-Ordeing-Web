import { Component, OnInit } from '@angular/core';
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

    // Filter menu items based on user roles
    this.menuItems = this.filterMenuItemsByRole(MENU_ITEMS);
    this.activeRoute = this.router.url;
  }

  /**
   * Filter menu items based on user roles
   */
  private filterMenuItemsByRole(items: MenuItem[]): MenuItem[] {
    return items.filter(item => {
      // If no roles specified, show to all
      if (!item.roles || item.roles.length === 0) {
        return true;
      }

      // Check if user has required role
      const hasRole = this.authService.hasAnyRole(item.roles);
      
      // Filter children recursively
      if (hasRole && item.children) {
        item.children = this.filterMenuItemsByRole(item.children);
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
}

