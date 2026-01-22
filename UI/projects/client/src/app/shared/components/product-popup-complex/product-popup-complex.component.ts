import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItemDetail, Portion, PortionDetail, CartItem } from '@models/menu-item.model';
import { MenuItemService } from '@core/services/menu-item.service';

interface PortionSelection {
  portion: Portion;
  selectedDetails: PortionDetail[]; // Changed to array for multi-select
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
          // Select first option(s) by default based on minSelection
          const initialSelections: PortionDetail[] = [];
          const minSelect = portion.minSelection || 1;
          for (let i = 0; i < Math.min(minSelect, portion.portionDetails.length); i++) {
            initialSelections.push(portion.portionDetails[i]);
          }
          this.portionSelections.set(portion.id, {
            portion: portion,
            selectedDetails: initialSelections
          });
        } else {
          this.portionSelections.set(portion.id, {
            portion: portion,
            selectedDetails: []
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
    const selection = this.portionSelections.get(portion.id);
    if (!selection) return;

    const maxSelect = portion.maxSelection || 1;
    const minSelect = portion.minSelection || 1;
    const currentSelections = [...selection.selectedDetails];
    const index = currentSelections.findIndex(d => d.id === portionDetail.id);

    if (index >= 0) {
      // Deselect if already selected, but check minSelection constraint
      if (currentSelections.length > minSelect) {
        currentSelections.splice(index, 1);
      }
      // If trying to deselect but would go below minSelection, don't allow it
    } else {
      // Select if not already selected
      if (currentSelections.length < maxSelect) {
        currentSelections.push(portionDetail);
      } else if (maxSelect === 1) {
        // Replace entire selection if single select
        currentSelections.length = 0;
        currentSelections.push(portionDetail);
      }
    }

    this.portionSelections.set(portion.id, {
      portion: portion,
      selectedDetails: currentSelections
    });
    this.updatePrices();
  }

  isSelected(portionId: number, portionDetailId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    return selection?.selectedDetails?.some(d => d.id === portionDetailId) || false;
  }

  hasSelection(portionId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    return (selection?.selectedDetails?.length || 0) > 0;
  }

  getSelectedDetails(portionId: number): PortionDetail[] {
    const selection = this.portionSelections.get(portionId);
    return selection?.selectedDetails || [];
  }

  getSelectionCount(portionId: number): number {
    const selection = this.portionSelections.get(portionId);
    return selection?.selectedDetails?.length || 0;
  }

  canSelectMore(portionId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    if (!selection) return false;
    const maxSelect = selection.portion.maxSelection || 1;
    return (selection.selectedDetails.length || 0) < maxSelect;
  }

  canDeselect(portionId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    if (!selection) return false;
    const minSelect = selection.portion.minSelection || 1;
    return (selection.selectedDetails.length || 0) > minSelect;
  }

  getRequiredText(portion: Portion): string {
    return 'Required';
  }

  getSelectAnyText(portion: Portion): string {
    const maxSelect = portion.maxSelection || 1;
    return `select any ${maxSelect}`;
  }

  isMaxSelected(portionId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    if (!selection) return false;
    const maxSelect = selection.portion.maxSelection || 1;
    return selection.selectedDetails.length >= maxSelect;
  }

  isSelectionValid(portionId: number): boolean {
    const selection = this.portionSelections.get(portionId);
    if (!selection) return false;
    const minSelect = selection.portion.minSelection || 1;
    const count = selection.selectedDetails.length;
    return count >= minSelect;
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
    // The price shown in portions is the actual deal price, not additive
    // Get the price from the first selected portion detail (all should have same price)
    let selectedPrice = 0;
    
    // Find the first selected portion detail from any portion
    for (const selection of this.portionSelections.values()) {
      if (selection.selectedDetails && selection.selectedDetails.length > 0) {
        selectedPrice = selection.selectedDetails[0].price;
        break;
      }
    }
    
    // If no selection made yet, use minimum price
    return selectedPrice || this.minPrice;
  }

  showFromPrice(): boolean {
    // Show "from" if selections don't meet minimum requirements
    let allValid = true;
    this.portionSelections.forEach((selection) => {
      if (!this.isSelectionValid(selection.portion.id)) {
        allValid = false;
      }
    });
    return !allValid;
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
    // Validate all selections meet minimum requirements
    for (const selection of this.portionSelections.values()) {
      if (!this.isSelectionValid(selection.portion.id)) {
        return; // Don't add to cart if validation fails
      }
    }

    // For multi-select portions, we need to create cart items for each combination
    // For now, we'll create a cart item for the first portion's first selection
    // This may need to be updated based on how the backend handles multi-select
    let selectedPortion: Portion | null = null;
    let selectedPortionDetail: PortionDetail | null = null;

    // Find the first selected portion detail
    for (const selection of this.portionSelections.values()) {
      if (selection.selectedDetails && selection.selectedDetails.length > 0) {
        selectedPortion = selection.portion;
        selectedPortionDetail = selection.selectedDetails[0];
        break;
      }
    }

    // Type guard to ensure both are not null
    if (!selectedPortion || !selectedPortionDetail) {
      return;
    }

    // Calculate price per item (total of all selections)
    const pricePerItem = this.getCurrentPrice();

    // At this point, TypeScript knows both are not null
    const cartItem: CartItem = {
      menuItemId: this.menuItemDetail.id,
      menuItemName: this.menuItemDetail.name,
      menuItemImage: this.menuItemDetail.baseImageUrl,
      portionId: selectedPortion.id,
      portionName: selectedPortion.name,
      portionDetailId: selectedPortionDetail.id,
      portionDetailName: selectedPortionDetail.name,
      price: pricePerItem, // Price per item (includes all selections)
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
