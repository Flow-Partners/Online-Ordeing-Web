import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { StorageService } from '../services/storage.service';
import { environment } from '@environments/environment';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const notificationService = inject(NotificationService);
  const storageService = inject(StorageService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side error
        switch (error.status) {
          case 0:
            errorMessage = 'No internet connection. Please check your network.';
            break;
          case 400:
            errorMessage = error.error?.message || 'Bad Request';
            break;
          case 401:
            errorMessage = 'Unauthorized. Please login again.';
            // Clear tokens and redirect to login
            storageService.removeItem(environment.tokenKey);
            storageService.removeItem(environment.refreshTokenKey);
            storageService.removeItem(environment.userKey);
            router.navigate(['/auth/login']);
            break;
          case 403:
            errorMessage = 'You do not have permission to access this resource.';
            break;
          case 404:
            errorMessage = 'Resource not found.';
            break;
          case 500:
            errorMessage = 'Internal server error. Please try again later.';
            break;
          case 503:
            errorMessage = 'Service unavailable. Please try again later.';
            break;
          default:
            errorMessage = error.error?.message || `Error: ${error.status}`;
        }
      }

      // Check if this is a silent check request (email existence check)
      const isSilentCheck = req.headers.has('X-Silent-Check') || 
                           req.url?.includes('CustomerAuth/login') && 
                           error.status === 400 && 
                           errorMessage.toLowerCase().includes('invalid phone/email or password');
      
      // Check if this is a "Customer not found" error for orders (should be handled gracefully)
      const isCustomerNotFound = error.status === 400 && 
                                errorMessage.toLowerCase().includes('customer not found') &&
                                req.url?.includes('/Orders/customer/');

      // Show error notification (except for 401 which redirects, silent checks, and customer not found for orders)
      if (error.status !== 401 && !isSilentCheck && !isCustomerNotFound) {
        notificationService.error(errorMessage);
      }

      // Skip console logging for silent checks and customer not found errors
      if (environment.enableLogging && !isSilentCheck && !isCustomerNotFound) {
        console.error('HTTP Error:', error);
      }

      return throwError(() => error);
    })
  );
};

