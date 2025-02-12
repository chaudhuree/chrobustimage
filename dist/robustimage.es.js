import Fe, { useState as je, useRef as cr, useEffect as dr } from "react";
var ae = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function vr() {
  if (ke) return L;
  ke = 1;
  var I = Fe, O = Symbol.for("react.element"), P = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, j = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, f, R) {
    var d, g = {}, b = null, _ = null;
    R !== void 0 && (b = "" + R), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (_ = f.ref);
    for (d in f) y.call(f, d) && !k.hasOwnProperty(d) && (g[d] = f[d]);
    if (m && m.defaultProps) for (d in f = m.defaultProps, f) g[d] === void 0 && (g[d] = f[d]);
    return { $$typeof: O, type: m, key: b, ref: _, props: g, _owner: j.current };
  }
  return L.Fragment = P, L.jsx = E, L.jsxs = E, L;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function pr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var I = Fe, O = Symbol.for("react.element"), P = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), m = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), A = Symbol.iterator, J = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[J];
      return typeof r == "function" ? r : null;
    }
    var T = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        S("error", e, t);
      }
    }
    function S(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var $ = !1, K = !1, G = !1, Ie = !1, Ae = !1, ie;
    ie = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === k || Ae || e === j || e === R || e === d || Ie || e === _ || $ || K || G || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === g || e.$$typeof === E || e.$$typeof === m || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case P:
          return "Portal";
        case k:
          return "Profiler";
        case j:
          return "StrictMode";
        case R:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return oe(r) + ".Consumer";
          case E:
            var t = e;
            return oe(t._context) + ".Provider";
          case f:
            return We(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case b: {
            var o = e, u = o._payload, i = o._init;
            try {
              return w(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, W = 0, ue, se, le, fe, ce, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (W === 0) {
          ue = console.log, se = console.info, le = console.warn, fe = console.error, ce = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        W++;
      }
    }
    function Le() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ue
            }),
            info: x({}, e, {
              value: se
            }),
            warn: x({}, e, {
              value: le
            }),
            error: x({}, e, {
              value: fe
            }),
            group: x({}, e, {
              value: ce
            }),
            groupCollapsed: x({}, e, {
              value: de
            }),
            groupEnd: x({}, e, {
              value: ve
            })
          });
        }
        W < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = T.ReactCurrentDispatcher, X;
    function V(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, U;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Me();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = z.current, z.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (p) {
              n = p;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var h = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, h), h;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = u, Le(), Error.prepareStackTrace = o;
      }
      var F = e ? e.displayName || e.name : "", C = F ? V(F) : "";
      return typeof e == "function" && U.set(e, C), C;
    }
    function Ve(e, r, t) {
      return ge(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Ue(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case R:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case g:
            return N(e.type, r, t);
          case b: {
            var n = e, o = n._payload, u = n._init;
            try {
              return N(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, he = {}, ye = T.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(Y);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (B(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), B(null)), a instanceof Error && !(a.message in he) && (he[a.message] = !0, B(o), c("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Be = Array.isArray;
    function Z(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function me(e) {
      if (qe(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), be(e);
    }
    var Ee = T.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e;
    function Ge(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function He(e, r) {
      {
        var t = function() {
          Re || (Re = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          _e || (_e = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (me(t), a = "" + t), ze(r) && (me(r.key), a = "" + r.key), Ge(r) && (v = r.ref, Xe(r, o));
        for (u in r)
          Y.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, l), v && Ze(i, l);
        }
        return Qe(e, a, v, o, n, Ee.current, i);
      }
    }
    var Q = T.ReactCurrentOwner, Te = T.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    function we() {
      {
        if (Q.current) {
          var e = w(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var Oe = {};
    function tr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + w(e._owner.type) + "."), D(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Se(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = q(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              re(i.value) && Se(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var o = w(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Ce = {};
    function Pe(e, r, t, n, o, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? a += v : a += we();
          var s;
          e === null ? s = "null" : Z(e) ? s = "array" : e !== void 0 && e.$$typeof === O ? (s = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (Z(h)) {
                for (var F = 0; F < h.length; F++)
                  xe(h[F], e);
                Object.freeze && Object.freeze(h);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(h, e);
        }
        if (Y.call(r, "key")) {
          var C = w(e), p = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), te = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[C + te]) {
            var lr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, C, lr, C), Ce[C + te] = !0;
          }
        }
        return e === y ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function or(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var ur = or, sr = ir;
    M.Fragment = y, M.jsx = ur, M.jsxs = sr;
  }()), M;
}
process.env.NODE_ENV === "production" ? ae.exports = vr() : ae.exports = pr();
var ne = ae.exports;
const gr = `data:image/svg+xml;base64,${btoa('<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="10" fill="#666" text-anchor="middle" dy=".3em">Issue With Image</text></svg>')}`, yr = ({
  src: I,
  alt: O = "Image",
  fallbackSrc: P,
  lazy: y = !0,
  className: j = "",
  style: k = {},
  placeholder: E,
  containerClassName: m = "",
  containerStyle: f = {},
  ...R
}) => {
  const [d, g] = je(I), [b, _] = je(!0), A = cr(null), J = () => {
    g(P || gr);
  }, q = () => {
    _(!1);
  };
  dr(() => {
    if (!y) {
      _(!1);
      return;
    }
    const S = A.current, $ = new IntersectionObserver(
      (K) => {
        K.forEach((G) => {
          G.isIntersecting && (_(!1), $.unobserve(S));
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1
      }
    );
    return S && $.observe(S), () => {
      S && $.unobserve(S);
    };
  }, [y]);
  const T = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  }, c = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.3s ease"
  };
  return /* @__PURE__ */ ne.jsxs(
    "div",
    {
      className: m,
      style: { ...T, ...f },
      children: [
        b && E ? /* @__PURE__ */ ne.jsx("div", { style: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: E }) : null,
        /* @__PURE__ */ ne.jsx(
          "img",
          {
            ref: A,
            src: d || "",
            alt: O,
            className: j,
            style: {
              ...c,
              ...k,
              ...b ? { opacity: 0 } : { opacity: 1 }
            },
            onError: J,
            onLoad: q,
            loading: y ? "lazy" : "eager",
            ...R
          }
        )
      ]
    }
  );
};
export {
  yr as default
};
