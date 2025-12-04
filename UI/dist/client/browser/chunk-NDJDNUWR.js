import {
  AuthService
} from "./chunk-EYPH3LHU.js";
import "./chunk-7V4CR2SO.js";
import {
  CommonModule,
  Component,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RRDEYC3S.js";

// projects/client/src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 11)(3, "div", 33)(4, "div")(5, "p", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275element(10, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 35)(12, "span", 36);
    \u0275\u0275element(13, "i", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 38);
    \u0275\u0275text(16, "vs last month");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(stat_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance();
    \u0275\u0275classMap("stat-icon bg-" + stat_r1.color + "-subtle");
    \u0275\u0275advance();
    \u0275\u0275classMap("bi " + stat_r1.icon + " text-" + stat_r1.color);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", stat_r1.change, " ");
  }
}
function DashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div");
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "h6", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 43);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("activity-icon bg-" + activity_r2.color + "-subtle");
    \u0275\u0275advance();
    \u0275\u0275classMap("bi " + activity_r2.icon + " text-" + activity_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r2.time);
  }
}
var DashboardComponent = class _DashboardComponent {
  authService;
  currentUser = null;
  stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: "bi-people",
      color: "primary",
      change: "+12%"
    },
    {
      title: "Revenue",
      value: "$45,678",
      icon: "bi-currency-dollar",
      color: "success",
      change: "+8%"
    },
    {
      title: "Orders",
      value: "567",
      icon: "bi-cart",
      color: "warning",
      change: "+23%"
    },
    {
      title: "Growth",
      value: "94.5%",
      icon: "bi-graph-up",
      color: "info",
      change: "+5%"
    }
  ];
  recentActivities = [
    {
      icon: "bi-person-plus",
      color: "success",
      title: "New user registered",
      description: "John Doe joined the platform",
      time: "5 minutes ago"
    },
    {
      icon: "bi-cart-check",
      color: "primary",
      title: "New order placed",
      description: "Order #12345 has been placed",
      time: "1 hour ago"
    },
    {
      icon: "bi-credit-card",
      color: "warning",
      title: "Payment received",
      description: "Payment of $299 received",
      time: "2 hours ago"
    },
    {
      icon: "bi-envelope",
      color: "info",
      title: "New message",
      description: "You have 3 unread messages",
      time: "3 hours ago"
    }
  ];
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 51, vars: 3, consts: [[1, "dashboard-container"], [1, "welcome-section", "mb-4"], [1, "mb-2"], [1, "text-muted", "mb-0"], [1, "row", "g-4", "mb-4"], ["class", "col-12 col-sm-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "row", "g-4"], [1, "col-12", "col-lg-8"], [1, "card"], [1, "card-header", "bg-transparent"], [1, "mb-0"], [1, "card-body"], [1, "chart-placeholder"], [1, "bi", "bi-bar-chart", "fs-1", "text-muted"], [1, "text-muted", "mt-3"], [1, "col-12", "col-lg-4"], [1, "card-body", "p-0"], [1, "activity-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "row", "g-4", "mt-2"], [1, "col-12"], [1, "row", "g-3"], [1, "col-6", "col-md-3"], [1, "btn", "btn-outline-primary", "w-100"], [1, "bi", "bi-plus-circle", "me-2"], [1, "btn", "btn-outline-success", "w-100"], [1, "bi", "bi-file-earmark", "me-2"], [1, "btn", "btn-outline-warning", "w-100"], [1, "bi", "bi-gear", "me-2"], [1, "btn", "btn-outline-info", "w-100"], [1, "bi", "bi-question-circle", "me-2"], [1, "col-12", "col-sm-6", "col-lg-3"], [1, "card", "stat-card", "h-100"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "text-muted", "mb-1", "small"], [1, "d-flex", "align-items-center"], [1, "badge", "bg-success-subtle", "text-success", "small"], [1, "bi", "bi-arrow-up", "me-1"], [1, "text-muted", "small", "ms-2"], [1, "activity-item"], [1, "activity-content"], [1, "mb-1"], [1, "text-muted", "small", "mb-1"], [1, "text-muted", "small"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Here's what's happening with your application today.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275template(7, DashboardComponent_div_7_Template, 17, 7, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "h5", 10);
      \u0275\u0275text(13, "Revenue Overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementStart(17, "p", 14);
      \u0275\u0275text(18, " Chart component can be integrated here using libraries like ng2-charts or ngx-charts ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "div", 15)(20, "div", 8)(21, "div", 9)(22, "h5", 10);
      \u0275\u0275text(23, "Recent Activities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
      \u0275\u0275template(26, DashboardComponent_div_26_Template, 10, 7, "div", 18);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "div", 8)(30, "div", 9)(31, "h5", 10);
      \u0275\u0275text(32, "Quick Actions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 11)(34, "div", 21)(35, "div", 22)(36, "button", 23);
      \u0275\u0275element(37, "i", 24);
      \u0275\u0275text(38, " New Item ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 22)(40, "button", 25);
      \u0275\u0275element(41, "i", 26);
      \u0275\u0275text(42, " Generate Report ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 22)(44, "button", 27);
      \u0275\u0275element(45, "i", 28);
      \u0275\u0275text(46, " Settings ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 22)(48, "button", 29);
      \u0275\u0275element(49, "i", 30);
      \u0275\u0275text(50, " Help ");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Welcome back, ", (ctx.currentUser == null ? null : ctx.currentUser.name) || "User", "! \u{1F44B}");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.recentActivities);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.dashboard-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #f5f5f5;\n  min-height: 100vh;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin-bottom: 2rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 50px;\n  padding: 0.5rem 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  gap: 1rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1.2rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.5rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 0.5rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.dashboard-container[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover {\n  background: #e55a2b;\n  transform: translateY(-2px);\n}\n.dashboard-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6c757d;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%]   .menu-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  min-height: 200px;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card.unavailable[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 45%;\n  background:\n    linear-gradient(\n      135deg,\n      #ffd700 0%,\n      #ffed4e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  color: white;\n  text-align: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .deal-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  backdrop-filter: blur(5px);\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .deal-badge[_ngcontent-%COMP%]   .deal-number[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 0.25rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .deal-badge[_ngcontent-%COMP%]   .deal-info[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   .availability-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   .availability-badge.available[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-image[_ngcontent-%COMP%]   .availability-badge.unavailable[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-header[_ngcontent-%COMP%]   .menu-item-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n  flex: 1;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-header[_ngcontent-%COMP%]   .favorite-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0.25rem;\n  transition: all 0.2s ease;\n  margin-left: 0.5rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-header[_ngcontent-%COMP%]   .favorite-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n  transform: scale(1.1);\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-header[_ngcontent-%COMP%]   .favorite-btn.active[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-item-description[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n  flex: 1;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-item-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-item-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-actions[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%] {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  flex: 1;\n  transition: all 0.2s ease;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-actions[_ngcontent-%COMP%]   .price-btn[_ngcontent-%COMP%]:disabled {\n  background: #adb5bd;\n  cursor: not-allowed;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  flex: 1;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e55a2b;\n  transform: translateY(-2px);\n}\n.dashboard-container[_ngcontent-%COMP%]   .menu-card[_ngcontent-%COMP%]   .menu-card-content[_ngcontent-%COMP%]   .menu-card-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:disabled {\n  background: #adb5bd;\n  cursor: not-allowed;\n}\n.dashboard-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6c757d;\n}\n.dashboard-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #2c3e50;\n}\n.dashboard-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 3rem;\n}\n.dashboard-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  color: #495057;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dashboard-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover:not([aria-disabled=true]) {\n  background: #f8f9fa;\n  border-color: #ff6b35;\n  color: #ff6b35;\n}\n.dashboard-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #ff6b35;\n  border-color: #ff6b35;\n  color: white;\n}\n.dashboard-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dashboard-container[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.dashboard-container[_ngcontent-%COMP%]   .scroll-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 50px;\n  height: 50px;\n  background: #ff6b35;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-container[_ngcontent-%COMP%]   .scroll-to-top[_ngcontent-%COMP%]:hover {\n  background: #e55a2b;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule], template: `<div class="dashboard-container">
  <!-- Welcome Section -->
  <div class="welcome-section mb-4">
    <h2 class="mb-2">Welcome back, {{ currentUser?.name || 'User' }}! \u{1F44B}</h2>
    <p class="text-muted mb-0">Here's what's happening with your application today.</p>
  </div>

  <!-- Stats Cards -->
  <div class="row g-4 mb-4">
    <div class="col-12 col-sm-6 col-lg-3" *ngFor="let stat of stats">
      <div class="card stat-card h-100">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <div>
              <p class="text-muted mb-1 small">{{ stat.title }}</p>
              <h3 class="mb-0">{{ stat.value }}</h3>
            </div>
            <div [class]="'stat-icon bg-' + stat.color + '-subtle'">
              <i [class]="'bi ' + stat.icon + ' text-' + stat.color"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <span class="badge bg-success-subtle text-success small">
              <i class="bi bi-arrow-up me-1"></i>
              {{ stat.change }}
            </span>
            <span class="text-muted small ms-2">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row g-4">
    <!-- Chart Section (Placeholder) -->
    <div class="col-12 col-lg-8">
      <div class="card">
        <div class="card-header bg-transparent">
          <h5 class="mb-0">Revenue Overview</h5>
        </div>
        <div class="card-body">
          <div class="chart-placeholder">
            <i class="bi bi-bar-chart fs-1 text-muted"></i>
            <p class="text-muted mt-3">
              Chart component can be integrated here using libraries like ng2-charts or ngx-charts
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="col-12 col-lg-4">
      <div class="card">
        <div class="card-header bg-transparent">
          <h5 class="mb-0">Recent Activities</h5>
        </div>
        <div class="card-body p-0">
          <div class="activity-list">
            <div class="activity-item" *ngFor="let activity of recentActivities">
              <div [class]="'activity-icon bg-' + activity.color + '-subtle'">
                <i [class]="'bi ' + activity.icon + ' text-' + activity.color"></i>
              </div>
              <div class="activity-content">
                <h6 class="mb-1">{{ activity.title }}</h6>
                <p class="text-muted small mb-1">{{ activity.description }}</p>
                <span class="text-muted small">{{ activity.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="row g-4 mt-2">
    <div class="col-12">
      <div class="card">
        <div class="card-header bg-transparent">
          <h5 class="mb-0">Quick Actions</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-6 col-md-3">
              <button class="btn btn-outline-primary w-100">
                <i class="bi bi-plus-circle me-2"></i>
                New Item
              </button>
            </div>
            <div class="col-6 col-md-3">
              <button class="btn btn-outline-success w-100">
                <i class="bi bi-file-earmark me-2"></i>
                Generate Report
              </button>
            </div>
            <div class="col-6 col-md-3">
              <button class="btn btn-outline-warning w-100">
                <i class="bi bi-gear me-2"></i>
                Settings
              </button>
            </div>
            <div class="col-6 col-md-3">
              <button class="btn btn-outline-info w-100">
                <i class="bi bi-question-circle me-2"></i>
                Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

`, styles: ["/* projects/client/src/app/features/dashboard/dashboard.component.scss */\n.dashboard-container {\n  padding: 2rem;\n  background-color: #f5f5f5;\n  min-height: 100vh;\n}\n.dashboard-container .header-section {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.dashboard-container .header-section .page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.dashboard-container .header-section .page-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin-bottom: 2rem;\n}\n.dashboard-container .header-section .search-container {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.dashboard-container .header-section .search-container .search-box {\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 50px;\n  padding: 0.5rem 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  gap: 1rem;\n}\n.dashboard-container .header-section .search-container .search-box i {\n  color: #6c757d;\n  font-size: 1.2rem;\n}\n.dashboard-container .header-section .search-container .search-box .search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.5rem;\n}\n.dashboard-container .header-section .search-container .search-box .search-input::placeholder {\n  color: #adb5bd;\n}\n.dashboard-container .header-section .search-container .search-box .search-btn {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 0.5rem 1.5rem;\n  border-radius: 25px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.dashboard-container .header-section .search-container .search-box .search-btn:hover {\n  background: #e55a2b;\n  transform: translateY(-2px);\n}\n.dashboard-container .loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6c757d;\n}\n.dashboard-container .menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n@media (max-width: 768px) {\n  .dashboard-container .menu-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n.dashboard-container .menu-card {\n  display: flex;\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  min-height: 200px;\n}\n.dashboard-container .menu-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.dashboard-container .menu-card.unavailable {\n  opacity: 0.7;\n}\n.dashboard-container .menu-card .menu-card-image {\n  position: relative;\n  width: 45%;\n  background:\n    linear-gradient(\n      135deg,\n      #ffd700 0%,\n      #ffed4e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.dashboard-container .menu-card .menu-card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.dashboard-container .menu-card .menu-card-image .image-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  color: white;\n  text-align: center;\n}\n.dashboard-container .menu-card .menu-card-image .image-overlay .deal-badge {\n  background: rgba(0, 0, 0, 0.3);\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  backdrop-filter: blur(5px);\n}\n.dashboard-container .menu-card .menu-card-image .image-overlay .deal-badge .deal-number {\n  display: block;\n  font-weight: 700;\n  font-size: 1.1rem;\n  margin-bottom: 0.25rem;\n}\n.dashboard-container .menu-card .menu-card-image .image-overlay .deal-badge .deal-info {\n  display: block;\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n.dashboard-container .menu-card .menu-card-image .availability-badge {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.dashboard-container .menu-card .menu-card-image .availability-badge.available {\n  background: #28a745;\n  color: white;\n}\n.dashboard-container .menu-card .menu-card-image .availability-badge.unavailable {\n  background: #dc3545;\n  color: white;\n}\n.dashboard-container .menu-card .menu-card-content {\n  flex: 1;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-header .menu-item-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n  flex: 1;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-header .favorite-btn {\n  background: none;\n  border: none;\n  color: #6c757d;\n  font-size: 1.25rem;\n  cursor: pointer;\n  padding: 0.25rem;\n  transition: all 0.2s ease;\n  margin-left: 0.5rem;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-header .favorite-btn:hover {\n  color: #dc3545;\n  transform: scale(1.1);\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-header .favorite-btn.active {\n  color: #dc3545;\n}\n.dashboard-container .menu-card .menu-card-content .menu-item-description {\n  color: #6c757d;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n  flex: 1;\n}\n.dashboard-container .menu-card .menu-card-content .menu-item-meta {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.dashboard-container .menu-card .menu-card-content .menu-item-meta span {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.dashboard-container .menu-card .menu-card-content .menu-item-meta span i {\n  font-size: 0.9rem;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-actions {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-actions .price-btn {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  flex: 1;\n  transition: all 0.2s ease;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-actions .price-btn:disabled {\n  background: #adb5bd;\n  cursor: not-allowed;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-actions .add-to-cart-btn {\n  background: #ff6b35;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  flex: 1;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-actions .add-to-cart-btn:hover:not(:disabled) {\n  background: #e55a2b;\n  transform: translateY(-2px);\n}\n.dashboard-container .menu-card .menu-card-content .menu-card-actions .add-to-cart-btn:disabled {\n  background: #adb5bd;\n  cursor: not-allowed;\n}\n.dashboard-container .empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6c757d;\n}\n.dashboard-container .empty-state h3 {\n  margin-top: 1rem;\n  color: #2c3e50;\n}\n.dashboard-container .pagination-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 3rem;\n}\n.dashboard-container .pagination-container .pagination {\n  display: flex;\n  gap: 0.5rem;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.dashboard-container .pagination-container .pagination .page-item .page-link {\n  display: block;\n  padding: 0.5rem 1rem;\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  color: #495057;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dashboard-container .pagination-container .pagination .page-item .page-link:hover:not([aria-disabled=true]) {\n  background: #f8f9fa;\n  border-color: #ff6b35;\n  color: #ff6b35;\n}\n.dashboard-container .pagination-container .pagination .page-item.active .page-link {\n  background: #ff6b35;\n  border-color: #ff6b35;\n  color: white;\n}\n.dashboard-container .pagination-container .pagination .page-item.disabled .page-link {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dashboard-container .pagination-container .pagination-info {\n  color: #6c757d;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.dashboard-container .scroll-to-top {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 50px;\n  height: 50px;\n  background: #ff6b35;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  font-size: 1.5rem;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-container .scroll-to-top:hover {\n  background: #e55a2b;\n  transform: translateY(-4px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-NDJDNUWR.js.map
