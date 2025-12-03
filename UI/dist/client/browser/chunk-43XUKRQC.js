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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/features/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_div_1_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_1_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, ForgotPasswordComponent_div_1_div_13_span_1_Template, 2, 0, "span", 1)(2, ForgotPasswordComponent_div_1_div_13_span_2_Template, 2, 0, "span", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["email"].errors == null ? null : ctx_r1.f["email"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["email"].errors == null ? null : ctx_r1.f["email"].errors["email"]);
  }
}
function ForgotPasswordComponent_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Reset Link");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 18);
    \u0275\u0275text(2, " Sending... ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h3", 3);
    \u0275\u0275text(2, "Forgot Password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 4);
    \u0275\u0275text(4, " Enter your email address and we'll send you a link to reset your password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "form", 5);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_div_1_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(6, "div", 6)(7, "label", 7);
    \u0275\u0275text(8, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 8)(10, "span", 9);
    \u0275\u0275element(11, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ForgotPasswordComponent_div_1_div_13_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 13);
    \u0275\u0275template(15, ForgotPasswordComponent_div_1_span_15_Template, 2, 0, "span", 1)(16, ForgotPasswordComponent_div_1_span_16_Template, 3, 0, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 14)(18, "a", 15);
    \u0275\u0275element(19, "i", 16);
    \u0275\u0275text(20, " Back to Login ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.forgotPasswordForm);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx_r1.f["email"].invalid && ctx_r1.f["email"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["email"].invalid && ctx_r1.f["email"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
  }
}
function ForgotPasswordComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 19);
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 21);
    \u0275\u0275text(4, "Check Your Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 22);
    \u0275\u0275text(6, " We've sent a password reset link to your email address. Please check your inbox and follow the instructions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 23);
    \u0275\u0275text(8, " Back to Login ");
    \u0275\u0275elementEnd()();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb;
  authService;
  notificationService;
  forgotPasswordForm;
  isSubmitting = false;
  isSuccess = false;
  constructor(fb, authService, notificationService) {
    this.fb = fb;
    this.authService = authService;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  get f() {
    return this.forgotPasswordForm.controls;
  }
  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      Object.keys(this.forgotPasswordForm.controls).forEach((key) => {
        this.forgotPasswordForm.controls[key].markAsTouched();
      });
      return;
    }
    this.isSubmitting = true;
    const data = this.forgotPasswordForm.value;
    this.authService.forgotPassword(data).subscribe({
      next: (response) => {
        if (response.success) {
          this.isSuccess = true;
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.notificationService.error(error.message || "Failed to send reset link. Please try again.");
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 3, vars: 2, consts: [[1, "forgot-password-container"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "text-center", "mb-3"], [1, "text-center", "text-muted", "mb-4"], [3, "ngSubmit", "formGroup"], [1, "mb-4"], ["for", "email", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-envelope"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter your email", 1, "form-control"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "disabled"], [1, "text-center"], ["routerLink", "/auth/login", 1, "text-decoration-none"], [1, "bi", "bi-arrow-left", "me-2"], [1, "invalid-feedback", "d-block"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "success-icon", "mb-3"], [1, "bi", "bi-check-circle-fill", "text-success", 2, "font-size", "4rem"], [1, "mb-3"], [1, "text-muted", "mb-4"], ["routerLink", "/auth/login", 1, "btn", "btn-primary"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ForgotPasswordComponent_div_1_Template, 21, 7, "div", 1)(2, ForgotPasswordComponent_div_2_Template, 9, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSuccess);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.forgot-password-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.forgot-password-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.forgot-password-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n}\n.forgot-password-container[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_scaleIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="forgot-password-container">
  <div *ngIf="!isSuccess">
    <h3 class="text-center mb-3">Forgot Password?</h3>
    <p class="text-center text-muted mb-4">
      Enter your email address and we'll send you a link to reset your password.
    </p>

    <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
      <!-- Email Field -->
      <div class="mb-4">
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

      <!-- Submit Button -->
      <button
        type="submit"
        class="btn btn-primary w-100 mb-3"
        [disabled]="isSubmitting">
        <span *ngIf="!isSubmitting">Send Reset Link</span>
        <span *ngIf="isSubmitting">
          <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Sending...
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

  <!-- Success Message -->
  <div *ngIf="isSuccess" class="text-center">
    <div class="success-icon mb-3">
      <i class="bi bi-check-circle-fill text-success" style="font-size: 4rem;"></i>
    </div>
    <h3 class="mb-3">Check Your Email</h3>
    <p class="text-muted mb-4">
      We've sent a password reset link to your email address. 
      Please check your inbox and follow the instructions.
    </p>
    <a routerLink="/auth/login" class="btn btn-primary">
      Back to Login
    </a>
  </div>
</div>

`, styles: ["/* projects/client/src/app/features/auth/forgot-password/forgot-password.component.scss */\n.forgot-password-container h3 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.forgot-password-container .form-label {\n  font-weight: 500;\n  color: #495057;\n}\n.forgot-password-container .input-group-text {\n  background-color: #f8f9fa;\n  border-right: none;\n}\n.forgot-password-container .form-control {\n  border-left: none;\n}\n.forgot-password-container .form-control:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n}\n.forgot-password-container .btn-primary {\n  padding: 0.75rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n.forgot-password-container .btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.forgot-password-container a {\n  color: #667eea;\n  transition: color 0.2s ease;\n}\n.forgot-password-container a:hover {\n  color: #764ba2;\n}\n.forgot-password-container .success-icon {\n  animation: scaleIn 0.3s ease;\n}\n@keyframes scaleIn {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/features/auth/forgot-password/forgot-password.component.ts", lineNumber: 15 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-43XUKRQC.js.map
