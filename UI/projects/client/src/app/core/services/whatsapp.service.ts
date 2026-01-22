import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface WhatsAppConfig {
  whatsappNumber: string;
  countryCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private config: WhatsAppConfig | null = null;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<WhatsAppConfig> {
    if (this.config) {
      return of(this.config);
    }
    
    return this.http.get<WhatsAppConfig>('/assets/config/whatsapp-config.json').pipe(
      map(config => {
        this.config = config;
        return config;
      }),
      catchError(error => {
        console.error('Error loading WhatsApp config:', error);
        // Return default config if file doesn't exist
        this.config = {
          whatsappNumber: '923001234567',
          countryCode: '92'
        };
        return of(this.config);
      })
    );
  }

  formatOrderMessage(orderDetails: {
    ticketNumber?: string;
    customerName: string;
    mobileNumber: string;
    email?: string;
    address: string;
    specialInstructions?: string;
    paymentMethod: string;
    items: Array<{
      name: string;
      portion: string;
      portionDetail: string;
      quantity: number;
      price: number;
    }>;
    subtotal: number;
    deliveryCharges: number;
    grandTotal: number;
  }): string {
    let message = `🍕 *NEW ORDER - M21 KITCHEN*\n\n`;
    
    // Ticket Number (if available)
    if (orderDetails.ticketNumber) {
      message += `🎫 *Ticket Number:* ${orderDetails.ticketNumber}\n\n`;
    }
    
    // Customer Information
    message += `👤 *Customer Information:*\n`;
    message += `Name: ${orderDetails.customerName}\n`;
    message += `Mobile: ${orderDetails.mobileNumber}\n`;
    if (orderDetails.email) {
      message += `Email: ${orderDetails.email}\n`;
    }
    message += `Address: ${orderDetails.address}\n`;
    if (orderDetails.specialInstructions) {
      message += `Special Instructions: ${orderDetails.specialInstructions}\n`;
    }
    message += `\n`;
    
    // Order Items
    message += `📦 *Order Items:*\n`;
    orderDetails.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      if (item.portion && item.portion !== 'Standard') {
        message += `   ${item.portion}`;
        if (item.portionDetail) {
          message += ` - ${item.portionDetail}`;
        }
        message += `\n`;
      }
      message += `   Qty: ${item.quantity} x Rs. ${item.price.toFixed(2)} = Rs. ${(item.quantity * item.price).toFixed(2)}\n\n`;
    });
    
    // Payment & Total
    message += `💳 *Payment Method:* ${orderDetails.paymentMethod}\n\n`;
    message += `💰 *Order Summary:*\n`;
    message += `Subtotal: Rs. ${orderDetails.subtotal.toFixed(2)}\n`;
    message += `Delivery Charges: Rs. ${orderDetails.deliveryCharges.toFixed(2)}\n`;
    message += `*Grand Total: Rs. ${orderDetails.grandTotal.toFixed(2)}*\n`;
    
    return message;
  }

  openWhatsApp(message: string, phoneNumber?: string): void {
    this.loadConfig().subscribe(config => {
      const number = phoneNumber || config.whatsappNumber;
      // Remove any non-digit characters except +
      const cleanNumber = number.replace(/[^\d+]/g, '');
      // Ensure it starts with country code
      const finalNumber = cleanNumber.startsWith('+') ? cleanNumber.substring(1) : cleanNumber;
      
      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp Web/App
      const whatsappUrl = `https://wa.me/${finalNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

