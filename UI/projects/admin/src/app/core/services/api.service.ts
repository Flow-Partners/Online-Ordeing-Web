import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { ApiResponse } from '@models/api-response.model';

export interface HttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | string[] };
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl: string = environment.apiUrl;
  private readonly apiTimeout: number = environment.apiTimeout;

  constructor(private http: HttpClient) { }

  /**
   * GET request
   */
  get<T>(endpoint: string, options?: HttpOptions): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, options)
      .pipe(
        timeout(this.apiTimeout),
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * POST request
   */
  post<T>(endpoint: string, body: any, options?: HttpOptions): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body, options)
      .pipe(
        timeout(this.apiTimeout),
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * POST request with FormData (for file uploads)
   */
  postFormData<T>(endpoint: string, formData: FormData): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, formData, {
      // Don't set Content-Type - let browser set it with boundary for multipart/form-data
    })
      .pipe(
        timeout(this.apiTimeout * 2), // Longer timeout for file uploads
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * PUT request
   */
  put<T>(endpoint: string, body: any, options?: HttpOptions): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body, options)
      .pipe(
        timeout(this.apiTimeout),
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * PATCH request
   */
  patch<T>(endpoint: string, body: any, options?: HttpOptions): Observable<ApiResponse<T>> {
    return this.http.patch<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body, options)
      .pipe(
        timeout(this.apiTimeout),
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string, options?: HttpOptions): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, options)
      .pipe(
        timeout(this.apiTimeout),
        map(response => this.handleResponse(response)),
        catchError(error => this.handleError(error))
      );
  }

  /**
   * Handle successful response
   */
  private handleResponse<T>(response: ApiResponse<T>): ApiResponse<T> {
    if (environment.enableLogging) {
      console.log('API Response:', response);
    }
    return response;
  }

  /**
   * Handle error response
   */
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = error.error?.message || `Server Error: ${error.status}`;
    }

    if (environment.enableLogging) {
      console.error('API Error:', error);
    }

    return throwError(() => ({
      success: false,
      message: errorMessage,
      errors: error.error?.errors || []
    }));
  }

  /**
   * Build URL with query params
   */
  buildUrl(endpoint: string, params?: { [key: string]: any }): string {
    let url = `${this.apiUrl}${endpoint}`;
    
    if (params) {
      const queryParams = new URLSearchParams();
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          queryParams.append(key, params[key].toString());
        }
      });
      url += `?${queryParams.toString()}`;
    }
    
    return url;
  }
}

