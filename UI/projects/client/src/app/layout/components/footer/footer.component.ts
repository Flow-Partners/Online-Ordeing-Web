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
    this.showWhatsApp = isAtTop; // Show WhatsApp only at top
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
    // You can implement search functionality here
    // For now, just scroll to top where search bar is
    this.scrollToTop();
  }
}

