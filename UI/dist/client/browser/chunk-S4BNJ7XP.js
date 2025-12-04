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
import "./chunk-7V4CR2SO.js";
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
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/features/profile/profile.component.ts
function ProfileComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Name is required (min 3 characters) ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Valid email is required ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Update Profile");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275text(2, " Updating... ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Change Password");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 43);
    \u0275\u0275text(2, " Changing... ");
    \u0275\u0275elementEnd();
  }
}
var ProfileComponent = class _ProfileComponent {
  fb;
  authService;
  notificationService;
  currentUser = null;
  profileForm;
  passwordForm;
  isSubmitting = false;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  constructor(fb, authService, notificationService) {
    this.fb = fb;
    this.authService = authService;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      if (user) {
        this.initForms(user);
      }
    });
  }
  initForms(user) {
    this.profileForm = this.fb.group({
      name: [user.name, [Validators.required, Validators.minLength(3)]],
      email: [user.email, [Validators.required, Validators.email]],
      role: [{ value: user.role, disabled: true }]
    });
    this.passwordForm = this.fb.group({
      currentPassword: ["", [Validators.required]],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]]
    });
  }
  get pf() {
    return this.profileForm.controls;
  }
  get pwf() {
    return this.passwordForm.controls;
  }
  onUpdateProfile() {
    if (this.profileForm.invalid) {
      Object.keys(this.profileForm.controls).forEach((key) => {
        this.profileForm.controls[key].markAsTouched();
      });
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.notificationService.success("Profile updated successfully!");
      this.isSubmitting = false;
    }, 1e3);
  }
  onChangePassword() {
    if (this.passwordForm.invalid) {
      Object.keys(this.passwordForm.controls).forEach((key) => {
        this.passwordForm.controls[key].markAsTouched();
      });
      return;
    }
    const { newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {
      this.notificationService.error("Passwords do not match");
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.notificationService.success("Password changed successfully!");
      this.passwordForm.reset();
      this.isSubmitting = false;
    }, 1e3);
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 89, vars: 39, consts: [[1, "profile-container"], [1, "row", "g-4"], [1, "col-12", "col-lg-4"], [1, "card"], [1, "card-body", "text-center"], ["alt", "Profile Picture", 1, "profile-image", "mb-3", 3, "src"], [1, "mb-1"], [1, "text-muted", "mb-3"], [1, "badge", "bg-primary-subtle", "text-primary"], [1, "my-4"], [1, "profile-stats"], [1, "stat-item"], [1, "text-muted", "small", "mb-0"], [1, "col-12", "col-lg-8"], [1, "card", "mb-4"], [1, "card-header", "bg-transparent"], [1, "mb-0"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-12", "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "role", 1, "form-label"], ["type", "text", "id", "role", "formControlName", "role", 1, "form-control"], [1, "text-muted"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["for", "currentPassword", 1, "form-label"], [1, "input-group"], ["id", "currentPassword", "formControlName", "currentPassword", 1, "form-control", 3, "type"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi"], ["for", "newPassword", 1, "form-label"], ["id", "newPassword", "formControlName", "newPassword", 1, "form-control", 3, "type"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementStart(6, "h4", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "hr", 9);
      \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "h5", 6);
      \u0275\u0275text(16, "128");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 12);
      \u0275\u0275text(18, "Posts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 11)(20, "h5", 6);
      \u0275\u0275text(21, "1,234");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 12);
      \u0275\u0275text(23, "Followers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 11)(25, "h5", 6);
      \u0275\u0275text(26, "567");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 12);
      \u0275\u0275text(28, "Following");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(29, "div", 13)(30, "div", 14)(31, "div", 15)(32, "h5", 16);
      \u0275\u0275text(33, "Update Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 17)(35, "form", 18);
      \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_35_listener() {
        return ctx.onUpdateProfile();
      });
      \u0275\u0275elementStart(36, "div", 19)(37, "div", 20)(38, "label", 21);
      \u0275\u0275text(39, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 22);
      \u0275\u0275template(41, ProfileComponent_div_41_Template, 2, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 20)(43, "label", 24);
      \u0275\u0275text(44, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 25);
      \u0275\u0275template(46, ProfileComponent_div_46_Template, 2, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 20)(48, "label", 26);
      \u0275\u0275text(49, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 27);
      \u0275\u0275elementStart(51, "small", 28);
      \u0275\u0275text(52, "Role is managed by administrators");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 29)(54, "button", 30);
      \u0275\u0275template(55, ProfileComponent_span_55_Template, 2, 0, "span", 31)(56, ProfileComponent_span_56_Template, 3, 0, "span", 31);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(57, "div", 3)(58, "div", 15)(59, "h5", 16);
      \u0275\u0275text(60, "Change Password");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 17)(62, "form", 18);
      \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_62_listener() {
        return ctx.onChangePassword();
      });
      \u0275\u0275elementStart(63, "div", 19)(64, "div", 20)(65, "label", 32);
      \u0275\u0275text(66, "Current Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 33);
      \u0275\u0275element(68, "input", 34);
      \u0275\u0275elementStart(69, "button", 35);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_69_listener() {
        return ctx.showCurrentPassword = !ctx.showCurrentPassword;
      });
      \u0275\u0275element(70, "i", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 20)(72, "label", 37);
      \u0275\u0275text(73, "New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 33);
      \u0275\u0275element(75, "input", 38);
      \u0275\u0275elementStart(76, "button", 35);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_76_listener() {
        return ctx.showNewPassword = !ctx.showNewPassword;
      });
      \u0275\u0275element(77, "i", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 20)(79, "label", 39);
      \u0275\u0275text(80, "Confirm New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 33);
      \u0275\u0275element(82, "input", 40);
      \u0275\u0275elementStart(83, "button", 35);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_83_listener() {
        return ctx.showConfirmPassword = !ctx.showConfirmPassword;
      });
      \u0275\u0275element(84, "i", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "div", 29)(86, "button", 41);
      \u0275\u0275template(87, ProfileComponent_span_87_Template, 2, 0, "span", 31)(88, ProfileComponent_span_88_Template, 3, 0, "span", 31);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", (ctx.currentUser == null ? null : ctx.currentUser.avatar) || "https://ui-avatars.com/api/?name=" + ((ctx.currentUser == null ? null : ctx.currentUser.name) || "User") + "&size=128", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.email);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.role);
      \u0275\u0275advance(24);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.pf["name"].invalid && ctx.pf["name"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pf["name"].invalid && ctx.pf["name"].touched);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.pf["email"].invalid && ctx.pf["email"].touched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.pf["email"].invalid && ctx.pf["email"].touched);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.passwordForm);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-invalid", ctx.pwf["currentPassword"].invalid && ctx.pwf["currentPassword"].touched);
      \u0275\u0275property("type", ctx.showCurrentPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showCurrentPassword)("bi-eye-slash", ctx.showCurrentPassword);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.pwf["newPassword"].invalid && ctx.pwf["newPassword"].touched);
      \u0275\u0275property("type", ctx.showNewPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showNewPassword)("bi-eye-slash", ctx.showNewPassword);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("is-invalid", ctx.pwf["confirmPassword"].invalid && ctx.pwf["confirmPassword"].touched);
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bi-eye", !ctx.showConfirmPassword)("bi-eye-slash", ctx.showConfirmPassword);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.profile-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.profile-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.profile-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #f8f9fa;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.profile-container[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 0.25rem;\n}\n.profile-container[_ngcontent-%COMP%]   .profile-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.profile-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.profile-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="profile-container">
  <div class="row g-4">
    <!-- Profile Info -->
    <div class="col-12 col-lg-4">
      <div class="card">
        <div class="card-body text-center">
          <img
            [src]="currentUser?.avatar || 'https://ui-avatars.com/api/?name=' + (currentUser?.name || 'User') + '&size=128'"
            alt="Profile Picture"
            class="profile-image mb-3">
          <h4 class="mb-1">{{ currentUser?.name }}</h4>
          <p class="text-muted mb-3">{{ currentUser?.email }}</p>
          <span class="badge bg-primary-subtle text-primary">{{ currentUser?.role }}</span>

          <hr class="my-4">

          <div class="profile-stats">
            <div class="stat-item">
              <h5 class="mb-1">128</h5>
              <p class="text-muted small mb-0">Posts</p>
            </div>
            <div class="stat-item">
              <h5 class="mb-1">1,234</h5>
              <p class="text-muted small mb-0">Followers</p>
            </div>
            <div class="stat-item">
              <h5 class="mb-1">567</h5>
              <p class="text-muted small mb-0">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Forms -->
    <div class="col-12 col-lg-8">
      <!-- Update Profile -->
      <div class="card mb-4">
        <div class="card-header bg-transparent">
          <h5 class="mb-0">Update Profile</h5>
        </div>
        <div class="card-body">
          <form [formGroup]="profileForm" (ngSubmit)="onUpdateProfile()">
            <div class="row">
              <div class="col-12 mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  formControlName="name"
                  [class.is-invalid]="pf['name'].invalid && pf['name'].touched">
                <div class="invalid-feedback" *ngIf="pf['name'].invalid && pf['name'].touched">
                  Name is required (min 3 characters)
                </div>
              </div>

              <div class="col-12 mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  formControlName="email"
                  [class.is-invalid]="pf['email'].invalid && pf['email'].touched">
                <div class="invalid-feedback" *ngIf="pf['email'].invalid && pf['email'].touched">
                  Valid email is required
                </div>
              </div>

              <div class="col-12 mb-3">
                <label for="role" class="form-label">Role</label>
                <input
                  type="text"
                  class="form-control"
                  id="role"
                  formControlName="role">
                <small class="text-muted">Role is managed by administrators</small>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  [disabled]="isSubmitting">
                  <span *ngIf="!isSubmitting">Update Profile</span>
                  <span *ngIf="isSubmitting">
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Updating...
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Change Password -->
      <div class="card">
        <div class="card-header bg-transparent">
          <h5 class="mb-0">Change Password</h5>
        </div>
        <div class="card-body">
          <form [formGroup]="passwordForm" (ngSubmit)="onChangePassword()">
            <div class="row">
              <div class="col-12 mb-3">
                <label for="currentPassword" class="form-label">Current Password</label>
                <div class="input-group">
                  <input
                    [type]="showCurrentPassword ? 'text' : 'password'"
                    class="form-control"
                    id="currentPassword"
                    formControlName="currentPassword"
                    [class.is-invalid]="pwf['currentPassword'].invalid && pwf['currentPassword'].touched">
                  <button class="btn btn-outline-secondary" type="button" (click)="showCurrentPassword = !showCurrentPassword">
                    <i class="bi" [class.bi-eye]="!showCurrentPassword" [class.bi-eye-slash]="showCurrentPassword"></i>
                  </button>
                </div>
              </div>

              <div class="col-12 mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <div class="input-group">
                  <input
                    [type]="showNewPassword ? 'text' : 'password'"
                    class="form-control"
                    id="newPassword"
                    formControlName="newPassword"
                    [class.is-invalid]="pwf['newPassword'].invalid && pwf['newPassword'].touched">
                  <button class="btn btn-outline-secondary" type="button" (click)="showNewPassword = !showNewPassword">
                    <i class="bi" [class.bi-eye]="!showNewPassword" [class.bi-eye-slash]="showNewPassword"></i>
                  </button>
                </div>
              </div>

              <div class="col-12 mb-3">
                <label for="confirmPassword" class="form-label">Confirm New Password</label>
                <div class="input-group">
                  <input
                    [type]="showConfirmPassword ? 'text' : 'password'"
                    class="form-control"
                    id="confirmPassword"
                    formControlName="confirmPassword"
                    [class.is-invalid]="pwf['confirmPassword'].invalid && pwf['confirmPassword'].touched">
                  <button class="btn btn-outline-secondary" type="button" (click)="showConfirmPassword = !showConfirmPassword">
                    <i class="bi" [class.bi-eye]="!showConfirmPassword" [class.bi-eye-slash]="showConfirmPassword"></i>
                  </button>
                </div>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-warning"
                  [disabled]="isSubmitting">
                  <span *ngIf="!isSubmitting">Change Password</span>
                  <span *ngIf="isSubmitting">
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Changing...
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

`, styles: ["/* projects/client/src/app/features/profile/profile.component.scss */\n.profile-container .card {\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.profile-container .card .card-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.profile-container .card .card-header h5 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.profile-container .profile-image {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #f8f9fa;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.profile-container .profile-stats {\n  display: flex;\n  justify-content: space-around;\n}\n.profile-container .profile-stats .stat-item {\n  text-align: center;\n}\n.profile-container .profile-stats .stat-item h5 {\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 0.25rem;\n}\n.profile-container .profile-stats .stat-item p {\n  margin-bottom: 0;\n}\n.profile-container .form-label {\n  font-weight: 500;\n  color: #495057;\n}\n.profile-container .btn {\n  padding: 0.75rem 1.5rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile.component.ts", lineNumber: 15 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-S4BNJ7XP.js.map
