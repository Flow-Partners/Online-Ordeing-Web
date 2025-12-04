import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TopNavbarComponent } from '../components/top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../components/side-navbar/side-navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TopNavbarComponent, SideNavbarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  isSidebarCollapsed = false;
  selectedCategoryId: number | null = null;

  constructor(private router: Router) {}

  onToggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onCategorySelected(categoryId: number | null): void {
    this.selectedCategoryId = categoryId;
    // Navigate to menu with category filter if needed
    if (this.router.url !== '/menu') {
      this.router.navigate(['/menu'], { queryParams: { category: categoryId || null } });
    } else {
      // If already on menu page, trigger category change via service or event
      // This will be handled by the menu component listening to route changes
      this.router.navigate(['/menu'], { 
        queryParams: { category: categoryId || null },
        queryParamsHandling: 'merge'
      });
    }
  }
}

