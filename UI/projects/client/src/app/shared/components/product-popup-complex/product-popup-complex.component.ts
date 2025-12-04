import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItemDetail, Portion, PortionDetail, CartItem } from '@models/menu-item.model';
import { MenuItemService } from '@core/services/menu-item.service';

interface PortionSelection {
  portion: Portion;
  selectedDetail: PortionDetail | null;
}

@Component({
  selector: 'app-product-popup-complex',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-popup-complex.component.html',
  styleUrls: ['./product-popup-complex.component.scss']
})
export class ProductPopupComplexComponent implements OnInit {
  @Input() menuItemDetail!: MenuItemDetail;
  @Output() close = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<CartItem>();

  quantity = 1;
  portionSelections: Map<number, PortionSelection> = new Map();
  collapsedPortions: Map<number, boolean> = new Map();
  instructions = '';
  minPrice = 0;
  totalPrice = 0;

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    // Initialize portion selections
    if (this.menuItemDetail.portions && this.menuItemDetail.portions.length > 0) {
      this.menuItemDetail.portions.forEach(portion => {
        this.collapsedPortions.set(portion.id, false);
        if (portion.portionDetails && portion.portionDetails.length > 0) {
          // Select first option by default
          this.portionSelections.set(portion.id, {
            portion: portion,
            selectedDetail: portion.portionDetails[0]
          });
        } else {
          this.portionSelections.set(portion.id, {
            portion: portion,
            selectedDetail: null
          });
        }
      });
    }
    this.updatePrices();
  }

  onClose(): void {
    this.close.emit();
  }

  togglePortionCollapse(portionId: number): void {
    const current = this.collapsedPortions.get(portionId) || false;
    this.collapsedPortions.set(portionId, !current);
  }

  isPortionCollapsed(portionId: number): boolean {
    return this.collapsedPortions.get(portionId) || false;
  }

  selectPortionDetail(portion: Portion, portionDetail: PortionDetail): void {
    this.portionSelections.set(portion.id, {
      portion: portion,
      selectedDetail: portionDetail
    });
    this.updatePrices();
  }

  isSelected(portionId: number, portionDetailId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    return selection?.selectedDetail?.id === portionDetailId;
  }

  hasSelection(portionId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    return !!selection?.selectedDetail;
  }

  getSelectedDetail(portionId: number): PortionDetail | null {
    const selection = this.portionSelections.get(portionId);
    return selection?.selectedDetail || null;
  }

  getMinPrice(): number {
    // Calculate minimum price from all portions
    let min = Infinity;
    this.menuItemDetail.portions?.forEach(portion => {
      portion.portionDetails?.forEach(detail => {
        if (detail.price < min) {
          min = detail.price;
        }
      });
    });
    return min === Infinity ? 0 : min;
  }

  getCurrentPrice(): number {
    // Get the price from the first selected portion detail (typically Size)
    // In most cases, Size determines the base price
    let selectedPrice = 0;
    
    // Find the first selected portion detail (usually Size)
    this.portionSelections.forEach((selection) => {
      if (selection.selectedDetail && selectedPrice === 0) {
        selectedPrice = selection.selectedDetail.price;
      }
    });
    
    return selectedPrice || this.minPrice;
  }

  showFromPrice(): boolean {
    // Show "from" if no selection made yet
    let hasSelection = false;
    this.portionSelections.forEach((selection) => {
      if (selection.selectedDetail) {
        hasSelection = true;
      }
    });
    return !hasSelection;
  }

  updatePrices(): void {
    // Calculate total price from all selected portions
    this.minPrice = this.getMinPrice();
    const currentPrice = this.getCurrentPrice();
    this.totalPrice = currentPrice * this.quantity;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.updatePrices();
    }
  }

  increaseQuantity(): void {
    this.quantity++;
    this.updatePrices();
  }

  onAddToCart(): void {
    // Get the first selected portion detail
    let selectedPortion: Portion | null = null;
    let selectedPortionDetail: PortionDetail | null = null;

    // Find the first selected portion detail
    for (const selection of this.portionSelections.values()) {
      if (selection.selectedDetail) {
        selectedPortion = selection.portion;
        selectedPortionDetail = selection.selectedDetail;
        break;
      }
    }

    // Type guard to ensure both are not null
    if (!selectedPortion || !selectedPortionDetail) {
      return;
    }

    // At this point, TypeScript knows both are not null
    const cartItem: CartItem = {
      menuItemId: this.menuItemDetail.id,
      menuItemName: this.menuItemDetail.name,
      menuItemImage: this.menuItemDetail.baseImageUrl,
      portionId: selectedPortion.id,
      portionName: selectedPortion.name,
      portionDetailId: selectedPortionDetail.id,
      portionDetailName: selectedPortionDetail.name,
      price: this.totalPrice / this.quantity, // Price per item
      quantity: this.quantity
    };
    this.addToCart.emit(cartItem);
  }

  getImageUrl(imageUrl?: string): string {
    return this.menuItemService.getImageUrl(imageUrl);
  }

  formatPrice(price: number): string {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  getPortions(): Portion[] {
    return this.menuItemDetail.portions || [];
  }

  getPortionDetails(portion: Portion): PortionDetail[] {
    return portion.portionDetails || [];
  }
}
