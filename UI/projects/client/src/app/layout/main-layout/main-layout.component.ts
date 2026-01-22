import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
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
    
    // If not on menu page, navigate to menu first (without category param)
    if (this.router.url !== '/menu') {
      this.router.navigate(['/menu']).then(() => {
        // After navigation, scroll to category
        setTimeout(() => this.scrollToCategory(categoryId), 300);
      });
    } else {
      // If already on menu page, just scroll to category without changing URL
      this.scrollToCategory(categoryId);
    }
  }

  private scrollToCategory(categoryId: number | null): void {
    if (categoryId === null) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to category section
      setTimeout(() => {
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
          const offset = 200; // Account for sticky header (60px) + categories section (50px) + extra space (90px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }
}

