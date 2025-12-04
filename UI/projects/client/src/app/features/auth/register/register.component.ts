import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CustomerAuthService } from '@core/services/customer-auth.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitting = false;
  showPassword = false;
  showConfirmPassword = false;

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
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatch
    });
  }

  get f() {
    return this.registerForm.controls;
  }


  /**
   * Custom validator for password match
   */
  passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    const formValue = this.registerForm.value;
    
    // Parse name into first and last name if needed
    const customerData = {
      firstName: formValue.firstName,
      lastName: formValue.lastName || undefined,
      phone: formValue.phone,
      email: formValue.email || undefined,
      password: formValue.password,
      confirmPassword: formValue.confirmPassword
    };

    this.customerAuthService.register(customerData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.success && response.data) {
          this.notificationService.success('Registration successful!');
          const customerId = response.data.customerId;
          this.router.navigate(['/orders', customerId]);
        } else {
          this.notificationService.error(response.message || 'Registration failed. Please try again.');
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        const errorMessage = error.error?.message || error.message || 'Registration failed. Please try again.';
        this.notificationService.error(errorMessage);
      }
    });
  }
}

