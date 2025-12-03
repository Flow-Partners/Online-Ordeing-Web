import {
  CategoryService
} from "./chunk-Q72EET2Q.js";
import {
  CartService
} from "./chunk-VBB7B4UY.js";
import {
  AuthService
} from "./chunk-EYPH3LHU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3PINP6LG.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  environment,
  provideRouter
} from "./chunk-7V4CR2SO.js";
import {
  ANIMATION_MODULE_TYPE,
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  AsyncPipe,
  BehaviorSubject,
  BrowserModule,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  DomRendererFactory2,
  ElementRef,
  EventEmitter,
  HostListener,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  NoopAnimationPlayer,
  NotificationService,
  Output,
  Pipe,
  RendererFactory2,
  RuntimeError,
  StorageService,
  Subject,
  __objRest,
  __spreadValues,
  bootstrapApplication,
  catchError,
  concat,
  concatMap,
  defer,
  filter,
  finalize,
  forkJoin,
  importProvidersFrom,
  inject,
  isObservable,
  map,
  of,
  performanceMarkFeature,
  provideHttpClient,
  provideToastr,
  provideZoneChangeDetection,
  sequence,
  setClassMetadata,
  shareReplay,
  style,
  switchMap,
  take,
  takeUntil,
  throwError,
  withInterceptors,
  ɵPRE_STYLE,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RRDEYC3S.js";

// node_modules/@angular/animations/fesm2022/util-D9FfmVnv.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// projects/client/src/app/shared/directives/click-outside.directive.ts
var ClickOutsideDirective = class _ClickOutsideDirective {
  elementRef;
  clickOutside = new EventEmitter();
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
  static \u0275fac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClickOutsideDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ClickOutsideDirective, selectors: [["", "appClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, \u0275\u0275resolveDocument);
    }
  }, outputs: { clickOutside: "clickOutside" } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[appClickOutside]",
      standalone: true
    }]
  }], () => [{ type: ElementRef }], { clickOutside: [{
    type: Output
  }], onClick: [{
    type: HostListener,
    args: ["document:click", ["$event.target"]]
  }] });
})();

// projects/client/src/app/layout/components/top-navbar/top-navbar.component.ts
function TopNavbarComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartItemCount);
  }
}
function TopNavbarComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.cartItemCount, " items");
  }
}
function TopNavbarComponent_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "img", 55);
    \u0275\u0275listener("error", function TopNavbarComponent_div_41_div_1_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 56)(4, "div", 57)(5, "h6", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 60)(10, "span", 61);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 62);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 63)(15, "div", 64)(16, "button", 65);
    \u0275\u0275listener("click", function TopNavbarComponent_div_41_div_1_Template_button_click_16_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateQuantity(item_r3, -1));
    });
    \u0275\u0275element(17, "i", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 67);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 68);
    \u0275\u0275listener("click", function TopNavbarComponent_div_41_div_1_Template_button_click_20_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateQuantity(item_r3, 1));
    });
    \u0275\u0275element(21, "i", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 70);
    \u0275\u0275listener("click", function TopNavbarComponent_div_41_div_1_Template_button_click_22_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFromCart(item_r3));
    });
    \u0275\u0275element(23, "i", 71);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getImageUrl(item_r3.menuItemImage), \u0275\u0275sanitizeUrl)("alt", item_r3.menuItemName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.menuItemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r3.portionName, " - ", item_r3.portionDetailName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(item_r3.price));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", item_r3.quantity, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", item_r3.quantity <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.quantity);
  }
}
function TopNavbarComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, TopNavbarComponent_div_41_div_1_Template, 24, 9, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.cartItems);
  }
}
function TopNavbarComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275elementStart(2, "p", 74);
    \u0275\u0275text(3, "Your cart is empty");
    \u0275\u0275elementEnd()();
  }
}
function TopNavbarComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 77)(3, "span");
    \u0275\u0275text(4, "Subtotal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 78);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77)(8, "span");
    \u0275\u0275text(9, "Delivery Charges:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 78);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 79)(13, "span")(14, "strong");
    \u0275\u0275text(15, "Total:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 78)(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 80)(20, "button", 81);
    \u0275\u0275listener("click", function TopNavbarComponent_div_43_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDropdowns());
    });
    \u0275\u0275text(21, " Proceed to Checkout ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.getSubtotal()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.getDeliveryCharges()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(ctx_r0.getTotal()));
  }
}
function TopNavbarComponent_a_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 82);
    \u0275\u0275text(1, " Sign In / Register ");
    \u0275\u0275elementEnd();
  }
}
function TopNavbarComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "button", 84);
    \u0275\u0275listener("click", function TopNavbarComponent_div_46_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleUserMenu());
    });
    \u0275\u0275element(2, "img", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 86)(4, "li")(5, "h6", 87);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li");
    \u0275\u0275element(8, "hr", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "li")(10, "a", 89);
    \u0275\u0275listener("click", function TopNavbarComponent_div_46_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDropdowns());
    });
    \u0275\u0275element(11, "i", 90);
    \u0275\u0275text(12, " Profile ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "a", 91);
    \u0275\u0275listener("click", function TopNavbarComponent_div_46_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDropdowns());
    });
    \u0275\u0275element(15, "i", 92);
    \u0275\u0275text(16, " Settings ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275element(18, "hr", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "button", 93);
    \u0275\u0275listener("click", function TopNavbarComponent_div_46_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLogout());
    });
    \u0275\u0275element(21, "i", 94);
    \u0275\u0275text(22, " Logout ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser.avatar) || "https://ui-avatars.com/api/?name=" + ((ctx_r0.currentUser == null ? null : ctx_r0.currentUser.name) || "User"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r0.isUserMenuOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.currentUser == null ? null : ctx_r0.currentUser.email);
  }
}
function TopNavbarComponent_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function TopNavbarComponent_button_52_Template_button_click_0_listener() {
      const category_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectCategory(category_r7.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.selectedCategoryId === category_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r7.name, " ");
  }
}
var TopNavbarComponent = class _TopNavbarComponent {
  authService;
  cartService;
  categoryService;
  toggleSidebar = new EventEmitter();
  categorySelected = new EventEmitter();
  currentUser = null;
  isUserMenuOpen = false;
  isCartOpen = false;
  isLocationDropdownOpen = false;
  cartItems = [];
  cartItemCount = 0;
  cartTotal = 0;
  searchTerm = "";
  // Categories for header tabs
  categories = [];
  selectedCategoryId = null;
  // Location info
  deliveryAddress = "Ahmed Avenue, Lahore";
  estimatedTime = "~ eta 45 min";
  destroy$ = new Subject();
  constructor(authService, cartService, categoryService) {
    this.authService = authService;
    this.cartService = cartService;
    this.categoryService = categoryService;
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }
  ngOnInit() {
    this.cartService.cartItems$.pipe(takeUntil(this.destroy$)).subscribe((items) => {
      this.cartItems = items;
      this.cartItemCount = this.cartService.cartItemCount;
      this.cartTotal = this.cartService.cartTotal;
    });
    this.loadCategories();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCategories() {
    this.categoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const data = response.data;
          this.categories = (data.items || data.Items || []).filter((cat) => cat.isVisible);
          this.categories.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        }
      },
      error: (error) => {
        console.error("Error loading categories:", error);
      }
    });
  }
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isCartOpen = false;
    this.isLocationDropdownOpen = false;
  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    this.isUserMenuOpen = false;
    this.isLocationDropdownOpen = false;
  }
  toggleLocationDropdown() {
    this.isLocationDropdownOpen = !this.isLocationDropdownOpen;
    this.isUserMenuOpen = false;
    this.isCartOpen = false;
  }
  selectCategory(categoryId) {
    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
  }
  onSearch() {
    console.log("Searching for:", this.searchTerm);
  }
  onLogout() {
    this.authService.logout();
  }
  removeFromCart(item) {
    this.cartService.removeFromCart(item.menuItemId, item.portionId, item.portionDetailId);
  }
  updateQuantity(item, change) {
    const newQuantity = item.quantity + change;
    this.cartService.updateQuantity(item.menuItemId, item.portionId, item.portionDetailId, newQuantity);
  }
  clearCart() {
    this.cartService.clearCart();
  }
  closeDropdowns() {
    this.isUserMenuOpen = false;
    this.isCartOpen = false;
    this.isLocationDropdownOpen = false;
  }
  formatPrice(price) {
    return `Rs. ${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  getDeliveryCharges() {
    return 200;
  }
  getSubtotal() {
    return this.cartTotal;
  }
  getTotal() {
    return this.cartTotal + this.getDeliveryCharges();
  }
  getImageUrl(imageUrl) {
    if (!imageUrl) {
      return "/assets/i18n/placeholder-food.png";
    }
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      return imageUrl;
    }
    const apiUrl = "http://localhost:5071";
    return `${apiUrl}${imageUrl}`;
  }
  onImageError(event) {
    const img = event.target;
    if (img) {
      img.src = "/assets/i18n/placeholder-food.png";
    }
  }
  static \u0275fac = function TopNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopNavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(CategoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopNavbarComponent, selectors: [["app-top-navbar"]], outputs: { toggleSidebar: "toggleSidebar", categorySelected: "categorySelected" }, decls: 60, vars: 17, consts: [[1, "main-header"], [1, "header-top-section"], [1, "header-container"], [1, "header-top-content"], [1, "header-left-group"], [1, "header-logo"], ["routerLink", "/menu", 1, "logo-link"], [1, "logo-container"], [1, "logo-circles"], [1, "circle"], [1, "logo-text"], [1, "logo-title"], [1, "logo-subtitle"], [1, "bi", "bi-mortarboard-fill", "logo-icon"], [1, "header-location", 3, "appClickOutside"], [1, "location-btn", 3, "click"], [1, "bi", "bi-geo-alt-fill", "me-2"], [1, "location-text"], [1, "location-label"], [1, "bi", "bi-chevron-down"], [1, "location-address"], [1, "location-dropdown"], [1, "dropdown-content"], [1, "text-muted"], [1, "header-right"], [1, "cart-wrapper", 3, "appClickOutside"], ["type", "button", 1, "cart-btn", 3, "click"], [1, "bi", "bi-bag"], ["class", "cart-badge", 4, "ngIf"], [1, "cart-dropdown"], [1, "cart-header"], [1, "mb-0"], ["class", "badge bg-primary", 4, "ngIf"], ["class", "cart-items", 4, "ngIf"], ["class", "empty-cart text-center py-4", 4, "ngIf"], ["class", "cart-footer", 4, "ngIf"], [1, "auth-wrapper", 3, "appClickOutside"], ["routerLink", "/auth/login", "class", "signin-btn", 4, "ngIf"], ["class", "profile-menu", 4, "ngIf"], [1, "header-categories-section"], [1, "category-tabs-container"], ["type", "button", 1, "category-tab", 3, "click"], ["class", "category-tab", "type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "category-arrow"], [1, "bi", "bi-chevron-right"], [1, "header-search-section"], [1, "search-container"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Search for Kabab St", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "cart-badge"], [1, "badge", "bg-primary"], [1, "cart-items"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "cart-item-image"], [3, "error", "src", "alt"], [1, "cart-item-content"], [1, "cart-item-info"], [1, "cart-item-name"], [1, "cart-item-details", "text-muted", "small", "mb-2"], [1, "cart-item-price-section"], [1, "price"], [1, "quantity-indicator"], [1, "cart-item-actions"], [1, "quantity-controls"], [1, "btn", "btn-sm", "quantity-btn", 3, "click", "disabled"], [1, "bi", "bi-dash"], [1, "quantity"], [1, "btn", "btn-sm", "quantity-btn", 3, "click"], [1, "bi", "bi-plus"], ["title", "Remove", 1, "btn", "btn-link", "text-danger", "p-0", "remove-btn", 3, "click"], [1, "bi", "bi-x-lg"], [1, "empty-cart", "text-center", "py-4"], [1, "bi", "bi-cart-x", "fs-1", "text-muted"], [1, "text-muted", "mb-0", "mt-2"], [1, "cart-footer"], [1, "cart-summary"], [1, "summary-row"], [1, "summary-value"], [1, "summary-row", "total-row"], [1, "cart-actions"], ["routerLink", "/checkout", 1, "btn", "btn-primary", "w-100", "checkout-btn", 3, "click"], ["routerLink", "/auth/login", 1, "signin-btn"], [1, "profile-menu"], ["type", "button", 1, "profile-btn", 3, "click"], ["alt", "User Avatar", 1, "profile-avatar", 3, "src"], [1, "user-dropdown"], [1, "dropdown-header"], [1, "dropdown-divider"], ["routerLink", "/profile", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-person", "me-2"], ["routerLink", "/settings", 1, "dropdown-item", 3, "click"], [1, "bi", "bi-gear", "me-2"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "bi", "bi-box-arrow-right", "me-2"]], template: function TopNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6)(7, "div", 7)(8, "div", 8);
      \u0275\u0275element(9, "span", 9)(10, "span", 9)(11, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "h1", 11);
      \u0275\u0275text(14, "M21");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "KITCHEN");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275listener("appClickOutside", function TopNavbarComponent_Template_div_appClickOutside_18_listener() {
        return ctx.closeDropdowns();
      });
      \u0275\u0275elementStart(19, "button", 15);
      \u0275\u0275listener("click", function TopNavbarComponent_Template_button_click_19_listener() {
        return ctx.toggleLocationDropdown();
      });
      \u0275\u0275element(20, "i", 16);
      \u0275\u0275elementStart(21, "div", 17)(22, "span", 18);
      \u0275\u0275text(23, "Deliver to ");
      \u0275\u0275element(24, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 20);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 21)(28, "div", 22)(29, "p", 23);
      \u0275\u0275text(30, "Change delivery location");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 24)(32, "div", 25);
      \u0275\u0275listener("appClickOutside", function TopNavbarComponent_Template_div_appClickOutside_32_listener() {
        return ctx.closeDropdowns();
      });
      \u0275\u0275elementStart(33, "button", 26);
      \u0275\u0275listener("click", function TopNavbarComponent_Template_button_click_33_listener() {
        return ctx.toggleCart();
      });
      \u0275\u0275element(34, "i", 27);
      \u0275\u0275template(35, TopNavbarComponent_span_35_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 29)(37, "div", 30)(38, "h6", 31);
      \u0275\u0275text(39, "Shopping Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, TopNavbarComponent_span_40_Template, 2, 1, "span", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, TopNavbarComponent_div_41_Template, 2, 1, "div", 33)(42, TopNavbarComponent_div_42_Template, 4, 0, "div", 34)(43, TopNavbarComponent_div_43_Template, 22, 3, "div", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 36);
      \u0275\u0275listener("appClickOutside", function TopNavbarComponent_Template_div_appClickOutside_44_listener() {
        return ctx.closeDropdowns();
      });
      \u0275\u0275template(45, TopNavbarComponent_a_45_Template, 2, 0, "a", 37)(46, TopNavbarComponent_div_46_Template, 23, 4, "div", 38);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(47, "div", 39)(48, "div", 2)(49, "div", 40)(50, "button", 41);
      \u0275\u0275listener("click", function TopNavbarComponent_Template_button_click_50_listener() {
        return ctx.selectCategory(null);
      });
      \u0275\u0275text(51, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, TopNavbarComponent_button_52_Template, 2, 3, "button", 42);
      \u0275\u0275elementStart(53, "div", 43);
      \u0275\u0275element(54, "i", 44);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(55, "div", 45)(56, "div", 2)(57, "div", 46);
      \u0275\u0275element(58, "i", 47);
      \u0275\u0275elementStart(59, "input", 48);
      \u0275\u0275twoWayListener("ngModelChange", function TopNavbarComponent_Template_input_ngModelChange_59_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function TopNavbarComponent_Template_input_keyup_enter_59_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275textInterpolate2("", ctx.deliveryAddress, " ", ctx.estimatedTime, "");
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.isLocationDropdownOpen);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.cartItemCount > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.isCartOpen);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.cartItemCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartItems.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartItems.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.authService.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.authService.isAuthenticated);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.selectedCategoryId === null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ClickOutsideDirective], styles: ['\n\n.main-header[_ngcontent-%COMP%] {\n  background-color: #000000;\n  color: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  width: 100%;\n}\n.main-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n@media (max-width: 768px) {\n  .main-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .main-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    padding: 0 0.25rem;\n  }\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%] {\n  background-color: #000000;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #333333;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-top-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  flex-wrap: nowrap;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-left-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  flex-shrink: 0;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  min-width: 180px;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: block;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-circles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  align-items: center;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: #ffd700;\n  border-radius: 50%;\n  display: block;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #ffd700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-family: "Arial Black", sans-serif;\n  line-height: 1;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #ffffff;\n  margin: 0;\n  letter-spacing: 1px;\n  font-weight: 300;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #ffd700;\n  margin-left: 0.5rem;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  min-width: 200px;\n  position: relative;\n  margin-left: 0;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]:hover {\n  color: #ffd700;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #ffffff;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]   .location-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 0.5rem;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]   .location-text[_ngcontent-%COMP%]   .location-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]   .location-text[_ngcontent-%COMP%]   .location-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]   .location-text[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #cccccc;\n  margin-top: 0.25rem;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: #1a1a1a;\n  border: 1px solid #333333;\n  border-radius: 4px;\n  padding: 1rem;\n  min-width: 300px;\n  margin-top: 0.5rem;\n  display: none;\n  z-index: 1050;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-dropdown.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .cart-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .cart-wrapper[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #ffd700;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s ease;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .cart-wrapper[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%]:hover {\n  color: #ffed4e;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .cart-wrapper[_ngcontent-%COMP%]   .cart-btn[_ngcontent-%COMP%]   .cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #ff6b35;\n  color: #ffffff;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .signin-btn[_ngcontent-%COMP%] {\n  background-color: #8B4513;\n  color: #ffffff;\n  padding: 0.5rem 1.25rem;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .signin-btn[_ngcontent-%COMP%]:hover {\n  background-color: #a0522d;\n  color: #ffffff;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 50%;\n  overflow: hidden;\n  transition: transform 0.2s ease;\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #ffd700;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%] {\n  background-color: #000000;\n  padding: 0;\n  border-bottom: 1px solid #333333;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  padding: 0.75rem 0;\n  gap: 0;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]   .category-tab[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  padding: 0.5rem 1.25rem;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  font-size: 0.95rem;\n  color: #ffffff;\n  flex-shrink: 0;\n  min-width: fit-content;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]   .category-tab[_ngcontent-%COMP%]:hover {\n  color: #ffd700;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]   .category-tab.active[_ngcontent-%COMP%] {\n  color: #ffd700;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]   .category-tab.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 1.25rem;\n  right: 1.25rem;\n  height: 2px;\n  background: #ffd700;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]   .category-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.5rem;\n  color: #999999;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]   .category-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 1.5rem 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n.main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  padding: 0;\n}\n.main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1.5rem;\n  color: #999999;\n  font-size: 1.2rem;\n  z-index: 1;\n}\n.main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #cccccc;\n  color: #333333;\n  padding: 0.75rem 0.5rem 0.75rem 2.5rem;\n  font-size: 1.1rem;\n  outline: none;\n  transition: border-color 0.2s ease;\n}\n.main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: #999999;\n}\n.main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #ffd700;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #ffffff;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 380px;\n  max-width: 420px;\n  max-height: 80vh;\n  overflow-y: auto;\n  padding: 0;\n  margin-top: 0.5rem;\n  display: none;\n  z-index: 1050;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  background-color: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.35rem 0.65rem;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-items[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 0.75rem 0;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background-color 0.2s;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #f8f9fa;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 0;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-info[_ngcontent-%COMP%]   .cart-item-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #2c3e50;\n  line-height: 1.3;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-info[_ngcontent-%COMP%]   .cart-item-details[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-info[_ngcontent-%COMP%]   .cart-item-price-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-info[_ngcontent-%COMP%]   .cart-item-price-section[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #ff6b35;\n  font-size: 1rem;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-info[_ngcontent-%COMP%]   .cart-item-price-section[_ngcontent-%COMP%]   .quantity-indicator[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  padding: 0.125rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.125rem;\n  background-color: #fff;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.25rem 0.5rem;\n  min-width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: #495057;\n  line-height: 1;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f8f9fa;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  min-width: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #2c3e50;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  min-width: auto;\n  height: auto;\n  color: #dc3545;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item-actions[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%] {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .empty-cart[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #adb5bd;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n  border-top: 1px solid #e9ecef;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  font-size: 0.9rem;\n  color: #495057;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-row.total-row[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  margin-top: 0.5rem;\n  border-top: 1px solid #dee2e6;\n  font-size: 1.05rem;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-row.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-row.total-row[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #ff6b35;\n  font-size: 1.15rem;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .checkout-btn[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  background-color: #ff6b35;\n  border-color: #ff6b35;\n  color: #fff;\n  transition: all 0.2s;\n  width: 100%;\n}\n.main-header[_ngcontent-%COMP%]   .cart-dropdown[_ngcontent-%COMP%]   .cart-footer[_ngcontent-%COMP%]   .checkout-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e55a2b;\n  border-color: #e55a2b;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #ffffff;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  padding: 0.5rem 0;\n  margin-top: 0.5rem;\n  list-style: none;\n  display: none;\n  z-index: 1050;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin: 0;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  border-color: #e9ecef;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  text-decoration: none;\n  border: none;\n  background: transparent;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.main-header[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #fff5f5;\n}\n@media (max-width: 1200px) {\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-top-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%] {\n    min-width: 180px;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-categories-section[_ngcontent-%COMP%]   .category-tabs-container[_ngcontent-%COMP%]   .category-tab[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 768px) {\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%] {\n    padding: 0.5rem 0;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-top-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.75rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-left-group[_ngcontent-%COMP%] {\n    gap: 1rem;\n    flex-wrap: wrap;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]   .location-text[_ngcontent-%COMP%]   .location-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-location[_ngcontent-%COMP%]   .location-btn[_ngcontent-%COMP%]   .location-text[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-top-section[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .auth-wrapper[_ngcontent-%COMP%]   .signin-btn[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.9rem;\n    font-size: 0.8rem;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .main-header[_ngcontent-%COMP%]   .header-search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.5rem 0.5rem 0.5rem 2rem;\n  }\n}\n/*# sourceMappingURL=top-navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-top-navbar", standalone: true, imports: [CommonModule, RouterModule, FormsModule, ClickOutsideDirective], template: `<!-- Header Section -->
<header class="main-header">
  <!-- Section 1: Logo, Location, Cart, Auth -->
  <div class="header-top-section">
    <div class="header-container">
      <div class="header-top-content">
        <!-- Left Section: Logo + Location -->
        <div class="header-left-group">
          <!-- Logo Section -->
          <div class="header-logo">
            <a routerLink="/menu" class="logo-link">
              <div class="logo-container">
                <div class="logo-circles">
                  <span class="circle"></span>
                  <span class="circle"></span>
                  <span class="circle"></span>
                </div>
                <div class="logo-text">
                  <h1 class="logo-title">M21</h1>
                  <p class="logo-subtitle">KITCHEN</p>
                </div>
                <i class="bi bi-mortarboard-fill logo-icon"></i>
              </div>
            </a>
          </div>

          <!-- Location Section (Right next to logo) -->
          <div class="header-location" (appClickOutside)="closeDropdowns()">
            <button class="location-btn" (click)="toggleLocationDropdown()">
              <i class="bi bi-geo-alt-fill me-2"></i>
              <div class="location-text">
                <span class="location-label">Deliver to <i class="bi bi-chevron-down"></i></span>
                <span class="location-address">{{ deliveryAddress }} {{ estimatedTime }}</span>
              </div>
            </button>
            <!-- Location Dropdown -->
            <div class="location-dropdown" [class.show]="isLocationDropdownOpen">
              <div class="dropdown-content">
                <p class="text-muted">Change delivery location</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section (Cart & Auth) -->
        <div class="header-right">
          <!-- Shopping Cart -->
          <div class="cart-wrapper" (appClickOutside)="closeDropdowns()">
            <button 
              class="cart-btn" 
              (click)="toggleCart()"
              type="button">
              <i class="bi bi-bag"></i>
              <span class="cart-badge" *ngIf="cartItemCount > 0">{{ cartItemCount }}</span>
            </button>
            <!-- Cart Dropdown -->
            <div class="cart-dropdown" [class.show]="isCartOpen">
              <div class="cart-header">
                <h6 class="mb-0">Shopping Cart</h6>
                <span class="badge bg-primary" *ngIf="cartItemCount > 0">{{ cartItemCount }} items</span>
              </div>
              
              <!-- Cart Items -->
              <div class="cart-items" *ngIf="cartItems.length > 0">
                <div class="cart-item" *ngFor="let item of cartItems">
                  <div class="cart-item-image">
                    <img 
                      [src]="getImageUrl(item.menuItemImage)" 
                      [alt]="item.menuItemName"
                      (error)="onImageError($event)"
                    />
                  </div>
                  <div class="cart-item-content">
                    <div class="cart-item-info">
                      <h6 class="cart-item-name">{{ item.menuItemName }}</h6>
                      <p class="cart-item-details text-muted small mb-2">
                        {{ item.portionName }} - {{ item.portionDetailName }}
                      </p>
                      <div class="cart-item-price-section">
                        <span class="price">{{ formatPrice(item.price) }}</span>
                        <span class="quantity-indicator">x{{ item.quantity }}</span>
                      </div>
                    </div>
                    <div class="cart-item-actions">
                      <div class="quantity-controls">
                        <button 
                          class="btn btn-sm quantity-btn"
                          (click)="updateQuantity(item, -1)"
                          [disabled]="item.quantity <= 1">
                          <i class="bi bi-dash"></i>
                        </button>
                        <span class="quantity">{{ item.quantity }}</span>
                        <button 
                          class="btn btn-sm quantity-btn"
                          (click)="updateQuantity(item, 1)">
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                      <button 
                        class="btn btn-link text-danger p-0 remove-btn"
                        (click)="removeFromCart(item)"
                        title="Remove">
                        <i class="bi bi-x-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty Cart -->
              <div class="empty-cart text-center py-4" *ngIf="cartItems.length === 0">
                <i class="bi bi-cart-x fs-1 text-muted"></i>
                <p class="text-muted mb-0 mt-2">Your cart is empty</p>
              </div>

              <!-- Cart Footer -->
              <div class="cart-footer" *ngIf="cartItems.length > 0">
                <div class="cart-summary">
                  <div class="summary-row">
                    <span>Subtotal:</span>
                    <span class="summary-value">{{ formatPrice(getSubtotal()) }}</span>
                  </div>
                  <div class="summary-row">
                    <span>Delivery Charges:</span>
                    <span class="summary-value">{{ formatPrice(getDeliveryCharges()) }}</span>
                  </div>
                  <div class="summary-row total-row">
                    <span><strong>Total:</strong></span>
                    <span class="summary-value"><strong>{{ formatPrice(getTotal()) }}</strong></span>
                  </div>
                </div>
                <div class="cart-actions">
                  <button class="btn btn-primary w-100 checkout-btn" routerLink="/checkout" (click)="closeDropdowns()">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Auth Section -->
          <div class="auth-wrapper" (appClickOutside)="closeDropdowns()">
            <!-- Sign In / Register Button (if not logged in) -->
            <a 
              *ngIf="!authService.isAuthenticated"
              routerLink="/auth/login"
              class="signin-btn">
              Sign In / Register
            </a>

            <!-- Profile Icon (if logged in) -->
            <div *ngIf="authService.isAuthenticated" class="profile-menu">
              <button 
                class="profile-btn"
                (click)="toggleUserMenu()"
                type="button">
                <img 
                  [src]="currentUser?.avatar || 'https://ui-avatars.com/api/?name=' + (currentUser?.name || 'User')" 
                  alt="User Avatar" 
                  class="profile-avatar">
              </button>
              <ul class="user-dropdown" [class.show]="isUserMenuOpen">
                <li><h6 class="dropdown-header">{{ currentUser?.email }}</h6></li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" routerLink="/profile" (click)="closeDropdowns()">
                    <i class="bi bi-person me-2"></i>
                    Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" routerLink="/settings" (click)="closeDropdowns()">
                    <i class="bi bi-gear me-2"></i>
                    Settings
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <button class="dropdown-item text-danger" (click)="onLogout()">
                    <i class="bi bi-box-arrow-right me-2"></i>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 2: Category Tabs Navigation -->
  <div class="header-categories-section">
    <div class="header-container">
      <div class="category-tabs-container">
        <button
          class="category-tab"
          [class.active]="selectedCategoryId === null"
          (click)="selectCategory(null)"
          type="button">
          All
        </button>
        <button
          *ngFor="let category of categories"
          class="category-tab"
          [class.active]="selectedCategoryId === category.id"
          (click)="selectCategory(category.id)"
          type="button">
          {{ category.name }}
        </button>
        <div class="category-arrow">
          <i class="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- Section 3: Search Bar -->
  <div class="header-search-section">
    <div class="header-container">
      <div class="search-container">
        <i class="bi bi-search search-icon"></i>
        <input
          type="text"
          class="search-input"
          placeholder="Search for Kabab St"
          [(ngModel)]="searchTerm"
          (keyup.enter)="onSearch()">
      </div>
    </div>
  </div>
</header>
`, styles: ['/* projects/client/src/app/layout/components/top-navbar/top-navbar.component.scss */\n.main-header {\n  background-color: #000000;\n  color: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  width: 100%;\n}\n.main-header .header-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n@media (max-width: 768px) {\n  .main-header .header-container {\n    padding: 0 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .main-header .header-container {\n    padding: 0 0.25rem;\n  }\n}\n.main-header .header-top-section {\n  background-color: #000000;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #333333;\n}\n.main-header .header-top-section .header-top-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  flex-wrap: nowrap;\n}\n.main-header .header-top-section .header-left-group {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  flex-shrink: 0;\n}\n.main-header .header-top-section .header-logo {\n  flex-shrink: 0;\n  min-width: 180px;\n}\n.main-header .header-top-section .header-logo .logo-link {\n  text-decoration: none;\n  display: block;\n}\n.main-header .header-top-section .header-logo .logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.main-header .header-top-section .header-logo .logo-container .logo-circles {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  align-items: center;\n}\n.main-header .header-top-section .header-logo .logo-container .logo-circles .circle {\n  width: 10px;\n  height: 10px;\n  background-color: #ffd700;\n  border-radius: 50%;\n  display: block;\n}\n.main-header .header-top-section .header-logo .logo-container .logo-text .logo-title {\n  font-size: 2.2rem;\n  font-weight: 900;\n  color: #ffd700;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-family: "Arial Black", sans-serif;\n  line-height: 1;\n}\n.main-header .header-top-section .header-logo .logo-container .logo-text .logo-subtitle {\n  font-size: 0.75rem;\n  color: #ffffff;\n  margin: 0;\n  letter-spacing: 1px;\n  font-weight: 300;\n}\n.main-header .header-top-section .header-logo .logo-container .logo-icon {\n  font-size: 1.5rem;\n  color: #ffd700;\n  margin-left: 0.5rem;\n}\n.main-header .header-top-section .header-location {\n  flex-shrink: 0;\n  min-width: 200px;\n  position: relative;\n  margin-left: 0;\n}\n.main-header .header-top-section .header-location .location-btn {\n  background: transparent;\n  border: none;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 0;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.main-header .header-top-section .header-location .location-btn:hover {\n  color: #ffd700;\n}\n.main-header .header-top-section .header-location .location-btn i {\n  font-size: 1.1rem;\n  color: #ffffff;\n}\n.main-header .header-top-section .header-location .location-btn .location-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 0.5rem;\n}\n.main-header .header-top-section .header-location .location-btn .location-text .location-label {\n  font-size: 0.85rem;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.main-header .header-top-section .header-location .location-btn .location-text .location-label i {\n  font-size: 0.7rem;\n}\n.main-header .header-top-section .header-location .location-btn .location-text .location-address {\n  font-size: 0.75rem;\n  color: #cccccc;\n  margin-top: 0.25rem;\n}\n.main-header .header-top-section .header-location .location-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: #1a1a1a;\n  border: 1px solid #333333;\n  border-radius: 4px;\n  padding: 1rem;\n  min-width: 300px;\n  margin-top: 0.5rem;\n  display: none;\n  z-index: 1050;\n}\n.main-header .header-top-section .header-location .location-dropdown.show {\n  display: block;\n}\n.main-header .header-top-section .header-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.main-header .header-top-section .header-right .cart-wrapper {\n  position: relative;\n}\n.main-header .header-top-section .header-right .cart-wrapper .cart-btn {\n  background: transparent;\n  border: none;\n  color: #ffd700;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  position: relative;\n  transition: color 0.2s ease;\n}\n.main-header .header-top-section .header-right .cart-wrapper .cart-btn:hover {\n  color: #ffed4e;\n}\n.main-header .header-top-section .header-right .cart-wrapper .cart-btn .cart-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #ff6b35;\n  color: #ffffff;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 600;\n}\n.main-header .header-top-section .header-right .auth-wrapper .signin-btn {\n  background-color: #8B4513;\n  color: #ffffff;\n  padding: 0.5rem 1.25rem;\n  border-radius: 4px;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.main-header .header-top-section .header-right .auth-wrapper .signin-btn:hover {\n  background-color: #a0522d;\n  color: #ffffff;\n}\n.main-header .header-top-section .header-right .auth-wrapper .profile-menu {\n  position: relative;\n}\n.main-header .header-top-section .header-right .auth-wrapper .profile-menu .profile-btn {\n  background: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 50%;\n  overflow: hidden;\n  transition: transform 0.2s ease;\n}\n.main-header .header-top-section .header-right .auth-wrapper .profile-menu .profile-btn:hover {\n  transform: scale(1.1);\n}\n.main-header .header-top-section .header-right .auth-wrapper .profile-menu .profile-btn .profile-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #ffd700;\n}\n.main-header .header-categories-section {\n  background-color: #000000;\n  padding: 0;\n  border-bottom: 1px solid #333333;\n}\n.main-header .header-categories-section .category-tabs-container {\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  padding: 0.75rem 0;\n  gap: 0;\n}\n.main-header .header-categories-section .category-tabs-container::-webkit-scrollbar {\n  display: none;\n}\n.main-header .header-categories-section .category-tabs-container .category-tab {\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  padding: 0.5rem 1.25rem;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  font-size: 0.95rem;\n  color: #ffffff;\n  flex-shrink: 0;\n  min-width: fit-content;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n.main-header .header-categories-section .category-tabs-container .category-tab:hover {\n  color: #ffd700;\n}\n.main-header .header-categories-section .category-tabs-container .category-tab.active {\n  color: #ffd700;\n}\n.main-header .header-categories-section .category-tabs-container .category-tab.active::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 1.25rem;\n  right: 1.25rem;\n  height: 2px;\n  background: #ffd700;\n}\n.main-header .header-categories-section .category-tabs-container .category-arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.5rem;\n  color: #999999;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.main-header .header-categories-section .category-tabs-container .category-arrow i {\n  font-size: 1rem;\n}\n.main-header .header-search-section {\n  background-color: #f5f5f5;\n  padding: 1.5rem 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n.main-header .header-search-section .search-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  padding: 0;\n}\n.main-header .header-search-section .search-container .search-icon {\n  position: absolute;\n  left: 1.5rem;\n  color: #999999;\n  font-size: 1.2rem;\n  z-index: 1;\n}\n.main-header .header-search-section .search-container .search-input {\n  width: 100%;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #cccccc;\n  color: #333333;\n  padding: 0.75rem 0.5rem 0.75rem 2.5rem;\n  font-size: 1.1rem;\n  outline: none;\n  transition: border-color 0.2s ease;\n}\n.main-header .header-search-section .search-container .search-input::placeholder {\n  color: #999999;\n}\n.main-header .header-search-section .search-container .search-input:focus {\n  border-bottom-color: #ffd700;\n}\n.main-header .cart-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #ffffff;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 380px;\n  max-width: 420px;\n  max-height: 80vh;\n  overflow-y: auto;\n  padding: 0;\n  margin-top: 0.5rem;\n  display: none;\n  z-index: 1050;\n}\n.main-header .cart-dropdown.show {\n  display: block;\n}\n.main-header .cart-dropdown .cart-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  background-color: #fff;\n  border-bottom: 1px solid #e9ecef;\n}\n.main-header .cart-dropdown .cart-header h6 {\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0;\n}\n.main-header .cart-dropdown .cart-header .badge {\n  font-size: 0.75rem;\n  padding: 0.35rem 0.65rem;\n}\n.main-header .cart-dropdown .cart-items {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 0.75rem 0;\n}\n.main-header .cart-dropdown .cart-item {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background-color 0.2s;\n}\n.main-header .cart-dropdown .cart-item:hover {\n  background-color: #fafafa;\n}\n.main-header .cart-dropdown .cart-item:last-child {\n  border-bottom: none;\n}\n.main-header .cart-dropdown .cart-item .cart-item-image {\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #f8f9fa;\n}\n.main-header .cart-dropdown .cart-item .cart-item-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.main-header .cart-dropdown .cart-item .cart-item-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 0;\n}\n.main-header .cart-dropdown .cart-item .cart-item-info {\n  flex: 1;\n  min-width: 0;\n}\n.main-header .cart-dropdown .cart-item .cart-item-info .cart-item-name {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  color: #2c3e50;\n  line-height: 1.3;\n}\n.main-header .cart-dropdown .cart-item .cart-item-info .cart-item-details {\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.main-header .cart-dropdown .cart-item .cart-item-info .cart-item-price-section {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.main-header .cart-dropdown .cart-item .cart-item-info .cart-item-price-section .price {\n  font-weight: 600;\n  color: #ff6b35;\n  font-size: 1rem;\n}\n.main-header .cart-dropdown .cart-item .cart-item-info .cart-item-price-section .quantity-indicator {\n  background-color: #e9ecef;\n  padding: 0.125rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions .quantity-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.125rem;\n  background-color: #fff;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions .quantity-controls .quantity-btn {\n  border: none;\n  padding: 0.25rem 0.5rem;\n  min-width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: #495057;\n  line-height: 1;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions .quantity-controls .quantity-btn:hover:not(:disabled) {\n  background-color: #f8f9fa;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions .quantity-controls .quantity-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions .quantity-controls .quantity {\n  min-width: 30px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #2c3e50;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions .remove-btn {\n  padding: 0.25rem;\n  min-width: auto;\n  height: auto;\n  color: #dc3545;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.main-header .cart-dropdown .cart-item .cart-item-actions .remove-btn:hover {\n  opacity: 1;\n}\n.main-header .cart-dropdown .empty-cart {\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.main-header .cart-dropdown .empty-cart i {\n  color: #adb5bd;\n}\n.main-header .cart-dropdown .cart-footer {\n  padding: 1.25rem;\n  background-color: #fff;\n  border-top: 1px solid #e9ecef;\n}\n.main-header .cart-dropdown .cart-footer .cart-summary {\n  margin-bottom: 1.25rem;\n}\n.main-header .cart-dropdown .cart-footer .cart-summary .summary-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n  font-size: 0.9rem;\n  color: #495057;\n}\n.main-header .cart-dropdown .cart-footer .cart-summary .summary-row .summary-value {\n  font-weight: 500;\n  color: #2c3e50;\n}\n.main-header .cart-dropdown .cart-footer .cart-summary .summary-row.total-row {\n  padding-top: 0.75rem;\n  margin-top: 0.5rem;\n  border-top: 1px solid #dee2e6;\n  font-size: 1.05rem;\n}\n.main-header .cart-dropdown .cart-footer .cart-summary .summary-row.total-row span {\n  font-weight: 600;\n}\n.main-header .cart-dropdown .cart-footer .cart-summary .summary-row.total-row .summary-value {\n  color: #ff6b35;\n  font-size: 1.15rem;\n}\n.main-header .cart-dropdown .cart-footer .checkout-btn {\n  padding: 0.875rem 1.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  background-color: #ff6b35;\n  border-color: #ff6b35;\n  color: #fff;\n  transition: all 0.2s;\n  width: 100%;\n}\n.main-header .cart-dropdown .cart-footer .checkout-btn:hover {\n  background-color: #e55a2b;\n  border-color: #e55a2b;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);\n}\n.main-header .user-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #ffffff;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  padding: 0.5rem 0;\n  margin-top: 0.5rem;\n  list-style: none;\n  display: none;\n  z-index: 1050;\n}\n.main-header .user-dropdown.show {\n  display: block;\n}\n.main-header .user-dropdown .dropdown-header {\n  padding: 0.5rem 1rem;\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin: 0;\n}\n.main-header .user-dropdown .dropdown-divider {\n  margin: 0.5rem 0;\n  border-color: #e9ecef;\n}\n.main-header .user-dropdown .dropdown-item {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  color: #495057;\n  text-decoration: none;\n  border: none;\n  background: transparent;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.main-header .user-dropdown .dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.main-header .user-dropdown .dropdown-item i {\n  width: 20px;\n}\n.main-header .user-dropdown .dropdown-item.text-danger {\n  color: #dc3545;\n}\n.main-header .user-dropdown .dropdown-item.text-danger:hover {\n  background-color: #fff5f5;\n}\n@media (max-width: 1200px) {\n  .main-header .header-top-section .header-top-content {\n    gap: 1rem;\n  }\n  .main-header .header-top-section .header-logo {\n    min-width: 150px;\n  }\n  .main-header .header-top-section .header-logo .logo-container .logo-text .logo-title {\n    font-size: 1.8rem;\n  }\n  .main-header .header-top-section .header-location {\n    min-width: 180px;\n  }\n  .main-header .header-categories-section .category-tabs-container .category-tab {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 768px) {\n  .main-header .header-top-section {\n    padding: 0.5rem 0;\n  }\n  .main-header .header-top-section .header-top-content {\n    flex-wrap: wrap;\n    gap: 0.75rem;\n  }\n  .main-header .header-top-section .header-left-group {\n    gap: 1rem;\n    flex-wrap: wrap;\n  }\n  .main-header .header-top-section .header-logo {\n    min-width: 120px;\n  }\n  .main-header .header-top-section .header-logo .logo-container {\n    gap: 0.5rem;\n  }\n  .main-header .header-top-section .header-logo .logo-container .logo-text .logo-title {\n    font-size: 1.5rem;\n  }\n  .main-header .header-top-section .header-logo .logo-container .logo-text .logo-subtitle {\n    font-size: 0.65rem;\n  }\n  .main-header .header-top-section .header-logo .logo-container .logo-icon {\n    font-size: 1.2rem;\n  }\n  .main-header .header-top-section .header-location {\n    min-width: auto;\n  }\n  .main-header .header-top-section .header-location .location-btn .location-text .location-label {\n    font-size: 0.75rem;\n  }\n  .main-header .header-top-section .header-location .location-btn .location-text .location-address {\n    font-size: 0.7rem;\n  }\n  .main-header .header-top-section .header-right {\n    gap: 0.75rem;\n  }\n  .main-header .header-top-section .header-right .auth-wrapper .signin-btn {\n    padding: 0.4rem 0.9rem;\n    font-size: 0.8rem;\n  }\n  .main-header .header-search-section {\n    padding: 1rem 0;\n  }\n  .main-header .header-search-section .search-container .search-input {\n    font-size: 1rem;\n    padding: 0.5rem 0.5rem 0.5rem 2rem;\n  }\n}\n/*# sourceMappingURL=top-navbar.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: CartService }, { type: CategoryService }], { toggleSidebar: [{
    type: Output
  }], categorySelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopNavbarComponent, { className: "TopNavbarComponent", filePath: "src/app/layout/components/top-navbar/top-navbar.component.ts", lineNumber: 23 });
})();

// projects/client/src/app/constants/menu-items.ts
var MENU_ITEMS = [
  {
    label: "Dashboard",
    icon: "bi-speedometer2",
    route: "/dashboard",
    roles: ["user", "admin"]
  },
  {
    label: "Profile",
    icon: "bi-person",
    route: "/profile",
    roles: ["user", "admin"]
  },
  {
    label: "Settings",
    icon: "bi-gear",
    route: "/settings",
    roles: ["user", "admin"]
  },
  {
    label: "Admin",
    icon: "bi-shield-lock",
    roles: ["admin"],
    children: [
      {
        label: "Users",
        icon: "bi-people",
        route: "/admin/users"
      },
      {
        label: "Roles",
        icon: "bi-key",
        route: "/admin/roles"
      }
    ]
  }
];

// projects/client/src/app/layout/components/side-navbar/side-navbar.component.ts
function SideNavbarComponent_li_5_div_1_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 15);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", child_r4.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("bi " + child_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r4.label);
  }
}
function SideNavbarComponent_li_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 10);
    \u0275\u0275listener("click", function SideNavbarComponent_li_5_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSubmenu(item_r2.label));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ul", 13);
    \u0275\u0275template(7, SideNavbarComponent_li_5_div_1_li_7_Template, 5, 4, "li", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.isActive(item_r2));
    \u0275\u0275advance();
    \u0275\u0275classMap("bi " + item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r2.isExpanded(item_r2.label));
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r2.isExpanded(item_r2.label));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.children);
  }
}
function SideNavbarComponent_li_5_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap("badge ms-auto " + item_r2.badge.class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.badge.value, " ");
  }
}
function SideNavbarComponent_li_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SideNavbarComponent_li_5_a_2_span_4_Template, 2, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", item_r2.route);
    \u0275\u0275advance();
    \u0275\u0275classMap("bi " + item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.badge);
  }
}
function SideNavbarComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7);
    \u0275\u0275template(1, SideNavbarComponent_li_5_div_1_Template, 8, 10, "div", 8)(2, SideNavbarComponent_li_5_a_2_Template, 5, 5, "a", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children && item_r2.children.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.children || item_r2.children.length === 0);
  }
}
var SideNavbarComponent = class _SideNavbarComponent {
  authService;
  storageService;
  router;
  menuItems = [];
  isCollapsed = false;
  activeRoute = "";
  expandedMenus = {};
  constructor(authService, storageService, router) {
    this.authService = authService;
    this.storageService = storageService;
    this.router = router;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.activeRoute = event.urlAfterRedirects;
    });
  }
  ngOnInit() {
    const savedState = this.storageService.getItem("sidebar_collapsed");
    this.isCollapsed = savedState === "true";
    this.menuItems = this.filterMenuItemsByRole(MENU_ITEMS);
    this.activeRoute = this.router.url;
  }
  /**
   * Filter menu items based on user roles
   */
  filterMenuItemsByRole(items) {
    return items.filter((item) => {
      if (!item.roles || item.roles.length === 0) {
        return true;
      }
      const hasRole = this.authService.hasAnyRole(item.roles);
      if (hasRole && item.children) {
        item.children = this.filterMenuItemsByRole(item.children);
      }
      return hasRole;
    });
  }
  /**
   * Toggle sidebar collapse state
   */
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.storageService.setItem("sidebar_collapsed", this.isCollapsed.toString());
  }
  /**
   * Toggle submenu expand/collapse
   */
  toggleSubmenu(label) {
    this.expandedMenus[label] = !this.expandedMenus[label];
  }
  /**
   * Check if menu item is active
   */
  isActive(item) {
    if (item.route) {
      return this.activeRoute === item.route || this.activeRoute.startsWith(item.route + "/");
    }
    if (item.children) {
      return item.children.some((child) => this.isActive(child));
    }
    return false;
  }
  /**
   * Check if submenu is expanded
   */
  isExpanded(label) {
    return this.expandedMenus[label] || false;
  }
  static \u0275fac = function SideNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideNavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavbarComponent, selectors: [["app-side-navbar"]], decls: 7, vars: 10, consts: [[1, "sidebar"], [1, "sidebar-toggle", "d-none", "d-lg-flex", 3, "click", "title"], [1, "bi"], [1, "sidebar-nav"], [1, "nav", "flex-column"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sidebar-overlay", "d-lg-none", 3, "click"], [1, "nav-item"], [4, "ngIf"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", 4, "ngIf"], [1, "nav-link", 3, "click"], [1, "nav-text"], [1, "bi", "bi-chevron-down", "ms-auto", "submenu-arrow"], [1, "submenu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "submenu-link", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [3, "class", 4, "ngIf"]], template: function SideNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "button", 1);
      \u0275\u0275listener("click", function SideNavbarComponent_Template_button_click_1_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "nav", 3)(4, "ul", 4);
      \u0275\u0275template(5, SideNavbarComponent_li_5_Template, 3, 2, "li", 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6);
      \u0275\u0275listener("click", function SideNavbarComponent_Template_div_click_6_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("title", ctx.isCollapsed ? "Expand Sidebar" : "Collapse Sidebar");
      \u0275\u0275advance();
      \u0275\u0275classProp("bi-chevron-right", ctx.isCollapsed)("bi-chevron-left", !ctx.isCollapsed);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance();
      \u0275\u0275classProp("show", !ctx.isCollapsed);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 60px;\n  height: calc(100vh - 60px);\n  width: 260px;\n  background-color: #2c3e50;\n  color: #ecf0f1;\n  transition: all 0.3s ease;\n  z-index: 1020;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .submenu-arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 991.98px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .sidebar[_ngcontent-%COMP%]:not(.collapsed) {\n    transform: translateX(0);\n  }\n}\n.sidebar-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -15px;\n  top: 20px;\n  width: 30px;\n  height: 30px;\n  background-color: #2c3e50;\n  border: 2px solid #34495e;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ecf0f1;\n  cursor: pointer;\n  z-index: 1021;\n  transition: all 0.3s ease;\n}\n.sidebar-toggle[_ngcontent-%COMP%]:hover {\n  background-color: color-mix(in srgb, #2c3e50 95%, black 5%);\n  transform: scale(1.1);\n}\n.sidebar-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  color: #ecf0f1;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  border-left: 3px solid transparent;\n  cursor: pointer;\n  background: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n  width: 100%;\n  text-align: left;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 24px;\n  text-align: center;\n  margin-right: 0.75rem;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  flex: 1;\n  white-space: nowrap;\n  transition: opacity 0.3s ease;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .submenu-arrow[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  transition: transform 0.3s ease;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .submenu-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-left-color: #3498db;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(52, 152, 219, 0.2);\n  border-left-color: #3498db;\n  color: #3498db;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.sidebar-nav[_ngcontent-%COMP%]   .submenu.show[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1.25rem 0.75rem 3rem;\n  color: rgba(236, 240, 241, 0.8);\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 20px;\n  text-align: center;\n  margin-right: 0.75rem;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  color: #ecf0f1;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   .submenu-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(52, 152, 219, 0.2);\n  color: #3498db;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.sidebar[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 3px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  left: 0;\n  width: 100%;\n  height: calc(100vh - 60px);\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1019;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.sidebar-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=side-navbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-side-navbar", standalone: true, imports: [CommonModule, RouterModule], template: `<aside class="sidebar" [class.collapsed]="isCollapsed">
  <!-- Sidebar Toggle Button (Desktop) -->
  <button 
    class="sidebar-toggle d-none d-lg-flex" 
    (click)="toggleSidebar()"
    [title]="isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'">
    <i class="bi" [class.bi-chevron-right]="isCollapsed" [class.bi-chevron-left]="!isCollapsed"></i>
  </button>

  <!-- Sidebar Menu -->
  <nav class="sidebar-nav">
    <ul class="nav flex-column">
      <li class="nav-item" *ngFor="let item of menuItems">
        <!-- Menu item with children -->
        <div *ngIf="item.children && item.children.length > 0">
          <button
            class="nav-link"
            [class.active]="isActive(item)"
            (click)="toggleSubmenu(item.label)">
            <i [class]="'bi ' + item.icon"></i>
            <span class="nav-text">{{ item.label }}</span>
            <i class="bi bi-chevron-down ms-auto submenu-arrow" 
               [class.rotated]="isExpanded(item.label)"></i>
          </button>
          
          <!-- Submenu -->
          <ul class="submenu" [class.show]="isExpanded(item.label)">
            <li *ngFor="let child of item.children">
              <a 
                [routerLink]="child.route" 
                routerLinkActive="active"
                class="submenu-link">
                <i [class]="'bi ' + child.icon"></i>
                <span>{{ child.label }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Menu item without children -->
        <a 
          *ngIf="!item.children || item.children.length === 0"
          [routerLink]="item.route"
          routerLinkActive="active"
          class="nav-link">
          <i [class]="'bi ' + item.icon"></i>
          <span class="nav-text">{{ item.label }}</span>
          <span *ngIf="item.badge" 
                [class]="'badge ms-auto ' + item.badge.class">
            {{ item.badge.value }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</aside>

<!-- Overlay for mobile -->
<div class="sidebar-overlay d-lg-none" [class.show]="!isCollapsed" (click)="toggleSidebar()"></div>

`, styles: ["/* projects/client/src/app/layout/components/side-navbar/side-navbar.component.scss */\n.sidebar {\n  position: fixed;\n  left: 0;\n  top: 60px;\n  height: calc(100vh - 60px);\n  width: 260px;\n  background-color: #2c3e50;\n  color: #ecf0f1;\n  transition: all 0.3s ease;\n  z-index: 1020;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.sidebar.collapsed {\n  width: 70px;\n}\n.sidebar.collapsed .nav-text {\n  opacity: 0;\n  width: 0;\n}\n.sidebar.collapsed .submenu-arrow {\n  display: none;\n}\n.sidebar.collapsed .badge {\n  display: none;\n}\n.sidebar.collapsed .submenu {\n  display: none;\n}\n@media (max-width: 991.98px) {\n  .sidebar {\n    transform: translateX(-100%);\n  }\n  .sidebar:not(.collapsed) {\n    transform: translateX(0);\n  }\n}\n.sidebar-toggle {\n  position: absolute;\n  right: -15px;\n  top: 20px;\n  width: 30px;\n  height: 30px;\n  background-color: #2c3e50;\n  border: 2px solid #34495e;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ecf0f1;\n  cursor: pointer;\n  z-index: 1021;\n  transition: all 0.3s ease;\n}\n.sidebar-toggle:hover {\n  background-color: color-mix(in srgb, #2c3e50 95%, black 5%);\n  transform: scale(1.1);\n}\n.sidebar-toggle i {\n  font-size: 0.875rem;\n}\n.sidebar-nav {\n  padding: 1rem 0;\n}\n.sidebar-nav .nav {\n  padding: 0;\n}\n.sidebar-nav .nav-item {\n  margin-bottom: 0.25rem;\n}\n.sidebar-nav .nav-link {\n  display: flex;\n  align-items: center;\n  padding: 0.875rem 1.25rem;\n  color: #ecf0f1;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  border-left: 3px solid transparent;\n  cursor: pointer;\n  background: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n  width: 100%;\n  text-align: left;\n}\n.sidebar-nav .nav-link i {\n  font-size: 1.25rem;\n  width: 24px;\n  text-align: center;\n  margin-right: 0.75rem;\n}\n.sidebar-nav .nav-link .nav-text {\n  flex: 1;\n  white-space: nowrap;\n  transition: opacity 0.3s ease;\n}\n.sidebar-nav .nav-link .submenu-arrow {\n  font-size: 0.875rem;\n  transition: transform 0.3s ease;\n}\n.sidebar-nav .nav-link .submenu-arrow.rotated {\n  transform: rotate(180deg);\n}\n.sidebar-nav .nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-left-color: #3498db;\n}\n.sidebar-nav .nav-link.active {\n  background-color: rgba(52, 152, 219, 0.2);\n  border-left-color: #3498db;\n  color: #3498db;\n}\n.sidebar-nav .submenu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.sidebar-nav .submenu.show {\n  max-height: 500px;\n}\n.sidebar-nav .submenu .submenu-link {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1.25rem 0.75rem 3rem;\n  color: rgba(236, 240, 241, 0.8);\n  text-decoration: none;\n  transition: all 0.2s ease;\n}\n.sidebar-nav .submenu .submenu-link i {\n  font-size: 1rem;\n  width: 20px;\n  text-align: center;\n  margin-right: 0.75rem;\n}\n.sidebar-nav .submenu .submenu-link:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  color: #ecf0f1;\n}\n.sidebar-nav .submenu .submenu-link.active {\n  background-color: rgba(52, 152, 219, 0.2);\n  color: #3498db;\n}\n.sidebar-nav .badge {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n}\n.sidebar {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;\n}\n.sidebar::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar::-webkit-scrollbar-track {\n  background: transparent;\n}\n.sidebar::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 3px;\n}\n.sidebar::-webkit-scrollbar-thumb:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.sidebar-overlay {\n  position: fixed;\n  top: 60px;\n  left: 0;\n  width: 100%;\n  height: calc(100vh - 60px);\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1019;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.sidebar-overlay.show {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=side-navbar.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: StorageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavbarComponent, { className: "SideNavbarComponent", filePath: "src/app/layout/components/side-navbar/side-navbar.component.ts", lineNumber: 16 });
})();

// projects/client/src/app/layout/components/footer/footer.component.ts
function FooterComponent_button_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function FooterComponent_button_94_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openWhatsApp());
    });
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_button_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function FooterComponent_button_95_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSearch());
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_button_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function FooterComponent_button_96_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToTop());
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementEnd();
  }
}
var FooterComponent = class _FooterComponent {
  isScrolled = false;
  showWhatsApp = true;
  showSearch = false;
  showScrollTop = false;
  ngOnInit() {
    this.checkScrollPosition();
  }
  onWindowScroll() {
    this.checkScrollPosition();
  }
  checkScrollPosition() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const isAtTop = scrollPosition < 100;
    this.isScrolled = scrollPosition > 100;
    this.showWhatsApp = isAtTop;
    this.showSearch = !isAtTop;
    this.showScrollTop = !isAtTop;
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  openWhatsApp() {
    const phoneNumber = "923045777621";
    const message = encodeURIComponent("Hello! I would like to place an order.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }
  openSearch() {
    this.scrollToTop();
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], hostBindings: function FooterComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function FooterComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowScroll($event);
      }, false, \u0275\u0275resolveWindow);
    }
  }, decls: 97, vars: 3, consts: [[1, "main-footer"], [1, "container"], [1, "row", "g-4"], [1, "col-12", "col-lg-6"], [1, "footer-logo", "mb-4"], [1, "logo-container"], [1, "logo-circles"], [1, "circle"], [1, "logo-text"], [1, "logo-title"], [1, "logo-subtitle"], [1, "bi", "bi-mortarboard-fill", "logo-icon"], [1, "contact-info"], [1, "contact-title"], [1, "contact-item"], [1, "bi", "bi-whatsapp", "me-2"], ["href", "https://wa.me/923045777621", "target", "_blank", 1, "text-white"], [1, "bi", "bi-envelope", "me-2"], ["href", "mailto:m21kitchen@gmail.com", 1, "text-white"], [1, "bi", "bi-geo-alt", "me-2"], [1, "app-downloads", "mt-4"], ["href", "https://play.google.com/store", "target", "_blank", "rel", "noopener noreferrer", 1, "app-button"], [1, "app-badge", "google-play"], [1, "badge-content"], [1, "badge-text"], [1, "badge-title"], ["href", "https://apps.apple.com", "target", "_blank", "rel", "noopener noreferrer", 1, "app-button"], [1, "app-badge", "app-store"], [1, "col-12", "col-md-6"], [1, "section-title"], [1, "timings"], [1, "mb-1"], [1, "mb-0"], [1, "social-links"], ["href", "#", "target", "_blank", "title", "Facebook", 1, "social-link", "facebook"], [1, "bi", "bi-facebook"], ["href", "#", "target", "_blank", "title", "Instagram", 1, "social-link", "instagram"], [1, "bi", "bi-instagram"], ["href", "#", "target", "_blank", "title", "Twitter/X", 1, "social-link", "twitter"], [1, "bi", "bi-twitter"], ["href", "#", "target", "_blank", "title", "YouTube", 1, "social-link", "youtube"], [1, "bi", "bi-youtube"], ["href", "#", "target", "_blank", "title", "TikTok", 1, "social-link", "tiktok"], [1, "bi", "bi-tiktok"], [1, "col-12"], [1, "legal-links"], ["href", "#", 1, "legal-link"], [1, "separator"], [1, "footer-divider"], [1, "copyright-section"], [1, "copyright-text"], [1, "blink-logo"], [1, "floating-buttons"], ["class", "floating-btn whatsapp-btn", "title", "Contact us on WhatsApp", 3, "click", 4, "ngIf"], ["class", "floating-btn search-btn", "title", "Search", 3, "click", 4, "ngIf"], ["class", "floating-btn scroll-top-btn", "title", "Scroll to top", 3, "click", 4, "ngIf"], ["title", "Contact us on WhatsApp", 1, "floating-btn", "whatsapp-btn", 3, "click"], [1, "bi", "bi-whatsapp"], ["title", "Search", 1, "floating-btn", "search-btn", 3, "click"], [1, "bi", "bi-search"], ["title", "Scroll to top", 1, "floating-btn", "scroll-top-btn", 3, "click"], [1, "bi", "bi-chevron-up"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "span", 7)(8, "span", 7)(9, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "h2", 9);
      \u0275\u0275text(12, "M21 KITCHEN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14, "THE KITCHEN OF 21 CENTURY");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 12)(17, "h5", 13);
      \u0275\u0275text(18, "M21 Kitchen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "WhatsApp: ");
      \u0275\u0275elementStart(23, "a", 16);
      \u0275\u0275text(24, "+923045777621");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 14);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Email: ");
      \u0275\u0275elementStart(29, "a", 18);
      \u0275\u0275text(30, "m21kitchen@gmail.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275element(32, "i", 19);
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Address: M21 Kitchen - Wapda Town, 230-C, PIA Road, Main Blvd, WAPDA Town, Lahore, 54000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 20)(36, "a", 21)(37, "div", 22)(38, "div", 23)(39, "span", 24);
      \u0275\u0275text(40, "GET IT ON");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 25);
      \u0275\u0275text(42, "Google Play");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "a", 26)(44, "div", 27)(45, "div", 23)(46, "span", 24);
      \u0275\u0275text(47, "Download on the");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 25);
      \u0275\u0275text(49, "App Store");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(50, "div", 3)(51, "div", 2)(52, "div", 28)(53, "h5", 29);
      \u0275\u0275text(54, "Our Timings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 30)(56, "p", 31);
      \u0275\u0275text(57, "Monday - Sunday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p", 32)(59, "strong");
      \u0275\u0275text(60, "11:00 AM - 05:00 AM");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 28)(62, "h5", 29);
      \u0275\u0275text(63, "Follow Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 33)(65, "a", 34);
      \u0275\u0275element(66, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "a", 36);
      \u0275\u0275element(68, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "a", 38);
      \u0275\u0275element(70, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "a", 40);
      \u0275\u0275element(72, "i", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 42);
      \u0275\u0275element(74, "i", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 44)(76, "div", 45)(77, "a", 46);
      \u0275\u0275text(78, "Terms and conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span", 47);
      \u0275\u0275text(80, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "a", 46);
      \u0275\u0275text(82, "Privacy Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 47);
      \u0275\u0275text(84, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "a", 46);
      \u0275\u0275text(86, "Sitemap");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(87, "div", 48);
      \u0275\u0275elementStart(88, "div", 49)(89, "p", 50);
      \u0275\u0275text(90, " \xA9 2025 Powered by ");
      \u0275\u0275elementStart(91, "span", 51);
      \u0275\u0275text(92, "Blink Co.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(93, "div", 52);
      \u0275\u0275template(94, FooterComponent_button_94_Template, 2, 0, "button", 53)(95, FooterComponent_button_95_Template, 2, 0, "button", 54)(96, FooterComponent_button_96_Template, 2, 0, "button", 55);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(94);
      \u0275\u0275property("ngIf", ctx.showWhatsApp);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSearch);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showScrollTop);
    }
  }, dependencies: [CommonModule, NgIf], styles: [`

.main-footer[_ngcontent-%COMP%] {
  background-color: #000000;
  color: #ffffff;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  width: 100%;
  position: relative;
  z-index: 1;
}
.main-footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  position: relative;
  flex-wrap: wrap;
}
.main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-circles[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  margin-top: 0.5rem;
}
.main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-circles[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
  background-color: #ffd700;
  border-radius: 50%;
  display: block;
}
.main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 200px;
}
.main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {
  font-size: 2.8rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family:
    "Arial Black",
    "Helvetica Neue",
    Arial,
    sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.1;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.3);
}
.main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-subtitle[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #ffffff;
  margin: 0.5rem 0 0 0;
  letter-spacing: 1.5px;
  font-weight: 300;
}
.main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {
  font-size: 1.8rem;
  color: #ffd700;
  margin-top: 0.5rem;
  flex-shrink: 0;
}
.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {
  margin-top: 2rem;
}
.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.6;
}
.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  color: #ffd700;
  margin-top: 0.25rem;
  flex-shrink: 0;
}
.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}
.main-footer[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: #ffd700;
  text-decoration: underline;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%] {
  display: inline-block;
  max-width: 200px;
  transition: transform 0.3s ease;
  text-decoration: none;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]:hover {
  transform: scale(1.05);
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%] {
  background-color: #000000;
  border: 2px solid #333333;
  border-radius: 6px;
  padding: 0.6rem 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.3s ease;
  min-width: 180px;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%]   .badge-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%]   .badge-text[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 0.15rem;
  display: block;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%]   .badge-title[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.1;
  display: block;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]   .app-badge.google-play[_ngcontent-%COMP%]::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm4.95-1.42l-2.27-2.27L19.34 12l-1.84-1.84 2.27-2.27L21.5 12l-1.74 1.7zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 0.75rem;
  flex-shrink: 0;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]   .app-badge.app-store[_ngcontent-%COMP%]::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 0.75rem;
  flex-shrink: 0;
}
.main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%]   .app-badge[_ngcontent-%COMP%]:hover {
  border-color: #ffd700;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
}
.main-footer[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.main-footer[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%] {
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.8;
}
.main-footer[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #ffffff;
  font-size: 1.1rem;
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link.facebook[_ngcontent-%COMP%] {
  background-color: #1877f2;
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link.instagram[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%);
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link.twitter[_ngcontent-%COMP%] {
  background-color: #000000;
  border-color: #ffffff;
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link.youtube[_ngcontent-%COMP%] {
  background-color: #ff0000;
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link.tiktok[_ngcontent-%COMP%] {
  background-color: #000000;
  border-color: #ffffff;
}
.main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
}
.main-footer[_ngcontent-%COMP%]   .legal-links[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.main-footer[_ngcontent-%COMP%]   .legal-links[_ngcontent-%COMP%]   .legal-link[_ngcontent-%COMP%] {
  color: #ffffff;
  text-decoration: underline;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}
.main-footer[_ngcontent-%COMP%]   .legal-links[_ngcontent-%COMP%]   .legal-link[_ngcontent-%COMP%]:hover {
  color: #ffd700;
}
.main-footer[_ngcontent-%COMP%]   .legal-links[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {
  color: #666666;
}
.main-footer[_ngcontent-%COMP%]   .footer-divider[_ngcontent-%COMP%] {
  height: 2px;
  background-color: #ffd700;
  margin: 2rem 0 1.5rem;
}
.main-footer[_ngcontent-%COMP%]   .copyright-section[_ngcontent-%COMP%] {
  text-align: center;
  padding-top: 1rem;
}
.main-footer[_ngcontent-%COMP%]   .copyright-section[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%] {
  color: #e0e0e0;
  font-size: 0.9rem;
  margin: 0;
}
.main-footer[_ngcontent-%COMP%]   .copyright-section[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%]   .blink-logo[_ngcontent-%COMP%] {
  color: #ffd700;
  font-weight: 600;
  margin-left: 0.5rem;
}
.floating-buttons[_ngcontent-%COMP%] {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%] {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease;
  position: relative;
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%]:active {
  transform: translateY(-1px) scale(1.05);
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn.whatsapp-btn[_ngcontent-%COMP%] {
  background-color: #25d366;
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn.whatsapp-btn[_ngcontent-%COMP%]:hover {
  background-color: #20ba5a;
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn.search-btn[_ngcontent-%COMP%] {
  background-color: #ffd700;
  color: #000000;
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn.search-btn[_ngcontent-%COMP%]:hover {
  background-color: #ffed4e;
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn.scroll-top-btn[_ngcontent-%COMP%] {
  background-color: #ffd700;
  color: #000000;
}
.floating-buttons[_ngcontent-%COMP%]   .floating-btn.scroll-top-btn[_ngcontent-%COMP%]:hover {
  background-color: #ffed4e;
}
@keyframes _ngcontent-%COMP%_fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
  .main-footer[_ngcontent-%COMP%] {
    padding: 2rem 0 1rem;
  }
  .main-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .logo-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .main-footer[_ngcontent-%COMP%]   .app-downloads[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%] {
    max-width: 150px;
  }
  .main-footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  .floating-buttons[_ngcontent-%COMP%] {
    right: 1rem;
    bottom: 1rem;
  }
  .floating-buttons[_ngcontent-%COMP%]   .floating-btn[_ngcontent-%COMP%] {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
}
/*# sourceMappingURL=footer.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [CommonModule], template: '<!-- Footer -->\n<footer class="main-footer">\n  <div class="container">\n    <div class="row g-4">\n      <!-- Left Section - Logo and Contact Info -->\n      <div class="col-12 col-lg-6">\n        <div class="footer-logo mb-4">\n          <div class="logo-container">\n            <div class="logo-circles">\n              <span class="circle"></span>\n              <span class="circle"></span>\n              <span class="circle"></span>\n            </div>\n            <div class="logo-text">\n              <h2 class="logo-title">M21 KITCHEN</h2>\n              <p class="logo-subtitle">THE KITCHEN OF 21 CENTURY</p>\n            </div>\n            <i class="bi bi-mortarboard-fill logo-icon"></i>\n          </div>\n        </div>\n        \n        <div class="contact-info">\n          <h5 class="contact-title">M21 Kitchen</h5>\n          <div class="contact-item">\n            <i class="bi bi-whatsapp me-2"></i>\n            <span>WhatsApp: <a href="https://wa.me/923045777621" target="_blank" class="text-white">+923045777621</a></span>\n          </div>\n          <div class="contact-item">\n            <i class="bi bi-envelope me-2"></i>\n            <span>Email: <a href="mailto:m21kitchen&#64;gmail.com" class="text-white">m21kitchen&#64;gmail.com</a></span>\n          </div>\n          <div class="contact-item">\n            <i class="bi bi-geo-alt me-2"></i>\n            <span>Address: M21 Kitchen - Wapda Town, 230-C, PIA Road, Main Blvd, WAPDA Town, Lahore, 54000</span>\n          </div>\n        </div>\n\n        <div class="app-downloads mt-4">\n          <a href="https://play.google.com/store" class="app-button" target="_blank" rel="noopener noreferrer">\n            <div class="app-badge google-play">\n              <div class="badge-content">\n                <span class="badge-text">GET IT ON</span>\n                <span class="badge-title">Google Play</span>\n              </div>\n            </div>\n          </a>\n          <a href="https://apps.apple.com" class="app-button" target="_blank" rel="noopener noreferrer">\n            <div class="app-badge app-store">\n              <div class="badge-content">\n                <span class="badge-text">Download on the</span>\n                <span class="badge-title">App Store</span>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n\n      <!-- Right Section - Timings, Social, Legal -->\n      <div class="col-12 col-lg-6">\n        <div class="row g-4">\n          <!-- Timings -->\n          <div class="col-12 col-md-6">\n            <h5 class="section-title">Our Timings</h5>\n            <div class="timings">\n              <p class="mb-1">Monday - Sunday</p>\n              <p class="mb-0"><strong>11:00 AM - 05:00 AM</strong></p>\n            </div>\n          </div>\n\n          <!-- Social Media -->\n          <div class="col-12 col-md-6">\n            <h5 class="section-title">Follow Us</h5>\n            <div class="social-links">\n              <a href="#" class="social-link facebook" target="_blank" title="Facebook">\n                <i class="bi bi-facebook"></i>\n              </a>\n              <a href="#" class="social-link instagram" target="_blank" title="Instagram">\n                <i class="bi bi-instagram"></i>\n              </a>\n              <a href="#" class="social-link twitter" target="_blank" title="Twitter/X">\n                <i class="bi bi-twitter"></i>\n              </a>\n              <a href="#" class="social-link youtube" target="_blank" title="YouTube">\n                <i class="bi bi-youtube"></i>\n              </a>\n              <a href="#" class="social-link tiktok" target="_blank" title="TikTok">\n                <i class="bi bi-tiktok"></i>\n              </a>\n            </div>\n          </div>\n\n          <!-- Legal Links -->\n          <div class="col-12">\n            <div class="legal-links">\n              <a href="#" class="legal-link">Terms and conditions</a>\n              <span class="separator">|</span>\n              <a href="#" class="legal-link">Privacy Policy</a>\n              <span class="separator">|</span>\n              <a href="#" class="legal-link">Sitemap</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Copyright Section -->\n    <div class="footer-divider"></div>\n    <div class="copyright-section">\n      <p class="copyright-text">\n        \xA9 2025 Powered by\n        <span class="blink-logo">Blink Co.</span>\n      </p>\n    </div>\n  </div>\n</footer>\n\n<!-- Floating Action Buttons -->\n<div class="floating-buttons">\n  <!-- WhatsApp Button (shown only at top) -->\n  <button \n    *ngIf="showWhatsApp"\n    class="floating-btn whatsapp-btn"\n    (click)="openWhatsApp()"\n    title="Contact us on WhatsApp">\n    <i class="bi bi-whatsapp"></i>\n  </button>\n\n  <!-- Search Button (shown when scrolled down) -->\n  <button \n    *ngIf="showSearch"\n    class="floating-btn search-btn"\n    (click)="openSearch()"\n    title="Search">\n    <i class="bi bi-search"></i>\n  </button>\n\n  <!-- Scroll to Top Button (shown when scrolled down) -->\n  <button \n    *ngIf="showScrollTop"\n    class="floating-btn scroll-top-btn"\n    (click)="scrollToTop()"\n    title="Scroll to top">\n    <i class="bi bi-chevron-up"></i>\n  </button>\n</div>\n\n', styles: [`/* projects/client/src/app/layout/components/footer/footer.component.scss */
.main-footer {
  background-color: #000000;
  color: #ffffff;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  width: 100%;
  position: relative;
  z-index: 1;
}
.main-footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.main-footer .footer-logo .logo-container {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  position: relative;
  flex-wrap: wrap;
}
.main-footer .footer-logo .logo-container .logo-circles {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  margin-top: 0.5rem;
}
.main-footer .footer-logo .logo-container .logo-circles .circle {
  width: 10px;
  height: 10px;
  background-color: #ffd700;
  border-radius: 50%;
  display: block;
}
.main-footer .footer-logo .logo-container .logo-text {
  flex: 1;
  min-width: 200px;
}
.main-footer .footer-logo .logo-container .logo-text .logo-title {
  font-size: 2.8rem;
  font-weight: 900;
  color: #ffd700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family:
    "Arial Black",
    "Helvetica Neue",
    Arial,
    sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.1;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.3);
}
.main-footer .footer-logo .logo-container .logo-text .logo-subtitle {
  font-size: 0.8rem;
  color: #ffffff;
  margin: 0.5rem 0 0 0;
  letter-spacing: 1.5px;
  font-weight: 300;
}
.main-footer .footer-logo .logo-container .logo-icon {
  font-size: 1.8rem;
  color: #ffd700;
  margin-top: 0.5rem;
  flex-shrink: 0;
}
.main-footer .contact-info {
  margin-top: 2rem;
}
.main-footer .contact-info .contact-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.main-footer .contact-info .contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.6;
}
.main-footer .contact-info .contact-item i {
  color: #ffd700;
  margin-top: 0.25rem;
  flex-shrink: 0;
}
.main-footer .contact-info .contact-item a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
}
.main-footer .contact-info .contact-item a:hover {
  color: #ffd700;
  text-decoration: underline;
}
.main-footer .app-downloads {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}
.main-footer .app-downloads .app-button {
  display: inline-block;
  max-width: 200px;
  transition: transform 0.3s ease;
  text-decoration: none;
}
.main-footer .app-downloads .app-button:hover {
  transform: scale(1.05);
}
.main-footer .app-downloads .app-button .app-badge {
  background-color: #000000;
  border: 2px solid #333333;
  border-radius: 6px;
  padding: 0.6rem 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.3s ease;
  min-width: 180px;
}
.main-footer .app-downloads .app-button .app-badge .badge-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.main-footer .app-downloads .app-button .app-badge .badge-text {
  font-size: 0.65rem;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 0.15rem;
  display: block;
}
.main-footer .app-downloads .app-button .app-badge .badge-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.1;
  display: block;
}
.main-footer .app-downloads .app-button .app-badge.google-play::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm4.95-1.42l-2.27-2.27L19.34 12l-1.84-1.84 2.27-2.27L21.5 12l-1.74 1.7zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 0.75rem;
  flex-shrink: 0;
}
.main-footer .app-downloads .app-button .app-badge.app-store::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 0.75rem;
  flex-shrink: 0;
}
.main-footer .app-downloads .app-button .app-badge:hover {
  border-color: #ffd700;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
}
.main-footer .section-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.main-footer .timings {
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.8;
}
.main-footer .timings strong {
  color: #ffffff;
  font-size: 1.1rem;
}
.main-footer .social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.main-footer .social-links .social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.main-footer .social-links .social-link.facebook {
  background-color: #1877f2;
}
.main-footer .social-links .social-link.instagram {
  background:
    linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%);
}
.main-footer .social-links .social-link.twitter {
  background-color: #000000;
  border-color: #ffffff;
}
.main-footer .social-links .social-link.youtube {
  background-color: #ff0000;
}
.main-footer .social-links .social-link.tiktok {
  background-color: #000000;
  border-color: #ffffff;
}
.main-footer .social-links .social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
}
.main-footer .legal-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.main-footer .legal-links .legal-link {
  color: #ffffff;
  text-decoration: underline;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}
.main-footer .legal-links .legal-link:hover {
  color: #ffd700;
}
.main-footer .legal-links .separator {
  color: #666666;
}
.main-footer .footer-divider {
  height: 2px;
  background-color: #ffd700;
  margin: 2rem 0 1.5rem;
}
.main-footer .copyright-section {
  text-align: center;
  padding-top: 1rem;
}
.main-footer .copyright-section .copyright-text {
  color: #e0e0e0;
  font-size: 0.9rem;
  margin: 0;
}
.main-footer .copyright-section .copyright-text .blink-logo {
  color: #ffd700;
  font-weight: 600;
  margin-left: 0.5rem;
}
.floating-buttons {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.floating-buttons .floating-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  animation: fadeInUp 0.3s ease;
  position: relative;
}
.floating-buttons .floating-btn:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}
.floating-buttons .floating-btn:active {
  transform: translateY(-1px) scale(1.05);
}
.floating-buttons .floating-btn.whatsapp-btn {
  background-color: #25d366;
}
.floating-buttons .floating-btn.whatsapp-btn:hover {
  background-color: #20ba5a;
}
.floating-buttons .floating-btn.search-btn {
  background-color: #ffd700;
  color: #000000;
}
.floating-buttons .floating-btn.search-btn:hover {
  background-color: #ffed4e;
}
.floating-buttons .floating-btn.scroll-top-btn {
  background-color: #ffd700;
  color: #000000;
}
.floating-buttons .floating-btn.scroll-top-btn:hover {
  background-color: #ffed4e;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
  .main-footer {
    padding: 2rem 0 1rem;
  }
  .main-footer .footer-logo .logo-container .logo-text .logo-title {
    font-size: 2rem;
  }
  .main-footer .app-downloads .app-button {
    max-width: 150px;
  }
  .main-footer .social-links .social-link {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
  .floating-buttons {
    right: 1rem;
    bottom: 1rem;
  }
  .floating-buttons .floating-btn {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
}
/*# sourceMappingURL=footer.component.css.map */
`] }]
  }], null, { onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/components/footer/footer.component.ts", lineNumber: 11 });
})();

// projects/client/src/app/layout/main-layout/main-layout.component.ts
var MainLayoutComponent = class _MainLayoutComponent {
  router;
  isSidebarCollapsed = false;
  selectedCategoryId = null;
  constructor(router) {
    this.router = router;
  }
  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onCategorySelected(categoryId) {
    this.selectedCategoryId = categoryId;
    if (this.router.url !== "/menu") {
      this.router.navigate(["/menu"], { queryParams: { category: categoryId || null } });
    } else {
      this.router.navigate(["/menu"], {
        queryParams: { category: categoryId || null },
        queryParamsHandling: "merge"
      });
    }
  }
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 6, vars: 0, consts: [[1, "main-wrapper"], [3, "toggleSidebar", "categorySelected"], [1, "main-content"], [1, "content-container"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-top-navbar", 1);
      \u0275\u0275listener("toggleSidebar", function MainLayoutComponent_Template_app_top_navbar_toggleSidebar_1_listener() {
        return ctx.onToggleSidebar();
      })("categorySelected", function MainLayoutComponent_Template_app_top_navbar_categorySelected_1_listener($event) {
        return ctx.onCategorySelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "main", 2)(3, "div", 3);
      \u0275\u0275element(4, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "app-footer");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, TopNavbarComponent, FooterComponent], styles: ["\n\n.main-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f8f9fa;\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 0;\n  min-height: calc(100vh - 120px);\n  transition: margin-left 0.3s ease;\n}\n@media (max-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.content-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=main-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [CommonModule, RouterModule, TopNavbarComponent, SideNavbarComponent, FooterComponent], template: '<div class="main-wrapper">\n  <!-- Top Navigation Bar -->\n  <app-top-navbar \n    (toggleSidebar)="onToggleSidebar()"\n    (categorySelected)="onCategorySelected($event)">\n  </app-top-navbar>\n\n  <!-- Side Navigation Bar -->\n  <!-- <app-side-navbar></app-side-navbar> -->\n\n  <!-- Main Content Area -->\n  <main class="main-content">\n    <div class="content-container">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n\n  <!-- Footer -->\n  <app-footer></app-footer>\n</div>\n\n', styles: ["/* projects/client/src/app/layout/main-layout/main-layout.component.scss */\n.main-wrapper {\n  min-height: 100vh;\n  background-color: #f8f9fa;\n}\n.main-content {\n  margin-top: 0;\n  padding-top: 0;\n  min-height: calc(100vh - 120px);\n  transition: margin-left 0.3s ease;\n}\n@media (max-width: 991.98px) {\n  .main-content {\n    margin-left: 0;\n  }\n}\n.content-container {\n  padding: 2rem;\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/layout/main-layout/main-layout.component.ts", lineNumber: 15 });
})();

// projects/client/src/app/shared/components/page-not-found/page-not-found.component.ts
var PageNotFoundComponent = class _PageNotFoundComponent {
  static \u0275fac = function PageNotFoundComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageNotFoundComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 11, vars: 0, consts: [[1, "not-found-container"], [1, "text-center"], [1, "display-1"], [1, "mb-4"], [1, "lead", "mb-4"], ["routerLink", "/dashboard", 1, "btn", "btn-primary"], [1, "bi", "bi-house-door", "me-2"]], template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "Page Not Found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, " The page you are looking for doesn't exist or has been moved. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275element(9, "i", 6);
      \u0275\u0275text(10, " Go to Dashboard ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ["\n\n.not-found-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem;\n}\n.display-1[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: bold;\n  color: var(--bs-primary);\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=page-not-found.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageNotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-page-not-found", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="not-found-container">
      <div class="text-center">
        <h1 class="display-1">404</h1>
        <h2 class="mb-4">Page Not Found</h2>
        <p class="lead mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a routerLink="/dashboard" class="btn btn-primary">
          <i class="bi bi-house-door me-2"></i>
          Go to Dashboard
        </a>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;933f127db696dc0641c7bd620632b054a38ad212e463c49cd4333795625cdab5;/Users/apple/Flow Projects/Online-Ordeing-Web/UI/projects/client/src/app/shared/components/page-not-found/page-not-found.component.ts */\n.not-found-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem;\n}\n.display-1 {\n  font-size: 8rem;\n  font-weight: bold;\n  color: var(--bs-primary);\n}\nh2 {\n  font-size: 2.5rem;\n}\n/*# sourceMappingURL=page-not-found.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageNotFoundComponent, { className: "PageNotFoundComponent", filePath: "src/app/shared/components/page-not-found/page-not-found.component.ts", lineNumber: 44 });
})();

// projects/client/src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/menu",
    pathMatch: "full"
  },
  {
    path: "auth",
    // component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-3K4PXUNY.js").then((m) => m.LoginComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./chunk-K47SAOMW.js").then((m) => m.RegisterComponent)
      },
      {
        path: "forgot-password",
        loadComponent: () => import("./chunk-43XUKRQC.js").then((m) => m.ForgotPasswordComponent)
      },
      {
        path: "reset-password/:token",
        loadComponent: () => import("./chunk-QYMJ72UX.js").then((m) => m.ResetPasswordComponent)
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    component: MainLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-NDJDNUWR.js").then((m) => m.DashboardComponent)
      },
      {
        path: "menu",
        loadComponent: () => import("./chunk-LKXPED7G.js").then((m) => m.MenuComponent)
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-S4BNJ7XP.js").then((m) => m.ProfileComponent)
      },
      {
        path: "settings",
        loadComponent: () => import("./chunk-AZX3ZE6P.js").then((m) => m.SettingsComponent)
      },
      {
        path: "checkout",
        loadComponent: () => import("./chunk-SR6ISKGD.js").then((m) => m.CheckoutComponent)
      }
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

// projects/client/src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const storageService = inject(StorageService);
  const token = storageService.getItem(environment.tokenKey);
  const isAuthEndpoint = req.url.includes("/auth/login") || req.url.includes("/auth/register") || req.url.includes("/auth/refresh");
  if (token && !isAuthEndpoint) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};

// projects/client/src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  const router = inject(Router);
  const notificationService = inject(NotificationService);
  const storageService = inject(StorageService);
  return next(req).pipe(catchError((error) => {
    let errorMessage = "An unknown error occurred";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 0:
          errorMessage = "No internet connection. Please check your network.";
          break;
        case 400:
          errorMessage = error.error?.message || "Bad Request";
          break;
        case 401:
          errorMessage = "Unauthorized. Please login again.";
          storageService.removeItem(environment.tokenKey);
          storageService.removeItem(environment.refreshTokenKey);
          storageService.removeItem(environment.userKey);
          router.navigate(["/auth/login"]);
          break;
        case 403:
          errorMessage = "You do not have permission to access this resource.";
          break;
        case 404:
          errorMessage = "Resource not found.";
          break;
        case 500:
          errorMessage = "Internal server error. Please try again later.";
          break;
        case 503:
          errorMessage = "Service unavailable. Please try again later.";
          break;
        default:
          errorMessage = error.error?.message || `Error: ${error.status}`;
      }
    }
    if (error.status !== 401) {
      notificationService.error(errorMessage);
    }
    if (environment.enableLogging) {
      console.error("HTTP Error:", error);
    }
    return throwError(() => error);
  }));
};

// projects/client/src/app/core/services/loading.service.ts
var LoadingService = class _LoadingService {
  loadingSubject = new BehaviorSubject(false);
  loading$ = this.loadingSubject.asObservable();
  requestCount = 0;
  /**
   * Show loading indicator
   */
  show() {
    this.requestCount++;
    if (this.requestCount > 0) {
      this.loadingSubject.next(true);
    }
  }
  /**
   * Hide loading indicator
   */
  hide() {
    this.requestCount--;
    if (this.requestCount <= 0) {
      this.requestCount = 0;
      this.loadingSubject.next(false);
    }
  }
  /**
   * Get loading state
   */
  get isLoading() {
    return this.loadingSubject.value;
  }
  static \u0275fac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// projects/client/src/app/core/interceptors/loading.interceptor.ts
var loadingInterceptor = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();
  return next(req).pipe(finalize(() => {
    loadingService.hide();
  }));
};

// node_modules/@ngx-translate/core/fesm2022/ngx-translate-core.mjs
var TranslateLoader = class {
};
var TranslateFakeLoader = class _TranslateFakeLoader extends TranslateLoader {
  getTranslation(lang) {
    void lang;
    return of({});
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateFakeLoader_BaseFactory;
    return function TranslateFakeLoader_Factory(__ngFactoryType__) {
      return (\u0275TranslateFakeLoader_BaseFactory || (\u0275TranslateFakeLoader_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateFakeLoader)))(__ngFactoryType__ || _TranslateFakeLoader);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateFakeLoader,
    factory: _TranslateFakeLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateFakeLoader, [{
    type: Injectable
  }], null, null);
})();
var MissingTranslationHandler = class {
};
var FakeMissingTranslationHandler = class _FakeMissingTranslationHandler {
  handle(params) {
    return params.key;
  }
  static \u0275fac = function FakeMissingTranslationHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FakeMissingTranslationHandler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FakeMissingTranslationHandler,
    factory: _FakeMissingTranslationHandler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FakeMissingTranslationHandler, [{
    type: Injectable
  }], null, null);
})();
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true;
  const t1 = typeof o1, t2 = typeof o2;
  let length, key, keySet;
  if (t1 == t2 && t1 == "object") {
    if (Array.isArray(o1)) {
      if (!Array.isArray(o2)) return false;
      if ((length = o1.length) == o2.length) {
        for (key = 0; key < length; key++) {
          if (!equals(o1[key], o2[key])) return false;
        }
        return true;
      }
    } else {
      if (Array.isArray(o2)) {
        return false;
      }
      keySet = /* @__PURE__ */ Object.create(null);
      for (key in o1) {
        if (!equals(o1[key], o2[key])) {
          return false;
        }
        keySet[key] = true;
      }
      for (key in o2) {
        if (!(key in keySet) && typeof o2[key] !== "undefined") {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}
function isDefined(value) {
  return typeof value !== "undefined" && value !== null;
}
function isDict(value) {
  return isObject(value) && !isArray(value) && value !== null;
}
function isObject(value) {
  return typeof value === "object";
}
function isArray(value) {
  return Array.isArray(value);
}
function isString(value) {
  return typeof value === "string";
}
function isFunction(value) {
  return typeof value === "function";
}
function mergeDeep(target, source) {
  const output = Object.assign({}, target);
  if (!isObject(target)) {
    return mergeDeep({}, source);
  }
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isDict(source[key])) {
        if (key in target) {
          output[key] = mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, {
            [key]: source[key]
          });
        }
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }
  return output;
}
function getValue(target, key) {
  const keys = key.split(".");
  key = "";
  do {
    key += keys.shift();
    if (isDefined(target) && isDefined(target[key]) && (isDict(target[key]) || isArray(target[key]) || !keys.length)) {
      target = target[key];
      key = "";
    } else if (!keys.length) {
      target = void 0;
    } else {
      key += ".";
    }
  } while (keys.length);
  return target;
}
function setValue(target, key, value) {
  const keys = key.split(".");
  let current = target;
  for (let i = 0; i < keys.length; i++) {
    const key2 = keys[i];
    if (i === keys.length - 1) {
      current[key2] = value;
    } else {
      if (!current[key2] || !isDict(current[key2])) {
        current[key2] = {};
      }
      current = current[key2];
    }
  }
}
var TranslateParser = class {
};
var TranslateDefaultParser = class _TranslateDefaultParser extends TranslateParser {
  templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  interpolate(expr, params) {
    if (isString(expr)) {
      return this.interpolateString(expr, params);
    } else if (isFunction(expr)) {
      return this.interpolateFunction(expr, params);
    }
    return void 0;
  }
  interpolateFunction(fn, params) {
    return fn(params);
  }
  interpolateString(expr, params) {
    if (!params) {
      return expr;
    }
    return expr.replace(this.templateMatcher, (substring, b) => {
      const r = getValue(params, b);
      return isDefined(r) ? r : substring;
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateDefaultParser_BaseFactory;
    return function TranslateDefaultParser_Factory(__ngFactoryType__) {
      return (\u0275TranslateDefaultParser_BaseFactory || (\u0275TranslateDefaultParser_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateDefaultParser)))(__ngFactoryType__ || _TranslateDefaultParser);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateDefaultParser,
    factory: _TranslateDefaultParser.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDefaultParser, [{
    type: Injectable
  }], null, null);
})();
var TranslateCompiler = class {
};
var TranslateFakeCompiler = class _TranslateFakeCompiler extends TranslateCompiler {
  compile(value, lang) {
    void lang;
    return value;
  }
  compileTranslations(translations, lang) {
    void lang;
    return translations;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TranslateFakeCompiler_BaseFactory;
    return function TranslateFakeCompiler_Factory(__ngFactoryType__) {
      return (\u0275TranslateFakeCompiler_BaseFactory || (\u0275TranslateFakeCompiler_BaseFactory = \u0275\u0275getInheritedFactory(_TranslateFakeCompiler)))(__ngFactoryType__ || _TranslateFakeCompiler);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateFakeCompiler,
    factory: _TranslateFakeCompiler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateFakeCompiler, [{
    type: Injectable
  }], null, null);
})();
var TranslateStore = class {
  /**
   * The default lang to fallback when translations are missing on the current lang
   */
  defaultLang;
  /**
   * The lang currently used
   */
  currentLang = this.defaultLang;
  /**
   * a list of translations per lang
   */
  translations = {};
  /**
   * an array of langs
   */
  langs = [];
  /**
   * An EventEmitter to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
   */
  onTranslationChange = new EventEmitter();
  /**
   * An EventEmitter to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
   */
  onLangChange = new EventEmitter();
  /**
   * An EventEmitter to listen to default lang change events
   * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
   */
  onDefaultLangChange = new EventEmitter();
};
var ISOLATE_TRANSLATE_SERVICE = new InjectionToken("ISOLATE_TRANSLATE_SERVICE");
var USE_DEFAULT_LANG = new InjectionToken("USE_DEFAULT_LANG");
var DEFAULT_LANGUAGE = new InjectionToken("DEFAULT_LANGUAGE");
var USE_EXTEND = new InjectionToken("USE_EXTEND");
var makeObservable = (value) => {
  return isObservable(value) ? value : of(value);
};
var TranslateService = class _TranslateService {
  store;
  currentLoader;
  compiler;
  parser;
  missingTranslationHandler;
  useDefaultLang;
  extend;
  loadingTranslations;
  pending = false;
  _translationRequests = {};
  lastUseLanguage = null;
  /**
   * An EventEmitter to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
   */
  get onTranslationChange() {
    return this.store.onTranslationChange;
  }
  /**
   * An EventEmitter to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
   */
  get onLangChange() {
    return this.store.onLangChange;
  }
  /**
   * An EventEmitter to listen to default lang change events
   * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
   */
  get onDefaultLangChange() {
    return this.store.onDefaultLangChange;
  }
  /**
   * The default lang to fallback when translations are missing on the current lang
   */
  get defaultLang() {
    return this.store.defaultLang;
  }
  set defaultLang(defaultLang) {
    this.store.defaultLang = defaultLang;
  }
  /**
   * The lang currently used
   */
  get currentLang() {
    return this.store.currentLang;
  }
  set currentLang(currentLang) {
    this.store.currentLang = currentLang;
  }
  /**
   * an array of langs
   */
  get langs() {
    return this.store.langs;
  }
  set langs(langs) {
    this.store.langs = langs;
  }
  /**
   * a list of translations per lang
   */
  get translations() {
    return this.store.translations;
  }
  set translations(translations) {
    this.store.translations = translations;
  }
  /**
   *
   * @param store an instance of the store (that is supposed to be unique)
   * @param currentLoader An instance of the loader currently used
   * @param compiler An instance of the compiler currently used
   * @param parser An instance of the parser currently used
   * @param missingTranslationHandler A handler for missing translations.
   * @param useDefaultLang whether we should use default language translation when current language translation is missing.
   * @param isolate whether this service should use the store or not
   * @param extend To make a child module extend (and use) translations from parent modules.
   * @param defaultLanguage Set the default language using configuration
   */
  constructor(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang = true, isolate = false, extend = false, defaultLanguage) {
    this.store = store;
    this.currentLoader = currentLoader;
    this.compiler = compiler;
    this.parser = parser;
    this.missingTranslationHandler = missingTranslationHandler;
    this.useDefaultLang = useDefaultLang;
    this.extend = extend;
    if (isolate) {
      this.store = new TranslateStore();
    }
    if (defaultLanguage) {
      this.setDefaultLang(defaultLanguage);
    }
  }
  /**
   * Sets the default language to use as a fallback
   */
  setDefaultLang(lang) {
    if (lang === this.defaultLang) {
      return;
    }
    const pending = this.retrieveTranslations(lang);
    if (typeof pending !== "undefined") {
      if (this.defaultLang == null) {
        this.defaultLang = lang;
      }
      pending.pipe(take(1)).subscribe(() => {
        this.changeDefaultLang(lang);
      });
    } else {
      this.changeDefaultLang(lang);
    }
  }
  /**
   * Gets the default language used
   */
  getDefaultLang() {
    return this.defaultLang;
  }
  /**
   * Changes the lang currently used
   */
  use(lang) {
    this.lastUseLanguage = lang;
    if (lang === this.currentLang) {
      return of(this.translations[lang]);
    }
    if (!this.currentLang) {
      this.currentLang = lang;
    }
    const pending = this.retrieveTranslations(lang);
    if (isObservable(pending)) {
      pending.pipe(take(1)).subscribe(() => {
        this.changeLang(lang);
      });
      return pending;
    } else {
      this.changeLang(lang);
      return of(this.translations[lang]);
    }
  }
  /**
   * Changes the current lang
   */
  changeLang(lang) {
    if (lang !== this.lastUseLanguage) {
      return;
    }
    this.currentLang = lang;
    this.onLangChange.emit({
      lang,
      translations: this.translations[lang]
    });
    if (this.defaultLang == null) {
      this.changeDefaultLang(lang);
    }
  }
  /**
   * Retrieves the given translations
   */
  retrieveTranslations(lang) {
    if (typeof this.translations[lang] === "undefined" || this.extend) {
      this._translationRequests[lang] = this._translationRequests[lang] || this.loadAndCompileTranslations(lang);
      return this._translationRequests[lang];
    }
    return void 0;
  }
  /**
   * Gets an object of translations for a given language with the current loader
   * and passes it through the compiler
   *
   * @deprecated This function is meant for internal use. There should
   * be no reason to use outside this service. You can plug into this
   * functionality by using a customer TranslateLoader or TranslateCompiler.
   * To load a new language use setDefaultLang() and/or use()
   */
  getTranslation(lang) {
    return this.loadAndCompileTranslations(lang);
  }
  loadAndCompileTranslations(lang) {
    this.pending = true;
    const loadingTranslations = this.currentLoader.getTranslation(lang).pipe(shareReplay(1), take(1));
    this.loadingTranslations = loadingTranslations.pipe(map((res) => this.compiler.compileTranslations(res, lang)), shareReplay(1), take(1));
    this.loadingTranslations.subscribe({
      next: (res) => {
        this.translations[lang] = this.extend && this.translations[lang] ? __spreadValues(__spreadValues({}, res), this.translations[lang]) : res;
        this.updateLangs();
        this.pending = false;
      },
      error: (err) => {
        void err;
        this.pending = false;
      }
    });
    return loadingTranslations;
  }
  /**
   * Manually sets an object of translations for a given language
   * after passing it through the compiler
   */
  setTranslation(lang, translations, shouldMerge = false) {
    const interpolatableTranslations = this.compiler.compileTranslations(translations, lang);
    if ((shouldMerge || this.extend) && this.translations[lang]) {
      this.translations[lang] = mergeDeep(this.translations[lang], interpolatableTranslations);
    } else {
      this.translations[lang] = interpolatableTranslations;
    }
    this.updateLangs();
    this.onTranslationChange.emit({
      lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Returns an array of currently available langs
   */
  getLangs() {
    return this.langs;
  }
  /**
   * Add available languages
   */
  addLangs(langs) {
    const newLangs = langs.filter((lang) => !this.langs.includes(lang));
    if (newLangs.length > 0) {
      this.langs = [...this.langs, ...newLangs];
    }
  }
  /**
   * Update the list of available languages
   */
  updateLangs() {
    this.addLangs(Object.keys(this.translations));
  }
  getParsedResultForKey(translations, key, interpolateParams2) {
    let res;
    if (translations) {
      res = this.runInterpolation(getValue(translations, key), interpolateParams2);
    }
    if (res === void 0 && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
      res = this.runInterpolation(getValue(this.translations[this.defaultLang], key), interpolateParams2);
    }
    if (res === void 0) {
      const params = {
        key,
        translateService: this
      };
      if (typeof interpolateParams2 !== "undefined") {
        params.interpolateParams = interpolateParams2;
      }
      res = this.missingTranslationHandler.handle(params);
    }
    return res !== void 0 ? res : key;
  }
  runInterpolation(translations, interpolateParams2) {
    if (isArray(translations)) {
      return translations.map((translation) => this.runInterpolation(translation, interpolateParams2));
    } else if (isDict(translations)) {
      const result = {};
      for (const key in translations) {
        const res = this.runInterpolation(translations[key], interpolateParams2);
        if (res !== void 0) {
          result[key] = res;
        }
      }
      return result;
    } else {
      return this.parser.interpolate(translations, interpolateParams2);
    }
  }
  /**
   * Returns the parsed result of the translations
   */
  getParsedResult(translations, key, interpolateParams2) {
    if (key instanceof Array) {
      const result = {};
      let observables = false;
      for (const k of key) {
        result[k] = this.getParsedResultForKey(translations, k, interpolateParams2);
        observables = observables || isObservable(result[k]);
      }
      if (!observables) {
        return result;
      }
      const sources = key.map((k) => makeObservable(result[k]));
      return forkJoin(sources).pipe(map((arr) => {
        const obj = {};
        arr.forEach((value, index) => {
          obj[key[index]] = value;
        });
        return obj;
      }));
    }
    return this.getParsedResultForKey(translations, key, interpolateParams2);
  }
  /**
   * Gets the translated value of a key (or an array of keys)
   * @returns the translated key, or an object of translated keys
   */
  get(key, interpolateParams2) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    if (this.pending) {
      return this.loadingTranslations.pipe(concatMap((res) => {
        return makeObservable(this.getParsedResult(res, key, interpolateParams2));
      }));
    }
    return makeObservable(this.getParsedResult(this.translations[this.currentLang], key, interpolateParams2));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the translation changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  getStreamOnTranslationChange(key, interpolateParams2) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" is required and cannot be empty`);
    }
    return concat(defer(() => this.get(key, interpolateParams2)), this.onTranslationChange.pipe(switchMap((event) => {
      const res = this.getParsedResult(event.translations, key, interpolateParams2);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the language changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  stream(key, interpolateParams2) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    return concat(defer(() => this.get(key, interpolateParams2)), this.onLangChange.pipe(switchMap((event) => {
      const res = this.getParsedResult(event.translations, key, interpolateParams2);
      return makeObservable(res);
    })));
  }
  /**
   * Returns a translation instantly from the internal state of loaded translation.
   * All rules regarding the current language, the preferred language of even fallback languages
   * will be used except any promise handling.
   */
  instant(key, interpolateParams2) {
    if (!isDefined(key) || key.length === 0) {
      throw new Error('Parameter "key" is required and cannot be empty');
    }
    const result = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams2);
    if (isObservable(result)) {
      if (Array.isArray(key)) {
        return key.reduce((acc, currKey) => {
          acc[currKey] = currKey;
          return acc;
        }, {});
      }
      return key;
    }
    return result;
  }
  /**
   * Sets the translated value of a key, after compiling it
   */
  set(key, translation, lang = this.currentLang) {
    setValue(this.translations[lang], key, isString(translation) ? this.compiler.compile(translation, lang) : this.compiler.compileTranslations(translation, lang));
    this.updateLangs();
    this.onTranslationChange.emit({
      lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Changes the default lang
   */
  changeDefaultLang(lang) {
    this.defaultLang = lang;
    this.onDefaultLangChange.emit({
      lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Allows to reload the lang file from the file
   */
  reloadLang(lang) {
    this.resetLang(lang);
    return this.loadAndCompileTranslations(lang);
  }
  /**
   * Deletes inner translation
   */
  resetLang(lang) {
    delete this._translationRequests[lang];
    delete this.translations[lang];
  }
  /**
   * Returns the language code name from the browser, e.g. "de"
   */
  getBrowserLang() {
    if (typeof window === "undefined" || !window.navigator) {
      return void 0;
    }
    const browserLang = this.getBrowserCultureLang();
    return browserLang ? browserLang.split(/[-_]/)[0] : void 0;
  }
  /**
   * Returns the culture language code name from the browser, e.g. "de-DE"
   */
  getBrowserCultureLang() {
    if (typeof window === "undefined" || typeof window.navigator === "undefined") {
      return void 0;
    }
    return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
  }
  static \u0275fac = function TranslateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateService)(\u0275\u0275inject(TranslateStore), \u0275\u0275inject(TranslateLoader), \u0275\u0275inject(TranslateCompiler), \u0275\u0275inject(TranslateParser), \u0275\u0275inject(MissingTranslationHandler), \u0275\u0275inject(USE_DEFAULT_LANG), \u0275\u0275inject(ISOLATE_TRANSLATE_SERVICE), \u0275\u0275inject(USE_EXTEND), \u0275\u0275inject(DEFAULT_LANGUAGE));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateService,
    factory: _TranslateService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslateStore
  }, {
    type: TranslateLoader
  }, {
    type: TranslateCompiler
  }, {
    type: TranslateParser
  }, {
    type: MissingTranslationHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [USE_DEFAULT_LANG]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [ISOLATE_TRANSLATE_SERVICE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [USE_EXTEND]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DEFAULT_LANGUAGE]
    }]
  }], null);
})();
var TranslateDirective = class _TranslateDirective {
  translateService;
  element;
  _ref;
  key;
  lastParams;
  currentParams;
  onLangChangeSub;
  onDefaultLangChangeSub;
  onTranslationChangeSub;
  set translate(key) {
    if (key) {
      this.key = key;
      this.checkNodes();
    }
  }
  set translateParams(params) {
    if (!equals(this.currentParams, params)) {
      this.currentParams = params;
      this.checkNodes(true);
    }
  }
  constructor(translateService, element, _ref) {
    this.translateService = translateService;
    this.element = element;
    this._ref = _ref;
    if (!this.onTranslationChangeSub) {
      this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe((event) => {
        if (event.lang === this.translateService.currentLang) {
          this.checkNodes(true, event.translations);
        }
      });
    }
    if (!this.onLangChangeSub) {
      this.onLangChangeSub = this.translateService.onLangChange.subscribe((event) => {
        this.checkNodes(true, event.translations);
      });
    }
    if (!this.onDefaultLangChangeSub) {
      this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe((event) => {
        void event;
        this.checkNodes(true);
      });
    }
  }
  ngAfterViewChecked() {
    this.checkNodes();
  }
  checkNodes(forceUpdate = false, translations) {
    let nodes = this.element.nativeElement.childNodes;
    if (!nodes.length) {
      this.setContent(this.element.nativeElement, this.key);
      nodes = this.element.nativeElement.childNodes;
    }
    nodes.forEach((n) => {
      const node = n;
      if (node.nodeType === 3) {
        let key;
        if (forceUpdate) {
          node.lastKey = null;
        }
        if (isDefined(node.lookupKey)) {
          key = node.lookupKey;
        } else if (this.key) {
          key = this.key;
        } else {
          const content = this.getContent(node);
          const trimmedContent = content.trim();
          if (trimmedContent.length) {
            node.lookupKey = trimmedContent;
            if (content !== node.currentValue) {
              key = trimmedContent;
              node.originalContent = content || node.originalContent;
            } else if (node.originalContent) {
              key = node.originalContent.trim();
            }
          }
        }
        this.updateValue(key, node, translations);
      }
    });
  }
  updateValue(key, node, translations) {
    if (key) {
      if (node.lastKey === key && this.lastParams === this.currentParams) {
        return;
      }
      this.lastParams = this.currentParams;
      const onTranslation = (res) => {
        if (res !== key || !node.lastKey) {
          node.lastKey = key;
        }
        if (!node.originalContent) {
          node.originalContent = this.getContent(node);
        }
        node.currentValue = isDefined(res) ? res : node.originalContent || key;
        this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
        this._ref.markForCheck();
      };
      if (isDefined(translations)) {
        const res = this.translateService.getParsedResult(translations, key, this.currentParams);
        if (isObservable(res)) {
          res.subscribe({
            next: onTranslation
          });
        } else {
          onTranslation(res);
        }
      } else {
        this.translateService.get(key, this.currentParams).subscribe(onTranslation);
      }
    }
  }
  getContent(node) {
    return isDefined(node.textContent) ? node.textContent : node.data;
  }
  setContent(node, content) {
    if (isDefined(node.textContent)) {
      node.textContent = content;
    } else {
      node.data = content;
    }
  }
  ngOnDestroy() {
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }
    if (this.onDefaultLangChangeSub) {
      this.onDefaultLangChangeSub.unsubscribe();
    }
    if (this.onTranslationChangeSub) {
      this.onTranslationChangeSub.unsubscribe();
    }
  }
  static \u0275fac = function TranslateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateDirective)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TranslateDirective,
    selectors: [["", "translate", ""], ["", "ngx-translate", ""]],
    inputs: {
      translate: "translate",
      translateParams: "translateParams"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "[translate],[ngx-translate]",
      standalone: true
    }]
  }], () => [{
    type: TranslateService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    translate: [{
      type: Input
    }],
    translateParams: [{
      type: Input
    }]
  });
})();
var TranslatePipe = class _TranslatePipe {
  translate;
  _ref;
  value = "";
  lastKey = null;
  lastParams = [];
  onTranslationChange;
  onLangChange;
  onDefaultLangChange;
  constructor(translate, _ref) {
    this.translate = translate;
    this._ref = _ref;
  }
  updateValue(key, interpolateParams2, translations) {
    const onTranslation = (res) => {
      this.value = res !== void 0 ? res : key;
      this.lastKey = key;
      this._ref.markForCheck();
    };
    if (translations) {
      const res = this.translate.getParsedResult(translations, key, interpolateParams2);
      if (isObservable(res)) {
        res.subscribe(onTranslation);
      } else {
        onTranslation(res);
      }
    }
    this.translate.get(key, interpolateParams2).subscribe(onTranslation);
  }
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  transform(query, ...args) {
    if (!query || !query.length) {
      return query;
    }
    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }
    let interpolateParams2 = void 0;
    if (isDefined(args[0]) && args.length) {
      if (isString(args[0]) && args[0].length) {
        const validArgs = args[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
        try {
          interpolateParams2 = JSON.parse(validArgs);
        } catch (e) {
          void e;
          throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
        }
      } else if (isDict(args[0])) {
        interpolateParams2 = args[0];
      }
    }
    this.lastKey = query;
    this.lastParams = args;
    this.updateValue(query, interpolateParams2);
    this._dispose();
    if (!this.onTranslationChange) {
      this.onTranslationChange = this.translate.onTranslationChange.subscribe((event) => {
        if (this.lastKey && event.lang === this.translate.currentLang) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams2, event.translations);
        }
      });
    }
    if (!this.onLangChange) {
      this.onLangChange = this.translate.onLangChange.subscribe((event) => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams2, event.translations);
        }
      });
    }
    if (!this.onDefaultLangChange) {
      this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams2);
        }
      });
    }
    return this.value;
  }
  /**
   * Clean any existing subscription to change events
   */
  _dispose() {
    if (typeof this.onTranslationChange !== "undefined") {
      this.onTranslationChange.unsubscribe();
      this.onTranslationChange = void 0;
    }
    if (typeof this.onLangChange !== "undefined") {
      this.onLangChange.unsubscribe();
      this.onLangChange = void 0;
    }
    if (typeof this.onDefaultLangChange !== "undefined") {
      this.onDefaultLangChange.unsubscribe();
      this.onDefaultLangChange = void 0;
    }
  }
  ngOnDestroy() {
    this._dispose();
  }
  static \u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslatePipe)(\u0275\u0275directiveInject(TranslateService, 16), \u0275\u0275directiveInject(ChangeDetectorRef, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "translate",
    type: _TranslatePipe,
    pure: false
  });
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslatePipe,
    factory: _TranslatePipe.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Injectable
  }, {
    type: Pipe,
    args: [{
      name: "translate",
      standalone: true,
      pure: false
      // required to update the value when the promise is resolved
    }]
  }], () => [{
    type: TranslateService
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var TranslateModule = class _TranslateModule {
  /**
   * Use this method in your root module to provide the TranslateService
   */
  static forRoot(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [config.loader || {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader
      }, config.compiler || {
        provide: TranslateCompiler,
        useClass: TranslateFakeCompiler
      }, config.parser || {
        provide: TranslateParser,
        useClass: TranslateDefaultParser
      }, config.missingTranslationHandler || {
        provide: MissingTranslationHandler,
        useClass: FakeMissingTranslationHandler
      }, TranslateStore, {
        provide: ISOLATE_TRANSLATE_SERVICE,
        useValue: config.isolate
      }, {
        provide: USE_DEFAULT_LANG,
        useValue: config.useDefaultLang
      }, {
        provide: USE_EXTEND,
        useValue: config.extend
      }, {
        provide: DEFAULT_LANGUAGE,
        useValue: config.defaultLanguage
      }, TranslateService]
    };
  }
  /**
   * Use this method in your other (non-root) modules to import the directive/pipe
   */
  static forChild(config = {}) {
    return {
      ngModule: _TranslateModule,
      providers: [config.loader || {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader
      }, config.compiler || {
        provide: TranslateCompiler,
        useClass: TranslateFakeCompiler
      }, config.parser || {
        provide: TranslateParser,
        useClass: TranslateDefaultParser
      }, config.missingTranslationHandler || {
        provide: MissingTranslationHandler,
        useClass: FakeMissingTranslationHandler
      }, {
        provide: ISOLATE_TRANSLATE_SERVICE,
        useValue: config.isolate
      }, {
        provide: USE_DEFAULT_LANG,
        useValue: config.useDefaultLang
      }, {
        provide: USE_EXTEND,
        useValue: config.extend
      }, {
        provide: DEFAULT_LANGUAGE,
        useValue: config.defaultLanguage
      }, TranslateService]
    };
  }
  static \u0275fac = function TranslateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TranslateModule,
    imports: [TranslatePipe, TranslateDirective],
    exports: [TranslatePipe, TranslateDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateModule, [{
    type: NgModule,
    args: [{
      imports: [TranslatePipe, TranslateDirective],
      exports: [TranslatePipe, TranslateDirective]
    }]
  }], null, null);
})();

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(String), \u0275\u0275inject(String));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }], null);
})();

// projects/client/src/app/app.config.ts
function HttpLoaderFactory(http) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      authInterceptor,
      errorInterceptor,
      loadingInterceptor
    ])),
    provideAnimations(),
    provideToastr({
      timeOut: 3e3,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    }),
    importProvidersFrom(TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ]
};

// projects/client/src/app/shared/components/loader/loader.component.ts
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4, "Loading...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 5);
    \u0275\u0275text(6, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
var LoaderComponent = class _LoaderComponent {
  loadingService;
  constructor(loadingService) {
    this.loadingService = loadingService;
  }
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)(\u0275\u0275directiveInject(LoadingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 3, consts: [["class", "loader-overlay", 4, "ngIf"], [1, "loader-overlay"], [1, "loader-container"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-white"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, LoaderComponent_div_0_Template, 7, 0, "div", 0);
      \u0275\u0275pipe(1, "async");
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(1, 1, ctx.loadingService.loading$));
    }
  }, dependencies: [CommonModule, NgIf, AsyncPipe], styles: ["\n\n.loader-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.loader-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=loader.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", standalone: true, imports: [CommonModule], template: `
    <div class="loader-overlay" *ngIf="loadingService.loading$ | async">
      <div class="loader-container">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-white">Loading...</p>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;a8f91b36a27ad01540d206c0ca2a9f7ed3a41979921b1353bb75270ec3bc19e2;/Users/apple/Flow Projects/Online-Ordeing-Web/UI/projects/client/src/app/shared/components/loader/loader.component.ts */\n.loader-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.loader-container {\n  text-align: center;\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=loader.component.css.map */\n"] }]
  }], () => [{ type: LoadingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/shared/components/loader/loader.component.ts", lineNumber: 43 });
})();

// projects/client/src/app/app.component.ts
var AppComponent = class _AppComponent {
  authService;
  title = "angular-base-template";
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.checkAuthentication();
  }
  checkAuthentication() {
    if (this.authService.isAuthenticated) {
      this.authService.getCurrentUser().subscribe();
    }
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-loader")(1, "router-outlet");
    }
  }, dependencies: [RouterOutlet, LoaderComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, LoaderComponent], template: `
    <app-loader></app-loader>
    <router-outlet></router-outlet>
  ` }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 16 });
})();

// projects/client/src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/util-D9FfmVnv.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.15
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
