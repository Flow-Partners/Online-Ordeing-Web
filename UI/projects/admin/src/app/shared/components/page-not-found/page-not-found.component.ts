import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-container">
      <div class="text-center">
        <h1 class="display-1">404</h1>
        <h2 class="mb-4">Page Not Found</h2>
        <p class="lead mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a routerLink="/dashboard" class="btn btn-primary">
          <i class="bi bi-house-door me-2"></i>
          Go to Dashboard
        </a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
    }

    .display-1 {
      font-size: 8rem;
      font-weight: bold;
      color: var(--bs-primary);
    }

    h2 {
      font-size: 2.5rem;
    }
  `]
})
export class PageNotFoundComponent {}

