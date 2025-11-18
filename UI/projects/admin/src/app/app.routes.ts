import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
      },
      {
        path: 'reset-password/:token',
        loadComponent: () => import('./features/auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: 'menu-items',
        children: [
          {
            path: '',
            loadComponent: () => import('./features/menu-items/list-menu-items/list-menu-items.component').then(m => m.ListMenuItemsComponent)
          },
          {
            path: 'create',
            loadComponent: () => import('./features/menu-items/create-menu-item/create-menu-item.component').then(m => m.CreateMenuItemComponent)
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

