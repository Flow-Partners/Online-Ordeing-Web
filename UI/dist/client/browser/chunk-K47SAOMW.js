import {
  AuthService
} from "./chunk-EYPH3LHU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-3PINP6LG.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-7V4CR2SO.js";
import {
  CommonModule,
  Component,
  NgIf,
  NotificationService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/features/auth/register/register.component.ts
function RegisterComponent_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Name must be at least 3 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_11_span_1_Template, 2, 0, "span", 21)(2, RegisterComponent_div_11_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["name"].errors == null ? null : ctx_r0.f["name"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["name"].errors == null ? null : ctx_r0.f["name"].errors["minlength"]);
  }
}
function RegisterComponent_div_19_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_19_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_19_span_1_Template, 2, 0, "span", 21)(2, RegisterComponent_div_19_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["email"].errors == null ? null : ctx_r0.f["email"].errors["email"]);
  }
}
function RegisterComponent_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_29_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Password must contain uppercase, lowercase, and number ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_29_span_1_Template, 2, 0, "span", 21)(2, RegisterComponent_div_29_span_2_Template, 2, 0, "span", 21)(3, RegisterComponent_div_29_span_3_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["passwordStrength"]);
  }
}
function RegisterComponent_div_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please confirm your password");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_39_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, RegisterComponent_div_39_span_1_Template, 2, 0, "span", 21)(2, RegisterComponent_div_39_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["confirmPassword"].errors == null ? null : ctx_r0.f["confirmPassword"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.registerForm.errors == null ? null : ctx_r0.registerForm.errors["passwordMismatch"]);
  }
}
function RegisterComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Account");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275text(2, " Creating account... ");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  fb;
  authService;
  notificationService;
  router;
  registerForm;
  isSubmitting = false;
  showPassword = false;
  showConfirmPassword = false;
  constructor(fb, authService, notificationService, router) {
    this.fb = fb;
    this.authService = authService;
    this.notificationService = notificationService;
    this.router = router;
  }
  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(["/dashboard"]);
    }
    this.initForm();
  }
  initForm() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), this.passwordStrength]],
      confirmPassword: ["", [Validators.required]]
    }, {
      validators: this.passwordMatch
    });
  }
  get f() {
    return this.registerForm.controls;
  }
  /**
   * Custom validator for password strength
   */
  passwordStrength(control) {
    const value = control.value;
    if (!value)
      return null;
    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const passwordValid = hasNumber && hasUpper && hasLower;
    return !passwordValid ? { passwordStrength: true } : null;
  }
  /**
   * Custom validator for password match
   */
  passwordMatch(control) {
    const password = control.get("password");
    const confirmPassword = control.get("confirmPassword");
    if (!password || !confirmPassword)
      return null;
    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach((key) => {
        this.registerForm.controls[key].markAsTouched();
      });
      return;
    }
    this.isSubmitting = true;
    const userData = this.registerForm.value;
    this.authService.register(userData).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(["/dashboard"]);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.notificationService.error(error.message || "Registration failed. Please try again.");
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 48, vars: 26, consts: [[1, "register-container"], [1, "text-center", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "name", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-person"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter your full name", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "email", 1, "form-label"], [1, "bi", "bi-envelope"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control"], ["for", "password", 1, "form-label"], [1, "bi", "bi-lock"], ["id", "password", "formControlName", "password", "placeholder", "Create a password", 1, "form-control", 3, "type"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirm your password", 1, "form-control", 3, "type"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "disabled"], [4, "ngIf"], [1, "text-center"], [1, "text-muted", "mb-0"], ["routerLink", "/auth/login", 1, "text-decoration-none", "fw-bold"], [1, "invalid-feedback", "d-block"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 2);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, RegisterComponent_div_11_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 3)(13, "label", 10);
      \u0275\u0275text(14, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 5)(16, "span", 6);
      \u0275\u0275element(17, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, RegisterComponent_div_19_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 3)(21, "label", 13);
      \u0275\u0275text(22, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 5)(24, "span", 6);
      \u0275\u0275element(25, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 15);
      \u0275\u0275elementStart(27, "button", 16);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_27_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(29, RegisterComponent_div_29_Template, 4, 3, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 3)(31, "label", 18);
      \u0275\u0275text(32, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 5)(34, "span", 6);
      \u0275\u0275element(35, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 19);
      \u0275\u0275elementStart(37, "button", 16);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_37_listener() {
        return ctx.toggleConfirmPasswordVisibility();
      });
      \u0275\u0275element(38, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(39, RegisterComponent_div_39_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 20);
      \u0275\u0275template(41, RegisterComponent_span_41_Template, 2, 0, "span", 21)(42, RegisterComponent_span_42_Template, 3, 0, "span", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 22)(44, "p", 23);
      \u0275\u0275text(45, " Already have an account? ");
      \u0275\u0275elementStart(46, "a", 24);
      \u0275\u0275text(47, "Sign In");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["name"].invalid && ctx.f["name"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["email"].invalid && ctx.f["email"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["email"].invalid && ctx.f["email"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showPassword)("bi-eye-slash", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["confirmPassword"].invalid && ctx.f["confirmPassword"].touched || (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"]) && ctx.f["confirmPassword"].touched);
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showConfirmPassword)("bi-eye-slash", ctx.showConfirmPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["confirmPassword"].invalid && ctx.f["confirmPassword"].touched || (ctx.registerForm.errors == null ? null : ctx.registerForm.errors["passwordMismatch"]) && ctx.f["confirmPassword"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.register-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.register-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.register-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.register-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.register-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.register-container[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.register-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.register-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.register-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.register-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="register-container">
  <h3 class="text-center mb-4">Create Account</h3>

  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
    <!-- Name Field -->
    <div class="mb-3">
      <label for="name" class="form-label">Full Name</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-person"></i>
        </span>
        <input
          type="text"
          class="form-control"
          id="name"
          formControlName="name"
          placeholder="Enter your full name"
          [class.is-invalid]="f['name'].invalid && f['name'].touched">
      </div>
      <div class="invalid-feedback d-block" *ngIf="f['name'].invalid && f['name'].touched">
        <span *ngIf="f['name'].errors?.['required']">Name is required</span>
        <span *ngIf="f['name'].errors?.['minlength']">Name must be at least 3 characters</span>
      </div>
    </div>

    <!-- Email Field -->
    <div class="mb-3">
      <label for="email" class="form-label">Email Address</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-envelope"></i>
        </span>
        <input
          type="email"
          class="form-control"
          id="email"
          formControlName="email"
          placeholder="Enter your email"
          [class.is-invalid]="f['email'].invalid && f['email'].touched">
      </div>
      <div class="invalid-feedback d-block" *ngIf="f['email'].invalid && f['email'].touched">
        <span *ngIf="f['email'].errors?.['required']">Email is required</span>
        <span *ngIf="f['email'].errors?.['email']">Please enter a valid email</span>
      </div>
    </div>

    <!-- Password Field -->
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-lock"></i>
        </span>
        <input
          [type]="showPassword ? 'text' : 'password'"
          class="form-control"
          id="password"
          formControlName="password"
          placeholder="Create a password"
          [class.is-invalid]="f['password'].invalid && f['password'].touched">
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="togglePasswordVisibility()">
          <i class="bi" [class.bi-eye]="!showPassword" [class.bi-eye-slash]="showPassword"></i>
        </button>
      </div>
      <div class="invalid-feedback d-block" *ngIf="f['password'].invalid && f['password'].touched">
        <span *ngIf="f['password'].errors?.['required']">Password is required</span>
        <span *ngIf="f['password'].errors?.['minlength']">Password must be at least 8 characters</span>
        <span *ngIf="f['password'].errors?.['passwordStrength']">
          Password must contain uppercase, lowercase, and number
        </span>
      </div>
    </div>

    <!-- Confirm Password Field -->
    <div class="mb-3">
      <label for="confirmPassword" class="form-label">Confirm Password</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-lock"></i>
        </span>
        <input
          [type]="showConfirmPassword ? 'text' : 'password'"
          class="form-control"
          id="confirmPassword"
          formControlName="confirmPassword"
          placeholder="Confirm your password"
          [class.is-invalid]="(f['confirmPassword'].invalid && f['confirmPassword'].touched) || 
                              (registerForm.errors?.['passwordMismatch'] && f['confirmPassword'].touched)">
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="toggleConfirmPasswordVisibility()">
          <i class="bi" [class.bi-eye]="!showConfirmPassword" [class.bi-eye-slash]="showConfirmPassword"></i>
        </button>
      </div>
      <div class="invalid-feedback d-block" 
           *ngIf="(f['confirmPassword'].invalid && f['confirmPassword'].touched) || 
                  (registerForm.errors?.['passwordMismatch'] && f['confirmPassword'].touched)">
        <span *ngIf="f['confirmPassword'].errors?.['required']">Please confirm your password</span>
        <span *ngIf="registerForm.errors?.['passwordMismatch']">Passwords do not match</span>
      </div>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="btn btn-primary w-100 mb-3"
      [disabled]="isSubmitting">
      <span *ngIf="!isSubmitting">Create Account</span>
      <span *ngIf="isSubmitting">
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Creating account...
      </span>
    </button>

    <!-- Login Link -->
    <div class="text-center">
      <p class="text-muted mb-0">
        Already have an account?
        <a routerLink="/auth/login" class="text-decoration-none fw-bold">Sign In</a>
      </p>
    </div>
  </form>
</div>

`, styles: ["/* projects/client/src/app/features/auth/register/register.component.scss */\n.register-container h3 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.register-container .form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.register-container .input-group-text {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.register-container .form-control {\n  border-left: none;\n}\n.register-container .form-control:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.register-container .btn-outline-secondary {\n  border-left: none;\n}\n.register-container .btn-primary {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.register-container .btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.register-container a {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.register-container a:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: NotificationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 15 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-K47SAOMW.js.map
