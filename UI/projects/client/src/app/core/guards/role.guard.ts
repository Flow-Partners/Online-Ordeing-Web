import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
class RoleGuardService {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles = route.data['roles'] as string[];

    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const hasRole = this.authService.hasAnyRole(requiredRoles);

    if (!hasRole) {
      this.notificationService.error('You do not have permission to access this page');
      this.router.navigate(['/menu']);
      return false;
    }

    return true;
  }
}

export const RoleGuard: CanActivateFn = (route) => {
  return inject(RoleGuardService).canActivate(route);
};

