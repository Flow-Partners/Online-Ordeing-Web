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
  ActivatedRoute,
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

// projects/client/src/app/features/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, ResetPasswordComponent_div_15_span_1_Template, 2, 0, "span", 17)(2, ResetPasswordComponent_div_15_span_2_Template, 2, 0, "span", 17);
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
function ResetPasswordComponent_div_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please confirm your password");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, ResetPasswordComponent_div_25_span_1_Template, 2, 0, "span", 17)(2, ResetPasswordComponent_div_25_span_2_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["confirmPassword"].errors == null ? null : ctx_r0.f["confirmPassword"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.resetPasswordForm.errors == null ? null : ctx_r0.resetPasswordForm.errors["passwordMismatch"]);
  }
}
function ResetPasswordComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reset Password");
    \u0275\u0275elementEnd();
  }
}
function ResetPasswordComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 22);
    \u0275\u0275text(2, " Resetting... ");
    \u0275\u0275elementEnd();
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  authService;
  notificationService;
  router;
  route;
  resetPasswordForm;
  isSubmitting = false;
  showPassword = false;
  showConfirmPassword = false;
  token = "";
  constructor(fb, authService, notificationService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.token = this.route.snapshot.params["token"];
    if (!this.token) {
      this.notificationService.error("Invalid reset link");
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.initForm();
  }
  initForm() {
    this.resetPasswordForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]]
    }, {
      validators: this.passwordMatch
    });
  }
  get f() {
    return this.resetPasswordForm.controls;
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
    if (this.resetPasswordForm.invalid) {
      Object.keys(this.resetPasswordForm.controls).forEach((key) => {
        this.resetPasswordForm.controls[key].markAsTouched();
      });
      return;
    }
    this.isSubmitting = true;
    const data = {
      token: this.token,
      password: this.resetPasswordForm.value.password,
      confirmPassword: this.resetPasswordForm.value.confirmPassword
    };
    this.authService.resetPassword(data).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(["/auth/login"]);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.notificationService.error(error.message || "Failed to reset password. Please try again.");
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 33, vars: 20, consts: [[1, "reset-password-container"], [1, "text-center", "mb-3"], [1, "text-center", "text-muted", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "password", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-lock"], ["id", "password", "formControlName", "password", "placeholder", "Enter new password", 1, "form-control", 3, "type"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "mb-4"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirm new password", 1, "form-control", 3, "type"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "disabled"], [4, "ngIf"], [1, "text-center"], ["routerLink", "/auth/login", 1, "text-decoration-none"], [1, "bi", "bi-arrow-left", "me-2"], [1, "invalid-feedback", "d-block"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
      \u0275\u0275text(2, "Reset Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, " Please enter your new password. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 3);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 4)(7, "label", 5);
      \u0275\u0275text(8, "New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 9);
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_13_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, ResetPasswordComponent_div_15_Template, 3, 2, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13)(17, "label", 14);
      \u0275\u0275text(18, "Confirm New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 6)(20, "span", 7);
      \u0275\u0275element(21, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275elementStart(23, "button", 10);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_23_listener() {
        return ctx.toggleConfirmPasswordVisibility();
      });
      \u0275\u0275element(24, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, ResetPasswordComponent_div_25_Template, 3, 2, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 16);
      \u0275\u0275template(27, ResetPasswordComponent_span_27_Template, 2, 0, "span", 17)(28, ResetPasswordComponent_span_28_Template, 3, 0, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 18)(30, "a", 19);
      \u0275\u0275element(31, "i", 20);
      \u0275\u0275text(32, " Back to Login ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.resetPasswordForm);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showPassword)("bi-eye-slash", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["password"].invalid && ctx.f["password"].touched);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("is-invalid", ctx.f["confirmPassword"].invalid && ctx.f["confirmPassword"].touched || (ctx.resetPasswordForm.errors == null ? null : ctx.resetPasswordForm.errors["passwordMismatch"]) && ctx.f["confirmPassword"].touched);
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showConfirmPassword)("bi-eye-slash", ctx.showConfirmPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.f["confirmPassword"].invalid && ctx.f["confirmPassword"].touched || (ctx.resetPasswordForm.errors == null ? null : ctx.resetPasswordForm.errors["passwordMismatch"]) && ctx.f["confirmPassword"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.reset-password-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.reset-password-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.reset-password-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.reset-password-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.reset-password-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.reset-password-container[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.reset-password-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.reset-password-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.reset-password-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.reset-password-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=reset-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="reset-password-container">
  <h3 class="text-center mb-3">Reset Password</h3>
  <p class="text-center text-muted mb-4">
    Please enter your new password.
  </p>

  <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()">
    <!-- Password Field -->
    <div class="mb-3">
      <label for="password" class="form-label">New Password</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-lock"></i>
        </span>
        <input
          [type]="showPassword ? 'text' : 'password'"
          class="form-control"
          id="password"
          formControlName="password"
          placeholder="Enter new password"
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
      </div>
    </div>

    <!-- Confirm Password Field -->
    <div class="mb-4">
      <label for="confirmPassword" class="form-label">Confirm New Password</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-lock"></i>
        </span>
        <input
          [type]="showConfirmPassword ? 'text' : 'password'"
          class="form-control"
          id="confirmPassword"
          formControlName="confirmPassword"
          placeholder="Confirm new password"
          [class.is-invalid]="(f['confirmPassword'].invalid && f['confirmPassword'].touched) || 
                              (resetPasswordForm.errors?.['passwordMismatch'] && f['confirmPassword'].touched)">
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="toggleConfirmPasswordVisibility()">
          <i class="bi" [class.bi-eye]="!showConfirmPassword" [class.bi-eye-slash]="showConfirmPassword"></i>
        </button>
      </div>
      <div class="invalid-feedback d-block" 
           *ngIf="(f['confirmPassword'].invalid && f['confirmPassword'].touched) || 
                  (resetPasswordForm.errors?.['passwordMismatch'] && f['confirmPassword'].touched)">
        <span *ngIf="f['confirmPassword'].errors?.['required']">Please confirm your password</span>
        <span *ngIf="resetPasswordForm.errors?.['passwordMismatch']">Passwords do not match</span>
      </div>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="btn btn-primary w-100 mb-3"
      [disabled]="isSubmitting">
      <span *ngIf="!isSubmitting">Reset Password</span>
      <span *ngIf="isSubmitting">
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Resetting...
      </span>
    </button>

    <!-- Back to Login -->
    <div class="text-center">
      <a routerLink="/auth/login" class="text-decoration-none">
        <i class="bi bi-arrow-left me-2"></i>
        Back to Login
      </a>
    </div>
  </form>
</div>

`, styles: ["/* projects/client/src/app/features/auth/reset-password/reset-password.component.scss */\n.reset-password-container h3 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.reset-password-container .form-label {\n  font-weight: 500;\n  color: #495057;\n}\n.reset-password-container .input-group-text {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.reset-password-container .form-control {\n  border-left: none;\n}\n.reset-password-container .form-control:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.reset-password-container .btn-outline-secondary {\n  border-left: none;\n}\n.reset-password-container .btn-primary {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.reset-password-container .btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.reset-password-container a {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.reset-password-container a:hover {\n  color: #764ba2;\n}\n/*# sourceMappingURL=reset-password.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: NotificationService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/features/auth/reset-password/reset-password.component.ts", lineNumber: 15 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=chunk-QYMJ72UX.js.map
