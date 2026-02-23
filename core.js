(function () {
  const C = document.createElement("link").relList;
  if (C && C.supports && C.supports("modulepreload")) return;
  for (const O of document.querySelectorAll('link[rel="modulepreload"]')) d(O);
  new MutationObserver((O) => {
    for (const M of O)
      if (M.type === "childList")
        for (const G of M.addedNodes)
          G.tagName === "LINK" && G.rel === "modulepreload" && d(G);
  }).observe(document, { childList: !0, subtree: !0 });
  function A(O) {
    const M = {};
    return (
      O.integrity && (M.integrity = O.integrity),
      O.referrerPolicy && (M.referrerPolicy = O.referrerPolicy),
      O.crossOrigin === "use-credentials"
        ? (M.credentials = "include")
        : O.crossOrigin === "anonymous"
          ? (M.credentials = "omit")
          : (M.credentials = "same-origin"),
      M
    );
  }
  function d(O) {
    if (O.ep) return;
    O.ep = !0;
    const M = A(O);
    fetch(O.href, M);
  }
})();
function B0(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default")
    ? h.default
    : h;
}
var vf = { exports: {} },
  En = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var j0;
function fh() {
  if (j0) return En;
  j0 = 1;
  var h = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.fragment");
  function A(d, O, M) {
    var G = null;
    if (
      (M !== void 0 && (G = "" + M),
      O.key !== void 0 && (G = "" + O.key),
      "key" in O)
    ) {
      M = {};
      for (var I in O) I !== "key" && (M[I] = O[I]);
    } else M = O;
    return (
      (O = M.ref),
      { $$typeof: h, type: d, key: G, ref: O !== void 0 ? O : null, props: M }
    );
  }
  return ((En.Fragment = C), (En.jsx = A), (En.jsxs = A), En);
}
var M0;
function sh() {
  return (M0 || ((M0 = 1), (vf.exports = fh())), vf.exports);
}
var o = sh(),
  yf = { exports: {} },
  ll = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _0;
function oh() {
  if (_0) return ll;
  _0 = 1;
  var h = Symbol.for("react.transitional.element"),
    C = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    M = Symbol.for("react.consumer"),
    G = Symbol.for("react.context"),
    I = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    Y = Symbol.for("react.activity"),
    Z = Symbol.iterator;
  function il(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (Z && f[Z]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var ml = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    tl = Object.assign,
    Bl = {};
  function q(f, g, E) {
    ((this.props = f),
      (this.context = g),
      (this.refs = Bl),
      (this.updater = E || ml));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (f, g) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, g, "setState");
    }),
    (q.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function k() {}
  k.prototype = q.prototype;
  function w(f, g, E) {
    ((this.props = f),
      (this.context = g),
      (this.refs = Bl),
      (this.updater = E || ml));
  }
  var cl = (w.prototype = new k());
  ((cl.constructor = w), tl(cl, q.prototype), (cl.isPureReactComponent = !0));
  var W = Array.isArray;
  function _() {}
  var p = { H: null, A: null, T: null, S: null },
    R = Object.prototype.hasOwnProperty;
  function P(f, g, E) {
    var U = E.ref;
    return {
      $$typeof: h,
      type: f,
      key: g,
      ref: U !== void 0 ? U : null,
      props: E,
    };
  }
  function sl(f, g) {
    return P(f.type, g, f.props);
  }
  function ol(f) {
    return typeof f == "object" && f !== null && f.$$typeof === h;
  }
  function al(f) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (E) {
        return g[E];
      })
    );
  }
  var nl = /\/+/g;
  function Sl(f, g) {
    return typeof f == "object" && f !== null && f.key != null
      ? al("" + f.key)
      : g.toString(36);
  }
  function xl(f) {
    switch (f.status) {
      case "fulfilled":
        return f.value;
      case "rejected":
        throw f.reason;
      default:
        switch (
          (typeof f.status == "string"
            ? f.then(_, _)
            : ((f.status = "pending"),
              f.then(
                function (g) {
                  f.status === "pending" &&
                    ((f.status = "fulfilled"), (f.value = g));
                },
                function (g) {
                  f.status === "pending" &&
                    ((f.status = "rejected"), (f.reason = g));
                },
              )),
          f.status)
        ) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
        }
    }
    throw f;
  }
  function x(f, g, E, U, B) {
    var $ = typeof f;
    ($ === "undefined" || $ === "boolean") && (f = null);
    var gl = !1;
    if (f === null) gl = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          gl = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case h:
            case C:
              gl = !0;
              break;
            case Q:
              return ((gl = f._init), x(gl(f._payload), g, E, U, B));
          }
      }
    if (gl)
      return (
        (B = B(f)),
        (gl = U === "" ? "." + Sl(f, 0) : U),
        W(B)
          ? ((E = ""),
            gl != null && (E = gl.replace(nl, "$&/") + "/"),
            x(B, g, E, "", function (Da) {
              return Da;
            }))
          : B != null &&
            (ol(B) &&
              (B = sl(
                B,
                E +
                  (B.key == null || (f && f.key === B.key)
                    ? ""
                    : ("" + B.key).replace(nl, "$&/") + "/") +
                  gl,
              )),
            g.push(B)),
        1
      );
    gl = 0;
    var wl = U === "" ? "." : U + ":";
    if (W(f))
      for (var Ol = 0; Ol < f.length; Ol++)
        ((U = f[Ol]), ($ = wl + Sl(U, Ol)), (gl += x(U, g, E, $, B)));
    else if (((Ol = il(f)), typeof Ol == "function"))
      for (f = Ol.call(f), Ol = 0; !(U = f.next()).done; )
        ((U = U.value), ($ = wl + Sl(U, Ol++)), (gl += x(U, g, E, $, B)));
    else if ($ === "object") {
      if (typeof f.then == "function") return x(xl(f), g, E, U, B);
      throw (
        (g = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : g) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return gl;
  }
  function H(f, g, E) {
    if (f == null) return f;
    var U = [],
      B = 0;
    return (
      x(f, U, "", "", function ($) {
        return g.call(E, $, B++);
      }),
      U
    );
  }
  function X(f) {
    if (f._status === -1) {
      var g = f._result;
      ((g = g()),
        g.then(
          function (E) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = E));
          },
          function (E) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = E));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = g)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var el =
      typeof reportError == "function"
        ? reportError
        : function (f) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var g = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof f == "object" &&
                  f !== null &&
                  typeof f.message == "string"
                    ? String(f.message)
                    : String(f),
                error: f,
              });
              if (!window.dispatchEvent(g)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", f);
              return;
            }
            console.error(f);
          },
    hl = {
      map: H,
      forEach: function (f, g, E) {
        H(
          f,
          function () {
            g.apply(this, arguments);
          },
          E,
        );
      },
      count: function (f) {
        var g = 0;
        return (
          H(f, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (f) {
        return (
          H(f, function (g) {
            return g;
          }) || []
        );
      },
      only: function (f) {
        if (!ol(f))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return f;
      },
    };
  return (
    (ll.Activity = Y),
    (ll.Children = hl),
    (ll.Component = q),
    (ll.Fragment = A),
    (ll.Profiler = O),
    (ll.PureComponent = w),
    (ll.StrictMode = d),
    (ll.Suspense = D),
    (ll.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = p),
    (ll.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (f) {
        return p.H.useMemoCache(f);
      },
    }),
    (ll.cache = function (f) {
      return function () {
        return f.apply(null, arguments);
      };
    }),
    (ll.cacheSignal = function () {
      return null;
    }),
    (ll.cloneElement = function (f, g, E) {
      if (f == null)
        throw Error(
          "The argument must be a React element, but you passed " + f + ".",
        );
      var U = tl({}, f.props),
        B = f.key;
      if (g != null)
        for ($ in (g.key !== void 0 && (B = "" + g.key), g))
          !R.call(g, $) ||
            $ === "key" ||
            $ === "__self" ||
            $ === "__source" ||
            ($ === "ref" && g.ref === void 0) ||
            (U[$] = g[$]);
      var $ = arguments.length - 2;
      if ($ === 1) U.children = E;
      else if (1 < $) {
        for (var gl = Array($), wl = 0; wl < $; wl++)
          gl[wl] = arguments[wl + 2];
        U.children = gl;
      }
      return P(f.type, B, U);
    }),
    (ll.createContext = function (f) {
      return (
        (f = {
          $$typeof: G,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (f.Provider = f),
        (f.Consumer = { $$typeof: M, _context: f }),
        f
      );
    }),
    (ll.createElement = function (f, g, E) {
      var U,
        B = {},
        $ = null;
      if (g != null)
        for (U in (g.key !== void 0 && ($ = "" + g.key), g))
          R.call(g, U) &&
            U !== "key" &&
            U !== "__self" &&
            U !== "__source" &&
            (B[U] = g[U]);
      var gl = arguments.length - 2;
      if (gl === 1) B.children = E;
      else if (1 < gl) {
        for (var wl = Array(gl), Ol = 0; Ol < gl; Ol++)
          wl[Ol] = arguments[Ol + 2];
        B.children = wl;
      }
      if (f && f.defaultProps)
        for (U in ((gl = f.defaultProps), gl))
          B[U] === void 0 && (B[U] = gl[U]);
      return P(f, $, B);
    }),
    (ll.createRef = function () {
      return { current: null };
    }),
    (ll.forwardRef = function (f) {
      return { $$typeof: I, render: f };
    }),
    (ll.isValidElement = ol),
    (ll.lazy = function (f) {
      return { $$typeof: Q, _payload: { _status: -1, _result: f }, _init: X };
    }),
    (ll.memo = function (f, g) {
      return { $$typeof: S, type: f, compare: g === void 0 ? null : g };
    }),
    (ll.startTransition = function (f) {
      var g = p.T,
        E = {};
      p.T = E;
      try {
        var U = f(),
          B = p.S;
        (B !== null && B(E, U),
          typeof U == "object" &&
            U !== null &&
            typeof U.then == "function" &&
            U.then(_, el));
      } catch ($) {
        el($);
      } finally {
        (g !== null && E.types !== null && (g.types = E.types), (p.T = g));
      }
    }),
    (ll.unstable_useCacheRefresh = function () {
      return p.H.useCacheRefresh();
    }),
    (ll.use = function (f) {
      return p.H.use(f);
    }),
    (ll.useActionState = function (f, g, E) {
      return p.H.useActionState(f, g, E);
    }),
    (ll.useCallback = function (f, g) {
      return p.H.useCallback(f, g);
    }),
    (ll.useContext = function (f) {
      return p.H.useContext(f);
    }),
    (ll.useDebugValue = function () {}),
    (ll.useDeferredValue = function (f, g) {
      return p.H.useDeferredValue(f, g);
    }),
    (ll.useEffect = function (f, g) {
      return p.H.useEffect(f, g);
    }),
    (ll.useEffectEvent = function (f) {
      return p.H.useEffectEvent(f);
    }),
    (ll.useId = function () {
      return p.H.useId();
    }),
    (ll.useImperativeHandle = function (f, g, E) {
      return p.H.useImperativeHandle(f, g, E);
    }),
    (ll.useInsertionEffect = function (f, g) {
      return p.H.useInsertionEffect(f, g);
    }),
    (ll.useLayoutEffect = function (f, g) {
      return p.H.useLayoutEffect(f, g);
    }),
    (ll.useMemo = function (f, g) {
      return p.H.useMemo(f, g);
    }),
    (ll.useOptimistic = function (f, g) {
      return p.H.useOptimistic(f, g);
    }),
    (ll.useReducer = function (f, g, E) {
      return p.H.useReducer(f, g, E);
    }),
    (ll.useRef = function (f) {
      return p.H.useRef(f);
    }),
    (ll.useState = function (f) {
      return p.H.useState(f);
    }),
    (ll.useSyncExternalStore = function (f, g, E) {
      return p.H.useSyncExternalStore(f, g, E);
    }),
    (ll.useTransition = function () {
      return p.H.useTransition();
    }),
    (ll.version = "19.2.3"),
    ll
  );
}
var O0;
function Af() {
  return (O0 || ((O0 = 1), (yf.exports = oh())), yf.exports);
}
var Cl = Af();
const _n = B0(Cl);
var gf = { exports: {} },
  Nn = {},
  bf = { exports: {} },
  Sf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D0;
function dh() {
  return (
    D0 ||
      ((D0 = 1),
      (function (h) {
        function C(x, H) {
          var X = x.length;
          x.push(H);
          l: for (; 0 < X; ) {
            var el = (X - 1) >>> 1,
              hl = x[el];
            if (0 < O(hl, H)) ((x[el] = H), (x[X] = hl), (X = el));
            else break l;
          }
        }
        function A(x) {
          return x.length === 0 ? null : x[0];
        }
        function d(x) {
          if (x.length === 0) return null;
          var H = x[0],
            X = x.pop();
          if (X !== H) {
            x[0] = X;
            l: for (var el = 0, hl = x.length, f = hl >>> 1; el < f; ) {
              var g = 2 * (el + 1) - 1,
                E = x[g],
                U = g + 1,
                B = x[U];
              if (0 > O(E, X))
                U < hl && 0 > O(B, E)
                  ? ((x[el] = B), (x[U] = X), (el = U))
                  : ((x[el] = E), (x[g] = X), (el = g));
              else if (U < hl && 0 > O(B, X))
                ((x[el] = B), (x[U] = X), (el = U));
              else break l;
            }
          }
          return H;
        }
        function O(x, H) {
          var X = x.sortIndex - H.sortIndex;
          return X !== 0 ? X : x.id - H.id;
        }
        if (
          ((h.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var M = performance;
          h.unstable_now = function () {
            return M.now();
          };
        } else {
          var G = Date,
            I = G.now();
          h.unstable_now = function () {
            return G.now() - I;
          };
        }
        var D = [],
          S = [],
          Q = 1,
          Y = null,
          Z = 3,
          il = !1,
          ml = !1,
          tl = !1,
          Bl = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          w = typeof setImmediate < "u" ? setImmediate : null;
        function cl(x) {
          for (var H = A(S); H !== null; ) {
            if (H.callback === null) d(S);
            else if (H.startTime <= x)
              (d(S), (H.sortIndex = H.expirationTime), C(D, H));
            else break;
            H = A(S);
          }
        }
        function W(x) {
          if (((tl = !1), cl(x), !ml))
            if (A(D) !== null) ((ml = !0), _ || ((_ = !0), al()));
            else {
              var H = A(S);
              H !== null && xl(W, H.startTime - x);
            }
        }
        var _ = !1,
          p = -1,
          R = 5,
          P = -1;
        function sl() {
          return Bl ? !0 : !(h.unstable_now() - P < R);
        }
        function ol() {
          if (((Bl = !1), _)) {
            var x = h.unstable_now();
            P = x;
            var H = !0;
            try {
              l: {
                ((ml = !1), tl && ((tl = !1), k(p), (p = -1)), (il = !0));
                var X = Z;
                try {
                  t: {
                    for (
                      cl(x), Y = A(D);
                      Y !== null && !(Y.expirationTime > x && sl());
                    ) {
                      var el = Y.callback;
                      if (typeof el == "function") {
                        ((Y.callback = null), (Z = Y.priorityLevel));
                        var hl = el(Y.expirationTime <= x);
                        if (((x = h.unstable_now()), typeof hl == "function")) {
                          ((Y.callback = hl), cl(x), (H = !0));
                          break t;
                        }
                        (Y === A(D) && d(D), cl(x));
                      } else d(D);
                      Y = A(D);
                    }
                    if (Y !== null) H = !0;
                    else {
                      var f = A(S);
                      (f !== null && xl(W, f.startTime - x), (H = !1));
                    }
                  }
                  break l;
                } finally {
                  ((Y = null), (Z = X), (il = !1));
                }
                H = void 0;
              }
            } finally {
              H ? al() : (_ = !1);
            }
          }
        }
        var al;
        if (typeof w == "function")
          al = function () {
            w(ol);
          };
        else if (typeof MessageChannel < "u") {
          var nl = new MessageChannel(),
            Sl = nl.port2;
          ((nl.port1.onmessage = ol),
            (al = function () {
              Sl.postMessage(null);
            }));
        } else
          al = function () {
            q(ol, 0);
          };
        function xl(x, H) {
          p = q(function () {
            x(h.unstable_now());
          }, H);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (h.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (R = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return Z;
          }),
          (h.unstable_next = function (x) {
            switch (Z) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = Z;
            }
            var X = Z;
            Z = H;
            try {
              return x();
            } finally {
              Z = X;
            }
          }),
          (h.unstable_requestPaint = function () {
            Bl = !0;
          }),
          (h.unstable_runWithPriority = function (x, H) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var X = Z;
            Z = x;
            try {
              return H();
            } finally {
              Z = X;
            }
          }),
          (h.unstable_scheduleCallback = function (x, H, X) {
            var el = h.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? el + X : el))
                : (X = el),
              x)
            ) {
              case 1:
                var hl = -1;
                break;
              case 2:
                hl = 250;
                break;
              case 5:
                hl = 1073741823;
                break;
              case 4:
                hl = 1e4;
                break;
              default:
                hl = 5e3;
            }
            return (
              (hl = X + hl),
              (x = {
                id: Q++,
                callback: H,
                priorityLevel: x,
                startTime: X,
                expirationTime: hl,
                sortIndex: -1,
              }),
              X > el
                ? ((x.sortIndex = X),
                  C(S, x),
                  A(D) === null &&
                    x === A(S) &&
                    (tl ? (k(p), (p = -1)) : (tl = !0), xl(W, X - el)))
                : ((x.sortIndex = hl),
                  C(D, x),
                  ml || il || ((ml = !0), _ || ((_ = !0), al()))),
              x
            );
          }),
          (h.unstable_shouldYield = sl),
          (h.unstable_wrapCallback = function (x) {
            var H = Z;
            return function () {
              var X = Z;
              Z = H;
              try {
                return x.apply(this, arguments);
              } finally {
                Z = X;
              }
            };
          }));
      })(Sf)),
    Sf
  );
}
var U0;
function rh() {
  return (U0 || ((U0 = 1), (bf.exports = dh())), bf.exports);
}
var xf = { exports: {} },
  Pl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H0;
function mh() {
  if (H0) return Pl;
  H0 = 1;
  var h = Af();
  function C(D) {
    var S = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++)
        S += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      S +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function A() {}
  var d = {
      d: {
        f: A,
        r: function () {
          throw Error(C(522));
        },
        D: A,
        C: A,
        L: A,
        m: A,
        X: A,
        S: A,
        M: A,
      },
      p: 0,
      findDOMNode: null,
    },
    O = Symbol.for("react.portal");
  function M(D, S, Q) {
    var Y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: O,
      key: Y == null ? null : "" + Y,
      children: D,
      containerInfo: S,
      implementation: Q,
    };
  }
  var G = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function I(D, S) {
    if (D === "font") return "";
    if (typeof S == "string") return S === "use-credentials" ? S : "";
  }
  return (
    (Pl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (Pl.createPortal = function (D, S) {
      var Q =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11))
        throw Error(C(299));
      return M(D, S, null, Q);
    }),
    (Pl.flushSync = function (D) {
      var S = G.T,
        Q = d.p;
      try {
        if (((G.T = null), (d.p = 2), D)) return D();
      } finally {
        ((G.T = S), (d.p = Q), d.d.f());
      }
    }),
    (Pl.preconnect = function (D, S) {
      typeof D == "string" &&
        (S
          ? ((S = S.crossOrigin),
            (S =
              typeof S == "string"
                ? S === "use-credentials"
                  ? S
                  : ""
                : void 0))
          : (S = null),
        d.d.C(D, S));
    }),
    (Pl.prefetchDNS = function (D) {
      typeof D == "string" && d.d.D(D);
    }),
    (Pl.preinit = function (D, S) {
      if (typeof D == "string" && S && typeof S.as == "string") {
        var Q = S.as,
          Y = I(Q, S.crossOrigin),
          Z = typeof S.integrity == "string" ? S.integrity : void 0,
          il = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
        Q === "style"
          ? d.d.S(D, typeof S.precedence == "string" ? S.precedence : void 0, {
              crossOrigin: Y,
              integrity: Z,
              fetchPriority: il,
            })
          : Q === "script" &&
            d.d.X(D, {
              crossOrigin: Y,
              integrity: Z,
              fetchPriority: il,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
      }
    }),
    (Pl.preinitModule = function (D, S) {
      if (typeof D == "string")
        if (typeof S == "object" && S !== null) {
          if (S.as == null || S.as === "script") {
            var Q = I(S.as, S.crossOrigin);
            d.d.M(D, {
              crossOrigin: Q,
              integrity: typeof S.integrity == "string" ? S.integrity : void 0,
              nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            });
          }
        } else S == null && d.d.M(D);
    }),
    (Pl.preload = function (D, S) {
      if (
        typeof D == "string" &&
        typeof S == "object" &&
        S !== null &&
        typeof S.as == "string"
      ) {
        var Q = S.as,
          Y = I(Q, S.crossOrigin);
        d.d.L(D, Q, {
          crossOrigin: Y,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          type: typeof S.type == "string" ? S.type : void 0,
          fetchPriority:
            typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
          referrerPolicy:
            typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
          imageSrcSet:
            typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
          media: typeof S.media == "string" ? S.media : void 0,
        });
      }
    }),
    (Pl.preloadModule = function (D, S) {
      if (typeof D == "string")
        if (S) {
          var Q = I(S.as, S.crossOrigin);
          d.d.m(D, {
            as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
            crossOrigin: Q,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          });
        } else d.d.m(D);
    }),
    (Pl.requestFormReset = function (D) {
      d.d.r(D);
    }),
    (Pl.unstable_batchedUpdates = function (D, S) {
      return D(S);
    }),
    (Pl.useFormState = function (D, S, Q) {
      return G.H.useFormState(D, S, Q);
    }),
    (Pl.useFormStatus = function () {
      return G.H.useHostTransitionStatus();
    }),
    (Pl.version = "19.2.3"),
    Pl
  );
}
var C0;
function hh() {
  if (C0) return xf.exports;
  C0 = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (C) {
        console.error(C);
      }
  }
  return (h(), (xf.exports = mh()), xf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R0;
function vh() {
  if (R0) return Nn;
  R0 = 1;
  var h = rh(),
    C = Af(),
    A = hh();
  function d(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function O(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function M(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function G(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function I(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (M(l) !== l) throw Error(d(188));
  }
  function S(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = M(l)), t === null)) throw Error(d(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return (D(n), l);
          if (u === a) return (D(n), t);
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (e.return !== a.return) ((e = n), (a = u));
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === e) {
            ((i = !0), (e = n), (a = u));
            break;
          }
          if (c === a) {
            ((i = !0), (a = n), (e = u));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === e) {
              ((i = !0), (e = u), (a = n));
              break;
            }
            if (c === a) {
              ((i = !0), (a = u), (e = n));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (e.alternate !== a) throw Error(d(190));
    }
    if (e.tag !== 3) throw Error(d(188));
    return e.stateNode.current === e ? l : t;
  }
  function Q(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = Q(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var Y = Object.assign,
    Z = Symbol.for("react.element"),
    il = Symbol.for("react.transitional.element"),
    ml = Symbol.for("react.portal"),
    tl = Symbol.for("react.fragment"),
    Bl = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    w = Symbol.for("react.context"),
    cl = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    _ = Symbol.for("react.suspense_list"),
    p = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    P = Symbol.for("react.activity"),
    sl = Symbol.for("react.memo_cache_sentinel"),
    ol = Symbol.iterator;
  function al(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (ol && l[ol]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var nl = Symbol.for("react.client.reference");
  function Sl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === nl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case tl:
        return "Fragment";
      case q:
        return "Profiler";
      case Bl:
        return "StrictMode";
      case W:
        return "Suspense";
      case _:
        return "SuspenseList";
      case P:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ml:
          return "Portal";
        case w:
          return l.displayName || "Context";
        case k:
          return (l._context.displayName || "Context") + ".Consumer";
        case cl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case p:
          return (
            (t = l.displayName || null),
            t !== null ? t : Sl(l.type) || "Memo"
          );
        case R:
          ((t = l._payload), (l = l._init));
          try {
            return Sl(l(t));
          } catch {}
      }
    return null;
  }
  var xl = Array.isArray,
    x = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    el = [],
    hl = -1;
  function f(l) {
    return { current: l };
  }
  function g(l) {
    0 > hl || ((l.current = el[hl]), (el[hl] = null), hl--);
  }
  function E(l, t) {
    (hl++, (el[hl] = l.current), (l.current = t));
  }
  var U = f(null),
    B = f(null),
    $ = f(null),
    gl = f(null);
  function wl(l, t) {
    switch ((E($, t), E(B, l), E(U, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? kd(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = kd(t)), (l = Fd(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (g(U), E(U, l));
  }
  function Ol() {
    (g(U), g(B), g($));
  }
  function Da(l) {
    l.memoizedState !== null && E(gl, l);
    var t = U.current,
      e = Fd(t, l.type);
    t !== e && (E(B, l), E(U, e));
  }
  function Dn(l) {
    (B.current === l && (g(U), g(B)),
      gl.current === l && (g(gl), (pn._currentValue = X)));
  }
  var ku, Ef;
  function Ee(l) {
    if (ku === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        ((ku = (t && t[1]) || ""),
          (Ef =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ku +
      l +
      Ef
    );
  }
  var Fu = !1;
  function Iu(l, t) {
    if (!l || Fu) return "";
    Fu = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (T) {
                  var b = T;
                }
                Reflect.construct(l, [], j);
              } else {
                try {
                  j.call();
                } catch (T) {
                  b = T;
                }
                l.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                b = T;
              }
              (j = l()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (T) {
            if (T && b && typeof T.stack == "string") return [T.stack, b.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        c = u[1];
      if (i && c) {
        var s = i.split(`
`),
          y = c.split(`
`);
        for (
          n = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === s.length || n === y.length)
          for (
            a = s.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && s[a] !== y[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || s[a] !== y[n])) {
                  var z =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", l.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Fu = !1), (Error.prepareStackTrace = e));
    }
    return (e = l ? l.displayName || l.name : "") ? Ee(e) : "";
  }
  function G0(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(l.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ee("Suspense Fallback")
          : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return Iu(l.type, !1);
      case 11:
        return Iu(l.type.render, !1);
      case 1:
        return Iu(l.type, !0);
      case 31:
        return Ee("Activity");
      default:
        return "";
    }
  }
  function Nf(l) {
    try {
      var t = "",
        e = null;
      do ((t += G0(l, e)), (e = l), (l = l.return));
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Pu = Object.prototype.hasOwnProperty,
    li = h.unstable_scheduleCallback,
    ti = h.unstable_cancelCallback,
    X0 = h.unstable_shouldYield,
    Q0 = h.unstable_requestPaint,
    ft = h.unstable_now,
    Z0 = h.unstable_getCurrentPriorityLevel,
    jf = h.unstable_ImmediatePriority,
    Mf = h.unstable_UserBlockingPriority,
    Un = h.unstable_NormalPriority,
    L0 = h.unstable_LowPriority,
    _f = h.unstable_IdlePriority,
    V0 = h.log,
    K0 = h.unstable_setDisableYieldValue,
    Ua = null,
    st = null;
  function le(l) {
    if (
      (typeof V0 == "function" && K0(l),
      st && typeof st.setStrictMode == "function")
    )
      try {
        st.setStrictMode(Ua, l);
      } catch {}
  }
  var ot = Math.clz32 ? Math.clz32 : $0,
    J0 = Math.log,
    w0 = Math.LN2;
  function $0(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((J0(l) / w0) | 0)) | 0);
  }
  var Hn = 256,
    Cn = 262144,
    Rn = 4194304;
  function Ne(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function qn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~u),
          a !== 0
            ? (n = Ne(a))
            : ((i &= c),
              i !== 0
                ? (n = Ne(i))
                : e || ((e = c & ~l), e !== 0 && (n = Ne(e)))))
        : ((c = a & ~u),
          c !== 0
            ? (n = Ne(c))
            : i !== 0
              ? (n = Ne(i))
              : e || ((e = a & ~l), e !== 0 && (n = Ne(e)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (e = t & -t),
            u >= e || (u === 32 && (e & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Ha(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function W0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Of() {
    var l = Rn;
    return ((Rn <<= 1), (Rn & 62914560) === 0 && (Rn = 4194304), l);
  }
  function ei(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ca(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function k0(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    ((l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      s = l.expirationTimes,
      y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var z = 31 - ot(e),
        j = 1 << z;
      ((c[z] = 0), (s[z] = -1));
      var b = y[z];
      if (b !== null)
        for (y[z] = null, z = 0; z < b.length; z++) {
          var T = b[z];
          T !== null && (T.lane &= -536870913);
        }
      e &= ~j;
    }
    (a !== 0 && Df(l, a, 0),
      u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t)));
  }
  function Df(l, t, e) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var a = 31 - ot(t);
    ((l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930)));
  }
  function Uf(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ot(e),
        n = 1 << a;
      ((n & t) | (l[a] & t) && (l[a] |= t), (e &= ~n));
    }
  }
  function Hf(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : ai(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function ai(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ni(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Cf() {
    var l = H.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : x0(l.type));
  }
  function Rf(l, t) {
    var e = H.p;
    try {
      return ((H.p = l), t());
    } finally {
      H.p = e;
    }
  }
  var te = Math.random().toString(36).slice(2),
    $l = "__reactFiber$" + te,
    tt = "__reactProps$" + te,
    Je = "__reactContainer$" + te,
    ui = "__reactEvents$" + te,
    F0 = "__reactListeners$" + te,
    I0 = "__reactHandles$" + te,
    qf = "__reactResources$" + te,
    Ra = "__reactMarker$" + te;
  function ii(l) {
    (delete l[$l], delete l[tt], delete l[ui], delete l[F0], delete l[I0]);
  }
  function we(l) {
    var t = l[$l];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Je] || e[$l])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = n0(l); l !== null; ) {
            if ((e = l[$l])) return e;
            l = n0(l);
          }
        return t;
      }
      ((l = e), (e = l.parentNode));
    }
    return null;
  }
  function $e(l) {
    if ((l = l[$l] || l[Je])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function qa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(d(33));
  }
  function We(l) {
    var t = l[qf];
    return (
      t ||
        (t = l[qf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Kl(l) {
    l[Ra] = !0;
  }
  var Bf = new Set(),
    Yf = {};
  function je(l, t) {
    (ke(l, t), ke(l + "Capture", t));
  }
  function ke(l, t) {
    for (Yf[l] = t, l = 0; l < t.length; l++) Bf.add(t[l]);
  }
  var P0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Gf = {},
    Xf = {};
  function lr(l) {
    return Pu.call(Xf, l)
      ? !0
      : Pu.call(Gf, l)
        ? !1
        : P0.test(l)
          ? (Xf[l] = !0)
          : ((Gf[l] = !0), !1);
  }
  function Bn(l, t, e) {
    if (lr(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Yn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Rt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function bt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Qf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function tr(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((e = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function ci(l) {
    if (!l._valueTracker) {
      var t = Qf(l) ? "checked" : "value";
      l._valueTracker = tr(l, t, "" + l[t]);
    }
  }
  function Zf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = Qf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Gn(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var er = /[\n"\\]/g;
  function St(l) {
    return l.replace(er, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function fi(l, t, e, a, n, u, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + bt(t))
          : l.value !== "" + bt(t) && (l.value = "" + bt(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? si(l, i, bt(t))
        : e != null
          ? si(l, i, bt(e))
          : a != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + bt(c))
        : l.removeAttribute("name"));
  }
  function Lf(l, t, e, a, n, u, i, c) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (l.type = u),
      t != null || e != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        ci(l);
        return;
      }
      ((e = e != null ? "" + bt(e) : ""),
        (t = t != null ? "" + bt(t) : e),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      ci(l));
  }
  function si(l, t, e) {
    (t === "number" && Gn(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function Fe(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        ((n = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== n && (l[e].selected = n),
          n && a && (l[e].defaultSelected = !0));
    } else {
      for (e = "" + bt(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          ((l[n].selected = !0), a && (l[n].defaultSelected = !0));
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vf(l, t, e) {
    if (
      t != null &&
      ((t = "" + bt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + bt(e) : "";
  }
  function Kf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(d(92));
        if (xl(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        e = a;
      }
      (e == null && (e = ""), (t = e));
    }
    ((e = bt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      ci(l));
  }
  function Ie(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var ar = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Jf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : a
        ? l.setProperty(t, e)
        : typeof e != "number" || e === 0 || ar.has(t)
          ? t === "float"
            ? (l.cssFloat = e)
            : (l[t] = ("" + e).trim())
          : (l[t] = e + "px");
  }
  function wf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
              ? (l.cssFloat = "")
              : (l[a] = ""));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && e[n] !== a && Jf(l, n, a));
    } else for (var u in t) t.hasOwnProperty(u) && Jf(l, u, t[u]);
  }
  function oi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nr = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ur =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xn(l) {
    return ur.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function qt() {}
  var di = null;
  function ri(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Pe = null,
    la = null;
  function $f(l) {
    var t = $e(l);
    if (t && (l = t.stateNode)) {
      var e = l[tt] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (fi(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + St("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[tt] || null;
                if (!n) throw Error(d(90));
                fi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < e.length; t++)
              ((a = e[t]), a.form === l.form && Zf(a));
          }
          break l;
        case "textarea":
          Vf(l, e.value, e.defaultValue);
          break l;
        case "select":
          ((t = e.value), t != null && Fe(l, !!e.multiple, t, !1));
      }
    }
  }
  var mi = !1;
  function Wf(l, t, e) {
    if (mi) return l(t, e);
    mi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((mi = !1),
        (Pe !== null || la !== null) &&
          (ju(), Pe && ((t = Pe), (l = la), (la = Pe = null), $f(t), l)))
      )
        for (t = 0; t < l.length; t++) $f(l[t]);
    }
  }
  function Ba(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[tt] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(d(231, t, typeof e));
    return e;
  }
  var Bt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hi = !1;
  if (Bt)
    try {
      var Ya = {};
      (Object.defineProperty(Ya, "passive", {
        get: function () {
          hi = !0;
        },
      }),
        window.addEventListener("test", Ya, Ya),
        window.removeEventListener("test", Ya, Ya));
    } catch {
      hi = !1;
    }
  var ee = null,
    vi = null,
    Qn = null;
  function kf() {
    if (Qn) return Qn;
    var l,
      t = vi,
      e = t.length,
      a,
      n = "value" in ee ? ee.value : ee.textContent,
      u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++);
    return (Qn = n.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Zn(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ln() {
    return !0;
  }
  function Ff() {
    return !1;
  }
  function et(l) {
    function t(e, a, n, u, i) {
      ((this._reactName = e),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(u) : u[c]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ln
          : Ff),
        (this.isPropagationStopped = Ff),
        this
      );
    }
    return (
      Y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Ln));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Ln));
        },
        persist: function () {},
        isPersistent: Ln,
      }),
      t
    );
  }
  var Me = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vn = et(Me),
    Ga = Y({}, Me, { view: 0, detail: 0 }),
    ir = et(Ga),
    yi,
    gi,
    Xa,
    Kn = Y({}, Ga, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Si,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Xa &&
              (Xa && l.type === "mousemove"
                ? ((yi = l.screenX - Xa.screenX), (gi = l.screenY - Xa.screenY))
                : (gi = yi = 0),
              (Xa = l)),
            yi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : gi;
      },
    }),
    If = et(Kn),
    cr = Y({}, Kn, { dataTransfer: 0 }),
    fr = et(cr),
    sr = Y({}, Ga, { relatedTarget: 0 }),
    bi = et(sr),
    or = Y({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dr = et(or),
    rr = Y({}, Me, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    mr = et(rr),
    hr = Y({}, Me, { data: 0 }),
    Pf = et(hr),
    vr = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    yr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function br(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = gr[l])
        ? !!t[l]
        : !1;
  }
  function Si() {
    return br;
  }
  var Sr = Y({}, Ga, {
      key: function (l) {
        if (l.key) {
          var t = vr[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Zn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? yr[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Si,
      charCode: function (l) {
        return l.type === "keypress" ? Zn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Zn(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    xr = et(Sr),
    pr = Y({}, Kn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ls = et(pr),
    Tr = Y({}, Ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Si,
    }),
    zr = et(Tr),
    Ar = Y({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Er = et(Ar),
    Nr = Y({}, Kn, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jr = et(Nr),
    Mr = Y({}, Me, { newState: 0, oldState: 0 }),
    _r = et(Mr),
    Or = [9, 13, 27, 32],
    xi = Bt && "CompositionEvent" in window,
    Qa = null;
  Bt && "documentMode" in document && (Qa = document.documentMode);
  var Dr = Bt && "TextEvent" in window && !Qa,
    ts = Bt && (!xi || (Qa && 8 < Qa && 11 >= Qa)),
    es = " ",
    as = !1;
  function ns(l, t) {
    switch (l) {
      case "keyup":
        return Or.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function us(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var ta = !1;
  function Ur(l, t) {
    switch (l) {
      case "compositionend":
        return us(t);
      case "keypress":
        return t.which !== 32 ? null : ((as = !0), es);
      case "textInput":
        return ((l = t.data), l === es && as ? null : l);
      default:
        return null;
    }
  }
  function Hr(l, t) {
    if (ta)
      return l === "compositionend" || (!xi && ns(l, t))
        ? ((l = kf()), (Qn = vi = ee = null), (ta = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ts && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Cr = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function is(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Cr[l.type] : t === "textarea";
  }
  function cs(l, t, e, a) {
    (Pe ? (la ? la.push(a) : (la = [a])) : (Pe = a),
      (t = Cu(t, "onChange")),
      0 < t.length &&
        ((e = new Vn("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t })));
  }
  var Za = null,
    La = null;
  function Rr(l) {
    Vd(l, 0);
  }
  function Jn(l) {
    var t = qa(l);
    if (Zf(t)) return l;
  }
  function fs(l, t) {
    if (l === "change") return t;
  }
  var ss = !1;
  if (Bt) {
    var pi;
    if (Bt) {
      var Ti = "oninput" in document;
      if (!Ti) {
        var os = document.createElement("div");
        (os.setAttribute("oninput", "return;"),
          (Ti = typeof os.oninput == "function"));
      }
      pi = Ti;
    } else pi = !1;
    ss = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function ds() {
    Za && (Za.detachEvent("onpropertychange", rs), (La = Za = null));
  }
  function rs(l) {
    if (l.propertyName === "value" && Jn(La)) {
      var t = [];
      (cs(t, La, l, ri(l)), Wf(Rr, t));
    }
  }
  function qr(l, t, e) {
    l === "focusin"
      ? (ds(), (Za = t), (La = e), Za.attachEvent("onpropertychange", rs))
      : l === "focusout" && ds();
  }
  function Br(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Jn(La);
  }
  function Yr(l, t) {
    if (l === "click") return Jn(t);
  }
  function Gr(l, t) {
    if (l === "input" || l === "change") return Jn(t);
  }
  function Xr(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var dt = typeof Object.is == "function" ? Object.is : Xr;
  function Va(l, t) {
    if (dt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Pu.call(t, n) || !dt(l[n], t[n])) return !1;
    }
    return !0;
  }
  function ms(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function hs(l, t) {
    var e = ms(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ms(e);
    }
  }
  function vs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? vs(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ys(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Gn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Gn(l.document);
    }
    return t;
  }
  function zi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Qr = Bt && "documentMode" in document && 11 >= document.documentMode,
    ea = null,
    Ai = null,
    Ka = null,
    Ei = !1;
  function gs(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ei ||
      ea == null ||
      ea !== Gn(a) ||
      ((a = ea),
      "selectionStart" in a && zi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ka && Va(Ka, a)) ||
        ((Ka = a),
        (a = Cu(Ai, "onSelect")),
        0 < a.length &&
          ((t = new Vn("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = ea))));
  }
  function _e(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var aa = {
      animationend: _e("Animation", "AnimationEnd"),
      animationiteration: _e("Animation", "AnimationIteration"),
      animationstart: _e("Animation", "AnimationStart"),
      transitionrun: _e("Transition", "TransitionRun"),
      transitionstart: _e("Transition", "TransitionStart"),
      transitioncancel: _e("Transition", "TransitionCancel"),
      transitionend: _e("Transition", "TransitionEnd"),
    },
    Ni = {},
    bs = {};
  Bt &&
    ((bs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete aa.animationend.animation,
      delete aa.animationiteration.animation,
      delete aa.animationstart.animation),
    "TransitionEvent" in window || delete aa.transitionend.transition);
  function Oe(l) {
    if (Ni[l]) return Ni[l];
    if (!aa[l]) return l;
    var t = aa[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in bs) return (Ni[l] = t[e]);
    return l;
  }
  var Ss = Oe("animationend"),
    xs = Oe("animationiteration"),
    ps = Oe("animationstart"),
    Zr = Oe("transitionrun"),
    Lr = Oe("transitionstart"),
    Vr = Oe("transitioncancel"),
    Ts = Oe("transitionend"),
    zs = new Map(),
    ji =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  ji.push("scrollEnd");
  function Mt(l, t) {
    (zs.set(l, t), je(t, [l]));
  }
  var wn =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    xt = [],
    na = 0,
    Mi = 0;
  function $n() {
    for (var l = na, t = (Mi = na = 0); t < l; ) {
      var e = xt[t];
      xt[t++] = null;
      var a = xt[t];
      xt[t++] = null;
      var n = xt[t];
      xt[t++] = null;
      var u = xt[t];
      if (((xt[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && As(e, n, u);
    }
  }
  function Wn(l, t, e, a) {
    ((xt[na++] = l),
      (xt[na++] = t),
      (xt[na++] = e),
      (xt[na++] = a),
      (Mi |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a));
  }
  function _i(l, t, e, a) {
    return (Wn(l, t, e, a), kn(l));
  }
  function De(l, t) {
    return (Wn(l, null, null, t), kn(l));
  }
  function As(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      ((u.childLanes |= e),
        (a = u.alternate),
        a !== null && (a.childLanes |= e),
        u.tag === 22 &&
          ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return));
    return l.tag === 3
      ? ((u = l.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ot(e)),
          (l = u.hiddenUpdates),
          (a = l[n]),
          a === null ? (l[n] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        u)
      : null;
  }
  function kn(l) {
    if (50 < hn) throw ((hn = 0), (Yc = null), Error(d(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ua = {};
  function Kr(l, t, e, a) {
    ((this.tag = l),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function rt(l, t, e, a) {
    return new Kr(l, t, e, a);
  }
  function Oi(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Yt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = rt(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function Es(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Fn(l, t, e, a, n, u) {
    var i = 0;
    if (((a = l), typeof l == "function")) Oi(l) && (i = 1);
    else if (typeof l == "string")
      i = km(l, e, U.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case P:
          return ((l = rt(31, e, t, n)), (l.elementType = P), (l.lanes = u), l);
        case tl:
          return Ue(e.children, n, u, t);
        case Bl:
          ((i = 8), (n |= 24));
          break;
        case q:
          return (
            (l = rt(12, e, t, n | 2)),
            (l.elementType = q),
            (l.lanes = u),
            l
          );
        case W:
          return ((l = rt(13, e, t, n)), (l.elementType = W), (l.lanes = u), l);
        case _:
          return ((l = rt(19, e, t, n)), (l.elementType = _), (l.lanes = u), l);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case w:
                i = 10;
                break l;
              case k:
                i = 9;
                break l;
              case cl:
                i = 11;
                break l;
              case p:
                i = 14;
                break l;
              case R:
                ((i = 16), (a = null));
                break l;
            }
          ((i = 29),
            (e = Error(d(130, l === null ? "null" : typeof l, ""))),
            (a = null));
      }
    return (
      (t = rt(i, e, t, n)),
      (t.elementType = l),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function Ue(l, t, e, a) {
    return ((l = rt(7, l, a, t)), (l.lanes = e), l);
  }
  function Di(l, t, e) {
    return ((l = rt(6, l, null, t)), (l.lanes = e), l);
  }
  function Ns(l) {
    var t = rt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Ui(l, t, e) {
    return (
      (t = rt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var js = new WeakMap();
  function pt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = js.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: Nf(t) }), js.set(l, t), t);
    }
    return { value: l, source: t, stack: Nf(t) };
  }
  var ia = [],
    ca = 0,
    In = null,
    Ja = 0,
    Tt = [],
    zt = 0,
    ae = null,
    Dt = 1,
    Ut = "";
  function Gt(l, t) {
    ((ia[ca++] = Ja), (ia[ca++] = In), (In = l), (Ja = t));
  }
  function Ms(l, t, e) {
    ((Tt[zt++] = Dt), (Tt[zt++] = Ut), (Tt[zt++] = ae), (ae = l));
    var a = Dt;
    l = Ut;
    var n = 32 - ot(a) - 1;
    ((a &= ~(1 << n)), (e += 1));
    var u = 32 - ot(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Dt = (1 << (32 - ot(t) + n)) | (e << n) | a),
        (Ut = u + l));
    } else ((Dt = (1 << u) | (e << n) | a), (Ut = l));
  }
  function Hi(l) {
    l.return !== null && (Gt(l, 1), Ms(l, 1, 0));
  }
  function Ci(l) {
    for (; l === In; )
      ((In = ia[--ca]), (ia[ca] = null), (Ja = ia[--ca]), (ia[ca] = null));
    for (; l === ae; )
      ((ae = Tt[--zt]),
        (Tt[zt] = null),
        (Ut = Tt[--zt]),
        (Tt[zt] = null),
        (Dt = Tt[--zt]),
        (Tt[zt] = null));
  }
  function _s(l, t) {
    ((Tt[zt++] = Dt),
      (Tt[zt++] = Ut),
      (Tt[zt++] = ae),
      (Dt = t.id),
      (Ut = t.overflow),
      (ae = l));
  }
  var Wl = null,
    Dl = null,
    bl = !1,
    ne = null,
    At = !1,
    Ri = Error(d(519));
  function ue(l) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (wa(pt(t, l)), Ri);
  }
  function Os(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[$l] = l), (t[tt] = a), e)) {
      case "dialog":
        (rl("cancel", t), rl("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        rl("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < yn.length; e++) rl(yn[e], t);
        break;
      case "source":
        rl("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (rl("error", t), rl("load", t));
        break;
      case "details":
        rl("toggle", t);
        break;
      case "input":
        (rl("invalid", t),
          Lf(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        rl("invalid", t);
        break;
      case "textarea":
        (rl("invalid", t), Kf(t, a.value, a.defaultValue, a.children));
    }
    ((e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      $d(t.textContent, e)
        ? (a.popover != null && (rl("beforetoggle", t), rl("toggle", t)),
          a.onScroll != null && rl("scroll", t),
          a.onScrollEnd != null && rl("scrollend", t),
          a.onClick != null && (t.onclick = qt),
          (t = !0))
        : (t = !1),
      t || ue(l, !0));
  }
  function Ds(l) {
    for (Wl = l.return; Wl; )
      switch (Wl.tag) {
        case 5:
        case 31:
        case 13:
          At = !1;
          return;
        case 27:
        case 3:
          At = !0;
          return;
        default:
          Wl = Wl.return;
      }
  }
  function fa(l) {
    if (l !== Wl) return !1;
    if (!bl) return (Ds(l), (bl = !0), !1);
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || Pc(l.type, l.memoizedProps))),
        (e = !e)),
      e && Dl && ue(l),
      Ds(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      Dl = a0(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(d(317));
      Dl = a0(l);
    } else
      t === 27
        ? ((t = Dl), Se(l.type) ? ((l = nf), (nf = null), (Dl = l)) : (Dl = t))
        : (Dl = Wl ? Nt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function He() {
    ((Dl = Wl = null), (bl = !1));
  }
  function qi() {
    var l = ne;
    return (
      l !== null &&
        (it === null ? (it = l) : it.push.apply(it, l), (ne = null)),
      l
    );
  }
  function wa(l) {
    ne === null ? (ne = [l]) : ne.push(l);
  }
  var Bi = f(null),
    Ce = null,
    Xt = null;
  function ie(l, t, e) {
    (E(Bi, t._currentValue), (t._currentValue = e));
  }
  function Qt(l) {
    ((l._currentValue = Bi.current), g(Bi));
  }
  function Yi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function Gi(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var s = 0; s < t.length; s++)
            if (c.context === t[s]) {
              ((u.lanes |= e),
                (c = u.alternate),
                c !== null && (c.lanes |= e),
                Yi(u.return, e, l),
                a || (i = null));
              break l;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(d(341));
        ((i.lanes |= e),
          (u = i.alternate),
          u !== null && (u.lanes |= e),
          Yi(i, e, l),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function sa(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = n.type;
          dt(n.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (n === gl.current) {
        if (((i = n.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(pn) : (l = [pn]));
      }
      n = n.return;
    }
    (l !== null && Gi(t, l, e, a), (t.flags |= 262144));
  }
  function Pn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!dt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Re(l) {
    ((Ce = l),
      (Xt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function kl(l) {
    return Us(Ce, l);
  }
  function lu(l, t) {
    return (Ce === null && Re(l), Us(l, t));
  }
  function Us(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Xt === null)) {
      if (l === null) throw Error(d(308));
      ((Xt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Xt = Xt.next = t;
    return e;
  }
  var Jr =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                }));
            };
          },
    wr = h.unstable_scheduleCallback,
    $r = h.unstable_NormalPriority,
    Xl = {
      $$typeof: w,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xi() {
    return { controller: new Jr(), data: new Map(), refCount: 0 };
  }
  function $a(l) {
    (l.refCount--,
      l.refCount === 0 &&
        wr($r, function () {
          l.controller.abort();
        }));
  }
  var Wa = null,
    Qi = 0,
    oa = 0,
    da = null;
  function Wr(l, t) {
    if (Wa === null) {
      var e = (Wa = []);
      ((Qi = 0),
        (oa = Vc()),
        (da = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        }));
    }
    return (Qi++, t.then(Hs, Hs), t);
  }
  function Hs() {
    if (--Qi === 0 && Wa !== null) {
      da !== null && (da.status = "fulfilled");
      var l = Wa;
      ((Wa = null), (oa = 0), (da = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function kr(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          e.push(n);
        },
      };
    return (
      l.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
            (0, e[n])(void 0);
        },
      ),
      a
    );
  }
  var Cs = x.S;
  x.S = function (l, t) {
    ((bd = ft()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Wr(l, t),
      Cs !== null && Cs(l, t));
  };
  var qe = f(null);
  function Zi() {
    var l = qe.current;
    return l !== null ? l : _l.pooledCache;
  }
  function tu(l, t) {
    t === null ? E(qe, qe.current) : E(qe, t.pool);
  }
  function Rs() {
    var l = Zi();
    return l === null ? null : { parent: Xl._currentValue, pool: l };
  }
  var ra = Error(d(460)),
    Li = Error(d(474)),
    eu = Error(d(542)),
    au = { then: function () {} };
  function qs(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Bs(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(qt, qt), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Gs(l), l);
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (((l = _l), l !== null && 100 < l.shellSuspendCounter))
            throw Error(d(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Gs(l), l);
        }
        throw ((Ye = t), ra);
    }
  }
  function Be(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((Ye = e), ra)
        : e;
    }
  }
  var Ye = null;
  function Ys() {
    if (Ye === null) throw Error(d(459));
    var l = Ye;
    return ((Ye = null), l);
  }
  function Gs(l) {
    if (l === ra || l === eu) throw Error(d(483));
  }
  var ma = null,
    ka = 0;
  function nu(l) {
    var t = ka;
    return ((ka += 1), ma === null && (ma = []), Bs(ma, l, t));
  }
  function Fa(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function uu(l, t) {
    throw t.$$typeof === Z
      ? Error(d(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          d(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Xs(l) {
    function t(m, r) {
      if (l) {
        var v = m.deletions;
        v === null ? ((m.deletions = [r]), (m.flags |= 16)) : v.push(r);
      }
    }
    function e(m, r) {
      if (!l) return null;
      for (; r !== null; ) (t(m, r), (r = r.sibling));
      return null;
    }
    function a(m) {
      for (var r = new Map(); m !== null; )
        (m.key !== null ? r.set(m.key, m) : r.set(m.index, m), (m = m.sibling));
      return r;
    }
    function n(m, r) {
      return ((m = Yt(m, r)), (m.index = 0), (m.sibling = null), m);
    }
    function u(m, r, v) {
      return (
        (m.index = v),
        l
          ? ((v = m.alternate),
            v !== null
              ? ((v = v.index), v < r ? ((m.flags |= 67108866), r) : v)
              : ((m.flags |= 67108866), r))
          : ((m.flags |= 1048576), r)
      );
    }
    function i(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function c(m, r, v, N) {
      return r === null || r.tag !== 6
        ? ((r = Di(v, m.mode, N)), (r.return = m), r)
        : ((r = n(r, v)), (r.return = m), r);
    }
    function s(m, r, v, N) {
      var K = v.type;
      return K === tl
        ? z(m, r, v.props.children, N, v.key)
        : r !== null &&
            (r.elementType === K ||
              (typeof K == "object" &&
                K !== null &&
                K.$$typeof === R &&
                Be(K) === r.type))
          ? ((r = n(r, v.props)), Fa(r, v), (r.return = m), r)
          : ((r = Fn(v.type, v.key, v.props, null, m.mode, N)),
            Fa(r, v),
            (r.return = m),
            r);
    }
    function y(m, r, v, N) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== v.containerInfo ||
        r.stateNode.implementation !== v.implementation
        ? ((r = Ui(v, m.mode, N)), (r.return = m), r)
        : ((r = n(r, v.children || [])), (r.return = m), r);
    }
    function z(m, r, v, N, K) {
      return r === null || r.tag !== 7
        ? ((r = Ue(v, m.mode, N, K)), (r.return = m), r)
        : ((r = n(r, v)), (r.return = m), r);
    }
    function j(m, r, v) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return ((r = Di("" + r, m.mode, v)), (r.return = m), r);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case il:
            return (
              (v = Fn(r.type, r.key, r.props, null, m.mode, v)),
              Fa(v, r),
              (v.return = m),
              v
            );
          case ml:
            return ((r = Ui(r, m.mode, v)), (r.return = m), r);
          case R:
            return ((r = Be(r)), j(m, r, v));
        }
        if (xl(r) || al(r))
          return ((r = Ue(r, m.mode, v, null)), (r.return = m), r);
        if (typeof r.then == "function") return j(m, nu(r), v);
        if (r.$$typeof === w) return j(m, lu(m, r), v);
        uu(m, r);
      }
      return null;
    }
    function b(m, r, v, N) {
      var K = r !== null ? r.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return K !== null ? null : c(m, r, "" + v, N);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case il:
            return v.key === K ? s(m, r, v, N) : null;
          case ml:
            return v.key === K ? y(m, r, v, N) : null;
          case R:
            return ((v = Be(v)), b(m, r, v, N));
        }
        if (xl(v) || al(v)) return K !== null ? null : z(m, r, v, N, null);
        if (typeof v.then == "function") return b(m, r, nu(v), N);
        if (v.$$typeof === w) return b(m, r, lu(m, v), N);
        uu(m, v);
      }
      return null;
    }
    function T(m, r, v, N, K) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ((m = m.get(v) || null), c(r, m, "" + N, K));
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case il:
            return (
              (m = m.get(N.key === null ? v : N.key) || null),
              s(r, m, N, K)
            );
          case ml:
            return (
              (m = m.get(N.key === null ? v : N.key) || null),
              y(r, m, N, K)
            );
          case R:
            return ((N = Be(N)), T(m, r, v, N, K));
        }
        if (xl(N) || al(N))
          return ((m = m.get(v) || null), z(r, m, N, K, null));
        if (typeof N.then == "function") return T(m, r, v, nu(N), K);
        if (N.$$typeof === w) return T(m, r, v, lu(r, N), K);
        uu(r, N);
      }
      return null;
    }
    function L(m, r, v, N) {
      for (
        var K = null, pl = null, V = r, fl = (r = 0), yl = null;
        V !== null && fl < v.length;
        fl++
      ) {
        V.index > fl ? ((yl = V), (V = null)) : (yl = V.sibling);
        var Tl = b(m, V, v[fl], N);
        if (Tl === null) {
          V === null && (V = yl);
          break;
        }
        (l && V && Tl.alternate === null && t(m, V),
          (r = u(Tl, r, fl)),
          pl === null ? (K = Tl) : (pl.sibling = Tl),
          (pl = Tl),
          (V = yl));
      }
      if (fl === v.length) return (e(m, V), bl && Gt(m, fl), K);
      if (V === null) {
        for (; fl < v.length; fl++)
          ((V = j(m, v[fl], N)),
            V !== null &&
              ((r = u(V, r, fl)),
              pl === null ? (K = V) : (pl.sibling = V),
              (pl = V)));
        return (bl && Gt(m, fl), K);
      }
      for (V = a(V); fl < v.length; fl++)
        ((yl = T(V, m, fl, v[fl], N)),
          yl !== null &&
            (l &&
              yl.alternate !== null &&
              V.delete(yl.key === null ? fl : yl.key),
            (r = u(yl, r, fl)),
            pl === null ? (K = yl) : (pl.sibling = yl),
            (pl = yl)));
      return (
        l &&
          V.forEach(function (Ae) {
            return t(m, Ae);
          }),
        bl && Gt(m, fl),
        K
      );
    }
    function F(m, r, v, N) {
      if (v == null) throw Error(d(151));
      for (
        var K = null, pl = null, V = r, fl = (r = 0), yl = null, Tl = v.next();
        V !== null && !Tl.done;
        fl++, Tl = v.next()
      ) {
        V.index > fl ? ((yl = V), (V = null)) : (yl = V.sibling);
        var Ae = b(m, V, Tl.value, N);
        if (Ae === null) {
          V === null && (V = yl);
          break;
        }
        (l && V && Ae.alternate === null && t(m, V),
          (r = u(Ae, r, fl)),
          pl === null ? (K = Ae) : (pl.sibling = Ae),
          (pl = Ae),
          (V = yl));
      }
      if (Tl.done) return (e(m, V), bl && Gt(m, fl), K);
      if (V === null) {
        for (; !Tl.done; fl++, Tl = v.next())
          ((Tl = j(m, Tl.value, N)),
            Tl !== null &&
              ((r = u(Tl, r, fl)),
              pl === null ? (K = Tl) : (pl.sibling = Tl),
              (pl = Tl)));
        return (bl && Gt(m, fl), K);
      }
      for (V = a(V); !Tl.done; fl++, Tl = v.next())
        ((Tl = T(V, m, fl, Tl.value, N)),
          Tl !== null &&
            (l &&
              Tl.alternate !== null &&
              V.delete(Tl.key === null ? fl : Tl.key),
            (r = u(Tl, r, fl)),
            pl === null ? (K = Tl) : (pl.sibling = Tl),
            (pl = Tl)));
      return (
        l &&
          V.forEach(function (ch) {
            return t(m, ch);
          }),
        bl && Gt(m, fl),
        K
      );
    }
    function Ml(m, r, v, N) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === tl &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case il:
            l: {
              for (var K = v.key; r !== null; ) {
                if (r.key === K) {
                  if (((K = v.type), K === tl)) {
                    if (r.tag === 7) {
                      (e(m, r.sibling),
                        (N = n(r, v.props.children)),
                        (N.return = m),
                        (m = N));
                      break l;
                    }
                  } else if (
                    r.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === R &&
                      Be(K) === r.type)
                  ) {
                    (e(m, r.sibling),
                      (N = n(r, v.props)),
                      Fa(N, v),
                      (N.return = m),
                      (m = N));
                    break l;
                  }
                  e(m, r);
                  break;
                } else t(m, r);
                r = r.sibling;
              }
              v.type === tl
                ? ((N = Ue(v.props.children, m.mode, N, v.key)),
                  (N.return = m),
                  (m = N))
                : ((N = Fn(v.type, v.key, v.props, null, m.mode, N)),
                  Fa(N, v),
                  (N.return = m),
                  (m = N));
            }
            return i(m);
          case ml:
            l: {
              for (K = v.key; r !== null; ) {
                if (r.key === K)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === v.containerInfo &&
                    r.stateNode.implementation === v.implementation
                  ) {
                    (e(m, r.sibling),
                      (N = n(r, v.children || [])),
                      (N.return = m),
                      (m = N));
                    break l;
                  } else {
                    e(m, r);
                    break;
                  }
                else t(m, r);
                r = r.sibling;
              }
              ((N = Ui(v, m.mode, N)), (N.return = m), (m = N));
            }
            return i(m);
          case R:
            return ((v = Be(v)), Ml(m, r, v, N));
        }
        if (xl(v)) return L(m, r, v, N);
        if (al(v)) {
          if (((K = al(v)), typeof K != "function")) throw Error(d(150));
          return ((v = K.call(v)), F(m, r, v, N));
        }
        if (typeof v.then == "function") return Ml(m, r, nu(v), N);
        if (v.$$typeof === w) return Ml(m, r, lu(m, v), N);
        uu(m, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          r !== null && r.tag === 6
            ? (e(m, r.sibling), (N = n(r, v)), (N.return = m), (m = N))
            : (e(m, r), (N = Di(v, m.mode, N)), (N.return = m), (m = N)),
          i(m))
        : e(m, r);
    }
    return function (m, r, v, N) {
      try {
        ka = 0;
        var K = Ml(m, r, v, N);
        return ((ma = null), K);
      } catch (V) {
        if (V === ra || V === eu) throw V;
        var pl = rt(29, V, null, m.mode);
        return ((pl.lanes = N), (pl.return = m), pl);
      } finally {
      }
    };
  }
  var Ge = Xs(!0),
    Qs = Xs(!1),
    ce = !1;
  function Vi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ki(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function fe(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function se(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (zl & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = kn(l)),
        As(l, null, e),
        t
      );
    }
    return (Wn(l, a, t, e), kn(l));
  }
  function Ia(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), Uf(l, e));
    }
  }
  function Ji(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var n = null,
        u = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (e = e.next));
        } while (e !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e));
      return;
    }
    ((l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t));
  }
  var wi = !1;
  function Pa() {
    if (wi) {
      var l = da;
      if (l !== null) throw l;
    }
  }
  function ln(l, t, e, a) {
    wi = !1;
    var n = l.updateQueue;
    ce = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var s = c,
        y = s.next;
      ((s.next = null), i === null ? (u = y) : (i.next = y), (i = s));
      var z = l.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (c = z.lastBaseUpdate),
        c !== i &&
          (c === null ? (z.firstBaseUpdate = y) : (c.next = y),
          (z.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var j = n.baseState;
      ((i = 0), (z = y = s = null), (c = u));
      do {
        var b = c.lane & -536870913,
          T = b !== c.lane;
        if (T ? (vl & b) === b : (a & b) === b) {
          (b !== 0 && b === oa && (wi = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var L = l,
              F = c;
            b = t;
            var Ml = e;
            switch (F.tag) {
              case 1:
                if (((L = F.payload), typeof L == "function")) {
                  j = L.call(Ml, j, b);
                  break l;
                }
                j = L;
                break l;
              case 3:
                L.flags = (L.flags & -65537) | 128;
              case 0:
                if (
                  ((L = F.payload),
                  (b = typeof L == "function" ? L.call(Ml, j, b) : L),
                  b == null)
                )
                  break l;
                j = Y({}, j, b);
                break l;
              case 2:
                ce = !0;
            }
          }
          ((b = c.callback),
            b !== null &&
              ((l.flags |= 64),
              T && (l.flags |= 8192),
              (T = n.callbacks),
              T === null ? (n.callbacks = [b]) : T.push(b)));
        } else
          ((T = {
            lane: b,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            z === null ? ((y = z = T), (s = j)) : (z = z.next = T),
            (i |= b));
        if (((c = c.next), c === null)) {
          if (((c = n.shared.pending), c === null)) break;
          ((T = c),
            (c = T.next),
            (T.next = null),
            (n.lastBaseUpdate = T),
            (n.shared.pending = null));
        }
      } while (!0);
      (z === null && (s = j),
        (n.baseState = s),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = z),
        u === null && (n.shared.lanes = 0),
        (he |= i),
        (l.lanes = i),
        (l.memoizedState = j));
    }
  }
  function Zs(l, t) {
    if (typeof l != "function") throw Error(d(191, l));
    l.call(t);
  }
  function Ls(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Zs(e[l], t);
  }
  var ha = f(null),
    iu = f(0);
  function Vs(l, t) {
    ((l = kt), E(iu, l), E(ha, t), (kt = l | t.baseLanes));
  }
  function $i() {
    (E(iu, kt), E(ha, ha.current));
  }
  function Wi() {
    ((kt = iu.current), g(ha), g(iu));
  }
  var mt = f(null),
    Et = null;
  function oe(l) {
    var t = l.alternate;
    (E(Yl, Yl.current & 1),
      E(mt, l),
      Et === null &&
        (t === null || ha.current !== null || t.memoizedState !== null) &&
        (Et = l));
  }
  function ki(l) {
    (E(Yl, Yl.current), E(mt, l), Et === null && (Et = l));
  }
  function Ks(l) {
    l.tag === 22
      ? (E(Yl, Yl.current), E(mt, l), Et === null && (Et = l))
      : de();
  }
  function de() {
    (E(Yl, Yl.current), E(mt, mt.current));
  }
  function ht(l) {
    (g(mt), Et === l && (Et = null), g(Yl));
  }
  var Yl = f(0);
  function cu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || ef(e) || af(e)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Zt = 0,
    ul = null,
    Nl = null,
    Ql = null,
    fu = !1,
    va = !1,
    Xe = !1,
    su = 0,
    tn = 0,
    ya = null,
    Fr = 0;
  function Rl() {
    throw Error(d(321));
  }
  function Fi(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!dt(l[e], t[e])) return !1;
    return !0;
  }
  function Ii(l, t, e, a, n, u) {
    return (
      (Zt = u),
      (ul = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (x.H = l === null || l.memoizedState === null ? _o : mc),
      (Xe = !1),
      (u = e(a, n)),
      (Xe = !1),
      va && (u = ws(t, e, a, n)),
      Js(l),
      u
    );
  }
  function Js(l) {
    x.H = nn;
    var t = Nl !== null && Nl.next !== null;
    if (((Zt = 0), (Ql = Nl = ul = null), (fu = !1), (tn = 0), (ya = null), t))
      throw Error(d(300));
    l === null ||
      Zl ||
      ((l = l.dependencies), l !== null && Pn(l) && (Zl = !0));
  }
  function ws(l, t, e, a) {
    ul = l;
    var n = 0;
    do {
      if ((va && (ya = null), (tn = 0), (va = !1), 25 <= n))
        throw Error(d(301));
      if (((n += 1), (Ql = Nl = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((x.H = Oo), (u = t(e, a)));
    } while (va);
    return u;
  }
  function Ir() {
    var l = x.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? en(t) : t),
      (l = l.useState()[0]),
      (Nl !== null ? Nl.memoizedState : null) !== l && (ul.flags |= 1024),
      t
    );
  }
  function Pi() {
    var l = su !== 0;
    return ((su = 0), l);
  }
  function lc(l, t, e) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e));
  }
  function tc(l) {
    if (fu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      fu = !1;
    }
    ((Zt = 0), (Ql = Nl = ul = null), (va = !1), (tn = su = 0), (ya = null));
  }
  function lt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ql === null ? (ul.memoizedState = Ql = l) : (Ql = Ql.next = l), Ql);
  }
  function Gl() {
    if (Nl === null) {
      var l = ul.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Nl.next;
    var t = Ql === null ? ul.memoizedState : Ql.next;
    if (t !== null) ((Ql = t), (Nl = l));
    else {
      if (l === null)
        throw ul.alternate === null ? Error(d(467)) : Error(d(310));
      ((Nl = l),
        (l = {
          memoizedState: Nl.memoizedState,
          baseState: Nl.baseState,
          baseQueue: Nl.baseQueue,
          queue: Nl.queue,
          next: null,
        }),
        Ql === null ? (ul.memoizedState = Ql = l) : (Ql = Ql.next = l));
    }
    return Ql;
  }
  function ou() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function en(l) {
    var t = tn;
    return (
      (tn += 1),
      ya === null && (ya = []),
      (l = Bs(ya, l, t)),
      (t = ul),
      (Ql === null ? t.memoizedState : Ql.next) === null &&
        ((t = t.alternate),
        (x.H = t === null || t.memoizedState === null ? _o : mc)),
      l
    );
  }
  function du(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return en(l);
      if (l.$$typeof === w) return kl(l);
    }
    throw Error(d(438, String(l)));
  }
  function ec(l) {
    var t = null,
      e = ul.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = ul.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = ou()), (ul.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = sl;
    return (t.index++, e);
  }
  function Lt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ru(l) {
    var t = Gl();
    return ac(t, Nl, l);
  }
  function ac(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      t = n.next;
      var c = (i = null),
        s = null,
        y = t,
        z = !1;
      do {
        var j = y.lane & -536870913;
        if (j !== y.lane ? (vl & j) === j : (Zt & j) === j) {
          var b = y.revertLane;
          if (b === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              j === oa && (z = !0));
          else if ((Zt & b) === b) {
            ((y = y.next), b === oa && (z = !0));
            continue;
          } else
            ((j = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              s === null ? ((c = s = j), (i = u)) : (s = s.next = j),
              (ul.lanes |= b),
              (he |= b));
          ((j = y.action),
            Xe && e(u, j),
            (u = y.hasEagerState ? y.eagerState : e(u, j)));
        } else
          ((b = {
            lane: j,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            s === null ? ((c = s = b), (i = u)) : (s = s.next = b),
            (ul.lanes |= j),
            (he |= j));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (s === null ? (i = u) : (s.next = c),
        !dt(u, l.memoizedState) && ((Zl = !0), z && ((e = da), e !== null)))
      )
        throw e;
      ((l.memoizedState = u),
        (l.baseState = i),
        (l.baseQueue = s),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
  }
  function nc(l) {
    var t = Gl(),
      e = t.queue;
    if (e === null) throw Error(d(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      n = e.pending,
      u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = (n = n.next);
      do ((u = l(u, i.action)), (i = i.next));
      while (i !== n);
      (dt(u, t.memoizedState) || (Zl = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (e.lastRenderedState = u));
    }
    return [u, a];
  }
  function $s(l, t, e) {
    var a = ul,
      n = Gl(),
      u = bl;
    if (u) {
      if (e === void 0) throw Error(d(407));
      e = e();
    } else e = t();
    var i = !dt((Nl || n).memoizedState, e);
    if (
      (i && ((n.memoizedState = e), (Zl = !0)),
      (n = n.queue),
      cc(Fs.bind(null, a, n, l), [l]),
      n.getSnapshot !== t || i || (Ql !== null && Ql.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ga(9, { destroy: void 0 }, ks.bind(null, a, n, e, t), null),
        _l === null)
      )
        throw Error(d(349));
      u || (Zt & 127) !== 0 || Ws(a, t, e);
    }
    return e;
  }
  function Ws(l, t, e) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = ul.updateQueue),
      t === null
        ? ((t = ou()), (ul.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l)));
  }
  function ks(l, t, e, a) {
    ((t.value = e), (t.getSnapshot = a), Is(t) && Ps(l));
  }
  function Fs(l, t, e) {
    return e(function () {
      Is(t) && Ps(l);
    });
  }
  function Is(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !dt(l, e);
    } catch {
      return !0;
    }
  }
  function Ps(l) {
    var t = De(l, 2);
    t !== null && ct(t, l, 2);
  }
  function uc(l) {
    var t = lt();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Xe)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function lo(l, t, e, a) {
    return ((l.baseState = e), ac(l, Nl, typeof a == "function" ? a : Lt));
  }
  function Pr(l, t, e, a, n) {
    if (vu(l)) throw Error(d(485));
    if (((l = t.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (x.T !== null ? e(!0) : (u.isTransition = !1),
        a(u),
        (e = t.pending),
        e === null
          ? ((u.next = t.pending = u), to(t, u))
          : ((u.next = e.next), (t.pending = e.next = u)));
    }
  }
  function to(l, t) {
    var e = t.action,
      a = t.payload,
      n = l.state;
    if (t.isTransition) {
      var u = x.T,
        i = {};
      x.T = i;
      try {
        var c = e(n, a),
          s = x.S;
        (s !== null && s(i, c), eo(l, t, c));
      } catch (y) {
        ic(l, t, y);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (x.T = u));
      }
    } else
      try {
        ((u = e(n, a)), eo(l, t, u));
      } catch (y) {
        ic(l, t, y);
      }
  }
  function eo(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            ao(l, t, a);
          },
          function (a) {
            return ic(l, t, a);
          },
        )
      : ao(l, t, e);
  }
  function ao(l, t, e) {
    ((t.status = "fulfilled"),
      (t.value = e),
      no(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), to(l, e))));
  }
  function ic(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = e), no(t), (t = t.next));
      while (t !== a);
    }
    l.action = null;
  }
  function no(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function uo(l, t) {
    return t;
  }
  function io(l, t) {
    if (bl) {
      var e = _l.formState;
      if (e !== null) {
        l: {
          var a = ul;
          if (bl) {
            if (Dl) {
              t: {
                for (var n = Dl, u = At; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Nt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((Dl = Nt(n.nextSibling)), (a = n.data === "F!"));
                break l;
              }
            }
            ue(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = lt()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uo,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = No.bind(null, ul, a)),
      (a.dispatch = e),
      (a = uc(!1)),
      (u = rc.bind(null, ul, !1, a.queue)),
      (a = lt()),
      (n = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = n),
      (e = Pr.bind(null, ul, n, u, e)),
      (n.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function co(l) {
    var t = Gl();
    return fo(t, Nl, l);
  }
  function fo(l, t, e) {
    if (
      ((t = ac(l, t, uo)[0]),
      (l = ru(Lt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = en(t);
      } catch (i) {
        throw i === ra ? eu : i;
      }
    else a = t;
    t = Gl();
    var n = t.queue,
      u = n.dispatch;
    return (
      e !== t.memoizedState &&
        ((ul.flags |= 2048),
        ga(9, { destroy: void 0 }, lm.bind(null, n, e), null)),
      [a, u, l]
    );
  }
  function lm(l, t) {
    l.action = t;
  }
  function so(l) {
    var t = Gl(),
      e = Nl;
    if (e !== null) return fo(t, e, l);
    (Gl(), (t = t.memoizedState), (e = Gl()));
    var a = e.queue.dispatch;
    return ((e.memoizedState = l), [t, a, !1]);
  }
  function ga(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = ul.updateQueue),
      t === null && ((t = ou()), (ul.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function oo() {
    return Gl().memoizedState;
  }
  function mu(l, t, e, a) {
    var n = lt();
    ((ul.flags |= l),
      (n.memoizedState = ga(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a,
      )));
  }
  function hu(l, t, e, a) {
    var n = Gl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Nl !== null && a !== null && Fi(a, Nl.memoizedState.deps)
      ? (n.memoizedState = ga(t, u, e, a))
      : ((ul.flags |= l), (n.memoizedState = ga(1 | t, u, e, a)));
  }
  function ro(l, t) {
    mu(8390656, 8, l, t);
  }
  function cc(l, t) {
    hu(2048, 8, l, t);
  }
  function tm(l) {
    ul.flags |= 4;
    var t = ul.updateQueue;
    if (t === null) ((t = ou()), (ul.updateQueue = t), (t.events = [l]));
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function mo(l) {
    var t = Gl().memoizedState;
    return (
      tm({ ref: t, nextImpl: l }),
      function () {
        if ((zl & 2) !== 0) throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function ho(l, t) {
    return hu(4, 2, l, t);
  }
  function vo(l, t) {
    return hu(4, 4, l, t);
  }
  function yo(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function go(l, t, e) {
    ((e = e != null ? e.concat([l]) : null), hu(4, 4, yo.bind(null, t, l), e));
  }
  function fc() {}
  function bo(l, t) {
    var e = Gl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Fi(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function So(l, t) {
    var e = Gl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Fi(t, a[1])) return a[0];
    if (((a = l()), Xe)) {
      le(!0);
      try {
        l();
      } finally {
        le(!1);
      }
    }
    return ((e.memoizedState = [a, t]), a);
  }
  function sc(l, t, e) {
    return e === void 0 || ((Zt & 1073741824) !== 0 && (vl & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = xd()), (ul.lanes |= l), (he |= l), e);
  }
  function xo(l, t, e, a) {
    return dt(e, t)
      ? e
      : ha.current !== null
        ? ((l = sc(l, e, a)), dt(l, t) || (Zl = !0), l)
        : (Zt & 42) === 0 || ((Zt & 1073741824) !== 0 && (vl & 261930) === 0)
          ? ((Zl = !0), (l.memoizedState = e))
          : ((l = xd()), (ul.lanes |= l), (he |= l), t);
  }
  function po(l, t, e, a, n) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var i = x.T,
      c = {};
    ((x.T = c), rc(l, !1, t, e));
    try {
      var s = n(),
        y = x.S;
      if (
        (y !== null && y(c, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var z = kr(s, a);
        an(l, t, z, gt(l));
      } else an(l, t, a, gt(l));
    } catch (j) {
      an(l, t, { then: function () {}, status: "rejected", reason: j }, gt());
    } finally {
      ((H.p = u),
        i !== null && c.types !== null && (i.types = c.types),
        (x.T = i));
    }
  }
  function em() {}
  function oc(l, t, e, a) {
    if (l.tag !== 5) throw Error(d(476));
    var n = To(l).queue;
    po(
      l,
      n,
      t,
      X,
      e === null
        ? em
        : function () {
            return (zo(l), e(a));
          },
    );
  }
  function To(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lt,
        lastRenderedState: X,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Lt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function zo(l) {
    var t = To(l);
    (t.next === null && (t = l.alternate.memoizedState),
      an(l, t.next.queue, {}, gt()));
  }
  function dc() {
    return kl(pn);
  }
  function Ao() {
    return Gl().memoizedState;
  }
  function Eo() {
    return Gl().memoizedState;
  }
  function am(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = gt();
          l = fe(e);
          var a = se(t, l, e);
          (a !== null && (ct(a, t, e), Ia(a, t, e)),
            (t = { cache: Xi() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function nm(l, t, e) {
    var a = gt();
    ((e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vu(l)
        ? jo(t, e)
        : ((e = _i(l, t, e, a)), e !== null && (ct(e, l, a), Mo(e, t, a))));
  }
  function No(l, t, e) {
    var a = gt();
    an(l, t, e, a);
  }
  function an(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vu(l)) jo(t, n);
    else {
      var u = l.alternate;
      if (
        l.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = u(i, e);
          if (((n.hasEagerState = !0), (n.eagerState = c), dt(c, i)))
            return (Wn(l, t, n, 0), _l === null && $n(), !1);
        } catch {
        } finally {
        }
      if (((e = _i(l, t, n, a)), e !== null))
        return (ct(e, l, a), Mo(e, t, a), !0);
    }
    return !1;
  }
  function rc(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Vc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vu(l))
    ) {
      if (t) throw Error(d(479));
    } else ((t = _i(l, e, a, 2)), t !== null && ct(t, l, 2));
  }
  function vu(l) {
    var t = l.alternate;
    return l === ul || (t !== null && t === ul);
  }
  function jo(l, t) {
    va = fu = !0;
    var e = l.pending;
    (e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t));
  }
  function Mo(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), Uf(l, e));
    }
  }
  var nn = {
    readContext: kl,
    use: du,
    useCallback: Rl,
    useContext: Rl,
    useEffect: Rl,
    useImperativeHandle: Rl,
    useLayoutEffect: Rl,
    useInsertionEffect: Rl,
    useMemo: Rl,
    useReducer: Rl,
    useRef: Rl,
    useState: Rl,
    useDebugValue: Rl,
    useDeferredValue: Rl,
    useTransition: Rl,
    useSyncExternalStore: Rl,
    useId: Rl,
    useHostTransitionStatus: Rl,
    useFormState: Rl,
    useActionState: Rl,
    useOptimistic: Rl,
    useMemoCache: Rl,
    useCacheRefresh: Rl,
  };
  nn.useEffectEvent = Rl;
  var _o = {
      readContext: kl,
      use: du,
      useCallback: function (l, t) {
        return ((lt().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: kl,
      useEffect: ro,
      useImperativeHandle: function (l, t, e) {
        ((e = e != null ? e.concat([l]) : null),
          mu(4194308, 4, yo.bind(null, t, l), e));
      },
      useLayoutEffect: function (l, t) {
        return mu(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        mu(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = lt();
        t = t === void 0 ? null : t;
        var a = l();
        if (Xe) {
          le(!0);
          try {
            l();
          } finally {
            le(!1);
          }
        }
        return ((e.memoizedState = [a, t]), a);
      },
      useReducer: function (l, t, e) {
        var a = lt();
        if (e !== void 0) {
          var n = e(t);
          if (Xe) {
            le(!0);
            try {
              e(t);
            } finally {
              le(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (a.queue = l),
          (l = l.dispatch = nm.bind(null, ul, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = lt();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = uc(l);
        var t = l.queue,
          e = No.bind(null, ul, t);
        return ((t.dispatch = e), [l.memoizedState, e]);
      },
      useDebugValue: fc,
      useDeferredValue: function (l, t) {
        var e = lt();
        return sc(e, l, t);
      },
      useTransition: function () {
        var l = uc(!1);
        return (
          (l = po.bind(null, ul, l.queue, !0, !1)),
          (lt().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = ul,
          n = lt();
        if (bl) {
          if (e === void 0) throw Error(d(407));
          e = e();
        } else {
          if (((e = t()), _l === null)) throw Error(d(349));
          (vl & 127) !== 0 || Ws(a, t, e);
        }
        n.memoizedState = e;
        var u = { value: e, getSnapshot: t };
        return (
          (n.queue = u),
          ro(Fs.bind(null, a, u, l), [l]),
          (a.flags |= 2048),
          ga(9, { destroy: void 0 }, ks.bind(null, a, u, e, t), null),
          e
        );
      },
      useId: function () {
        var l = lt(),
          t = _l.identifierPrefix;
        if (bl) {
          var e = Ut,
            a = Dt;
          ((e = (a & ~(1 << (32 - ot(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = su++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_"));
        } else ((e = Fr++), (t = "_" + t + "r_" + e.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: dc,
      useFormState: io,
      useActionState: io,
      useOptimistic: function (l) {
        var t = lt();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e),
          (t = rc.bind(null, ul, !0, e)),
          (e.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: ec,
      useCacheRefresh: function () {
        return (lt().memoizedState = am.bind(null, ul));
      },
      useEffectEvent: function (l) {
        var t = lt(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((zl & 2) !== 0) throw Error(d(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    mc = {
      readContext: kl,
      use: du,
      useCallback: bo,
      useContext: kl,
      useEffect: cc,
      useImperativeHandle: go,
      useInsertionEffect: ho,
      useLayoutEffect: vo,
      useMemo: So,
      useReducer: ru,
      useRef: oo,
      useState: function () {
        return ru(Lt);
      },
      useDebugValue: fc,
      useDeferredValue: function (l, t) {
        var e = Gl();
        return xo(e, Nl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = ru(Lt)[0],
          t = Gl().memoizedState;
        return [typeof l == "boolean" ? l : en(l), t];
      },
      useSyncExternalStore: $s,
      useId: Ao,
      useHostTransitionStatus: dc,
      useFormState: co,
      useActionState: co,
      useOptimistic: function (l, t) {
        var e = Gl();
        return lo(e, Nl, l, t);
      },
      useMemoCache: ec,
      useCacheRefresh: Eo,
    };
  mc.useEffectEvent = mo;
  var Oo = {
    readContext: kl,
    use: du,
    useCallback: bo,
    useContext: kl,
    useEffect: cc,
    useImperativeHandle: go,
    useInsertionEffect: ho,
    useLayoutEffect: vo,
    useMemo: So,
    useReducer: nc,
    useRef: oo,
    useState: function () {
      return nc(Lt);
    },
    useDebugValue: fc,
    useDeferredValue: function (l, t) {
      var e = Gl();
      return Nl === null ? sc(e, l, t) : xo(e, Nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = nc(Lt)[0],
        t = Gl().memoizedState;
      return [typeof l == "boolean" ? l : en(l), t];
    },
    useSyncExternalStore: $s,
    useId: Ao,
    useHostTransitionStatus: dc,
    useFormState: so,
    useActionState: so,
    useOptimistic: function (l, t) {
      var e = Gl();
      return Nl !== null
        ? lo(e, Nl, l, t)
        : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: ec,
    useCacheRefresh: Eo,
  };
  Oo.useEffectEvent = mo;
  function hc(l, t, e, a) {
    ((t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : Y({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e));
  }
  var vc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = gt(),
        n = fe(a);
      ((n.payload = t),
        e != null && (n.callback = e),
        (t = se(l, n, a)),
        t !== null && (ct(t, l, a), Ia(t, l, a)));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = gt(),
        n = fe(a);
      ((n.tag = 1),
        (n.payload = t),
        e != null && (n.callback = e),
        (t = se(l, n, a)),
        t !== null && (ct(t, l, a), Ia(t, l, a)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = gt(),
        a = fe(e);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = se(l, a, e)),
        t !== null && (ct(t, l, e), Ia(t, l, e)));
    },
  };
  function Do(l, t, e, a, n, u, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Va(e, a) || !Va(n, u)
          : !0
    );
  }
  function Uo(l, t, e, a) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && vc.enqueueReplaceState(t, t.state, null));
  }
  function Qe(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = Y({}, e));
      for (var n in l) e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function Ho(l) {
    wn(l);
  }
  function Co(l) {
    console.error(l);
  }
  function Ro(l) {
    wn(l);
  }
  function yu(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function qo(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function yc(l, t, e) {
    return (
      (e = fe(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        yu(l, t);
      }),
      e
    );
  }
  function Bo(l) {
    return ((l = fe(l)), (l.tag = 3), l);
  }
  function Yo(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          qo(t, e, a);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (qo(t, e, a),
          typeof n != "function" &&
            (ve === null ? (ve = new Set([this])) : ve.add(this)));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function um(l, t, e, a, n) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && sa(t, e, n, !0),
        (e = mt.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              Et === null ? Mu() : e.alternate === null && ql === 0 && (ql = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = n),
              a === au
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  Qc(l, a, n)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === au
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Qc(l, a, n)),
              !1
            );
        }
        throw Error(d(435, e.tag));
      }
      return (Qc(l, a, n), Mu(), !1);
    }
    if (bl)
      return (
        (t = mt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Ri && ((l = Error(d(422), { cause: a })), wa(pt(l, e))))
          : (a !== Ri && ((t = Error(d(423), { cause: a })), wa(pt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (a = pt(a, e)),
            (n = yc(l.stateNode, a, n)),
            Ji(l, n),
            ql !== 4 && (ql = 2)),
        !1
      );
    var u = Error(d(520), { cause: a });
    if (
      ((u = pt(u, e)),
      mn === null ? (mn = [u]) : mn.push(u),
      ql !== 4 && (ql = 2),
      t === null)
    )
      return !0;
    ((a = pt(a, e)), (e = t));
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = n & -n),
            (e.lanes |= l),
            (l = yc(e.stateNode, a, l)),
            Ji(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (u = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ve === null || !ve.has(u)))))
          )
            return (
              (e.flags |= 65536),
              (n &= -n),
              (e.lanes |= n),
              (n = Bo(n)),
              Yo(n, l, e, a),
              Ji(e, n),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var gc = Error(d(461)),
    Zl = !1;
  function Fl(l, t, e, a) {
    t.child = l === null ? Qs(t, null, e, a) : Ge(t, l.child, e, a);
  }
  function Go(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Re(t),
      (a = Ii(l, t, e, i, u, n)),
      (c = Pi()),
      l !== null && !Zl
        ? (lc(l, t, n), Vt(l, t, n))
        : (bl && c && Hi(t), (t.flags |= 1), Fl(l, t, a, n), t.child)
    );
  }
  function Xo(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" &&
        !Oi(u) &&
        u.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = u), Qo(l, t, u, a, n))
        : ((l = Fn(e.type, null, a, t, t.mode, n)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((u = l.child), !Ec(l, n))) {
      var i = u.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Va), e(i, a) && l.ref === t.ref)
      )
        return Vt(l, t, n);
    }
    return (
      (t.flags |= 1),
      (l = Yt(u, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Qo(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Va(u, a) && l.ref === t.ref)
        if (((Zl = !1), (t.pendingProps = a = u), Ec(l, n)))
          (l.flags & 131072) !== 0 && (Zl = !0);
        else return ((t.lanes = l.lanes), Vt(l, t, n));
    }
    return bc(l, t, e, a, n);
  }
  function Zo(l, t, e, a) {
    var n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return Lo(l, t, u, e, a);
      }
      if ((e & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && tu(t, u !== null ? u.cachePool : null),
          u !== null ? Vs(t, u) : $i(),
          Ks(t));
      else
        return (
          (a = t.lanes = 536870912),
          Lo(l, t, u !== null ? u.baseLanes | e : e, e, a)
        );
    } else
      u !== null
        ? (tu(t, u.cachePool), Vs(t, u), de(), (t.memoizedState = null))
        : (l !== null && tu(t, null), $i(), de());
    return (Fl(l, t, n, e), t.child);
  }
  function un(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Lo(l, t, e, a, n) {
    var u = Zi();
    return (
      (u = u === null ? null : { parent: Xl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: e, cachePool: u }),
      l !== null && tu(t, null),
      $i(),
      Ks(t),
      l !== null && sa(l, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function gu(l, t) {
    return (
      (t = Su({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Vo(l, t, e) {
    return (
      Ge(t, l.child, null, e),
      (l = gu(t, t.pendingProps)),
      (l.flags |= 2),
      ht(t),
      (t.memoizedState = null),
      l
    );
  }
  function im(l, t, e) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (bl) {
        if (a.mode === "hidden")
          return ((l = gu(t, a)), (t.lanes = 536870912), un(null, l));
        if (
          (ki(t),
          (l = Dl)
            ? ((l = e0(l, At)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: Dt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = Ns(l)),
                (e.return = t),
                (t.child = e),
                (Wl = t),
                (Dl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return ((t.lanes = 536870912), null);
      }
      return gu(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((ki(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = Vo(l, t, e)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(d(558));
      else if (
        (Zl || sa(l, t, e, !1), (n = (e & l.childLanes) !== 0), Zl || n)
      ) {
        if (
          ((a = _l),
          a !== null && ((i = Hf(a, e)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), De(l, i), ct(a, l, i), gc);
        (Mu(), (t = Vo(l, t, e)));
      } else
        ((l = u.treeContext),
          (Dl = Nt(i.nextSibling)),
          (Wl = t),
          (bl = !0),
          (ne = null),
          (At = !1),
          l !== null && _s(t, l),
          (t = gu(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Yt(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function bu(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(d(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function bc(l, t, e, a, n) {
    return (
      Re(t),
      (e = Ii(l, t, e, a, void 0, n)),
      (a = Pi()),
      l !== null && !Zl
        ? (lc(l, t, n), Vt(l, t, n))
        : (bl && a && Hi(t), (t.flags |= 1), Fl(l, t, e, n), t.child)
    );
  }
  function Ko(l, t, e, a, n, u) {
    return (
      Re(t),
      (t.updateQueue = null),
      (e = ws(t, a, e, n)),
      Js(l),
      (a = Pi()),
      l !== null && !Zl
        ? (lc(l, t, u), Vt(l, t, u))
        : (bl && a && Hi(t), (t.flags |= 1), Fl(l, t, e, u), t.child)
    );
  }
  function Jo(l, t, e, a, n) {
    if ((Re(t), t.stateNode === null)) {
      var u = ua,
        i = e.contextType;
      (typeof i == "object" && i !== null && (u = kl(i)),
        (u = new e(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = vc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Vi(t),
        (i = e.contextType),
        (u.context = typeof i == "object" && i !== null ? kl(i) : ua),
        (u.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (hc(t, e, i, a), (u.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && vc.enqueueReplaceState(u, u.state, null),
          ln(t, a, u, n),
          Pa(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps,
        s = Qe(e, c);
      u.props = s;
      var y = u.context,
        z = e.contextType;
      ((i = ua), typeof z == "object" && z !== null && (i = kl(z)));
      var j = e.getDerivedStateFromProps;
      ((z =
        typeof j == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        z ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c || y !== i) && Uo(t, u, a, i)),
        (ce = !1));
      var b = t.memoizedState;
      ((u.state = b),
        ln(t, a, u, n),
        Pa(),
        (y = t.memoizedState),
        c || b !== y || ce
          ? (typeof j == "function" && (hc(t, e, j, a), (y = t.memoizedState)),
            (s = ce || Do(t, e, s, a, b, y, i))
              ? (z ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (u.props = a),
            (u.state = y),
            (u.context = i),
            (a = s))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = t.stateNode),
        Ki(l, t),
        (i = t.memoizedProps),
        (z = Qe(e, i)),
        (u.props = z),
        (j = t.pendingProps),
        (b = u.context),
        (y = e.contextType),
        (s = ua),
        typeof y == "object" && y !== null && (s = kl(y)),
        (c = e.getDerivedStateFromProps),
        (y =
          typeof c == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== j || b !== s) && Uo(t, u, a, s)),
        (ce = !1),
        (b = t.memoizedState),
        (u.state = b),
        ln(t, a, u, n),
        Pa());
      var T = t.memoizedState;
      i !== j ||
      b !== T ||
      ce ||
      (l !== null && l.dependencies !== null && Pn(l.dependencies))
        ? (typeof c == "function" && (hc(t, e, c, a), (T = t.memoizedState)),
          (z =
            ce ||
            Do(t, e, z, a, b, T, s) ||
            (l !== null && l.dependencies !== null && Pn(l.dependencies)))
            ? (y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, T, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, T, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === l.memoizedProps && b === l.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && b === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = T)),
          (u.props = a),
          (u.state = T),
          (u.context = s),
          (a = z))
        : (typeof u.componentDidUpdate != "function" ||
            (i === l.memoizedProps && b === l.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && b === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      bu(l, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = Ge(t, l.child, null, n)),
              (t.child = Ge(t, null, e, n)))
            : Fl(l, t, e, n),
          (t.memoizedState = u.state),
          (l = t.child))
        : (l = Vt(l, t, n)),
      l
    );
  }
  function wo(l, t, e, a) {
    return (He(), (t.flags |= 256), Fl(l, t, e, a), t.child);
  }
  var Sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function xc(l) {
    return { baseLanes: l, cachePool: Rs() };
  }
  function pc(l, t, e) {
    return ((l = l !== null ? l.childLanes & ~e : 0), t && (l |= yt), l);
  }
  function $o(l, t, e) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Yl.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (bl) {
        if (
          (n ? oe(t) : de(),
          (l = Dl)
            ? ((l = e0(l, At)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: Dt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = Ns(l)),
                (e.return = t),
                (t.child = e),
                (Wl = t),
                (Dl = null)))
            : (l = null),
          l === null)
        )
          throw ue(t);
        return (af(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = a.children;
      return (
        (a = a.fallback),
        n
          ? (de(),
            (n = t.mode),
            (c = Su({ mode: "hidden", children: c }, n)),
            (a = Ue(a, n, e, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = xc(e)),
            (a.childLanes = pc(l, i, e)),
            (t.memoizedState = Sc),
            un(null, a))
          : (oe(t), Tc(t, c))
      );
    }
    var s = l.memoizedState;
    if (s !== null && ((c = s.dehydrated), c !== null)) {
      if (u)
        t.flags & 256
          ? (oe(t), (t.flags &= -257), (t = zc(l, t, e)))
          : t.memoizedState !== null
            ? (de(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (de(),
              (c = a.fallback),
              (n = t.mode),
              (a = Su({ mode: "visible", children: a.children }, n)),
              (c = Ue(c, n, e, null)),
              (c.flags |= 2),
              (a.return = t),
              (c.return = t),
              (a.sibling = c),
              (t.child = a),
              Ge(t, l.child, null, e),
              (a = t.child),
              (a.memoizedState = xc(e)),
              (a.childLanes = pc(l, i, e)),
              (t.memoizedState = Sc),
              (t = un(null, a)));
      else if ((oe(t), af(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var y = i.dgst;
        ((i = y),
          (a = Error(d(419))),
          (a.stack = ""),
          (a.digest = i),
          wa({ value: a, source: null, stack: null }),
          (t = zc(l, t, e)));
      } else if (
        (Zl || sa(l, t, e, !1), (i = (e & l.childLanes) !== 0), Zl || i)
      ) {
        if (
          ((i = _l),
          i !== null && ((a = Hf(i, e)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), De(l, a), ct(i, l, a), gc);
        (ef(c) || Mu(), (t = zc(l, t, e)));
      } else
        ef(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = s.treeContext),
            (Dl = Nt(c.nextSibling)),
            (Wl = t),
            (bl = !0),
            (ne = null),
            (At = !1),
            l !== null && _s(t, l),
            (t = Tc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (de(),
        (c = a.fallback),
        (n = t.mode),
        (s = l.child),
        (y = s.sibling),
        (a = Yt(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        y !== null ? (c = Yt(y, c)) : ((c = Ue(c, n, e, null)), (c.flags |= 2)),
        (c.return = t),
        (a.return = t),
        (a.sibling = c),
        (t.child = a),
        un(null, a),
        (a = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = xc(e))
          : ((n = c.cachePool),
            n !== null
              ? ((s = Xl._currentValue),
                (n = n.parent !== s ? { parent: s, pool: s } : n))
              : (n = Rs()),
            (c = { baseLanes: c.baseLanes | e, cachePool: n })),
        (a.memoizedState = c),
        (a.childLanes = pc(l, i, e)),
        (t.memoizedState = Sc),
        un(l.child, a))
      : (oe(t),
        (e = l.child),
        (l = e.sibling),
        (e = Yt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function Tc(l, t) {
    return (
      (t = Su({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Su(l, t) {
    return ((l = rt(22, l, null, t)), (l.lanes = 0), l);
  }
  function zc(l, t, e) {
    return (
      Ge(t, l.child, null, e),
      (l = Tc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Wo(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    (a !== null && (a.lanes |= t), Yi(l.return, t, e));
  }
  function Ac(l, t, e, a, n, u) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function ko(l, t, e) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Yl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      E(Yl, i),
      Fl(l, t, a, e),
      (a = bl ? Ja : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Wo(l, e, t);
        else if (l.tag === 19) Wo(l, e, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          ((l = e.alternate),
            l !== null && cu(l) === null && (n = e),
            (e = e.sibling));
        ((e = n),
          e === null
            ? ((n = t.child), (t.child = null))
            : ((n = e.sibling), (e.sibling = null)),
          Ac(t, !1, n, e, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && cu(l) === null)) {
            t.child = n;
            break;
          }
          ((l = n.sibling), (n.sibling = e), (e = n), (n = l));
        }
        Ac(t, !0, e, null, u, a);
        break;
      case "together":
        Ac(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (he |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((sa(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Yt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (e = e.sibling = Yt(l, l.pendingProps)),
          (e.return = t));
      e.sibling = null;
    }
    return t.child;
  }
  function Ec(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Pn(l)));
  }
  function cm(l, t, e) {
    switch (t.tag) {
      case 3:
        (wl(t, t.stateNode.containerInfo),
          ie(t, Xl, l.memoizedState.cache),
          He());
        break;
      case 27:
      case 5:
        Da(t);
        break;
      case 4:
        wl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ie(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), ki(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (oe(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
              ? $o(l, t, e)
              : (oe(t), (l = Vt(l, t, e)), l !== null ? l.sibling : null);
        oe(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (sa(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return ko(l, t, e);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          E(Yl, Yl.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Zo(l, t, e, t.pendingProps));
      case 24:
        ie(t, Xl, l.memoizedState.cache);
    }
    return Vt(l, t, e);
  }
  function Fo(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Zl = !0;
      else {
        if (!Ec(l, e) && (t.flags & 128) === 0) return ((Zl = !1), cm(l, t, e));
        Zl = (l.flags & 131072) !== 0;
      }
    else ((Zl = !1), bl && (t.flags & 1048576) !== 0 && Ms(t, Ja, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Be(t.elementType)), (t.type = l), typeof l == "function"))
            Oi(l)
              ? ((a = Qe(l, a)), (t.tag = 1), (t = Jo(null, t, l, a, e)))
              : ((t.tag = 0), (t = bc(null, t, l, a, e)));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === cl) {
                ((t.tag = 11), (t = Go(null, t, l, a, e)));
                break l;
              } else if (n === p) {
                ((t.tag = 14), (t = Xo(null, t, l, a, e)));
                break l;
              }
            }
            throw ((t = Sl(l) || l), Error(d(306, t, "")));
          }
        }
        return t;
      case 0:
        return bc(l, t, t.type, t.pendingProps, e);
      case 1:
        return ((a = t.type), (n = Qe(a, t.pendingProps)), Jo(l, t, a, n, e));
      case 3:
        l: {
          if ((wl(t, t.stateNode.containerInfo), l === null))
            throw Error(d(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Ki(l, t), ln(t, a, null, e));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            ie(t, Xl, a),
            a !== u.cache && Gi(t, [Xl], e, !0),
            Pa(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = wo(l, t, a, e);
              break l;
            } else if (a !== n) {
              ((n = pt(Error(d(424)), t)), wa(n), (t = wo(l, t, a, e)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                Dl = Nt(l.firstChild),
                  Wl = t,
                  bl = !0,
                  ne = null,
                  At = !0,
                  e = Qs(t, null, a, e),
                  t.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
            }
          else {
            if ((He(), a === n)) {
              t = Vt(l, t, e);
              break l;
            }
            Fl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          bu(l, t),
          l === null
            ? (e = f0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : bl ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = Ru($.current).createElement(e)),
                (a[$l] = t),
                (a[tt] = l),
                Il(a, e, l),
                Kl(a),
                (t.stateNode = a))
            : (t.memoizedState = f0(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Da(t),
          l === null &&
            bl &&
            ((a = t.stateNode = u0(t.type, t.pendingProps, $.current)),
            (Wl = t),
            (At = !0),
            (n = Dl),
            Se(t.type) ? ((nf = n), (Dl = Nt(a.firstChild))) : (Dl = n)),
          Fl(l, t, t.pendingProps.children, e),
          bu(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            bl &&
            ((n = a = Dl) &&
              ((a = Bm(a, t.type, t.pendingProps, At)),
              a !== null
                ? ((t.stateNode = a),
                  (Wl = t),
                  (Dl = Nt(a.firstChild)),
                  (At = !1),
                  (n = !0))
                : (n = !1)),
            n || ue(t)),
          Da(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = u.children),
          Pc(n, u) ? (a = null) : i !== null && Pc(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Ii(l, t, Ir, null, null, e)), (pn._currentValue = n)),
          bu(l, t),
          Fl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            bl &&
            ((l = e = Dl) &&
              ((e = Ym(e, t.pendingProps, At)),
              e !== null
                ? ((t.stateNode = e), (Wl = t), (Dl = null), (l = !0))
                : (l = !1)),
            l || ue(t)),
          null
        );
      case 13:
        return $o(l, t, e);
      case 4:
        return (
          wl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = Ge(t, null, a, e)) : Fl(l, t, a, e),
          t.child
        );
      case 11:
        return Go(l, t, t.type, t.pendingProps, e);
      case 7:
        return (Fl(l, t, t.pendingProps, e), t.child);
      case 8:
        return (Fl(l, t, t.pendingProps.children, e), t.child);
      case 12:
        return (Fl(l, t, t.pendingProps.children, e), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          ie(t, t.type, a.value),
          Fl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Re(t),
          (n = kl(n)),
          (a = a(n)),
          (t.flags |= 1),
          Fl(l, t, a, e),
          t.child
        );
      case 14:
        return Xo(l, t, t.type, t.pendingProps, e);
      case 15:
        return Qo(l, t, t.type, t.pendingProps, e);
      case 19:
        return ko(l, t, e);
      case 31:
        return im(l, t, e);
      case 22:
        return Zo(l, t, e, t.pendingProps);
      case 24:
        return (
          Re(t),
          (a = kl(Xl)),
          l === null
            ? ((n = Zi()),
              n === null &&
                ((n = _l),
                (u = Xi()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= e),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Vi(t),
              ie(t, Xl, n))
            : ((l.lanes & e) !== 0 && (Ki(l, t), ln(t, null, null, e), Pa()),
              (n = l.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  ie(t, Xl, a))
                : ((a = u.cache),
                  ie(t, Xl, a),
                  a !== n.cache && Gi(t, [Xl], e, !0))),
          Fl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function Kt(l) {
    l.flags |= 4;
  }
  function Nc(l, t, e, a, n) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (n & 335544128) === n))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Ad()) l.flags |= 8192;
        else throw ((Ye = au), Li);
    } else l.flags &= -16777217;
  }
  function Io(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !m0(t)))
      if (Ad()) l.flags |= 8192;
      else throw ((Ye = au), Li);
  }
  function xu(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Of() : 536870912), (l.lanes |= t), (pa |= t)));
  }
  function cn(l, t) {
    if (!bl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            (t.alternate !== null && (e = t), (t = t.sibling));
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ul(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        ((e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling));
    else
      for (n = l.child; n !== null; )
        ((e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = l),
          (n = n.sibling));
    return ((l.subtreeFlags |= a), (l.childLanes = e), t);
  }
  function fm(l, t, e) {
    var a = t.pendingProps;
    switch ((Ci(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ul(t), null);
      case 1:
        return (Ul(t), null);
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(Xl),
          Ol(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (fa(t)
              ? Kt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), qi())),
          Ul(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          l === null
            ? (Kt(t),
              u !== null ? (Ul(t), Io(t, u)) : (Ul(t), Nc(t, n, null, a, e)))
            : u
              ? u !== l.memoizedState
                ? (Kt(t), Ul(t), Io(t, u))
                : (Ul(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== a && Kt(t),
                Ul(t),
                Nc(t, n, l, a, e)),
          null
        );
      case 27:
        if (
          (Dn(t),
          (e = $.current),
          (n = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return (Ul(t), null);
          }
          ((l = U.current),
            fa(t) ? Os(t) : ((l = u0(n, a, e)), (t.stateNode = l), Kt(t)));
        }
        return (Ul(t), null);
      case 5:
        if ((Dn(t), (n = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return (Ul(t), null);
          }
          if (((u = U.current), fa(t))) Os(t);
          else {
            var i = Ru($.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[$l] = t), (u[tt] = a));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            l: switch ((Il(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Kt(t);
          }
        }
        return (
          Ul(t),
          Nc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(d(166));
          if (((l = $.current), fa(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (n = Wl),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((l[$l] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                $d(l.nodeValue, e)
              )),
              l || ue(t, !0));
          } else
            ((l = Ru(l).createTextNode(a)), (l[$l] = t), (t.stateNode = l));
        }
        return (Ul(t), null);
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = fa(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(d(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(d(557));
              l[$l] = t;
            } else
              (He(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ul(t), (l = !1));
          } else
            ((e = qi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0));
          if (!l) return t.flags & 256 ? (ht(t), t) : (ht(t), null);
          if ((t.flags & 128) !== 0) throw Error(d(558));
        }
        return (Ul(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = fa(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(d(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(d(317));
              n[$l] = t;
            } else
              (He(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ul(t), (n = !1));
          } else
            ((n = qi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (ht(t), t) : (ht(t), null);
        }
        return (
          ht(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              xu(t, t.updateQueue),
              Ul(t),
              null)
        );
      case 4:
        return (Ol(), l === null && $c(t.stateNode.containerInfo), Ul(t), null);
      case 10:
        return (Qt(t.type), Ul(t), null);
      case 19:
        if ((g(Yl), (a = t.memoizedState), a === null)) return (Ul(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) cn(a, !1);
          else {
            if (ql !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((u = cu(l)), u !== null)) {
                  for (
                    t.flags |= 128,
                      cn(a, !1),
                      l = u.updateQueue,
                      t.updateQueue = l,
                      xu(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;
                  )
                    (Es(e, l), (e = e.sibling));
                  return (
                    E(Yl, (Yl.current & 1) | 2),
                    bl && Gt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              ft() > Eu &&
              ((t.flags |= 128), (n = !0), cn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((l = cu(u)), l !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                xu(t, l),
                cn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !bl)
              )
                return (Ul(t), null);
            } else
              2 * ft() - a.renderingStartTime > Eu &&
                e !== 536870912 &&
                ((t.flags |= 128), (n = !0), cn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((l = a.last),
              l !== null ? (l.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = ft()),
            (l.sibling = null),
            (e = Yl.current),
            E(Yl, n ? (e & 1) | 2 : e & 1),
            bl && Gt(t, a.treeForkCount),
            l)
          : (Ul(t), null);
      case 22:
      case 23:
        return (
          ht(t),
          Wi(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ul(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ul(t),
          (e = t.updateQueue),
          e !== null && xu(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && g(qe),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Qt(Xl),
          Ul(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function sm(l, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(Xl),
          Ol(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Dn(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ht(t), t.alternate === null)) throw Error(d(340));
          He();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ht(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          He();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (g(Yl), null);
      case 4:
        return (Ol(), null);
      case 10:
        return (Qt(t.type), null);
      case 22:
      case 23:
        return (
          ht(t),
          Wi(),
          l !== null && g(qe),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Qt(Xl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Po(l, t) {
    switch ((Ci(t), t.tag)) {
      case 3:
        (Qt(Xl), Ol());
        break;
      case 26:
      case 27:
      case 5:
        Dn(t);
        break;
      case 4:
        Ol();
        break;
      case 31:
        t.memoizedState !== null && ht(t);
        break;
      case 13:
        ht(t);
        break;
      case 19:
        g(Yl);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        (ht(t), Wi(), l !== null && g(qe));
        break;
      case 24:
        Qt(Xl);
    }
  }
  function fn(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create,
              i = e.inst;
            ((a = u()), (i.destroy = a));
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      El(t, t.return, c);
    }
  }
  function re(l, t, e) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (n = t));
              var s = e,
                y = c;
              try {
                y();
              } catch (z) {
                El(n, s, z);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (z) {
      El(t, t.return, z);
    }
  }
  function ld(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Ls(t, e);
      } catch (a) {
        El(l, l.return, a);
      }
    }
  }
  function td(l, t, e) {
    ((e.props = Qe(l.type, l.memoizedProps)), (e.state = l.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (a) {
      El(l, t, a);
    }
  }
  function sn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      El(l, t, n);
    }
  }
  function Ht(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          El(l, t, n);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          El(l, t, n);
        }
      else e.current = null;
  }
  function ed(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      El(l, l.return, n);
    }
  }
  function jc(l, t, e) {
    try {
      var a = l.stateNode;
      (Dm(a, l.type, e, t), (a[tt] = t));
    } catch (n) {
      El(l, l.return, n);
    }
  }
  function ad(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Se(l.type)) ||
      l.tag === 4
    );
  }
  function Mc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || ad(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Se(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function _c(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = qt)));
    else if (
      a !== 4 &&
      (a === 27 && Se(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (_c(l, t, e), l = l.sibling; l !== null; )
        (_c(l, t, e), (l = l.sibling));
  }
  function pu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l));
    else if (
      a !== 4 &&
      (a === 27 && Se(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (pu(l, t, e), l = l.sibling; l !== null; )
        (pu(l, t, e), (l = l.sibling));
  }
  function nd(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (Il(t, a, e), (t[$l] = l), (t[tt] = e));
    } catch (u) {
      El(l, l.return, u);
    }
  }
  var Jt = !1,
    Ll = !1,
    Oc = !1,
    ud = typeof WeakSet == "function" ? WeakSet : Set,
    Jl = null;
  function om(l, t) {
    if (((l = l.containerInfo), (Fc = Zu), (l = ys(l)), zi(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (e.nodeType, u.nodeType);
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              c = -1,
              s = -1,
              y = 0,
              z = 0,
              j = l,
              b = null;
            t: for (;;) {
              for (
                var T;
                j !== e || (n !== 0 && j.nodeType !== 3) || (c = i + n),
                  j !== u || (a !== 0 && j.nodeType !== 3) || (s = i + a),
                  j.nodeType === 3 && (i += j.nodeValue.length),
                  (T = j.firstChild) !== null;
              )
                ((b = j), (j = T));
              for (;;) {
                if (j === l) break t;
                if (
                  (b === e && ++y === n && (c = i),
                  b === u && ++z === a && (s = i),
                  (T = j.nextSibling) !== null)
                )
                  break;
                ((j = b), (b = j.parentNode));
              }
              j = T;
            }
            e = c === -1 || s === -1 ? null : { start: c, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Ic = { focusedElem: l, selectionRange: e }, Zu = !1, Jl = t;
      Jl !== null;
    )
      if (
        ((t = Jl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Jl = l));
      else
        for (; Jl !== null; ) {
          switch (((t = Jl), (u = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (e = 0; e < l.length; e++)
                  ((n = l[e]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                ((l = void 0),
                  (e = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = e.stateNode));
                try {
                  var L = Qe(e.type, n);
                  ((l = a.getSnapshotBeforeUpdate(L, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = l));
                } catch (F) {
                  El(e, e.return, F);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  tf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      tf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(d(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Jl = l));
            break;
          }
          Jl = t.return;
        }
  }
  function id(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ($t(l, e), a & 4 && fn(5, e));
        break;
      case 1:
        if (($t(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              El(e, e.return, i);
            }
          else {
            var n = Qe(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              El(e, e.return, i);
            }
          }
        (a & 64 && ld(e), a & 512 && sn(e, e.return));
        break;
      case 3:
        if (($t(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Ls(l, t);
          } catch (i) {
            El(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && nd(e);
      case 26:
      case 5:
        ($t(l, e), t === null && a & 4 && ed(e), a & 512 && sn(e, e.return));
        break;
      case 12:
        $t(l, e);
        break;
      case 31:
        ($t(l, e), a & 4 && sd(l, e));
        break;
      case 13:
        ($t(l, e),
          a & 4 && od(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = Sm.bind(null, e)), Gm(l, e)))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Jt), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Ll), (n = Jt));
          var u = Ll;
          ((Jt = a),
            (Ll = t) && !u ? Wt(l, e, (e.subtreeFlags & 8772) !== 0) : $t(l, e),
            (Jt = n),
            (Ll = u));
        }
        break;
      case 30:
        break;
      default:
        $t(l, e);
    }
  }
  function cd(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), cd(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ii(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var Hl = null,
    at = !1;
  function wt(l, t, e) {
    for (e = e.child; e !== null; ) (fd(l, t, e), (e = e.sibling));
  }
  function fd(l, t, e) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(Ua, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (Ll || Ht(e, t),
          wt(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        Ll || Ht(e, t);
        var a = Hl,
          n = at;
        (Se(e.type) && ((Hl = e.stateNode), (at = !1)),
          wt(l, t, e),
          bn(e.stateNode),
          (Hl = a),
          (at = n));
        break;
      case 5:
        Ll || Ht(e, t);
      case 6:
        if (
          ((a = Hl),
          (n = at),
          (Hl = null),
          wt(l, t, e),
          (Hl = a),
          (at = n),
          Hl !== null)
        )
          if (at)
            try {
              (Hl.nodeType === 9
                ? Hl.body
                : Hl.nodeName === "HTML"
                  ? Hl.ownerDocument.body
                  : Hl
              ).removeChild(e.stateNode);
            } catch (u) {
              El(e, t, u);
            }
          else
            try {
              Hl.removeChild(e.stateNode);
            } catch (u) {
              El(e, t, u);
            }
        break;
      case 18:
        Hl !== null &&
          (at
            ? ((l = Hl),
              l0(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                e.stateNode,
              ),
              _a(l))
            : l0(Hl, e.stateNode));
        break;
      case 4:
        ((a = Hl),
          (n = at),
          (Hl = e.stateNode.containerInfo),
          (at = !0),
          wt(l, t, e),
          (Hl = a),
          (at = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (re(2, e, t), Ll || re(4, e, t), wt(l, t, e));
        break;
      case 1:
        (Ll ||
          (Ht(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && td(e, t, a)),
          wt(l, t, e));
        break;
      case 21:
        wt(l, t, e);
        break;
      case 22:
        ((Ll = (a = Ll) || e.memoizedState !== null), wt(l, t, e), (Ll = a));
        break;
      default:
        wt(l, t, e);
    }
  }
  function sd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        _a(l);
      } catch (e) {
        El(t, t.return, e);
      }
    }
  }
  function od(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        _a(l);
      } catch (e) {
        El(t, t.return, e);
      }
  }
  function dm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new ud()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new ud()),
          t
        );
      default:
        throw Error(d(435, l.tag));
    }
  }
  function Tu(l, t) {
    var e = dm(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var n = xm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function nt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Se(c.type)) {
                ((Hl = c.stateNode), (at = !1));
                break l;
              }
              break;
            case 5:
              ((Hl = c.stateNode), (at = !1));
              break l;
            case 3:
            case 4:
              ((Hl = c.stateNode.containerInfo), (at = !0));
              break l;
          }
          c = c.return;
        }
        if (Hl === null) throw Error(d(160));
        (fd(u, i, n),
          (Hl = null),
          (at = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (dd(t, l), (t = t.sibling));
  }
  var _t = null;
  function dd(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (nt(t, l),
          ut(l),
          a & 4 && (re(3, l, l.return), fn(3, l), re(5, l, l.return)));
        break;
      case 1:
        (nt(t, l),
          ut(l),
          a & 512 && (Ll || e === null || Ht(e, e.return)),
          a & 64 &&
            Jt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
        break;
      case 26:
        var n = _t;
        if (
          (nt(t, l),
          ut(l),
          a & 512 && (Ll || e === null || Ht(e, e.return)),
          a & 4)
        ) {
          var u = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  ((a = l.type),
                    (e = l.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ra] ||
                          u[$l] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Il(u, a, e),
                        (u[$l] = l),
                        Kl(u),
                        (a = u));
                      break l;
                    case "link":
                      var i = d0("link", "href", n).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              u.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              u.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              u.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Il(u, a, e),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = d0("meta", "content", n).get(
                          a + (e.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((u = i[c]),
                            u.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              u.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              u.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              u.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((u = n.createElement(a)),
                        Il(u, a, e),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  ((u[$l] = l), Kl(u), (a = u));
                }
                l.stateNode = a;
              } else r0(n, l.type, l.stateNode);
            else l.stateNode = o0(n, a, l.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : u.count--,
                a === null
                  ? r0(n, l.type, l.stateNode)
                  : o0(n, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                jc(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        (nt(t, l),
          ut(l),
          a & 512 && (Ll || e === null || Ht(e, e.return)),
          e !== null && a & 4 && jc(l, l.memoizedProps, e.memoizedProps));
        break;
      case 5:
        if (
          (nt(t, l),
          ut(l),
          a & 512 && (Ll || e === null || Ht(e, e.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            Ie(n, "");
          } catch (L) {
            El(l, l.return, L);
          }
        }
        (a & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), jc(l, n, e !== null ? e.memoizedProps : n)),
          a & 1024 && (Oc = !0));
        break;
      case 6:
        if ((nt(t, l), ut(l), a & 4)) {
          if (l.stateNode === null) throw Error(d(162));
          ((a = l.memoizedProps), (e = l.stateNode));
          try {
            e.nodeValue = a;
          } catch (L) {
            El(l, l.return, L);
          }
        }
        break;
      case 3:
        if (
          ((Yu = null),
          (n = _t),
          (_t = qu(t.containerInfo)),
          nt(t, l),
          (_t = n),
          ut(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            _a(t.containerInfo);
          } catch (L) {
            El(l, l.return, L);
          }
        Oc && ((Oc = !1), rd(l));
        break;
      case 4:
        ((a = _t),
          (_t = qu(l.stateNode.containerInfo)),
          nt(t, l),
          ut(l),
          (_t = a));
        break;
      case 12:
        (nt(t, l), ut(l));
        break;
      case 31:
        (nt(t, l),
          ut(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Tu(l, a))));
        break;
      case 13:
        (nt(t, l),
          ut(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (Au = ft()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Tu(l, a))));
        break;
      case 22:
        n = l.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null,
          y = Jt,
          z = Ll;
        if (
          ((Jt = y || n),
          (Ll = z || s),
          nt(t, l),
          (Ll = z),
          (Jt = y),
          ut(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (e === null || s || Jt || Ll || Ze(l)),
              e = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                s = e = t;
                try {
                  if (((u = s.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = s.stateNode;
                    var j = s.memoizedProps.style,
                      b =
                        j != null && j.hasOwnProperty("display")
                          ? j.display
                          : null;
                    c.style.display =
                      b == null || typeof b == "boolean" ? "" : ("" + b).trim();
                  }
                } catch (L) {
                  El(s, s.return, L);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (L) {
                  El(s, s.return, L);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                s = t;
                try {
                  var T = s.stateNode;
                  n ? t0(T, !0) : t0(s.stateNode, !1);
                } catch (L) {
                  El(s, s.return, L);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (e === t && (e = null), (t = t.return));
            }
            (e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), Tu(l, e))));
        break;
      case 19:
        (nt(t, l),
          ut(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Tu(l, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (nt(t, l), ut(l));
    }
  }
  function ut(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (ad(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(d(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = Mc(l);
            pu(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Ie(i, ""), (e.flags &= -33));
            var c = Mc(l);
            pu(l, c, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo,
              y = Mc(l);
            _c(l, y, s);
            break;
          default:
            throw Error(d(161));
        }
      } catch (z) {
        El(l, l.return, z);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function rd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (rd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function $t(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (id(l, t.alternate, t), (t = t.sibling));
  }
  function Ze(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (re(4, t, t.return), Ze(t));
          break;
        case 1:
          Ht(t, t.return);
          var e = t.stateNode;
          (typeof e.componentWillUnmount == "function" && td(t, t.return, e),
            Ze(t));
          break;
        case 27:
          bn(t.stateNode);
        case 26:
        case 5:
          (Ht(t, t.return), Ze(t));
          break;
        case 22:
          t.memoizedState === null && Ze(t);
          break;
        case 30:
          Ze(t);
          break;
        default:
          Ze(t);
      }
      l = l.sibling;
    }
  }
  function Wt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = l,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Wt(n, u, e), fn(4, u));
          break;
        case 1:
          if (
            (Wt(n, u, e),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (y) {
              El(a, a.return, y);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var c = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  Zs(s[n], c);
            } catch (y) {
              El(a, a.return, y);
            }
          }
          (e && i & 64 && ld(u), sn(u, u.return));
          break;
        case 27:
          nd(u);
        case 26:
        case 5:
          (Wt(n, u, e), e && a === null && i & 4 && ed(u), sn(u, u.return));
          break;
        case 12:
          Wt(n, u, e);
          break;
        case 31:
          (Wt(n, u, e), e && i & 4 && sd(n, u));
          break;
        case 13:
          (Wt(n, u, e), e && i & 4 && od(n, u));
          break;
        case 22:
          (u.memoizedState === null && Wt(n, u, e), sn(u, u.return));
          break;
        case 30:
          break;
        default:
          Wt(n, u, e);
      }
      t = t.sibling;
    }
  }
  function Dc(l, t) {
    var e = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && $a(e)));
  }
  function Uc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && $a(l)));
  }
  function Ot(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (md(l, t, e, a), (t = t.sibling));
  }
  function md(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ot(l, t, e, a), n & 2048 && fn(9, t));
        break;
      case 1:
        Ot(l, t, e, a);
        break;
      case 3:
        (Ot(l, t, e, a),
          n & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && $a(l))));
        break;
      case 12:
        if (n & 2048) {
          (Ot(l, t, e, a), (l = t.stateNode));
          try {
            var u = t.memoizedProps,
              i = u.id,
              c = u.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            El(t, t.return, s);
          }
        } else Ot(l, t, e, a);
        break;
      case 31:
        Ot(l, t, e, a);
        break;
      case 13:
        Ot(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Ot(l, t, e, a)
              : on(l, t)
            : u._visibility & 2
              ? Ot(l, t, e, a)
              : ((u._visibility |= 2),
                ba(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Dc(i, t));
        break;
      case 24:
        (Ot(l, t, e, a), n & 2048 && Uc(t.alternate, t));
        break;
      default:
        Ot(l, t, e, a);
    }
  }
  function ba(l, t, e, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = l,
        i = t,
        c = e,
        s = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ba(u, i, c, s, n), fn(8, i));
          break;
        case 23:
          break;
        case 22:
          var z = i.stateNode;
          (i.memoizedState !== null
            ? z._visibility & 2
              ? ba(u, i, c, s, n)
              : on(u, i)
            : ((z._visibility |= 2), ba(u, i, c, s, n)),
            n && y & 2048 && Dc(i.alternate, i));
          break;
        case 24:
          (ba(u, i, c, s, n), n && y & 2048 && Uc(i.alternate, i));
          break;
        default:
          ba(u, i, c, s, n);
      }
      t = t.sibling;
    }
  }
  function on(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (on(e, a), n & 2048 && Dc(a.alternate, a));
            break;
          case 24:
            (on(e, a), n & 2048 && Uc(a.alternate, a));
            break;
          default:
            on(e, a);
        }
        t = t.sibling;
      }
  }
  var dn = 8192;
  function Sa(l, t, e) {
    if (l.subtreeFlags & dn)
      for (l = l.child; l !== null; ) (hd(l, t, e), (l = l.sibling));
  }
  function hd(l, t, e) {
    switch (l.tag) {
      case 26:
        (Sa(l, t, e),
          l.flags & dn &&
            l.memoizedState !== null &&
            Fm(e, _t, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        Sa(l, t, e);
        break;
      case 3:
      case 4:
        var a = _t;
        ((_t = qu(l.stateNode.containerInfo)), Sa(l, t, e), (_t = a));
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = dn), (dn = 16777216), Sa(l, t, e), (dn = a))
            : Sa(l, t, e));
        break;
      default:
        Sa(l, t, e);
    }
  }
  function vd(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function rn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Jl = a), gd(a, l));
        }
      vd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (yd(l), (l = l.sibling));
  }
  function yd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (rn(l), l.flags & 2048 && re(9, l, l.return));
        break;
      case 3:
        rn(l);
        break;
      case 12:
        rn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), zu(l))
          : rn(l);
        break;
      default:
        rn(l);
    }
  }
  function zu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Jl = a), gd(a, l));
        }
      vd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (re(8, t, t.return), zu(t));
          break;
        case 22:
          ((e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), zu(t)));
          break;
        default:
          zu(t);
      }
      l = l.sibling;
    }
  }
  function gd(l, t) {
    for (; Jl !== null; ) {
      var e = Jl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          re(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          $a(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) ((a.return = e), (Jl = a));
      else
        l: for (e = l; Jl !== null; ) {
          a = Jl;
          var n = a.sibling,
            u = a.return;
          if ((cd(a), a === e)) {
            Jl = null;
            break l;
          }
          if (n !== null) {
            ((n.return = u), (Jl = n));
            break l;
          }
          Jl = u;
        }
    }
  }
  var rm = {
      getCacheForType: function (l) {
        var t = kl(Xl),
          e = t.data.get(l);
        return (e === void 0 && ((e = l()), t.data.set(l, e)), e);
      },
      cacheSignal: function () {
        return kl(Xl).controller.signal;
      },
    },
    mm = typeof WeakMap == "function" ? WeakMap : Map,
    zl = 0,
    _l = null,
    dl = null,
    vl = 0,
    Al = 0,
    vt = null,
    me = !1,
    xa = !1,
    Hc = !1,
    kt = 0,
    ql = 0,
    he = 0,
    Le = 0,
    Cc = 0,
    yt = 0,
    pa = 0,
    mn = null,
    it = null,
    Rc = !1,
    Au = 0,
    bd = 0,
    Eu = 1 / 0,
    Nu = null,
    ve = null,
    Vl = 0,
    ye = null,
    Ta = null,
    Ft = 0,
    qc = 0,
    Bc = null,
    Sd = null,
    hn = 0,
    Yc = null;
  function gt() {
    return (zl & 2) !== 0 && vl !== 0 ? vl & -vl : x.T !== null ? Vc() : Cf();
  }
  function xd() {
    if (yt === 0)
      if ((vl & 536870912) === 0 || bl) {
        var l = Cn;
        ((Cn <<= 1), (Cn & 3932160) === 0 && (Cn = 262144), (yt = l));
      } else yt = 536870912;
    return ((l = mt.current), l !== null && (l.flags |= 32), yt);
  }
  function ct(l, t, e) {
    (((l === _l && (Al === 2 || Al === 9)) || l.cancelPendingCommit !== null) &&
      (za(l, 0), ge(l, vl, yt, !1)),
      Ca(l, e),
      ((zl & 2) === 0 || l !== _l) &&
        (l === _l &&
          ((zl & 2) === 0 && (Le |= e), ql === 4 && ge(l, vl, yt, !1)),
        Ct(l)));
  }
  function pd(l, t, e) {
    if ((zl & 6) !== 0) throw Error(d(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ha(l, t),
      n = a ? ym(l, t) : Xc(l, t, !0),
      u = a;
    do {
      if (n === 0) {
        xa && !a && ge(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), u && !hm(e))) {
          ((n = Xc(l, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), l.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = mn;
              var s = c.current.memoizedState.isDehydrated;
              if ((s && (za(c, i).flags |= 256), (i = Xc(c, i, !1)), i !== 2)) {
                if (Hc && !s) {
                  ((c.errorRecoveryDisabledLanes |= u), (Le |= u), (n = 4));
                  break l;
                }
                ((u = it),
                  (it = n),
                  u !== null &&
                    (it === null ? (it = u) : it.push.apply(it, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (za(l, 0), ge(l, t, 0, !0));
          break;
        }
        l: {
          switch (((a = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ge(a, t, yt, !me);
              break l;
            case 2:
              it = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && ((n = Au + 300 - ft()), 10 < n)) {
            if ((ge(a, t, yt, !me), qn(a, 0, !0) !== 0)) break l;
            ((Ft = t),
              (a.timeoutHandle = Id(
                Td.bind(
                  null,
                  a,
                  e,
                  it,
                  Nu,
                  Rc,
                  t,
                  yt,
                  Le,
                  pa,
                  me,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break l;
          }
          Td(a, e, it, Nu, Rc, t, yt, Le, pa, me, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ct(l);
  }
  function Td(l, t, e, a, n, u, i, c, s, y, z, j, b, T) {
    if (
      ((l.timeoutHandle = -1),
      (j = t.subtreeFlags),
      j & 8192 || (j & 16785408) === 16785408)
    ) {
      ((j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt,
      }),
        hd(t, u, j));
      var L =
        (u & 62914560) === u ? Au - ft() : (u & 4194048) === u ? bd - ft() : 0;
      if (((L = Im(j, L)), L !== null)) {
        ((Ft = u),
          (l.cancelPendingCommit = L(
            Od.bind(null, l, t, u, e, a, n, i, c, s, z, j, null, b, T),
          )),
          ge(l, u, i, !y));
        return;
      }
    }
    Od(l, t, u, e, a, n, i, c, s);
  }
  function hm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!dt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        ((e.return = t), (t = e));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ge(l, t, e, a) {
    ((t &= ~Cc),
      (t &= ~Le),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - ot(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    e !== 0 && Df(l, e, t);
  }
  function ju() {
    return (zl & 6) === 0 ? (vn(0), !1) : !0;
  }
  function Gc() {
    if (dl !== null) {
      if (Al === 0) var l = dl.return;
      else ((l = dl), (Xt = Ce = null), tc(l), (ma = null), (ka = 0), (l = dl));
      for (; l !== null; ) (Po(l.alternate, l), (l = l.return));
      dl = null;
    }
  }
  function za(l, t) {
    var e = l.timeoutHandle;
    (e !== -1 && ((l.timeoutHandle = -1), Cm(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (Ft = 0),
      Gc(),
      (_l = l),
      (dl = e = Yt(l.current, null)),
      (vl = t),
      (Al = 0),
      (vt = null),
      (me = !1),
      (xa = Ha(l, t)),
      (Hc = !1),
      (pa = yt = Cc = Le = he = ql = 0),
      (it = mn = null),
      (Rc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ot(a),
          u = 1 << n;
        ((t |= l[n]), (a &= ~u));
      }
    return ((kt = t), $n(), e);
  }
  function zd(l, t) {
    ((ul = null),
      (x.H = nn),
      t === ra || t === eu
        ? ((t = Ys()), (Al = 3))
        : t === Li
          ? ((t = Ys()), (Al = 4))
          : (Al =
              t === gc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (vt = t),
      dl === null && ((ql = 1), yu(l, pt(t, l.current))));
  }
  function Ad() {
    var l = mt.current;
    return l === null
      ? !0
      : (vl & 4194048) === vl
        ? Et === null
        : (vl & 62914560) === vl || (vl & 536870912) !== 0
          ? l === Et
          : !1;
  }
  function Ed() {
    var l = x.H;
    return ((x.H = nn), l === null ? nn : l);
  }
  function Nd() {
    var l = x.A;
    return ((x.A = rm), l);
  }
  function Mu() {
    ((ql = 4),
      me || ((vl & 4194048) !== vl && mt.current !== null) || (xa = !0),
      ((he & 134217727) === 0 && (Le & 134217727) === 0) ||
        _l === null ||
        ge(_l, vl, yt, !1));
  }
  function Xc(l, t, e) {
    var a = zl;
    zl |= 2;
    var n = Ed(),
      u = Nd();
    ((_l !== l || vl !== t) && ((Nu = null), za(l, t)), (t = !1));
    var i = ql;
    l: do
      try {
        if (Al !== 0 && dl !== null) {
          var c = dl,
            s = vt;
          switch (Al) {
            case 8:
              (Gc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var y = Al;
              if (((Al = 0), (vt = null), Aa(l, c, s, y), e && xa)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((y = Al), (Al = 0), (vt = null), Aa(l, c, s, y));
          }
        }
        (vm(), (i = ql));
        break;
      } catch (z) {
        zd(l, z);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Xt = Ce = null),
      (zl = a),
      (x.H = n),
      (x.A = u),
      dl === null && ((_l = null), (vl = 0), $n()),
      i
    );
  }
  function vm() {
    for (; dl !== null; ) jd(dl);
  }
  function ym(l, t) {
    var e = zl;
    zl |= 2;
    var a = Ed(),
      n = Nd();
    _l !== l || vl !== t
      ? ((Nu = null), (Eu = ft() + 500), za(l, t))
      : (xa = Ha(l, t));
    l: do
      try {
        if (Al !== 0 && dl !== null) {
          t = dl;
          var u = vt;
          t: switch (Al) {
            case 1:
              ((Al = 0), (vt = null), Aa(l, t, u, 1));
              break;
            case 2:
            case 9:
              if (qs(u)) {
                ((Al = 0), (vt = null), Md(t));
                break;
              }
              ((t = function () {
                ((Al !== 2 && Al !== 9) || _l !== l || (Al = 7), Ct(l));
              }),
                u.then(t, t));
              break l;
            case 3:
              Al = 7;
              break l;
            case 4:
              Al = 5;
              break l;
            case 7:
              qs(u)
                ? ((Al = 0), (vt = null), Md(t))
                : ((Al = 0), (vt = null), Aa(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (dl.tag) {
                case 26:
                  i = dl.memoizedState;
                case 5:
                case 27:
                  var c = dl;
                  if (i ? m0(i) : c.stateNode.complete) {
                    ((Al = 0), (vt = null));
                    var s = c.sibling;
                    if (s !== null) dl = s;
                    else {
                      var y = c.return;
                      y !== null ? ((dl = y), _u(y)) : (dl = null);
                    }
                    break t;
                  }
              }
              ((Al = 0), (vt = null), Aa(l, t, u, 5));
              break;
            case 6:
              ((Al = 0), (vt = null), Aa(l, t, u, 6));
              break;
            case 8:
              (Gc(), (ql = 6));
              break l;
            default:
              throw Error(d(462));
          }
        }
        gm();
        break;
      } catch (z) {
        zd(l, z);
      }
    while (!0);
    return (
      (Xt = Ce = null),
      (x.H = a),
      (x.A = n),
      (zl = e),
      dl !== null ? 0 : ((_l = null), (vl = 0), $n(), ql)
    );
  }
  function gm() {
    for (; dl !== null && !X0(); ) jd(dl);
  }
  function jd(l) {
    var t = Fo(l.alternate, l, kt);
    ((l.memoizedProps = l.pendingProps), t === null ? _u(l) : (dl = t));
  }
  function Md(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ko(e, t, t.pendingProps, t.type, void 0, vl);
        break;
      case 11:
        t = Ko(e, t, t.pendingProps, t.type.render, t.ref, vl);
        break;
      case 5:
        tc(t);
      default:
        (Po(e, t), (t = dl = Es(t, kt)), (t = Fo(e, t, kt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? _u(l) : (dl = t));
  }
  function Aa(l, t, e, a) {
    ((Xt = Ce = null), tc(t), (ma = null), (ka = 0));
    var n = t.return;
    try {
      if (um(l, n, t, e, vl)) {
        ((ql = 1), yu(l, pt(e, l.current)), (dl = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((dl = n), u);
      ((ql = 1), yu(l, pt(e, l.current)), (dl = null));
      return;
    }
    t.flags & 32768
      ? (bl || a === 1
          ? (l = !0)
          : xa || (vl & 536870912) !== 0
            ? (l = !1)
            : ((me = l = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = mt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        _d(t, l))
      : _u(t);
  }
  function _u(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        _d(t, me);
        return;
      }
      l = t.return;
      var e = fm(t.alternate, t, kt);
      if (e !== null) {
        dl = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        dl = t;
        return;
      }
      dl = t = l;
    } while (t !== null);
    ql === 0 && (ql = 5);
  }
  function _d(l, t) {
    do {
      var e = sm(l.alternate, l);
      if (e !== null) {
        ((e.flags &= 32767), (dl = e));
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        dl = l;
        return;
      }
      dl = l = e;
    } while (l !== null);
    ((ql = 6), (dl = null));
  }
  function Od(l, t, e, a, n, u, i, c, s) {
    l.cancelPendingCommit = null;
    do Ou();
    while (Vl !== 0);
    if ((zl & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Mi),
        k0(l, e, u, i, c, s),
        l === _l && ((dl = _l = null), (vl = 0)),
        (Ta = t),
        (ye = l),
        (Ft = e),
        (qc = u),
        (Bc = n),
        (Sd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            pm(Un, function () {
              return (Rd(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = x.T), (x.T = null), (n = H.p), (H.p = 2), (i = zl), (zl |= 4));
        try {
          om(l, t, e);
        } finally {
          ((zl = i), (H.p = n), (x.T = a));
        }
      }
      ((Vl = 1), Dd(), Ud(), Hd());
    }
  }
  function Dd() {
    if (Vl === 1) {
      Vl = 0;
      var l = ye,
        t = Ta,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        ((e = x.T), (x.T = null));
        var a = H.p;
        H.p = 2;
        var n = zl;
        zl |= 4;
        try {
          dd(t, l);
          var u = Ic,
            i = ys(l.containerInfo),
            c = u.focusedElem,
            s = u.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            vs(c.ownerDocument.documentElement, c)
          ) {
            if (s !== null && zi(c)) {
              var y = s.start,
                z = s.end;
              if ((z === void 0 && (z = y), "selectionStart" in c))
                ((c.selectionStart = y),
                  (c.selectionEnd = Math.min(z, c.value.length)));
              else {
                var j = c.ownerDocument || document,
                  b = (j && j.defaultView) || window;
                if (b.getSelection) {
                  var T = b.getSelection(),
                    L = c.textContent.length,
                    F = Math.min(s.start, L),
                    Ml = s.end === void 0 ? F : Math.min(s.end, L);
                  !T.extend && F > Ml && ((i = Ml), (Ml = F), (F = i));
                  var m = hs(c, F),
                    r = hs(c, Ml);
                  if (
                    m &&
                    r &&
                    (T.rangeCount !== 1 ||
                      T.anchorNode !== m.node ||
                      T.anchorOffset !== m.offset ||
                      T.focusNode !== r.node ||
                      T.focusOffset !== r.offset)
                  ) {
                    var v = j.createRange();
                    (v.setStart(m.node, m.offset),
                      T.removeAllRanges(),
                      F > Ml
                        ? (T.addRange(v), T.extend(r.node, r.offset))
                        : (v.setEnd(r.node, r.offset), T.addRange(v)));
                  }
                }
              }
            }
            for (j = [], T = c; (T = T.parentNode); )
              T.nodeType === 1 &&
                j.push({ element: T, left: T.scrollLeft, top: T.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < j.length;
              c++
            ) {
              var N = j[c];
              ((N.element.scrollLeft = N.left), (N.element.scrollTop = N.top));
            }
          }
          ((Zu = !!Fc), (Ic = Fc = null));
        } finally {
          ((zl = n), (H.p = a), (x.T = e));
        }
      }
      ((l.current = t), (Vl = 2));
    }
  }
  function Ud() {
    if (Vl === 2) {
      Vl = 0;
      var l = ye,
        t = Ta,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        ((e = x.T), (x.T = null));
        var a = H.p;
        H.p = 2;
        var n = zl;
        zl |= 4;
        try {
          id(l, t.alternate, t);
        } finally {
          ((zl = n), (H.p = a), (x.T = e));
        }
      }
      Vl = 3;
    }
  }
  function Hd() {
    if (Vl === 4 || Vl === 3) {
      ((Vl = 0), Q0());
      var l = ye,
        t = Ta,
        e = Ft,
        a = Sd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Vl = 5)
        : ((Vl = 0), (Ta = ye = null), Cd(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (ve = null),
        ni(e),
        (t = t.stateNode),
        st && typeof st.onCommitFiberRoot == "function")
      )
        try {
          st.onCommitFiberRoot(Ua, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = x.T), (n = H.p), (H.p = 2), (x.T = null));
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, { componentStack: c.stack });
          }
        } finally {
          ((x.T = t), (H.p = n));
        }
      }
      ((Ft & 3) !== 0 && Ou(),
        Ct(l),
        (n = l.pendingLanes),
        (e & 261930) !== 0 && (n & 42) !== 0
          ? l === Yc
            ? hn++
            : ((hn = 0), (Yc = l))
          : (hn = 0),
        vn(0));
    }
  }
  function Cd(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), $a(t)));
  }
  function Ou() {
    return (Dd(), Ud(), Hd(), Rd());
  }
  function Rd() {
    if (Vl !== 5) return !1;
    var l = ye,
      t = qc;
    qc = 0;
    var e = ni(Ft),
      a = x.T,
      n = H.p;
    try {
      ((H.p = 32 > e ? 32 : e), (x.T = null), (e = Bc), (Bc = null));
      var u = ye,
        i = Ft;
      if (((Vl = 0), (Ta = ye = null), (Ft = 0), (zl & 6) !== 0))
        throw Error(d(331));
      var c = zl;
      if (
        ((zl |= 4),
        yd(u.current),
        md(u, u.current, i, e),
        (zl = c),
        vn(0, !1),
        st && typeof st.onPostCommitFiberRoot == "function")
      )
        try {
          st.onPostCommitFiberRoot(Ua, u);
        } catch {}
      return !0;
    } finally {
      ((H.p = n), (x.T = a), Cd(l, t));
    }
  }
  function qd(l, t, e) {
    ((t = pt(e, t)),
      (t = yc(l.stateNode, t, 2)),
      (l = se(l, t, 2)),
      l !== null && (Ca(l, 2), Ct(l)));
  }
  function El(l, t, e) {
    if (l.tag === 3) qd(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qd(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ve === null || !ve.has(a)))
          ) {
            ((l = pt(e, l)),
              (e = Bo(2)),
              (a = se(t, e, 2)),
              a !== null && (Yo(e, a, t, l), Ca(a, 2), Ct(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Qc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new mm();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(e) ||
      ((Hc = !0), n.add(e), (l = bm.bind(null, l, t, e)), t.then(l, l));
  }
  function bm(l, t, e) {
    var a = l.pingCache;
    (a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      _l === l &&
        (vl & e) === e &&
        (ql === 4 || (ql === 3 && (vl & 62914560) === vl && 300 > ft() - Au)
          ? (zl & 2) === 0 && za(l, 0)
          : (Cc |= e),
        pa === vl && (pa = 0)),
      Ct(l));
  }
  function Bd(l, t) {
    (t === 0 && (t = Of()), (l = De(l, t)), l !== null && (Ca(l, t), Ct(l)));
  }
  function Sm(l) {
    var t = l.memoizedState,
      e = 0;
    (t !== null && (e = t.retryLane), Bd(l, e));
  }
  function xm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (a !== null && a.delete(t), Bd(l, e));
  }
  function pm(l, t) {
    return li(l, t);
  }
  var Du = null,
    Ea = null,
    Zc = !1,
    Uu = !1,
    Lc = !1,
    be = 0;
  function Ct(l) {
    (l !== Ea &&
      l.next === null &&
      (Ea === null ? (Du = Ea = l) : (Ea = Ea.next = l)),
      (Uu = !0),
      Zc || ((Zc = !0), zm()));
  }
  function vn(l, t) {
    if (!Lc && Uu) {
      Lc = !0;
      do
        for (var e = !1, a = Du; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              ((u = (1 << (31 - ot(42 | l) + 1)) - 1),
                (u &= n & ~(i & ~c)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((e = !0), Qd(a, u));
          } else
            ((u = vl),
              (u = qn(
                a,
                a === _l ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Ha(a, u) || ((e = !0), Qd(a, u)));
          a = a.next;
        }
      while (e);
      Lc = !1;
    }
  }
  function Tm() {
    Yd();
  }
  function Yd() {
    Uu = Zc = !1;
    var l = 0;
    be !== 0 && Hm() && (l = be);
    for (var t = ft(), e = null, a = Du; a !== null; ) {
      var n = a.next,
        u = Gd(a, t);
      (u === 0
        ? ((a.next = null),
          e === null ? (Du = n) : (e.next = n),
          n === null && (Ea = e))
        : ((e = a), (l !== 0 || (u & 3) !== 0) && (Uu = !0)),
        (a = n));
    }
    ((Vl !== 0 && Vl !== 5) || vn(l), be !== 0 && (be = 0));
  }
  function Gd(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        n = l.expirationTimes,
        u = l.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - ot(u),
        c = 1 << i,
        s = n[i];
      (s === -1
        ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = W0(c, t))
        : s <= t && (l.expiredLanes |= c),
        (u &= ~c));
    }
    if (
      ((t = _l),
      (e = vl),
      (e = qn(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (Al === 2 || Al === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ti(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Ha(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && ti(a), ni(e))) {
        case 2:
        case 8:
          e = Mf;
          break;
        case 32:
          e = Un;
          break;
        case 268435456:
          e = _f;
          break;
        default:
          e = Un;
      }
      return (
        (a = Xd.bind(null, l)),
        (e = li(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && ti(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Xd(l, t) {
    if (Vl !== 0 && Vl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var e = l.callbackNode;
    if (Ou() && l.callbackNode !== e) return null;
    var a = vl;
    return (
      (a = qn(
        l,
        l === _l ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (pd(l, a, t),
          Gd(l, ft()),
          l.callbackNode != null && l.callbackNode === e
            ? Xd.bind(null, l)
            : null)
    );
  }
  function Qd(l, t) {
    if (Ou()) return null;
    pd(l, t, !0);
  }
  function zm() {
    Rm(function () {
      (zl & 6) !== 0 ? li(jf, Tm) : Yd();
    });
  }
  function Vc() {
    if (be === 0) {
      var l = oa;
      (l === 0 && ((l = Hn), (Hn <<= 1), (Hn & 261888) === 0 && (Hn = 256)),
        (be = l));
    }
    return be;
  }
  function Zd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Xn("" + l);
  }
  function Ld(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function Am(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Zd((n[tt] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[tt] || null)
          ? Zd(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var c = new Vn("action", "action", null, a, n);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (be !== 0) {
                  var s = i ? Ld(n, i) : new FormData(n);
                  oc(
                    e,
                    { pending: !0, data: s, method: n.method, action: u },
                    null,
                    s,
                  );
                }
              } else
                typeof u == "function" &&
                  (c.preventDefault(),
                  (s = i ? Ld(n, i) : new FormData(n)),
                  oc(
                    e,
                    { pending: !0, data: s, method: n.method, action: u },
                    u,
                    s,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Kc = 0; Kc < ji.length; Kc++) {
    var Jc = ji[Kc],
      Em = Jc.toLowerCase(),
      Nm = Jc[0].toUpperCase() + Jc.slice(1);
    Mt(Em, "on" + Nm);
  }
  (Mt(Ss, "onAnimationEnd"),
    Mt(xs, "onAnimationIteration"),
    Mt(ps, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(Zr, "onTransitionRun"),
    Mt(Lr, "onTransitionStart"),
    Mt(Vr, "onTransitionCancel"),
    Mt(Ts, "onTransitionEnd"),
    ke("onMouseEnter", ["mouseout", "mouseover"]),
    ke("onMouseLeave", ["mouseout", "mouseover"]),
    ke("onPointerEnter", ["pointerout", "pointerover"]),
    ke("onPointerLeave", ["pointerout", "pointerover"]),
    je(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    je(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    je(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    je(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    je(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var yn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    jm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(yn),
    );
  function Vd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              s = c.instance,
              y = c.currentTarget;
            if (((c = c.listener), s !== u && n.isPropagationStopped()))
              break l;
            ((u = c), (n.currentTarget = y));
            try {
              u(n);
            } catch (z) {
              wn(z);
            }
            ((n.currentTarget = null), (u = s));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (s = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              s !== u && n.isPropagationStopped())
            )
              break l;
            ((u = c), (n.currentTarget = y));
            try {
              u(n);
            } catch (z) {
              wn(z);
            }
            ((n.currentTarget = null), (u = s));
          }
      }
    }
  }
  function rl(l, t) {
    var e = t[ui];
    e === void 0 && (e = t[ui] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Kd(t, l, 2, !1), e.add(a));
  }
  function wc(l, t, e) {
    var a = 0;
    (t && (a |= 4), Kd(e, l, a, t));
  }
  var Hu = "_reactListening" + Math.random().toString(36).slice(2);
  function $c(l) {
    if (!l[Hu]) {
      ((l[Hu] = !0),
        Bf.forEach(function (e) {
          e !== "selectionchange" && (jm.has(e) || wc(e, !1, l), wc(e, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Hu] || ((t[Hu] = !0), wc("selectionchange", !1, t));
    }
  }
  function Kd(l, t, e, a) {
    switch (x0(t)) {
      case 2:
        var n = th;
        break;
      case 8:
        n = eh;
        break;
      default:
        n = of;
    }
    ((e = n.bind(null, t, e, l)),
      (n = void 0),
      !hi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: n })
          : l.addEventListener(t, e, !0)
        : n !== void 0
          ? l.addEventListener(t, e, { passive: n })
          : l.addEventListener(t, e, !1));
  }
  function Wc(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = we(c)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = u = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Wf(function () {
      var y = u,
        z = ri(e),
        j = [];
      l: {
        var b = zs.get(l);
        if (b !== void 0) {
          var T = Vn,
            L = l;
          switch (l) {
            case "keypress":
              if (Zn(e) === 0) break l;
            case "keydown":
            case "keyup":
              T = xr;
              break;
            case "focusin":
              ((L = "focus"), (T = bi));
              break;
            case "focusout":
              ((L = "blur"), (T = bi));
              break;
            case "beforeblur":
            case "afterblur":
              T = bi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = fr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = zr;
              break;
            case Ss:
            case xs:
            case ps:
              T = dr;
              break;
            case Ts:
              T = Er;
              break;
            case "scroll":
            case "scrollend":
              T = ir;
              break;
            case "wheel":
              T = jr;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = mr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = ls;
              break;
            case "toggle":
            case "beforetoggle":
              T = _r;
          }
          var F = (t & 4) !== 0,
            Ml = !F && (l === "scroll" || l === "scrollend"),
            m = F ? (b !== null ? b + "Capture" : null) : b;
          F = [];
          for (var r = y, v; r !== null; ) {
            var N = r;
            if (
              ((v = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                v === null ||
                m === null ||
                ((N = Ba(r, m)), N != null && F.push(gn(r, N, v))),
              Ml)
            )
              break;
            r = r.return;
          }
          0 < F.length &&
            ((b = new T(b, L, null, e, z)), j.push({ event: b, listeners: F }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((b = l === "mouseover" || l === "pointerover"),
            (T = l === "mouseout" || l === "pointerout"),
            b &&
              e !== di &&
              (L = e.relatedTarget || e.fromElement) &&
              (we(L) || L[Je]))
          )
            break l;
          if (
            (T || b) &&
            ((b =
              z.window === z
                ? z
                : (b = z.ownerDocument)
                  ? b.defaultView || b.parentWindow
                  : window),
            T
              ? ((L = e.relatedTarget || e.toElement),
                (T = y),
                (L = L ? we(L) : null),
                L !== null &&
                  ((Ml = M(L)),
                  (F = L.tag),
                  L !== Ml || (F !== 5 && F !== 27 && F !== 6)) &&
                  (L = null))
              : ((T = null), (L = y)),
            T !== L)
          ) {
            if (
              ((F = If),
              (N = "onMouseLeave"),
              (m = "onMouseEnter"),
              (r = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((F = ls),
                (N = "onPointerLeave"),
                (m = "onPointerEnter"),
                (r = "pointer")),
              (Ml = T == null ? b : qa(T)),
              (v = L == null ? b : qa(L)),
              (b = new F(N, r + "leave", T, e, z)),
              (b.target = Ml),
              (b.relatedTarget = v),
              (N = null),
              we(z) === y &&
                ((F = new F(m, r + "enter", L, e, z)),
                (F.target = v),
                (F.relatedTarget = Ml),
                (N = F)),
              (Ml = N),
              T && L)
            )
              t: {
                for (F = Mm, m = T, r = L, v = 0, N = m; N; N = F(N)) v++;
                N = 0;
                for (var K = r; K; K = F(K)) N++;
                for (; 0 < v - N; ) ((m = F(m)), v--);
                for (; 0 < N - v; ) ((r = F(r)), N--);
                for (; v--; ) {
                  if (m === r || (r !== null && m === r.alternate)) {
                    F = m;
                    break t;
                  }
                  ((m = F(m)), (r = F(r)));
                }
                F = null;
              }
            else F = null;
            (T !== null && Jd(j, b, T, F, !1),
              L !== null && Ml !== null && Jd(j, Ml, L, F, !0));
          }
        }
        l: {
          if (
            ((b = y ? qa(y) : window),
            (T = b.nodeName && b.nodeName.toLowerCase()),
            T === "select" || (T === "input" && b.type === "file"))
          )
            var pl = fs;
          else if (is(b))
            if (ss) pl = Gr;
            else {
              pl = Br;
              var V = qr;
            }
          else
            ((T = b.nodeName),
              !T ||
              T.toLowerCase() !== "input" ||
              (b.type !== "checkbox" && b.type !== "radio")
                ? y && oi(y.elementType) && (pl = fs)
                : (pl = Yr));
          if (pl && (pl = pl(l, y))) {
            cs(j, pl, e, z);
            break l;
          }
          (V && V(l, b, y),
            l === "focusout" &&
              y &&
              b.type === "number" &&
              y.memoizedProps.value != null &&
              si(b, "number", b.value));
        }
        switch (((V = y ? qa(y) : window), l)) {
          case "focusin":
            (is(V) || V.contentEditable === "true") &&
              ((ea = V), (Ai = y), (Ka = null));
            break;
          case "focusout":
            Ka = Ai = ea = null;
            break;
          case "mousedown":
            Ei = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ei = !1), gs(j, e, z));
            break;
          case "selectionchange":
            if (Qr) break;
          case "keydown":
          case "keyup":
            gs(j, e, z);
        }
        var fl;
        if (xi)
          l: {
            switch (l) {
              case "compositionstart":
                var yl = "onCompositionStart";
                break l;
              case "compositionend":
                yl = "onCompositionEnd";
                break l;
              case "compositionupdate":
                yl = "onCompositionUpdate";
                break l;
            }
            yl = void 0;
          }
        else
          ta
            ? ns(l, e) && (yl = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (yl = "onCompositionStart");
        (yl &&
          (ts &&
            e.locale !== "ko" &&
            (ta || yl !== "onCompositionStart"
              ? yl === "onCompositionEnd" && ta && (fl = kf())
              : ((ee = z),
                (vi = "value" in ee ? ee.value : ee.textContent),
                (ta = !0))),
          (V = Cu(y, yl)),
          0 < V.length &&
            ((yl = new Pf(yl, l, null, e, z)),
            j.push({ event: yl, listeners: V }),
            fl
              ? (yl.data = fl)
              : ((fl = us(e)), fl !== null && (yl.data = fl)))),
          (fl = Dr ? Ur(l, e) : Hr(l, e)) &&
            ((yl = Cu(y, "onBeforeInput")),
            0 < yl.length &&
              ((V = new Pf("onBeforeInput", "beforeinput", null, e, z)),
              j.push({ event: V, listeners: yl }),
              (V.data = fl))),
          Am(j, l, y, e, z));
      }
      Vd(j, t);
    });
  }
  function gn(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function Cu(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ba(l, e)),
          n != null && a.unshift(gn(l, n, u)),
          (n = Ba(l, t)),
          n != null && a.push(gn(l, n, u))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function Mm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Jd(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        s = c.alternate,
        y = c.stateNode;
      if (((c = c.tag), s !== null && s === a)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        y === null ||
        ((s = y),
        n
          ? ((y = Ba(e, u)), y != null && i.unshift(gn(e, y, s)))
          : n || ((y = Ba(e, u)), y != null && i.push(gn(e, y, s)))),
        (e = e.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var _m = /\r\n?/g,
    Om = /\u0000|\uFFFD/g;
  function wd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        _m,
        `
`,
      )
      .replace(Om, "");
  }
  function $d(l, t) {
    return ((t = wd(t)), wd(l) === t);
  }
  function jl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Ie(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Ie(l, "" + a);
        break;
      case "className":
        Yn(l, "class", a);
        break;
      case "tabIndex":
        Yn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yn(l, e, a);
        break;
      case "style":
        wf(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          Yn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        ((a = Xn("" + a)), l.setAttribute(e, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (e === "formAction"
              ? (t !== "input" && jl(l, t, "name", n.name, n, null),
                jl(l, t, "formEncType", n.formEncType, n, null),
                jl(l, t, "formMethod", n.formMethod, n, null),
                jl(l, t, "formTarget", n.formTarget, n, null))
              : (jl(l, t, "encType", n.encType, n, null),
                jl(l, t, "method", n.method, n, null),
                jl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        ((a = Xn("" + a)), l.setAttribute(e, a));
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "onScroll":
        a != null && rl("scroll", l);
        break;
      case "onScrollEnd":
        a != null && rl("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((e = Xn("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        (rl("beforetoggle", l), rl("toggle", l), Bn(l, "popover", a));
        break;
      case "xlinkActuate":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Bn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = nr.get(e) || e), Bn(l, e, a));
    }
  }
  function kc(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        wf(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(d(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ie(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Ie(l, "" + a);
        break;
      case "onScroll":
        a != null && rl("scroll", l);
        break;
      case "onScrollEnd":
        a != null && rl("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Yf.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((n = e.endsWith("Capture")),
              (t = e.slice(2, n ? e.length - 7 : void 0)),
              (u = l[tt] || null),
              (u = u != null ? u[e] : null),
              typeof u == "function" && l.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, n));
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
                ? l.setAttribute(e, "")
                : Bn(l, e, a);
          }
    }
  }
  function Il(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (rl("error", l), rl("load", l));
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  jl(l, t, u, i, e, null);
              }
          }
        (n && jl(l, t, "srcSet", e.srcSet, e, null),
          a && jl(l, t, "src", e.src, e, null));
        return;
      case "input":
        rl("invalid", l);
        var c = (u = i = n = null),
          s = null,
          y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var z = e[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  i = z;
                  break;
                case "checked":
                  s = z;
                  break;
                case "defaultChecked":
                  y = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  c = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(d(137, t));
                  break;
                default:
                  jl(l, t, a, z, e, null);
              }
          }
        Lf(l, u, c, s, y, i, n, !1);
        return;
      case "select":
        (rl("invalid", l), (a = i = u = null));
        for (n in e)
          if (e.hasOwnProperty(n) && ((c = e[n]), c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                jl(l, t, n, c, e, null);
            }
        ((t = u),
          (e = i),
          (l.multiple = !!a),
          t != null ? Fe(l, !!a, t, !1) : e != null && Fe(l, !!a, e, !0));
        return;
      case "textarea":
        (rl("invalid", l), (u = n = a = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(d(91));
                break;
              default:
                jl(l, t, i, c, e, null);
            }
        Kf(l, a, n, u);
        return;
      case "option":
        for (s in e)
          if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
            switch (s) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                jl(l, t, s, a, e, null);
            }
        return;
      case "dialog":
        (rl("beforetoggle", l),
          rl("toggle", l),
          rl("cancel", l),
          rl("close", l));
        break;
      case "iframe":
      case "object":
        rl("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < yn.length; a++) rl(yn[a], l);
        break;
      case "image":
        (rl("error", l), rl("load", l));
        break;
      case "details":
        rl("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (rl("error", l), rl("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && ((a = e[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                jl(l, t, y, a, e, null);
            }
        return;
      default:
        if (oi(t)) {
          for (z in e)
            e.hasOwnProperty(z) &&
              ((a = e[z]), a !== void 0 && kc(l, t, z, a, e, void 0));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && ((a = e[c]), a != null && jl(l, t, c, a, e, null));
  }
  function Dm(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          c = null,
          s = null,
          y = null,
          z = null;
        for (T in e) {
          var j = e[T];
          if (e.hasOwnProperty(T) && j != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = j;
              default:
                a.hasOwnProperty(T) || jl(l, t, T, null, a, j);
            }
        }
        for (var b in a) {
          var T = a[b];
          if (((j = e[b]), a.hasOwnProperty(b) && (T != null || j != null)))
            switch (b) {
              case "type":
                u = T;
                break;
              case "name":
                n = T;
                break;
              case "checked":
                y = T;
                break;
              case "defaultChecked":
                z = T;
                break;
              case "value":
                i = T;
                break;
              case "defaultValue":
                c = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(d(137, t));
                break;
              default:
                T !== j && jl(l, t, b, T, a, j);
            }
        }
        fi(l, i, c, s, y, z, u, n);
        return;
      case "select":
        T = i = c = b = null;
        for (u in e)
          if (((s = e[u]), e.hasOwnProperty(u) && s != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                T = s;
              default:
                a.hasOwnProperty(u) || jl(l, t, u, null, a, s);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (s = e[n]),
            a.hasOwnProperty(n) && (u != null || s != null))
          )
            switch (n) {
              case "value":
                b = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && jl(l, t, n, u, a, s);
            }
        ((t = c),
          (e = i),
          (a = T),
          b != null
            ? Fe(l, !!e, b, !1)
            : !!a != !!e &&
              (t != null ? Fe(l, !!e, t, !0) : Fe(l, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        T = b = null;
        for (c in e)
          if (
            ((n = e[c]),
            e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                jl(l, t, c, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = e[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                b = n;
                break;
              case "defaultValue":
                T = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== u && jl(l, t, i, n, a, u);
            }
        Vf(l, b, T);
        return;
      case "option":
        for (var L in e)
          if (
            ((b = e[L]),
            e.hasOwnProperty(L) && b != null && !a.hasOwnProperty(L))
          )
            switch (L) {
              case "selected":
                l.selected = !1;
                break;
              default:
                jl(l, t, L, null, a, b);
            }
        for (s in a)
          if (
            ((b = a[s]),
            (T = e[s]),
            a.hasOwnProperty(s) && b !== T && (b != null || T != null))
          )
            switch (s) {
              case "selected":
                l.selected =
                  b && typeof b != "function" && typeof b != "symbol";
                break;
              default:
                jl(l, t, s, b, a, T);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var F in e)
          ((b = e[F]),
            e.hasOwnProperty(F) &&
              b != null &&
              !a.hasOwnProperty(F) &&
              jl(l, t, F, null, a, b));
        for (y in a)
          if (
            ((b = a[y]),
            (T = e[y]),
            a.hasOwnProperty(y) && b !== T && (b != null || T != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(d(137, t));
                break;
              default:
                jl(l, t, y, b, a, T);
            }
        return;
      default:
        if (oi(t)) {
          for (var Ml in e)
            ((b = e[Ml]),
              e.hasOwnProperty(Ml) &&
                b !== void 0 &&
                !a.hasOwnProperty(Ml) &&
                kc(l, t, Ml, void 0, a, b));
          for (z in a)
            ((b = a[z]),
              (T = e[z]),
              !a.hasOwnProperty(z) ||
                b === T ||
                (b === void 0 && T === void 0) ||
                kc(l, t, z, b, a, T));
          return;
        }
    }
    for (var m in e)
      ((b = e[m]),
        e.hasOwnProperty(m) &&
          b != null &&
          !a.hasOwnProperty(m) &&
          jl(l, t, m, null, a, b));
    for (j in a)
      ((b = a[j]),
        (T = e[j]),
        !a.hasOwnProperty(j) ||
          b === T ||
          (b == null && T == null) ||
          jl(l, t, j, b, a, T));
  }
  function Wd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Um() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var n = e[a],
          u = n.transferSize,
          i = n.initiatorType,
          c = n.duration;
        if (u && c && Wd(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a],
              y = s.startTime;
            if (y > c) break;
            var z = s.transferSize,
              j = s.initiatorType;
            z &&
              Wd(j) &&
              ((s = s.responseEnd), (i += z * (s < c ? 1 : (c - y) / (s - y))));
          }
          if ((--a, (t += (8 * (u + i)) / (n.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Fc = null,
    Ic = null;
  function Ru(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function kd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Fd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Pc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lf = null;
  function Hm() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === lf
        ? !1
        : ((lf = l), !0)
      : ((lf = null), !1);
  }
  var Id = typeof setTimeout == "function" ? setTimeout : void 0,
    Cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Pd = typeof Promise == "function" ? Promise : void 0,
    Rm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Pd < "u"
          ? function (l) {
              return Pd.resolve(null).then(l).catch(qm);
            }
          : Id;
  function qm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Se(l) {
    return l === "head";
  }
  function l0(l, t) {
    var e = t,
      a = 0;
    do {
      var n = e.nextSibling;
      if ((l.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            (l.removeChild(n), _a(t));
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") bn(l.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = l.ownerDocument.head), bn(e));
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling,
              c = u.nodeName;
            (u[Ra] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(u),
              (u = i));
          }
        } else e === "body" && bn(l.ownerDocument.body);
      e = n;
    } while (e);
    _a(t);
  }
  function t0(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function tf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (tf(e), ii(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Bm(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ra])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((u = l.getAttribute("rel")),
                u === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = Nt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Ym(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = Nt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function e0(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Nt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function ef(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function af(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Gm(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), e.removeEventListener("DOMContentLoaded", a));
      };
      (e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
    }
  }
  function Nt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var nf = null;
  function a0(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return Nt(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function n0(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function u0(l, t, e) {
    switch (((t = Ru(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(d(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(d(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function bn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    ii(l);
  }
  var jt = new Map(),
    i0 = new Set();
  function qu(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var It = H.d;
  H.d = { f: Xm, r: Qm, D: Zm, C: Lm, L: Vm, m: Km, X: wm, S: Jm, M: $m };
  function Xm() {
    var l = It.f(),
      t = ju();
    return l || t;
  }
  function Qm(l) {
    var t = $e(l);
    t !== null && t.tag === 5 && t.type === "form" ? zo(t) : It.r(l);
  }
  var Na = typeof document > "u" ? null : document;
  function c0(l, t, e) {
    var a = Na;
    if (a && typeof t == "string" && t) {
      var n = St(t);
      ((n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
        i0.has(n) ||
          (i0.add(n),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Il(t, "link", l),
            Kl(t),
            a.head.appendChild(t))));
    }
  }
  function Zm(l) {
    (It.D(l), c0("dns-prefetch", l, null));
  }
  function Lm(l, t) {
    (It.C(l, t), c0("preconnect", l, t));
  }
  function Vm(l, t, e) {
    It.L(l, t, e);
    var a = Na;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + St(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((n += '[imagesrcset="' + St(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (n += '[imagesizes="' + St(e.imageSizes) + '"]'))
        : (n += '[href="' + St(l) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = ja(l);
          break;
        case "script":
          u = Ma(l);
      }
      jt.has(u) ||
        ((l = Y(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e,
        )),
        jt.set(u, l),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Sn(u))) ||
          (t === "script" && a.querySelector(xn(u))) ||
          ((t = a.createElement("link")),
          Il(t, "link", l),
          Kl(t),
          a.head.appendChild(t)));
    }
  }
  function Km(l, t) {
    It.m(l, t);
    var e = Na;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + St(a) + '"][href="' + St(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ma(l);
      }
      if (
        !jt.has(u) &&
        ((l = Y({ rel: "modulepreload", href: l }, t)),
        jt.set(u, l),
        e.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(xn(u))) return;
        }
        ((a = e.createElement("link")),
          Il(a, "link", l),
          Kl(a),
          e.head.appendChild(a));
      }
    }
  }
  function Jm(l, t, e) {
    It.S(l, t, e);
    var a = Na;
    if (a && l) {
      var n = We(a).hoistableStyles,
        u = ja(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(Sn(u)))) c.loading = 5;
        else {
          ((l = Y({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = jt.get(u)) && uf(l, e));
          var s = (i = a.createElement("link"));
          (Kl(s),
            Il(s, "link", l),
            (s._p = new Promise(function (y, z) {
              ((s.onload = y), (s.onerror = z));
            })),
            s.addEventListener("load", function () {
              c.loading |= 1;
            }),
            s.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Bu(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          n.set(u, i));
      }
    }
  }
  function wm(l, t) {
    It.X(l, t);
    var e = Na;
    if (e && l) {
      var a = We(e).hoistableScripts,
        n = Ma(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(xn(n))),
        u ||
          ((l = Y({ src: l, async: !0 }, t)),
          (t = jt.get(n)) && cf(l, t),
          (u = e.createElement("script")),
          Kl(u),
          Il(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function $m(l, t) {
    It.M(l, t);
    var e = Na;
    if (e && l) {
      var a = We(e).hoistableScripts,
        n = Ma(l),
        u = a.get(n);
      u ||
        ((u = e.querySelector(xn(n))),
        u ||
          ((l = Y({ src: l, async: !0, type: "module" }, t)),
          (t = jt.get(n)) && cf(l, t),
          (u = e.createElement("script")),
          Kl(u),
          Il(u, "link", l),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function f0(l, t, e, a) {
    var n = (n = $.current) ? qu(n) : null;
    if (!n) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = ja(e.href)),
            (e = We(n).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = ja(e.href);
          var u = We(n).hoistableStyles,
            i = u.get(l);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(l, i),
              (u = n.querySelector(Sn(l))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              jt.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                jt.set(l, e),
                u || Wm(n, l, e, i.state))),
            t && a === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ma(e)),
              (e = We(n).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, l));
    }
  }
  function ja(l) {
    return 'href="' + St(l) + '"';
  }
  function Sn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function s0(l) {
    return Y({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Wm(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Il(t, "link", e),
        Kl(t),
        l.head.appendChild(t));
  }
  function Ma(l) {
    return '[src="' + St(l) + '"]';
  }
  function xn(l) {
    return "script[async]" + l;
  }
  function o0(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + St(e.href) + '"]');
          if (a) return ((t.instance = a), Kl(a), a);
          var n = Y({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Kl(a),
            Il(a, "style", n),
            Bu(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          n = ja(e.href);
          var u = l.querySelector(Sn(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Kl(u), u);
          ((a = s0(e)),
            (n = jt.get(n)) && uf(a, n),
            (u = (l.ownerDocument || l).createElement("link")),
            Kl(u));
          var i = u;
          return (
            (i._p = new Promise(function (c, s) {
              ((i.onload = c), (i.onerror = s));
            })),
            Il(u, "link", a),
            (t.state.loading |= 4),
            Bu(u, e.precedence, l),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ma(e.src)),
            (n = l.querySelector(xn(u)))
              ? ((t.instance = n), Kl(n), n)
              : ((a = e),
                (n = jt.get(u)) && ((a = Y({}, e)), cf(a, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                Kl(n),
                Il(n, "link", a),
                l.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Bu(a, e.precedence, l));
    return t.instance;
  }
  function Bu(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(l, u.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function uf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function cf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Yu = null;
  function d0(l, t, e) {
    if (Yu === null) {
      var a = new Map(),
        n = (Yu = new Map());
      n.set(e, a);
    } else ((n = Yu), (a = n.get(e)), a || ((a = new Map()), n.set(e, a)));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), n = 0;
      n < e.length;
      n++
    ) {
      var u = e[n];
      if (
        !(
          u[Ra] ||
          u[$l] ||
          (l === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function r0(l, t, e) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function km(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function m0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Fm(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = ja(a.href),
          u = t.querySelector(Sn(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Gu.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = u),
            Kl(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = s0(a)),
          (n = jt.get(n)) && uf(a, n),
          (u = u.createElement("link")),
          Kl(u));
        var i = u;
        ((i._p = new Promise(function (c, s) {
          ((i.onload = c), (i.onerror = s));
        })),
          Il(u, "link", a),
          (e.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Gu.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  var ff = 0;
  function Im(l, t) {
    return (
      l.stylesheets && l.count === 0 && Qu(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Qu(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                ((l.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < l.imgBytes && ff === 0 && (ff = 62500 * Um());
            var n = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Qu(l, l.stylesheets), l.unsuspend))
                ) {
                  var u = l.unsuspend;
                  ((l.unsuspend = null), u());
                }
              },
              (l.imgBytes > ff ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = e),
              function () {
                ((l.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Gu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Qu(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Xu = null;
  function Qu(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Xu = new Map()),
        t.forEach(Pm, l),
        (Xu = null),
        Gu.call(l)));
  }
  function Pm(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Xu.get(l);
      if (e) var a = e.get(null);
      else {
        ((e = new Map()), Xu.set(l, e));
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      ((n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = e.get(i) || a),
        u === a && e.set(null, n),
        e.set(i, n),
        this.count++,
        (a = Gu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var pn = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function lh(l, t, e, a, n, u, i, c, s) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ei(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ei(0)),
      (this.hiddenUpdates = ei(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function h0(l, t, e, a, n, u, i, c, s, y, z, j) {
    return (
      (l = new lh(l, t, e, i, s, y, z, j, c)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = rt(3, null, null, t)),
      (l.current = u),
      (u.stateNode = l),
      (t = Xi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Vi(u),
      l
    );
  }
  function v0(l) {
    return l ? ((l = ua), l) : ua;
  }
  function y0(l, t, e, a, n, u) {
    ((n = v0(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = fe(t)),
      (a.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (e = se(l, a, t)),
      e !== null && (ct(e, l, t), Ia(e, l, t)));
  }
  function g0(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function sf(l, t) {
    (g0(l, t), (l = l.alternate) && g0(l, t));
  }
  function b0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = De(l, 67108864);
      (t !== null && ct(t, l, 67108864), sf(l, 67108864));
    }
  }
  function S0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = gt();
      t = ai(t);
      var e = De(l, t);
      (e !== null && ct(e, l, t), sf(l, t));
    }
  }
  var Zu = !0;
  function th(l, t, e, a) {
    var n = x.T;
    x.T = null;
    var u = H.p;
    try {
      ((H.p = 2), of(l, t, e, a));
    } finally {
      ((H.p = u), (x.T = n));
    }
  }
  function eh(l, t, e, a) {
    var n = x.T;
    x.T = null;
    var u = H.p;
    try {
      ((H.p = 8), of(l, t, e, a));
    } finally {
      ((H.p = u), (x.T = n));
    }
  }
  function of(l, t, e, a) {
    if (Zu) {
      var n = df(a);
      if (n === null) (Wc(l, t, a, Lu, e), p0(l, a));
      else if (nh(n, l, t, e, a)) a.stopPropagation();
      else if ((p0(l, a), t & 4 && -1 < ah.indexOf(l))) {
        for (; n !== null; ) {
          var u = $e(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Ne(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - ot(i));
                      ((c.entanglements[1] |= s), (i &= ~s));
                    }
                    (Ct(u), (zl & 6) === 0 && ((Eu = ft() + 500), vn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = De(u, 2)), c !== null && ct(c, u, 2), ju(), sf(u, 2));
            }
          if (((u = df(a)), u === null && Wc(l, t, a, Lu, e), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Wc(l, t, a, null, e);
    }
  }
  function df(l) {
    return ((l = ri(l)), rf(l));
  }
  var Lu = null;
  function rf(l) {
    if (((Lu = null), (l = we(l)), l !== null)) {
      var t = M(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = G(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = I(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Lu = l), null);
  }
  function x0(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Z0()) {
          case jf:
            return 2;
          case Mf:
            return 8;
          case Un:
          case L0:
            return 32;
          case _f:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mf = !1,
    xe = null,
    pe = null,
    Te = null,
    Tn = new Map(),
    zn = new Map(),
    ze = [],
    ah =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function p0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        xe = null;
        break;
      case "dragenter":
      case "dragleave":
        pe = null;
        break;
      case "mouseover":
      case "mouseout":
        Te = null;
        break;
      case "pointerover":
      case "pointerout":
        Tn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(t.pointerId);
    }
  }
  function An(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = $e(t)), t !== null && b0(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        l);
  }
  function nh(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return ((xe = An(xe, l, t, e, a, n)), !0);
      case "dragenter":
        return ((pe = An(pe, l, t, e, a, n)), !0);
      case "mouseover":
        return ((Te = An(Te, l, t, e, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (Tn.set(u, An(Tn.get(u) || null, l, t, e, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          zn.set(u, An(zn.get(u) || null, l, t, e, a, n)),
          !0
        );
    }
    return !1;
  }
  function T0(l) {
    var t = we(l.target);
    if (t !== null) {
      var e = M(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = G(e)), t !== null)) {
            ((l.blockedOn = t),
              Rf(l.priority, function () {
                S0(e);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = I(e)), t !== null)) {
            ((l.blockedOn = t),
              Rf(l.priority, function () {
                S0(e);
              }));
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Vu(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = df(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        ((di = a), e.target.dispatchEvent(a), (di = null));
      } else return ((t = $e(e)), t !== null && b0(t), (l.blockedOn = e), !1);
      t.shift();
    }
    return !0;
  }
  function z0(l, t, e) {
    Vu(l) && e.delete(t);
  }
  function uh() {
    ((mf = !1),
      xe !== null && Vu(xe) && (xe = null),
      pe !== null && Vu(pe) && (pe = null),
      Te !== null && Vu(Te) && (Te = null),
      Tn.forEach(z0),
      zn.forEach(z0));
  }
  function Ku(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      mf ||
        ((mf = !0),
        h.unstable_scheduleCallback(h.unstable_NormalPriority, uh)));
  }
  var Ju = null;
  function A0(l) {
    Ju !== l &&
      ((Ju = l),
      h.unstable_scheduleCallback(h.unstable_NormalPriority, function () {
        Ju === l && (Ju = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            n = l[t + 2];
          if (typeof a != "function") {
            if (rf(a || e) === null) continue;
            break;
          }
          var u = $e(e);
          u !== null &&
            (l.splice(t, 3),
            (t -= 3),
            oc(u, { pending: !0, data: n, method: e.method, action: a }, a, n));
        }
      }));
  }
  function _a(l) {
    function t(s) {
      return Ku(s, l);
    }
    (xe !== null && Ku(xe, l),
      pe !== null && Ku(pe, l),
      Te !== null && Ku(Te, l),
      Tn.forEach(t),
      zn.forEach(t));
    for (var e = 0; e < ze.length; e++) {
      var a = ze[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ze.length && ((e = ze[0]), e.blockedOn === null); )
      (T0(e), e.blockedOn === null && ze.shift());
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          i = n[tt] || null;
        if (typeof u == "function") i || A0(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[tt] || null))) c = i.formAction;
            else if (rf(n) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
            A0(e));
        }
      }
  }
  function E0() {
    function l(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(e, 20));
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function hf(l) {
    this._internalRoot = l;
  }
  ((wu.prototype.render = hf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      var e = t.current,
        a = gt();
      y0(e, a, l, t, null, null);
    }),
    (wu.prototype.unmount = hf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (y0(l.current, 2, null, l, null, null), ju(), (t[Je] = null));
        }
      }));
  function wu(l) {
    this._internalRoot = l;
  }
  wu.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Cf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++);
      (ze.splice(e, 0, l), e === 0 && T0(l));
    }
  };
  var N0 = C.version;
  if (N0 !== "19.2.3") throw Error(d(527, N0, "19.2.3"));
  H.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(d(188))
        : ((l = Object.keys(l).join(",")), Error(d(268, l)));
    return (
      (l = S(t)),
      (l = l !== null ? Q(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var ih = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$u.isDisabled && $u.supportsFiber)
      try {
        ((Ua = $u.inject(ih)), (st = $u));
      } catch {}
  }
  return (
    (Nn.createRoot = function (l, t) {
      if (!O(l)) throw Error(d(299));
      var e = !1,
        a = "",
        n = Ho,
        u = Co,
        i = Ro;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = h0(l, 1, !1, null, null, e, a, null, n, u, i, E0)),
        (l[Je] = t.current),
        $c(l),
        new hf(t)
      );
    }),
    (Nn.hydrateRoot = function (l, t, e) {
      if (!O(l)) throw Error(d(299));
      var a = !1,
        n = "",
        u = Ho,
        i = Co,
        c = Ro,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.formState !== void 0 && (s = e.formState)),
        (t = h0(l, 1, !0, t, e ?? null, a, n, s, u, i, c, E0)),
        (t.context = v0(null)),
        (e = t.current),
        (a = gt()),
        (a = ai(a)),
        (n = fe(a)),
        (n.callback = null),
        se(e, n, a),
        (e = a),
        (t.current.lanes = e),
        Ca(t, e),
        Ct(t),
        (l[Je] = t.current),
        $c(l),
        new wu(t)
      );
    }),
    (Nn.version = "19.2.3"),
    Nn
  );
}
var q0;
function yh() {
  if (q0) return gf.exports;
  q0 = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (C) {
        console.error(C);
      }
  }
  return (h(), (gf.exports = vh()), gf.exports);
}
var gh = yh();
const bh = B0(gh);
var J = ((h) => ((h.MAN = "m"), (h.PIN = "p"), (h.SOU = "s"), (h.JI = "z"), h))(
  J || {},
);
const Ve = [
    { id: "1m", suit: J.MAN, value: 1, symbol: "🀇", label: "一萬" },
    { id: "2m", suit: J.MAN, value: 2, symbol: "🀈", label: "二萬" },
    { id: "3m", suit: J.MAN, value: 3, symbol: "🀉", label: "三萬" },
    { id: "4m", suit: J.MAN, value: 4, symbol: "🀊", label: "四萬" },
    { id: "5m", suit: J.MAN, value: 5, symbol: "🀋", label: "五萬" },
    { id: "6m", suit: J.MAN, value: 6, symbol: "🀌", label: "六萬" },
    { id: "7m", suit: J.MAN, value: 7, symbol: "🀍", label: "七萬" },
    { id: "8m", suit: J.MAN, value: 8, symbol: "🀎", label: "八萬" },
    { id: "9m", suit: J.MAN, value: 9, symbol: "🀏", label: "九萬" },
    { id: "1p", suit: J.PIN, value: 1, symbol: "🀙", label: "一餅" },
    { id: "2p", suit: J.PIN, value: 2, symbol: "🀚", label: "二餅" },
    { id: "3p", suit: J.PIN, value: 3, symbol: "🀛", label: "三餅" },
    { id: "4p", suit: J.PIN, value: 4, symbol: "🀜", label: "四餅" },
    { id: "5p", suit: J.PIN, value: 5, symbol: "🀝", label: "五餅" },
    { id: "6p", suit: J.PIN, value: 6, symbol: "🀞", label: "六餅" },
    { id: "7p", suit: J.PIN, value: 7, symbol: "🀟", label: "七餅" },
    { id: "8p", suit: J.PIN, value: 8, symbol: "🀠", label: "八餅" },
    { id: "9p", suit: J.PIN, value: 9, symbol: "🀡", label: "九餅" },
    { id: "1s", suit: J.SOU, value: 1, symbol: "🀐", label: "一索" },
    { id: "2s", suit: J.SOU, value: 2, symbol: "🀑", label: "二索" },
    { id: "3s", suit: J.SOU, value: 3, symbol: "🀒", label: "三索" },
    { id: "4s", suit: J.SOU, value: 4, symbol: "🀓", label: "四索" },
    { id: "5s", suit: J.SOU, value: 5, symbol: "🀔", label: "五索" },
    { id: "6s", suit: J.SOU, value: 6, symbol: "🀕", label: "六索" },
    { id: "7s", suit: J.SOU, value: 7, symbol: "🀖", label: "七索" },
    { id: "8s", suit: J.SOU, value: 8, symbol: "🀗", label: "八索" },
    { id: "9s", suit: J.SOU, value: 9, symbol: "🀘", label: "九索" },
    { id: "1z", suit: J.JI, value: 1, symbol: "🀀", label: "東" },
    { id: "2z", suit: J.JI, value: 2, symbol: "🀁", label: "南" },
    { id: "3z", suit: J.JI, value: 3, symbol: "🀂", label: "西" },
    { id: "4z", suit: J.JI, value: 4, symbol: "🀃", label: "北" },
    { id: "5z", suit: J.JI, value: 5, symbol: "🀆", label: "白" },
    { id: "6z", suit: J.JI, value: 6, symbol: "🀅", label: "發" },
    { id: "7z", suit: J.JI, value: 7, symbol: "🀄", label: "中" },
  ],
  Sh = 17,
  jn = 4,
  Pt = ({
    tile: h,
    size: C = "md",
    onClick: A,
    disabled: d = !1,
    highlight: O = !1,
    selected: M = !1,
  }) => {
    const G = {
        sm: "w-8 h-10 text-[2rem] pb-1",
        md: "w-10 h-14 text-[3.5rem] pb-2",
        lg: "w-12 h-16 text-[4rem] pb-2",
        xl: "w-16 h-24 text-[6rem] pb-2",
      },
      I = (S) => {
        switch (S) {
          case J.MAN:
            return "text-red-700";
          case J.PIN:
            return "text-blue-700";
          case J.SOU:
            return "text-green-700";
          case J.JI:
            return "text-stone-900";
          default:
            return "text-stone-900";
        }
      },
      D = () =>
        h.id === "7z"
          ? "text-red-600"
          : h.id === "6z"
            ? "text-green-600"
            : I(h.suit);
    return o.jsxs("button", {
      onClick: A,
      disabled: d,
      className: `
        relative flex items-center justify-center 
        bg-white border-b-4 border-r-2 border-stone-300 rounded-md shadow-md
        select-none transition-all duration-150 font-mahjong overflow-hidden
        ${G[C]}
        ${D()}
        ${d ? "opacity-30 cursor-not-allowed grayscale" : "hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm cursor-pointer"}
        ${O ? "ring-2 ring-yellow-400 ring-offset-2" : ""}
        ${M ? "ring-2 ring-blue-500 ring-offset-2 transform -translate-y-2" : ""}
      `,
      title: h.label,
      children: [
        o.jsx("span", {
          className: "leading-none filter drop-shadow-sm",
          children: h.symbol,
        }),
        o.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-md pointer-events-none",
        }),
      ],
    });
  },
  xh = ({ result: h, hand: C, deadTiles: A = {} }) => {
    const d = (q) => Ve.find((k) => k.id === q),
      O = C.length,
      M = O % 3 === 1,
      G = 136,
      I = Object.values(A).reduce((q, k) => q + k, 0),
      D = Math.max(1, G - O - I),
      S = (q) => {
        const k = q.charAt(1),
          w = parseInt(q.charAt(0));
        return ({ m: 0, p: 1, s: 2, z: 3 }[k] || 0) * 100 + w;
      },
      Q = _n.useMemo(
        () =>
          M
            ? [...h.recommendations].sort(
                (q, k) => S(q.discardTile) - S(k.discardTile),
              )
            : h.recommendations,
        [h.recommendations, M],
      ),
      Y = _n.useMemo(
        () =>
          [...(h.pongRecommendations || [])].sort(
            (q, k) => S(q.triggerTile) - S(k.triggerTile),
          ),
        [h.pongRecommendations],
      ),
      Z = _n.useMemo(
        () =>
          [...(h.kongRecommendations || [])].sort(
            (q, k) => S(q.triggerTile) - S(k.triggerTile),
          ),
        [h.kongRecommendations],
      ),
      il = _n.useMemo(
        () =>
          [...(h.chiRecommendations || [])].sort(
            (q, k) => S(q.triggerTile) - S(k.triggerTile),
          ),
        [h.chiRecommendations],
      ),
      ml = (q) => {
        switch (q) {
          case "S":
            return "bg-purple-600 text-white";
          case "A":
            return "bg-green-600 text-white";
          case "B":
            return "bg-blue-500 text-white";
          case "C":
            return "bg-yellow-500 text-stone-900";
          case "D":
            return "bg-orange-500 text-white";
          case "E":
            return "bg-red-500 text-white";
          default:
            return "bg-gray-500 text-white";
        }
      },
      tl = (q) => {
        let k = 0;
        const w = q.map((W) => {
            const _ = C.filter((P) => P.id === W).length,
              p = A[W] || 0,
              R = Math.max(0, 4 - _ - p);
            return ((k += R), { id: W, remaining: R });
          }),
          cl = (k / D) * 100;
        return { totalRemaining: k, probability: cl, tileStats: w };
      },
      Bl = (q, k, w) => {
        var hl;
        const cl = d(q.triggerTile),
          W = q.discardTile ? d(q.discardTile) : null,
          _ = q.actionType === "kong",
          p = q.actionType === "pong",
          R = q.actionType === "chi";
        if (!cl) return null;
        const {
            totalRemaining: P,
            probability: sl,
            tileStats: ol,
          } = tl(q.effectiveTiles),
          al = q.shantenAfter === 0 ? "聽牌" : `${q.shantenAfter}進聽`,
          nl = q.shantenAfter < h.shanten,
          Sl = q.shantenAfter === h.shanten,
          xl = _ ? "槓" : p ? "碰" : "吃",
          x = ((hl = h.summaryStats) == null ? void 0 : hl.totalEffective) || 0;
        let H = null,
          X = !1,
          el = !1;
        return (
          _
            ? q.shantenAfter > h.shanten
              ? ((H = "不建議槓 (進聽數倒退)"), (X = !0))
              : h.shanten === 0 &&
                M &&
                ((H = "注意，明槓下不能自模"), (el = !0))
            : p
              ? q.shantenAfter > h.shanten
                ? ((H = "不建議碰 (進聽數倒退)"), (X = !0))
                : q.shantenAfter === h.shanten &&
                  P <= x &&
                  ((H = "不建議碰 (進張未增加)"), (X = !0))
              : R && (nl || ((H = "不建議吃 (進聽數未改善)"), (X = !0))),
          o.jsxs(
            "div",
            {
              className: `flex flex-col md:flex-row gap-4 p-4 rounded-lg border transition-all ${X ? "bg-stone-100 border-stone-200 opacity-90" : el ? "bg-amber-50 border-amber-200 hover:bg-amber-100 hover:shadow-md" : "bg-stone-50 border-stone-200 hover:bg-white hover:shadow-md"}`,
              children: [
                o.jsxs("div", {
                  className:
                    "flex flex-col items-center min-w-[80px] border-r border-stone-200 pr-4 md:border-r-0 md:border-b-0 md:pr-0 md:pb-0",
                  children: [
                    o.jsx("span", {
                      className:
                        "text-xs font-bold mb-1 text-purple-600 uppercase",
                      children: w,
                    }),
                    o.jsx("div", {
                      className: "relative",
                      children: o.jsx(Pt, { tile: cl, size: "lg" }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "flex-1 space-y-3",
                  children: [
                    o.jsxs("div", {
                      className:
                        "flex flex-wrap items-center gap-2 text-sm text-stone-700",
                      children: [
                        o.jsx("span", {
                          className:
                            "font-bold bg-stone-200 px-2 py-0.5 rounded text-stone-600",
                          children: "動作",
                        }),
                        o.jsx("span", { children: "用" }),
                        o.jsx("div", {
                          className: "flex gap-1 scale-75 origin-left",
                          children: q.meldTiles.map((f, g) => {
                            const E = d(f);
                            return E
                              ? o.jsx(Pt, { tile: E, size: "sm" }, g)
                              : null;
                          }),
                        }),
                        o.jsxs("span", { children: [xl, "後，"] }),
                        _
                          ? o.jsx("span", {
                              className:
                                "font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200",
                              children: "摸槓尾(海底)",
                            })
                          : o.jsxs(o.Fragment, {
                              children: [
                                o.jsx("span", { children: "捨" }),
                                o.jsx("div", {
                                  className: "scale-75 origin-left",
                                  children:
                                    W && o.jsx(Pt, { tile: W, size: "sm" }),
                                }),
                              ],
                            }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        o.jsx("span", {
                          className: `px-2 py-0.5 text-xs font-bold rounded ${nl ? "bg-green-100 text-green-700" : Sl ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`,
                          children: al,
                        }),
                        !nl &&
                          !Sl &&
                          o.jsx("span", {
                            className: "text-xs text-red-500 font-medium",
                            children: "(向聽數倒退)",
                          }),
                        _ &&
                          o.jsx("span", {
                            className: "text-xs text-stone-400 font-medium",
                            children: "(未計入槓尾牌)",
                          }),
                        (X || el) &&
                          o.jsxs("span", {
                            className: `px-2 py-0.5 text-xs font-bold rounded flex items-center gap-1 border ${X ? "bg-red-100 text-red-700 border-red-200" : "bg-amber-100 text-amber-700 border-amber-200"}`,
                            children: [
                              o.jsx("svg", {
                                className: "w-3 h-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: o.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: "2",
                                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                                }),
                              }),
                              H,
                            ],
                          }),
                      ],
                    }),
                    q.effectiveTiles &&
                      q.effectiveTiles.length > 0 &&
                      o.jsxs("div", {
                        children: [
                          o.jsxs("div", {
                            className:
                              "flex justify-between items-baseline mb-2",
                            children: [
                              o.jsx("span", {
                                className:
                                  "text-xs font-bold text-blue-600 uppercase",
                                children: "後續聽/進張",
                              }),
                              o.jsxs("div", {
                                className: "text-xs font-bold text-stone-500",
                                children: [
                                  "剩餘 ",
                                  P,
                                  " 枚 ",
                                  o.jsx("span", {
                                    className: "text-stone-300",
                                    children: "|",
                                  }),
                                  " 機率 ",
                                  sl.toFixed(1),
                                  "%",
                                ],
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className: "flex flex-wrap gap-1",
                            children: q.effectiveTiles.map((f) => {
                              const g = d(f),
                                E = ol.find((U) => U.id === f);
                              return g
                                ? o.jsxs(
                                    "div",
                                    {
                                      className: "flex flex-col items-center",
                                      children: [
                                        o.jsx(Pt, { tile: g, size: "sm" }),
                                        o.jsxs("span", {
                                          className: `text-[10px] font-bold mt-0.5 ${(E == null ? void 0 : E.remaining) === 0 ? "text-red-400" : "text-stone-500"}`,
                                          children: [
                                            E == null ? void 0 : E.remaining,
                                            "枚",
                                          ],
                                        }),
                                      ],
                                    },
                                    f,
                                  )
                                : null;
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            },
            `${q.actionType}-${k}`,
          )
        );
      };
    return o.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden",
      children: [
        o.jsxs("div", {
          className:
            "bg-slate-800 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-2",
          children: [
            o.jsxs("h2", {
              className: "text-xl font-bold flex items-center gap-2",
              children: [
                o.jsx("svg", {
                  className: "w-6 h-6 text-yellow-400",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: o.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13 10V3L4 14h7v7l9-11h-7z",
                  }),
                }),
                "分析結果",
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.summaryStats &&
                  h.shanten !== -1 &&
                  o.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1 bg-slate-700/50 rounded-lg text-sm border border-slate-600",
                    children: [
                      o.jsx("span", {
                        className: "text-slate-300",
                        children: h.shanten === 0 ? "胡牌機率" : "進張機率",
                      }),
                      o.jsxs("span", {
                        className: "font-bold text-white",
                        children: [h.summaryStats.totalEffective, "枚"],
                      }),
                      o.jsx("span", {
                        className: "text-slate-500",
                        children: "|",
                      }),
                      o.jsxs("span", {
                        className: "font-bold text-emerald-400",
                        children: [h.summaryStats.probability.toFixed(1), "%"],
                      }),
                    ],
                  }),
                o.jsx("div", {
                  className: `px-4 py-1 rounded-full text-sm font-bold shadow-md ${h.shanten === 0 ? "bg-red-500 text-white animate-pulse" : h.shanten === -1 ? "bg-yellow-500 text-black animate-bounce" : "bg-blue-600 text-white"}`,
                  children: h.statusText,
                }),
              ],
            }),
          ],
        }),
        o.jsxs("div", {
          className: "p-6 space-y-6",
          children: [
            o.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                o.jsxs("div", {
                  className:
                    "bg-stone-50 rounded-lg p-4 border border-stone-200 flex items-center gap-4",
                  children: [
                    o.jsx("div", {
                      className: `w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-md ${ml(h.difficultyGrade)}`,
                      children: h.difficultyGrade,
                    }),
                    o.jsxs("div", {
                      className: "flex-1",
                      children: [
                        o.jsxs("div", {
                          className:
                            "flex justify-between text-sm text-stone-500 mb-1",
                          children: [
                            o.jsxs("span", {
                              className: "font-bold flex items-center gap-1",
                              children: [
                                "牌質",
                                o.jsx("svg", {
                                  className: "w-4 h-4 text-stone-400",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: o.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                  }),
                                }),
                              ],
                            }),
                            o.jsxs("span", {
                              children: ["分數: ", h.difficultyScore, "/100"],
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className:
                            "w-full bg-stone-200 rounded-full h-3 overflow-hidden",
                          children: o.jsx("div", {
                            className:
                              "bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 h-3 rounded-full transition-all duration-1000",
                            style: { width: `${h.difficultyScore}%` },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "bg-stone-50 rounded-lg p-4 border border-stone-200 flex flex-col justify-center",
                  children: [
                    o.jsx("div", {
                      className: "flex items-center gap-2 text-stone-600 mb-1",
                      children: o.jsx("span", {
                        className: "font-semibold text-sm uppercase",
                        children: "目前狀態",
                      }),
                    }),
                    o.jsx("div", {
                      className: "flex items-baseline gap-2",
                      children: o.jsx("span", {
                        className:
                          "text-2xl font-bold text-slate-800 break-words leading-tight",
                        children: h.statusText,
                      }),
                    }),
                    h.summaryStats &&
                      o.jsx("div", {
                        className: "text-xs text-stone-500 mt-1",
                        children: M
                          ? h.shanten === 0
                            ? `聽 ${h.summaryStats.totalEffective} 張牌`
                            : `當前有 ${h.summaryStats.totalEffective} 張牌可使手牌前進`
                          : h.shanten === -1
                            ? "已胡牌，但可調整手牌"
                            : `最佳打法可獲 ${h.summaryStats.totalEffective} 張有效牌`,
                      }),
                  ],
                }),
              ],
            }),
            Q.length > 0 &&
              o.jsxs("div", {
                children: [
                  o.jsxs("h3", {
                    className:
                      "text-lg font-bold text-stone-800 mb-4 border-b pb-2 mt-4 flex items-center gap-2",
                    children: [
                      o.jsx("span", { className: "text-xl", children: "🀄" }),
                      h.shanten === -1
                        ? "已胡牌捨牌建議"
                        : M
                          ? "建議進張 (若摸到)"
                          : "建議捨牌",
                    ],
                  }),
                  o.jsx("div", {
                    className: "space-y-4",
                    children: Q.map((q, k) => {
                      const w = d(q.discardTile);
                      if (!w) return null;
                      const {
                          totalRemaining: cl,
                          probability: W,
                          tileStats: _,
                        } = tl(q.effectiveTiles),
                        p = M ? tl([q.discardTile]) : null;
                      return o.jsxs(
                        "div",
                        {
                          className:
                            "flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-stone-50 border border-stone-200 hover:bg-white hover:shadow-md transition-all",
                          children: [
                            o.jsxs("div", {
                              className:
                                "flex flex-col items-center min-w-[80px] border-r border-stone-200 pr-4 md:border-r-0 md:border-b-0 md:pr-0 md:pb-0",
                              children: [
                                o.jsx("span", {
                                  className: `text-xs font-bold mb-1 ${M ? "text-green-600" : "text-red-500"}`,
                                  children: M ? "若摸" : "捨",
                                }),
                                o.jsx(Pt, { tile: w, size: "lg" }),
                                M &&
                                  p &&
                                  o.jsxs("div", {
                                    className: "mt-2 text-center",
                                    children: [
                                      o.jsx("div", {
                                        className:
                                          "text-[10px] text-stone-400 font-bold uppercase tracking-tighter",
                                        children: "此牌機率",
                                      }),
                                      o.jsxs("div", {
                                        className:
                                          "text-xs font-bold text-stone-600",
                                        children: [
                                          p.totalRemaining,
                                          "枚 ",
                                          o.jsx("span", {
                                            className: "text-stone-300",
                                            children: "|",
                                          }),
                                          " ",
                                          p.probability.toFixed(1),
                                          "%",
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "flex-1 space-y-3",
                              children: [
                                o.jsx("p", {
                                  className:
                                    "text-stone-700 text-sm font-medium",
                                  children: q.explanation,
                                }),
                                q.effectiveTiles &&
                                  q.effectiveTiles.length > 0 &&
                                  o.jsxs("div", {
                                    children: [
                                      o.jsxs("div", {
                                        className:
                                          "flex justify-between items-baseline mb-2",
                                        children: [
                                          o.jsx("span", {
                                            className:
                                              "text-xs font-bold text-blue-600 uppercase",
                                            children: M
                                              ? "後續進張"
                                              : h.shanten === 0 ||
                                                  h.shanten === -1
                                                ? "聽"
                                                : "進張",
                                          }),
                                          o.jsxs("div", {
                                            className:
                                              "text-xs font-bold text-stone-500",
                                            children: [
                                              "剩餘 ",
                                              cl,
                                              " 枚 ",
                                              o.jsx("span", {
                                                className: "text-stone-300",
                                                children: "|",
                                              }),
                                              " 機率 ",
                                              W.toFixed(1),
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                      o.jsx("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: q.effectiveTiles.map((R) => {
                                          const P = d(R),
                                            sl = _.find((ol) => ol.id === R);
                                          return P
                                            ? o.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "flex flex-col items-center",
                                                  children: [
                                                    o.jsx(Pt, {
                                                      tile: P,
                                                      size: "sm",
                                                    }),
                                                    o.jsxs("span", {
                                                      className: `text-[10px] font-bold mt-0.5 ${(sl == null ? void 0 : sl.remaining) === 0 ? "text-red-400" : "text-stone-500"}`,
                                                      children: [
                                                        sl == null
                                                          ? void 0
                                                          : sl.remaining,
                                                        "枚",
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                R,
                                              )
                                            : null;
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        k,
                      );
                    }),
                  }),
                ],
              }),
            Y.length > 0 &&
              o.jsxs("div", {
                children: [
                  o.jsxs("h3", {
                    className:
                      "text-lg font-bold text-stone-800 mb-4 border-b pb-2 mt-8 flex items-center gap-2",
                    children: [
                      o.jsx("span", { className: "text-xl", children: "⚡" }),
                      " 建議碰牌分析 (若他家捨)",
                    ],
                  }),
                  o.jsx("div", {
                    className: "space-y-4",
                    children: Y.map((q, k) => Bl(q, k, "他家捨")),
                  }),
                ],
              }),
            Z.length > 0 &&
              o.jsxs("div", {
                children: [
                  o.jsxs("h3", {
                    className:
                      "text-lg font-bold text-stone-800 mb-4 border-b pb-2 mt-8 flex items-center gap-2",
                    children: [
                      o.jsx("span", { className: "text-xl", children: "🍀" }),
                      " 建議槓牌分析",
                    ],
                  }),
                  o.jsx("div", {
                    className: "space-y-4",
                    children: Z.map((q, k) => Bl(q, k, M ? "他家捨" : "暗槓")),
                  }),
                ],
              }),
            il.length > 0 &&
              o.jsxs("div", {
                children: [
                  o.jsxs("h3", {
                    className:
                      "text-lg font-bold text-stone-800 mb-4 border-b pb-2 mt-8 flex items-center gap-2",
                    children: [
                      o.jsx("span", { className: "text-xl", children: "🥣" }),
                      " 建議吃牌分析 (若上家捨)",
                    ],
                  }),
                  o.jsx("div", {
                    className: "space-y-4",
                    children: il.map((q, k) => Bl(q, k, "上家捨")),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  ph = ["m", "p", "s", "z"],
  zf = {},
  On = [];
let pf = 0;
for (const h of ph) {
  const C = h === "z" ? 7 : 9;
  for (let A = 1; A <= C; A++) {
    const d = `${A}${h}`;
    ((zf[d] = pf), (On[pf] = d), pf++);
  }
}
const Mn = 34,
  Th = 136;
class Ke {
  constructor(C) {
    this.targetSets = Math.floor(C / 3);
  }
  calculate(C) {
    const A = new Array(Mn).fill(0);
    for (const d of C) zf[d] !== void 0 && A[zf[d]]++;
    return this.getShanten(A);
  }
  getShanten(C) {
    let A = 99;
    for (let M = 0; M < Mn; M++)
      if (C[M] >= 2) {
        C[M] -= 2;
        const G = this.calculateMentsuTatsu(C),
          I = 2 * this.targetSets - G - 1;
        ((C[M] += 2), I < A && (A = I));
      }
    const d = this.calculateMentsuTatsu(C),
      O = 2 * this.targetSets - d - 0;
    return (O < A && (A = O), A);
  }
  calculateMentsuTatsu(C) {
    return this.searchGroups(C.slice(), 0, 0);
  }
  searchGroups(C, A, d) {
    for (; A < Mn && C[A] === 0; ) A++;
    if (A >= Mn) return this.calculateTatsu(C, d);
    let O = -1;
    if (C[A] >= 3) {
      C[A] -= 3;
      const G = this.searchGroups(C, A, d + 1);
      (G > O && (O = G), (C[A] += 3));
    }
    if (A < 27) {
      const G = Math.floor(A / 9);
      if (A % 9 <= 6 && C[A + 1] > 0 && C[A + 2] > 0) {
        const I = Math.floor((A + 1) / 9),
          D = Math.floor((A + 2) / 9);
        if (I === G && D === G) {
          (C[A]--, C[A + 1]--, C[A + 2]--);
          const S = this.searchGroups(C, A, d + 1);
          (S > O && (O = S), C[A]++, C[A + 1]++, C[A + 2]++);
        }
      }
    }
    const M = this.searchGroups(C, A + 1, d);
    return (M > O && (O = M), O);
  }
  calculateTatsu(C, A) {
    let d = 0;
    const O = [...C];
    for (let G = 0; G < Mn; G++)
      for (; O[G] > 0; ) {
        if (G < 27) {
          const I = G % 9,
            D = Math.floor(G / 9);
          if (I <= 7 && O[G + 1] > 0 && Math.floor((G + 1) / 9) === D) {
            (O[G]--, O[G + 1]--, d++);
            continue;
          }
          if (I <= 6 && O[G + 2] > 0 && Math.floor((G + 2) / 9) === D) {
            (O[G]--, O[G + 2]--, d++);
            continue;
          }
        }
        if (O[G] >= 2) {
          ((O[G] -= 2), d++);
          continue;
        }
        O[G]--;
      }
    let M = d;
    return (
      A + d > this.targetSets && (M = Math.max(0, this.targetSets - A)),
      2 * A + M
    );
  }
}
const Oa = (h) => new Ke(h.length).calculate(h),
  zh = (h) => {
    const C = h.length,
      A = Oa(h);
    if (C % 3 === 2) {
      if (A === -1) return -1;
      let d = 99;
      const O = new Set();
      for (let M = 0; M < C; M++) {
        const G = h[M];
        if (O.has(G)) continue;
        O.add(G);
        const I = h.filter((S, Q) => Q !== M),
          D = Oa(I);
        if (D < d && ((d = D), d === 0)) break;
      }
      return d;
    }
    return A;
  },
  Ah = (h, C) => {
    const A = [...h],
      d = {};
    for (const D of A) d[D] = (d[D] || 0) + 1;
    const O = [];
    for (const D of On) {
      const S = d[D] || 0;
      for (let Q = 0; Q < 4 - S; Q++) O.push(D);
    }
    let M = O.length;
    const G = () => {
        if (M <= 0) return null;
        const D = Math.floor(Math.random() * M),
          S = O[D];
        return ((O[D] = O[M - 1]), M--, S);
      },
      I = (D) => {
        let S = 99,
          Q = [];
        const Y = new Set();
        for (let Z = 0; Z < D.length; Z++) {
          const il = D[Z];
          if (Y.has(il)) continue;
          Y.add(il);
          const ml = D.filter((Bl, q) => q !== Z),
            tl = Oa(ml);
          tl < S ? ((S = tl), (Q = [Z])) : tl === S && Q.push(Z);
        }
        if (Q.length > 0) {
          const Z = Q[Math.floor(Math.random() * Q.length)];
          D.splice(Z, 1);
        }
      };
    for (let D = 0; D < C; D++) {
      if (A.length % 3 === 1) {
        const S = G();
        if (!S) break;
        A.push(S);
      }
      if (Oa(A) === -1) return -1;
      I(A);
    }
    return Oa(A);
  },
  Eh = (h) => {
    const C = [];
    On.forEach((A) => {
      for (let d = 0; d < 4; d++) C.push(A);
    });
    for (let A = C.length - 1; A > 0; A--) {
      const d = Math.floor(Math.random() * (A + 1));
      [C[A], C[d]] = [C[d], C[A]];
    }
    return C.slice(0, h);
  },
  Tf = (h, C, A) => {
    let d = "",
      O = 99,
      M = -1,
      G = [];
    const I = Array.from(new Set(h));
    for (const D of I) {
      const S = [...h];
      S.splice(S.indexOf(D), 1);
      const Q = A.calculate(S);
      Q < O && (O = Q);
    }
    for (const D of I) {
      const S = [...h];
      S.splice(S.indexOf(D), 1);
      const Q = A.calculate(S);
      if (Q === O) {
        let Y = 0;
        const Z = [];
        for (const il of On) {
          const ml = [...S, il],
            tl = A.calculate(ml);
          if (Q === -1 ? tl === -1 : tl < Q) {
            Z.push(il);
            const q = S.filter((w) => w === il).length,
              k = C[il] || 0;
            Y += Math.max(0, 4 - q - k);
          }
        }
        Y > M && ((M = Y), (d = D), (G = Z));
      }
    }
    return { shanten: O, discard: d, effectiveTiles: G, totalRemaining: M };
  },
  Nh = async (h, C = {}) => {
    await new Promise((w) => setTimeout(w, 50));
    const A = h.length,
      d = A % 3 === 2,
      O = new Ke(A),
      M = O.calculate(h),
      G = Object.values(C).reduce((w, cl) => w + cl, 0),
      I = Math.max(1, Th - A - G),
      D = [],
      S = [],
      Q = [],
      Y = [],
      Z = On;
    let il = 0;
    if (d) {
      const w = Array.from(new Set(h)),
        cl = [];
      for (const _ of w) {
        const p = [...h],
          R = p.indexOf(_);
        p.splice(R, 1);
        const P = [];
        let sl = 0;
        for (const ol of Z) {
          const al = [...p, ol],
            nl = O.calculate(al);
          if (M === -1 ? nl === -1 : nl < M) {
            P.push(ol);
            const xl = p.filter((X) => X === ol).length,
              x = C[ol] || 0,
              H = Math.max(0, 4 - xl - x);
            sl += H;
          }
        }
        P.length > 0 &&
          cl.push({ discard: _, effective: P, totalRemaining: sl });
      }
      (cl.sort((_, p) => p.totalRemaining - _.totalRemaining),
        cl.length > 0 &&
          ((il = cl[0].totalRemaining),
          cl.forEach((_) => {
            let p = `打 ${Wu(_.discard)}。進張 ${_.totalRemaining} 張 (${_.effective.length} 種)。`;
            D.push({
              discardTile: _.discard,
              explanation: p,
              effectiveTiles: _.effective,
            });
          })));
      const W = {};
      h.forEach((_) => (W[_] = (W[_] || 0) + 1));
      for (const _ of Object.keys(W))
        if (W[_] === 4) {
          const p = h.filter((nl) => nl !== _),
            R = new Ke(p.length),
            P = R.calculate(p);
          let sl = 0;
          const ol = [],
            al = { ...C };
          al[_] = (al[_] || 0) + 4;
          for (const nl of Z) {
            const Sl = [...p, nl],
              xl = R.calculate(Sl);
            if (xl < P || (P === -1 && xl === -1)) {
              ol.push(nl);
              const x = p.filter((el) => el === nl).length,
                H = al[nl] || 0,
                X = Math.max(0, 4 - x - H);
              sl += X;
            }
          }
          Y.push({
            actionType: "kong",
            triggerTile: _,
            meldTiles: [_, _, _, _],
            discardTile: "",
            shantenAfter: P,
            effectiveTiles: ol,
            totalRemaining: sl,
          });
        }
      Y.sort((_, p) =>
        _.shantenAfter !== p.shantenAfter
          ? _.shantenAfter - p.shantenAfter
          : p.totalRemaining - _.totalRemaining,
      );
    } else {
      const w = [];
      let cl = 0;
      const W = {};
      h.forEach((p) => (W[p] = (W[p] || 0) + 1));
      for (const p of Z) {
        const R = [...h, p],
          P = O.calculate(R);
        if (P < M) {
          const sl = C[p] || 0,
            ol = W[p] || 0,
            al = Math.max(0, 4 - ol - sl);
          if (al === 0) continue;
          if (((cl += al), P === -1))
            w.push({
              draw: p,
              discard: "",
              nextWaits: [],
              remaining: al,
              isWin: !0,
            });
          else {
            const nl = new Ke(R.length),
              Sl = Tf(R, C, nl);
            w.push({
              draw: p,
              discard: Sl.discard,
              nextWaits: Sl.effectiveTiles,
              remaining: al,
              isWin: !1,
            });
          }
        }
      }
      ((il = cl),
        w.sort((p, R) => R.remaining - p.remaining),
        w.forEach((p) => {
          p.isWin
            ? D.push({
                discardTile: p.draw,
                explanation: `進 ${Wu(p.draw)} 即自摸胡牌！`,
                effectiveTiles: [],
              })
            : D.push({
                discardTile: p.draw,
                explanation: `若進 ${Wu(p.draw)}，建議捨 ${Wu(p.discard)}。`,
                effectiveTiles: p.nextWaits,
              });
        }));
      const _ = Array.from(new Set(h));
      for (const p of _) {
        if (W[p] >= 2) {
          const R = [...h],
            P = R.indexOf(p);
          R.splice(P, 1);
          const sl = R.indexOf(p);
          R.splice(sl, 1);
          const ol = new Ke(R.length),
            al = { ...C };
          al[p] = (al[p] || 0) + 1;
          const nl = Tf(R, al, ol);
          S.push({
            actionType: "pong",
            triggerTile: p,
            meldTiles: [p, p],
            discardTile: nl.discard,
            shantenAfter: nl.shanten,
            effectiveTiles: nl.effectiveTiles,
            totalRemaining: nl.totalRemaining,
          });
        }
        if (W[p] >= 3) {
          const R = [...h];
          for (let Sl = 0; Sl < 3; Sl++) {
            const xl = R.indexOf(p);
            xl > -1 && R.splice(xl, 1);
          }
          const P = new Ke(R.length),
            sl = P.calculate(R);
          let ol = 0;
          const al = [],
            nl = { ...C };
          nl[p] = (nl[p] || 0) + 1;
          for (const Sl of Z) {
            const xl = [...R, Sl],
              x = P.calculate(xl);
            if (x < sl || (sl === -1 && x === -1)) {
              al.push(Sl);
              const H = R.filter((el) => el === Sl).length,
                X = nl[Sl] || 0;
              ol += Math.max(0, 4 - H - X);
            }
          }
          Y.push({
            actionType: "kong",
            triggerTile: p,
            meldTiles: [p, p, p, p],
            discardTile: "",
            shantenAfter: sl,
            effectiveTiles: al,
            totalRemaining: ol,
          });
        }
      }
      (S.sort((p, R) =>
        p.shantenAfter !== R.shantenAfter
          ? p.shantenAfter - R.shantenAfter
          : R.totalRemaining - p.totalRemaining,
      ),
        Y.sort((p, R) =>
          p.shantenAfter !== R.shantenAfter
            ? p.shantenAfter - R.shantenAfter
            : R.totalRemaining - p.totalRemaining,
        ));
      for (const p of Z) {
        if (p.endsWith("z")) continue;
        const R = p.charAt(1),
          P = parseInt(p.charAt(0)),
          sl = [],
          ol = `${P + 1}${R}`,
          al = `${P + 2}${R}`,
          nl = `${P - 1}${R}`,
          Sl = `${P - 2}${R}`;
        (W[ol] > 0 && W[al] > 0 && sl.push([ol, al]),
          W[nl] > 0 && W[ol] > 0 && sl.push([nl, ol]),
          W[Sl] > 0 && W[nl] > 0 && sl.push([Sl, nl]));
        for (const xl of sl) {
          const x = [...h];
          xl.forEach((hl) => {
            const f = x.indexOf(hl);
            f > -1 && x.splice(f, 1);
          });
          const H = new Ke(x.length),
            X = { ...C };
          X[p] = (X[p] || 0) + 1;
          const el = Tf(x, X, H);
          Q.push({
            actionType: "chi",
            triggerTile: p,
            meldTiles: xl,
            discardTile: el.discard,
            shantenAfter: el.shanten,
            effectiveTiles: el.effectiveTiles,
            totalRemaining: el.totalRemaining,
          });
        }
      }
      Q.sort((p, R) =>
        p.shantenAfter !== R.shantenAfter
          ? p.shantenAfter - R.shantenAfter
          : R.totalRemaining - p.totalRemaining,
      );
    }
    let ml = "";
    M === -1
      ? (ml = "胡牌")
      : d
        ? M === 0
          ? (ml = "捨一張即聽牌")
          : M === 1
            ? (ml = "捨一張後1進聽")
            : M === 2
              ? (ml = "捨一張後2進聽")
              : (ml = `捨一張後${M}進聽`)
        : M === 0
          ? (ml = "已聽牌")
          : M === 1
            ? (ml = "1進聽")
            : M === 2
              ? (ml = "2進聽")
              : (ml = `${M}進聽`);
    let tl = 0;
    if (M === -1) tl = 100;
    else {
      let w = 0;
      M === 0
        ? (w = 82)
        : M === 1
          ? (w = 66)
          : M === 2
            ? (w = 50)
            : M === 3
              ? (w = 40)
              : M === 4
                ? (w = 30)
                : M === 5
                  ? (w = 20)
                  : M === 6
                    ? (w = 10)
                    : M === 7
                      ? (w = 5)
                      : (w = 0);
      const cl = il;
      let W = 0,
        _ = 0;
      (M === 0
        ? ((W = cl * 1.5), (_ = 17))
        : M === 1
          ? ((W = cl * 0.8), (_ = 24))
          : M === 2
            ? ((W = cl * 0.6), (_ = 25))
            : M === 3
              ? ((W = cl * 0.4), (_ = 20))
              : M === 4 && ((W = cl * 0.2), (_ = 10)),
        (W = Math.min(W, _)),
        (tl = w + W),
        (tl = Math.min(99, Math.max(0, tl))),
        (tl = Math.round(tl)));
    }
    const Bl =
        tl >= 90
          ? "S"
          : tl >= 70
            ? "A"
            : tl >= 50
              ? "B"
              : tl >= 30
                ? "C"
                : tl > 0
                  ? "D"
                  : "E",
      q = "",
      k = (il / I) * 100;
    return {
      shanten: M,
      statusText: ml,
      generalAdvice: q,
      difficultyScore: tl,
      difficultyGrade: Bl,
      recommendations: D,
      pongRecommendations: S,
      chiRecommendations: Q,
      kongRecommendations: Y,
      summaryStats: { totalEffective: il, probability: k },
    };
  },
  Wu = (h) => {
    const C = h.charAt(1),
      A = h.charAt(0),
      d = { m: "萬", p: "餅", s: "索", z: "" };
    return C === "z"
      ? ["東", "南", "西", "北", "白", "發", "中"][parseInt(A) - 1]
      : `${A}${d[C]}`;
  },
  jh = [1, 4, 7, 10, 13, 16],
  Mh = [2, 5, 8, 11, 14, 17],
  _h = [1e4, 5e4, 1e5, 5e5, 1e6],
  Oh = () => {
    const [h, C] = Cl.useState(13),
      [A, d] = Cl.useState(1e5),
      [O, M] = Cl.useState(0),
      [G, I] = Cl.useState(!1),
      [D, S] = Cl.useState(0),
      [Q, Y] = Cl.useState(null),
      Z = Cl.useRef(!1),
      il = () => {
        (I(!0), Y(null), S(0), (Z.current = !1));
        const _ = {};
        let p = 0,
          R = 0,
          P = 0;
        const ol = O > 0 ? (O > 5 ? 100 : 200) : 2e3,
          al = () => {
            if (Z.current) {
              I(!1);
              return;
            }
            const nl = Math.min(R + ol, A);
            for (let Sl = R; Sl < nl; Sl++) {
              const xl = Eh(h);
              let x;
              (O === 0
                ? h % 3 === 2
                  ? (x = Oa(xl) === -1 ? -1 : 99)
                  : (x = zh(xl))
                : (x = Ah(xl, O)),
                (_[x] = (_[x] || 0) + 1),
                x !== 99 && ((p += x), P++));
            }
            ((R = nl),
              S(R),
              R < A
                ? setTimeout(al, 0)
                : (Y({
                    distribution: _,
                    averageShanten: P > 0 ? p / P : 0,
                    total: A,
                  }),
                  I(!1)));
          };
        setTimeout(al, 0);
      },
      ml = () => {
        Z.current = !0;
      },
      tl = Q
        ? Object.entries(Q.distribution).sort(
            (_, p) => parseInt(_[0]) - parseInt(p[0]),
          )
        : [],
      Bl = Q ? Math.max(...Object.values(Q.distribution)) : 0,
      q = (_) => {
        const p = parseInt(_);
        return p === -1
          ? "胡牌"
          : p === 99
            ? "沒胡"
            : p === 0
              ? "聽牌"
              : `${p}進聽`;
      },
      k = (_) => {
        const p = parseInt(_);
        return p === -1
          ? "bg-yellow-500"
          : p === 99
            ? "bg-slate-300"
            : p === 0
              ? "bg-red-500"
              : p === 1
                ? "bg-orange-400"
                : p === 2
                  ? "bg-blue-400"
                  : "bg-slate-300";
      },
      w = Array.from({ length: 12 }, (_, p) => p),
      cl = () =>
        O === 0
          ? h % 3 === 2
            ? o.jsx("span", {
                className: "block mt-1 font-medium text-purple-700",
                children:
                  "模擬「天胡/地胡」機率。僅統計是否胡牌，不計算進聽數。",
              })
            : o.jsx("span", {
                className: "block mt-1 font-medium text-blue-700",
                children: "模擬「起手配牌」的進聽數（未進牌/未捨牌）。",
              })
          : o.jsxs("span", {
              className: "block mt-1 font-medium text-indigo-700",
              children: [
                "模擬「經過 ",
                O,
                " 輪」後的進聽數（隨機進牌 + 最佳捨牌）。",
              ],
            }),
      W = !(O === 0 && h % 3 === 2);
    return o.jsxs("div", {
      className:
        "bg-white p-6 md:p-8 rounded-xl shadow-lg border border-stone-200",
      children: [
        o.jsxs("h2", {
          className:
            "text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2",
          children: [
            o.jsx("span", { className: "text-3xl", children: "📊" }),
            " 手牌模擬器",
          ],
        }),
        o.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",
          children: [
            o.jsxs("div", {
              className: "space-y-6",
              children: [
                o.jsxs("div", {
                  className:
                    "bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-4",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          className:
                            "block text-sm font-bold text-slate-600 mb-2",
                          children: "手牌張數 (3n+1: 摸牌後/未摸牌)",
                        }),
                        o.jsx("div", {
                          className: "flex flex-wrap gap-2 mb-4",
                          children: jh.map((_) =>
                            o.jsxs(
                              "button",
                              {
                                onClick: () => C(_),
                                disabled: G,
                                className: `px-3 py-2 rounded-md font-bold text-sm transition-all min-w-[3.5rem] ${h === _ ? "bg-blue-600 text-white shadow-md" : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,
                                children: [_, "張"],
                              },
                              _,
                            ),
                          ),
                        }),
                        o.jsx("label", {
                          className:
                            "block text-sm font-bold text-slate-600 mb-2",
                          children: "手牌張數 (3n+2: 已摸牌/需捨牌)",
                        }),
                        o.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: Mh.map((_) =>
                            o.jsxs(
                              "button",
                              {
                                onClick: () => C(_),
                                disabled: G,
                                className: `px-3 py-2 rounded-md font-bold text-sm transition-all min-w-[3.5rem] ${h === _ ? "bg-indigo-600 text-white shadow-md" : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,
                                children: [_, "張"],
                              },
                              _,
                            ),
                          ),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          className:
                            "block text-sm font-bold text-slate-600 mb-2",
                          children: "隨機進牌 + 最佳捨牌 (輪數)",
                        }),
                        o.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: w.map((_) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => M(_),
                                disabled: G,
                                className: `px-3 py-2 rounded-md font-bold text-sm transition-all flex-1 min-w-[2.5rem] ${O === _ ? "bg-purple-600 text-white shadow-md" : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`,
                                children: _,
                              },
                              _,
                            ),
                          ),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          className:
                            "block text-sm font-bold text-slate-600 mb-2",
                          children: "模擬次數",
                        }),
                        o.jsx("select", {
                          value: A,
                          onChange: (_) => d(Number(_.target.value)),
                          disabled: G,
                          className:
                            "w-full p-2 border border-slate-300 rounded-md bg-white font-medium",
                          children: _h.map((_) =>
                            o.jsxs(
                              "option",
                              {
                                value: _,
                                children: [_.toLocaleString(), " 次"],
                              },
                              _,
                            ),
                          ),
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "pt-2",
                      children: G
                        ? o.jsxs("button", {
                            onClick: ml,
                            className:
                              "w-full py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors shadow-md",
                            children: [
                              "停止 (",
                              Math.round((D / A) * 100),
                              "%)",
                            ],
                          })
                        : o.jsx("button", {
                            onClick: il,
                            className:
                              "w-full py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2",
                            children: "開始模擬",
                          }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "text-slate-500 text-sm leading-relaxed bg-yellow-50 p-4 rounded-lg border border-yellow-100",
                  children: [
                    o.jsxs("p", {
                      className: "mb-2",
                      children: [
                        "此功能將隨機生成 ",
                        A.toLocaleString(),
                        " 副手牌，並計算每一副牌的狀態。",
                      ],
                    }),
                    o.jsxs("p", {
                      children: [
                        "設定：",
                        o.jsxs("strong", { children: [h, " 張牌"] }),
                        "，",
                        o.jsxs("strong", { children: [O, " 輪"] }),
                        "進捨牌。",
                        cl(),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className:
                "bg-slate-50 p-6 rounded-lg border border-slate-200 min-h-[400px] flex flex-col",
              children: [
                o.jsx("h3", {
                  className:
                    "text-lg font-bold text-slate-700 mb-4 border-b pb-2",
                  children: "統計結果",
                }),
                Q
                  ? o.jsxs("div", {
                      className: "flex-1 flex flex-col",
                      children: [
                        o.jsxs("div", {
                          className: "flex justify-between items-center mb-6",
                          children: [
                            o.jsxs("div", {
                              className: "text-center",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "text-xs text-slate-500 font-bold uppercase",
                                  children: "樣本數",
                                }),
                                o.jsx("div", {
                                  className: "text-xl font-bold text-slate-800",
                                  children: Q.total.toLocaleString(),
                                }),
                              ],
                            }),
                            W &&
                              o.jsxs("div", {
                                className: "text-center",
                                children: [
                                  o.jsx("div", {
                                    className:
                                      "text-xs text-slate-500 font-bold uppercase",
                                    children: "平均進聽數",
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "text-3xl font-bold text-blue-600",
                                    children: Q.averageShanten.toFixed(3),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "space-y-3 flex-1 overflow-y-auto pr-2",
                          children: tl.map(([_, p]) => {
                            const R = p,
                              P = (R / Q.total) * 100,
                              sl = (R / Bl) * 100;
                            return o.jsxs(
                              "div",
                              {
                                className: "w-full",
                                children: [
                                  o.jsxs("div", {
                                    className:
                                      "flex justify-between text-xs font-bold text-slate-600 mb-1",
                                    children: [
                                      o.jsx("span", { children: q(_) }),
                                      o.jsxs("span", {
                                        children: [P.toFixed(2), "% (", R, ")"],
                                      }),
                                    ],
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "w-full h-6 bg-slate-200 rounded-full overflow-hidden",
                                    children: o.jsx("div", {
                                      className: `h-full ${k(_)} transition-all duration-500 ease-out`,
                                      style: { width: `${sl}%` },
                                    }),
                                  }),
                                ],
                              },
                              _,
                            );
                          }),
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className:
                        "flex-1 flex items-center justify-center text-slate-400 italic",
                      children: G ? "模擬運算中..." : "尚未執行模擬",
                    }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Dh = () => {
    const [h, C] = Cl.useState("analyzer"),
      [A, d] = Cl.useState([]),
      [O, M] = Cl.useState({}),
      [G, I] = Cl.useState(null),
      [D, S] = Cl.useState(!1),
      [Q, Y] = Cl.useState(null),
      [Z, il] = Cl.useState(null),
      [ml, tl] = Cl.useState(!1),
      [Bl, q] = Cl.useState(!1),
      k = Cl.useRef(null),
      w = Sh,
      cl = Cl.useMemo(
        () => ({
          [J.MAN]: Ve.filter((f) => f.suit === J.MAN),
          [J.PIN]: Ve.filter((f) => f.suit === J.PIN),
          [J.SOU]: Ve.filter((f) => f.suit === J.SOU),
          [J.JI]: Ve.filter((f) => f.suit === J.JI),
        }),
        [],
      ),
      W = Cl.useCallback((f) => A.filter((g) => g.id === f).length, [A]),
      _ = Cl.useCallback((f) => O[f] || 0, [O]),
      p = (f) =>
        [...f].sort((g, E) => {
          const U = { [J.MAN]: 1, [J.PIN]: 2, [J.SOU]: 3, [J.JI]: 4 };
          return U[g.suit] !== U[E.suit]
            ? U[g.suit] - U[E.suit]
            : g.value - E.value;
        }),
      R = Cl.useCallback(() => {
        (k.current && (k.current.abort(), (k.current = null)), S(!1));
      }, []),
      P = (f) => {
        R();
        const g = W(f.id),
          E = _(f.id),
          U = jn - E;
        let B = g + 1;
        if ((B > U && (B = 0), B > g)) {
          const Ol = B - g;
          A.length + Ol > w && (B = 0);
        }
        const $ = A.filter((Ol) => Ol.id !== f.id),
          gl = Array(B).fill(f),
          wl = p([...$, ...gl]);
        (d(wl), I(null), Y(null));
      },
      sl = (f) => {
        R();
        const g = _(f.id),
          E = W(f.id),
          U = jn - E;
        let B = g + 1;
        (B > U && (B = 0),
          M(($) => {
            const gl = { ...$, [f.id]: B };
            return (B === 0 && delete gl[f.id], gl);
          }),
          I(null));
      },
      ol = (f) => {
        const g = _(f.id),
          E = W(f.id) - 1,
          U = jn - E;
        g < U && M((B) => ({ ...B, [f.id]: g + 1 }));
      },
      al = (f) => {
        Z === "hand" ? P(f) : Z === "dead" && sl(f);
      },
      nl = (f, g) => {
        (R(),
          ml && ol(g),
          d((E) => E.filter((U, B) => B !== f)),
          I(null),
          Y(null));
      },
      Sl = () => {
        (R(), d([]), M({}), I(null), Y(null));
      },
      xl = (f) => {
        (f == null || f.stopPropagation(), R(), M({}), I(null));
      },
      x = (f) => {
        f.stopPropagation();
        const g = A.map((E) => E.symbol).join("");
        navigator.clipboard &&
          navigator.clipboard
            .writeText(g)
            .then(() => {
              (q(!0), setTimeout(() => q(!1), 2e3));
            })
            .catch((E) => {
              console.error("Failed to copy: ", E);
            });
      },
      H = async (f) => {
        const g = f.length;
        if (g < 1) {
          Y("請至少選擇一張牌");
          return;
        }
        if (g % 3 === 0) {
          (Y("無效牌組 (牌張數不能為 3 的倍數，例如 3, 6, 9, 12, 15)"),
            I(null));
          return;
        }
        (il(null), k.current && k.current.abort());
        const E = new AbortController();
        ((k.current = E), S(!0), Y(null));
        try {
          const U = f.map(($) => $.id),
            B = await Nh(U, O);
          if (E.signal.aborted) return;
          I(B);
        } catch (U) {
          if (E.signal.aborted) return;
          Y(U.message || "分析失敗，請重試。");
        } finally {
          k.current === E && (S(!1), (k.current = null));
        }
      },
      X = () => {
        H(A);
      },
      el = () => {
        R();
        let f = [];
        Ve.forEach((B) => {
          for (let $ = 0; $ < 4; $++) f.push(B);
        });
        for (let B = f.length - 1; B > 0; B--) {
          const $ = Math.floor(Math.random() * (B + 1));
          [f[B], f[$]] = [f[$], f[B]];
        }
        const E = f.slice(0, 17),
          U = p(E);
        (d(U), M({}), I(null), Z || il("hand"), H(U));
      },
      hl = Cl.useMemo(() => {
        const f = [];
        return (
          Object.entries(O).forEach(([g, E]) => {
            const U = E;
            if (U > 0) {
              const B = Ve.find(($) => $.id === g);
              B && f.push({ tile: B, count: U });
            }
          }),
          f.sort((g, E) => {
            const U = { [J.MAN]: 1, [J.PIN]: 2, [J.SOU]: 3, [J.JI]: 4 };
            return U[g.tile.suit] !== U[E.tile.suit]
              ? U[g.tile.suit] - U[E.tile.suit]
              : g.tile.value - E.tile.value;
          })
        );
      }, [O]);
    return o.jsxs("div", {
      className: "min-h-screen bg-stone-100 flex flex-col font-sans",
      children: [
        o.jsx("header", {
          className: "bg-slate-900 text-white shadow-lg sticky top-0 z-50",
          children: o.jsx("div", {
            className:
              "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between",
            children: o.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                o.jsx("span", {
                  className:
                    "text-3xl bg-white text-slate-900 rounded px-1 font-mahjong",
                  children: "中",
                }),
                o.jsx("h1", {
                  className: "text-xl font-bold tracking-wider",
                  children: "麻將手牌分析",
                }),
              ],
            }),
          }),
        }),
        o.jsx("main", {
          className: "max-w-6xl mx-auto px-4 py-6 flex-grow w-full",
          children:
            h === "simulation"
              ? o.jsx("div", {
                  className:
                    "animate-in fade-in slide-in-from-bottom-4 duration-500",
                  children: o.jsx(Oh, {}),
                })
              : o.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    o.jsxs("section", {
                      className:
                        "bg-emerald-800 rounded-xl shadow-xl p-6 md:p-8 border border-emerald-900 relative",
                      children: [
                        o.jsxs("div", {
                          className: "flex justify-between items-center mb-2",
                          children: [
                            o.jsxs("div", {
                              className:
                                "text-emerald-100/80 font-bold text-sm",
                              children: ["手牌 (", A.length, "/", w, ")"],
                            }),
                            o.jsxs("label", {
                              className:
                                "flex items-center gap-2 cursor-pointer text-emerald-100/90 hover:text-white",
                              children: [
                                o.jsx("input", {
                                  type: "checkbox",
                                  checked: ml,
                                  onChange: (f) => tl(f.target.checked),
                                  className:
                                    "w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 bg-emerald-900/50 border-emerald-600",
                                }),
                                o.jsx("span", {
                                  className: "text-xs font-bold",
                                  children: "點擊手牌直接打入海底",
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: `
                            relative min-h-[140px] p-6 rounded-2xl 
                            border-2 border-dashed border-emerald-400/30 bg-emerald-900/20 
                            flex flex-wrap gap-1 items-center content-center transition-all
                            ${Z === "hand" ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-emerald-800" : "hover:bg-emerald-900/30 cursor-pointer"}
                        `,
                          onClick: (f) => {
                            f.target === f.currentTarget && il("hand");
                          },
                          children: [
                            A.length === 0 &&
                              o.jsx("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center pointer-events-none",
                                children: o.jsx("span", {
                                  className:
                                    "text-emerald-200/20 text-lg font-mahjong italic",
                                  children: "點擊此處選擇手牌...",
                                }),
                              }),
                            A.map((f, g) =>
                              o.jsxs(
                                "div",
                                {
                                  className: "relative group",
                                  children: [
                                    o.jsx(Pt, {
                                      tile: f,
                                      size: "lg",
                                      onClick: () => nl(g, f),
                                    }),
                                    o.jsx("div", {
                                      className:
                                        "absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                                      children: o.jsx("svg", {
                                        className: "w-3 h-3",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: o.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 3,
                                          d: "M6 18L18 6M6 6l12 12",
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                `${f.id}-${g}`,
                              ),
                            ),
                            A.length > 0 &&
                              o.jsx("button", {
                                onClick: x,
                                className:
                                  "absolute bottom-2 right-4 text-emerald-200/40 text-xs font-bold hover:text-white transition-colors z-10",
                                children: Bl ? "已複製" : "複製",
                              }),
                          ],
                        }),
                        o.jsx("p", {
                          className:
                            "text-center text-emerald-300/60 text-xs mt-2 mb-6 cursor-pointer hover:text-emerald-200 transition-colors",
                          onClick: () => il("hand"),
                          children: "點擊上方綠色區域即可開啟選牌面板。",
                        }),
                        Z &&
                          o.jsxs("div", {
                            className:
                              "bg-white rounded-xl shadow-2xl p-6 border-4 border-stone-200 mb-8 animate-in zoom-in-95 duration-200 relative",
                            children: [
                              o.jsx("button", {
                                onClick: () => il(null),
                                className:
                                  "absolute top-4 right-4 text-stone-400 hover:text-red-500 transition-colors z-10",
                                children: o.jsx("svg", {
                                  className: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: o.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M6 18L18 6M6 6l12 12",
                                  }),
                                }),
                              }),
                              o.jsxs("div", {
                                className:
                                  "flex flex-row flex-wrap justify-between items-center gap-4 mb-6 pr-8",
                                children: [
                                  o.jsxs("div", {
                                    className:
                                      "flex bg-stone-100 p-1 rounded-lg",
                                    children: [
                                      o.jsx("button", {
                                        onClick: () => il("hand"),
                                        className: `px-4 py-2 rounded-md text-sm font-bold transition-all ${Z === "hand" ? "bg-white text-emerald-700 shadow-sm" : "text-stone-500 hover:text-stone-900"}`,
                                        children: "手牌",
                                      }),
                                      o.jsx("button", {
                                        onClick: () => il("dead"),
                                        className: `px-4 py-2 rounded-md text-sm font-bold transition-all ${Z === "dead" ? "bg-white text-sky-700 shadow-sm" : "text-stone-500 hover:text-stone-900"}`,
                                        children: "海底",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      o.jsx("button", {
                                        onClick: el,
                                        className:
                                          "px-4 py-2 rounded-md bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 font-bold text-sm transition-colors",
                                        children: "隨機",
                                      }),
                                      o.jsx("button", {
                                        onClick: Sl,
                                        className:
                                          "px-4 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 font-bold text-sm transition-colors",
                                        children: "清除",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o.jsx("p", {
                                className: "text-xs text-stone-500 mb-4",
                                children:
                                  Z === "hand"
                                    ? "點擊下方牌加入手牌"
                                    : "點擊下方牌標記為已現出(不可被摸到的牌)",
                              }),
                              o.jsx("div", {
                                className: "space-y-4",
                                children: Object.entries(cl).map(([f, g]) =>
                                  o.jsx(
                                    "div",
                                    {
                                      className: "flex flex-wrap gap-1",
                                      children: g.map((E) => {
                                        const U = W(E.id),
                                          B = _(E.id),
                                          $ = Z === "hand" ? B >= jn : U >= jn;
                                        return o.jsxs(
                                          "div",
                                          {
                                            className: "relative group",
                                            children: [
                                              o.jsx(Pt, {
                                                tile: E,
                                                onClick: () => al(E),
                                                disabled: $,
                                                size: "md",
                                                highlight:
                                                  Z === "dead" && B > 0,
                                                selected: Z === "hand" && U > 0,
                                              }),
                                              U > 0 &&
                                                o.jsx("span", {
                                                  className: `absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold ${Z === "dead" ? "px-1" : "w-5 h-5 flex items-center justify-center"} rounded-full shadow-sm z-10 pointer-events-none border border-white`,
                                                  children:
                                                    Z === "dead" ? `缺${U}` : U,
                                                }),
                                              B > 0 &&
                                                (Z === "hand"
                                                  ? o.jsxs("span", {
                                                      className:
                                                        "absolute -bottom-2 -right-2 bg-stone-500 text-white text-[9px] px-1 rounded-full z-10 pointer-events-none border border-white opacity-80",
                                                      children: ["缺", B],
                                                    })
                                                  : o.jsx("span", {
                                                      className:
                                                        "absolute -bottom-2 -right-2 bg-stone-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm z-10 pointer-events-none border border-white",
                                                      children: B,
                                                    })),
                                            ],
                                          },
                                          E.id,
                                        );
                                      }),
                                    },
                                    f,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        o.jsxs("div", {
                          children: [
                            o.jsxs("div", {
                              className:
                                "flex justify-between items-center mb-2 px-1",
                              children: [
                                o.jsx("span", {
                                  className:
                                    "text-emerald-200/60 text-xs font-bold uppercase tracking-wider",
                                  children: "已現出牌(海底/吃碰)",
                                }),
                                hl.length > 0 &&
                                  o.jsx("button", {
                                    onClick: xl,
                                    className:
                                      "text-emerald-200/40 text-xs hover:text-white transition-colors",
                                    children: "清除",
                                  }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: `
                                min-h-[100px] p-4 rounded-xl 
                                border-2 border-dashed border-sky-400/30 bg-sky-900/20 
                                flex flex-wrap gap-1 items-center justify-center transition-all
                                ${Z === "dead" ? "ring-2 ring-sky-400 ring-offset-2 ring-offset-emerald-800" : "hover:bg-sky-900/30 cursor-pointer"}
                            `,
                              onClick: () => il("dead"),
                              children: [
                                hl.length === 0 &&
                                  o.jsx("span", {
                                    className:
                                      "text-sky-200/20 text-sm italic select-none",
                                    children: "點擊設定已現出牌",
                                  }),
                                hl.map(({ tile: f, count: g }) =>
                                  o.jsxs(
                                    "div",
                                    {
                                      className:
                                        "relative hover:-translate-y-1 transition-transform",
                                      onClick: (E) => {
                                        (E.stopPropagation(), sl(f));
                                      },
                                      children: [
                                        o.jsx(Pt, { tile: f, size: "sm" }),
                                        o.jsx("span", {
                                          className:
                                            "absolute -top-2 -right-2 bg-stone-700 text-stone-200 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm z-10 pointer-events-none border border-stone-500",
                                          children: g,
                                        }),
                                      ],
                                    },
                                    f.id,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className:
                            "mt-8 pt-6 border-t border-emerald-900/30 flex items-center justify-center",
                          children: o.jsx("button", {
                            onClick: D ? R : X,
                            disabled: A.length === 0 && !D,
                            className: `
                                px-12 py-3 rounded-full font-bold text-lg shadow-lg transition-all transform
                                ${D ? "bg-red-500 text-white hover:bg-red-600" : A.length === 0 ? "bg-stone-500 text-stone-300 cursor-not-allowed" : "bg-yellow-500 text-stone-900 hover:bg-yellow-400 hover:scale-105 active:scale-95"}
                            `,
                            children: D ? "停止分析" : "分析牌型",
                          }),
                        }),
                      ],
                    }),
                    Q &&
                      o.jsxs("div", {
                        className:
                          "bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r shadow-sm animate-in slide-in-from-top-2",
                        children: [
                          o.jsx("p", {
                            className: "font-bold",
                            children: "錯誤",
                          }),
                          o.jsx("p", { children: Q }),
                        ],
                      }),
                    G &&
                      o.jsx("div", {
                        className:
                          "animate-in slide-in-from-bottom-4 duration-500",
                        children: o.jsx(xh, {
                          result: G,
                          hand: A,
                          deadTiles: O,
                        }),
                      }),
                  ],
                }),
        }),
        o.jsxs("footer", {
          className:
            "bg-slate-900 text-slate-500 py-6 mt-8 border-t border-slate-800 text-center text-xs",
          children: [
            o.jsx("div", {
              className: "flex justify-center mb-6",
              children: o.jsxs("div", {
                className:
                  "flex bg-slate-800 p-1 rounded-lg border border-slate-700",
                children: [
                  o.jsx("button", {
                    onClick: () => C("analyzer"),
                    className: `px-4 py-2 rounded text-sm font-bold transition-all ${h === "analyzer" ? "bg-emerald-600 text-white shadow-md" : "text-slate-400 hover:text-white"}`,
                    children: "手牌分析",
                  }),
                  o.jsx("button", {
                    onClick: () => C("simulation"),
                    className: `px-4 py-2 rounded text-sm font-bold transition-all ${h === "simulation" ? "bg-slate-600 text-white shadow-md" : "text-slate-400 hover:text-white"}`,
                    children: "機率模擬",
                  }),
                ],
              }),
            }),
            o.jsxs("p", {
              children: [
                "© ",
                new Date().getFullYear(),
                " David Guo. 版權所有。",
              ],
            }),
            o.jsxs("p", {
              children: [
                "作者任教於臺灣師範大學數學系 | ",
                o.jsx("a", {
                  href: "mailto:junyiguo@gmail.com",
                  className: "hover:text-slate-300",
                  children: "junyiguo@gmail.com",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Y0 = document.getElementById("root");
if (!Y0) throw new Error("Could not find root element to mount to");
const Uh = bh.createRoot(Y0);
Uh.render(o.jsx(_n.StrictMode, { children: o.jsx(Dh, {}) }));
