import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomerAuthService } from '@core/services/customer-auth.service';
import { NotificationService } from '@core/services/notification.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() success = new EventEmitter<void>();

  // Form states
  emailForm!: FormGroup;
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  // UI states
  currentStep: 'email' | 'login' | 'register' = 'email';
  enteredEmail = '';
  isCheckingEmail = false;
  isSubmitting = false;
  showPassword = false;
  showConfirmPassword = false;

  // Country code for phone
  selectedCountryCode = '+92';
  countryCodes = [
    { code: '+92', flag: '🇵🇰', country: 'Pakistan' }
  ];

  constructor(
    private fb: FormBuilder,
    private customerAuthService: CustomerAuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initEmailForm();
    this.initLoginForm();
    this.initRegisterForm();
  }

  initEmailForm(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      phoneOrEmail: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  initRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.email]],
      gender: [''],
      dateOfBirth: [''],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatch
    });
  }

  get emailF() {
    return this.emailForm.controls;
  }

  get loginF() {
    return this.loginForm.controls;
  }

  get registerF() {
    return this.registerForm.controls;
  }

  passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  onEmailSubmit(): void {
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }

    this.isCheckingEmail = true;
    this.enteredEmail = this.emailForm.value.email;

    // Check if email exists by attempting login with dummy password
    // The backend returns "Invalid phone/email or password" for both cases:
    // 1. Customer doesn't exist
    // 2. Customer exists but password is wrong
    // We need to check for specific error messages to distinguish
    const dummyLogin = {
      phoneOrEmail: this.enteredEmail,
      password: 'dummy_check_password_12345',
      rememberMe: false
    };

    // Check if email exists - this will intentionally fail, so we handle it silently
    this.checkEmailExists(this.enteredEmail);
  }

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const credentials = this.loginForm.value;

    this.customerAuthService.login(credentials).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.success && response.data) {
          this.notificationService.success('Login successful!');
          this.success.emit();
          this.closeModal();
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

  onRegisterSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const formValue = this.registerForm.value;
    
    const customerData = {
      firstName: formValue.firstName,
      lastName: formValue.lastName || undefined,
      phone: this.selectedCountryCode + formValue.phone.replace(/\D/g, ''),
      email: formValue.email || undefined,
      password: formValue.password,
      confirmPassword: formValue.confirmPassword
    };

    this.customerAuthService.register(customerData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.success && response.data) {
          this.notificationService.success('Registration successful!');
          this.success.emit();
          this.closeModal();
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

  goBackToEmail(): void {
    this.currentStep = 'email';
    this.enteredEmail = '';
    this.emailForm.reset();
    this.loginForm.reset();
    this.registerForm.reset();
  }

  switchToRegister(): void {
    this.currentStep = 'register';
    this.registerForm.patchValue({ email: this.enteredEmail });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onDateInputFocus(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      target.type = 'date';
    }
  }

  onDateInputBlur(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      target.type = 'text';
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }

  private checkEmailExists(email: string): void {
    // Use customerAuthService.login but catch the error silently
    // This is an intentional check that will fail, so we suppress the error
    const dummyLogin = {
      phoneOrEmail: email,
      password: 'dummy_check_password_12345',
      rememberMe: false
    };

    this.customerAuthService.login(dummyLogin).pipe(
      catchError((error) => {
        // Silently handle the error - this is expected when checking if email exists
        // Return the error wrapped in an object so we can process it without triggering notifications
        return of({ isError: true, error: error });
      })
    ).subscribe({
      next: (response: any) => {
        this.isCheckingEmail = false;
        
        // If response indicates an error (expected case)
        if (response.isError) {
          const error = response.error;
          const errorMessage = (error.error?.message || error.message || '').toLowerCase();

          // Check for specific error messages that indicate customer exists
          if (errorMessage.includes('account not set up') || 
              errorMessage.includes('please register first')) {
            // Customer exists but account not set up - show register
            this.currentStep = 'register';
            this.registerForm.patchValue({ email: this.enteredEmail });
          } else if (errorMessage.includes('deactivated') || 
                     errorMessage.includes('blocked')) {
            // Customer exists but account is deactivated/blocked - show login
            this.currentStep = 'login';
            this.loginForm.patchValue({ phoneOrEmail: this.enteredEmail });
          } else {
            // Generic error (Invalid phone/email or password) - default to LOGIN form
            // This could mean either:
            // 1. Customer doesn't exist (user can switch to register)
            // 2. Customer exists but password is wrong (user should see login)
            // We default to login because it's more likely the user exists
            this.currentStep = 'login';
            this.loginForm.patchValue({ phoneOrEmail: this.enteredEmail });
          }
        } else {
          // This shouldn't happen with dummy password, but if it does, email exists
          this.currentStep = 'login';
          this.loginForm.patchValue({ phoneOrEmail: this.enteredEmail });
        }
      }
    });
  }
}

