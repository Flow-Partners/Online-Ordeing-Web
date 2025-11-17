import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { NotificationService } from './notification.service';
import { User } from '@models/user.model';
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest
} from '@models/auth.model';
import { ApiResponse } from '@models/api-response.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;
  
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated$: Observable<boolean>;

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    const user = this.storageService.getObject<User>(environment.userKey);
    this.currentUserSubject = new BehaviorSubject<User | null>(user);
    this.currentUser$ = this.currentUserSubject.asObservable();

    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(!!user);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  /**
   * Get current user value
   */
  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Get authentication status
   */
  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  /**
   * Get auth token
   */
  get token(): string | null {
    return this.storageService.getItem(environment.tokenKey);
  }

  /**
   * Login user
   */
  login(credentials: LoginRequest): Observable<ApiResponse<AuthResponse>> {
    return this.apiService.post<AuthResponse>('/auth/login', credentials)
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.setSession(response.data);
            this.notificationService.success('Login successful!');
          }
        })
      );
  }

  /**
   * Register new user
   */
  register(userData: RegisterRequest): Observable<ApiResponse<AuthResponse>> {
    return this.apiService.post<AuthResponse>('/auth/register', userData)
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.setSession(response.data);
            this.notificationService.success('Registration successful!');
          }
        })
      );
  }

  /**
   * Logout user
   */
  logout(): void {
    // Call logout API (optional)
    this.apiService.post('/auth/logout', {}).subscribe({
      next: () => {
        this.clearSession();
        this.router.navigate(['/auth/login']);
        this.notificationService.info('Logged out successfully');
      },
      error: () => {
        // Clear session even if API call fails
        this.clearSession();
        this.router.navigate(['/auth/login']);
      }
    });
  }

  /**
   * Forgot password
   */
  forgotPassword(data: ForgotPasswordRequest): Observable<ApiResponse> {
    return this.apiService.post('/auth/forgot-password', data)
      .pipe(
        tap(response => {
          if (response.success) {
            this.notificationService.success('Password reset link sent to your email');
          }
        })
      );
  }

  /**
   * Reset password
   */
  resetPassword(data: ResetPasswordRequest): Observable<ApiResponse> {
    return this.apiService.post('/auth/reset-password', data)
      .pipe(
        tap(response => {
          if (response.success) {
            this.notificationService.success('Password reset successful');
          }
        })
      );
  }

  /**
   * Change password
   */
  changePassword(data: ChangePasswordRequest): Observable<ApiResponse> {
    return this.apiService.post('/auth/change-password', data)
      .pipe(
        tap(response => {
          if (response.success) {
            this.notificationService.success('Password changed successfully');
          }
        })
      );
  }

  /**
   * Refresh token
   */
  refreshToken(): Observable<ApiResponse<AuthResponse>> {
    const refreshToken = this.storageService.getItem(environment.refreshTokenKey);
    
    if (!refreshToken) {
      return of({ success: false, message: 'No refresh token available' });
    }

    return this.apiService.post<AuthResponse>('/auth/refresh', { refreshToken })
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.updateToken(response.data.token);
          }
        })
      );
  }

  /**
   * Get current user profile
   */
  getCurrentUser(): Observable<ApiResponse<User>> {
    return this.apiService.get<User>('/user/profile')
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.updateUser(response.data);
          }
        })
      );
  }

  /**
   * Check if user has specific role
   */
  hasRole(role: string): boolean {
    const user = this.currentUserValue;
    if (!user) return false;
    
    if (user.roles) {
      return user.roles.includes(role);
    }
    return user.role === role;
  }

  /**
   * Check if user has any of the specified roles
   */
  hasAnyRole(roles: string[]): boolean {
    return roles.some(role => this.hasRole(role));
  }

  /**
   * Set authentication session
   */
  private setSession(authData: AuthResponse): void {
    this.storageService.setItem(environment.tokenKey, authData.token);
    
    if (authData.refreshToken) {
      this.storageService.setItem(environment.refreshTokenKey, authData.refreshToken);
    }
    
    this.storageService.setObject(environment.userKey, authData.user);
    this.currentUserSubject.next(authData.user);
    this.isAuthenticatedSubject.next(true);
  }

  /**
   * Update token only
   */
  private updateToken(token: string): void {
    this.storageService.setItem(environment.tokenKey, token);
  }

  /**
   * Update user data
   */
  private updateUser(user: User): void {
    this.storageService.setObject(environment.userKey, user);
    this.currentUserSubject.next(user);
  }

  /**
   * Clear authentication session
   */
  private clearSession(): void {
    this.storageService.removeItem(environment.tokenKey);
    this.storageService.removeItem(environment.refreshTokenKey);
    this.storageService.removeItem(environment.userKey);
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }
}

