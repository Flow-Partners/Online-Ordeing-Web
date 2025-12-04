import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isScrolled = false;
  showWhatsApp = true;
  showSearch = false;
  showScrollTop = false;

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.checkScrollPosition();
  }

  checkScrollPosition(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const isAtTop = scrollPosition < 100; // Threshold for "at top"
    
    this.isScrolled = scrollPosition > 100;
    this.showWhatsApp = true; // Always show WhatsApp button
    this.showSearch = !isAtTop; // Show search when scrolled down
    this.showScrollTop = !isAtTop; // Show scroll to top when scrolled down
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  openWhatsApp(): void {
    const phoneNumber = '923045777621'; // Replace with actual number
    const message = encodeURIComponent('Hello! I would like to place an order.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

  openSearch(): void {
    // Scroll to search bar and focus the search input
    const searchSection = document.querySelector('.header-search-section');
    if (searchSection) {
      const searchInput = searchSection.querySelector('.search-input') as HTMLInputElement;
      
      // Get the position of the search section
      const searchSectionRect = searchSection.getBoundingClientRect();
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate the position accounting for sticky header
      // Header-top-section is fixed at top (60px on desktop, 55px on mobile)
      // Header-categories-section is sticky below it (80px on desktop, 55px on mobile)
      const headerTopHeight = window.innerWidth <= 768 ? 55 : 50;
      const headerCategoriesHeight = window.innerWidth <= 768 ? 55 : 80;
      const totalHeaderHeight = headerTopHeight + headerCategoriesHeight;
      
      // Calculate target scroll position: search section top - header height + some padding
      const targetScrollY = searchSectionRect.top + scrollY - totalHeaderHeight - 10;
      
      // Scroll to the calculated position
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
      
      // Focus the search input after a short delay to ensure scroll completes
      setTimeout(() => {
        if (searchInput) {
          searchInput.focus();
        }
      }, 600);
    } else {
      // Fallback: scroll to top if search section not found
      this.scrollToTop();
    }
  }
}

