import { Component, EventEmitter, Output, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/services/auth.service';
import { CustomerAuthService, CustomerAuthResponse } from '@core/services/customer-auth.service';
import { CartService } from '@core/services/cart.service';
import { CategoryService } from '@core/services/category.service';
import { User } from '@models/user.model';
import { CartItem } from '@models/menu-item.model';
import { CategoryListViewModel } from '@models/category.model';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { AuthModalComponent } from '../../../shared/components/auth-modal/auth-modal.component';
import { Subject, takeUntil } from 'rxjs';
import { ApiResponse } from '@models/api-response.model';
import { PagedResult } from '@models/menu-item.model';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ClickOutsideDirective, AuthModalComponent],
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit, OnDestroy {
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() categorySelected = new EventEmitter<number | null>();

  currentUser: User | null = null;
  currentCustomer: CustomerAuthResponse | null = null;
  isUserMenuOpen = false;
  isCartOpen = false;
  isLocationDropdownOpen = false;
  cartItems: CartItem[] = [];
  cartItemCount = 0;
  cartTotal = 0;
  searchTerm = '';
  
  // Categories for header tabs
  categories: CategoryListViewModel[] = [];
  selectedCategoryId: number | null = null;
  private isScrollingProgrammatically = false; // Prevent scroll spy during programmatic scroll
  
  // Check if we're on checkout page or orders page
  isCheckoutPage = false;
  isOrdersPage = false;
  
  // Auth modal
  showAuthModal = false;
  
  // Location info
  deliveryAddress = 'Ahmed Avenue, Lahore';
  estimatedTime = '~ eta 45 min';

  // Slider properties
  sliderImages: string[] = [
    '/images/Slider/slid1.jpg',
    '/images/Slider/slid2.jpg',
    '/images/Slider/slid3.jpg'
  ];
  currentSlideIndex = 0;
  private sliderInterval: any;
  private readonly sliderIntervalTime = 5000; // 5 seconds

  private destroy$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    public customerAuthService: CustomerAuthService,
    public cartService: CartService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
    
    this.customerAuthService.currentCustomer$.subscribe(customer => {
      this.currentCustomer = customer;
    });
  }

  ngOnInit(): void {
    // Check initial route
    this.checkRoute();
    
    // Subscribe to route changes
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.checkRoute();
      });
    
    // Subscribe to cart changes
    this.cartService.cartItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        this.cartItems = items;
        this.cartItemCount = this.cartService.cartItemCount;
        this.cartTotal = this.cartService.cartTotal;
      });

    // Load categories for header tabs
    this.loadCategories();

    // Start slider
    this.startSlider();
  }
  
  checkRoute(): void {
    this.isCheckoutPage = this.router.url.includes('/checkout');
    this.isOrdersPage = this.router.url.includes('/orders');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopSlider();
    // Remove scroll listener
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onCategoryScroll.bind(this));
    }
  }

  loadCategories(): void {
    this.categoryService.getCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: ApiResponse<PagedResult<CategoryListViewModel>>) => {
          if (response.success && response.data) {
            const data = response.data as any;
            this.categories = (data.items || data.Items || []).filter((cat: CategoryListViewModel) => cat.isVisible);
            // Sort by display order
            this.categories.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
            
            // Setup scroll spy after categories are loaded
            setTimeout(() => {
              this.setupCategoryScrollSpy();
            }, 500);
          }
        },
        error: (error: any) => {
          console.error('Error loading categories:', error);
        }
      });
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isCartOpen = false;
    this.isLocationDropdownOpen = false;
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
    this.isUserMenuOpen = false;
    this.isLocationDropdownOpen = false;
  }

  toggleLocationDropdown(): void {
    this.isLocationDropdownOpen = !this.isLocationDropdownOpen;
    this.isUserMenuOpen = false;
    this.isCartOpen = false;
  }

  selectCategory(categoryId: number | null): void {
    this.isScrollingProgrammatically = true;
    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
    
    // Reset flag after scroll completes
    setTimeout(() => {
      this.isScrollingProgrammatically = false;
    }, 1000);
  }

  setupCategoryScrollSpy(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onCategoryScroll.bind(this), { passive: true });
      // Initial check
      setTimeout(() => this.onCategoryScroll(), 200);
    }
  }

  @HostListener('window:scroll', [])
  onCategoryScroll(): void {
    // Don't update if we're programmatically scrolling or no categories loaded
    if (this.isScrollingProgrammatically || typeof window === 'undefined' || this.categories.length === 0) {
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const headerTopHeight = window.innerWidth <= 768 ? 55 : 50;
    const headerCategoriesHeight = window.innerWidth <= 768 ? 55 : 80;
    const totalHeaderHeight = headerTopHeight + headerCategoriesHeight;
    const offset = totalHeaderHeight + 100; // Add padding to account for section spacing

    // Check if we're at the top (before any category sections)
    if (scrollY < 300) {
      if (this.selectedCategoryId !== null) {
        this.selectedCategoryId = null;
      }
      return;
    }

    // Find which category section is currently most visible
    // We'll check which section's top is closest to the offset point
    let currentCategoryId: number | null = null;
    let bestMatch: { id: number; top: number; distance: number } | null = null;

    // Check all categories in reverse order (from bottom to top)
    // This way we select the category whose section is currently most visible
    for (let i = this.categories.length - 1; i >= 0; i--) {
      const category = this.categories[i];
      const element = document.getElementById(`category-${category.id}`);
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const viewportTop = scrollY + offset;
        
        // Check if this section's top has been passed (we've scrolled past it)
        if (viewportTop >= elementTop) {
          const distance = viewportTop - elementTop;
          
          // Select the section that is closest to the offset point
          if (!bestMatch || distance < bestMatch.distance) {
            bestMatch = { id: category.id, top: elementTop, distance };
            currentCategoryId = category.id;
          }
        }
      }
    }

    // Update selected category if it changed
    if (currentCategoryId !== null && this.selectedCategoryId !== currentCategoryId) {
      this.selectedCategoryId = currentCategoryId;
      // Don't emit categorySelected to avoid triggering scroll
    } else if (currentCategoryId === null && this.selectedCategoryId !== null) {
      // If no category section is in view but we're scrolled down, keep the last selected one
      // This prevents flickering when scrolling between sections
    }
  }

  onSearch(): void {
    // Emit search event or navigate to search results
    console.log('Searching for:', this.searchTerm);
  }

  onCustomerLogout(): void {
    this.customerAuthService.logout();
  }

  navigateToOrders(): void {
    const customerId = this.customerAuthService.customerId;
    if (customerId) {
      this.router.navigate(['/orders', customerId]);
    }
  }

  removeFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item.menuItemId, item.portionId, item.portionDetailId);
  }

  updateQuantity(item: CartItem, change: number): void {
    const newQuantity = item.quantity + change;
    this.cartService.updateQuantity(item.menuItemId, item.portionId, item.portionDetailId, newQuantity);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  closeDropdowns(): void {
    this.isUserMenuOpen = false;
    this.isCartOpen = false;
    this.isLocationDropdownOpen = false;
  }

  formatPrice(price: number): string {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  getDeliveryCharges(): number {
    return 200;
  }

  getSubtotal(): number {
    return this.cartTotal;
  }

  getTotal(): number {
    return this.cartTotal + this.getDeliveryCharges();
  }

  getImageUrl(imageUrl?: string): string {
    if (!imageUrl) {
      return '/assets/i18n/placeholder-food.png';
    }
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    }
    const apiUrl = 'http://localhost:5071';
    return `${apiUrl}${imageUrl}`;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = '/assets/i18n/placeholder-food.png';
    }
  }

  // Slider methods
  getSliderImageUrl(imagePath: string): string {
    const apiUrl = 'http://localhost:5071';
    const fullUrl = `${apiUrl}${imagePath}`;
    return fullUrl;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.sliderImages.length;
    this.resetSliderInterval();
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
    this.resetSliderInterval();
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.resetSliderInterval();
  }

  startSlider(): void {
    this.resetSliderInterval();
  }

  stopSlider(): void {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
      this.sliderInterval = null;
    }
  }

  private resetSliderInterval(): void {
    this.stopSlider();
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, this.sliderIntervalTime);
  }

  openAuthModal(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.showAuthModal = true;
  }

  closeAuthModal(): void {
    this.showAuthModal = false;
  }

  onAuthSuccess(): void {
    // Refresh customer data if needed
    this.closeAuthModal();
  }

  getProfileAvatarUrl(): string {
    if (this.currentCustomer) {
      const name = this.currentCustomer.fullName || 
                   `${this.currentCustomer.firstName} ${this.currentCustomer.lastName || ''}`.trim() ||
                   'User';
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=40&background=ffd700&color=000000&bold=true`;
    }
    return 'https://ui-avatars.com/api/?name=User&size=40&background=ffd700&color=000000&bold=true';
  }

  onAvatarError(event: any): void {
    // Fallback to a default avatar if image fails to load
    event.target.src = 'https://ui-avatars.com/api/?name=User&size=40&background=ffd700&color=000000&bold=true';
  }

  onLogout(): void {
    this.closeDropdowns();
    this.customerAuthService.logout();
  }
}
