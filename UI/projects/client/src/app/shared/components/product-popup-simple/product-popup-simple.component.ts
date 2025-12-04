import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItemDetail, Portion, PortionDetail, CartItem } from '@models/menu-item.model';
import { MenuItemService } from '@core/services/menu-item.service';

@Component({
  selector: 'app-product-popup-simple',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-popup-simple.component.html',
  styleUrls: ['./product-popup-simple.component.scss']
})
export class ProductPopupSimpleComponent implements OnInit {
  @Input() menuItemDetail!: MenuItemDetail;
  @Output() close = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<CartItem>();

  quantity = 1;
  selectedPortion: Portion | null = null;
  selectedPortionDetail: PortionDetail | null = null;
  totalPrice = 0;

  constructor(private menuItemService: MenuItemService) {}

  ngOnInit(): void {
    // For single portion, get the first portion and first portion detail
    if (this.menuItemDetail.portions && this.menuItemDetail.portions.length > 0) {
      this.selectedPortion = this.menuItemDetail.portions[0];
      if (this.selectedPortion.portionDetails && this.selectedPortion.portionDetails.length > 0) {
        this.selectedPortionDetail = this.selectedPortion.portionDetails[0];
        this.totalPrice = this.selectedPortionDetail.price;
      }
    }
    this.updateTotalPrice();
  }

  onClose(): void {
    this.close.emit();
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  increaseQuantity(): void {
    this.quantity++;
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    if (this.selectedPortionDetail) {
      this.totalPrice = this.selectedPortionDetail.price * this.quantity;
    }
  }

  onAddToCart(): void {
    if (this.selectedPortion && this.selectedPortionDetail) {
      const cartItem: CartItem = {
        menuItemId: this.menuItemDetail.id,
        menuItemName: this.menuItemDetail.name,
        menuItemImage: this.menuItemDetail.baseImageUrl,
        portionId: this.selectedPortion.id,
        portionName: this.selectedPortion.name,
        portionDetailId: this.selectedPortionDetail.id,
        portionDetailName: this.selectedPortionDetail.name,
        price: this.selectedPortionDetail.price,
        quantity: this.quantity
      };
      this.addToCart.emit(cartItem);
    }
  }

  getImageUrl(imageUrl?: string): string {
    return this.menuItemService.getImageUrl(imageUrl);
  }

  formatPrice(price: number): string {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}

