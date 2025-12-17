import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface FooterConfig {
  company: {
    name: string;
    logoTitle: string;
    logoSubtitle: string;
  };
  contact: {
    whatsapp: {
      number: string;
      displayNumber: string;
      message: string;
    };
    email: {
      address: string;
      displayAddress: string;
    };
    address: string;
  };
  appDownloads: {
    googlePlay: {
      enabled: boolean;
      url: string;
      text: string;
      title: string;
    };
    appStore: {
      enabled: boolean;
      url: string;
      text: string;
      title: string;
    };
  };
  timings: {
    days: string;
    hours: string;
  };
  socialMedia: {
    facebook: { enabled: boolean; url: string; title: string };
    instagram: { enabled: boolean; url: string; title: string };
    twitter: { enabled: boolean; url: string; title: string };
    youtube: { enabled: boolean; url: string; title: string };
    tiktok: { enabled: boolean; url: string; title: string };
  };
  legalLinks: {
    termsAndConditions: { enabled: boolean; url: string; text: string };
    privacyPolicy: { enabled: boolean; url: string; text: string };
    sitemap: { enabled: boolean; url: string; text: string };
  };
  copyright: {
    year: string;
    poweredBy: string;
  };
}

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
  config: FooterConfig = this.getDefaultConfig();
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.checkScrollPosition();
    this.loadConfig();
  }

  loadConfig(): void {
    this.http.get<FooterConfig>('/assets/config/footer-config.json')
      .pipe(
        catchError(error => {
          console.error('Error loading footer config:', error);
          // Return default config if file doesn't exist
          return of(this.getDefaultConfig());
        })
      )
      .subscribe(config => {
        this.config = config;
        this.loading = false;
      });
  }

  getDefaultConfig(): FooterConfig {
    return {
      company: {
        name: 'M21 Kitchen',
        logoTitle: 'M21 KITCHEN',
        logoSubtitle: 'THE KITCHEN OF 21 CENTURY'
      },
      contact: {
        whatsapp: {
          number: '923045777621',
          displayNumber: '+923045777621',
          message: 'Hello! I would like to place an order.'
        },
        email: {
          address: 'm21kitchen@gmail.com',
          displayAddress: 'm21kitchen@gmail.com'
        },
        address: 'M21 Kitchen - Wapda Town, 230-C, PIA Road, Main Blvd, WAPDA Town, Lahore, 54000'
      },
      appDownloads: {
        googlePlay: {
          enabled: true,
          url: 'https://play.google.com/store',
          text: 'GET IT ON',
          title: 'Google Play'
        },
        appStore: {
          enabled: true,
          url: 'https://apps.apple.com',
          text: 'Download on the',
          title: 'App Store'
        }
      },
      timings: {
        days: 'Monday - Sunday',
        hours: '11:00 AM - 05:00 AM'
      },
      socialMedia: {
        facebook: { enabled: true, url: '#', title: 'Facebook' },
        instagram: { enabled: true, url: '#', title: 'Instagram' },
        twitter: { enabled: true, url: '#', title: 'Twitter/X' },
        youtube: { enabled: true, url: '#', title: 'YouTube' },
        tiktok: { enabled: true, url: '#', title: 'TikTok' }
      },
      legalLinks: {
        termsAndConditions: { enabled: true, url: '#', text: 'Terms and conditions' },
        privacyPolicy: { enabled: true, url: '#', text: 'Privacy Policy' },
        sitemap: { enabled: true, url: '#', text: 'Sitemap' }
      },
      copyright: {
        year: '2025',
        poweredBy: 'Blink Co.'
      }
    };
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
    if (!this.config) return;
    const phoneNumber = this.config.contact.whatsapp.number;
    const message = encodeURIComponent(this.config.contact.whatsapp.message);
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

