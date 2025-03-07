import {
  require_client
} from "/build/_shared/chunk-O4BRYNJ4.js";
import "/build/_shared/chunk-FVLBLDUK.js";
import "/build/_shared/chunk-IWICR62P.js";
import {
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  createAnimation,
  lifecycle,
  setPageHidden,
  transition
} from "/build/_shared/chunk-2GDRWQF7.js";
import {
  printIonWarning
} from "/build/_shared/chunk-KVR6M7Z5.js";
import {
  config,
  getIonMode,
  initialize
} from "/build/_shared/chunk-22HA6GW3.js";
import {
  Build,
  H,
  Host,
  createEvent,
  getAssetPath,
  h,
  proxyCustomElement,
  readTask,
  writeTask
} from "/build/_shared/chunk-FVCVUIKX.js";
import "/build/_shared/chunk-IS7YQ55Q.js";
import {
  Keyboard,
  KeyboardResize
} from "/build/_shared/chunk-V5BXH2MB.js";
import {
  assert,
  componentOnReady,
  hasLazyBuild,
  inheritAttributes,
  shallowEqualStringMap
} from "/build/_shared/chunk-JX7OISDU.js";
import {
  doc,
  win
} from "/build/_shared/chunk-HHCXQZYH.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-PQ3TBHPN.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-VPG2C27M.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// ../node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type)
          return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type)
          return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function isValidElementType(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? true : false;
      }
      function disabledLog() {
      }
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: assign({}, props, { value: prevLog }),
            info: assign({}, props, { value: prevInfo }),
            warn: assign({}, props, { value: prevWarn }),
            error: assign({}, props, { value: prevError }),
            group: assign({}, props, { value: prevGroup }),
            groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign({}, props, { value: prevGroupEnd })
          });
        }
        0 > disabledDepth && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry)
          return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame)
          return frame;
        reentry = true;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      var control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            ); )
              _RunInRootFrame$Deter++;
            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
              for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                _RunInRootFrame$Deter--;
            for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
              if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                      var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                      fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                      "function" === typeof fn && componentFrameCache.set(fn, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
      }
      function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type)
          return "";
        if ("function" === typeof type) {
          var prototype = type.prototype;
          return describeNativeComponentFrame(
            type,
            !(!prototype || !prototype.isReactComponent)
          );
        }
        if ("string" === typeof type)
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return type = describeNativeComponentFrame(type.render, false), type;
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
              prototype = type._payload;
              type = type._init;
              try {
                return describeUnknownElementTypeFrameInDEV(type(prototype));
              } catch (x) {
              }
          }
        return "";
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function hasValidKey(config2) {
        if (hasOwnProperty.call(config2, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
          if (getter && getter.isReactWarning)
            return false;
        }
        return void 0 !== config2.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          void 0,
          void 0,
          oldElement._owner,
          oldElement.props
        );
        newKey._store.validated = oldElement._store.validated;
        return newKey;
      }
      function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
          if (isArrayImpl(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = 1);
          else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
            for (; !(node = i.next()).done; )
              isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
          ownerHasKeyUseWarning[parentType] = true;
          var childOwner = "";
          element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
          var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
          ReactSharedInternals.getCurrentStack = function() {
            var stack = describeUnknownElementTypeFrameInDEV(element.type);
            prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
            return stack;
          };
          console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            parentType,
            childOwner
          );
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      }
      function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function noop$1() {
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type)
          children = null;
        var invokeCallback = false;
        if (null === children)
          invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
            return c;
          })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children)
          return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ctor = payload._result;
          ctor = ctor();
          ctor.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 1, payload._result = moduleObject;
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status)
                payload._status = 2, payload._result = error;
            }
          );
          -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status)
          return ctor = payload._result, void 0 === ctor && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ctor
          ), "default" in ctor || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ctor
          ), ctor.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function noop() {
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else
            ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else
                  break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, fnName;
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null
      }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      disabledLog.__reactDisabledLog = true;
      var prefix, suffix, reentry = false;
      var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
      var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var ownerHasKeyUseWarning = {}, didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event))
            return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$2) {
                      ReactSharedInternals.thrownErrors.push(error$2);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else
                    resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cloneElement = function(element, config2, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config2) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config2, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config2,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config2.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config2) && (checkKeyStringCoercion(config2.key), key = "" + config2.key);
          for (propName in config2)
            !hasOwnProperty.call(config2, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config2.ref || (props[propName] = config2[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName)
          props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props);
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key], props.type);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config2, children) {
        if (isValidElementType(type))
          for (var i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i], type);
        else {
          i = "";
          if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
            i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          if (null === type)
            var typeString = "null";
          else
            isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            typeString,
            i
          );
        }
        var propName;
        i = {};
        typeString = null;
        if (null != config2)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config2) || "key" in config2 || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config2) && (checkKeyStringCoercion(config2.key), typeString = "" + config2.key), config2)
            hasOwnProperty.call(config2, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config2[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength)
          i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        typeString && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement;
      exports.lazy = function(ctor) {
        return {
          $$typeof: REACT_LAZY_TYPE,
          _payload: { _status: -1, _result: ctor },
          _init: lazyInitializer
        };
      };
      exports.memo = function(type, compare) {
        isValidElementType(type) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.0.0";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../node_modules/react/index.js
var require_react2 = __commonJS({
  "../node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// ../node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({
  "../node_modules/react-dom/cjs/react-dom.development.js"(exports) {
    "use strict";
    (function() {
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function createPortal$1(children, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
          testStringCoercion(key);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        JSCompiler_inline_result && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
        ), testStringCoercion(key));
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children,
          containerInfo,
          implementation
        };
      }
      function getCrossOriginStringAs(as, input) {
        if ("font" === as)
          return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
      }
      function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React2 = require_react2(), Internals = {
        d: {
          f: noop,
          r: function() {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          },
          D: noop,
          C: noop,
          L: noop,
          m: noop,
          X: noop,
          S: noop,
          M: noop
        },
        p: 0,
        findDOMNode: null
      }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
      exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
      exports.createPortal = function(children, container) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
          throw Error("Target container is not a DOM element.");
        return createPortal$1(children, container, null, key);
      };
      exports.flushSync = function(fn) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
        try {
          if (ReactSharedInternals.T = null, Internals.p = 2, fn)
            return fn();
        } finally {
          ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error(
            "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
          );
        }
      };
      exports.preconnect = function(href, options) {
        "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error(
          "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : null != options && "string" !== typeof options.crossOrigin && console.error(
          "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
          getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
        ) : console.error(
          "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
      };
      exports.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href)
          console.error(
            "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
        else if (1 < arguments.length) {
          var options = arguments[1];
          "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          );
        }
        "string" === typeof href && Internals.d.D(href);
      };
      exports.preinit = function(href, options) {
        "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error(
          "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : "style" !== options.as && "script" !== options.as && console.error(
          'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
          getValueDescriptorExpectingEnumForWarning(options.as)
        ) : console.error(
          "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        if ("string" === typeof href && options && "string" === typeof options.as) {
          var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
          "style" === as ? Internals.d.S(
            href,
            "string" === typeof options.precedence ? options.precedence : void 0,
            {
              crossOrigin,
              integrity,
              fetchPriority
            }
          ) : "script" === as && Internals.d.X(href, {
            crossOrigin,
            integrity,
            fetchPriority,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0
          });
        }
      };
      exports.preinitModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
        if (encountered)
          console.error(
            "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
            encountered
          );
        else
          switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
            case "script":
              break;
            default:
              encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
          }
        if ("string" === typeof href)
          if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as)
              encountered = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              ), Internals.d.M(href, {
                crossOrigin: encountered,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
              });
          } else
            null == options && Internals.d.M(href);
      };
      exports.preload = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
          encountered = options.as;
          var crossOrigin = getCrossOriginStringAs(
            encountered,
            options.crossOrigin
          );
          Internals.d.L(href, encountered, {
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0,
            type: "string" === typeof options.type ? options.type : void 0,
            fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
            referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
            imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
            media: "string" === typeof options.media ? options.media : void 0
          });
        }
      };
      exports.preloadModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
        "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        ), Internals.d.m(href, {
          as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
          crossOrigin: encountered,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0
        })) : Internals.d.m(href));
      };
      exports.requestFormReset = function(form) {
        Internals.d.r(form);
      };
      exports.unstable_batchedUpdates = function(fn, a) {
        return fn(a);
      };
      exports.useFormState = function(action, initialState, permalink) {
        return resolveDispatcher().useFormState(action, initialState, permalink);
      };
      exports.useFormStatus = function() {
        return resolveDispatcher().useHostTransitionStatus();
      };
      exports.version = "19.0.0";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// ../node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "../node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    if (false) {
      checkDCE();
      module.exports = null;
    } else {
      module.exports = require_react_dom_development();
    }
  }
});

// ../node_modules/@ionic/react/dist/index.js
var import_react = __toESM(require_react2());

// ../node_modules/@ionic/core/components/cubic-bezier.js
var getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
  return solveCubicBezier(p0[1], p1[1], p2[1], p3[1], progression).map((tValue) => {
    return solveCubicParametricEquation(p0[0], p1[0], p2[0], p3[0], tValue);
  });
};
var solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
  const partA = 3 * p1 * Math.pow(t - 1, 2);
  const partB = -3 * p2 * t + 3 * p2 + p3 * t;
  const partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + t * partB) - partC;
};
var solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter((root) => root >= 0 && root <= 1);
};
var solveQuadraticEquation = (a, b, c) => {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};
var solveCubicEquation = (a, b, c, d) => {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
  b /= a;
  c /= a;
  d /= a;
  const p = (3 * c - b * b) / 3;
  const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  } else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  } else if (discriminant > 0) {
    return [
      Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3
    ];
  }
  const r = Math.sqrt(Math.pow(-(p / 3), 3));
  const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  const s = 2 * Math.pow(r, 1 / 3);
  return [
    s * Math.cos(phi / 3) - b / 3,
    s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
    s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
  ];
};

// ../node_modules/@ionic/core/components/theme.js
var createColorClasses = (color, cssClassMap) => {
  return typeof color === "string" && color.length > 0 ? Object.assign({ "ion-color": true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};

// ../node_modules/@ionic/core/components/framework-delegate.js
var attachComponent = async (delegate, container, component, cssClasses, componentProps, inline) => {
  var _a;
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (!inline && typeof component !== "string" && !(component instanceof HTMLElement)) {
    throw new Error("framework delegate is missing");
  }
  const el = typeof component === "string" ? (_a = container.ownerDocument) === null || _a === void 0 ? void 0 : _a.createElement(component) : component;
  if (cssClasses) {
    cssClasses.forEach((c) => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise((resolve) => componentOnReady(el, resolve));
  return el;
};
var detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};

// ../node_modules/tslib/tslib.es6.mjs
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}

// ../node_modules/@ionic/react/dist/index.js
var import_react_dom = __toESM(require_react_dom());

// ../node_modules/@ionic/core/components/ripple-effect.js
var rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
var IonRippleEffectStyle0 = rippleEffectCss;
var RippleEffect = /* @__PURE__ */ proxyCustomElement(class RippleEffect2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.type = "bounded";
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  async addRipple(x, y) {
    return new Promise((resolve) => {
      readTask(() => {
        const rect = this.el.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const hypotenuse = Math.sqrt(width * width + height * height);
        const maxDim = Math.max(height, width);
        const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const finalScale = maxRadius / initialSize;
        let posX = x - rect.left;
        let posY = y - rect.top;
        if (this.unbounded) {
          posX = width * 0.5;
          posY = height * 0.5;
        }
        const styleX = posX - initialSize * 0.5;
        const styleY = posY - initialSize * 0.5;
        const moveX = width * 0.5 - posX;
        const moveY = height * 0.5 - posY;
        writeTask(() => {
          const div = document.createElement("div");
          div.classList.add("ripple-effect");
          const style = div.style;
          style.top = styleY + "px";
          style.left = styleX + "px";
          style.width = style.height = initialSize + "px";
          style.setProperty("--final-scale", `${finalScale}`);
          style.setProperty("--translate-end", `${moveX}px, ${moveY}px`);
          const container = this.el.shadowRoot || this.el;
          container.appendChild(div);
          setTimeout(() => {
            resolve(() => {
              removeRipple(div);
            });
          }, 225 + 100);
        });
      });
    });
  }
  get unbounded() {
    return this.type === "unbounded";
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, { key: "7ae559bda5d2c1856a45bfa150c2cb4f83373f8e", role: "presentation", class: {
      [mode]: true,
      unbounded: this.unbounded
    } });
  }
  get el() {
    return this;
  }
  static get style() {
    return IonRippleEffectStyle0;
  }
}, [1, "ion-ripple-effect", {
  "type": [1],
  "addRipple": [64]
}]);
var removeRipple = (ripple) => {
  ripple.classList.add("fade-out");
  setTimeout(() => {
    ripple.remove();
  }, 200);
};
var PADDING = 10;
var INITIAL_ORIGIN_SCALE = 0.5;
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, RippleEffect);
        }
        break;
    }
  });
}

// ../node_modules/@ionic/core/components/lock-controller.js
var createLockController = () => {
  let waitPromise;
  const lock = async () => {
    const p = waitPromise;
    let resolve;
    waitPromise = new Promise((r) => resolve = r);
    if (p !== void 0) {
      await p;
    }
    return resolve;
  };
  return {
    lock
  };
};

// ../node_modules/@ionic/core/components/keyboard-controller.js
var getResizeContainer = (resizeMode) => {
  if (doc === void 0 || resizeMode === KeyboardResize.None || resizeMode === void 0) {
    return null;
  }
  const ionApp = doc.querySelector("ion-app");
  return ionApp !== null && ionApp !== void 0 ? ionApp : doc.body;
};
var getResizeContainerHeight = (resizeMode) => {
  const containerElement = getResizeContainer(resizeMode);
  return containerElement === null ? 0 : containerElement.clientHeight;
};
var createKeyboardController = async (keyboardChangeCallback) => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;
  let initialResizeContainerHeight;
  const init = async () => {
    const resizeOptions = await Keyboard.getResizeMode();
    const resizeMode = resizeOptions === void 0 ? void 0 : resizeOptions.mode;
    keyboardWillShowHandler = () => {
      if (initialResizeContainerHeight === void 0) {
        initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
      }
      keyboardVisible = true;
      fireChangeCallback(keyboardVisible, resizeMode);
    };
    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      fireChangeCallback(keyboardVisible, resizeMode);
    };
    win === null || win === void 0 ? void 0 : win.addEventListener("keyboardWillShow", keyboardWillShowHandler);
    win === null || win === void 0 ? void 0 : win.addEventListener("keyboardWillHide", keyboardWillHideHandler);
  };
  const fireChangeCallback = (state, resizeMode) => {
    if (keyboardChangeCallback) {
      keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
    }
  };
  const createResizePromiseIfNeeded = (resizeMode) => {
    if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      initialResizeContainerHeight === 0 || /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      initialResizeContainerHeight === getResizeContainerHeight(resizeMode)
    ) {
      return;
    }
    const containerElement = getResizeContainer(resizeMode);
    if (containerElement === null) {
      return;
    }
    return new Promise((resolve) => {
      const callback = () => {
        if (containerElement.clientHeight === initialResizeContainerHeight) {
          ro.disconnect();
          resolve();
        }
      };
      const ro = new ResizeObserver(callback);
      ro.observe(containerElement);
    });
  };
  const destroy = () => {
    win === null || win === void 0 ? void 0 : win.removeEventListener("keyboardWillShow", keyboardWillShowHandler);
    win === null || win === void 0 ? void 0 : win.removeEventListener("keyboardWillHide", keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = void 0;
  };
  const isKeyboardVisible = () => keyboardVisible;
  await init();
  return { init, destroy, isKeyboardVisible };
};

// ../node_modules/@ionic/core/components/ion-nav.js
var VIEW_STATE_NEW = 1;
var VIEW_STATE_ATTACHED = 2;
var VIEW_STATE_DESTROYED = 3;
var ViewController = class {
  constructor(component, params) {
    this.component = component;
    this.params = params;
    this.state = VIEW_STATE_NEW;
  }
  async init(container) {
    this.state = VIEW_STATE_ATTACHED;
    if (!this.element) {
      const component = this.component;
      this.element = await attachComponent(this.delegate, container, component, ["ion-page", "ion-page-invisible"], this.params);
    }
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    assert(this.state !== VIEW_STATE_DESTROYED, "view state must be ATTACHED");
    const element = this.element;
    if (element) {
      if (this.delegate) {
        this.delegate.removeViewFromDom(element.parentElement, element);
      } else {
        element.remove();
      }
    }
    this.nav = void 0;
    this.state = VIEW_STATE_DESTROYED;
  }
};
var matches = (view, id, params) => {
  if (!view) {
    return false;
  }
  if (view.component !== id) {
    return false;
  }
  return shallowEqualStringMap(view.params, params);
};
var convertToView = (page, params) => {
  if (!page) {
    return null;
  }
  if (page instanceof ViewController) {
    return page;
  }
  return new ViewController(page, params);
};
var convertToViews = (pages) => {
  return pages.map((page) => {
    if (page instanceof ViewController) {
      return page;
    }
    if ("component" in page) {
      return convertToView(page.component, page.componentProps === null ? void 0 : page.componentProps);
    }
    return convertToView(page, void 0);
  }).filter((v) => v !== null);
};
var navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
var IonNavStyle0 = navCss;
var Nav = /* @__PURE__ */ proxyCustomElement(class Nav2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.transInstr = [];
    this.gestureOrAnimationInProgress = false;
    this.useRouter = false;
    this.isTransitioning = false;
    this.destroyed = false;
    this.views = [];
    this.didLoad = false;
    this.delegate = void 0;
    this.swipeGesture = void 0;
    this.animated = true;
    this.animation = void 0;
    this.rootParams = void 0;
    this.root = void 0;
  }
  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeGesture === true);
    }
  }
  rootChanged() {
    const isDev = Build.isDev;
    if (this.root === void 0) {
      return;
    }
    if (this.didLoad === false) {
      return;
    }
    if (!this.useRouter) {
      if (this.root !== void 0) {
        this.setRoot(this.root, this.rootParams);
      }
    } else if (isDev) {
      printIonWarning("<ion-nav> does not support a root attribute when using ion-router.", this.el);
    }
  }
  componentWillLoad() {
    this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null;
    if (this.swipeGesture === void 0) {
      const mode = getIonMode(this);
      this.swipeGesture = config.getBoolean("swipeBackEnabled", mode === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  async componentDidLoad() {
    this.didLoad = true;
    this.rootChanged();
    this.gesture = (await import("/build/_shared/swipe-back-6YU6IMW4.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
    this.swipeGestureChanged();
  }
  connectedCallback() {
    this.destroyed = false;
  }
  disconnectedCallback() {
    for (const view of this.views) {
      lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      view._destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.transInstr.length = 0;
    this.views.length = 0;
    this.destroyed = true;
  }
  /**
   * Push a new component onto the current navigation stack. Pass any additional
   * information along as an object. This additional information is accessible
   * through NavParams.
   *
   * @param component The component to push onto the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  push(component, componentProps, opts, done) {
    return this.insert(-1, component, componentProps, opts, done);
  }
  /**
   * Inserts a component into the navigation stack at the specified index.
   * This is useful to add a component at any point in the navigation stack.
   *
   * @param insertIndex The index to insert the component at in the stack.
   * @param component The component to insert into the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insert(insertIndex, component, componentProps, opts, done) {
    return this.insertPages(insertIndex, [{ component, componentProps }], opts, done);
  }
  /**
   * Inserts an array of components into the navigation stack at the specified index.
   * The last component in the array will become instantiated as a view, and animate
   * in to become the active view.
   *
   * @param insertIndex The index to insert the components at in the stack.
   * @param insertComponents The components to insert into the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insertPages(insertIndex, insertComponents, opts, done) {
    return this.queueTrns({
      insertStart: insertIndex,
      insertViews: insertComponents,
      opts
    }, done);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  pop(opts, done) {
    return this.removeIndex(-1, 1, opts, done);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(indexOrViewCtrl, opts, done) {
    const ti = {
      removeStart: -1,
      removeCount: -1,
      opts
    };
    if (typeof indexOrViewCtrl === "object" && indexOrViewCtrl.component) {
      ti.removeView = indexOrViewCtrl;
      ti.removeStart = 1;
    } else if (typeof indexOrViewCtrl === "number") {
      ti.removeStart = indexOrViewCtrl + 1;
    }
    return this.queueTrns(ti, done);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(opts, done) {
    return this.removeIndex(1, -1, opts, done);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(startIndex, removeCount = 1, opts, done) {
    return this.queueTrns({
      removeStart: startIndex,
      removeCount,
      opts
    }, done);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(component, componentProps, opts, done) {
    return this.setPages([{ component, componentProps }], opts, done);
  }
  /**
   * Set the views of the current navigation stack and navigate to the last view.
   * By default animations are disabled, but they can be enabled by passing options
   * to the navigation controller. Navigation parameters can also be passed to the
   * individual pages in the array.
   *
   * @param views The list of views to set as the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setPages(views, opts, done) {
    opts !== null && opts !== void 0 ? opts : opts = {};
    if (opts.animated !== true) {
      opts.animated = false;
    }
    return this.queueTrns({
      insertStart: 0,
      insertViews: views,
      removeStart: 0,
      removeCount: -1,
      opts
    }, done);
  }
  /**
   * Called by the router to update the view.
   *
   * @param id The component tag.
   * @param params The component params.
   * @param direction A direction hint.
   * @param animation an AnimationBuilder.
   *
   * @return the status.
   * @internal
   */
  setRouteId(id, params, direction, animation) {
    const active = this.getActiveSync();
    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element
      });
    }
    let resolve;
    const promise = new Promise((r) => resolve = r);
    let finish;
    const commonOpts = {
      updateURL: false,
      viewIsReady: (enteringEl) => {
        let mark;
        const p = new Promise((r) => mark = r);
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: async () => {
            mark();
            await finish;
          }
        });
        return p;
      }
    };
    if (direction === "root") {
      finish = this.setRoot(id, params, commonOpts);
    } else {
      const viewController = this.views.find((v) => matches(v, id, params));
      if (viewController) {
        finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), { direction: "back", animationBuilder: animation }));
      } else if (direction === "forward") {
        finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), { animationBuilder: animation }));
      } else if (direction === "back") {
        finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), { direction: "back", animated: true, animationBuilder: animation }));
      }
    }
    return promise;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */
  async getRouteId() {
    const active = this.getActiveSync();
    if (active) {
      return {
        id: active.element.tagName,
        params: active.params,
        element: active.element
      };
    }
    return void 0;
  }
  /**
   * Get the active view.
   */
  async getActive() {
    return this.getActiveSync();
  }
  /**
   * Get the view at the specified index.
   *
   * @param index The index of the view.
   */
  async getByIndex(index) {
    return this.views[index];
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */
  async canGoBack(view) {
    return this.canGoBackSync(view);
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */
  async getPrevious(view) {
    return this.getPreviousSync(view);
  }
  /**
   * Returns the number of views in the stack.
   */
  async getLength() {
    return Promise.resolve(this.views.length);
  }
  getActiveSync() {
    return this.views[this.views.length - 1];
  }
  canGoBackSync(view = this.getActiveSync()) {
    return !!(view && this.getPreviousSync(view));
  }
  getPreviousSync(view = this.getActiveSync()) {
    if (!view) {
      return void 0;
    }
    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  async queueTrns(ti, done) {
    var _a, _b;
    if (this.isTransitioning && ((_a = ti.opts) === null || _a === void 0 ? void 0 : _a.skipIfBusy)) {
      return false;
    }
    const promise = new Promise((resolve, reject) => {
      ti.resolve = resolve;
      ti.reject = reject;
    });
    ti.done = done;
    if (ti.opts && ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        const canTransition = await router.canTransition();
        if (canTransition === false) {
          return false;
        }
        if (typeof canTransition === "string") {
          router.push(canTransition, ti.opts.direction || "back");
          return false;
        }
      }
    }
    if (((_b = ti.insertViews) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      ti.insertViews = void 0;
    }
    this.transInstr.push(ti);
    this.nextTrns();
    return promise;
  }
  success(result, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    if (ti.done) {
      ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
    }
    ti.resolve(result.hasCompleted);
    if (ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        const direction = result.direction === "back" ? "back" : "forward";
        router.navChanged(direction);
      }
    }
  }
  failed(rejectReason, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }
  fireError(rejectReason, ti) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }
    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    } else {
      ti.resolve(false);
    }
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */
  nextTrns() {
    if (this.isTransitioning) {
      return false;
    }
    const ti = this.transInstr.shift();
    if (!ti) {
      return false;
    }
    this.runTransition(ti);
    return true;
  }
  /** Executes all the transition instruction from the queue. */
  async runTransition(ti) {
    try {
      this.ionNavWillChange.emit();
      this.isTransitioning = true;
      this.prepareTI(ti);
      const leavingView = this.getActiveSync();
      const enteringView = this.getEnteringView(ti, leavingView);
      if (!leavingView && !enteringView) {
        throw new Error("no views in the stack to be removed");
      }
      if (enteringView && enteringView.state === VIEW_STATE_NEW) {
        await enteringView.init(this.el);
      }
      this.postViewInit(enteringView, leavingView, ti);
      const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
      if (requiresTransition && ti.opts && leavingView) {
        const isBackDirection = ti.opts.direction === "back";
        if (isBackDirection) {
          ti.opts.animationBuilder = ti.opts.animationBuilder || (enteringView === null || enteringView === void 0 ? void 0 : enteringView.animationBuilder);
        }
        leavingView.animationBuilder = ti.opts.animationBuilder;
      }
      let result;
      if (requiresTransition) {
        result = await this.transition(enteringView, leavingView, ti);
      } else {
        result = {
          hasCompleted: true,
          requiresTransition: false
        };
      }
      this.success(result, ti);
      this.ionNavDidChange.emit();
    } catch (rejectReason) {
      this.failed(rejectReason, ti);
    }
    this.isTransitioning = false;
    this.nextTrns();
  }
  prepareTI(ti) {
    var _a, _b;
    var _c;
    const viewsLength = this.views.length;
    (_a = ti.opts) !== null && _a !== void 0 ? _a : ti.opts = {};
    (_b = (_c = ti.opts).delegate) !== null && _b !== void 0 ? _b : _c.delegate = this.delegate;
    if (ti.removeView !== void 0) {
      assert(ti.removeStart !== void 0, "removeView needs removeStart");
      assert(ti.removeCount !== void 0, "removeView needs removeCount");
      const index = this.views.indexOf(ti.removeView);
      if (index < 0) {
        throw new Error("removeView was not found");
      }
      ti.removeStart += index;
    }
    if (ti.removeStart !== void 0) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }
      if (ti.removeCount < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }
      ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
    }
    if (ti.insertViews) {
      if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
        ti.insertStart = viewsLength;
      }
      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }
    const insertViews = ti.insertViews;
    if (!insertViews) {
      return;
    }
    assert(insertViews.length > 0, "length can not be zero");
    const viewControllers = convertToViews(insertViews);
    if (viewControllers.length === 0) {
      throw new Error("invalid views to insert");
    }
    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;
      if (nav && nav !== this) {
        throw new Error("inserted view was already inserted");
      }
      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error("inserted view was already destroyed");
      }
    }
    ti.insertViews = viewControllers;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(ti, leavingView) {
    const insertViews = ti.insertViews;
    if (insertViews !== void 0) {
      return insertViews[insertViews.length - 1];
    }
    const removeStart = ti.removeStart;
    if (removeStart !== void 0) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount;
      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];
        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }
    return void 0;
  }
  /**
   * Adds and Removes the views from the navigation stack.
   *
   * @param enteringView The view being entered.
   * @param leavingView The view being left.
   * @param ti The instructions.
   */
  postViewInit(enteringView, leavingView, ti) {
    var _a, _b, _c;
    assert(leavingView || enteringView, "Both leavingView and enteringView are null");
    assert(ti.resolve, "resolve must be valid");
    assert(ti.reject, "reject must be valid");
    const opts = ti.opts;
    const { insertViews, removeStart, removeCount } = ti;
    let destroyQueue;
    if (removeStart !== void 0 && removeCount !== void 0) {
      assert(removeStart >= 0, "removeStart can not be negative");
      assert(removeCount >= 0, "removeCount can not be negative");
      destroyQueue = [];
      for (let i = removeStart; i < removeStart + removeCount; i++) {
        const view = this.views[i];
        if (view !== void 0 && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      }
      (_a = opts.direction) !== null && _a !== void 0 ? _a : opts.direction = "back";
    }
    const finalNumViews = this.views.length + ((_b = insertViews === null || insertViews === void 0 ? void 0 : insertViews.length) !== null && _b !== void 0 ? _b : 0) - (removeCount !== null && removeCount !== void 0 ? removeCount : 0);
    assert(finalNumViews >= 0, "final balance can not be negative");
    if (finalNumViews === 0) {
      console.warn(`You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
      throw new Error("navigation stack needs at least one root page");
    }
    if (insertViews) {
      let insertIndex = ti.insertStart;
      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }
      if (ti.enteringRequiresTransition) {
        (_c = opts.direction) !== null && _c !== void 0 ? _c : opts.direction = "forward";
      }
    }
    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        lifecycle(view.element, LIFECYCLE_WILL_LEAVE);
        lifecycle(view.element, LIFECYCLE_DID_LEAVE);
        lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      }
      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }
  async transition(enteringView, leavingView, ti) {
    const opts = ti.opts;
    const progressCallback = opts.progressAnimation ? (ani) => {
      if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
        this.gestureOrAnimationInProgress = true;
        ani.onFinish(() => {
          this.gestureOrAnimationInProgress = false;
        }, { oneTimeCallback: true });
        ani.progressEnd(0, 0, 0);
      } else {
        this.sbAni = ani;
      }
    } : void 0;
    const mode = getIonMode(this);
    const enteringEl = enteringView.element;
    const leavingEl = leavingView && leavingView.element;
    const animationOpts = Object.assign(Object.assign({
      mode,
      showGoBack: this.canGoBackSync(enteringView),
      baseEl: this.el,
      progressCallback,
      animated: this.animated && config.getBoolean("animated", true),
      enteringEl,
      leavingEl
    }, opts), { animationBuilder: opts.animationBuilder || this.animation || config.get("navAnimation") });
    const { hasCompleted } = await transition(animationOpts);
    return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
  }
  transitionFinish(hasCompleted, enteringView, leavingView, opts) {
    const activeView = hasCompleted ? enteringView : leavingView;
    if (activeView) {
      this.unmountInactiveViews(activeView);
    }
    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction
    };
  }
  /**
   * Inserts a view at the specified index.
   *
   * When the view already is in the stack it will be moved to the new position.
   *
   * @param view The view to insert.
   * @param index The index where to insert the view.
   */
  insertViewAt(view, index) {
    const views = this.views;
    const existingIndex = views.indexOf(view);
    if (existingIndex > -1) {
      assert(view.nav === this, "view is not part of the nav");
      views.splice(existingIndex, 1);
      views.splice(index, 0, view);
    } else {
      assert(!view.nav, "nav is used");
      view.nav = this;
      views.splice(index, 0, view);
    }
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(view) {
    assert(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, "view state should be loaded or destroyed");
    const views = this.views;
    const index = views.indexOf(view);
    assert(index > -1, "view must be part of the stack");
    if (index >= 0) {
      views.splice(index, 1);
    }
  }
  destroyView(view) {
    view._destroy();
    this.removeView(view);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */
  unmountInactiveViews(activeView) {
    if (this.destroyed) {
      return;
    }
    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);
    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      const element = view.element;
      if (element) {
        if (i > activeViewIndex) {
          lifecycle(element, LIFECYCLE_WILL_UNLOAD);
          this.destroyView(view);
        } else if (i < activeViewIndex) {
          setPageHidden(element, true);
        }
      }
    }
  }
  canStart() {
    return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync();
  }
  onStart() {
    this.gestureOrAnimationInProgress = true;
    this.pop({ direction: "back", progressAnimation: true });
  }
  onMove(stepValue) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }
  onEnd(shouldComplete, stepValue, dur) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = false;
      }, { oneTimeCallback: true });
      let newStepValue = shouldComplete ? -1e-3 : 1e-3;
      if (!shouldComplete) {
        this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");
        newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
      } else {
        newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
      }
      this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
    } else {
      this.gestureOrAnimationInProgress = false;
    }
  }
  render() {
    return h("slot", { key: "dfe98cb6604a2015a49f41beffebdd2da957dfff" });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "root": ["rootChanged"]
    };
  }
  static get style() {
    return IonNavStyle0;
  }
}, [1, "ion-nav", {
  "delegate": [16],
  "swipeGesture": [1028, "swipe-gesture"],
  "animated": [4],
  "animation": [16],
  "rootParams": [16],
  "root": [1],
  "push": [64],
  "insert": [64],
  "insertPages": [64],
  "pop": [64],
  "popTo": [64],
  "popToRoot": [64],
  "removeIndex": [64],
  "setRoot": [64],
  "setPages": [64],
  "setRouteId": [64],
  "getRouteId": [64],
  "getActive": [64],
  "getByIndex": [64],
  "canGoBack": [64],
  "getPrevious": [64],
  "getLength": [64]
}, void 0, {
  "swipeGesture": ["swipeGestureChanged"],
  "root": ["rootChanged"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-nav"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-nav":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Nav);
        }
        break;
    }
  });
}
var defineCustomElement2 = defineCustomElement$1;

// ../node_modules/@ionic/core/components/ion-router-outlet.js
var routerOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
var IonRouterOutletStyle0 = routerOutletCss;
var RouterOutlet = /* @__PURE__ */ proxyCustomElement(class RouterOutlet2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.lockController = createLockController();
    this.gestureOrAnimationInProgress = false;
    this.mode = getIonMode(this);
    this.delegate = void 0;
    this.animated = true;
    this.animation = void 0;
    this.swipeHandler = void 0;
  }
  swipeHandlerChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== void 0);
    }
  }
  async connectedCallback() {
    const onStart = () => {
      this.gestureOrAnimationInProgress = true;
      if (this.swipeHandler) {
        this.swipeHandler.onStart();
      }
    };
    this.gesture = (await import("/build/_shared/swipe-back-6YU6IMW4.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), (step) => {
      var _a;
      return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step);
    }, (shouldComplete, step, dur) => {
      if (this.ani) {
        this.ani.onFinish(() => {
          this.gestureOrAnimationInProgress = false;
          if (this.swipeHandler) {
            this.swipeHandler.onEnd(shouldComplete);
          }
        }, { oneTimeCallback: true });
        let newStepValue = shouldComplete ? -1e-3 : 1e-3;
        if (!shouldComplete) {
          this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");
          newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        } else {
          newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }
        this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
      } else {
        this.gestureOrAnimationInProgress = false;
      }
    });
    this.swipeHandlerChanged();
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /** @internal */
  async commit(enteringEl, leavingEl, opts) {
    const unlock = await this.lockController.lock();
    let changed = false;
    try {
      changed = await this.transition(enteringEl, leavingEl, opts);
    } catch (e) {
      console.error(e);
    }
    unlock();
    return changed;
  }
  /** @internal */
  async setRouteId(id, params, direction, animation) {
    const changed = await this.setRoot(id, params, {
      duration: direction === "root" ? 0 : void 0,
      direction: direction === "back" ? "back" : "forward",
      animationBuilder: animation
    });
    return {
      changed,
      element: this.activeEl
    };
  }
  /** @internal */
  async getRouteId() {
    const active = this.activeEl;
    return active ? {
      id: active.tagName,
      element: active,
      params: this.activeParams
    } : void 0;
  }
  async setRoot(component, params, opts) {
    if (this.activeComponent === component && shallowEqualStringMap(params, this.activeParams)) {
      return false;
    }
    const leavingEl = this.activeEl;
    const enteringEl = await attachComponent(this.delegate, this.el, component, ["ion-page", "ion-page-invisible"], params);
    this.activeComponent = component;
    this.activeEl = enteringEl;
    this.activeParams = params;
    await this.commit(enteringEl, leavingEl, opts);
    await detachComponent(this.delegate, leavingEl);
    return true;
  }
  async transition(enteringEl, leavingEl, opts = {}) {
    if (leavingEl === enteringEl) {
      return false;
    }
    this.ionNavWillChange.emit();
    const { el, mode } = this;
    const animated = this.animated && config.getBoolean("animated", true);
    const animationBuilder = opts.animationBuilder || this.animation || config.get("navAnimation");
    await transition(Object.assign(Object.assign({
      mode,
      animated,
      enteringEl,
      leavingEl,
      baseEl: el,
      /**
       * We need to wait for all Stencil components
       * to be ready only when using the lazy
       * loaded bundle.
       */
      deepWait: hasLazyBuild(el),
      progressCallback: opts.progressAnimation ? (ani) => {
        if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
          this.gestureOrAnimationInProgress = true;
          ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;
            if (this.swipeHandler) {
              this.swipeHandler.onEnd(false);
            }
          }, { oneTimeCallback: true });
          ani.progressEnd(0, 0, 0);
        } else {
          this.ani = ani;
        }
      } : void 0
    }, opts), { animationBuilder }));
    this.ionNavDidChange.emit();
    return true;
  }
  render() {
    return h("slot", { key: "a70341f58d19df55de1dad00e3464388e446aa2a" });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "swipeHandler": ["swipeHandlerChanged"]
    };
  }
  static get style() {
    return IonRouterOutletStyle0;
  }
}, [1, "ion-router-outlet", {
  "mode": [1025],
  "delegate": [16],
  "animated": [4],
  "animation": [16],
  "swipeHandler": [16],
  "commit": [64],
  "setRouteId": [64],
  "getRouteId": [64]
}, void 0, {
  "swipeHandler": ["swipeHandlerChanged"]
}]);
function defineCustomElement$12() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-router-outlet"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-router-outlet":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, RouterOutlet);
        }
        break;
    }
  });
}
var defineCustomElement3 = defineCustomElement$12;

// ../node_modules/@ionic/core/components/ion-tab-bar.js
var tabBarIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}";
var IonTabBarIosStyle0 = tabBarIosCss;
var tabBarMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}";
var IonTabBarMdStyle0 = tabBarMdCss;
var TabBar = /* @__PURE__ */ proxyCustomElement(class TabBar2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionTabBarChanged = createEvent(this, "ionTabBarChanged", 7);
    this.ionTabBarLoaded = createEvent(this, "ionTabBarLoaded", 7);
    this.keyboardCtrl = null;
    this.keyboardVisible = false;
    this.color = void 0;
    this.selectedTab = void 0;
    this.translucent = false;
  }
  selectedTabChanged() {
    if (this.selectedTab !== void 0) {
      this.ionTabBarChanged.emit({
        tab: this.selectedTab
      });
    }
  }
  componentWillLoad() {
    this.selectedTabChanged();
  }
  async connectedCallback() {
    this.keyboardCtrl = await createKeyboardController(async (keyboardOpen, waitForResize) => {
      if (keyboardOpen === false && waitForResize !== void 0) {
        await waitForResize;
      }
      this.keyboardVisible = keyboardOpen;
    });
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  componentDidLoad() {
    this.ionTabBarLoaded.emit();
  }
  render() {
    const { color, translucent, keyboardVisible } = this;
    const mode = getIonMode(this);
    const shouldHide = keyboardVisible && this.el.getAttribute("slot") !== "top";
    return h(Host, { key: "a87fd2ea5df053705a37ea7ffec043e75c4a9907", role: "tablist", "aria-hidden": shouldHide ? "true" : null, class: createColorClasses(color, {
      [mode]: true,
      "tab-bar-translucent": translucent,
      "tab-bar-hidden": shouldHide
    }) }, h("slot", { key: "81a6223299b6cab29d7ddced590e9152e2b3ded0" }));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "selectedTab": ["selectedTabChanged"]
    };
  }
  static get style() {
    return {
      ios: IonTabBarIosStyle0,
      md: IonTabBarMdStyle0
    };
  }
}, [33, "ion-tab-bar", {
  "color": [513],
  "selectedTab": [1, "selected-tab"],
  "translucent": [4],
  "keyboardVisible": [32]
}, void 0, {
  "selectedTab": ["selectedTabChanged"]
}]);
function defineCustomElement$13() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-tab-bar"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-tab-bar":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TabBar);
        }
        break;
    }
  });
}
var defineCustomElement4 = defineCustomElement$13;

// ../node_modules/@ionic/core/components/ion-tab-button.js
var tabButtonIosCss = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}';
var IonTabButtonIosStyle0 = tabButtonIosCss;
var tabButtonMdCss = ':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}';
var IonTabButtonMdStyle0 = tabButtonMdCss;
var TabButton = /* @__PURE__ */ proxyCustomElement(class TabButton2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ionTabButtonClick = createEvent(this, "ionTabButtonClick", 7);
    this.inheritedAttributes = {};
    this.onKeyUp = (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        this.selectTab(ev);
      }
    };
    this.onClick = (ev) => {
      this.selectTab(ev);
    };
    this.disabled = false;
    this.download = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.layout = void 0;
    this.selected = false;
    this.tab = void 0;
    this.target = void 0;
  }
  onTabBarChanged(ev) {
    const dispatchedFrom = ev.target;
    const parent = this.el.parentElement;
    if (ev.composedPath().includes(parent) || (dispatchedFrom === null || dispatchedFrom === void 0 ? void 0 : dispatchedFrom.contains(this.el))) {
      this.selected = this.tab === ev.detail.tab;
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, inheritAttributes(this.el, ["aria-label"]));
    if (this.layout === void 0) {
      this.layout = config.get("tabButtonLayout", "icon-top");
    }
  }
  selectTab(ev) {
    if (this.tab !== void 0) {
      if (!this.disabled) {
        this.ionTabButtonClick.emit({
          tab: this.tab,
          href: this.href,
          selected: this.selected
        });
      }
      ev.preventDefault();
    }
  }
  get hasLabel() {
    return !!this.el.querySelector("ion-label");
  }
  get hasIcon() {
    return !!this.el.querySelector("ion-icon");
  }
  render() {
    const { disabled, hasIcon, hasLabel, href, rel, target, layout, selected, tab, inheritedAttributes } = this;
    const mode = getIonMode(this);
    const attrs = {
      download: this.download,
      href,
      rel,
      target
    };
    return h(Host, { key: "5976c45943ea7ea8e7c1a85fc9996de421439f08", onClick: this.onClick, onKeyup: this.onKeyUp, id: tab !== void 0 ? `tab-button-${tab}` : null, class: {
      [mode]: true,
      "tab-selected": selected,
      "tab-disabled": disabled,
      "tab-has-label": hasLabel,
      "tab-has-icon": hasIcon,
      "tab-has-label-only": hasLabel && !hasIcon,
      "tab-has-icon-only": hasIcon && !hasLabel,
      [`tab-layout-${layout}`]: true,
      "ion-activatable": true,
      "ion-selectable": true,
      "ion-focusable": true
    } }, h("a", Object.assign({ key: "1db09d861b67ff292018fb4b0dc7b85bd4677eb8" }, attrs, { class: "button-native", part: "native", role: "tab", "aria-selected": selected ? "true" : null, "aria-disabled": disabled ? "true" : null, tabindex: disabled ? "-1" : void 0 }, inheritedAttributes), h("span", { key: "4381eafcb27e8c7bb0d86d4f115ceb0caf03b9b4", class: "button-inner" }, h("slot", { key: "1981135f6fbb88376c1bd923c55c70fe8b5c5159" })), mode === "md" && h("ion-ripple-effect", { key: "0509bc7155d055d1ed710600e9cf4df135881491", type: "unbounded" })));
  }
  get el() {
    return this;
  }
  static get style() {
    return {
      ios: IonTabButtonIosStyle0,
      md: IonTabButtonMdStyle0
    };
  }
}, [33, "ion-tab-button", {
  "disabled": [4],
  "download": [1],
  "href": [1],
  "rel": [1],
  "layout": [1025],
  "selected": [1028],
  "tab": [1],
  "target": [1]
}, [[8, "ionTabBarChanged", "onTabBarChanged"]]]);
function defineCustomElement$14() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-tab-button", "ion-ripple-effect"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-tab-button":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, TabButton);
        }
        break;
      case "ion-ripple-effect":
        if (!customElements.get(tagName)) {
          defineCustomElement();
        }
        break;
    }
  });
}
var defineCustomElement5 = defineCustomElement$14;

// ../node_modules/ionicons/components/utils.js
var CACHED_MAP;
var getIconMap = () => {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      const win2 = window;
      win2.Ionicons = win2.Ionicons || {};
      CACHED_MAP = win2.Ionicons.map = win2.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url, i);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
var getNamedUrl = (iconName, iconEl) => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  try {
    return getAssetPath(`svg/${iconName}.svg`);
  } catch (e) {
    console.warn(`[Ionicons Warning]: Could not load icon with name "${iconName}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, iconEl);
  }
};
var getName = (iconName, icon, mode, ios, md) => {
  mode = (mode && toLower(mode)) === "ios" ? "ios" : "md";
  if (ios && mode === "ios") {
    iconName = toLower(ios);
  } else if (md && mode === "md") {
    iconName = toLower(md);
  } else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === "") {
    return null;
  }
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
  if (invalidChars !== "") {
    return null;
  }
  return iconName;
};
var getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
var isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
var isStr = (val) => typeof val === "string";
var toLower = (val) => val.toLowerCase();
var inheritAttributes2 = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
var isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};

// ../node_modules/ionicons/components/ion-icon.js
var validateContent = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
      div.removeChild(div.childNodes[i]);
    }
  }
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    const svgClass = svgElm.getAttribute("class") || "";
    svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
var isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
var isSvgDataUrl = (url) => url.startsWith("data:image/svg+xml");
var isEncodedDataUrl = (url) => url.indexOf(";utf8,") !== -1;
var ioniconContent = /* @__PURE__ */ new Map();
var requests = /* @__PURE__ */ new Map();
var parser;
var getSvgContent = (url, sanitize) => {
  let req = requests.get(url);
  if (!req) {
    if (typeof fetch !== "undefined" && typeof document !== "undefined") {
      if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
        if (!parser) {
          parser = new DOMParser();
        }
        const doc2 = parser.parseFromString(url, "text/html");
        const svg = doc2.querySelector("svg");
        if (svg) {
          ioniconContent.set(url, svg.outerHTML);
        }
        return Promise.resolve();
      } else {
        req = fetch(url).then((rsp) => {
          if (rsp.ok) {
            return rsp.text().then((svgContent) => {
              if (svgContent && sanitize !== false) {
                svgContent = validateContent(svgContent);
              }
              ioniconContent.set(url, svgContent || "");
            });
          }
          ioniconContent.set(url, "");
        });
        requests.set(url, req);
      }
    } else {
      ioniconContent.set(url, "");
      return Promise.resolve();
    }
  }
  return req;
};
var iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
var Icon = /* @__PURE__ */ proxyCustomElement(class Icon2 extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.iconName = null;
    this.inheritedAttributes = {};
    this.didLoadIcon = false;
    this.svgContent = void 0;
    this.isVisible = false;
    this.mode = getIonMode2();
    this.color = void 0;
    this.ios = void 0;
    this.md = void 0;
    this.flipRtl = void 0;
    this.name = void 0;
    this.src = void 0;
    this.icon = void 0;
    this.size = void 0;
    this.lazy = false;
    this.sanitize = true;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes2(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  componentDidLoad() {
    if (!this.didLoadIcon) {
      this.loadIcon();
    }
  }
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  waitUntilVisible(el, rootMargin, cb) {
    if (Build.isBrowser && this.lazy && typeof window !== "undefined" && window.IntersectionObserver) {
      const io = this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = void 0;
          cb();
        }
      }, { rootMargin });
      io.observe(el);
    } else {
      cb();
    }
  }
  loadIcon() {
    if (Build.isBrowser && this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          this.svgContent = ioniconContent.get(url);
        } else {
          getSvgContent(url, this.sanitize).then(() => this.svgContent = ioniconContent.get(url));
        }
        this.didLoadIcon = true;
      }
    }
    this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const { flipRtl, iconName, inheritedAttributes, el } = this;
    const mode = this.mode || "md";
    const shouldAutoFlip = iconName ? (iconName.includes("arrow") || iconName.includes("chevron")) && flipRtl !== false : false;
    const shouldBeFlippable = flipRtl || shouldAutoFlip;
    return h(Host, Object.assign({ role: "img", class: Object.assign(Object.assign({ [mode]: true }, createColorClasses2(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": shouldBeFlippable, "icon-rtl": shouldBeFlippable && isRTL(el) }) }, inheritedAttributes), Build.isBrowser && this.svgContent ? h("div", { class: "icon-inner", innerHTML: this.svgContent }) : h("div", { class: "icon-inner" }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }
  static get style() {
    return iconCss;
  }
}, [1, "ion-icon", {
  "mode": [1025],
  "color": [1],
  "ios": [1],
  "md": [1],
  "flipRtl": [4, "flip-rtl"],
  "name": [513],
  "src": [1],
  "icon": [8],
  "size": [1],
  "lazy": [4],
  "sanitize": [4],
  "svgContent": [32],
  "isVisible": [32]
}]);
var getIonMode2 = () => Build.isBrowser && typeof document !== "undefined" && document.documentElement.getAttribute("mode") || "md";
var createColorClasses2 = (color) => {
  return color ? {
    "ion-color": true,
    [`ion-color-${color}`]: true
  } : null;
};
function defineCustomElement$15() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "ion-icon":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Icon);
        }
        break;
    }
  });
}
var defineCustomElement6 = defineCustomElement$15;

// ../node_modules/@ionic/react/dist/index.js
var IonLifeCycleContext = /* @__PURE__ */ import_react.default.createContext({
  onIonViewWillEnter: () => {
    return;
  },
  ionViewWillEnter: () => {
    return;
  },
  onIonViewDidEnter: () => {
    return;
  },
  ionViewDidEnter: () => {
    return;
  },
  onIonViewWillLeave: () => {
    return;
  },
  ionViewWillLeave: () => {
    return;
  },
  onIonViewDidLeave: () => {
    return;
  },
  ionViewDidLeave: () => {
    return;
  },
  cleanupIonViewWillEnter: () => {
    return;
  },
  cleanupIonViewDidEnter: () => {
    return;
  },
  cleanupIonViewWillLeave: () => {
    return;
  },
  cleanupIonViewDidLeave: () => {
    return;
  }
});
var DefaultIonLifeCycleContext = class {
  constructor() {
    this.ionViewWillEnterCallbacks = [];
    this.ionViewDidEnterCallbacks = [];
    this.ionViewWillLeaveCallbacks = [];
    this.ionViewDidLeaveCallbacks = [];
    this.ionViewWillEnterDestructorCallbacks = [];
    this.ionViewDidEnterDestructorCallbacks = [];
    this.ionViewWillLeaveDestructorCallbacks = [];
    this.ionViewDidLeaveDestructorCallbacks = [];
  }
  onIonViewWillEnter(callback) {
    if (callback.id) {
      const index = this.ionViewWillEnterCallbacks.findIndex((x) => x.id === callback.id);
      if (index > -1) {
        this.ionViewWillEnterCallbacks[index] = callback;
      } else {
        this.ionViewWillEnterCallbacks.push(callback);
      }
    } else {
      this.ionViewWillEnterCallbacks.push(callback);
    }
  }
  teardownCallback(callback, callbacks) {
    const matches2 = callbacks.filter((x) => x.id === callback.id);
    if (matches2.length !== 0) {
      matches2.forEach((match) => {
        if (match && typeof match.destructor === "function") {
          match.destructor();
        }
      });
      callbacks = callbacks.filter((x) => x.id !== callback.id);
    }
  }
  /**
   * Tears down the user-provided ionViewWillEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillEnter(callback) {
    this.teardownCallback(callback, this.ionViewWillEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidEnter lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidEnter(callback) {
    this.teardownCallback(callback, this.ionViewDidEnterDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewWillLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewWillLeave(callback) {
    this.teardownCallback(callback, this.ionViewWillLeaveDestructorCallbacks);
  }
  /**
   * Tears down the user-provided ionViewDidLeave lifecycle callback.
   * This is the same behavior as React's useEffect hook. The callback
   * is invoked when the component is unmounted.
   */
  cleanupIonViewDidLeave(callback) {
    this.teardownCallback(callback, this.ionViewDidLeaveDestructorCallbacks);
  }
  ionViewWillEnter() {
    this.ionViewWillEnterCallbacks.forEach((cb) => {
      const destructor = cb();
      if (cb.id) {
        this.ionViewWillEnterDestructorCallbacks.push({ id: cb.id, destructor });
      }
    });
  }
  onIonViewDidEnter(callback) {
    if (callback.id) {
      const index = this.ionViewDidEnterCallbacks.findIndex((x) => x.id === callback.id);
      if (index > -1) {
        this.ionViewDidEnterCallbacks[index] = callback;
      } else {
        this.ionViewDidEnterCallbacks.push(callback);
      }
    } else {
      this.ionViewDidEnterCallbacks.push(callback);
    }
  }
  ionViewDidEnter() {
    this.ionViewDidEnterCallbacks.forEach((cb) => {
      const destructor = cb();
      if (cb.id) {
        this.ionViewDidEnterDestructorCallbacks.push({ id: cb.id, destructor });
      }
    });
  }
  onIonViewWillLeave(callback) {
    if (callback.id) {
      const index = this.ionViewWillLeaveCallbacks.findIndex((x) => x.id === callback.id);
      if (index > -1) {
        this.ionViewWillLeaveCallbacks[index] = callback;
      } else {
        this.ionViewWillLeaveCallbacks.push(callback);
      }
    } else {
      this.ionViewWillLeaveCallbacks.push(callback);
    }
  }
  ionViewWillLeave() {
    this.ionViewWillLeaveCallbacks.forEach((cb) => {
      const destructor = cb();
      if (cb.id) {
        this.ionViewWillLeaveDestructorCallbacks.push({ id: cb.id, destructor });
      }
    });
  }
  onIonViewDidLeave(callback) {
    if (callback.id) {
      const index = this.ionViewDidLeaveCallbacks.findIndex((x) => x.id === callback.id);
      if (index > -1) {
        this.ionViewDidLeaveCallbacks[index] = callback;
      } else {
        this.ionViewDidLeaveCallbacks.push(callback);
      }
    } else {
      this.ionViewDidLeaveCallbacks.push(callback);
    }
  }
  ionViewDidLeave() {
    this.ionViewDidLeaveCallbacks.forEach((cb) => {
      const destructor = cb();
      if (cb.id) {
        this.ionViewDidLeaveDestructorCallbacks.push({ id: cb.id, destructor });
      }
    });
    this.componentCanBeDestroyed();
  }
  onComponentCanBeDestroyed(callback) {
    this.componentCanBeDestroyedCallback = callback;
  }
  componentCanBeDestroyed() {
    if (this.componentCanBeDestroyedCallback) {
      this.componentCanBeDestroyedCallback();
    }
  }
};
var NavContext = /* @__PURE__ */ import_react.default.createContext({
  getIonRedirect: () => void 0,
  getIonRoute: () => void 0,
  getPageManager: () => void 0,
  getStackManager: () => void 0,
  goBack: (route) => {
    if (typeof window !== "undefined") {
      if (typeof route === "string") {
        window.location.pathname = route;
      } else {
        window.history.back();
      }
    }
  },
  navigate: (path) => {
    if (typeof window !== "undefined") {
      window.location.pathname = path;
    }
  },
  hasIonicRouter: () => false,
  routeInfo: void 0,
  setCurrentTab: () => void 0,
  changeTab: (_tab, path) => {
    if (typeof window !== "undefined") {
      window.location.pathname = path;
    }
  },
  resetTab: (_tab, path) => {
    if (typeof window !== "undefined") {
      window.location.pathname = path;
    }
  }
});
var dashToPascalCase = (str) => str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
var camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);
var attachProps = (node, newProps, oldProps = {}) => {
  if (node instanceof Element) {
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") {
      node.className = className;
    }
    Object.keys(newProps).forEach((name) => {
      if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
        return;
      }
      if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};
var getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class;
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
  const finalClassNames = [];
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach((s) => finalClassNames.push(s));
  return finalClassNames.join(" ");
};
var transformReactEventName = (eventNameSuffix) => {
  switch (eventNameSuffix) {
    case "doubleclick":
      return "dblclick";
  }
  return eventNameSuffix;
};
var isCoveredByReact = (eventNameSuffix) => {
  if (typeof document === "undefined") {
    return true;
  } else {
    const eventName = "on" + transformReactEventName(eventNameSuffix);
    let isSupported = eventName in document;
    if (!isSupported) {
      const element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    return isSupported;
  }
};
var syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName];
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }
  node.addEventListener(eventName, eventStore[eventName] = function handler(e) {
    if (newEventHandler) {
      newEventHandler.call(this, e);
    }
  });
};
var arrayToMap = (arr) => {
  const map = /* @__PURE__ */ new Map();
  arr.forEach((s) => map.set(s, s));
  return map;
};
var setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    ref.current = value;
  }
};
var mergeRefs = (...refs) => {
  return (value) => {
    refs.forEach((ref) => {
      setRef(ref, value);
    });
  };
};
var createForwardRef$1 = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return import_react.default.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  return import_react.default.forwardRef(forwardRef);
};
var createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement7) => {
  if (defineCustomElement7 !== void 0) {
    defineCustomElement7();
  }
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends import_react.default.Component {
    constructor(props) {
      super(props);
      this.setComponentElRef = (element) => {
        this.componentEl = element;
      };
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(prevProps) {
      attachProps(this.componentEl, this.props, prevProps);
    }
    render() {
      const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        const value = cProps[name];
        if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();
          if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
            acc[name] = value;
          }
        } else {
          const type = typeof value;
          if (type === "string" || type === "boolean" || type === "number") {
            acc[camelToDashCase(name)] = value;
          }
        }
        return acc;
      }, {});
      if (manipulatePropsFunction) {
        propsToPass = manipulatePropsFunction(this.props, propsToPass);
      }
      const newProps = Object.assign(Object.assign({}, propsToPass), { ref: mergeRefs(forwardedRef, this.setComponentElRef), style });
      return (0, import_react.createElement)(tagName, newProps, children);
    }
    static get displayName() {
      return displayName;
    }
  };
  if (ReactComponentContext) {
    ReactComponent.contextType = ReactComponentContext;
  }
  return createForwardRef$1(ReactComponent, displayName);
};
var createForwardRef = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return import_react.default.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  return import_react.default.forwardRef(forwardRef);
};
var getConfig = () => {
  if (typeof window !== "undefined") {
    const Ionic = window.Ionic;
    if (Ionic && Ionic.config) {
      return Ionic.config;
    }
  }
  return null;
};
var IonContext = import_react.default.createContext({
  addOverlay: () => {
    return;
  },
  removeOverlay: () => {
    return;
  }
});
var IonTabButtonInner = /* @__PURE__ */ createReactComponent("ion-tab-button", void 0, void 0, defineCustomElement5);
var IonTabBarInner = /* @__PURE__ */ createReactComponent("ion-tab-bar", void 0, void 0, defineCustomElement4);
var IonRouterOutletInner = /* @__PURE__ */ createReactComponent("ion-router-outlet", void 0, void 0, defineCustomElement3);
var IonIconInner = /* @__PURE__ */ createReactComponent("ion-icon", void 0, void 0, defineCustomElement6);
var StackContext = import_react.default.createContext({
  registerIonPage: () => void 0,
  isInOutlet: () => false
});
var PageManager = class extends import_react.default.PureComponent {
  constructor(props) {
    super(props);
    this.ionPageElementRef = import_react.default.createRef();
    this.stableMergedRefs = mergeRefs(this.ionPageElementRef, this.props.forwardedRef);
    this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this);
    this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this);
    this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this);
    this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    if (this.ionPageElementRef.current) {
      if (this.context.isInOutlet()) {
        this.ionPageElementRef.current.classList.add("ion-page-invisible");
      }
      this.context.registerIonPage(this.ionPageElementRef.current, this.props.routeInfo);
      this.ionPageElementRef.current.addEventListener("ionViewWillEnter", this.ionViewWillEnterHandler);
      this.ionPageElementRef.current.addEventListener("ionViewDidEnter", this.ionViewDidEnterHandler);
      this.ionPageElementRef.current.addEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler);
      this.ionPageElementRef.current.addEventListener("ionViewDidLeave", this.ionViewDidLeaveHandler);
    }
  }
  componentWillUnmount() {
    if (this.ionPageElementRef.current) {
      this.ionPageElementRef.current.removeEventListener("ionViewWillEnter", this.ionViewWillEnterHandler);
      this.ionPageElementRef.current.removeEventListener("ionViewDidEnter", this.ionViewDidEnterHandler);
      this.ionPageElementRef.current.removeEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler);
    }
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const _a = this.props, { className, children, routeInfo, forwardedRef } = _a, props = __rest(_a, ["className", "children", "routeInfo", "forwardedRef"]);
    return import_react.default.createElement(IonLifeCycleContext.Consumer, null, (context) => {
      this.ionLifeCycleContext = context;
      return import_react.default.createElement("div", Object.assign({ className: className ? `${className} ion-page` : `ion-page`, ref: this.stableMergedRefs }, props), children);
    });
  }
  static get contextType() {
    return StackContext;
  }
};
var IonPageInternal = class extends import_react.default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const _a = this.props, { className, children, forwardedRef } = _a, props = __rest(_a, ["className", "children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? import_react.default.createElement(PageManager, Object.assign({ className: className ? `${className}` : "", routeInfo: this.context.routeInfo, forwardedRef }, props), children) : import_react.default.createElement("div", Object.assign({ className: className ? `ion-page ${className}` : "ion-page", ref: forwardedRef }, props), children);
  }
  static get displayName() {
    return "IonPage";
  }
  static get contextType() {
    return NavContext;
  }
};
var IonPage = createForwardRef(IonPageInternal, "IonPage");
var ids = { main: 0 };
var generateId = (type = "main") => {
  var _a;
  const id = ((_a = ids[type]) !== null && _a !== void 0 ? _a : 0) + 1;
  ids[type] = id;
  return id.toString();
};
var ReactDelegate = (addView, removeView) => {
  const refMap = /* @__PURE__ */ new WeakMap();
  const reactDelegateId = `react-delegate-${generateId()}`;
  let id = 0;
  const attachViewToDom = async (parentElement, component, propsOrDataObj, cssClasses) => {
    const div = document.createElement("div");
    cssClasses && div.classList.add(...cssClasses);
    parentElement.appendChild(div);
    const componentWithProps = component(propsOrDataObj);
    const key = `${reactDelegateId}-${id++}`;
    const hostComponent = (0, import_react_dom.createPortal)(componentWithProps, div, key);
    refMap.set(div, hostComponent);
    addView(hostComponent);
    return Promise.resolve(div);
  };
  const removeViewFromDom = (_container, component) => {
    const hostComponent = refMap.get(component);
    hostComponent && removeView(hostComponent);
    component.remove();
    return Promise.resolve();
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};
var IonNavInner = createReactComponent("ion-nav", void 0, void 0, defineCustomElement2);
var IonNavInternal = (_a) => {
  var { children, forwardedRef } = _a, restOfProps = __rest(_a, ["children", "forwardedRef"]);
  const [views, setViews] = (0, import_react.useState)([]);
  const addView = (view) => setViews((existingViews) => [...existingViews, view]);
  const removeView = (view) => setViews((existingViews) => existingViews.filter((v) => v !== view));
  const delegate = (0, import_react.useMemo)(() => ReactDelegate(addView, removeView), []);
  return import_react.default.createElement(IonNavInner, Object.assign({ delegate, ref: forwardedRef }, restOfProps), views);
};
var IonNav = createForwardRef(IonNavInternal, "IonNav");
var IonTabsContext = import_react.default.createContext({
  activeTab: void 0,
  selectTab: () => false,
  hasRouterOutlet: false,
  tabBarProps: { ref: import_react.default.createRef() }
});
var HTMLElementSSR = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
var OutletPageManager = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.outletIsReady = false;
    this.ionViewWillEnterHandler = this.ionViewWillEnterHandler.bind(this);
    this.ionViewDidEnterHandler = this.ionViewDidEnterHandler.bind(this);
    this.ionViewWillLeaveHandler = this.ionViewWillLeaveHandler.bind(this);
    this.ionViewDidLeaveHandler = this.ionViewDidLeaveHandler.bind(this);
  }
  componentDidMount() {
    if (this.ionRouterOutlet) {
      if (!this.outletIsReady) {
        componentOnReady(this.ionRouterOutlet, () => {
          this.outletIsReady = true;
          this.context.registerIonPage(this.ionRouterOutlet, this.props.routeInfo);
        });
      }
      this.ionRouterOutlet.addEventListener("ionViewWillEnter", this.ionViewWillEnterHandler);
      this.ionRouterOutlet.addEventListener("ionViewDidEnter", this.ionViewDidEnterHandler);
      this.ionRouterOutlet.addEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler);
      this.ionRouterOutlet.addEventListener("ionViewDidLeave", this.ionViewDidLeaveHandler);
    }
  }
  componentWillUnmount() {
    if (this.ionRouterOutlet) {
      this.ionRouterOutlet.removeEventListener("ionViewWillEnter", this.ionViewWillEnterHandler);
      this.ionRouterOutlet.removeEventListener("ionViewDidEnter", this.ionViewDidEnterHandler);
      this.ionRouterOutlet.removeEventListener("ionViewWillLeave", this.ionViewWillLeaveHandler);
      this.ionRouterOutlet.removeEventListener("ionViewDidLeave", this.ionViewDidLeaveHandler);
    }
  }
  ionViewWillEnterHandler() {
    this.ionLifeCycleContext.ionViewWillEnter();
  }
  ionViewDidEnterHandler() {
    this.ionLifeCycleContext.ionViewDidEnter();
  }
  ionViewWillLeaveHandler() {
    this.ionLifeCycleContext.ionViewWillLeave();
  }
  ionViewDidLeaveHandler() {
    this.ionLifeCycleContext.ionViewDidLeave();
  }
  render() {
    const _a = this.props, { StackManager, children, routeInfo } = _a, props = __rest(_a, ["StackManager", "children", "routeInfo"]);
    return import_react.default.createElement(IonLifeCycleContext.Consumer, null, (context) => {
      this.ionLifeCycleContext = context;
      return import_react.default.createElement(
        StackManager,
        { routeInfo },
        import_react.default.createElement(IonRouterOutletInner, Object.assign({ setRef: (val) => this.ionRouterOutlet = val }, props), children)
      );
    });
  }
  static get contextType() {
    return StackContext;
  }
};
var IonRouterOutletContainer = class extends import_react.default.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const StackManager = this.context.getStackManager();
    const _a = this.props, { children, forwardedRef } = _a, props = __rest(_a, ["children", "forwardedRef"]);
    return this.context.hasIonicRouter() ? props.ionPage ? import_react.default.createElement(OutletPageManager, Object.assign({ StackManager, routeInfo: this.context.routeInfo }, props), children) : import_react.default.createElement(
      StackManager,
      { routeInfo: this.context.routeInfo },
      import_react.default.createElement(IonRouterOutletInner, Object.assign({}, props, { forwardedRef }), children)
    ) : import_react.default.createElement(IonRouterOutletInner, Object.assign({ ref: forwardedRef }, this.props), this.props.children);
  }
  static get contextType() {
    return NavContext;
  }
};
var IonRouterOutlet = createForwardRef(IonRouterOutletContainer, "IonRouterOutlet");
var IonTabsElement = class extends HTMLElementSSR {
  constructor() {
    super();
  }
};
if (typeof window !== "undefined" && window.customElements) {
  const element = window.customElements.get("ion-tabs");
  if (!element) {
    window.customElements.define("ion-tabs", IonTabsElement);
  }
}
var IonTabButton = /* @__PURE__ */ (() => class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.handleIonTabButtonClick = this.handleIonTabButtonClick.bind(this);
  }
  handleIonTabButtonClick() {
    if (this.props.onClick) {
      this.props.onClick(new CustomEvent("ionTabButtonClick", {
        detail: {
          tab: this.props.tab,
          href: this.props.href,
          routeOptions: this.props.routerOptions
        }
      }));
    }
  }
  render() {
    const _a = this.props, rest = __rest(_a, ["onClick"]);
    return import_react.default.createElement(IonTabButtonInner, Object.assign({ onIonTabButtonClick: this.handleIonTabButtonClick }, rest));
  }
  static get displayName() {
    return "IonTabButton";
  }
})();
var IonTabBarUnwrapped = class extends import_react.default.PureComponent {
  constructor(props) {
    super(props);
    this.setActiveTabOnContext = (_tab) => {
    };
    const tabs = {};
    import_react.default.Children.forEach(props.children, (child) => {
      var _a, _b, _c, _d;
      if (child != null && typeof child === "object" && child.props && (child.type === IonTabButton || child.type.isTabButton)) {
        tabs[child.props.tab] = {
          originalHref: child.props.href,
          currentHref: child.props.href,
          originalRouteOptions: child.props.href === ((_a = props.routeInfo) === null || _a === void 0 ? void 0 : _a.pathname) ? (_b = props.routeInfo) === null || _b === void 0 ? void 0 : _b.routeOptions : void 0,
          currentRouteOptions: child.props.href === ((_c = props.routeInfo) === null || _c === void 0 ? void 0 : _c.pathname) ? (_d = props.routeInfo) === null || _d === void 0 ? void 0 : _d.routeOptions : void 0
        };
      }
    });
    this.state = {
      tabs
    };
    this.onTabButtonClick = this.onTabButtonClick.bind(this);
    this.renderTabButton = this.renderTabButton.bind(this);
    this.setActiveTabOnContext = this.setActiveTabOnContext.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }
  componentDidMount() {
    const tabs = this.state.tabs;
    const tabKeys = Object.keys(tabs);
    const activeTab = tabKeys.find((key) => {
      const href = tabs[key].originalHref;
      return this.props.routeInfo.pathname.startsWith(href);
    });
    if (activeTab) {
      this.setState({
        activeTab
      });
    }
  }
  componentDidUpdate() {
    if (this.state.activeTab) {
      this.setActiveTabOnContext(this.state.activeTab);
    }
  }
  selectTab(tab) {
    const tabUrl = this.state.tabs[tab];
    if (tabUrl) {
      this.onTabButtonClick(new CustomEvent("ionTabButtonClick", {
        detail: {
          href: tabUrl.currentHref,
          tab,
          selected: tab === this.state.activeTab,
          routeOptions: void 0
        }
      }));
      return true;
    }
    return false;
  }
  static getDerivedStateFromProps(props, state) {
    var _a, _b, _c;
    const tabs = Object.assign({}, state.tabs);
    const tabKeys = Object.keys(state.tabs);
    const activeTab = tabKeys.find((key) => {
      const href = state.tabs[key].originalHref;
      return props.routeInfo.pathname.startsWith(href);
    });
    import_react.default.Children.forEach(props.children, (child) => {
      if (child != null && typeof child === "object" && child.props && (child.type === IonTabButton || child.type.isTabButton)) {
        const tab = tabs[child.props.tab];
        if (!tab || tab.originalHref !== child.props.href) {
          tabs[child.props.tab] = {
            originalHref: child.props.href,
            currentHref: child.props.href,
            originalRouteOptions: child.props.routeOptions,
            currentRouteOptions: child.props.routeOptions
          };
        }
      }
    });
    const { activeTab: prevActiveTab } = state;
    if (activeTab && prevActiveTab) {
      const prevHref = state.tabs[prevActiveTab].currentHref;
      const prevRouteOptions = state.tabs[prevActiveTab].currentRouteOptions;
      if (activeTab !== prevActiveTab || prevHref !== ((_a = props.routeInfo) === null || _a === void 0 ? void 0 : _a.pathname) || prevRouteOptions !== ((_b = props.routeInfo) === null || _b === void 0 ? void 0 : _b.routeOptions)) {
        tabs[activeTab] = {
          originalHref: tabs[activeTab].originalHref,
          currentHref: props.routeInfo.pathname + (props.routeInfo.search || ""),
          originalRouteOptions: tabs[activeTab].originalRouteOptions,
          currentRouteOptions: (_c = props.routeInfo) === null || _c === void 0 ? void 0 : _c.routeOptions
        };
        if (props.routeInfo.routeAction === "pop" && activeTab !== prevActiveTab) {
          tabs[prevActiveTab] = {
            originalHref: tabs[prevActiveTab].originalHref,
            currentHref: tabs[prevActiveTab].originalHref,
            originalRouteOptions: tabs[prevActiveTab].originalRouteOptions,
            currentRouteOptions: tabs[prevActiveTab].currentRouteOptions
          };
        }
      }
    }
    activeTab && props.onSetCurrentTab(activeTab, props.routeInfo);
    return {
      activeTab,
      tabs
    };
  }
  onTabButtonClick(e, onClickFn) {
    var _a;
    const tappedTab = this.state.tabs[e.detail.tab];
    const originalHref = tappedTab.originalHref;
    const hasRouterOutlet = (_a = this.props.tabsContext) === null || _a === void 0 ? void 0 : _a.hasRouterOutlet;
    const currentHref = hasRouterOutlet ? e.detail.href : "";
    const { activeTab: prevActiveTab } = this.state;
    if (onClickFn) {
      onClickFn(e);
    }
    if (prevActiveTab === e.detail.tab) {
      if (originalHref !== currentHref) {
        this.context.resetTab(e.detail.tab, originalHref, tappedTab.originalRouteOptions);
      }
    } else {
      if (this.props.onIonTabsWillChange) {
        this.props.onIonTabsWillChange(new CustomEvent("ionTabWillChange", { detail: { tab: e.detail.tab } }));
      }
      if (this.props.onIonTabsDidChange) {
        this.props.onIonTabsDidChange(new CustomEvent("ionTabDidChange", { detail: { tab: e.detail.tab } }));
      }
      if (hasRouterOutlet) {
        this.setActiveTabOnContext(e.detail.tab);
        this.context.changeTab(e.detail.tab, currentHref, e.detail.routeOptions);
      }
    }
  }
  renderTabButton(activeTab) {
    return (child) => {
      var _a, _b;
      if (child != null && child.props && (child.type === IonTabButton || child.type.isTabButton)) {
        const href = child.props.tab === activeTab ? (_a = this.props.routeInfo) === null || _a === void 0 ? void 0 : _a.pathname : this.state.tabs[child.props.tab].currentHref;
        const routeOptions = child.props.tab === activeTab ? (_b = this.props.routeInfo) === null || _b === void 0 ? void 0 : _b.routeOptions : this.state.tabs[child.props.tab].currentRouteOptions;
        return import_react.default.cloneElement(child, {
          href,
          routeOptions,
          onClick: (ev) => this.onTabButtonClick(ev, child.props.onClick)
        });
      }
      return null;
    };
  }
  render() {
    const { activeTab } = this.state;
    return import_react.default.createElement(IonTabBarInner, Object.assign({}, this.props, { selectedTab: activeTab }), import_react.default.Children.map(this.props.children, this.renderTabButton(activeTab)));
  }
  static get contextType() {
    return NavContext;
  }
};
var IonTabBarContainer = import_react.default.memo((_a) => {
  var { forwardedRef } = _a, props = __rest(_a, ["forwardedRef"]);
  const context = (0, import_react.useContext)(NavContext);
  const tabsContext = (0, import_react.useContext)(IonTabsContext);
  const tabBarRef = forwardedRef || tabsContext.tabBarProps.ref;
  const updatedTabBarProps = Object.assign(Object.assign({}, tabsContext.tabBarProps), { ref: tabBarRef });
  return import_react.default.createElement(IonTabBarUnwrapped, Object.assign({ ref: tabBarRef }, props, {
    routeInfo: props.routeInfo || context.routeInfo || { pathname: window.location.pathname },
    onSetCurrentTab: context.setCurrentTab,
    /**
     * Tab bar can be used as a standalone component,
     * so it cannot be modified directly through
     * IonTabs. Instead, props will be passed through
     * the context.
     */
    tabsContext: Object.assign(Object.assign({}, tabsContext), { tabBarProps: updatedTabBarProps })
  }), props.children);
});
var IonTabBar = createForwardRef(IonTabBarContainer, "IonTabBar");
var IonIconContainer = class extends import_react.default.PureComponent {
  constructor(props) {
    super(props);
    if (this.props.name) {
      console.warn('In Ionic React, you import icons from "ionicons/icons" and set the icon you imported to the "icon" property. Setting the "name" property has no effect.');
    }
  }
  render() {
    var _a, _b;
    const _c = this.props, { icon, ios, md, mode } = _c, rest = __rest(_c, ["icon", "ios", "md", "mode"]);
    let iconToUse;
    const config2 = getConfig();
    const iconMode = mode || (config2 === null || config2 === void 0 ? void 0 : config2.get("mode"));
    if (ios || md) {
      if (iconMode === "ios") {
        iconToUse = (_a = ios !== null && ios !== void 0 ? ios : md) !== null && _a !== void 0 ? _a : icon;
      } else {
        iconToUse = (_b = md !== null && md !== void 0 ? md : ios) !== null && _b !== void 0 ? _b : icon;
      }
    } else {
      iconToUse = icon;
    }
    return import_react.default.createElement(IonIconInner, Object.assign({ ref: this.props.forwardedRef, icon: iconToUse }, rest), this.props.children);
  }
  static get contextType() {
    return NavContext;
  }
};
var IonIcon = createForwardRef(IonIconContainer, "IonIcon");
var IonRoute = class extends import_react.default.PureComponent {
  render() {
    const IonRouteInner = this.context.getIonRoute();
    if (!this.context.hasIonicRouter() || !IonRoute) {
      console.error("You either do not have an Ionic Router package, or your router does not support using <IonRoute>");
      return null;
    }
    return import_react.default.createElement(IonRouteInner, Object.assign({}, this.props));
  }
  static get contextType() {
    return NavContext;
  }
};
var IonRedirect = class extends import_react.default.PureComponent {
  render() {
    const IonRedirectInner = this.context.getIonRedirect();
    if (!this.context.hasIonicRouter() || !IonRedirect) {
      console.error("You either do not have an Ionic Router package, or your router does not support using <IonRedirect>");
      return null;
    }
    return import_react.default.createElement(IonRedirectInner, Object.assign({}, this.props));
  }
  static get contextType() {
    return NavContext;
  }
};
var IonRouterContext = import_react.default.createContext({
  routeInfo: void 0,
  // TODO(FW-2959): type
  push: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  back: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  canGoBack: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  },
  nativeBack: () => {
    throw new Error("An Ionic Router is required for IonRouterContext");
  }
});
var CreateAnimation = class extends import_react.default.PureComponent {
  constructor(props) {
    super(props);
    this.nodes = /* @__PURE__ */ new Map();
    this.animation = createAnimation(props.id);
  }
  setupAnimation(props) {
    const animation = this.animation;
    if (this.nodes.size > 0) {
      animation.addElement(Array.from(this.nodes.values()));
    }
    checkConfig(animation, props);
    checkPlayback(animation, props);
  }
  componentDidMount() {
    const props = this.props;
    this.setupAnimation(props);
  }
  componentDidUpdate(prevProps) {
    const animation = this.animation;
    const props = this.props;
    checkConfig(animation, props, prevProps);
    checkProgress(animation, props, prevProps);
    checkPlayback(animation, props, prevProps);
  }
  render() {
    const { children } = this.props;
    return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.Children.map(children, (child, id) => import_react.default.cloneElement(child, { ref: (el) => this.nodes.set(id, el) })));
  }
};
var checkConfig = (animation, currentProps = {}, prevProps = {}) => {
  const reservedProps = [
    "children",
    "progressStart",
    "progressStep",
    "progressEnd",
    "pause",
    "stop",
    "destroy",
    "play",
    "from",
    "to",
    "fromTo",
    "onFinish"
  ];
  for (const key in currentProps) {
    if (
      // eslint-disable-next-line no-prototype-builtins
      currentProps.hasOwnProperty(key) && !reservedProps.includes(key) && currentProps[key] !== prevProps[key]
    ) {
      animation[key](currentProps[key]);
    }
  }
  const fromValues = currentProps.from;
  if (fromValues && fromValues !== prevProps.from) {
    const values = Array.isArray(fromValues) ? fromValues : [fromValues];
    values.forEach((val) => animation.from(val.property, val.value));
  }
  const toValues = currentProps.to;
  if (toValues && toValues !== prevProps.to) {
    const values = Array.isArray(toValues) ? toValues : [toValues];
    values.forEach((val) => animation.to(val.property, val.value));
  }
  const fromToValues = currentProps.fromTo;
  if (fromToValues && fromToValues !== prevProps.fromTo) {
    const values = Array.isArray(fromToValues) ? fromToValues : [fromToValues];
    values.forEach((val) => animation.fromTo(val.property, val.fromValue, val.toValue));
  }
  const onFinishValues = currentProps.onFinish;
  if (onFinishValues && onFinishValues !== prevProps.onFinish) {
    const values = Array.isArray(onFinishValues) ? onFinishValues : [onFinishValues];
    values.forEach((val) => animation.onFinish(val.callback, val.opts));
  }
};
var checkProgress = (animation, currentProps = {}, prevProps = {}) => {
  var _a, _b, _c, _d, _e;
  const { progressStart, progressStep, progressEnd } = currentProps;
  if (progressStart && (((_a = prevProps.progressStart) === null || _a === void 0 ? void 0 : _a.forceLinearEasing) !== (progressStart === null || progressStart === void 0 ? void 0 : progressStart.forceLinearEasing) || ((_b = prevProps.progressStart) === null || _b === void 0 ? void 0 : _b.step) !== (progressStart === null || progressStart === void 0 ? void 0 : progressStart.step))) {
    animation.progressStart(progressStart.forceLinearEasing, progressStart.step);
  }
  if (progressStep && ((_c = prevProps.progressStep) === null || _c === void 0 ? void 0 : _c.step) !== (progressStep === null || progressStep === void 0 ? void 0 : progressStep.step)) {
    animation.progressStep(progressStep.step);
  }
  if (progressEnd && (((_d = prevProps.progressEnd) === null || _d === void 0 ? void 0 : _d.playTo) !== (progressEnd === null || progressEnd === void 0 ? void 0 : progressEnd.playTo) || ((_e = prevProps.progressEnd) === null || _e === void 0 ? void 0 : _e.step) !== (progressEnd === null || progressEnd === void 0 ? void 0 : progressEnd.step) || (prevProps === null || prevProps === void 0 ? void 0 : prevProps.dur) !== (progressEnd === null || progressEnd === void 0 ? void 0 : progressEnd.dur))) {
    animation.progressEnd(progressEnd.playTo, progressEnd.step, progressEnd.dur);
  }
};
var checkPlayback = (animation, currentProps = {}, prevProps = {}) => {
  if (!prevProps.play && currentProps.play) {
    animation.play();
  }
  if (!prevProps.pause && currentProps.pause) {
    animation.pause();
  }
  if (!prevProps.stop && currentProps.stop) {
    animation.stop();
  }
  if (!prevProps.destroy && currentProps.destroy) {
    animation.destroy();
  }
};
var setupIonicReact = (config2 = {}) => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("ion-ce");
  }
  initialize(Object.assign({}, config2));
};
var ViewLifeCycleManager = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.ionLifeCycleContext = new DefaultIonLifeCycleContext();
    this._isMounted = false;
    this.ionLifeCycleContext.onComponentCanBeDestroyed(() => {
      if (!this.props.mount) {
        if (this._isMounted) {
          this.setState({
            show: false
          }, () => this.props.removeView());
        }
      }
    });
    this.state = {
      show: true
    };
  }
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { show } = this.state;
    return import_react.default.createElement(IonLifeCycleContext.Provider, { value: this.ionLifeCycleContext }, show && this.props.children);
  }
};
var NavManager = class extends import_react.default.PureComponent {
  constructor(props) {
    super(props);
    this.ionRouterContextValue = {
      push: (pathname, routerDirection, routeAction, routerOptions, animationBuilder) => {
        this.navigate(pathname, routerDirection, routeAction, animationBuilder, routerOptions);
      },
      back: (animationBuilder) => {
        this.goBack(void 0, animationBuilder);
      },
      canGoBack: () => this.props.locationHistory.canGoBack(),
      nativeBack: () => this.props.onNativeBack(),
      routeInfo: this.props.routeInfo
    };
    this.state = {
      goBack: this.goBack.bind(this),
      hasIonicRouter: () => true,
      navigate: this.navigate.bind(this),
      getIonRedirect: this.getIonRedirect.bind(this),
      getIonRoute: this.getIonRoute.bind(this),
      getStackManager: this.getStackManager.bind(this),
      getPageManager: this.getPageManager.bind(this),
      routeInfo: this.props.routeInfo,
      setCurrentTab: this.props.onSetCurrentTab,
      changeTab: this.props.onChangeTab,
      resetTab: this.props.onResetTab
    };
  }
  componentDidMount() {
    if (typeof document !== "undefined") {
      this.handleHardwareBackButton = this.handleHardwareBackButton.bind(this);
      document.addEventListener("ionBackButton", this.handleHardwareBackButton);
    }
  }
  componentWillUnmount() {
    if (typeof document !== "undefined") {
      document.removeEventListener("ionBackButton", this.handleHardwareBackButton);
    }
  }
  handleHardwareBackButton(e) {
    e.detail.register(0, (processNextHandler) => {
      this.nativeGoBack();
      processNextHandler();
    });
  }
  goBack(route, animationBuilder) {
    this.props.onNavigateBack(route, animationBuilder);
  }
  nativeGoBack() {
    this.props.onNativeBack();
  }
  navigate(path, direction = "forward", action = "push", animationBuilder, options, tab) {
    this.props.onNavigate(path, action, direction, animationBuilder, options, tab);
  }
  getPageManager() {
    return PageManager;
  }
  getIonRedirect() {
    return this.props.ionRedirect;
  }
  getIonRoute() {
    return this.props.ionRoute;
  }
  getStackManager() {
    return this.props.stackManager;
  }
  render() {
    return import_react.default.createElement(
      NavContext.Provider,
      { value: Object.assign(Object.assign({}, this.state), { routeInfo: this.props.routeInfo }) },
      import_react.default.createElement(IonRouterContext.Provider, { value: Object.assign(Object.assign({}, this.ionRouterContextValue), { routeInfo: this.props.routeInfo }) }, this.props.children)
    );
  }
};

// app/entry.client.tsx
var import_react4 = __toESM(require_react(), 1);
var import_client8 = __toESM(require_client(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\entry.client.tsx"
  );
  import.meta.hot.lastModified = "1741341488221.921";
}
setupIonicReact();
(0, import_react4.startTransition)(() => {
  (0, import_client8.hydrateRoot)(
    document,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this)
  );
});
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@ionic/core/components/cubic-bezier.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/theme.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/framework-delegate.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/ripple-effect.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/lock-controller.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/keyboard-controller.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/ion-nav.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/ion-router-outlet.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/ion-tab-bar.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/components/ion-tab-button.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/react/dist/index.js:
  (**
   * Checks if an event is supported in the current execution environment.
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   *)
*/
//# sourceMappingURL=/build/entry.client-IZPLCYTJ.js.map
