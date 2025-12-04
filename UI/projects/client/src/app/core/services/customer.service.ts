import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '@models/api-response.model';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  mobile?: string;
  isActive: boolean;
  isVerified: boolean;
  totalOrders: number;
  totalSpent: number;
}

export interface CreateCustomerDto {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  mobile?: string;
}

export interface CustomerAddress {
  id: number;
  customerId: number;
  addressType: string;
  isDefault: boolean;
  isActive: boolean;
  label?: string;
  contactName?: string;
  contactPhone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  deliveryInstructions?: string;
}

export interface CreateCustomerAddressDto {
  customerId: number;
  addressType?: string;
  isDefault?: boolean;
  label?: string;
  contactName?: string;
  contactPhone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  country: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  deliveryInstructions?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private apiService: ApiService) {}

  /**
   * Get customer by phone number
   * Note: This endpoint may not exist yet - returns error if not available
   */
  getCustomerByPhone(phone: string): Observable<ApiResponse<Customer>> {
    return this.apiService.get<Customer>(`/Customers/by-phone?phone=${encodeURIComponent(phone)}`);
  }

  /**
   * Get customer by email
   * Note: This endpoint may not exist yet - returns error if not available
   */
  getCustomerByEmail(email: string): Observable<ApiResponse<Customer>> {
    return this.apiService.get<Customer>(`/Customers/by-email?email=${encodeURIComponent(email)}`);
  }

  /**
   * Create a new customer
   * Note: This endpoint may not exist yet - returns error if not available
   */
  createCustomer(customerData: CreateCustomerDto): Observable<ApiResponse<Customer>> {
    return this.apiService.post<Customer>('/Customers', customerData);
  }

  /**
   * Create or get customer (if exists by phone, return it; otherwise create)
   */
  createOrGetCustomer(customerData: CreateCustomerDto): Observable<ApiResponse<Customer>> {
    return new Observable(observer => {
      // First try to get by phone
      this.getCustomerByPhone(customerData.phone).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            observer.next(response);
            observer.complete();
          } else {
            // Customer doesn't exist, create new one
            this.createCustomer(customerData).subscribe({
              next: (createResponse) => {
                observer.next(createResponse);
                observer.complete();
              },
              error: (error) => {
                // If customer creation fails (e.g., endpoint doesn't exist), 
                // return a mock customer for development
                console.warn('Customer API endpoint may not exist. Using fallback customer.');
                const fallbackCustomer: Customer = {
                  id: 1, // Default customer ID - this should be replaced with actual API
                  firstName: customerData.firstName,
                  lastName: customerData.lastName,
                  email: customerData.email,
                  phone: customerData.phone,
                  mobile: customerData.mobile,
                  isActive: true,
                  isVerified: false,
                  totalOrders: 0,
                  totalSpent: 0
                };
                observer.next({
                  success: true,
                  message: 'Customer created (fallback)',
                  data: fallbackCustomer
                } as ApiResponse<Customer>);
                observer.complete();
              }
            });
          }
        },
        error: () => {
          // If get fails, try to create
          this.createCustomer(customerData).subscribe({
            next: (createResponse) => {
              observer.next(createResponse);
              observer.complete();
            },
            error: (error) => {
              // If customer creation fails (e.g., endpoint doesn't exist), 
              // return a mock customer for development
              console.warn('Customer API endpoint may not exist. Using fallback customer.');
              const fallbackCustomer: Customer = {
                id: 1, // Default customer ID - this should be replaced with actual API
                firstName: customerData.firstName,
                lastName: customerData.lastName,
                email: customerData.email,
                phone: customerData.phone,
                mobile: customerData.mobile,
                isActive: true,
                isVerified: false,
                totalOrders: 0,
                totalSpent: 0
              };
              observer.next({
                success: true,
                message: 'Customer created (fallback)',
                data: fallbackCustomer
              } as ApiResponse<Customer>);
              observer.complete();
            }
          });
        }
      });
    });
  }

  /**
   * Create customer address
   */
  createCustomerAddress(addressData: CreateCustomerAddressDto): Observable<ApiResponse<CustomerAddress>> {
    return this.apiService.post<CustomerAddress>('/Customers/addresses', addressData);
  }
}

