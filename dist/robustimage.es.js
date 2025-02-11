import je, { useState as he, useRef as Ce, useEffect as Se } from "react";
var q = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Ae() {
  if (xe) return P;
  xe = 1;
  var i = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function E(g, l, f) {
    var c = null;
    if (f !== void 0 && (c = "" + f), l.key !== void 0 && (c = "" + l.key), "key" in l) {
      f = {};
      for (var b in l)
        b !== "key" && (f[b] = l[b]);
    } else f = l;
    return l = f.ref, {
      $$typeof: i,
      type: g,
      key: c,
      ref: l !== void 0 ? l : null,
      props: f
    };
  }
  return P.Fragment = p, P.jsx = E, P.jsxs = E, P;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Oe() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === pe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case V:
          return "Portal";
        case re:
          return "Profiler";
        case ee:
          return "StrictMode";
        case H:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case oe:
            return (e.displayName || "Context") + ".Provider";
          case te:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case L:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function E(e) {
      try {
        p(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), p(e);
      }
    }
    function g() {
    }
    function l() {
      if (k === 0) {
        se = console.log, ue = console.info, le = console.warn, ie = console.error, fe = console.group, ce = console.groupCollapsed, de = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: g,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      k++;
    }
    function f() {
      if (k--, k === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: y({}, e, { value: se }),
          info: y({}, e, { value: ue }),
          warn: y({}, e, { value: le }),
          error: y({}, e, { value: ie }),
          group: y({}, e, { value: fe }),
          groupCollapsed: y({}, e, { value: ce }),
          groupEnd: y({}, e, { value: de })
        });
      }
      0 > k && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function c(e) {
      if (Z === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          Z = r && r[1] || "", ve = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Z + e + ve;
    }
    function b(e, r) {
      if (!e || Q) return "";
      var t = K.get(e);
      if (t !== void 0) return t;
      Q = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = w.H, w.H = null, l();
      try {
        var s = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var m = function() {
                  throw Error();
                };
                if (Object.defineProperty(m.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(m, []);
                  } catch (v) {
                    var I = v;
                  }
                  Reflect.construct(e, [], m);
                } else {
                  try {
                    m.call();
                  } catch (v) {
                    I = v;
                  }
                  e.call(m.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (v) {
                  I = v;
                }
                (m = e()) && typeof m.catch == "function" && m.catch(function() {
                });
              }
            } catch (v) {
              if (v && I && typeof v.stack == "string")
                return [v.stack, I.stack];
            }
            return [null, null];
          }
        };
        s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          s.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          s.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = s.DetermineComponentFrameRoot(), d = o[0], R = o[1];
        if (d && R) {
          var u = d.split(`
`), _ = R.split(`
`);
          for (o = a = 0; a < u.length && !u[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < _.length && !_[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === u.length || o === _.length)
            for (a = u.length - 1, o = _.length - 1; 1 <= a && 0 <= o && u[a] !== _[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (u[a] !== _[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || u[a] !== _[o]) {
                    var N = `
` + u[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, N), N;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        Q = !1, w.H = n, f(), Error.prepareStackTrace = t;
      }
      return u = (u = e ? e.displayName || e.name : "") ? c(u) : "", typeof e == "function" && K.set(e, u), u;
    }
    function T(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return b(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return c(e);
      switch (e) {
        case H:
          return c("Suspense");
        case B:
          return c("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case G:
            return e = b(e.render, !1), e;
          case X:
            return T(e.type);
          case L:
            r = e._payload, e = e._init;
            try {
              return T(e(r));
            } catch {
            }
        }
      return "";
    }
    function j() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function J(e) {
      if (ae.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function M(e, r) {
      function t() {
        Ee || (Ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function $() {
      var e = i(this.type);
      return ge[e] || (ge[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function C(e, r, t, n, s, a) {
      return t = a.ref, e = {
        $$typeof: x,
        type: e,
        key: r,
        props: a,
        _owner: s
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: $
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, n, s, a) {
      if (typeof e == "string" || typeof e == "function" || e === O || e === re || e === ee || e === H || e === B || e === _e || typeof e == "object" && e !== null && (e.$$typeof === L || e.$$typeof === X || e.$$typeof === oe || e.$$typeof === te || e.$$typeof === G || e.$$typeof === Re || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (F(o)) {
              for (n = 0; n < o.length; n++)
                W(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else W(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : F(e) ? n = "array" : e !== void 0 && e.$$typeof === x ? (n = "<" + (i(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (ae.call(r, "key")) {
        o = i(e);
        var d = Object.keys(r).filter(function(u) {
          return u !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", be[o + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          d,
          o
        ), be[o + n] = !0);
      }
      if (o = null, t !== void 0 && (E(t), o = "" + t), J(r) && (E(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var R in r)
          R !== "key" && (t[R] = r[R]);
      } else t = r;
      return o && M(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), C(e, o, a, s, j(), t);
    }
    function W(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Te) {
        if (F(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            A(n) && U(n, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ne && e[ne] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && U(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function U(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = z(r), !me[r])) {
        me[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== j() && (t = null, typeof e._owner.tag == "number" ? t = i(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = w.getCurrentStack;
        w.getCurrentStack = function() {
          var s = T(e.type);
          return n && (s += n() || ""), s;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), w.getCurrentStack = n;
      }
    }
    function z(e) {
      var r = "", t = j();
      return t && (t = i(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = i(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var h = je, x = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), oe = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), ne = Symbol.iterator, pe = Symbol.for("react.client.reference"), w = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = Object.prototype.hasOwnProperty, y = Object.assign, Re = Symbol.for("react.client.reference"), F = Array.isArray, k = 0, se, ue, le, ie, fe, ce, de;
    g.__reactDisabledLog = !0;
    var Z, ve, Q = !1, K = new (typeof WeakMap == "function" ? WeakMap : Map)(), Te = Symbol.for("react.client.reference"), Ee, ge = {}, be = {}, me = {};
    Y.Fragment = O, Y.jsx = function(e, r, t, n, s) {
      return S(e, r, t, !1, n, s);
    }, Y.jsxs = function(e, r, t, n, s) {
      return S(e, r, t, !0, n, s);
    };
  }()), Y;
}
var ye;
function ke() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? q.exports = Ae() : q.exports = Oe()), q.exports;
}
var D = ke();
const Ne = `data:image/svg+xml;base64,${btoa('<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="10" fill="#666" text-anchor="middle" dy=".3em">Issue With Image</text></svg>')}`, Ye = ({
  src: i,
  alt: p = "Image",
  fallbackSrc: E,
  lazy: g = !0,
  className: l = "",
  style: f = {},
  placeholder: c,
  containerClassName: b = "",
  containerStyle: T = {},
  ...j
}) => {
  const [J, M] = he(i), [$, C] = he(!0), S = Ce(null), W = () => {
    M(E || Ne);
  }, A = () => {
    C(!1);
  };
  Se(() => {
    if (!g) {
      C(!1);
      return;
    }
    const h = S.current, x = new IntersectionObserver(
      (V) => {
        V.forEach((O) => {
          O.isIntersecting && (C(!1), x.unobserve(h));
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1
      }
    );
    return h && x.observe(h), () => {
      h && x.unobserve(h);
    };
  }, [g]);
  const U = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  }, z = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.3s ease"
  };
  return /* @__PURE__ */ D.jsxs(
    "div",
    {
      className: b,
      style: { ...U, ...T },
      children: [
        $ && c ? /* @__PURE__ */ D.jsx("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: c }) : null,
        /* @__PURE__ */ D.jsx(
          "img",
          {
            ref: S,
            src: J || "",
            alt: p,
            className: l,
            style: {
              ...z,
              ...f,
              ...$ ? { opacity: 0 } : { opacity: 1 }
            },
            onError: W,
            onLoad: A,
            loading: g ? "lazy" : "eager",
            ...j
          }
        )
      ]
    }
  );
};
export {
  Ye as default
};
