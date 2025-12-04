import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomerAuthService } from '@core/services/customer-auth.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private customerAuthService: CustomerAuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Redirect if already logged in
    if (this.customerAuthService.isAuthenticated) {
      const customerId = this.customerAuthService.customerId;
      if (customerId) {
        this.router.navigate(['/orders', customerId]);
      } else {
        this.router.navigate(['/menu']);
      }
    }

    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      phoneOrEmail: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    const credentials = {
      phoneOrEmail: this.loginForm.value.phoneOrEmail,
      password: this.loginForm.value.password,
      rememberMe: this.loginForm.value.rememberMe
    };

    this.customerAuthService.login(credentials).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.success && response.data) {
          this.notificationService.success('Login successful!');
          const customerId = response.data.customerId;
          this.router.navigate(['/orders', customerId]);
        } else {
          this.notificationService.error(response.message || 'Login failed. Please check your credentials.');
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        const errorMessage = error.error?.message || error.message || 'Login failed. Please check your credentials.';
        this.notificationService.error(errorMessage);
      }
    });
  }
}

