import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3PINP6LG.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NotificationService,
  StorageService,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/features/settings/settings.component.ts
function SettingsComponent_option_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    \u0275\u0275property("value", lang_r1.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lang_r1.name, " ");
  }
}
function SettingsComponent_option_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tz_r2 = ctx.$implicit;
    \u0275\u0275property("value", tz_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tz_r2, " ");
  }
}
var SettingsComponent = class _SettingsComponent {
  storageService;
  notificationService;
  settings = {
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    weeklyNewsletter: true,
    productUpdates: true,
    language: "en",
    timezone: "UTC",
    theme: "light"
  };
  languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" }
  ];
  timezones = [
    "UTC",
    "America/New_York",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Asia/Tokyo"
  ];
  constructor(storageService, notificationService) {
    this.storageService = storageService;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.loadSettings();
  }
  loadSettings() {
    const savedSettings = this.storageService.getObject("app_settings");
    if (savedSettings) {
      this.settings = __spreadValues(__spreadValues({}, this.settings), savedSettings);
    }
  }
  saveSettings() {
    this.storageService.setObject("app_settings", this.settings);
    this.notificationService.success("Settings saved successfully!");
  }
  resetSettings() {
    this.settings = {
      emailNotifications: true,
      pushNotifications: false,
      smsNotifications: false,
      weeklyNewsletter: true,
      productUpdates: true,
      language: "en",
      timezone: "UTC",
      theme: "light"
    };
    this.storageService.removeItem("app_settings");
    this.notificationService.info("Settings reset to defaults");
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 112, vars: 10, consts: [[1, "settings-container"], [1, "row", "g-4"], [1, "col-12"], [1, "card"], [1, "card-header", "bg-transparent"], [1, "mb-0"], [1, "bi", "bi-bell", "me-2"], [1, "card-body"], [1, "row"], [1, "col-12", "mb-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "emailNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "emailNotifications", 1, "form-check-label"], [1, "text-muted"], ["type", "checkbox", "id", "pushNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "pushNotifications", 1, "form-check-label"], ["type", "checkbox", "id", "smsNotifications", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "smsNotifications", 1, "form-check-label"], ["type", "checkbox", "id", "weeklyNewsletter", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "weeklyNewsletter", 1, "form-check-label"], ["type", "checkbox", "id", "productUpdates", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "productUpdates", 1, "form-check-label"], [1, "col-12", "col-lg-6"], [1, "card", "h-100"], [1, "bi", "bi-gear", "me-2"], [1, "mb-3"], ["for", "language", 1, "form-label"], ["id", "language", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "timezone", 1, "form-label"], ["id", "timezone", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "theme", 1, "form-label"], ["id", "theme", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "light"], ["value", "dark"], ["value", "auto"], [1, "bi", "bi-shield-lock", "me-2"], [1, "d-grid", "gap-2"], [1, "btn", "btn-outline-primary", "text-start"], [1, "bi", "bi-key", "me-2"], [1, "bi", "bi-shield-check", "me-2"], [1, "bi", "bi-clock-history", "me-2"], [1, "btn", "btn-outline-danger", "text-start"], [1, "bi", "bi-trash", "me-2"], [1, "d-flex", "gap-2", "justify-content-end"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-counterclockwise", "me-2"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-check-circle", "me-2"], [3, "value"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275text(7, " Notification Preferences ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.emailNotifications, $event) || (ctx.settings.emailNotifications = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 12)(14, "strong");
      \u0275\u0275text(15, "Email Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "br");
      \u0275\u0275elementStart(17, "small", 13);
      \u0275\u0275text(18, "Receive notifications via email");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 9)(20, "div", 10)(21, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.pushNotifications, $event) || (ctx.settings.pushNotifications = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "label", 15)(23, "strong");
      \u0275\u0275text(24, "Push Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "br");
      \u0275\u0275elementStart(26, "small", 13);
      \u0275\u0275text(27, "Receive push notifications on your device");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 9)(29, "div", 10)(30, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.smsNotifications, $event) || (ctx.settings.smsNotifications = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "label", 17)(32, "strong");
      \u0275\u0275text(33, "SMS Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "br");
      \u0275\u0275elementStart(35, "small", 13);
      \u0275\u0275text(36, "Receive notifications via SMS");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.weeklyNewsletter, $event) || (ctx.settings.weeklyNewsletter = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "label", 19)(41, "strong");
      \u0275\u0275text(42, "Weekly Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "br");
      \u0275\u0275elementStart(44, "small", 13);
      \u0275\u0275text(45, "Receive weekly newsletter with updates");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 2)(47, "div", 10)(48, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.productUpdates, $event) || (ctx.settings.productUpdates = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "label", 21)(50, "strong");
      \u0275\u0275text(51, "Product Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "br");
      \u0275\u0275elementStart(53, "small", 13);
      \u0275\u0275text(54, "Get notified about new features and updates");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(55, "div", 22)(56, "div", 23)(57, "div", 4)(58, "h5", 5);
      \u0275\u0275element(59, "i", 24);
      \u0275\u0275text(60, " Preferences ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 7)(62, "div", 25)(63, "label", 26);
      \u0275\u0275text(64, "Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "select", 27);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_65_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.language, $event) || (ctx.settings.language = $event);
        return $event;
      });
      \u0275\u0275template(66, SettingsComponent_option_66_Template, 2, 2, "option", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 25)(68, "label", 29);
      \u0275\u0275text(69, "Timezone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.timezone, $event) || (ctx.settings.timezone = $event);
        return $event;
      });
      \u0275\u0275template(71, SettingsComponent_option_71_Template, 2, 2, "option", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 5)(73, "label", 31);
      \u0275\u0275text(74, "Theme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "select", 32);
      \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_select_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.settings.theme, $event) || (ctx.settings.theme = $event);
        return $event;
      });
      \u0275\u0275elementStart(76, "option", 33);
      \u0275\u0275text(77, "Light");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "option", 34);
      \u0275\u0275text(79, "Dark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "option", 35);
      \u0275\u0275text(81, "Auto");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(82, "div", 22)(83, "div", 23)(84, "div", 4)(85, "h5", 5);
      \u0275\u0275element(86, "i", 36);
      \u0275\u0275text(87, " Account Security ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 7)(89, "div", 37)(90, "button", 38);
      \u0275\u0275element(91, "i", 39);
      \u0275\u0275text(92, " Change Password ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 38);
      \u0275\u0275element(94, "i", 40);
      \u0275\u0275text(95, " Two-Factor Authentication ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "button", 38);
      \u0275\u0275element(97, "i", 41);
      \u0275\u0275text(98, " Login History ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "button", 42);
      \u0275\u0275element(100, "i", 43);
      \u0275\u0275text(101, " Delete Account ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(102, "div", 2)(103, "div", 3)(104, "div", 7)(105, "div", 44)(106, "button", 45);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_106_listener() {
        return ctx.resetSettings();
      });
      \u0275\u0275element(107, "i", 46);
      \u0275\u0275text(108, " Reset to Defaults ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "button", 47);
      \u0275\u0275listener("click", function SettingsComponent_Template_button_click_109_listener() {
        return ctx.saveSettings();
      });
      \u0275\u0275element(110, "i", 48);
      \u0275\u0275text(111, " Save Settings ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.emailNotifications);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.pushNotifications);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.smsNotifications);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.weeklyNewsletter);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.productUpdates);
      \u0275\u0275advance(17);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.language);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.languages);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.timezone);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.timezones);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.settings.theme);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.settings-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.settings-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.settings-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.settings-container[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding-left: 0.5rem;\n}\n.settings-container[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c3e50;\n}\n.settings-container[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.settings-container[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.settings-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.settings-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.settings-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.settings-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="settings-container">\n  <div class="row g-4">\n    <!-- Notifications -->\n    <div class="col-12">\n      <div class="card">\n        <div class="card-header bg-transparent">\n          <h5 class="mb-0">\n            <i class="bi bi-bell me-2"></i>\n            Notification Preferences\n          </h5>\n        </div>\n        <div class="card-body">\n          <div class="row">\n            <div class="col-12 mb-3">\n              <div class="form-check form-switch">\n                <input\n                  class="form-check-input"\n                  type="checkbox"\n                  id="emailNotifications"\n                  [(ngModel)]="settings.emailNotifications">\n                <label class="form-check-label" for="emailNotifications">\n                  <strong>Email Notifications</strong>\n                  <br>\n                  <small class="text-muted">Receive notifications via email</small>\n                </label>\n              </div>\n            </div>\n\n            <div class="col-12 mb-3">\n              <div class="form-check form-switch">\n                <input\n                  class="form-check-input"\n                  type="checkbox"\n                  id="pushNotifications"\n                  [(ngModel)]="settings.pushNotifications">\n                <label class="form-check-label" for="pushNotifications">\n                  <strong>Push Notifications</strong>\n                  <br>\n                  <small class="text-muted">Receive push notifications on your device</small>\n                </label>\n              </div>\n            </div>\n\n            <div class="col-12 mb-3">\n              <div class="form-check form-switch">\n                <input\n                  class="form-check-input"\n                  type="checkbox"\n                  id="smsNotifications"\n                  [(ngModel)]="settings.smsNotifications">\n                <label class="form-check-label" for="smsNotifications">\n                  <strong>SMS Notifications</strong>\n                  <br>\n                  <small class="text-muted">Receive notifications via SMS</small>\n                </label>\n              </div>\n            </div>\n\n            <div class="col-12 mb-3">\n              <div class="form-check form-switch">\n                <input\n                  class="form-check-input"\n                  type="checkbox"\n                  id="weeklyNewsletter"\n                  [(ngModel)]="settings.weeklyNewsletter">\n                <label class="form-check-label" for="weeklyNewsletter">\n                  <strong>Weekly Newsletter</strong>\n                  <br>\n                  <small class="text-muted">Receive weekly newsletter with updates</small>\n                </label>\n              </div>\n            </div>\n\n            <div class="col-12">\n              <div class="form-check form-switch">\n                <input\n                  class="form-check-input"\n                  type="checkbox"\n                  id="productUpdates"\n                  [(ngModel)]="settings.productUpdates">\n                <label class="form-check-label" for="productUpdates">\n                  <strong>Product Updates</strong>\n                  <br>\n                  <small class="text-muted">Get notified about new features and updates</small>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Preferences -->\n    <div class="col-12 col-lg-6">\n      <div class="card h-100">\n        <div class="card-header bg-transparent">\n          <h5 class="mb-0">\n            <i class="bi bi-gear me-2"></i>\n            Preferences\n          </h5>\n        </div>\n        <div class="card-body">\n          <div class="mb-3">\n            <label for="language" class="form-label">Language</label>\n            <select class="form-select" id="language" [(ngModel)]="settings.language">\n              <option *ngFor="let lang of languages" [value]="lang.code">\n                {{ lang.name }}\n              </option>\n            </select>\n          </div>\n\n          <div class="mb-3">\n            <label for="timezone" class="form-label">Timezone</label>\n            <select class="form-select" id="timezone" [(ngModel)]="settings.timezone">\n              <option *ngFor="let tz of timezones" [value]="tz">\n                {{ tz }}\n              </option>\n            </select>\n          </div>\n\n          <div class="mb-0">\n            <label for="theme" class="form-label">Theme</label>\n            <select class="form-select" id="theme" [(ngModel)]="settings.theme">\n              <option value="light">Light</option>\n              <option value="dark">Dark</option>\n              <option value="auto">Auto</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Account -->\n    <div class="col-12 col-lg-6">\n      <div class="card h-100">\n        <div class="card-header bg-transparent">\n          <h5 class="mb-0">\n            <i class="bi bi-shield-lock me-2"></i>\n            Account Security\n          </h5>\n        </div>\n        <div class="card-body">\n          <div class="d-grid gap-2">\n            <button class="btn btn-outline-primary text-start">\n              <i class="bi bi-key me-2"></i>\n              Change Password\n            </button>\n            <button class="btn btn-outline-primary text-start">\n              <i class="bi bi-shield-check me-2"></i>\n              Two-Factor Authentication\n            </button>\n            <button class="btn btn-outline-primary text-start">\n              <i class="bi bi-clock-history me-2"></i>\n              Login History\n            </button>\n            <button class="btn btn-outline-danger text-start">\n              <i class="bi bi-trash me-2"></i>\n              Delete Account\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Action Buttons -->\n    <div class="col-12">\n      <div class="card">\n        <div class="card-body">\n          <div class="d-flex gap-2 justify-content-end">\n            <button class="btn btn-outline-secondary" (click)="resetSettings()">\n              <i class="bi bi-arrow-counterclockwise me-2"></i>\n              Reset to Defaults\n            </button>\n            <button class="btn btn-primary" (click)="saveSettings()">\n              <i class="bi bi-check-circle me-2"></i>\n              Save Settings\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n', styles: ["/* projects/client/src/app/features/settings/settings.component.scss */\n.settings-container .card {\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.settings-container .card .card-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #e9ecef;\n}\n.settings-container .card .card-header h5 {\n  font-weight: 600;\n  color: #2c3e50;\n}\n.settings-container .form-check-label {\n  cursor: pointer;\n  padding-left: 0.5rem;\n}\n.settings-container .form-check-label strong {\n  color: #2c3e50;\n}\n.settings-container .form-check-input {\n  cursor: pointer;\n}\n.settings-container .form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.settings-container .form-label {\n  font-weight: 500;\n  color: #495057;\n}\n.settings-container .btn {\n  padding: 0.75rem 1rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.settings-container .btn:hover {\n  transform: translateY(-1px);\n}\n.settings-container .btn i {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], () => [{ type: StorageService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.component.ts", lineNumber: 14 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-AZX3ZE6P.js.map
