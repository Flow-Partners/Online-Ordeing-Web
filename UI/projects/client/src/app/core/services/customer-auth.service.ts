import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { ApiResponse } from '@models/api-response.model';
import { Router } from '@angular/router';

export interface CustomerAuthResponse {
  customerId: number;
  firstName: string;
  lastName?: string;
  email?: string;
  phone: string;
  mobile?: string;
  isActive: boolean;
  isVerified: boolean;
  loyaltyPoints: number;
  totalOrders: number;
  totalSpent: number;
  fullName: string;
}

export interface CustomerLoginDto {
  phoneOrEmail: string;
  password: string;
  rememberMe?: boolean;
}

export interface CustomerRegisterDto {
  firstName: string;
  lastName?: string;
  email?: string;
  phone: string;
  mobile?: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthService {
  private readonly CUSTOMER_KEY = 'customer_data';
  private readonly CUSTOMER_ID_KEY = 'customer_id';
  
  private currentCustomerSubject = new BehaviorSubject<CustomerAuthResponse | null>(null);
  public currentCustomer$ = this.currentCustomerSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private router: Router
  ) {
    // Load customer from storage on service initialization
    this.loadCustomerFromStorage();
  }

  /**
   * Get current customer
   */
  get currentCustomer(): CustomerAuthResponse | null {
    return this.currentCustomerSubject.value;
  }

  /**
   * Check if customer is authenticated
   */
  get isAuthenticated(): boolean {
    return this.currentCustomer !== null;
  }

  /**
   * Get customer ID
   */
  get customerId(): number | null {
    const customer = this.currentCustomer;
    return customer ? customer.customerId : null;
  }

  /**
   * Customer login
   */
  login(credentials: CustomerLoginDto): Observable<ApiResponse<CustomerAuthResponse>> {
    return new Observable(observer => {
      this.apiService.post<CustomerAuthResponse>('/CustomerAuth/login', credentials).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.setCustomer(response.data);
            observer.next(response);
          } else {
            observer.next(response);
          }
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  /**
   * Customer registration
   */
  register(customerData: CustomerRegisterDto): Observable<ApiResponse<CustomerAuthResponse>> {
    return new Observable(observer => {
      this.apiService.post<CustomerAuthResponse>('/CustomerAuth/register', customerData).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.setCustomer(response.data);
            observer.next(response);
          } else {
            observer.next(response);
          }
          observer.complete();
        },
        error: (error) => {
          observer.error(error);
        }
      });
    });
  }

  /**
   * Logout customer
   */
  logout(): void {
    this.storageService.removeItem(this.CUSTOMER_KEY);
    this.storageService.removeItem(this.CUSTOMER_ID_KEY);
    this.currentCustomerSubject.next(null);
    this.router.navigate(['/menu']);
  }

  /**
   * Set customer data
   */
  private setCustomer(customer: CustomerAuthResponse): void {
    this.storageService.setItem(this.CUSTOMER_KEY, JSON.stringify(customer));
    this.storageService.setItem(this.CUSTOMER_ID_KEY, customer.customerId.toString());
    this.currentCustomerSubject.next(customer);
  }

  /**
   * Load customer from storage
   */
  private loadCustomerFromStorage(): void {
    const customerData = this.storageService.getItem(this.CUSTOMER_KEY);
    if (customerData) {
      try {
        const customer = JSON.parse(customerData) as CustomerAuthResponse;
        this.currentCustomerSubject.next(customer);
      } catch (error) {
        console.error('Error parsing customer data from storage:', error);
        this.storageService.removeItem(this.CUSTOMER_KEY);
        this.storageService.removeItem(this.CUSTOMER_ID_KEY);
      }
    }
  }
}

