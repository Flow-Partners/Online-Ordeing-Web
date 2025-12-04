import {
  AuthService
} from "./chunk-EYPH3LHU.js";
import {
  CheckboxControlValueAccessor,
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

// projects/client/src/app/features/auth/login/login.component.ts
function LoginComponent_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, LoginComponent_div_11_span_1_Template, 2, 0, "span", 21)(2, LoginComponent_div_11_span_2_Template, 2, 0, "span", 21);
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
function LoginComponent_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, LoginComponent_div_21_span_1_Template, 2, 0, "span", 21)(2, LoginComponent_div_21_span_2_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["minlength"]);
  }
}
function LoginComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 27);
    \u0275\u0275text(2, " Signing in... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  notificationService;
  router;
  loginForm;
  isSubmitting = false;
  showPassword = false;
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
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.controls[key].markAsTouched();
      });
      return;
    }
    this.isSubmitting = true;
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(["/dashboard"]);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.notificationService.error(error.message || "Login failed. Please check your credentials.");
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 41, vars: 15, consts: [[1, "login-container"], [1, "text-center", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "email", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-envelope"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["for", "password", 1, "form-label"], [1, "bi", "bi-lock"], ["id", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control", 3, "type"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "form-check"], ["type", "checkbox", "id", "rememberMe", "formControlName", "rememberMe", 1, "form-check-input"], ["for", "rememberMe", 1, "form-check-label"], ["routerLink", "/auth/forgot-password", 1, "text-decoration-none", "small"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "disabled"], [4, "ngIf"], [1, "text-center"], [1, "text-muted", "mb-0"], ["routerLink", "/auth/register", 1, "text-decoration-none", "fw-bold"], ["role", "alert", 1, "alert", "alert-info", "mt-4", "small"], [1, "invalid-feedback", "d-block"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "form", 2);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, LoginComponent_div_11_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 3)(13, "label", 10);
      \u0275\u0275text(14, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 5)(16, "span", 6);
      \u0275\u0275element(17, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 12);
      \u0275\u0275elementStart(19, "button", 13);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_19_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, LoginComponent_div_21_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16);
      \u0275\u0275element(24, "input", 17);
      \u0275\u0275elementStart(25, "label", 18);
      \u0275\u0275text(26, " Remember me ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "a", 19);
      \u0275\u0275text(28, " Forgot Password? ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 20);
      \u0275\u0275template(30, LoginComponent_span_30_Template, 2, 0, "span", 21)(31, LoginComponent_span_31_Template, 3, 0, "span", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 22)(33, "p", 23);
      \u0275\u0275text(34, " Don't have an account? ");
      \u0275\u0275elementStart(35, "a", 24);
      \u0275\u0275text(36, "Sign Up");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 25)(38, "strong");
      \u0275\u0275text(39, "Demo:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, " This is a template project. Configure your API endpoint in environment files. ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.loginForm);
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
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.login-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.login-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.login-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.login-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.login-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.login-container[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.login-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.login-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.login-container[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.login-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.login-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="login-container">
  <h3 class="text-center mb-4">Sign In</h3>

  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
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
          placeholder="Enter your password"
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
        <span *ngIf="f['password'].errors?.['minlength']">Password must be at least 6 characters</span>
      </div>
    </div>

    <!-- Remember Me & Forgot Password -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="rememberMe"
          formControlName="rememberMe">
        <label class="form-check-label" for="rememberMe">
          Remember me
        </label>
      </div>
      <a routerLink="/auth/forgot-password" class="text-decoration-none small">
        Forgot Password?
      </a>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="btn btn-primary w-100 mb-3"
      [disabled]="isSubmitting">
      <span *ngIf="!isSubmitting">Sign In</span>
      <span *ngIf="isSubmitting">
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Signing in...
      </span>
    </button>

    <!-- Register Link -->
    <div class="text-center">
      <p class="text-muted mb-0">
        Don't have an account?
        <a routerLink="/auth/register" class="text-decoration-none fw-bold">Sign Up</a>
      </p>
    </div>
  </form>

  <!-- Demo Credentials (Remove in production) -->
  <div class="alert alert-info mt-4 small" role="alert">
    <strong>Demo:</strong> This is a template project. Configure your API endpoint in environment files.
  </div>
</div>

`, styles: ["/* projects/client/src/app/features/auth/login/login.component.scss */\n.login-container h3 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.login-container .form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.login-container .input-group-text {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.login-container .form-control {\n  border-left: none;\n}\n.login-container .form-control:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.login-container .btn-outline-secondary {\n  border-left: none;\n}\n.login-container .btn-primary {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.login-container .btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.login-container .form-check-label {\n  font-size: 0.9rem;\n  color: #6c757d;\n}\n.login-container a {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.login-container a:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: NotificationService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-3K4PXUNY.js.map
