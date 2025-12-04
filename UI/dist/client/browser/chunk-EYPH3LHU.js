import {
  ApiService,
  Router,
  environment
} from "./chunk-7V4CR2SO.js";
import {
  BehaviorSubject,
  Injectable,
  NotificationService,
  StorageService,
  of,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  apiService;
  storageService;
  notificationService;
  router;
  currentUserSubject;
  currentUser$;
  isAuthenticatedSubject;
  isAuthenticated$;
  constructor(apiService, storageService, notificationService, router) {
    this.apiService = apiService;
    this.storageService = storageService;
    this.notificationService = notificationService;
    this.router = router;
    const user = this.storageService.getObject(environment.userKey);
    this.currentUserSubject = new BehaviorSubject(user);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isAuthenticatedSubject = new BehaviorSubject(!!user);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }
  /**
   * Get current user value
   */
  get currentUserValue() {
    return this.currentUserSubject.value;
  }
  /**
   * Get authentication status
   */
  get isAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }
  /**
   * Get auth token
   */
  get token() {
    return this.storageService.getItem(environment.tokenKey);
  }
  /**
   * Login user
   */
  login(credentials) {
    return this.apiService.post("/auth/login", credentials).pipe(tap((response) => {
      if (response.success && response.data) {
        this.setSession(response.data);
        this.notificationService.success("Login successful!");
      }
    }));
  }
  /**
   * Register new user
   */
  register(userData) {
    return this.apiService.post("/auth/register", userData).pipe(tap((response) => {
      if (response.success && response.data) {
        this.setSession(response.data);
        this.notificationService.success("Registration successful!");
      }
    }));
  }
  /**
   * Logout user
   */
  logout() {
    this.apiService.post("/auth/logout", {}).subscribe({
      next: () => {
        this.clearSession();
        this.router.navigate(["/auth/login"]);
        this.notificationService.info("Logged out successfully");
      },
      error: () => {
        this.clearSession();
        this.router.navigate(["/auth/login"]);
      }
    });
  }
  /**
   * Forgot password
   */
  forgotPassword(data) {
    return this.apiService.post("/auth/forgot-password", data).pipe(tap((response) => {
      if (response.success) {
        this.notificationService.success("Password reset link sent to your email");
      }
    }));
  }
  /**
   * Reset password
   */
  resetPassword(data) {
    return this.apiService.post("/auth/reset-password", data).pipe(tap((response) => {
      if (response.success) {
        this.notificationService.success("Password reset successful");
      }
    }));
  }
  /**
   * Change password
   */
  changePassword(data) {
    return this.apiService.post("/auth/change-password", data).pipe(tap((response) => {
      if (response.success) {
        this.notificationService.success("Password changed successfully");
      }
    }));
  }
  /**
   * Refresh token
   */
  refreshToken() {
    const refreshToken = this.storageService.getItem(environment.refreshTokenKey);
    if (!refreshToken) {
      return of({ success: false, message: "No refresh token available" });
    }
    return this.apiService.post("/auth/refresh", { refreshToken }).pipe(tap((response) => {
      if (response.success && response.data) {
        this.updateToken(response.data.token);
      }
    }));
  }
  /**
   * Get current user profile
   */
  getCurrentUser() {
    return this.apiService.get("/user/profile").pipe(tap((response) => {
      if (response.success && response.data) {
        this.updateUser(response.data);
      }
    }));
  }
  /**
   * Check if user has specific role
   */
  hasRole(role) {
    const user = this.currentUserValue;
    if (!user)
      return false;
    if (user.roles) {
      return user.roles.includes(role);
    }
    return user.role === role;
  }
  /**
   * Check if user has any of the specified roles
   */
  hasAnyRole(roles) {
    return roles.some((role) => this.hasRole(role));
  }
  /**
   * Set authentication session
   */
  setSession(authData) {
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
  updateToken(token) {
    this.storageService.setItem(environment.tokenKey, token);
  }
  /**
   * Update user data
   */
  updateUser(user) {
    this.storageService.setObject(environment.userKey, user);
    this.currentUserSubject.next(user);
  }
  /**
   * Clear authentication session
   */
  clearSession() {
    this.storageService.removeItem(environment.tokenKey);
    this.storageService.removeItem(environment.refreshTokenKey);
    this.storageService.removeItem(environment.userKey);
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(StorageService), \u0275\u0275inject(NotificationService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }, { type: StorageService }, { type: NotificationService }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-EYPH3LHU.js.map
