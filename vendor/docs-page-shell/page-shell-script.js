/*eslint-disable*/
!(function () {
    "use strict";
    var o = !1;
    function n() {
        if (o) {
            var e = document.getElementById("page-shell"),
                t = document.getElementById("mobile-nav-backdrop");
            e && t && ((e.style.height = ""), (e.style.overflow = ""), (e.style.overflowX = "hidden"), t.classList.remove("shell-mobile-nav__backdrop--visible"), (o = !1));
        }
    }
    var t = "https://www.mapbox.com",
        a = "https://fastly-staging.tilestream.net",
        e = 640,
        c = window.document.createElement("div"),
        s = ["webkit", "moz", "o", "ms"],
        i = {},
        r = !1,
        l = !1;
    function d(e, t) {
        return "".concat(e).concat("".concat((n = t).charAt(0).toUpperCase()).concat(n.substr(1)));
        var n;
    }
    function u(e) {
        return e in (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window);
    }
    function m(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : c;
        return (
            t in n.style ||
            (!!e &&
                s.some(function (e) {
                    return m(d(e, t));
                }))
        );
    }
    function p(n, i) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : c,
            o = e.allowPrefixedProp,
            a = e.allowPrefixedValue,
            r = !1;
        return (
            (o || a) &&
                (r = s.some(function (e) {
                    return p(o ? d(e, n) : n, a ? ((t = i), "-".concat(e, "-").concat(t)) : i);
                    var t;
                })),
            r || ((t.style[n] = i), t.style[n] === i)
        );
    }
    function f() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : c;
        (i = {
            flexBox: m("flex", e, t) && p("display", "flex", { allowPrefixedProp: !1, allowPrefixedValue: e }, t),
            viewportUnits: p("width", "100vw", { allowPrefixedProp: !1, allowPrefixedValue: !1 }, t),
            visibilityState: u("visibilityState", window.document),
            devicePixelRatio: u("devicePixelRatio"),
        }).doesCutMustard = Object.keys(i).every(function (e) {
            return i[e];
        });
    }
    function g() {
        var e = window.document.getElementById("page-shell-compatibility-dismiss"),
            t = window.document.getElementById("page-shell-compatibility-warning");
        (r = !(l = !0)), e && e.removeEventListener("click", g), t && (t.style.display = "none"), window.localStorage && window.localStorage.setItem("suppress-browser-compatibility-warning", "true");
    }
    var v = !1;
    function w() {
        window.matchMedia("(min-width: " + e + "px)").matches && y();
    }
    function h() {
        var e = document.getElementById("mobile-nav-menu"),
            t = document.getElementById("page-header-content");
        e &&
            ((v = !0),
            e.classList.add("shell-animated-menu--visible"),
            t.classList.add("shell-mobile-nav--visible"),
            m("textOrientation", !0) ||
                (document.querySelector(".shell-mobile-nav__trigger__bar--top").setAttribute("transform", "translate(6 -1) rotate(45)"),
                document.querySelector(".shell-mobile-nav__trigger__bar--bottom").setAttribute("transform", "translate(-6.5 6) rotate(-45)")),
            (function () {
                if (!o) {
                    var e = document.getElementById("page-shell"),
                        t = document.getElementById("mobile-nav-menu"),
                        n = document.getElementById("mobile-nav-backdrop");
                    if (t && e && n) {
                        var i = Math.max(t.getBoundingClientRect().bottom + 120, window.innerHeight);
                        (e.style.height = "".concat(String(i), "px")), (e.style.overflow = "hidden"), n.classList.add("shell-mobile-nav__backdrop--visible"), (n.style.height = "".concat(String(i - parseInt(n.style.top)), "px")), (o = !0);
                    }
                }
            })(),
            window.addEventListener("resize", w));
    }
    function y() {
        var e = document.getElementById("mobile-nav-menu"),
            t = document.getElementById("page-header-content");
        e &&
            ((v = !1),
            e.classList.remove("shell-animated-menu--visible"),
            t.classList.remove("shell-mobile-nav--visible"),
            m("textOrientation", !0) || (document.querySelector(".shell-mobile-nav__trigger__bar--top").setAttribute("transform", ""), document.querySelector(".shell-mobile-nav__trigger__bar--bottom").setAttribute("transform", "")),
            n(),
            window.removeEventListener("resize", w));
    }
    function b(e) {
        var t = document.getElementById("mobile-nav-trigger-toggle"),
            n = document.getElementById("mobile-nav-menu"),
            i = document.getElementById("page-header-content"),
            o = document.getElementById("mbx-user-menu-mobile");
        t &&
            n &&
            (e.target.getAttribute && e.target.getAttribute("data-nav-link")
                ? ((document.documentElement.scrollTop = 0), (document.body.scrollTop = 0), y())
                : t.contains(e.target)
                ? v
                    ? y()
                    : h()
                : v && ((!n.contains(e.target) && !i.contains(e.target)) || o.contains(e.target)) && y());
    }
    var k,
        S,
        E = !1;
    function x() {
        E && ((E = !1), n(), y(), document.removeEventListener("click", b));
    }
    function I(e) {
        return (I =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  })(e);
    }
    var M = [],
        B = !1;
    function P() {
        return B;
    }
    function _() {
        M.forEach(function (e) {
            e();
        }),
            (M = []);
    }
    function A(e) {
        var t;
        (t = e), M.push(t);
    }
    function C() {
        return !0 === window.MapboxPageShellProduction || /mapbox\.com$/.test(window.location.hostname);
    }
    var j = !1;
    function z(e, n) {
        if ((((e = "function" == typeof e ? ((n = e), {}) : e || {}).cache = void 0 === e.cache || e.cache), P() && e.cache)) return _(), void (n && n());
        if (j) n && A(n);
        else {
            j = !0;
            var i = new XMLHttpRequest();
            i.open("GET", (C() ? t : a) + "/api/session"),
                i.setRequestHeader("Accept", "application/json"),
                (i.onload = function () {
                    if (((B = !0), 200 === i.status)) {
                        var e = JSON.parse(i.response);
                        (k = e),
                            (t = (function (e) {
                                if (e && e.authorizations) for (var t, n = 0, i = e.authorizations.length; n < i; n++) if ("api" === (t = e.authorizations[n]).client && "pk" === t.usage && !0 === t.default) return t.token;
                            })(e)),
                            (S = t);
                    }
                    var t;
                    _(), n && n(), (j = !1);
                }),
                (i.withCredentials = !0),
                i.send();
        }
    }
    var L = "user-menu-script";
    function R() {
        return !0 === window.MapboxPageShellProduction || /mapbox\.com$/.test(window.location.hostname);
    }
    var N = !1;
    var T = {
        afterUserCheck: function (e) {
            P() ? e() : A(e);
        },
        getMapboxAccessToken: function () {
            return C() ? "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg" : "pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p1dHRybDR5MGJuZjQzcGhrZ2doeGgwNyJ9.a-vxW4UaxOoUMWUTGnEArw";
        },
        getUserPublicAccessToken: function () {
            return S;
        },
        getUser: function () {
            return k;
        },
        removeNavigation: x,
        initialize: function () {
            var e;
            (e = function () {
                z(),
                    x(),
                    E || ((E = !0), document.addEventListener("click", b)),
                    (function () {
                        if ((null == i.doesCutMustard && f(!0), !(l || i.doesCutMustard || ("localStorage" in window && "true" === window.localStorage.getItem("suppress-browser-compatibility-warning"))))) {
                            var e = window.document.getElementById("page-shell-compatibility-warning");
                            if ((e && (e.style.display = "block"), !r)) {
                                var t = window.document.getElementById("page-shell-compatibility-dismiss");
                                t && t.addEventListener("click", g);
                            }
                            r = !0;
                        }
                    })();
            }),
                "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e);
        },
        loadUserMenu: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.dark,
                n = void 0 === t || t,
                i = e.userCallback;
            if (!N) {
                var o = function () {
                    MapboxUserMenu.initialize({ elementId: "mbx-user-menu", isProduction: R(), dark: n, userCallback: i }), MapboxUserMenu.initialize({ elementId: "mbx-user-menu-mobile", isProduction: R(), dark: n });
                };
                if (document.getElementById(L)) o();
                else {
                    N = !0;
                    var a = document.createElement("script");
                    (a.id = L),
                        (a.src = "https://static-assets.mapbox.com/user-menu/user-menu.js"),
                        (a.async = !0),
                        (a.onload = function () {
                            o(), (N = !1);
                        }),
                        document.body.appendChild(a);
                }
            }
        },
        generateCompatibilitySummary: f,
        getCompatibilitySummary: function () {
            return i;
        },
    };
    (window.MapboxPageShell = T).initialize();
})();
