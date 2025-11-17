import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  template: `
    <app-loader></app-loader>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'angular-base-template';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Initialize app
    this.checkAuthentication();
  }

  private checkAuthentication(): void {
    // Check if user is authenticated and load user data
    if (this.authService.isAuthenticated) {
      this.authService.getCurrentUser().subscribe();
    }
  }
}

