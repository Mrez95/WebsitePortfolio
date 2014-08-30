/*! jQuery UI - v1.10.1 - 2013-02-23
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.position.js, jquery.ui.effect.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href ||!i || r.nodeName.toLowerCase() !== "map"?!1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u)?!t.disabled : "a" === u ? t.href || n : n) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0, r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version)
        return;
    e.extend(e.ui, {
        version: "1.10.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) ||!t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]), i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0)
                            return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }): function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"), r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"]: ["Top", "Bottom"], s = r.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r)
                    s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i ||!e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)
                    return;
                for (r = 0; r < i.length; r++)
                    e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden")
                return !1;
            var r = n && n === "left" ? "scrollLeft": "scrollTop", i=!1;
            return t[r] > 0?!0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        }
    })
})(jQuery);
(function(e, t) {
    function h(e, t, n) {
        return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
    }
    function p(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }
    function d(t) {
        var n = t[0];
        return n.nodeType === 9 ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(n) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : n.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: n.pageY,
                left: n.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    e.ui = e.ui || {};
    var n, r = Math.max, i = Math.abs, s = Math.round, o = /left|center|right/, u = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, f = /^\w+/, l = /%$/, c = e.fn.position;
    e.position = {
        scrollbarWidth: function() {
            if (n !== t)
                return n;
            var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
            return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
        },
        getScrollInfo: function(t) {
            var n = t.isWindow ? "": t.element.css("overflow-x"), r = t.isWindow ? "": t.element.css("overflow-y"), i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth, s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: i ? e.position.scrollbarWidth(): 0,
                height: s ? e.position.scrollbarWidth(): 0
            }
        },
        getWithinInfo: function(t) {
            var n = e(t || window), r = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: r,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: r ? n.width(): n.outerWidth(),
                height: r ? n.height(): n.outerHeight()
            }
        }
    }, e.fn.position = function(t) {
        if (!t ||!t.of)
            return c.apply(this, arguments);
        t = e.extend({}, t);
        var n, l, v, m, g, y, b = e(t.of), w = e.position.getWithinInfo(t.within), E = e.position.getScrollInfo(w), S = (t.collision || "flip").split(" "), x = {};
        return y = d(b), b[0].preventDefault && (t.at = "left top"), l = y.width, v = y.height, m = y.offset, g = e.extend({}, m), e.each(["my", "at"], function() {
            var e = (t[this] || "").split(" "), n, r;
            e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), x[this] = [n ? n[0]: 0, r ? r[0]: 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
        }), S.length === 1 && (S[1] = S[0]), t.at[0] === "right" ? g.left += l : t.at[0] === "center" && (g.left += l / 2), t.at[1] === "bottom" ? g.top += v : t.at[1] === "center" && (g.top += v / 2), n = h(x.at, l, v), g.left += n[0], g.top += n[1], this.each(function() {
            var o, u, a = e(this), f = a.outerWidth(), c = a.outerHeight(), d = p(this, "marginLeft"), y = p(this, "marginTop"), T = f + d + p(this, "marginRight") + E.width, N = c + y + p(this, "marginBottom") + E.height, C = e.extend({}, g), k = h(x.my, a.outerWidth(), a.outerHeight());
            t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
                marginLeft: d,
                marginTop: y
            }, e.each(["left", "top"], function(r, i) {
                e.ui.position[S[r]] && e.ui.position[S[r]][i](C, {
                    targetWidth: l,
                    targetHeight: v,
                    elemWidth: f,
                    elemHeight: c,
                    collisionPosition: o,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [n[0] + k[0], n[1] + k[1]],
                    my: t.my,
                    at: t.at,
                    within: w,
                    elem: a
                })
            }), t.using && (u = function(e) {
                var n = m.left - C.left, s = n + l - f, o = m.top - C.top, u = o + v - c, h = {
                    target: {
                        element: b,
                        left: m.left,
                        top: m.top,
                        width: l,
                        height: v
                    },
                    element: {
                        element: a,
                        left: C.left,
                        top: C.top,
                        width: f,
                        height: c
                    },
                    horizontal: s < 0 ? "left": n > 0 ? "right": "center",
                    vertical: u < 0 ? "top": o > 0 ? "bottom": "middle"
                };
                l < f && i(n + s) < l && (h.horizontal = "center"), v < c && i(o + u) < v && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
            }), a.offset(e.extend(C, {
                using: u
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function(e, t) {
                var n = t.within, i = n.isWindow ? n.scrollLeft: n.offset.left, s = n.width, o = e.left - t.collisionPosition.marginLeft, u = i - o, a = o + t.collisionWidth - s - i, f;
                t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
            },
            top: function(e, t) {
                var n = t.within, i = n.isWindow ? n.scrollTop: n.offset.top, s = t.within.height, o = e.top - t.collisionPosition.marginTop, u = i - o, a = o + t.collisionHeight - s - i, f;
                t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
            }
        },
        flip: {
            left: function(e, t) {
                var n = t.within, r = n.offset.left + n.scrollLeft, s = n.width, o = n.isWindow ? n.scrollLeft: n.offset.left, u = e.left - t.collisionPosition.marginLeft, a = u - o, f = u + t.collisionWidth - s - o, l = t.my[0] === "left"?-t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0, c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right"?-t.targetWidth : 0, h =- 2 * t.offset[0], p, d;
                if (a < 0) {
                    p = e.left + l + c + h + t.collisionWidth - s - r;
                    if (p < 0 || p < i(a))
                        e.left += l + c + h
                } else if (f > 0) {
                    d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                    if (d > 0 || i(d) < f)
                        e.left += l + c + h
                }
            },
            top: function(e, t) {
                var n = t.within, r = n.offset.top + n.scrollTop, s = n.height, o = n.isWindow ? n.scrollTop: n.offset.top, u = e.top - t.collisionPosition.marginTop, a = u - o, f = u + t.collisionHeight - s - o, l = t.my[1] === "top", c = l?-t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0, h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom"?-t.targetHeight : 0, p =- 2 * t.offset[1], d, v;
                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
            }
        },
        flipfit: {
            left: function() {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function() {
        var t, n, r, i, s, o = document.getElementsByTagName("body")[0], u = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (s in r)
            t.style[s] = r[s];
        t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
    }()
})(jQuery);
jQuery.effects || function(e, t) {
    var n = "ui-effects-";
    e.effects = {
        effect: {}
    }, function(e, t) {
        function h(e, t, n) {
            var r = u[t.type] || {};
            return e == null ? n ||!t.def ? null : t.def : (e = r.floor?~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod)%r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }
        function p(t) {
            var n = s(), r = n._rgba = [];
            return t = t.toLowerCase(), c(i, function(e, i) {
                var s, u = i.re.exec(t), a = u && i.parse(u), f = i.space || "rgba";
                if (a)
                    return s = n[f](a), n[o[f].cache] = s[o[f].cache], r = n._rgba = s._rgba, !1
            }), r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n) : l[t]
        }
        function d(e, t, n) {
            return n = (n + 1)%1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, i = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }
        ], s = e.Color = function(t, n, r, i) {
            return new e.Color.fn.parse(t, n, r, i)
        }, o = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, a = s.support = {}, f = e("<p>")[0], l, c = e.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)", a.rgba = f.style.backgroundColor.indexOf("rgba")>-1, c(o, function(e, t) {
            t.cache = "_" + e, t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), s.fn = e.extend(s.prototype, {
            parse: function(n, r, i, u) {
                if (n === t)
                    return this._rgba = [null, null, null, null], this;
                if (n.jquery || n.nodeType)
                    n = e(n).css(r), r = t;
                var a = this, f = e.type(n), d = this._rgba = [];
                r !== t && (n = [n, r, i, u], f = "array");
                if (f === "string")
                    return this.parse(p(n) || l._default);
                if (f === "array")
                    return c(o.rgba.props, function(e, t) {
                        d[t.idx] = h(n[t.idx], t)
                    }), this;
                if (f === "object")
                    return n instanceof s ? c(o, function(e, t) {
                        n[t.cache] && (a[t.cache] = n[t.cache].slice())
                    }) : c(o, function(t, r) {
                        var i = r.cache;
                        c(r.props, function(e, t) {
                            if (!a[i] && r.to) {
                                if (e === "alpha" || n[e] == null)
                                    return;
                                    a[i] = r.to(a._rgba)
                            }
                            a[i][t.idx] = h(n[e], t, !0)
                        }), a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1, r.from && (a._rgba = r.from(a[i])))
                    }), this
            },
            is: function(e) {
                var t = s(e), n=!0, r = this;
                return c(o, function(e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], c(i.props, function(e, t) {
                        if (o[t.idx] != null)
                            return n = o[t.idx] === s[t.idx], n
                    })), n
                }), n
            },
            _space: function() {
                var e = [], t = this;
                return c(o, function(n, r) {
                    t[r.cache] && e.push(n)
                }), e.pop()
            },
            transition: function(e, t) {
                var n = s(e), r = n._space(), i = o[r], a = this.alpha() === 0 ? s("transparent"): this, f = a[i.cache] || i.to(a._rgba), l = f.slice();
                return n = n[i.cache], c(i.props, function(e, r) {
                    var i = r.idx, s = f[i], o = n[i], a = u[r.type] || {};
                    if (o === null)
                        return;
                    s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)), l[i] = h((o - s) * t + s, r))
                }), this[r](l)
            },
            blend: function(t) {
                if (this._rgba[3] === 1)
                    return this;
                var n = this._rgba.slice(), r = n.pop(), i = s(t)._rgba;
                return s(e.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba(", n = e.map(this._rgba, function(e, t) {
                    return e == null ? t > 2 ? 1 : 0 : e
                });
                return n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla(", n = e.map(this.hsla(), function(e, t) {
                    return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                });
                return n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")"
            },
            toHexString: function(t) {
                var n = this._rgba.slice(), r = n.pop();
                return t && n.push(~~(r * 255)), "#" + e.map(n, function(e) {
                    return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }), s.fn.parse.prototype = s.fn, o.hsla.to = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l)%360, c, f, i == null ? 1: i]
        }, o.hsla.from = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null)
                return [null, null, null, e[3]];
            var t = e[0] / 360, n = e[1], r = e[2], i = e[3], s = r <= .5 ? r * (1 + n): r + n - r * n, o = 2 * r - s;
            return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
        }, c(o, function(n, i) {
            var o = i.props, u = i.cache, a = i.to, f = i.from;
            s.fn[n] = function(n) {
                a&&!this[u] && (this[u] = a(this._rgba));
                if (n === t)
                    return this[u].slice();
                var r, i = e.type(n), l = i === "array" || i === "object" ? n: arguments, p = this[u].slice();
                return c(o, function(e, t) {
                    var n = l[i === "object" ? e: t.idx];
                    n == null && (n = p[t.idx]), p[t.idx] = h(n, t)
                }), f ? (r = s(f(p)), r[u] = p, r) : s(p)
            }, c(o, function(t, i) {
                if (s.fn[t])
                    return;
                s.fn[t] = function(s) {
                    var o = e.type(s), u = t === "alpha" ? this._hsla ? "hsla": "rgba": n, a = this[u](), f = a[i.idx], l;
                    return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = e.type(s)), s == null && i.empty ? this : (o === "string" && (l = r.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : - 1))), a[i.idx] = s, this[u](a)))
                }
            })
        }), s.hook = function(t) {
            var n = t.split(" ");
            c(n, function(t, n) {
                e.cssHooks[n] = {
                    set: function(t, r) {
                        var i, o, u = "";
                        if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
                            r = s(i || r);
                            if (!a.rgba && r._rgba[3] !== 1) {
                                o = n === "backgroundColor" ? t.parentNode : t;
                                while ((u === "" || u === "transparent") && o && o.style)
                                    try {
                                        u = e.css(o, "backgroundColor"), o = o.parentNode
                                } catch (f) {}
                                r = r.blend(u && u !== "transparent" ? u : "_default")
                            }
                            r = r.toRgbaString()
                        }
                        try {
                            t.style[n] = r
                        } catch (f) {}
                    }
                }, e.fx.step[n] = function(t) {
                    t.colorInit || (t.start = s(t.elem, n), t.end = s(t.end), t.colorInit=!0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, s.hook(n), e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return c(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                }), t
            }
        }, l = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function() {
        function i(t) {
            var n, r, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null): t.currentStyle, s = {};
            if (i && i.length && i[0] && i[i[0]]) {
                r = i.length;
                while (r--)
                    n = i[r], typeof i[n] == "string" && (s[e.camelCase(n)] = i[n])
            } else 
                for (n in i)
                    typeof i[n] == "string" && (s[n] = i[n]);
            return s
        }
        function s(t, n) {
            var i = {}, s, o;
            for (s in n)
                o = n[s], t[s] !== o&&!r[s] && (e.fx.step[s] ||!isNaN(parseFloat(o))) && (i[s] = o);
            return i
        }
        var n = ["add", "remove", "toggle"], r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
            e.fx.step[n] = function(e) {
                if (e.end !== "none"&&!e.setAttr || e.pos === 1&&!e.setAttr)
                    jQuery.style(e.elem, n, e.end), e.setAttr=!0
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }), e.effects.animateClass = function(t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function() {
                var r = e(this), o = r.attr("class") || "", u, f = a.children ? r.find("*").addBack(): r;
                f = f.map(function() {
                    var t = e(this);
                    return {
                        el: t,
                        start: i(this)
                    }
                }), u = function() {
                    e.each(n, function(e, n) {
                        t[n] && r[n + "Class"](t[n])
                    })
                }, u(), f = f.map(function() {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), r.attr("class", o), f = f.map(function() {
                    var t = this, n = e.Deferred(), r = e.extend({}, a, {
                        queue: !1,
                        complete: function() {
                            n.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, r), n.promise()
                }), e.when.apply(e, f.get()).done(function() {
                    u(), e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }), a.complete.call(r[0])
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, r, i) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, n, r, i) {
                return arguments.length > 1 ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, r, i) : this._removeClass.apply(this, arguments)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(n, r, i, s, o) {
                return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                    add: n
                } : {
                    remove: n
                }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                    toggle: n
                }, r, i, s)
            },
            switchClass: function(t, n, r, i, s) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, s)
            }
        })
    }(), function() {
        function r(t, n, r, i) {
            e.isPlainObject(t) && (n = t, t = t.effect), t = {
                effect: t
            }, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
            if (typeof n == "number" || e.fx.speeds[n])
                i = r, r = n, n = {};
            return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
        }
        function i(t) {
            return !t || typeof t == "number" || e.fx.speeds[t]?!0 : typeof t == "string"&&!e.effects.effect[t]
        }
        e.extend(e.effects, {
            version: "1.10.1",
            save: function(e, t) {
                for (var r = 0; r < t.length; r++)
                    t[r] !== null && e.data(n + t[r], e[0].style[t[r]])
            },
            restore: function(e, r) {
                var i, s;
                for (s = 0; s < r.length; s++)
                    r[s] !== null && (i = e.data(n + r[s]), i === t && (i = ""), e.css(r[s], i))
            },
            setMode: function(e, t) {
                return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function(e, t) {
                var n, r;
                switch (e[0]) {
                case"top":
                    n = 0;
                    break;
                case"middle":
                    n = .5;
                    break;
                case"bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
                }
                switch (e[1]) {
                case"left":
                    r = 0;
                    break;
                case"center":
                    r = .5;
                    break;
                case"right":
                    r = 1;
                    break;
                default:
                    r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), i = {
                    width: t.width(),
                    height: t.height()
                }, s = document.activeElement;
                try {
                    s.id
                } catch (o) {
                    s = document.body
                }
                return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function(e, r) {
                    n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(i), r.css(n).show()
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
            },
            setTransition: function(t, n, r, i) {
                return i = i || {}, e.each(n, function(e, n) {
                    var s = t.cssUnit(n);
                    s[0] > 0 && (i[n] = s[0] * r + s[1])
                }), i
            }
        }), e.fn.extend({
            effect: function() {
                function o(n) {
                    function u() {
                        e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n()
                    }
                    var r = e(this), i = t.complete, o = t.mode;
                    (r.is(":hidden") ? o === "hide" : o === "show") ? u() : s.call(r[0], t, u)
                }
                var t = r.apply(this, arguments), n = t.mode, i = t.queue, s = e.effects.effect[t.effect];
                return e.fx.off ||!s ? n ? this[n](t.duration, t.complete) : this.each(function() {
                    t.complete && t.complete.call(this)
                }) : i===!1 ? this.each(o) : this.queue(i || "fx", o)
            },
            _show: e.fn.show,
            show: function(e) {
                if (i(e))
                    return this._show.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "show", this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (i(e))
                    return this._hide.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "hide", this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (i(t) || typeof t == "boolean" || e.isFunction(t))
                    return this.__toggle.apply(this, arguments);
                var n = r.apply(this, arguments);
                return n.mode = "toggle", this.effect.call(this, n)
            },
            cssUnit: function(t) {
                var n = this.css(t), r = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }), r
            }
        })
    }(), function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return e === 0 || e === 1 ? e : - Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11);
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        }), e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }, e.easing["easeInOut" + t] = function(e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e*-2 + 2) / 2
            }
        })
    }()
}(jQuery);
(function(Modernizr, window) {
    Modernizr.addTest('csstransformspreserve3d', function() {
        var prop = Modernizr.prefixed('transformStyle');
        var val = 'preserve-3d';
        var computedStyle;
        if (!prop)
            return false;
        prop = prop.replace(/([A-Z])/g, function(str, m1) {
            return '-' + m1.toLowerCase();
        }).replace(/^ms-/, '-ms-');
        Modernizr.testStyles('#modernizr{' + prop + ':' + val + ';}', function(el, rule) {
            computedStyle = window.getComputedStyle ? getComputedStyle(el, null).getPropertyValue(prop) : '';
        });
        return (computedStyle === val);
    });
}(Modernizr, window));
(function() {
    var method;
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val))
};
var device = {
    touch: false,
    mobile: false,
    over: '',
    out: '',
    retina: false,
    transitions: false,
    android: false
};
function registerDevice()
{
    var suffix = '@2x';
    var density = (window.devicePixelRatio === undefined) ? 1: window.devicePixelRatio;
    if (density > 1)
    {
        $('body').addClass('retina');
        device.retina = true;
    }
    device.transitions = Modernizr.csstransitions;
    device.transforms = Modernizr.csstransforms;
    device.transforms3d = Modernizr.csstransforms3d;
    device.animations = Modernizr.cssanimations;
    if ((navigator.userAgent.toLowerCase().indexOf('android')!=-1))
        device.android = true;
    if ((navigator.userAgent.indexOf('iPhone')!=-1) || (navigator.userAgent.indexOf('iPod')!=-1) || (navigator.userAgent.indexOf('BlackBerry')!=-1) || (navigator.userAgent.indexOf('Windows Phone')!=-1) || (navigator.userAgent.toLowerCase().indexOf('android')!=-1) && (navigator.userAgent.toLowerCase().indexOf('mobile')!=-1)) {
        $('body').addClass('mobile');
        device.mobile = true;
    }
    if ((navigator.userAgent.indexOf('iPhone')!=-1) || (navigator.userAgent.indexOf('iPod')!=-1) || (navigator.userAgent.indexOf('BlackBerry')!=-1) || (navigator.userAgent.indexOf('Windows Phone')!=-1) || (navigator.userAgent.toLowerCase().indexOf('android')!=-1) || (navigator.userAgent.indexOf('iPad')!=-1)) {
        $('body').addClass('touchscreen');
        device.touch = true;
    }
    if (device.touch)
    {
        device.over = window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart";
        device.out = window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend";
        device.instaClick = window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart";
    } else {
        device.over = 'mouseenter';
        device.out = 'mouseleave';
        device.instaClick = 'click'
    }
    if (!device.touch)
        $('body').addClass('desktop');
};
(function($) {
    $.fn.clickMonitor = function(identifier, callback, insta)
    {
        var classString, goIndex, endIndex, goVal;
        $(this).on(insta == true ? device.instaClick : 'click', function()
        {
            if ($(this).hasClass('disabled') || $(this).hasClass('animating'))
                return false;
            classString = $(this).attr('class');
            if (classString == undefined)
                classString = '';
            goIndex = classString.search(identifier);
            if (goIndex>-1)
            {
                endIndex = classString.indexOf(' ', goIndex);
                endIndex = endIndex>-1 ? endIndex : classString.length;
                goVal = classString.substr(goIndex + identifier.length, endIndex - goIndex - identifier.length);
                return callback(goVal);
            }
        });
        return this;
    }
})(jQuery);
function getClassSuffix(identifier, classString)
{
    var goIndex, endIndex, goVal;
    if (classString == undefined)
        classString = '';
    goIndex = classString.search(identifier);
    if (goIndex>-1)
    {
        endIndex = classString.indexOf(' ', goIndex);
        endIndex = endIndex>-1 ? endIndex : classString.length;
        goVal = classString.substr(goIndex + identifier.length, endIndex - goIndex - identifier.length);
        return goVal;
    };
    return '';
};
(function($) {
    $.fn.smartAnimate = function(options, time, callback, vars)
    {
        var that = this;
        var cssTransitions = device.transitions;
        this.setTransition = function(tgt, options, time, callback)
        {
            if (cssTransitions)
            {
                this.setCSSTimes($(tgt), time);
                $(tgt).addClass('css-animator').css(options);
                clearTimeout($(tgt).data('css-timeout'));
                $(tgt).data('css-timeout', setTimeout(function() {
                    that.setCSSTimes($(tgt), 0);
                    if (callback)
                        callback(tgt, vars);
                }, Math.max(time, 50)));
            } else {
                $(tgt).stop(true).animate(options, time, function() {
                    that.setCSSTimes($(tgt), 0);
                    if (callback)
                        callback(tgt, vars);
                });
            }
        };
        this.setCSSTimes = function(tgt, time)
        {
            $(tgt).css('-webkit-transition-duration', time * 0.001 + 's').css('-moz-transition-duration', time * 0.001 + 's').css('-ms-transition-duration', time * 0.001 + 's').css('-o-transition-duration', time * 0.001 + 's').css('transition-duration', time * 0.001 + 's');
        };
        $(this).each(function() {
            that.setTransition(this, options, time, callback);
        });
        return this;
    }
})(jQuery);
function getTransition(left, top, rotate, scale)
{
    return device.transforms && device.animations ? {
        transform: 'translate(' + left + ',' + top + ')' + (rotate != undefined ? ' rotate(' + rotate + ')' : '') + (scale != undefined ? ' scale(' + scale + ')' : '')
    } : $.extend((rotate != undefined ? {
        transform: 'rotate(' + rotate + ')' + (scale != undefined ? ' scale(' + scale + ')' : '')
    } : {}), {
        left: left,
        top: top
    });
};
function getTranslateValues(string)
{
    return '-webkit-transform:translate(' + string + '); -moz-transform:translate(' + string + '); -ms-transform:translate(' + string + '); -o-transform:translate(' + string + '); transform:translate(' + string + ');';
};
function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
var scrollers = [], uid = 0;
function Scroller(element, options, scrollMove, scrollEnd)
{
    var scroller, elID, desktop = false, api;
    this.init = function()
    {
        if (element.attr('id') == undefined)
        {
            elID = 'iscroll-' + uid;
            $(element).attr('id', elID);
            uid++;
        } else {
            elID = element.attr('id');
        }
        if (!device.touch)
        {
            desktop = true;
            scroller = $('#' + elID).jScrollPane({
                showArrows: true,
                horizontalDragMaxWidth: 0
            });
            api = $('#' + elID).data('jsp');
        } else {
            scroller = new iScroll(elID, $.extend(options, {
                onScrollMove: function() {
                    scrollMove();
                },
                onScrollEnd: function() {
                    scrollEnd();
                }
            }));
        }
    };
    this.refresh = function() {
        if (desktop) {
            api.reinitialise();
        } else {
            scroller.refresh();
        };
    };
    this.scrollTo = function(a, b) {
        if (desktop) {
            api.scrollToY(a, b);
        } else {
            scroller.scrollTo(a, b);
        }
    };
    this.init();
    scrollers.push(this);
    return this;
};
(function($) {
    $.fn.setDefaultText = function(defaultText)
    {
        $(this).data('defaulttext', defaultText).val(defaultText).addClass('input-default').focus(function()
        {
            if (this.value == $(this).data('defaulttext'))
            {
                this.value = '';
                $(this).removeClass('input-default');
            };
        }).blur(function()
        {
            if (this.value == '')
            {
                this.value = $(this).data('defaulttext');
                $(this).addClass('input-default');
            };
        });
        return this;
    }
})(jQuery);
(function($) {
    $.fn.loadIndividualImages = function(callback) {
        $(this).each(function()
        {
            $(this).loadImage(callback, this);
        });
        return this;
    }
})($);
(function($) {
    $.fn.loadImage = function(callback, item) {
        $(this).loadImages(function() {
            callback(item);
        });
        return this;
    }
})($);
(function($) {
    $.fn.loadImages = function(callback, timeoutTime) {
        var _loaded = 0, _total = this.length, _callback = callback, _completed = false, _timeout, _timeoutTime = timeoutTime;
        this.load(addToLoaded).each(function() {
            if ($(this).get(0).complete || $(this).get(0).complete == undefined || $(this).data('setload') == undefined) {
                var src = this.src;
                this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                this.src = src;
                $(this).data('setload', true);
            }
        });
        if (!isNaN(_timeoutTime)) {
            clearTimeout(_timeout);
            _timeout = setTimeout(function() {
                if (!_completed) {
                    _callback();
                    _completed = true;
                }
            }, _timeoutTime);
        }
        if ($(this).length == 0) {
            callback();
            _completed = true;
            clearTimeout(_timeout);
        }
        function addToLoaded() {
            _loaded++;
            $('.loading-bar-gauge').css({
                width: ((_loaded / _total) * 100) + '%'
            });
            if (_loaded == _total&&!_completed) {
                _callback();
                _completed = true;
                clearTimeout(_timeout);
            }
        }
    }
})($);
var trackChecked = false, trackEnabled = false;
function trk(category, action, label)
{
    if (_gaq&&!trackChecked) {
        trackEnabled = true;
        trackChecked = true;
    }
    if (trackEnabled)
    {
        _gaq.push(['_trackEvent', category, action, label]);
    };
};
var app;
(function() {
    registerDevice();
    app = new AdamsApp();
}());
function AdamsApp()
{
    var app = this, display = $('#container'), manager, screens = [], total = 0;
    this.header;
    this.init = function()
    {
        this.begin();
    };
    this.begin = function()
    {
        this.headerFooter = new AppHeaderFooter(app, $('#header, #footer'));
        manager = new AppManager(app, display, screens);
        this.registerScreens();
        manager.begin();
    };
    this.registerScreens = function()
    {
        $('#screens .screen', display).each(function(i)
        {
            switch ($(this).attr('id').replace('a-', ''))
            {
            case'home':
                screens['home'] = {
                    id: total,
                    display: $(this),
                    screen: new ScreenHome(app, manager, $(this))
                };
                total++;
                break;
            case'about':
                screens['about'] = {
                    id: total,
                    display: $(this),
                    screen: new ScreenAbout(app, manager, $(this))
                };
                total++;
                break;
            case'skills':
                screens['skills'] = {
                    id: total,
                    display: $(this),
                    screen: new ScreenSkills(app, manager, $(this))
                };
                total++;
                break;
            case'work-and-play':
                screens['work-and-play'] = {
                    id: total,
                    display: $(this),
                    screen: new ScreenWorkPlay(app, manager, $(this), '#dcdcdc')
                };
                total++;
                break;
            case'contact':
                screens['contact'] = {
                    id: total,
                    display: $(this),
                    screen: new ScreenContact(app, manager, $(this))
                };
                total++;
                break;
            case'awards':
                screens['awards'] = {
                    id: total,
                    display: $(this),
                    screen: new ScreenAwards(app, manager, $(this))
                };
                total++;
                break;
            case'login':
                screens['login'] = {
                    id: total,
                    display: $(this),
                    screen: new ScreenLogin(app, manager, $(this))
                };
                total++;
                break;
            case'404':
                screens['404'] = {
                    id: total,
                    display: $(this),
                    screen: new Screen404(app, manager, $(this))
                };
                total++;
                break;
            default:
                break;
            }
        });
    };
    this.init();
};
function AppHeaderFooter(app, display)
{
    var that = this, app = app, display = display, footerActive = false;
    this.init = function()
    {
        this.prepareDisplay();
        this.addListeners();
    };
    this.prepareDisplay = function()
    {
        $('#footer-bar #footer-bar-display', display).smartAnimate(getTransition('0px', '100%'), 0);
        $('.f-on', display).smartAnimate({
            opacity: 0
        }, 0);
        $('.f-off', display).smartAnimate({
            opacity: 1
        }, 0);
    };
    this.addListeners = function()
    {
        $('.go-footer-info', display).click(function() {
            that.showFooter();
            return false;
        });
        $('.go-close-footer-info', display).click(function() {
            that.hideFooter();
            return false;
        });
        $('body').on(device.over, '.flp-btn', that.itemOver).on(device.out, '.flp-btn', that.itemOut);
        $('.flp-btn div').smartAnimate({
            top: '0px'
        }, 0);
    };
    this.itemOver = function()
    {
        if ($(this).data('disabled') != true)
        {
            $('> div', this).smartAnimate(($(this).hasClass('flp-left') ? getTransition(( - $('> div', this).width() * 0.5) + 'px', '0px') : $(this).hasClass('flp-right') ? getTransition(($('> div', this).width() * 0.5) + 'px', '0px') : getTransition('0px', ( - $('> div', this).height() * 0.5) + 'px')), device.touch ? 0 : 200);
        }
    };
    this.itemOut = function()
    {
        if ($(this).data('disabled') != true)
        {
            if ($(this).data('outDisabled') != true) {
                $('div', this).smartAnimate(getTransition('0px', '0px'), 200);
            }
        }
    };
    this.showFooter = function()
    {
        $('#footer-bar', display).css({
            height: '64px'
        });
        $('#footer-bar-display', display).smartAnimate(getTransition('0px', '0%'), 500);
        $('.f-off', display).smartAnimate({
            opacity: 0
        }, 0);
        $('.f-off', display).hide();
        $('.f-on', display).show().smartAnimate({
            opacity: 0
        }, 0, function()
        {
            $('.f-on', display).smartAnimate({
                opacity: 1
            }, 500);
        });
    };
    this.hideFooter = function()
    {
        $('#footer-bar-display', display).smartAnimate(getTransition('0px', '100%'), 500, function() {
            $('#footer-bar', display).css({
                height: '0px'
            });
        });
        $('.f-on', display).smartAnimate({
            opacity: 0
        }, 0);
        $('.f-on', display).hide();
        $('.f-off', display).show().smartAnimate({
            opacity: 1
        }, 500);
    };
    this.init();
};
function AppManager(app, display, screens)
{
    var that = this, app = app, display = display, screens = screens;
    var key = {
        active: false
    }, targetScreen, resizeTimeout, deepLink = {
        value: '',
        changed: false
    }, pageInit = {
        currPage: currPage,
        used: false
    };
    var historyData = {
        state: window.history.pushState !== undefined,
        titleString: ''
    };
    this.currentScreen = null;
    this.begin = function()
    {
        this.monitorDimensions();
        this.deepLinking();
        this.addListeners();
    };
    this.deepLinking = function()
    {
        this.html5DeepLink();
    };
    this.html5DeepLink = function()
    {
        $.address.state('/').init().change(function(e) {
            historyData.value = e.value.replace(/\//, '').split('/');
            that.viewScreen(historyData.value[0] == '' ? 'home' : historyData.value[0], historyData.value);
        });
        setTimeout(function() {
            if (!deepLink.changed)
            {
                historyData.value = e.value.replace(/\//, '').split('/');
                that.viewScreen(historyData.value[0] == '' ? 'home' : historyData.value[0], historyData.value);
            };
        }, 1000);
    };
    this.standardDeepLink = function()
    {
        $.address.change(function(e) {
            historyData.value = e.value.replace(/\//, '').split('/');
            that.viewScreen(historyData.value[0] == '' ? 'home' : historyData.value[0], historyData.value);
        });
        setTimeout(function() {
            if (!deepLink.changed)
            {
                historyData.value = e.value.replace(/\//, '').split('/');
                that.viewScreen(historyData.value[0] == '' ? 'home' : historyData.value[0], historyData.value);
            };
        }, 1000);
    };
    this.camelCase = function(str)
    {
        return str.toLowerCase().replace(/(^| )(\w)/g, function(x) {
            return x.toUpperCase();
        });
    };
    this.monitorDimensions = function()
    {
        $(window).bind('resize.app', function() {
            that.updateDimensions();
        });
        $(window).trigger('resize.app');
    };
    this.addListeners = function()
    {
        $(document).keydown(that.monitorKeyPress).keyup(that.monitorKeyRelease);
    };
    this.monitorKeyPress = function(e) {
        key.active = false;
        if (e.shiftKey == true)
            key.active = true;
        if (e.metaKey == true)
            key.active = true;
    };
    this.monitorKeyRelease = function(e) {
        key.active = false;
    };
    this.checkLinkSelect = function(value) {
        if (screens[value] != undefined) {
            that.viewScreen(value);
            return false;
        }
    };
    this.updateDimensions = function()
    {
        that.goRefreshDimensions();
        if (device.touch)
        {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                that.goRefreshDimensions();
            }, 100);
            resizeTimeout = setTimeout(function() {
                that.goRefreshDimensions();
            }, 500);
        };
    };
    this.goRefreshDimensions = function()
    {
        if (this.currentScreen != null)
        {
            screens[this.currentScreen].display.css({
                minHeight: $(window).height()
            });
            screens[this.currentScreen].screen.updateDimensions();
            $('#container').height($(screens[this.currentScreen].display).height());
        }
    };
    this.updateLinkStates = function(screen)
    {
        $('#header a').closest('li').removeClass('active');
        $('#header a.go-' + screen).closest('li').addClass('active');
    };
    this.viewScreen = function(screen, linkData)
    {
        deepLink.changed = true;
        if (screens[screen] == undefined)
            screen = '404';
        $('.sec-loader').hide();
        trk('Sections', 'View Section', screen);
        this.updateAddressTitle(linkData, screen);
        this.updateLinkStates(screen);
        if (this.currentScreen == screen) {
            screens[currentScreen].screen.readLinkData(linkData);
            return false;
        }
        this.closeScreen(this.currentScreen, screen, linkData);
        $(window).trigger('resize.app');
    };
    this.updateAddressTitle = function(linkData, screen)
    {
        if (screen == '404')
        {
            $.address.title($.address.title().split(' : ')[0] + ' : 404');
        } else if (linkData != undefined)
        {
            historyData.titleString = $.address.title().split(' : ')[0];
            for (var i = 0, il = linkData.length; i < il; i++)
            {
                historyData.titleString += linkData[i] == '' ? '' : ' : ' + (that.camelCase(linkData[i].replace(/-/g, ' ')));
            };
            $.address.title(historyData.titleString);
        } else {
            $.address.title($.address.title().split(' : ')[0] + ' : ' + that.camelCase(screen.replace(/-/g, '')));
        }
    };
    this.closeScreen = function(currentScreen, screen, linkData)
    {
        if (currentScreen == null) {
            this.openScreen(screen, linkData);
            return false;
        }
        targetScreen = screen;
        screens[currentScreen].screen.remove(function()
        {
            screens[currentScreen].display.hide();
            if (targetScreen == screen)
                that.openScreen(screen, linkData);
        });
    };
    this.openScreen = function(screen, linkData)
    {
        this.currentScreen = screen;
        $(window).scrollTop(0);
        currentScreen = screen;
        screens[screen].display.show();
        screens[screen].screen.add(linkData);
    };
    this.setBackgroundColor = function(color)
    {
        $('body').smartAnimate({
            backgroundColor: color
        }, 300);
    };
};
function ScreenHome(app, manager, display)
{
    var that = this, app = app, manager = manager, display = display, loadStatus = {
        loaded: false,
        loading: false
    }, status = {
        adding: false,
        removing: false,
        enabled: false
    };
    var xmlPath = '/xml/letters.xml', json;
    var statements;
    this.init = function()
    {
        statements = new SmartStatements($('#home-statements', display), display, that);
    };
    this.loadAssets = function()
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        $.ajax({
            type: "GET",
            url: xmlPath,
            dataType: "xml",
            complete: function(data)
            {
                json = $.xmlToJSON(data.responseXML);
                statements.init(json);
                $('.sec-loader').show().find('.loading-bar-gauge').css({
                    width: '0%'
                });
                $('img', $('<div>' + statements.imageList.string + '</div>')).loadImages(function() {
                    loadStatus.loaded = true;
                    if (!status.removing) {
                        that.beginDisplay();
                        $('.sec-loader').hide();
                    }
                }, 10000);
            }
        });
    };
    this.beginDisplay = function()
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        status.enabled = true;
        statements.setStatement(0);
        $(window).trigger('resize.app');
    };
    this.updateDimensions = function()
    {
        statements.updatePositions();
    };
    this.setBackgroundColor = function(color)
    {
        if (!status.enabled)
            return false;
        manager.setBackgroundColor(color);
    };
    this.getHeight = function() {
        return 100;
    };
    this.add = function() {
        manager.setBackgroundColor('#ffc300;');
        if (status.adding)
            return false;
        status.adding = true;
        status.removing = false;
        if (!loadStatus.loaded) {
            this.loadAssets();
        } else {
            this.beginDisplay();
        }
    };
    this.remove = function(callback) {
        if (status.removing)
            return false;
        status.adding = false;
        status.enabled = false;
        status.removing = true;
        if (loadStatus.loaded) {
            statements.closeStatements(callback);
        } else {
            callback();
        }
    };
    this.readLinkData = function(data) {};
    this.init();
};
function SmartStatements(display, screen, topLevel)
{
    var display = display, screen = screen, that = this, topLevel = topLevel, json, tmp, loadDiv = {
        string: ''
    }, currentStatement = null, statement, statements = {
        statement: [],
        current: null,
        item: null,
        time: 10000,
        timeout: null,
        randomizer: {
            time: 1000,
            timeout: null
        }
    }, letters = {
        title: {
            a: [],
            r: [],
            prefix: null,
            format: null,
            letterHeight: 0,
            spaceWidth: 0
        },
        description: {
            a: [],
            r: [],
            prefix: null,
            format: null,
            letterHeight: 0,
            spaceWidth: 0
        }
    }, letterTime = {
        interval: null,
        count: 0,
        timeout: 2000
    }, bullets = {
        width: 0,
        height: 0,
        prefix: null,
        format: null,
        bullet: [],
        raw: ''
    }, shifting = false, statementShowTimeout, currentID =- 1, tmpTransform = [], disabled, usedLettersTitle = '';
    usedLettersDescription = '';
    this.imageList = loadDiv;
    var sideIndex = 0, sideIndexGroup = 2, sidesStd = [{
        s: 'dl',
        d: 'left:100%',
        db: {
            left: '100%',
            top: '0%'
        },
        o: {
            left: '-100%',
            top: '0%'
        }
    }, {
        s: 'dr',
        d: 'left:-100%',
        db: {
            left: '-100%',
            top: '0%'
        },
        o: {
            left: '100%',
            top: '0%'
        }
    }, {
        s: 'dt',
        d: 'top:100%',
        db: {
            left: '0%',
            top: '100%'
        },
        o: {
            left: '0%',
            top: '-100%'
        }
    }, {
        s: 'db',
        d: 'top:-100%',
        db: {
            left: '0%',
            top: '-100%'
        },
        o: {
            left: '0%',
            top: '100%'
        }
    }
    ], sidesHw = [{
        s: 'dl',
        d: getTranslateValues('100%,0%'),
        db: {
            transform: 'translate(100%,0%)'
        },
        o: {
            transform: 'translate(-100%,0%)'
        }
    }, {
        s: 'dr',
        d: getTranslateValues('-100%,0%'),
        db: {
            transform: 'translate(-100%,0%)'
        },
        o: {
            transform: 'translate(100%,0%)'
        }
    }, {
        s: 'dt',
        d: getTranslateValues('0%,100%'),
        db: {
            transform: 'translate(0%,100%)'
        },
        o: {
            transform: 'translate(0%,-100%)'
        }
    }, {
        s: 'db',
        d: getTranslateValues('0%,-100%'),
        db: {
            transform: 'translate(0%,-100%)'
        },
        o: {
            transform: 'translate(0%,100%)'
        }
    }
    ], showStd = {
        top: '0px',
        left: '0px'
    }, showHw = {
        transform: 'translate(0%,0%)'
    }, show, sides;
    this.init = function(data)
    {
        json = data;
        $(display).addClass('smart-type');
        this.registerTransitions();
        this.compileImages();
        this.createLetters();
        this.compileStatements();
        this.addUsedLetters(usedLettersTitle, letters.title);
        this.addUsedLetters(usedLettersDescription, letters.description);
    };
    this.registerTransitions = function() {
        if (device.transforms && device.transitions) {
            show = showHw;
            sides = sidesHw;
        } else {
            show = showStd;
            sides = sidesStd;
        }
    };
    this.compileImages = function()
    {
        loadDiv.string = device.retina ? '<img src="/images/lettering/learn-more.png" />' : '<img src="/images/lettering/learn-more@2x.png" />';
    };
    this.createLetters = function()
    {
        this.compileBullets(json.bullets[0]);
        this.compileLetters(letters.title, json.title[0], false);
        this.compileLetters(letters.description, json.description[0], true);
        loadDiv.div = $('<div>' + loadDiv.string + '</div>');
    };
    this.compileBullets = function(data)
    {
        bullets.prefix = device.retina ? data.retinaprefix : data.prefix;
        bullets.format = data.format;
        bullets.width = parseInt(device.mobile ? Math.round(data.width * 0.93) : data.width);
        bullets.height = parseInt(device.mobile ? Math.round(data.height * 0.93) : data.height);
        var i = data.b.length, item, itemData;
        while (i--)
        {
            item = data.b[i];
            itemData = {
                img: item.img
            };
            bullets.bullet.push(itemData);
            loadDiv.string += '<img src="' + (bullets.prefix + itemData.img + bullets.format) + '" />';
        }
        item = null;
        itemData = null;
    };
    this.compileLetters = function(letters, data, lightScale)
    {
        letters.prefix = device.mobile ? lightScale ? data.retinaprefix : data.prefix : device.retina ? data.retinaprefix : data.prefix;
        letters.format = data.format;
        letters.letterHeight = device.mobile ? Math.floor(parseInt(data.letterheight * (lightScale ? 0.7 : 0.5))) : parseInt(data.letterheight);
        letters.spaceWidth = device.mobile ? Math.floor(parseInt(data.spacewidth) * (lightScale ? 0.7 : 0.5)) : parseInt(data.spacewidth);
        var i = data.l.length, item, itemData;
        while (i--)
        {
            item = data.l[i];
            itemData = {
                used: false,
                img: item.img,
                width: (device.mobile ? Math.floor(parseInt(item.width) * (lightScale ? 0.7 : 0.5)) : parseInt(item.width)),
                height: letters.letterHeight,
                char: item.Text
            };
            letters.a[itemData.char] = itemData;
            letters.r.push(itemData);
        };
        item = null;
        itemData = null;
    };
    this.compileStatements = function()
    {
        var item = null;
        usedLettersTitle = '';
        usedLettersDescription = '';
        for (var i = 0, il = $('.statement-spinner', display).length; i < il; i++)
        {
            item = $('.statement-spinner:eq(' + i + ')', display);
            statements.statement.push({
                id: i,
                added: false,
                color: $(item).css('color'),
                container: $(item),
                title: $('.statement .st-title', item).text().toLowerCase().split(' '),
                description: $('.statement .st-desc', item).text().toLowerCase().split(' '),
                parsed: false,
                titleContent: null,
                descriptionContent: null,
                letters: {
                    t: [],
                    d: []
                },
                minWidth: 0
            });
            that.addBullets($('.statement', item), $('.statement-spinner', display).length);
            usedLettersTitle += $('.statement .st-title', item).text().toLowerCase().replace(/ /g, '');
            usedLettersDescription += $('.statement .st-desc', item).text().toLowerCase().replace(/ /g, '');
        };
        $('.st-title', display).text('');
        $('.st-desc', display).text('');
        if (!device.touch)
            $('.st-bullet', display).bind(device.over, this.bulletOver).bind(device.out, this.bulletOut);
        $('.st-bullet', display).bind(device.instaClick, this.bulletSelect);
    };
    this.addUsedLetters = function(letterSet, data)
    {
        for (var i = 0, il = letterSet.length; i < il; i++)
        {
            if (data.a[letterSet.charAt(i)] != undefined)
            {
                if (!data.a[letterSet.charAt(i)].used) {
                    loadDiv.string += '<img src="' + (data.prefix + data.a[letterSet.charAt(i)].img + data.format) + '" />';
                    data.a[letterSet.charAt(i)].used = true;
                }
            };
        };
    };
    this.bulletOver = function() {
        $('.bullet', this).addClass('bullet-hover');
    };
    this.bulletOut = function() {
        $('.bullet', this).removeClass('bullet-hover');
    };
    this.bulletSelect = function()
    {
        if (shifting)
            return false;
        trk('Home', 'Bullet clicked', $(this).index());
        that.setStatement($(this).index());
    };
    this.addBullets = function(item, total)
    {
        bullets.raw = '<div class="st-bullets">';
        for (var i = 0, il = total; i < il; i++)
        {
            bullets.raw += '<div class="st-bullet" style="width:' + bullets.width + 'px; height:' + (bullets.height * 0.5) + 'px;"><div class="bullet" style="width:' + bullets.width + 'px; height:' + bullets.height + 'px; background-image:url(' + bullets.prefix + bullets.bullet[Math.floor(Math.random() * bullets.bullet.length)].img + bullets.format + '); background-size:' + bullets.width + 'px ' + bullets.height + 'px;"></div></div>';
        }
        bullets.raw += '</div>';
        $(item).append($(bullets.raw));
        bullets.raw = '';
    };
    this.setStatement = function(id)
    {
        if (statements.statement.length == 0)
            return;
        if (id > statements.statement.length - 1)
            id = 0;
        disabled = false;
        clearTimeout(statements.timeout);
        if (currentStatement != null)
        {
            if (currentStatement.id == id)
                return false;
            shifting = true;
            this.closeStatement(id, (id > currentID));
            return false;
        }
        shifting = true;
        this.addStatement(id, true);
    };
    this.closeStatements = function(callback)
    {
        disabled = true;
        currentID =- 1;
        clearInterval(letterTime.interval);
        this.hideStatement(currentStatement, callback);
        currentStatement = null;
    };
    this.closeStatement = function(id, forward, callback)
    {
        this.stopLetterRandomizer();
        $('.learn-more', currentStatement.container).smartAnimate(getTransition(0, '-39px'), 300);
        $(currentStatement.container).smartAnimate({
            opacity: 0
        }, 300, function(tgt) {
            $(tgt).hide();
            if (callback) {
                callback();
                return false;
            }
        });
        $('.statement .st-bullets', currentStatement.container).css({
            visibility: 'hidden'
        });
        if (callback == undefined)
            this.addStatement(id, forward);
    };
    this.addStatement = function(id, forward)
    {
        currentID = id;
        this.parseStatement(id);
        statements.current = id;
        currentStatement = statements.statement[statements.current];
        currentStatement.container.show();
        that.resetStatement();
        if (!currentStatement.added)
        {
            $('.statement .st-title', currentStatement.container).append(currentStatement.titleContent);
            $('.statement .st-desc', currentStatement.container).append(currentStatement.descriptionContent);
            currentStatement.added = true;
        }
        $('.statement .st-bullets', currentStatement.container).css({
            visibility: 'visible'
        });
        $('.statement .st-bullets', currentStatement.container).smartAnimate({
            opacity: 0
        }, 0, function()
        {
            $('.statement .st-bullets', currentStatement.container).smartAnimate({
                opacity: 1
            }, 300);
        });
        $(window).trigger('resize.app');
        tmpTransform.out = device.mobile ? {
            opacity: 1
        } : {
            transform: 'rotate(' + (forward ? 10 : - 10) + 'deg)',
            opacity: 1
        };
        $(currentStatement.container).smartAnimate(tmpTransform.out, 0, function()
        {
            topLevel.setBackgroundColor(currentStatement.color);
            $(currentStatement.container).smartAnimate({
                transform: 'rotate(0deg)'
            }, 500, function() {
                shifting = false;
            });
            that.revealStatement();
        });
        this.updateBullets(id);
    };
    this.updatePositions = function()
    {
        $('#home-statements').css({
            left: $(window).width * 0.5 + 'px'
        });
        if (currentStatement != null)
        {
            $('.statement', currentStatement.container).css({
                width: $(screen).width() + 'px',
                left: - Math.max(currentStatement.minWidth * 0.5, $(screen).width() * 0.5) + 'px'
            });
            $(screen).css({
                minHeight: Math.max($(window).height(), $('.statement', currentStatement.container).height() + $('#header').outerHeight(true) + 80) + 'px'
            });
            $('.statement', currentStatement.container).css({
                bottom: ($(screen).height() * 0.5 - $('.statement', currentStatement.container).height() * 0.5) + 'px'
            });
        };
    };
    this.updateBullets = function(id)
    {
        $('.st-bullet:eq(' + id + ') .bullet', currentStatement.container).addClass('bullet-active');
        $('.st-bullet:not(:eq(' + id + ')) .bullet', currentStatement.container).removeClass('bullet-active');
    };
    this.resetStatement = function()
    {
        $('.statement .learn-more', currentStatement.container).smartAnimate(getTransition(0, '-39px'), 300);
        $(currentStatement.letters.t).each(function(i) {
            clearTimeout($(this).data('letterTimeout'));
            $(this).smartAnimate(sides[parseInt($('.ndx', currentStatement.letters.t[i]).text())].db, 0);
        });
        $(currentStatement.letters.d).each(function(i) {
            clearTimeout($(this).data('letterTimeout'));
            $(this).smartAnimate(sides[sideIndexGroup].db, 0);
        });
    };
    this.hideStatement = function(statement, callback)
    {
        if (currentStatement != null)
        {
            $('.statement .st-bullets', currentStatement.container).css({
                visibility: 'hidden'
            });
            $('.learn-more', currentStatement.container).smartAnimate(getTransition(0, '-39px'), 300);
        }
        clearInterval(letterTime.closeInterval);
        letterTime.closeCount = 0;
        this.stopLetterRandomizer();
        letterTime.closeInterval = setInterval(function()
        {
            clearTimeout($(statement.letters.t[letterTime.closeCount]).data('letterTimeout'));
            $(statement.letters.t[letterTime.closeCount]).smartAnimate(sides[parseInt($('.ndx', statement.letters.t[letterTime.closeCount]).text())].db, 200);
            letterTime.closeCount++;
            if (letterTime.closeCount > statement.titleCount - 1) {
                clearInterval(letterTime.closeInterval);
                that.hideDescription(statement, callback);
            }
        }, 10);
    };
    this.hideDescription = function(statement, callback)
    {
        clearInterval(letterTime.closeInterval);
        letterTime.closeCount = 0;
        letterTime.closeInterval = setInterval(function()
        {
            clearTimeout($(statement.letters.d[letterTime.closeCount]).data('letterTimeout'));
            $(statement.letters.d[letterTime.closeCount]).smartAnimate(sides[sideIndexGroup].db, 100);
            letterTime.closeCount++;
            if (letterTime.closeCount > statement.descriptionCount - 1) {
                clearInterval(letterTime.closeInterval);
                $(statement.container).hide();
                if (callback)
                    callback();
            }
        }, 10);
    };
    this.revealStatement = function()
    {
        clearInterval(letterTime.interval);
        letterTime.count = 0;
        letterTime.interval = setInterval(function()
        {
            $(currentStatement.letters.t[letterTime.count]).smartAnimate(show, 300);
            letterTime.count++;
            if (letterTime.count > statement.titleCount - 1) {
                that.addStatementListeners();
                clearInterval(letterTime.interval);
                clearTimeout(statements.timeout);
                that.revealDescription();
            }
        }, device.mobile ? 50 : 10);
    };
    this.revealDescription = function()
    {
        clearInterval(letterTime.interval);
        letterTime.count = 0;
        letterTime.interval = setInterval(function()
        {
            $(currentStatement.letters.d[letterTime.count]).smartAnimate(show, 300);
            letterTime.count++;
            if (letterTime.count > statement.descriptionCount - 1) {
                clearInterval(letterTime.interval);
                that.letterRandomizer();
                that.runTimer();
                $('.statement .learn-more', currentStatement.container).smartAnimate(getTransition(0, '0px'), 300);
            }
        }, device.mobile ? 50 : 10);
    };
    this.runTimer = function()
    {
        clearTimeout(statements.timeout);
        statements.timeout = setTimeout(function() {
            if (disabled)
                return false;
            if (currentStatement == null) {
                that.setStatement(0);
                return false;
            }
            that.setStatement(currentStatement.id + 1);
        }, statements.time);
    };
    this.letterRandomizer = function()
    {
        clearTimeout(statements.randomizer.timeout);
        if ($(currentStatement.letters.t).length == 0)
            return false;
        this.letterOver($(currentStatement.letters.t[Math.floor(Math.random() * currentStatement.letters.t.length)]).parent());
        statements.randomizer.timeout = setTimeout(function() {
            that.letterRandomizer();
        }, statements.randomizer.time);
    };
    this.stopLetterRandomizer = function() {
        clearTimeout(statements.randomizer.timeout);
    };
    this.addStatementListeners = function()
    {
        $('.st-title .l', currentStatement.container).bind(device.over, function() {
            that.letterOver($(this));
        });
        $('.st-desc .w', currentStatement.container).bind(device.over, function() {
            that.descLetterOver($(this));
        });
    };
    this.letterOver = function(letter)
    {
        if (shifting || currentStatement == null)
            return false;
        clearTimeout($('.l-c', letter).data('letterTimeout'));
        $('.l-c', letter).smartAnimate(sides[parseInt($('.ndx', letter).text())].o, 300);
        var timeout = $('.l-c', letter).data({
            letterTimeout: setTimeout(function() {
                that.letterOut(letter);
            }, letterTime.timeout)
        });
    };
    this.descLetterOver = function(letter)
    {
        if (shifting || currentStatement == null)
            return false;
        clearTimeout($('.w-m', letter).data('letterTimeout'));
        $('.w-m', letter).smartAnimate(sides[sideIndexGroup].o, 300);
        var timeout = $('.w-m', letter).data({
            letterTimeout: setTimeout(function() {
                that.descLetterOut(letter);
            }, letterTime.timeout)
        });
    };
    this.letterOut = function(letter) {
        $('.l-c', letter).smartAnimate(show, 300);
    };
    this.descLetterOut = function(letter) {
        $('.w-m', letter).smartAnimate(show, 300);
    };
    this.parseStatement = function(id)
    {
        statement = statements.statement[id];
        if (statement.parsed)
            return;
        var i, il;
        tmp = [];
        tmp.totalTitleWidth = 0;
        tmp.statement = {
            titleRaw: '',
            descriptionRaw: '',
            titleWidths: [],
            descriptionWidths: []
        };
        for (i = 0, il = statement.title.length; i < il; i++)
        {
            tmp.data = this.parseWord(statement.title[i], letters.title, (i == statement.title.length - 1));
            tmp.statement.titleRaw += tmp.data.raw;
            tmp.statement.titleWidths.push(tmp.data.width);
            if (tmp.data.width + letters.title.spaceWidth > statement.minWidth)
                statement.minWidth = tmp.data.width + letters.title.spaceWidth;
            tmp.totalTitleWidth += tmp.data.width;
        }
        for (i = 0, il = statement.description.length; i < il; i++)
        {
            tmp.data = this.parseWord(statement.description[i], letters.description, (i == statement.description.length - 1), true);
            tmp.statement.descriptionRaw += tmp.data.raw;
            tmp.statement.descriptionWidths.push(tmp.data.width);
        }
        statement.titleContent = $('<div>' + tmp.statement.titleRaw + '</div>');
        statement.titleWidths = tmp.statement.titleWidths;
        statement.letters.t = shuffle($('.l-c', statement.titleContent));
        statement.titleCount = statement.letters.t.length;
        statement.descriptionContent = $('<div class="st-content">' + tmp.statement.descriptionRaw + '</div>');
        statement.descriptionWidths = tmp.statement.descriptionWidths;
        statement.letters.d = shuffle($('.w-m', statement.descriptionContent));
        statement.descriptionCount = statement.letters.d.length;
        $(statement.descriptionContent).css({
            maxWidth: tmp.totalTitleWidth + 'px'
        });
        $('#container').css({
            minWidth: statement.minWidth + 'px'
        });
        $('.statement', statement.container).css({
            minWidth: statement.minWidth + 'px'
        });
        statement.parsed = true;
    };
    this.parseWord = function(l, letters, last, grouped)
    {
        tmp.word = {
            raw: '<div class="w">',
            innerRaw: '',
            width: 0
        };
        tmp.item = [];
        for (var i = 0, il = l.length; i < il; i++)
        {
            if (letters.a[l.charAt(i)])
            {
                tmp.item = this.createLetter(letters.a[l.charAt(i)], letters, grouped, sideIndexGroup);
                tmp.word.innerRaw += tmp.item.raw;
                tmp.word.width += tmp.item.width;
            }
        }
        side = sides[sideIndexGroup];
        tmp.word.raw = '<div class="w" style="width:' + tmp.word.width + 'px; height:' + (letters.letterHeight * 0.5) + 'px; margin:0 ' + (letters.spaceWidth * 0.5) + 'px;">' + (grouped ? '<div class="w-m" style="' + side.d + '">' : '') + tmp.word.innerRaw + (grouped ? '</div>' : '');
        tmp.word.raw += '</div>';
        return tmp.word;
    };
    this.createLetter = function(item, letters, grouped, sideIndexGroup)
    {
        if (grouped)
        {
            return {
                raw: '<div class="l" style="width:' + item.width + 'px; height:' + (item.height) + 'px; background-image:url(' + (letters.prefix + item.img + letters.format) + '); background-size:' + item.width + 'px ' + item.height + 'px"></div>',
                width: item.width
            };
        } else {
            sideIndex = Math.floor(Math.random() * sides.length);
            side = sides[sideIndex];
            return {
                raw: '<div class="l" style="width:' + item.width + 'px; height:' + (item.height * 0.5) + 'px;"><div class="l-c" style="' + side.d + ';"><span class="ndx">' + sideIndex + '</span><div class="l-i l-i-b l-i-b-' + side.s + '" style="background-image:url(' + (letters.prefix + item.img + letters.format) + '); background-size:' + item.width + 'px ' + item.height + 'px; background-position:0 -' + (item.height * 0.5) + 'px"></div><div class="l-i" style="background-image:url(' + (letters.prefix + item.img + letters.format) + '); background-size:' + item.width + 'px ' + item.height + 'px"></div></div></div>',
                width: item.width
            };
        }
    };
};
function ScreenSkills(app, manager, display)
{
    var that = this, app = app, manager = manager, display = display, ctm = null, cssSolar = false, loadStatus = {
        loaded: false,
        loading: false
    }, status = {
        adding: false,
        removing: false,
        enabled: false
    }, map = {
        maxWidth: 0,
        minHeight: 300,
        maxHeight: 700,
        availableWidth: 0,
        realWidth: 0,
        dimension: []
    }, solar = {
        maxWidth: 0,
        img: {
            origWidth: 0,
            origHeight: 0
        }
    }, solarInfo = {
        offsetLeft: 0,
        offsetTop: 0,
        planetWidth: 0,
        planetHeight: 0
    }, linkIndex = 0, mapHeight = 0, primaryView = '';
    currentView = 'solar', planetHoverDisabled = false, tmp = [], planets = {
        timeout: null,
        time: 100
    }, dist = {}, planetAnimator = {
        interval: null,
        time: 20,
        planets: []
    }, closeTimeout = null, data = {
        display: {
            solar: $('<div></div>'),
            info: $('<div></div>'),
            planet: $('<div></div>'),
            option: ''
        },
        template: {
            solar: $('#map-templates .tmp-solar', display),
            info: $('#map-templates .tmp-info', display),
            option: $('#map-templates .tmp-option', display).html(),
            planet: $('#map-templates .tmp-planet', display)
        }
    };
    var imageList = {
        string: ''
    }, preloadImgs = [{
        std: '/images/screens/skills/map/title.png',
        retina: '/images/screens/skills/map/title@2x.png'
    }, {
        std: '/images/screens/skills/map/planetview/planet-ring.png',
        retina: '/images/screens/skills/map/planetview/planet-ring@2x.png'
    }, {
        std: '/images/screens/skills/map/planets/sun/sun-glow.png',
        retina: '/images/screens/skills/map/planets/sun/sun-glow@2x.png'
    }, {
        std: '/images/screens/skills/map/info-marker.png',
        retina: '/images/screens/skills/map/info-marker@2x.png'
    }, {
        std: '/images/screens/skills/map/planets/sun/small-planet.png',
        retina: '/images/screens/skills/map/planets/sun/small-planet@2x.png'
    }, {
        std: '/images/screens/skills/map/planet-ring.png',
        retina: '/images/screens/skills/map/planet-ring@2x.png'
    }, {
        std: '/images/ui/map/buttons/button-blue/button-left.png',
        retina: '/images/ui/map/buttons/button-blue/button-left@2x.png'
    }, {
        std: '/images/ui/map/buttons/button-blue/button-right.png',
        retina: '/images/ui/map/buttons/button-blue/button-right@2x.png'
    }, {
        std: '/images/ui/map/buttons/button-blue/button-bar.png',
        retina: '/images/ui/map/buttons/button-blue/button-bar@2x.png'
    }, {
        std: '/images/ui/map/buttons/button-white/button-left.png',
        retina: '/images/ui/map/buttons/button-white/button-left@2x.png'
    }, {
        std: '/images/ui/map/buttons/button-white/button-right.png',
        retina: '/images/ui/map/buttons/button-white/button-right@2x.png'
    }, {
        std: '/images/ui/map/buttons/button-white/button-bar.png',
        retina: '/images/ui/map/buttons/button-white/button-bar@2x.png'
    }
    ];
    this.init = function()
    {
        this.checkSupport();
        this.compileImages();
        this.addPlanets();
        this.prepareDisplay();
        this.addListeners();
    };
    this.checkSupport = function()
    {
        if ((device.animations && device.transforms && device.transforms3d && Modernizr.csstransformspreserve3d))
        {
            $(display).addClass('cssanims');
            cssSolar = true;
        };
    };
    this.compileImages = function()
    {
        this.compileImages = function()
        {
            imageList.string = '';
            for (var i = 0, il = preloadImgs.length; i < il; i++) {
                imageList.string += '<img src="' + (device.retina ? preloadImgs[i].retina : preloadImgs[i].std) + '" />'
            };
        };
    };
    this.addPlanets = function()
    {
        $('#map-data .sec', display).each(function(index)
        {
            tmp = [];
            tmp.data = {
                title: $('.s-title', this).html(),
                info: $('.s-info', this).html(),
                pos: $('.s-pos', this).text(),
                size: Number($('.s-size', this).text()),
                time: $('.s-orbit-time', this).text(),
                className: $('.s-class', this).text(),
                planet: {
                    texture: $('.s-texture', this).text(),
                    std: $('.s-planet .1x', this).text(),
                    retina: $('.s-planet .2x', this).text()
                }
            };
            tmp.solar = data.template.solar.clone();
            $('.orbit', tmp.solar).attr('id', 'planet-' + tmp.data.className);
            $('.pos-block', tmp.solar).addClass('view-planet-' + tmp.data.className);
            $('.planet-title', tmp.solar).html(tmp.data.title);
            $('.pos', tmp.solar).css({
                left: tmp.data.pos
            });
            $('.planetoid', tmp.solar).css($.extend(parseInt(tmp.data.pos, 10) < 50 ? {
                animationName: cssSolar ? 'planetshadowopp': ''
            } : {}, {
                width: tmp.data.size + 'px',
                height: tmp.data.size + 'px',
                top: Math.round( - tmp.data.size * 0.5) + 'px',
                left: Math.round( - tmp.data.size * 0.5) + 'px',
                backgroundSize: tmp.data.size + 'px ' + tmp.data.size + 'px',
                backgroundImage: 'url(' + (device.retina ? tmp.data.planet.retina : tmp.data.planet.std) + ')'
            }));
            imageList.string += '<img src="' + (device.retina ? tmp.data.planet.retina : tmp.data.planet.std) + '" />';
            if (!device.transforms3d)
                $('.planetoid', tmp.solar).css({
                    animationName: ''
                });
            $('.pos, .planetoid, .planet, .orbit', tmp.solar).css({
                animationDuration: tmp.data.time
            });
            data.display.solar.append(tmp.solar.children());
            tmp.info = data.template.info.clone();
            $('.planet-element', tmp.info).addClass('planet-' + tmp.data.className);
            $('.planet', tmp.info).addClass(tmp.data.className + '-planet');
            $('.p-title', tmp.info).html(tmp.data.title);
            $('.p-info', tmp.info).html(tmp.data.info);
            $('.planet-spinner', tmp.info).css({
                backgroundImage: 'url(' + tmp.data.planet.texture + ')'
            });
            imageList.string += '<img src="' + tmp.data.planet.texture + '" />';
            data.display.info.append(tmp.info.children());
            data.display.option += data.template.option.replace(/planetclass/g, tmp.data.className).replace(/planettitle/g, tmp.data.title);
            planetAnimator.planets.push({
                id: index,
                time: tmp.data.time,
                angle: 0,
                radius: Math.abs(parseInt($('.s-pos', this).text(), 10)) - 50,
                radian: 0,
                speed: parseInt($('.s-orbit-time', this).text(), 10)
            });
        });
        $('#map-solar-system .solar-system', display).append($(data.display.solar).children());
        $('#map-planet-view #planet-display', display).append($(data.display.info).children());
        $('#map-planets-view #map-planets-display', display).append($(data.display.planet).children());
        $('.nav-planet-options', display).html(data.display.option);
    };
    this.prepareDisplay = function()
    {
        map.maxWidth = 1500;
        solar.img.origWidth = $('.solar-base', display).attr('width');
        solar.img.origHeight = $('.solar-base', display).attr('height');
        solar.maxWidth = solar.img.origWidth * 1.2;
        $('.planet-info', display).hide();
        $('#map-solar-system #solar-display', display).css({
            maxWidth: solar.maxWidth + 'px'
        });
    };
    this.addListeners = function()
    {
        if (!device.touch)
        {
            $('.solar-system .orbit .pos .pos-block', display).bind(device.over, that.planetOver);
            $('.nav-planet-options a', display).hover(that.planetLinkOver, that.planetLinkOut);
            $('.planet-item-display', display).bind(device.over, that.planetItemOver).bind(device.out, that.planetItemOut);
            $('.solar-system .orbit .pos .pos-block', display).clickMonitor('view-planet-', that.viewPlanet);
        } else {
            $('#map-solar-system', display).click(that.checkClosestPlanet);
        };
        $('.nav-planet-options a, #map-planets-view a', display).clickMonitor('view-planet-', that.viewPlanet);
        $('.planet-info .planet-rect', display).bind('click', that.checkInfoClick);
        $('.back-planet', display).bind('click', that.checkPlanetBack);
    };
    this.checkClosestPlanet = function(e, callback)
    {
        var pl = {
            x: 0,
            y: 0,
            dist: 1000
        };
        pl.offsetX = $('#solar-display', this).offset().left;
        pl.offsetY = $('#solar-display', this).offset().top;
        pl.x = e.pageX - pl.offsetX;
        pl.y = e.pageY - pl.offsetY;
        $('.solar-system .planetoid', display).each(function()
        {
            pl.tmpX = ($(this).offset().left + ($(this).width() * 0.5)) - pl.offsetX;
            pl.tmpY = ($(this).offset().top + ($(this).height() * 0.5)) - pl.offsetY;
            pl.tmpDist = that.getDistance({
                x: pl.x,
                y: pl.y
            }, {
                x: pl.tmpX,
                y: pl.tmpY
            });
            if (pl.tmpDist < pl.dist)
            {
                pl.dist = pl.tmpDist;
                pl.item = $(this).closest('.orbit');
            };
        });
        if (pl.dist < 60) {
            if (callback != undefined) {
                callback();
            } else {
                that.viewPlanet(getClassSuffix('view-planet-', $('.pos-block', pl.item).attr('class')));
            }
        };
    };
    this.getDistance = function(point1, point2)
    {
        dist.xs = 0;
        dist.ys = 0;
        dist.xs = point2.x - point1.x;
        dist.xs = dist.xs * dist.xs;
        dist.ys = point2.y - point1.y;
        dist.ys = dist.ys * dist.ys;
        return Math.sqrt(dist.xs + dist.ys);
    };
    this.planetLinkOver = function()
    {
        linkIndex = $(this).parent().index();
        $('.solar-system .orbit:eq(' + linkIndex + ') .pos-block', display).trigger(device.over);
    };
    this.planetLinkOut = function() {
        that.planetOut();
    };
    this.planetOver = function(e)
    {
        if (planetHoverDisabled)
            return false;
        var item = $(this).closest('.orbit');
        $('.planet-info .planet-class', display).text(getClassSuffix('view-planet-', $(this).attr('class')));
        $('.orbit', display).removeClass('planet-paused');
        $(item).addClass('planet-paused');
        solarInfo.planet = $(item);
        solarInfo.offsetLeft = $(this).offset().left + ($(this).width() * 0.5) - $('#map-solar-system #solar-display', display).offset().left;
        solarInfo.offsetTop = $(this).offset().top + ($(this).height() * 0.5) - $('#map-solar-system #solar-display', display).offset().top;
        solarInfo.planetWidth = $(this).width() * 1.5;
        solarInfo.direction = solarInfo.offsetLeft + ($('.planetoid', item).width() * 0.5) > (solarInfo.planetWidth * 0.5);
        solarInfo.planetHeight = $(this).height() * 1.5;
        $('.planet-info .planet-rect', display).css({
            width: solarInfo.planetWidth,
            height: solarInfo.planetHeight,
            top: - (solarInfo.planetHeight * 0.5),
            left: - (solarInfo.planetWidth * 0.5)
        });
        $('.planet-info .info-title', display).text($('.planet-data .planet-title', item).text());
        $('.planet-info', display).css({
            top: solarInfo.offsetTop,
            left: solarInfo.offsetLeft
        });
        $('#map-solar-system .planet-rect', display).bind(device.out, function() {
            that.planetOut();
        });
        $('.planet-info', display).show();
        $('.planet-info .info-display', display).css({
            top: - ($('.planet-info .info-display', display).height())
        });
        $('.planet-info ', display).smartAnimate({
            opacity: 0,
            transform: 'translateZ(3000px) scale(0.9) rotate(' + (solarInfo.direction ? 40 : - 40) + 'deg)'
        }, 0, function()
        {
            $('.planet-info ', display).smartAnimate({
                opacity: 1,
                transform: 'translateZ(3000px) scale(1) rotate(0deg)'
            }, 300);
        });
    };
    this.planetOut = function()
    {
        $('#map-solar-system .planet-rect', display).unbind(device.out);
        $('.planet-info', display).smartAnimate({
            opacity: 0
        }, 0, function()
        {
            $('.planet-info', display).hide();
        });
        if (solarInfo.planet != null)
            solarInfo.planet.removeClass('planet-paused');
    };
    this.planetItemOver = function() {
        $('.planet-item-thumb', this).show().smartAnimate({
            opacity: 0,
            transform: 'rotate(60deg)'
        }, 0, function(tgt) {
            $(tgt).smartAnimate({
                opacity: 1,
                transform: 'rotate(0deg)'
            }, 300);
        });
    };
    this.planetItemOut = function() {
        $('.planet-item-thumb', this).smartAnimate({
            opacity: 0,
            transform: 'rotate(60deg)'
        }, 300);
    };
    this.checkInfoClick = function() {
        that.viewPlanet($(this).closest('.planet-info').find('.planet-class').text());
    };
    this.viewPlanet = function(value) {
        if ($('#map-planet-view .planet-' + value, display).length > 0) {
            trk('Skills', 'Planet viewed', value);
            that.setViewPlanet(value);
        };
        return false;
    };
    this.checkPlanetBack = function()
    {
        trk('Skills', 'Planet closed', '');
        switch (primaryView)
        {
        case'solar':
            that.setViewSolar();
            break;
        default:
            break;
        };
        return false;
    };
    this.loadAssets = function()
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        $('.sec-loader').show().find('.loading-bar-gauge').css({
            width: '0%'
        });
        $('img', $('<div>' + imageList.string + '</div>')).loadImages(function() {
            loadStatus.loaded = true;
            if (!status.removing) {
                that.beginDisplay();
                $('.sec-loader').hide();
            }
        }, 10000);
    };
    this.beginDisplay = function()
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        status.enabled = true;
        clearTimeout(closeTimeout);
        clearTimeout(map.openTimeout);
        clearTimeout(map.logoTimeout);
        $('#container').css({
            minWidth: $(display).css('min-width')
        });
        $('#map-display', display).show();
        $('#map-solar-system', display).show().css({
            visibility: 'hidden'
        });
        $('#map-planets-view', display).hide();
        $('#map-planet-view', display).hide();
        $('#map-nav-top .nav-shift', display).smartAnimate(getTransition(0, '-200px'), 0);
        $('#map-nav-bottom .nav-shift', display).smartAnimate(getTransition(0, '200px'), 0);
        that.beginView();
        $(window).trigger('resize.app');
    };
    this.beginView = function()
    {
        that.setViewSolar();
    };
    that.beginPlanetAnimation = function()
    {
        if (cssSolar)
            return false;
        clearInterval(planetAnimator.interval);
        planetAnimator.interval = setInterval(that.updatePlanetPositions, planetAnimator.time);
    };
    this.stopPlanetAnimation = function()
    {
        clearInterval(planetAnimator.interval);
    };
    that.updatePlanetPositions = function()
    {
        $(planetAnimator.planets).each(function(id)
        {
            this.radian = that.deg2rad(this.angle);
            this.planet = $('.solar-system .orbit:eq(' + id + ')', display);
            if ($(this.planet).hasClass('planet-paused'))
            {} else {
                this.x = 50 + this.radius * Math.cos(this.radian);
                this.y = ((($('.solar-system', display).height()) / 100) * this.radius) * Math.sin(this.radian);
                this.angle += (150 - this.speed) * 0.0046;
                this.angle%=360;
                $('.pos', this.planet).css({
                    left: this.x + '%',
                    top: this.y + 'px'
                });
            }
        });
    };
    this.deg2rad = function(degree) {
        return degree * (Math.PI / 180);
    };
    this.setViewSolar = function()
    {
        planetHoverDisabled = true;
        primaryView = 'solar';
        currentView = 'solar';
        $('#map-display', display).removeClass('planet-view');
        $('#map-planet-view .planet-element .planet-abs').smartAnimate({
            opacity: 0
        }, 0);
        $('#map-overlays-inner', display).smartAnimate($.extend(getTransition(0, '100px'), {
            opacity: 0
        }), 200, function()
        {
            $('#map-nav-top .nav-shift', display).smartAnimate(getTransition(0, 0), 300);
            $('#map-nav-bottom .nav-shift', display).smartAnimate(getTransition(0, 0), 300);
            $('#map-planet-view', display).hide();
            $('#map-overlays-inner', display).smartAnimate($.extend(getTransition(0, 0), {
                opacity: 1
            }), 100);
            $('#map-solar-system', display).show().css({
                visibility: 'visible'
            }).smartAnimate({
                opacity: 1
            }, 0);
            $('#map-solar-system #solar-display', display).smartAnimate($.extend({
                transform: 'scale(0.1)'
            }, {
                opacity: 0
            }), 0);
            $('#map-solar-system #map-title-display', display).smartAnimate(getTransition(0, '100%'), 0, function()
            {
                $('#map-solar-system #map-title-display', display).smartAnimate(getTransition(0, '0%'), 300, function()
                {
                    that.beginPlanetAnimation();
                    $('#map-solar-system #solar-display', display).smartAnimate($.extend({
                        transform: 'scale(1)'
                    }, {
                        opacity: 1
                    }), 500, function() {
                        planetHoverDisabled = false;
                    });
                    $(window).trigger('resize.app');
                });
            });
            $(window).trigger('resize.app');
        });
        $('html, body').animate({
            scrollTop: 1
        }, 300);
        $(window).trigger('resize.app');
    };
    this.setViewPlanet = function(planet)
    {
        currentView = 'planet';
        $('#map-display', display).addClass('planet-view');
        $('#map-planet-view .planet-element .planet-abs').smartAnimate({
            opacity: 0
        }, 0);
        $('#map-overlays-inner', display).smartAnimate($.extend(getTransition(0, '100px'), {
            opacity: 0
        }), 200, function()
        {
            that.stopPlanetAnimation();
            $('#map-nav-top .nav-shift', display).smartAnimate(getTransition(0, 0), 300);
            $('#map-nav-bottom .nav-shift', display).smartAnimate(getTransition(0, 0), 300);
            $('#map-planet-view .planet-element').hide();
            $('#map-planet-view .planet-' + planet, display).show();
            $('#map-solar-system', display).hide();
            $('#map-planets-view', display).hide();
            $('#map-overlays-inner', display).smartAnimate($.extend(getTransition(0, 0), {
                opacity: 1
            }), 300);
            $('#map-planet-view', display).show();
            $('#map-planet-view .planet-' + planet + ' .planet-abs', display).smartAnimate({
                opacity: 0
            }, 0);
            $('#map-planet-view', display).css({
                visibility: 'visible'
            }).smartAnimate({
                opacity: 0
            }, 0, function()
            {
                $(window).trigger('resize.app');
                $('#map-planet-view', display).smartAnimate({
                    opacity: 1
                }, 700);
                $('#map-planet-view .planet-abs', display).smartAnimate({
                    opacity: 0
                }, device.mobile ? 750 : 400, function()
                {
                    $('#map-planet-view .planet-abs', display).smartAnimate({
                        opacity: 1
                    }, 500);
                });
            });
        });
        $('html, body').animate({
            scrollTop: 1
        }, 300);
        $(window).trigger('resize.app');
    };
    this.updateDimensions = function()
    {
        if (currentView == 'solar')
            this.updateSolarView();
        map.availableWidth = $(display).width() - 40;
        map.realWidth = Math.min(map.maxWidth, map.availableWidth);
        $('#map', display).width(map.realWidth).css({
            left: Math.floor( - map.realWidth * 0.5) + 'px'
        });
        mapHeight = Math.max($('#map-overlays', display).outerHeight(true) + $('#map-nav-top', display).outerHeight(true), Math.min(map.maxHeight, $(window).height() - $('#header').outerHeight() - 100));
        $('#map, #map-base', display).height(mapHeight);
        $('#map-overlays', display).css({
            top: $('#map-nav-top', display).outerHeight(true)
        });
        $('#map-overlays-inner', display).css({
            top: 0,
            paddingBottom: currentView == 'planets' ? '0px': $('#map-nav-bottom', display).outerHeight(true) + 20
        });
        map.dimension.height = Math.max($(window).height(), mapHeight + $('#header').outerHeight(true) + 100);
        map.dimension.center =- mapHeight * 0.5;
        $('#map', display).css({
            top: map.dimension.center + 'px'
        });
        $(display).css({
            height: map.dimension.height + 'px'
        });
        if (currentView == 'solar')
            this.updateSolarView();
        if (currentView == 'planets')
            this.updatePlanetsView();
        $('#map-planet-view', display).css({
            top: ((mapHeight) - (($('#map-nav-top', display).outerHeight(true) + $('#map-overlays-inner', display).outerHeight(true)) - $('#map-overlays-inner', display).height())) * 0.5 - ($('#map-planet-view', display).height() * 0.5)
        });
    };
    this.updateSolarView = function()
    {
        solar.img.newWidth = $('#map-solar-system #solar-display', display).width();
        solar.img.ratio = solar.img.newWidth / solar.img.origWidth;
        solar.img.newHeight = Math.round(solar.img.origHeight * solar.img.ratio);
        $('.solar-base', display).css({
            width: solar.img.newWidth,
            height: '100%'
        });
        $('#map-solar-system', display).height(solar.img.newHeight);
        $('#map-solar-system', display).css({
            top: ((mapHeight) - (($('#map-nav-top', display).outerHeight(true) + $('#map-overlays-inner', display).outerHeight(true)) - $('#map-overlays-inner', display).height())) * 0.5 - (solar.img.newHeight * 0.5)
        });
    };
    this.updatePlanetsView = function()
    {
        $('#map-planets-view', display).css({
            top: (mapHeight - (($('#map-nav-top', display).outerHeight(true) + $('#map-overlays-inner', display).outerHeight(true)) - $('#map-overlays-inner', display).height())) * 0.5 - ($('#map-planets-view', display).height() * 0.5)
        });
    };
    this.removeDisplay = function(callback)
    {
        if (currentView == 'solar')
        {
            $('#map-solar-system #solar-display', display).smartAnimate($.extend({
                transform: 'scale(0.1)'
            }, {
                opacity: 0
            }), 300);
            $('#map-nav-top .nav-shift', display).smartAnimate(getTransition(0, '-200px'), 300);
            $('#map-nav-bottom .nav-shift', display).smartAnimate(getTransition(0, '200px'), 300);
            $('#map-solar-system #map-title-display', display).smartAnimate(getTransition(0, '120%'), 300, function()
            {});
            clearTimeout(closeTimeout);
            closeTimeout = setTimeout(function() {
                callback();
            }, 300);
        } else {
            callback();
        };
    };
    this.add = function() {
        manager.setBackgroundColor('#333333');
        status.adding = true;
        if (!loadStatus.loaded) {
            this.loadAssets();
        } else {
            this.beginDisplay();
        }
    };
    this.remove = function(callback) {
        this.stopPlanetAnimation();
        status.enabled = false;
        status.removing = true;
        this.removeDisplay(callback);
    };
    this.readLinkData = function(data) {};
    this.init();
};
function ScreenAbout(app, manager, display)
{
    var that = this, app = app, manager = manager, display = display, loadStatus = {
        loaded: false,
        loading: false
    }, status = {
        adding: false,
        removing: false,
        enabled: false
    }, displayHeight = 0, head;
    var imageList = {
        string: ''
    };
    var xmlPath = '/xml/about.xml', json;
    this.currentDisplay = 'head';
    this.init = function()
    {
        head = new HeadSpin($('#head-display', display), display, that, imageList);
        anatomy = new Anatomy($('#anatomy-display', display), display, that, imageList);
    };
    this.loadAssets = function()
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        $('.sec-loader').show().find('.loading-bar-gauge').css({
            width: '0%'
        });
        $.ajax({
            type: "GET",
            url: xmlPath,
            dataType: "xml",
            complete: function(data)
            {
                json = $.xmlToJSON(data.responseXML);
                head.init(json);
                anatomy.init(json);
                $('img', $('<div>' + imageList.string + '</div>')).loadImages(function() {
                    loadStatus.loaded = true;
                    if (!status.removing) {
                        $('.sec-loader').hide();
                        that.beginDisplay();
                    }
                }, 5000);
            }
        });
    };
    this.beginDisplay = function()
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        this.currentDisplay = 'head';
        status.enabled = true;
        head.startHead();
        anatomy.hide();
        $('#container').css({
            minWidth: $(display).css('min-width')
        });
        $(window).trigger('resize.app');
    };
    this.removeDisplay = function(callback)
    {
        switch (this.currentDisplay)
        {
        case'head':
            head.removeDisplay(callback);
            break;
        case'anatomy':
            anatomy.removeDisplay(callback);
            break;
        default:
            break;
        }
    };
    this.beginAnatomy = function()
    {
        this.currentDisplay = 'anatomy';
        anatomy.startAnatomy();
        $(window).trigger('resize.app');
    };
    this.updateDimensions = function()
    {
        head.updateDimensions();
        anatomy.updateDimensions();
        switch (this.currentDisplay)
        {
        case'head':
            displayHeight = head.dimensions.height;
            break;
        case'anatomy':
            displayHeight = anatomy.dimensions.height;
            break;
        };
        $(display).css({
            height: Math.max($(window).height(), displayHeight + $('#header').outerHeight(true) + 150)
        });
    };
    this.add = function() {
        manager.setBackgroundColor('#e9a1b9');
        status.adding = true;
        if (!loadStatus.loaded) {
            this.loadAssets();
        } else {
            this.beginDisplay();
        }
    };
    this.remove = function(callback) {
        head.stopHead();
        status.enabled = false;
        status.removing = true;
        this.removeDisplay(callback);
    };
    this.readLinkData = function(data) {};
    this.init();
};
function HeadSpin(display, screen, topLevel, imageList)
{
    var display = display, screen = screen, that = this, topLevel = topLevel, json, tmp, screenPad = 40, transitions = [], head = {
        overlays: [],
        segments: [],
        segment: {
            segString: ''
        },
        baseString: '',
        compiled: false,
        randomizer: {
            timeout: null,
            time: 2000
        }
    }, dm = {
        availableWidth: 0,
        availableHeight: 0
    }, headEnabled = false, headStarted = false, timeouts = {
        openTimeout: null
    }, retinaEnabled, exploreMode = false;
    this.imageList = imageList;
    this.dimensions = dm;
    this.init = function(data)
    {
        json = data;
        this.compileData();
        this.createBase();
        this.createOverlays();
        this.createSegments();
        this.addListeners();
    };
    this.compileData = function()
    {
        retinaEnabled = device.mobile ? false : device.retina ? true : false;
        tmp = json.head[0];
        head = $.extend(head, {
            numSegments: Number(tmp.segment.length),
            baseWidth: Number(tmp.basewidth),
            baseHeight: Number(tmp.baseheight),
            largeWidth: Number(tmp.largeminwidth),
            path: (retinaEnabled ? tmp.retinaprefix : tmp.prefix),
            minWidth: Number(tmp.minwidth),
            maxWidth: (tmp.maxwidth),
            minHeight: Number(tmp.minheight),
            maxHeight: Number(tmp.maxheight)
        });
        head.compiled = true;
    };
    this.createBase = function()
    {
        that.imageList.string += '<img src="' + head.path + json.head[0].base[0].src + '" />';
        head.baseString = '<div class="head-base"><div class="head-base-overlay"><img src="' + head.path + json.head[0].base[0].src + '" /></div></div>';
        head.baseString += '';
        $('#head-spin #head-left #head-left-shift, #head-spin #head-right #head-right-shift', display).append($(head.baseString));
    };
    this.createSegments = function()
    {
        head.segment.segString = '';
        for (var i = 0, il = head.numSegments; i < il; i++) {
            head.segments.push({
                width: json.head[0].segment[i].width,
                timeout: null
            });
            head.segment.segString += this.createSegment(i);
        }
        $('#head-spin #head-left #head-left-shift, #head-spin #head-right #head-right-shift', display).append($('<div class="head-segments">' + head.segment.segString + '</div>'));
    };
    this.createOverlays = function()
    {
        for (var i = 0, il = json.head[0].overlay.length; i < il; i++) {
            head.overlays.push(head.path + json.head[0].overlay[i].src);
        };
    };
    this.createSegment = function(index)
    {
        tmp = [];
        tmp.o = '<div class="head-seg"><div class="head-seg-overlays">';
        for (var i = 0, il = json.head[0].overlay.length; i < il; i++)
        {
            tmp.item = json.head[0].overlay[i];
            tmp.o += '<img class="h-s-overlay" src="' + head.path + tmp.item.src + '" />';
            that.imageList.string += '<img src="' + head.path + tmp.item.src + '" />';
        };
        tmp.o += '</div><div class="seg-hit" style="width:' + json.head[0].segment[index].hitwidth + ';"></div></div>';
        return tmp.o;
    };
    this.addListeners = function()
    {
        $('#head-spin #head-left .head-seg .seg-hit', display).bind(device.over, that.segmentLeftOver);
        $('#head-spin #head-right .head-seg .seg-hit', display).bind(device.over, that.segmentRightOver);
        $('#head-spin .explore-btn', display).click(function() {
            that.goExplore();
            return false;
        });
    };
    this.resetDisplay = function()
    {
        headStarted = false;
        headEnabled = false;
        exploreMode = false;
        clearTimeout(timeouts.openTimeout);
        for (var i = 0, il = head.segments.length; i < il; i++) {
            clearTimeout(head.segments[i].timeout);
        };
        $('#head-separator', display).show();
        $('#head-explore', display).show();
        $('#head-left #head-left-shift', display).smartAnimate($.extend(getTransition('0%', '0%', '0deg'), {
            opacity: 1
        }), 0);
        $('#head-right #head-right-shift', display).smartAnimate($.extend(getTransition('0%', '0%', '0deg'), {
            opacity: 1
        }), 0);
        $('#head-left .head-base-overlay', display).smartAnimate(getTransition('100%', 0), 0);
        $('#head-right .head-base-overlay', display).smartAnimate(getTransition('-100%', 0), 0);
        $('#head-left .head-segments', display).smartAnimate(getTransition('0%', 0), 0);
        $('#head-right .head-segments', display).smartAnimate(getTransition('0%', 0), 0);
        $('#head-explore .explore-btn', display).smartAnimate(getTransition(0, '-100%'), 0);
        $('.separator-top .separator-shift', display).smartAnimate(getTransition(0, '100%'), 0);
        $('.separator-bottom .separator-shift', display).smartAnimate(getTransition(0, '-100%'), 0);
        this.hideSegments($('#head-left'), true, true);
        this.hideSegments($('#head-right'), false, true);
    };
    this.removeDisplay = function(callback)
    {
        headStarted = false;
        $('.separator-top .separator-shift', display).smartAnimate(getTransition(0, '100%'), 200);
        $('.separator-bottom .separator-shift', display).smartAnimate(getTransition(0, '-100%'), 200);
        $('#head-left .head-base-overlay, #head-left .head-segments', display).smartAnimate(getTransition('100%', 0), 300);
        $('#head-explore .explore-btn', display).smartAnimate(getTransition(0, '-100%'), 200);
        $('#head-right .head-base-overlay, #head-right .head-segments', display).smartAnimate(getTransition('-100%', 0), 300, function()
        {
            callback();
        });
    };
    this.startHead = function()
    {
        $(display).show();
        this.resetDisplay();
        clearTimeout(timeouts.openTimeout);
        setTimeout(function()
        {
            $('.separator-top .separator-shift', display).smartAnimate(getTransition(0, '0%'), 200);
            $('.separator-bottom .separator-shift', display).smartAnimate(getTransition(0, '0%'), 200, function()
            {
                $('#head-left .head-base-overlay', display).smartAnimate(getTransition('0%', 0), 500);
                $('#head-right .head-base-overlay', display).smartAnimate(getTransition('0%', 0), 510, function()
                {
                    $('#head-left .head-base-overlay', display).smartAnimate(getTransition('0%', 0), 300);
                    $('#head-right .head-base-overlay', display).smartAnimate(getTransition('0%', 0), 300, function()
                    {
                        headStarted = true;
                        that.showSegments();
                    });
                });
            });
        }, 100);
    };
    this.stopHead = function()
    {
        this.stopHeadRandomizer();
    };
    this.segmentLeftOver = function() {
        if (!headEnabled)
            return;
        that.flipSegment($(this).closest('.head-seg'), true, false);
    };
    this.segmentRightOver = function() {
        if (!headEnabled)
            return;
        that.flipSegment($(this).closest('.head-seg'), false, false);
    };
    this.flipSegment = function(segment, left, instant, id, rapid)
    {
        if (!headStarted)
            return false;
        $('.head-seg-overlays', segment).smartAnimate(getTransition((left ? (head.segments[$(segment).index()].width) : '-' + (head.segments[$(segment).index()].width)), 0), (instant == true ? 0 : rapid ? 300 : 600), function()
        {
            $('.head-seg-overlays .h-s-overlay', segment).hide();
            $('.head-seg-overlays .h-s-overlay:eq(' + (id != undefined ? id : Math.floor(Math.random() * head.overlays.length)) + ')', segment).show();
            setTimeout(function() {
                $('.head-seg-overlays', segment).smartAnimate(getTransition('0%', 0), rapid ? 200 : 400);
            }, 80);
        });
    };
    this.goExplore = function()
    {
        if (exploreMode)
            return false;
        trk('About', 'Head', 'Explore');
        exploreMode = true;
        headEnabled = false;
        this.stopHeadRandomizer();
        $('#head-explore .explore-btn', display).smartAnimate(getTransition(0, '-100%'), 300);
        this.showSegments(function() {
            topLevel.beginAnatomy();
            that.splitHead();
        });
    };
    this.splitHead = function()
    {
        $('.separator-top .separator-shift', display).smartAnimate(getTransition(0, '100%'), 300);
        $('.separator-bottom .separator-shift', display).smartAnimate(getTransition(0, '-100%'), 300);
        $('#head-left #head-left-shift', display).smartAnimate($.extend(getTransition('-100%', '10%', '-10deg'), {
            opacity: 0
        }), 1000);
        $('#head-right #head-right-shift', display).smartAnimate($.extend(getTransition('100%', '10%', '10deg'), {
            opacity: 0
        }), 1000, function() {
            $(display).hide();
        });
    };
    this.hideSegments = function(side, left, instant)
    {
        $('.head-seg-overlays', side).smartAnimate(getTransition((left ? '100%' : '-100%'), 0), instant ? 0 : 600);
    };
    this.showSegments = function(callback)
    {
        if (!headStarted)
            return false;
        transitions.delay = 0;
        transitions.left = Math.floor(Math.random() * head.overlays.length);
        transitions.right = Math.floor(Math.random() * head.overlays.length);
        for (var i = 0, il = head.segments.length; i < il; i++)
        {
            that.showSegment(i, transitions.left, transitions.right, callback);
        };
    };
    this.showSegment = function(i, leftID, rightID, callback)
    {
        clearTimeout(head.segments[i].timeout);
        head.segments[i].timeout = setTimeout(function()
        {
            that.flipSegment($('#head-left .head-seg:eq(' + i + ')', display), true, (callback != undefined ? false : true), leftID, (callback != undefined ? true : false));
            that.flipSegment($('#head-right .head-seg:eq(' + i + ')', display), false, (callback != undefined ? false : true), rightID, (callback != undefined ? true : false));
            clearTimeout(head.segments[i].timeout);
            head.segments[i].timeout = setTimeout(function()
            {
                if (!headStarted)
                    return false;
                if (i == head.segments.length - 1)
                {
                    if (callback) {
                        callback()
                    } else {
                        headEnabled = true;
                        $('#head-explore .explore-btn', display).smartAnimate(getTransition(0, '0%'), 300);
                        that.headRandomizer();
                    }
                };
            }, (callback != undefined ? 800 : 300));
        }, transitions.delay);
        transitions.delay += 100;
    };
    this.headRandomizer = function()
    {
        clearInterval(head.randomizer.timeout);
        head.randomizer.timeout = setInterval(function()
        {
            while (head.randomizer.index == head.randomizer.previous)
                head.randomizer.index = Math.floor(Math.random() * $('.head-seg', display).length);
            head.randomizer.target = $('.head-seg:eq(' + head.randomizer.index + ')', display);
            that.flipSegment($(head.randomizer.target), $(head.randomizer.target).closest('.head-side').hasClass('side-left'), false);
            head.randomizer.previous = head.randomizer.index;
        }, head.randomizer.time);
    };
    this.stopHeadRandomizer = function() {
        clearInterval(head.randomizer.timeout);
    };
    this.updateDimensions = function()
    {
        if (!head.compiled)
            return false;
        dm.availableWidth = $(screen).width() - screenPad;
        dm.availableHeight = $(window).height() - $('#header').outerHeight() - 150;
        this.setHeadDimension();
        $(display).css({
            minWidth: (dm.width + screenPad) + 'px',
            minHeight: Math.max(dm.availableHeight, dm.height + $('#header').outerHeight() + 150)
        });
        $('#head-spin', display).css({
            width: dm.width + 'px',
            height: dm.height + 'px',
            top: ( - dm.height * 0.5) + 'px',
            left: ( - dm.width * 0.5) + 'px'
        });
        $('#head-left .head-seg', display).height(Math.round(dm.height / head.numSegments)).each(function(i) {
            $('.h-s-overlay', this).css({
                top: ( - Math.round(dm.height / head.numSegments) * i) + 'px'
            });
        });
        $('#head-right .head-seg', display).height(Math.round(dm.height / head.numSegments)).each(function(i) {
            $('.h-s-overlay', this).css({
                top: ( - Math.round(dm.height / head.numSegments) * i) + 'px'
            });
        });
        $('.head-seg-overlays, .head-base-overlay, .head-title-overlay', display).css({
            width: dm.width + 'px',
            height: dm.height + 'px'
        });
    };
    this.setHeadDimension = function()
    {
        dm.width = clamp(dm.availableWidth, head.minWidth, head.maxWidth);
        dm.ratio = dm.width / head.baseWidth;
        dm.height = head.baseHeight * dm.ratio;
        if (dm.height > dm.availableHeight && dm.height >= head.minHeight)
        {
            dm.height = clamp(dm.availableHeight, head.minHeight, head.maxHeight);
            dm.ratio = dm.height / head.baseHeight;
            dm.width = head.baseWidth * dm.ratio;
        };
        dm.width = Math.round(dm.width);
        dm.height = Math.round(dm.height);
    };
};
function Anatomy(display, screen, topLevel, imageList)
{
    var display = display, screen = screen, that = this, topLevel = topLevel, json, tmp = [], screenPad = 40, anatomy = {
        compiled: false,
        section: [],
        view: [],
        columns: 0,
        tmpColumns: 0,
        startPos: {
            x: 0,
            y: 0
        },
        openTimeout: null,
        openFinishedTimeout: null,
        openFinishedTime: 0,
        sectionsEnabled: false,
        hideTimeout: null,
        hideTime: 0,
        currentView: 0
    }, dm = {
        availableWidth: 0,
        availableHeight: 0
    }, targetSection = null, otherSections = null;
    this.currentDisplay = 'sections';
    this.dimensions = dm;
    this.imageList = imageList;
    this.init = function(data)
    {
        json = data.anatomy[0];
        this.compileData();
        this.compileSections();
        this.addListeners();
        anatomy.compiled = true;
    };
    this.compileData = function()
    {
        anatomy = $.extend(anatomy, {
            maxColumns: Number(json.maxcolumns),
            sectionMinSize: Number(json.sectionminsize),
            sectionMaxSize: Number(json.sectionmaxsize),
            maxWidth: Number(json.maxwidth),
            path: (device.retina ? json.retinaprefix : json.prefix)
        });
    };
    this.compileSections = function()
    {
        tmp.string = '';
        for (var i = 0, il = json.section.length; i < il; i++)
        {
            tmp.f = false;
            switch (json.section[i].id)
            {
            case'love':
                tmp.f = true;
                anatomy.view.push({
                    id: i,
                    item: new AnatomyLove(display, $('#an-view-love', display), screen, that, json.section[i], anatomy.path, this.imageList)
                });
                break;
            case'core':
                tmp.f = true;
                anatomy.view.push({
                    id: i,
                    item: new AnatomyCore(display, $('#an-view-core', display), screen, that, json.section[i], anatomy.path, this.imageList)
                });;
                break;
            case'work':
                tmp.f = true;
                anatomy.view.push({
                    id: i,
                    item: new AnatomyWork(display, $('#an-view-work', display), screen, that, json.section[i], anatomy.path, this.imageList)
                });;
                break;
            };
            if (tmp.f)
                anatomy.section.push({
                    id: i,
                    item: new AnatomySection(display, screen, that, json.section[i], json.numsegments, anatomy.path, this.imageList)
                });
        };
        anatomy.totalSections = anatomy.section.length;
    };
    this.addListeners = function()
    {
        $('.an-section-hit', display).bind(device.over, that.sectionOver);
        if (!device.touch)
            $('.an-section-container', display).bind(device.out, function() {
                if (!anatomy.sectionsEnabled)
                    return false;
                    that.deselectOtherSections(99);
                });
        $('.an-examine-hit', display).bind(device.instaClick, function() {
            that.viewSection($(this).closest('.an-section').index());
            return false;
        });
        $('.close-view', display).click(function() {
            that.closeSection();
            return false;
        });
    };
    this.sectionOver = function() {
        that.setActiveSection($(this).closest('.an-section').index());
    };
    this.setActiveSection = function(id)
    {
        if (!anatomy.sectionsEnabled)
            return false;
        targetSection = $('.an-section:eq(' + id + ')', display);
        $(targetSection).data('closed', false);
        this.deselectOtherSections(id);
        $('.an-section-hit', targetSection).hide();
        $('.an-section-display .section-seg .section-seg-overlay', targetSection).each(function(i)
        {
            $(this).smartAnimate(getTransition((i%2 ? '100%' : '-100%'), 0), 300, function()
            {
                if (i == $('.an-section-display .section-seg .section-seg-overlay', targetSection).length - 1)
                {
                    $('.an-examine-hit', targetSection).show();
                };
            });
        });
    };
    this.deselectOtherSections = function(id)
    {
        otherSections = $('.an-section:not(:eq(' + id + '))', display);
        otherSections.each(function()
        {
            if ($(this).data('closed') == true)
            {} else {
                $(this).data('closed', true);
                $('.an-section-hit', this).hide();
                $('.an-examine-hit', this).hide();
                $('.an-section-display .section-seg .section-seg-overlay', this).each(function(i)
                {
                    $(this).smartAnimate(getTransition('0%', 0), 300);
                });
                $('.an-section-hit', this).show();
            }
        });
    };
    this.hideSections = function(callback)
    {
        $('.an-section', display).data('closed', false);
        otherSections = $('.an-section', display);
        anatomy.hideTime = 400;
        otherSections.each(function()
        {
            $('.an-section-hit', this).hide();
            $('.an-examine-hit', this).hide();
            $('.an-section-display .section-seg .section-seg-overlay', this).each(function(i)
            {
                $(this).smartAnimate(getTransition(i%2 ? '-100%' : '100%', 0), anatomy.hideTime);
            });
        });
        clearTimeout(anatomy.hideTimeout);
        anatomy.hideTimeout = setTimeout(function() {
            $('#anatomy-sections', display).hide();
            if (callback)
                callback();
        }, anatomy.hideTime);
    };
    this.showSections = function()
    {
        $('.an-section', display).data('closed', false);
        $('.an-section-hit', display).hide();
        otherSections = $('.an-section', display);
        anatomy.hideTime = 400;
        $('#anatomy-sections', display).show();
        otherSections.each(function()
        {
            $('.an-section-hit', this).hide();
            $('.an-examine-hit', this).hide();
            $('.an-section-display .section-seg .section-seg-overlay', this).each(function(i)
            {
                $(this).smartAnimate(getTransition(i%2 ? '-100%' : '100%', 0), 0, function(tgt)
                {
                    $(tgt).smartAnimate(getTransition('0%', 0), 400);
                });
            });
        });
        clearTimeout(anatomy.hideTimeout);
        anatomy.hideTimeout = setTimeout(function() {
            anatomy.sectionsEnabled = true;
            $('.an-section-hit', display).show();
        }, anatomy.hideTime);
    };
    this.showViews = function(id)
    {
        $('#anatomy-views .anatomy-view', display).hide();
        $('#anatomy-views', display).show();
        $('#anatomy-views-display', display).smartAnimate($.extend(getTransition(0, '300px'), {
            opacity: 0
        }), 0, function()
        {
            $('#anatomy-views-display', display).smartAnimate($.extend(getTransition(0, '0px'), {
                opacity: 1
            }), 300);
        });
    };
    this.hideViews = function(callback)
    {
        $('#anatomy-views-display', display).smartAnimate($.extend(getTransition(0, '300px'), {
            opacity: 0
        }), 300, function() {
            $('#anatomy-views', display).hide();
            if (callback)
                callback();
        });
    };
    that.viewSection = function(id)
    {
        trk('About', 'Anatomy', 'View section ' + id);
        anatomy.sectionsEnabled = false;
        this.hideSections();
        this.showViews(id);
        this.currentDisplay = 'views';
        $('.anatomy-view', display).hide();
        anatomy.view[id].item.add();
        anatomy.currentView = id;
        $('html, body').animate({
            scrollTop: 1
        }, 300);
        $(window).trigger('resize.app');
    };
    that.closeSection = function()
    {
        this.showSections();
        this.hideViews();
        trk('About', 'Anatomy', 'Close section ' + anatomy.currentView);
        this.currentDisplay = 'sections';
        anatomy.view[anatomy.currentView].item.removeDisplay();
        $('html, body').animate({
            scrollTop: 1
        }, 300);
        $(window).trigger('resize.app');
    };
    this.resetDisplay = function()
    {
        clearTimeout(anatomy.hideTimeout);
        $('#anatomy-sections', display).show();
        $('.an-section', display).data('closed', true);
        $('#anatomy-views', display).hide();
        $('.an-section-display .section-seg .section-seg-overlay', display).smartAnimate(getTransition('0%', 0), 0);
        $('.an-section-hit, .an-examine-hit', display).hide();
        $('.an-section', display).each(function()
        {
            anatomy.startPos.x = ($('#anatomy-sections', display).width() * 0.5) - $(this).position().left - ($(this).width() * 0.5);
            anatomy.startPos.y = ($('#anatomy-sections', display).height() * 0.5) - $(this).position().top - ($(this).height() * 0.5);
            $('.an-section-display', this).smartAnimate($.extend(getTransition(anatomy.startPos.x + 'px', anatomy.startPos.y + 'px', undefined, 0.5), {
                opacity: 0
            }), 0);
        });
    };
    this.hide = function() {
        $(display).hide();
    };
    this.removeDisplay = function(callback)
    {
        switch (this.currentDisplay)
        {
        case'sections':
            this.hideSections(callback);
            break;
        case'views':
            this.hideViews(callback);
            break;
        default:
            break;
        };
    };
    this.startAnatomy = function()
    {
        this.currentDisplay = 'sections';
        anatomy.sectionsEnabled = true;
        $(display).show();
        this.resetDisplay();
        anatomy.openFinishedTime = 1500;
        clearTimeout(anatomy.openTimeout);
        clearTimeout(anatomy.openFinishedTimeout);
        anatomy.openTimeout = setTimeout(function()
        {
            $('.an-section-display', display).each(function()
            {
                $(this).smartAnimate($.extend(getTransition('0%', '0px', undefined, 1), {
                    opacity: 1
                }), 1000);
            });
        }, 100);
        anatomy.openFinishedTimeout = setTimeout(function()
        {
            $('.an-section-hit', display).show();
        }, anatomy.openFinishedTime);
    };
    this.updateDimensions = function()
    {
        if (!anatomy.compiled)
            return false;
        dm.availableWidth = $(screen).width() - screenPad;
        dm.availableHeight = $(window).height() - $('#header').outerHeight() - 200;
        switch (this.currentDisplay)
        {
        case'sections':
            this.updateDimensionsAsSections();
            break;
        case'views':
            this.updateDimensionsAsViews();
            break;
        default:
            break;
        };
    };
    this.updateDimensionsAsSections = function()
    {
        dm.width = Math.min(dm.availableWidth, parseInt($('#anatomy-sections', display).css('max-width'), 10));
        $('#anatomy-sections', display).css({
            width: dm.width + 'px',
            left: ( - dm.width * 0.5) + 'px'
        });
        this.updateSectionDimensions();
        $('#anatomy-sections', display).css({
            top: - dm.height * 0.5 + 'px'
        });
    };
    this.updateDimensionsAsViews = function()
    {
        dm.width = Math.min(dm.availableWidth, parseInt($('#anatomy-views', display).css('max-width'), 10));
        $('#anatomy-views', display).css({
            width: dm.width + 'px',
            left: ( - dm.width * 0.5) + 'px'
        });
        dm.height = clamp(dm.availableHeight, $('#anatomy-views #anatomy-views-display', display).height(), 900) - 50;
        $('#anatomy-views', display).css({
            top: - $('#anatomy-views #anatomy-views-display', display).height() * 0.5 + 'px'
        });
    };
    this.updateSectionDimensions = function()
    {
        anatomy.columns = this.getNumColumns();
        anatomy.rows = Math.ceil(anatomy.section.length / anatomy.columns);
        dm.height = clamp(dm.availableHeight, anatomy.rows * anatomy.sectionMinSize, 900) - 50;
        anatomy.sectionSize = Math.min(anatomy.sectionMaxSize, Math.min(Math.floor(dm.width / anatomy.columns), (dm.height / anatomy.rows)));
        anatomy.realSectionWidth = Math.floor(dm.width / anatomy.columns);
        anatomy.realSectionHeight = (dm.height / anatomy.rows);
        $('.an-section', display).width(anatomy.realSectionWidth).height(anatomy.realSectionHeight);
        $('.an-section .an-section-container', display).css({
            width: anatomy.sectionSize + 'px',
            height: anatomy.sectionSize + 'px',
            top: Math.round((anatomy.realSectionHeight * 0.5) - (anatomy.sectionSize * 0.5)) + 'px',
            left: Math.round((anatomy.realSectionWidth * 0.5) - (anatomy.sectionSize * 0.5)) + 'px'
        });
        anatomy.segmentSize = Math.round(anatomy.sectionSize / json.numsegments);
        $('.an-section .an-section-container .section-seg', display).height(anatomy.segmentSize);
        $('.an-section .an-section-container .section-seg .section-seg-overlay', display).width(anatomy.sectionSize + 'px').height(anatomy.sectionSize);
        $('.an-section .an-section-container', display).each(function()
        {
            $('.section-seg', this).each(function(i)
            {
                $('.section-seg-overlay img', this).css({
                    top: - (anatomy.segmentSize * i) + 'px'
                });
            });
        });
    };
    this.getNumColumns = function()
    {
        anatomy.tmpColumns = anatomy.maxColumns;
        while (anatomy.tmpColumns * anatomy.sectionMinSize > dm.width && anatomy.tmpColumns > 1) {
            anatomy.tmpColumns--;
        };
        return anatomy.tmpColumns;
    };
};
function AnatomySection(target, screen, topLevel, json, numSegments, path, imageList)
{
    var target = target, screen = screen, that = this, topLevel = topLevel, numSegments = Number(numSegments), json = json, segment = {
        string: '',
        height: 0
    }, path = path, sectionDisplay;
    this.imageList = imageList;
    this.init = function()
    {
        this.createDisplay();
        this.createSectionSegments();
        this.addListeners();
    };
    this.createDisplay = function()
    {
        sectionDisplay = $('#anatomy-templates #section-template', screen).children().clone();
        $('#anatomy-sections', target).append(sectionDisplay);
    };
    this.createSectionSegments = function()
    {
        segment.string = '';
        for (var i = 0, il = numSegments; i < il; i++)
        {
            segment.string += '<div class="section-seg"><div class="section-seg-overlay"><img src="' + path + json.overlay[0].src + '" style="left:' + (i%2 ? '-100' : '100') + '%;" /><img src="' + path + json.base[0].src + '" /></div></div>';
            that.imageList.string += '<img src="' + path + json.overlay[0].src + '"/><img src="' + path + json.base[0].src + '" />';
        }
        $('.an-section-display', sectionDisplay).append(segment.string);
    };
    this.addListeners = function()
    {};
    this.readLinkData = function(data) {};
    this.init();
};
function AnatomyWork(target, display, screen, topLevel, json, path, imageList)
{
    var target = target, display = display, screen = screen, that = this, topLevel = topLevel, json = json, path = path, tmp = [], currentStatement = null;
    numStatements = 0;
    this.display = display;
    this.imageList = imageList;
    this.init = function()
    {
        this.createHands();
        this.createStatements();
        this.addListeners();
    };
    this.createHands = function()
    {
        tmp = [];
        tmp.str = '';
        $('.hand-display', display).css({
            width: json.hands[0].width + 'px',
            height: json.hands[0].height + 'px'
        });
        for (var i = 0, il = json.hands[0].hand.length; i < il; i++)
        {
            tmp.item = json.hands[0].hand[i];
            tmp.str += '<img class="hand-element" src="' + path + tmp.item.src + '" />';
            that.imageList.string += '<img class="hand-element" src="' + path + tmp.item.src + '" />';
        };
        $('.hand-display', display).append($(tmp.str));
        $('.hand-display .hand-element', display).smartAnimate({
            opacity: 0
        }, 0);
        $('.hand-statements .hand-statement', display).hide().smartAnimate(getTransition('-500px', 0), 0);
    };
    this.createStatements = function()
    {
        tmp = [];
        numStatements = $('.an-view-data .sec', display).length;
        $('.an-view-data .sec', display).each(function()
        {
            tmp.element = $('#anatomy-templates #hand-template', screen).children().clone();
            $('.h-title', tmp.element).html($('.s-title', this).html());
            $('.h-info', tmp.element).html($('.s-info', this).html());
            $('.hand-statements', display).append(tmp.element);
        });
    };
    this.addListeners = function()
    {
        $('.previous-statement', display).click(function() {
            trk('About', 'Work', 'Previous statement click');
            that.setStatement(currentStatement - 1);
            return false;
        });
        $('.next-statement', display).click(function() {
            trk('About', 'Next', 'Previous statement click');
            that.setStatement(currentStatement + 1);
            return false;
        });
    };
    this.setStatement = function(id)
    {
        if (currentStatement == null) {
            currentStatement = id;
            this.addStatement(id);
            return false;
        }
        if (id < 0)
            id = numStatements - 1;
        if (id > numStatements - 1)
            id = 0;
        this.hideStatement(currentStatement, function() {
            that.addStatement(id);
        });
        currentStatement = id;
    };
    this.addStatement = function(id)
    {
        $('.hand-display .hand-element:eq(' + id + ')', display).smartAnimate({
            opacity: 1
        }, 0);
        $('.hand-statements .hand-statement:eq(' + id + ')', display).show().smartAnimate(getTransition('-500px', 0), 0, function()
        {
            $('.hand-statements .hand-statement:eq(' + id + ')', display).smartAnimate(getTransition('0px', 0), 500);
            $(window).trigger('resize.app');
        });
    };
    this.hideStatement = function(id, callback)
    {
        $('.hand-statements .hand-statement:eq(' + id + ')', display).smartAnimate(getTransition('-500px', 0), 500, function()
        {
            $('.hand-statements .hand-statement:eq(' + id + ')', display).hide();
            $('.hand-display .hand-element:eq(' + id + ')', display).smartAnimate({
                opacity: 0
            }, 300);
            callback();
        });
    };
    this.add = function()
    {
        $(display).show();
        this.setStatement(0);
    };
    this.removeDisplay = function()
    {};
    this.readLinkData = function(data) {};
    this.init();
};
function AnatomyCore(target, display, screen, topLevel, json)
{
    var target = target, screen = screen, that = this, topLevel = topLevel, json = json;
    this.display = display;
    this.add = function()
    {
        $(display).show();
    };
    this.removeDisplay = function() {};
};
function AnatomyLove(target, display, screen, topLevel, json, path, imageList)
{
    var target = target, display = display, screen = screen, that = this, topLevel = topLevel, json = json, path = path, tmp = [], cells = {
        cell: [],
        numInView: 0,
        slots: []
    };
    currentCell =- 1;
    var autoSlide = {
        timer: null,
        time: 3000
    };
    var titlePrefix = 'I love ';
    this.display = display;
    this.imageList = imageList;
    this.init = function()
    {
        this.addVesselImages();
        this.createCells();
        this.positionCells();
        this.addListeners();
    };
    this.addVesselImages = function()
    {
        if (device.retina)
        {
            that.imageList.string += '<img src="/images/screens/about/anatomy/2x/love/vessel.png" /><img src="/images/screens/about/anatomy/2x/love/vessel-left.png" /><img src="/images/screens/about/anatomy/2x/love/vessel-rightx.png" /><img src="/images/screens/about/anatomy/2xx/love/vessel-left-top.png" /><img src="/images/screens/about/anatomy/2x/love/vessel-right-top.png" />';
        } else {
            that.imageList.string += '<img src="/images/screens/about/anatomy/1x/love/vessel.png" /><img src="/images/screens/about/anatomy/1x/love/vessel-left.png" /><img src="/images/screens/about/anatomy/1x/love/vessel-right.png" /><img src="/images/screens/about/anatomy/1x/love/vessel-left-top.png" /><img src="/images/screens/about/anatomy/2x/love/vessel-right-top.png" />';
        }
    };
    this.addListeners = function()
    {
        $('.next-item', display).click(function() {
            trk('About', 'Love', 'Next item click');
            that.setCenter(currentCell - 1, true);
            return false;
        });
        $('.previous-item', display).click(function() {
            trk('About', 'Love', 'Previous item click');
            that.setCenter(currentCell + 1, true);
            return false;
        });
        $('.cell-el', display).click(function() {
            trk('About', 'Love', 'Click cell ' + cells.cell[$('.cell-id', this).text()].title);
            that.cycleCells(Number($('.cell-id', this).text()), true);
            return false;
        });
    };
    this.createCells = function()
    {
        tmp.cellString = '';
        if ($('.an-view-data .sec', display).length > 0)
        {
            while (cells.numInView < 9)
            {
                $('.an-view-data .sec', display).each(function(i)
                {
                    that.imageList.string += '<img src="' + $(device.retina ? '.s-icon-2x' : '.s-icon-1x', this).text() + '" />';
                    tmp.cellString += '<div class="cell-el"><div class="cell-id">' + cells.numInView + '</div><div class="cell-img" style="background-image:url(' + $(device.retina ? '.s-icon-2x' : '.s-icon-1x', this).text() + '); width:' + json.icons[0].width + 'px; height:' + json.icons[0].height + 'px; top:' + ( - Number(json.icons[0].height) * 0.5) + 'px; left:' + ( - Number(json.icons[0].width) * 0.5) + 'px; background-size:' + json.icons[0].width + 'px ' + json.icons[0].height + 'px;" title="' + $('.s-title', this).text() + '"></div></div>';
                    cells.cell.push({
                        id: cells.numInView,
                        title: $('.s-title', this).text(),
                        timeout: null
                    });
                    cells.numInView++;
                });
            }
        }
        cells.numInView = Math.min(cells.numInView, 9);
        $('.tube-cells .cell-slide', display).append($(tmp.cellString));
    };
    this.positionCells = function()
    {
        tmp.slotIncrement = (100 / (cells.numInView - 1));
        for (var i = 0, il = cells.numInView; i < il; i++) {
            cells.slots.push(Math.round(tmp.slotIncrement * i));
        }
        cells.centerSlot = Math.floor(cells.slots.length / 2);
        this.setCenter(0, false);
    };
    this.beginAutoSlide = function()
    {
        this.autoSlide();
    };
    this.autoSlide = function()
    {
        clearTimeout(autoSlide.timer);
        if ($(display).is(':visible'))
            autoSlide.timer = setTimeout(function() {
                that.setCenter(currentCell - 1, true);
            }, autoSlide.time);
    };
    this.stopAutoSlide = function()
    {
        clearTimeout(autoSlide.timer);
    };
    this.cycleCells = function(targetCell)
    {
        if (Math.abs(targetCell - currentCell) > Math.floor(cells.cell.length * 0.5))
        {
            if ((targetCell - currentCell) < 0) {
                while (currentCell != targetCell)
                    this.setCenter(currentCell + 1, true);
            } else {
                while (currentCell != targetCell)
                    this.setCenter(currentCell - 1, true);
            }
        } else {
            if ((targetCell - currentCell) < 0) {
                while (currentCell != targetCell)
                    this.setCenter(currentCell - 1, true);
            } else {
                while (currentCell != targetCell)
                    this.setCenter(currentCell + 1, true);
            }
        }
    };
    this.setCenter = function(id, animated)
    {
        if (id > cells.cell.length - 1)
            id = 0;
        if (id < 0)
            id = cells.cell.length - 1;
        currentCell = id;
        cells.set = [];
        cells.set = cells.set.concat(cells.cell.slice(0, cells.cell.length), cells.cell.slice(0, cells.cell.length), cells.cell.slice(0, cells.cell.length));
        cells.set = cells.set.slice((cells.cell.length + id) - cells.centerSlot, (cells.cell.length + id) + (cells.slots.length - cells.centerSlot));
        $('.cell-el:eq(' + id + ')', display).addClass('active-cell');
        $('.cell-el:not(:eq(' + id + '))', display).removeClass('active-cell');
        tmp.delay = 0;
        for (var i = 0, il = cells.set.length; i < il; i++)
        {
            that.updateCellPosition(i, tmp.delay, animated);
            tmp.delay += 150;
        }
        $('.love-statement', display).html(titlePrefix + '<span>' + cells.cell[id].title + '</span>');
        that.autoSlide();
    };
    this.updateCellPosition = function(i, delay, animated)
    {
        tmp.diff = Math.abs(Math.abs($('.cell-el:eq(' + cells.set[i].id + ')', display).data('currentPos')) - Math.abs(cells.slots[i]));
        if (isNaN(tmp.diff))
            tmp.diff = 100;
        $('.cell-el:eq(' + cells.set[i].id + ')', display).smartAnimate(getTransition(cells.slots[i] + '%', 0), tmp.diff == 100 ? 0 : animated == true ? 600 + delay : 0);
        $('.cell-el:eq(' + cells.set[i].id + ')', display).data('currentPos', cells.slots[i]);
    };
    this.add = function()
    {
        $(display).show();
        this.beginAutoSlide();
    };
    this.removeDisplay = function() {
        this.stopAutoSlide();
    };
    this.readLinkData = function(data) {};
    this.init();
};
function ScreenWorkPlay(app, manager, display, bgColor)
{
    var that = this, app = app, manager = manager, display = display, bgColor = bgColor, loadStatus = {
        loaded: false,
        loading: false
    }, status = {
        adding: false,
        removing: false,
        enabled: false
    }, dm = {
        availableWidth: 0,
        availableHeight: 0
    }, list = {
        size: 263,
        time: 400,
        closeTime: 0,
        closeTimeout: null
    }, listHeights = [], iScroll = typeof(iScroll) == undefined ? undefined: window.iScroll, contentScroller, scrollView, vdata, tmp = [], listing = [], viewerAssoc = [], viewerListing = [], currentView = 'listing', clicksEnabled = true;
    textTimeout = null, gallery = {
        active: false,
        adjustTimeout: null,
        position: 0,
        image: {
            width: 510,
            height: 370,
            ratio: 0,
            realWidth: 0,
            realHeight: 0,
            div: '',
            item: null
        },
        thumb: {
            width: 110,
            height: 80,
            div: '',
            item: null
        },
        listWidth: 0,
        list: [],
        currentItem: 0,
        forward: true
    }, viewer = {
        currentItem: 0,
        forward: true
    };
    var imageList = {
        string: ''
    }, preloadImgs = [{
        std: '/images/screens/workplay/listview/1x/edges-a.png',
        retina: '/images/screens/workplay/listview/2x/edges-a.png'
    }, {
        std: '/images/screens/workplay/listview/1x/edges-b.png',
        retina: '/images/screens/workplay/listview/2x/edges-b.png'
    }, {
        std: '/images/screens/workplay/listview/1x/inner-border.png',
        retina: '/images/screens/workplay/listview/2x/inner-border.png'
    }, {
        std: '/images/screens/workplay/itemview/1x/edges-a.png',
        retina: '/images/screens/workplay/itemview/2x/edges-a.png'
    }, {
        std: '/images/screens/workplay/itemview/1x/edges-b.png',
        retina: '/images/screens/workplay/itemview/2x/edges-b.png'
    }, {
        std: '/images/screens/workplay/itemview/1x/edges-a2.png',
        retina: '/images/screens/workplay/itemview/2x/edges-a2.png'
    }, {
        std: '/images/screens/workplay/itemview/1x/edges-b2.png',
        retina: '/images/screens/workplay/itemview/2x/edges-b2.png'
    }, {
        std: '/images/screens/workplay/itemview/1x/base.png',
        retina: '/images/screens/workplay/itemview/2x/base.png'
    }
    ];
    this.init = function()
    {
        this.compileImages();
        this.createListing();
        this.addListeners();
        this.addScrollers();
    };
    this.compileImages = function()
    {
        imageList.string = '';
        for (var i = 0, il = preloadImgs.length; i < il; i++) {
            imageList.string += '<img src="' + (device.retina ? preloadImgs[i].retina : preloadImgs[i].std) + '" />'
        };
    };
    this.createListing = function()
    {
        $('.wp-data .sec', display).each(function(i)
        {
            tmp = [];
            if ($('.s-is-info', this).text() == 'true')
            {
                tmp.display = $('.wp-templates .wp-item-info-template', display).children().clone();
            } else {
                tmp.display = $('.wp-templates .wp-item-template', display).children().clone();
                $('.wp-it-thumb-img', tmp.display).attr('src', $('.s-images .s-thumb', this).text());
            };
            $('.wp-item-display', tmp.display).attr('href', $('.s-url', this).text());
            $('.wp-item-display', tmp.display).address();
            $('.wp-it-title', tmp.display).html($('.s-title', this).html());
            $('.wp-it-excerpt', tmp.display).html($('.s-excerpt', this).html());
            $('.wp-it-id', tmp.display).text(i);
            $('.wp-listing .wp-listing-elements', display).append(tmp.display);
            listing.push({
                item: tmp.display,
                images: $('.s-img', this),
                title: $('.s-title', this).html(),
                content: $('.s-content', this).html(),
                timeout: null
            });
            viewerAssoc[$('.s-url', this).text().split('/')[2]] = i;
            if ($('.s-is-info', this).text() != 'true')
            {
                viewerListing.push({
                    item: tmp.display,
                    images: $('.s-img', this),
                    url: $('.s-url', this).text(),
                    title: $('.s-title', this).html(),
                    content: $('.s-content', this).html(),
                    launchURL: $('.s-launch-url', this).text(),
                    timeout: null
                });
            }
        });
        if (iScroll != undefined && device.touch&&!device.mobile)
        {
            scrollView = new Scroller($('.wp-listing-scroll', display), {
                momentum: true,
                vScrollbar: true,
                vScroll: true
            }, this.scrollStart, this.scrollEnd);
        }
    };
    this.scrollStart = function() {
        clicksEnabled = false;
    };
    this.scrollEnd = function() {
        clicksEnabled = true;
    };
    this.addListeners = function()
    {
        $('.wp-listing', display).on(device.over, '.wp-item-go .wp-item-display', that.itemOver).on(device.out, '.wp-item-go .wp-item-display', that.itemOut);
        if (device.touch&&!device.mobile)
            $('.wp-listing .wp-item-go .flp-btn', display).data('disabled', true);
        $('.wp-listing .wp-item-go .flp-btn', display).data({
            outDisabled: true
        });
        $('.wp-listing .wp-item-go .wp-item-display', display).click(function() {
            if (!clicksEnabled)
                return false;
        });
        $('.wp-viewer .close-view', display).click(function() {
            trk('Work and play', 'Portfolio ' + viewerListing[viewer.currentItem].title, 'Close');
            return false;
        });
        $('.wp-viewer', display).on(device.over, '.wp-g-thumb', function() {
            that.galleryThumbOver($(this).index());
        }).on(device.out, '.wp-g-thumb', function() {
            that.galleryThumbOut($(this).index());
        }).on('click', '.wp-g-thumb', function() {
            trk('Work and play', 'Portfolio ' + viewerListing[viewer.currentItem].title, 'Set gallery image');
            that.setGalleryImage($(this).index());
        });
        $('.wp-viewer .g-back', display).click(function() {
            trk('Work and play', 'Portfolio ' + viewerListing[viewer.currentItem].title, 'Previous gallery image');
            that.setGalleryImage(gallery.currentItem - 1);
            return false;
        });
        $('.wp-viewer .g-next', display).click(function() {
            trk('Work and play', 'Portfolio ' + viewerListing[viewer.currentItem].title, 'Next gallery image');
            that.setGalleryImage(gallery.currentItem + 1);
            return false;
        });
        $('.wp-viewer .previous-item', display).address().click(function() {
            trk('Work and play', 'Portfolio ' + viewerListing[viewer.currentItem].title, 'Previous');
        });
        $('.wp-viewer .next-item', display).address().click(function() {
            trk('Work and play', 'Portfolio ' + viewerListing[viewer.currentItem].title, 'Next');
        });
        $('.wp-view-info a', display).click(function() {
            trk('Work and play', 'Portfolio ' + viewerListing[viewer.currentItem].title, 'Launch link ' + $(this).attr('href'))
        });
    };
    this.itemOver = function(e)
    {
        if (clicksEnabled) {
            $('.flp-btn', this).data({
                outDisabled: true
            });
            if (!$(e.target).is('.flp-btn')) {
                $(this).find(".flp-btn").trigger(device.over);
            }
        }
    };
    this.itemOut = function(e)
    {
        if (clicksEnabled) {
            $('.flp-btn', this).data({
                outDisabled: false
            });
            if (!$(e.target).is('.flp-btn')) {
                $(this).find(".flp-btn").trigger(device.out);
            }
        }
    };
    this.addScrollers = function()
    {
        if (!device.mobile)
            contentScroller = new Scroller($('.wp-view-content', display), {});
    };
    this.loadAssets = function(linkData)
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        $('.sec-loader').show().find('.loading-bar-gauge').css({
            width: '0%'
        });
        $('.wp-listing-elements img', display).smartAnimate({
            opacity: 0
        }).loadIndividualImages(function(item) {
            $(item).smartAnimate({
                opacity: 1
            }, 1000);
        });
        $('img', $('<div>' + imageList.string + '</div>')).loadImages(function() {
            loadStatus.loaded = true;
            if (!status.removing) {
                that.beginDisplay(linkData);
                $('.sec-loader').hide();
            }
        }, 10000);
    };
    this.beginDisplay = function(linkData)
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        status.enabled = true;
        currentView = 'listing';
        this.readLinkData(linkData);
        $(window).trigger('resize.app');
        clearTimeout(textTimeout);
        textTimeout = setTimeout(function() {
            $(window).trigger('resize.app');
        }, 500);
    };
    this.resetDisplay = function()
    {
        clearTimeout(list.closeTimeout);
        this.clearListTimeout();
    };
    this.clearListTimeout = function() {
        for (var i = 0, il = listing; i < il; i++) {
            clearTimeout(listing[i].timeout);
        };
    };
    this.addListing = function(reversed)
    {
        if (scrollView)
            scrollView.scrollTo(0, 0, 0, false);
        $('#container').css({
            minWidth: $(display).css('min-width')
        });
        this.resetDisplay();
        currentView = 'listing';
        this.showGrid(reversed);
        $(window).trigger('resize.app');
    };
    this.showGrid = function(reversed)
    {
        $('.wp-listing', display).show();
        $('.wp-viewer', display).hide();
        list.numColumns = this.getNumColumns();
        list.center = ($('.wp-listing', display).width() * 0.5) + $('.wp-listing', display).offset().left;
        list.delay = 0;
        $('.wp-listing .wp-item', display).each(function(i)
        {
            that.showItem($(this), i, list.delay, reversed);
            if ((i + 1)%list.numColumns == 0)
                list.delay += 200;
        });
    };
    this.hideGrid = function(callback)
    {
        list.numColumns = this.getNumColumns();
        list.center = ($('.wp-listing', display).width() * 0.5) + $('.wp-listing', display).offset().left;
        $('.wp-listing .wp-item', display).each(function(i)
        {
            that.hideItem($(this), i, list, false);
        });
        clearTimeout(list.closeTimeout);
        list.closeTimeout = setTimeout(function() {
            callback();
        }, list.time);
    };
    this.readLinkData = function(linkData)
    {
        if (linkData != undefined) {
            if (linkData.length > 1 && viewerAssoc[linkData[1]] != undefined)
            {
                if (currentView == "listing")
                {
                    that.addItemView(viewerAssoc[linkData[1]]);
                } else {
                    this.setViewerItem(viewerAssoc[linkData[1]]);
                }
            } else {
                currentView == "listing" ? this.addListing() : this.closeViewer();
            }
        } else {
            currentView == "listing" ? this.addListing() : this.closeViewer();
        };
    };
    this.addItemView = function(id)
    {
        if (id > viewerListing.length - 1)
            id = 0;
        if (id < 0)
            id = viewerListing.length - 1;
        viewer.currentItem =- 1;
        this.populateViewer(id);
        this.hideGrid(that.showViewer);
    };
    this.setViewerItem = function(id)
    {
        viewer.forward = (viewer.currentItem < id);
        if (id > viewerListing.length - 1)
            id = 0;
        if (id < 0)
            id = viewerListing.length - 1;
        if (viewer.currentItem == id)
            return false;
        $('.wp-view-container', display).smartAnimate(getTransition(viewer.forward ? '-110%' : '110%', 0), 500, function()
        {
            that.populateViewer(id);
            $('.wp-view-container', display).smartAnimate(getTransition(viewer.forward ? '110%' : '-110%', 0), 0, function()
            {
                $('.wp-view-container', display).smartAnimate(getTransition('0%', 0), 600);
                gallery.active = true;
                $(window).trigger('resize.app');
                that.updateGalleryListPositions();
                if (!device.mobile)
                    contentScroller.scrollTo(0, 0);
            });
        });
    };
    this.populateViewer = function(id)
    {
        gallery.active = false;
        vdata = viewerListing[id];
        viewer.currentItem = id;
        $('.wp-numbering .wp-n-a', display).text(id + 1);
        $('.wp-numbering .wp-n-b', display).text(viewerListing.length);
        trk('Work and play', 'Portfolio ' + viewerListing[id].title, 'View');
        $('.wp-viewer .wp-view-title', display).html(vdata.title);
        $('.wp-viewer .wp-view-scroll', display).html(vdata.content);
        $('.wp-viewer .previous-item', display).attr('href', viewerListing[id - 1 < 0 ? viewerListing.length - 1: id - 1].url);
        $('.wp-viewer .next-item', display).attr('href', viewerListing[id + 1 > viewerListing.length - 1 ? 0: id + 1].url);
        if (vdata.launchURL != '')
        {
            $('.wp-launch', display).show().find('.launch-btn').attr('href', vdata.launchURL);
        } else {
            $('.wp-launch', display).hide().find('.launch-btn').attr('href', '#');
        }
        gallery.currentItem =- 1;
        this.populateGallery(vdata.images);
        this.setGalleryImage(0, true);
        $('html, body').animate({
            scrollTop: 1
        }, 300);
    };
    this.populateGallery = function(images)
    {
        $('.wp-viewer .wp-g-img, .wp-viewer .wp-g-list-scroll', display).empty();
        gallery.thumb.div = $('<div></div>');
        gallery.image.div = $('<div></div>');
        gallery.listWidth = 0;
        gallery.list = [];
        $.each(images, function(i)
        {
            gallery.image.item = $('<div class="wp-g-img-item g-item-' + i + '"><img class="img-medium" src="' + $('.medium .src', this).text() + '" alt="' + $('.medium .alt', this).text() + '" title="' + $('.medium .alt', this).text() + '" /><img class="img-large" src="' + $('.large .src', this).text() + '" alt="' + $('.large .alt', this).text() + '" title="' + $('.large .alt', this).text() + '" /></div>');
            gallery.thumb.item = $('<div class="wp-g-thumb" style="width:' + gallery.thumb.width + 'px; height:' + gallery.thumb.height + 'px;" title="View image"><img src="' + $('.thumb .src', this).text() + '" alt="' + $('.thumb .alt', this).text() + '" title="View image" /></div>');
            gallery.image.div.append(gallery.image.item);
            gallery.thumb.div.append(gallery.thumb.item);
            gallery.listWidth += gallery.thumb.width + 1;
            gallery.list.push({
                image: gallery.image.item,
                thumb: gallery.thumb.item
            });
        });
        $('.wp-viewer .wp-g-img', display).append(gallery.image.div.children());
        $('.wp-viewer .wp-g-list-scroll', display).width(Math.max(gallery.listWidth, $('.wp-viewer .wp-g-list-items', display).width())).append(gallery.thumb.div.children());
        $('.wp-viewer .wp-g-img-item', display).smartAnimate(getTransition('100%', 0), 0);
    };
    this.setGalleryImage = function(id, instant)
    {
        if (!gallery.list.length)
            return false;
        if (id < 0)
            id = gallery.list.length - 1;
        id = id%gallery.list.length;
        gallery.forward = id > gallery.currentItem;
        if (id == gallery.currentItem)
            return;
        $('.wp-viewer .wp-g-thumb', display).removeClass('active').css({
            opacity: 0.5
        });
        gallery.list[id].thumb.addClass('active').smartAnimate({
            opacity: 1
        }, instant ? 0 : 200);
        gallery.list[id].image.show().smartAnimate($.extend(getTransition(gallery.forward ? '100%' : '-100%', 0), {
            opacity: 1
        }), 0, function()
        {
            gallery.list[id].image.smartAnimate(getTransition('0%', 0), instant ? 0 : 300);
        });
        $('.wp-viewer .wp-g-img', display).append(gallery.list[id].image);
        if (gallery.currentItem>-1)
        {
            gallery.list[gallery.currentItem].image.smartAnimate({
                opacity: 0.5
            }, 350, function(tgt) {
                $(tgt).hide();
            });
        };
        gallery.currentItem = id;
        this.updateGalleryListPositions();
    };
    this.galleryThumbOver = function(id)
    {
        $('.wp-viewer .wp-g-thumb:eq(' + id + ')', display).addClass('hover').smartAnimate({
            opacity: 1
        }, 200);
        $('.wp-viewer .wp-g-thumb:not(:eq(' + id + '))', display).each(function()
        {
            if (!$(this).hasClass('active'))
                $(this).removeClass('hover').smartAnimate({
                    opacity: 0.5
                }, 0);
        });
    };
    this.galleryThumbOut = function(id)
    {
        $('.wp-viewer .wp-g-thumb:eq(' + id + ')', display).removeClass('hover');
        if (!$('.wp-viewer .wp-g-thumb:eq(' + id + ')', display).hasClass('active')) {
            $('.wp-viewer .wp-g-thumb:eq(' + id + ')', display).smartAnimate({
                opacity: 0.5
            }, 200);
        };
    };
    this.showViewer = function()
    {
        currentView = 'single';
        $('.wp-listing', display).hide();
        $('.wp-viewer', display).show();
        $('.wp-view-display', display).smartAnimate(getTransition(0, ($(window).height() + 60) + 'px'), 0, function()
        {
            $('.wp-view-display', display).smartAnimate(getTransition(0, '0px'), 300);
            $('.wp-view .wp-view-gallery img', display).smartAnimate({
                opacity: 0
            }).loadIndividualImages(function(item) {
                $(item).smartAnimate({
                    opacity: 1
                }, 1000);
            });
            gallery.active = true;
            $(window).trigger('resize.app');
            that.updateGalleryListPositions();
            if (!device.mobile)
                contentScroller.scrollTo(0, 0);
        });
        $(window).trigger('resize.app');
    };
    this.closeViewer = function()
    {
        $('.wp-view-display', display).smartAnimate(getTransition(0, ($(window).height() + 60) - $('.wp-viewer', display).offset().top + 'px'), 400, function()
        {
            that.addListing(true);
        });
    };
    this.showItem = function(item, i, delay, reversed)
    {
        listing[i].x = $(item).offset().left + ($(item).width() * 0.5) - list.center;
        listing[i].y = $(item).offset().top;
        $('.wp-item-display', item).show().smartAnimate($.extend(getTransition(listing[i].x + 'px', reversed ? '-200px' : '200px'), {
            opacity: 0
        }), 0, function()
        {
            clearTimeout(listing[i].timeout);
            listing[i].timeout = setTimeout(function()
            {
                $('.wp-item-display', item).smartAnimate($.extend(getTransition('0px', '0px'), {
                    opacity: 1
                }), list.time);
                $(window).trigger('resize.app');
            }, reversed ? 0 : delay);
        });
    };
    this.hideItem = function(item, i, forward, reversed)
    {
        listing[i].x = $(item).offset().left + ($(item).width() * 0.5) - list.center;
        listing[i].y = $(item).offset().top;
        $('.wp-item-display', item).smartAnimate($.extend(getTransition(listing[i].x + 'px', reversed == true ? '400px' : '-400px'), {
            opacity: 0
        }), list.time, function(tgt) {
            $(tgt).hide();
        });
    };
    this.getNumColumns = function()
    {
        list.columns = 0;
        while ((list.columns + 1) * list.size < $('.wp-listing', display).width())
            list.columns++;
        return list.columns;
    };
    this.updateDimensions = function()
    {
        dm.availableWidth = $(display).width();
        dm.availableHeight = $(window).height() - $('#header').outerHeight() - 80;
        if (currentView == 'listing') {
            this.updateListingDimensions();
        } else {
            this.updateViewerDimensions();
            clearTimeout(gallery.adjustTimeout);
            gallery.adjustTimeout = setTimeout(function() {
                that.updateGalleryListPositions();
            }, 200);
        };
    };
    this.updateListingDimensions = function()
    {
        this.updateListItemDimensions();
        if (scrollView) {
            $('.wp-listing-scroll', display).height(clamp($('.wp-listing .wp-listing-elements', display).height(), 300, dm.availableHeight - 20));
            scrollView.refresh();
        }
        dm.height = clamp(dm.availableHeight, $('.wp-listing .wp-listing-scroll', display).height(), 300);
        $('.wp-listing', display).css({
            left: (dm.availableWidth * 0.5) - ($('.wp-listing', display).width() * 0.5),
            top: - dm.height * 0.5 + 'px'
        });
        $(display).css({
            height: Math.max($(window).height(), dm.height + $('#header').outerHeight(true) + 80)
        });
    };
    this.updateListItemDimensions = function()
    {
        listHeight = [];
        $('.wp-item .wp-item-content', display).each(function() {
            listHeight.push($(this).outerHeight(true));
        });
        $('.wp-item', display).height(Math.max.apply(Math, listHeight));
    };
    this.updateViewerDimensions = function()
    {
        this.updateGalleryDimensions();
        dm.height = clamp(dm.availableHeight, $('.wp-viewer .wp-view-display', display).height(), 300);
        $('.wp-viewer', display).css({
            left: (dm.availableWidth * 0.5) - ($('.wp-viewer', display).width() * 0.5),
            top: - dm.height * 0.5 + 'px'
        });
        $(display).css({
            height: Math.max($(window).height(), dm.height + $('#header').outerHeight(true) + 80)
        });
        $('.wp-viewer .wp-view-content', display).height(Math.round(Math.min(parseInt($('.wp-viewer .wp-view-content', display).css('max-height'), 10), Math.ceil($('.wp-viewer .wp-view-scroll', display).height() / 10) * 10)));
        if (!device.mobile)
            contentScroller.refresh();
    };
    this.updateGalleryDimensions = function()
    {
        $('.wp-viewer .wp-g-list-scroll', display).width(Math.max(gallery.listWidth, $('.wp-viewer .wp-g-list-items', display).width()));
        gallery.image.realWidth = $('.wp-viewer .wp-g-img', display).width();
        gallery.image.ratio = gallery.image.realWidth / gallery.image.width;
        gallery.image.realHeight = gallery.image.height * gallery.image.ratio;
        $('.wp-viewer .wp-g-img', display).css({
            height: gallery.image.realHeight + 'px'
        });
        this.updateGalleryListPositions();
    };
    this.updateGalleryListPositions = function()
    {
        if (!gallery.active ||!gallery.list.length)
            return false;
        gallery.position = clamp(( - gallery.list[gallery.currentItem].thumb.position().left) + ($('.wp-g-list-items', display).width() * 0.5) - (gallery.list[gallery.currentItem].thumb.width() * 0.5), - ($('.wp-g-list-scroll', display).width() - $('.wp-g-list-items', display).width()), 0);
        if ($('.wp-g-list-items', display).width() >= $('.wp-g-list-scroll', display).width())
            gallery.position = 0;
        $('.wp-g-list-scroll', display).smartAnimate(getTransition(gallery.position + 'px', 0), 300);
    };
    this.removeDisplay = function(callback)
    {
        if (currentView == 'listing') {
            this.removeListing(callback);
        } else {
            this.removeViewer(callback);
        };
    };
    this.removeListing = function(callback)
    {
        list.numColumns = this.getNumColumns();
        list.center = ($('.wp-listing', display).width() * 0.5) + $('.wp-listing', display).offset().left;
        list.forward = true;
        $('.wp-listing .wp-item', display).each(function(i)
        {
            that.hideItem($(this), i, list.forward, true);
            if ((i + 1)%list.numColumns == 0) {
                list.forward=!list.forward;
            }
        });
        clearTimeout(list.closeTimeout);
        list.closeTimeout = setTimeout(function() {
            callback();
        }, list.time);
    };
    this.removeViewer = function(callback)
    {
        $('.wp-viewer .wp-view-display', display).smartAnimate(getTransition(0, '200%'), 400, function() {
            callback();
        });
    };
    this.add = function(linkData) {
        manager.setBackgroundColor(bgColor);
        status.adding = true;
        if (!loadStatus.loaded) {
            this.loadAssets(linkData);
        } else {
            this.beginDisplay(linkData);
        }
    };
    this.remove = function(callback) {
        status.enabled = false;
        status.removing = true;
        this.removeDisplay(callback);
    };
    this.init();
};
function ScreenContact(app, manager, display)
{
    var that = this, app = app, manager = manager, display = display, emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, loadStatus = {
        loaded: false,
        loading: false
    }, fields = [], status = {
        adding: false,
        removing: false,
        enabled: false
    }, submitting = false, dimension = {
        height: 0
    }, tmp = [], validated = false;
    var imageList = {
        string: ''
    }, preloadImgs = [{
        std: '/images/screens/contact/dot-edge.png',
        retina: '/images/screens/contact/dot-edge@2x.png'
    }, {
        std: '/images/screens/contact/segments/top-left.png',
        retina: '/images/screens/contact/segments/top-left@2x.png'
    }, {
        std: '/images/screens/contact/segments/top-right.png',
        retina: '/images/screens/contact/segments/top-right@2x.png'
    }, {
        std: '/images/screens/contact/segments/bottom-left.png',
        retina: '/images/screens/contact/segments/bottom-left@2x.png'
    }, {
        std: '/images/screens/contact/segments/bottom-right.png',
        retina: '/images/screens/contact/segments/bottom-right@2x.png'
    }, {
        std: '/images/screens/contact/segments/top-bar.png',
        retina: '/images/screens/contact/segments/top-bar@2x.png'
    }, {
        std: '/images/screens/contact/segments/bottom-bar.png',
        retina: '/images/screens/contact/segments/bottom-bar@2x.png'
    }, {
        std: '/images/screens/contact/segments/left-bar.png',
        retina: '/images/screens/contact/segments/left-bar@2x.png'
    }, {
        std: '/images/screens/contact/segments/right-bar.png',
        retina: '/images/screens/contact/segments/right-bar@2x.png'
    }, {
        std: '/images/screens/contact/separator.png',
        retina: '/images/screens/contact/separator@2x.png'
    }, {
        std: '/images/screens/contact/stamp.png',
        retina: '/images/screens/contact/stamp@2x.png'
    }
    ];
    this.init = function()
    {
        this.compileImages();
        this.setDefaults();
        this.addListeners();
    };
    this.compileImages = function()
    {
        imageList.string = '';
        for (var i = 0, il = preloadImgs.length; i < il; i++) {
            imageList.string += '<img src="' + (device.retina ? preloadImgs[i].retina : preloadImgs[i].std) + '" />'
        };
    };
    this.setDefaults = function()
    {
        $('#name', display).setDefaultText('Your Name');
        $('#email', display).setDefaultText('Your Email address');
        $('#message', display).setDefaultText('Your Message');
        $('.send-btn', display).click(function() {
            that.goSubmit();
            return false;
        });
        $('.sendanother-btn', display).click(function() {
            that.goSendAnother();
            return false;
        });
        $('.email-link', display).attr('href', 'mailto:adam' + '@' + 'adam' + 'hartwig' + '.co.uk').text('adam' + '@' + 'adam' + 'hartwig' + '.co.uk');
    };
    this.addListeners = function()
    {
        fields.push({
            item: $('#name', display),
            validation: 'text'
        });
        fields.push({
            item: $('#email', display),
            validation: 'text'
        });
        fields.push({
            item: $('#message', display),
            validation: 'text'
        });
        $('#name', display).change(function() {
            that.validate(true, this, 'text');
        });
        $('#email', display).change(function() {
            that.validate(true, this, 'email');
        });
        $('#message', display).change(function() {
            that.validate(true, this, 'text');
        });
    };
    this.resetFields = function()
    {};
    this.validate = function(silent, item, validation)
    {
        tmp.validated = this.testValidate(item, validation);
        tmp.inputVal = $(item).val();
        if (tmp.validated)
        {
            $(item).closest('.fm-block').addClass('validated').removeClass('validate-error');
            return true;
        } else {
            $(item).closest('.fm-block').removeClass('validated').addClass('validate-error');
            if (silent)
                if ((tmp.inputVal == $(item).data('defaulttext') || tmp.inputVal == ''))
                    $(item).closest('.fm-block').removeClass('validated').removeClass('validate-error');
            return false;
        };
    };
    this.testValidate = function(item, validation)
    {
        tmp.inputVal = $(item).val();
        if (validation == '')
            return true;
        switch (validation)
        {
        case'email':
            return (emailReg.test(tmp.inputVal));
            break;
        case'text':
            return (!(tmp.inputVal == $(item).data('defaulttext') || tmp.inputVal == ''));
            break;
        default:
            break;
        }
        return true;
    };
    this.resetForm = function()
    {
        $(fields).each(function() {
            $(this.item).val($(this.item).data('defaultval')).trigger('blur');
            that.validate(true, $(this.item), this.validation);
        });
    };
    this.goSendAnother = function()
    {
        $('.postcard-thankyou', display).smartAnimate(getTransition($(window).width() + 'px', 0), 600, function()
        {
            $('.postcard-thankyou', display).hide().smartAnimate(getTransition( - $(window).width() + 'px', 0), 600);
            that.resetForm();
            that.resetDisplay();
            $('.postcard', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
            {
                $('.postcard', display).smartAnimate(getTransition('0px', 0), 600);
                $(window).trigger('resize.app');
            });
        });
    };
    this.goSubmit = function()
    {
        if (submitting)
            return false;
        validated = true;
        $(fields).each(function() {
            tmp.itemValidation = that.validate(false, this.item, this.validation);
            if (!tmp.itemValidation)
                validated = false;
        });
        (!validated) ? $('.validation-error', display).show() : $('.validation-error', display).hide();
        if (!validated)
            return false;
        $('.sending', display).show();
        $('.send-btn', display).hide();
        $('.send-error', display).hide();
        submitting = true;
        $.ajax({
            url: '/',
            type: 'post',
            dataType: 'html',
            data: $('form', display).serialize(),
            error: function(jqXHR, textStatus, errorThrown)
            {
                console.log('Error, please report:');
                console.log(jqXHR + ', textStatus:' + textStatus + ', errorThrown:' + errorThrown);
                that.submitError();
            },
            success: function(html, textStatus, jqXHR)
            {
                if (html.match(/<title>Error<\/title>/))
                {
                    that.submitError();
                } else {
                    that.submitComplete();
                }
            }
        });
        $(window).trigger('resize.app');
    };
    this.submitError = function()
    {
        trk('Contact', 'Postcard Submit', 'Error');
        submitting = false;
        $('.sending', display).hide();
        $('.send-btn', display).show();
        $('.send-error', display).show();
    };
    this.submitComplete = function()
    {
        trk('Contact', 'Postcard Submit', 'Complete');
        submitting = false;
        $('.postcard', display).smartAnimate(getTransition($(window).width() + 'px', 0), 600, function()
        {
            $('.postcard', display).hide().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0);
            $('.postcard-thankyou', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
            {
                $('.postcard-thankyou', display).smartAnimate(getTransition('0px', 0), 600);
            });
            $(window).trigger('resize.app');
            that.resetForm();
        });
    };
    this.loadAssets = function()
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        $('.sec-loader').show().find('.loading-bar-gauge').css({
            width: '0%'
        });
        $('img', $('<div>' + imageList.string + '</div>')).loadImages(function() {
            loadStatus.loaded = true;
            if (!status.removing) {
                that.beginDisplay();
                $('.sec-loader').hide();
            }
        }, 10000);
    };
    this.resetDisplay = function()
    {
        $('.validation-error', display).hide();
        if (!submitting)
        {
            $('.sending, .send-error', display).hide();
            $('.send-btn', display).show();
        };
    };
    this.beginDisplay = function()
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        $('#container').css({
            minWidth: $(display).css('min-width')
        });
        status.enabled = true;
        this.resetDisplay();
        $('.postcard-thankyou', display).hide().smartAnimate(getTransition( - $(window).width() + 'px', 0));
        $('.postcard', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
        {
            $('.postcard', display).smartAnimate(getTransition('0px', 0), 600);
            $(window).trigger('resize.app');
        });
        $(window).trigger('resize.app');
    };
    this.updateDimensions = function()
    {
        this.goUpdateDimensions();
    };
    this.goUpdateDimensions = function()
    {
        dimension.height = Math.max($(window).height(), $('#postcard-display', display).height() + $('#header').outerHeight(true) + 100);
        $('#postcard-display', display).width($(display).width() - (device.mobile ? 20 : 40)).css({
            left: - ($('#postcard-display', display).width() * 0.5) + 'px',
            top: - ($('#postcard-display', display).height() * 0.5) + 'px'
        });
        $(display).height(dimension.height);
    };
    this.add = function() {
        manager.setBackgroundColor('#02c9c9');
        status.adding = true;
        if (!loadStatus.loaded) {
            this.loadAssets();
        } else {
            this.beginDisplay();
        }
    };
    this.remove = function(callback) {
        status.enabled = false;
        status.removing = true;
        $('.postcard, .postcard-thankyou', display).smartAnimate(getTransition( - $(window).width() + 'px', 0), 300, function() {
            callback();
        });
    };
    this.readLinkData = function(data) {};
    this.init();
};
function ScreenAwards(app, manager, display)
{
    var that = this, app = app, manager = manager, display = display, loadStatus = {
        loaded: false,
        loading: false
    }, status = {
        adding: false,
        removing: false,
        enabled: false
    }, dimension = {
        height: 0
    }, tmp = [], validated = false, tmp = [], cells = {
        cell: [],
        numInView: 0,
        slots: []
    }, currentCell =- 1, awardItem;
    var autoSlide = {
        timer: null,
        time: 6000
    };
    var imageList = {
        string: ''
    };
    this.init = function()
    {
        this.createImages();
        this.createCells();
        this.positionCells();
        this.addListeners();
    };
    this.createImages = function() {
        imageList.string += '<img src="/images/screens/awards/grad-left.png" /><img src="/images/screens/awards/grad-right.png" />'
    };
    this.addListeners = function()
    {
        $('.next-item', display).click(function() {
            trk('Awards', 'View award site', 'Next item click');
            that.setCenter(currentCell - 1, true);
            return false;
        });
        $('.previous-item', display).click(function() {
            trk('Awards', 'View award site', 'Previous item click');
            that.setCenter(currentCell + 1, true);
            return false;
        });
        $('.cell-el', display).click(function() {
            trk('Awards', 'View award site', 'Click cell ' + cells.cell[$('.cell-id', this).text()].title);
            that.cycleCells(Number($('.cell-id', this).text()), true);
            return false;
        });
    };
    this.loadAssets = function()
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        $('.sec-loader').show().find('.loading-bar-gauge').css({
            width: '0%'
        });
        $('img', $('<div>' + imageList.string + '</div>')).loadImages(function() {
            loadStatus.loaded = true;
            if (!status.removing) {
                $('.sec-loader').hide();
                that.beginDisplay();
            }
        }, 5000);
    };
    this.resetDisplay = function()
    {};
    this.beginDisplay = function()
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        status.enabled = true;
        $('#container').css({
            minWidth: $(display).css('min-width')
        });
        this.resetDisplay();
        $('.awards', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
        {
            $('.awards', display).smartAnimate(getTransition('0px', 0), 600);
            that.beginAutoSlide();
            $(window).trigger('resize.app');
        });
        $(window).trigger('resize.app');
    };
    this.createCells = function()
    {
        tmp.cellString = '';
        if ($('.awards-data .sec', display).length > 0)
        {
            while (cells.numInView < 13)
            {
                $('.awards-data .sec', display).each(function(i)
                {
                    imageList.string += '<img src="' + $(device.retina ? '.s-icon-2x' : '.s-icon-1x .src', this).text() + '" />';
                    tmp.cellString += '<div class="cell-el"><div class="cell-id">' + cells.numInView + '</div><div class="cell-img" style="background-image:url(' + $(device.retina ? '.s-icon-2x' : '.s-icon-1x .src', this).text() + '); width:' + $('.s-icon-1x .width', this).text() + 'px; height:' + $('.s-icon-1x .height', this).text() + 'px; top:' + ( - Number($('.s-icon-1x .height', this).text()) * 0.5) + 'px; left:' + ( - Number($('.s-icon-1x .width', this).text()) * 0.5) + 'px; background-size:' + $('.s-icon-1x .width', this).text() + 'px ' + $('.s-icon-1x .height', this).text() + 'px;" title="' + $('.s-title', this).text() + '"></div></div>';
                    tmp.awards = that.compileAwards(this);
                    cells.cell.push({
                        id: cells.numInView,
                        title: $('.s-title', this).text(),
                        awards: tmp.awards,
                        timeout: null
                    });
                    cells.numInView++;
                });
            }
        }
        cells.numInView = Math.min(cells.numInView, 9);
        $('.awards-cells .cell-slide', display).append($(tmp.cellString));
    };
    this.compileAwards = function(item)
    {
        awardItem = '<div class="awd-list">';
        $('.s-awards .s-award', item).each(function()
        {
            awardItem += '<div class="awd-item"><span class="awd-title">' + $('.award-title', this).text() + '</span> - <a href="' + $('.award-url', this).text() + '" target="_blank" title="Opens link in a new window">Launch</a></div>';
        });
        awardItem += '</div>';
        return $(awardItem);
    };
    this.positionCells = function()
    {
        if (cells.cell.length == 0)
            return false;
        tmp.slotIncrement = (100 / (cells.numInView - 1));
        for (var i = 0, il = cells.numInView; i < il; i++) {
            cells.slots.push(Math.round(tmp.slotIncrement * i));
        }
        cells.centerSlot = Math.floor(cells.slots.length / 2);
        this.setCenter(0, false);
    };
    this.beginAutoSlide = function()
    {
        this.autoSlide();
    };
    this.autoSlide = function()
    {
        clearTimeout(autoSlide.timer);
        if ($(display).is(':visible'))
            autoSlide.timer = setTimeout(function() {
                that.setCenter(currentCell - 1, true);
            }, autoSlide.time);
    };
    this.stopAutoSlide = function()
    {
        clearTimeout(autoSlide.timer);
    };
    this.cycleCells = function(targetCell)
    {
        if (Math.abs(targetCell - currentCell) > Math.floor(cells.cell.length * 0.5))
        {
            if ((targetCell - currentCell) < 0) {
                while (currentCell != targetCell)
                    this.setCenter(currentCell + 1, true);
            } else {
                while (currentCell != targetCell)
                    this.setCenter(currentCell - 1, true);
            }
        } else {
            if ((targetCell - currentCell) < 0) {
                while (currentCell != targetCell)
                    this.setCenter(currentCell - 1, true);
            } else {
                while (currentCell != targetCell)
                    this.setCenter(currentCell + 1, true);
            }
        }
    };
    this.setCenter = function(id, animated)
    {
        if (id > cells.cell.length - 1)
            id = 0;
        if (id < 0)
            id = cells.cell.length - 1;
        currentCell = id;
        cells.set = [];
        cells.set = cells.set.concat(cells.cell.slice(0, cells.cell.length), cells.cell.slice(0, cells.cell.length), cells.cell.slice(0, cells.cell.length));
        cells.set = cells.set.slice((cells.cell.length + id) - cells.centerSlot, (cells.cell.length + id) + (cells.slots.length - cells.centerSlot));
        $('.cell-el:eq(' + id + ')', display).addClass('active-cell');
        $('.cell-el:not(:eq(' + id + '))', display).removeClass('active-cell');
        tmp.delay = 0;
        for (var i = 0, il = cells.set.length; i < il; i++)
        {
            that.updateCellPosition(i, tmp.delay, animated);
            tmp.delay += 150;
        }
        $('.award-site', display).html('<span>' + cells.cell[id].title + '</span>');
        $('.award-list', display).empty().append(cells.cell[id].awards);
        that.autoSlide();
        if (device.touch)
            $(window).trigger('resize.app');
    };
    this.updateCellPosition = function(i, delay, animated)
    {
        tmp.diff = Math.abs(Math.abs($('.cell-el:eq(' + cells.set[i].id + ')', display).data('currentPos')) - Math.abs(cells.slots[i]));
        if (isNaN(tmp.diff))
            tmp.diff = 100;
        $('.cell-el:eq(' + cells.set[i].id + ')', display).smartAnimate(getTransition(cells.slots[i] + '%', 0), tmp.diff == 100 ? 0 : animated == true ? 600 + delay : 0);
        $('.cell-el:eq(' + cells.set[i].id + ')', display).data('currentPos', cells.slots[i]);
    };
    this.updateDimensions = function()
    {
        dimension.height = Math.max($(window).height(), $('#awards-items-display', display).height() + $('#header').outerHeight(true) + 100);
        $('#awards-items-display', display).width($(display).width() - (device.mobile ? 20 : 40)).css({
            left: - ($('#awards-items-display', display).width() * 0.5) + 'px',
            top: - ($('#awards-items-display', display).height() * 0.5) + 'px'
        });
        $(display).height(dimension.height);
    };
    this.add = function() {
        manager.setBackgroundColor('#ffc300');
        status.adding = true;
        if (!loadStatus.loaded) {
            this.loadAssets();
        } else {
            this.beginDisplay();
        }
    };
    this.remove = function(callback) {
        status.enabled = false;
        status.removing = true;
        this.stopAutoSlide();
        $('.awards', display).smartAnimate(getTransition( - $(window).width() + 'px', 0), 300, function() {
            callback();
        });
    };
    this.readLinkData = function(data) {};
    this.init();
};
function ScreenLogin(app, manager, display)
{
    var that = this, app = app, manager = manager, display = display, loadStatus = {
        loaded: false,
        loading: false
    }, fields = [], loginTimeout = null, status = {
        adding: false,
        removing: false,
        enabled: false
    }, submitting = false, dimension = {
        height: 0
    }, tmp = [], validated = false;
    this.init = function()
    {
        this.setDefaults();
        this.addListeners();
    };
    this.addListeners = function()
    {
        $('.login-btn', display).click(function() {
            that.goSubmit();
            return false;
        });
        $('.logout-btn', display).click(function() {
            that.logout();
            return false;
        });
        $('form', display).submit(function() {
            that.goSubmit();
            return false;
        });
    };
    this.goSubmit = function()
    {
        if (submitting)
            return false;
        validated = true;
        $(fields).each(function() {
            tmp.itemValidation = that.validate(false, this.item, this.validation);
            if (!tmp.itemValidation)
                validated = false;
        });
        (!validated) ? $('.validation-error', display).show() : $('.validation-error', display).hide();
        if (!validated)
            return false;
        $('.logging-in', display).show();
        $('.login-btn', display).hide();
        $('.login-error', display).hide();
        submitting = true;
        $.ajax({
            url: '/?ACT=25',
            type: 'post',
            dataType: 'html',
            data: $('form', display).serialize(),
            error: function(jqXHR, textStatus, errorThrown)
            {
                that.submitError();
            },
            success: function(msg)
            {
                if (msg.indexOf('You are now logged in.') >= 0)
                {
                    that.submitComplete();
                } else {
                    that.submitError();
                }
            }
        });
        $(window).trigger('resize.app');
    };
    this.logout = function()
    {
        $.ajax({
            url: '/?ACT=26',
            type: 'get',
            success: function(msg)
            {
                trk('Login', 'User logged out', '');
                window.location.href = '/';
            }
        });
    };
    this.submitComplete = function()
    {
        trk('Login', 'User logged in', $('#username', display).val());
        submitting = false;
        $('.login-form', display).smartAnimate(getTransition($(window).width() + 'px', 0), 600, function()
        {
            $('.login-form', display).hide().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0);
            $('.login-thankyou', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
            {
                $('.login-thankyou', display).smartAnimate(getTransition('0px', 0), 600, function() {
                    clearTimeout(loginTimeout);
                    loginTimeout = setTimeout(function() {
                        window.location.href = '/work-and-play';
                    }, 1000);
                });
            });
            $(window).trigger('resize.app');
        });
    };
    this.submitError = function()
    {
        trk('Login', 'User submit error', $('#username', display).val());
        submitting = false;
        $('.logging-in', display).hide();
        $('.login-btn', display).show();
        $('.login-error', display).show();
    };
    this.setDefaults = function()
    {
        $('#username', display).setDefaultText('Your Username');
    };
    this.loadAssets = function()
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        this.resetDisplay();
        that.beginDisplay();
    };
    this.resetDisplay = function()
    {
        $('.login-form', display).hide();
    };
    this.beginDisplay = function()
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        status.enabled = true;
        $('#container').css({
            minWidth: $(display).css('min-width')
        });
        this.resetDisplay();
        $('.login-thankyou', display).hide().smartAnimate(getTransition( - $(window).width() + 'px', 0));
        if ($('.logout-notice', display).length)
        {
            $('.logout-notice', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
            {
                $('.logout-notice', display).smartAnimate(getTransition('0px', 0), 600);
                $(window).trigger('resize.app');
            });
        } else {
            $('.login-form', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
            {
                $('.login-form', display).smartAnimate(getTransition('0px', 0), 600);
                $(window).trigger('resize.app');
            });
        }
        $(window).trigger('resize.app');
    };
    this.updateDimensions = function()
    {
        dimension.height = Math.max($(window).height(), $('#login-form-display', display).height() + $('#header').outerHeight(true) + 100);
        $('#login-form-display', display).width($(display).width() - (device.mobile ? 20 : 40)).css({
            left: - ($('#login-form-display', display).width() * 0.5) + 'px',
            top: - ($('#login-form-display', display).height() * 0.5) + 'px'
        });
        $(display).height(dimension.height);
    };
    this.add = function() {
        manager.setBackgroundColor('#02c9c9');
        status.adding = true;
        if (!loadStatus.loaded) {
            this.loadAssets();
        } else {
            this.beginDisplay();
        }
    };
    this.remove = function(callback) {
        status.enabled = false;
        status.removing = true;
        $('.login-form, .login-thankyou, .logout-notice', display).smartAnimate(getTransition( - $(window).width() + 'px', 0), 300, function() {
            callback();
        });
    };
    this.readLinkData = function(data) {};
    this.init();
};
function Screen404(app, manager, display)
{
    var that = this, app = app, manager = manager, display = display, loadStatus = {
        loaded: false,
        loading: false
    }, fields = [], loginTimeout = null, status = {
        adding: false,
        removing: false,
        enabled: false
    }, submitting = false, dimension = {
        height: 0
    }, tmp = [], validated = false;
    this.init = function()
    {};
    this.loadAssets = function()
    {
        if (loadStatus.loading)
            return;
        loadStatus.loading = true;
        $('.sec-loader').show().find('.loading-bar-gauge').css({
            width: '0%'
        });
        setTimeout(function() {
            loadStatus.loaded = true;
            if (!status.removing) {
                that.beginDisplay();
                $('.sec-loader').hide();
            }
        }, 1000);
    };
    this.resetDisplay = function()
    {};
    this.beginDisplay = function()
    {
        if (loadStatus.loading) {
            loadStatus.loading = false;
        }
        status.enabled = true;
        $('#container').css({
            minWidth: $(display).css('min-width')
        });
        this.resetDisplay();
        $('.error-notice', display).show().smartAnimate(getTransition( - $(window).width() + 'px', 0), 0, function()
        {
            $('.error-notice', display).smartAnimate(getTransition('0px', 0), 600);
            $(window).trigger('resize.app');
        });
        $(window).trigger('resize.app');
    };
    this.updateDimensions = function()
    {
        dimension.height = Math.max($(window).height(), $('#error-display', display).height() + $('#header').outerHeight(true) + 100);
        $('#error-display', display).width($(display).width() - (device.mobile ? 20 : 40)).css({
            left: - ($('#error-display', display).width() * 0.5) + 'px',
            top: - ($('#error-display', display).height() * 0.5) + 'px'
        });
        $(display).height(dimension.height);
    };
    this.add = function() {
        manager.setBackgroundColor('#333333');
        status.adding = true;
        if (!loadStatus.loaded) {
            this.loadAssets();
        } else {
            this.beginDisplay();
        }
    };
    this.remove = function(callback) {
        status.enabled = false;
        status.removing = true;
        $('.error-notice', display).smartAnimate(getTransition( - $(window).width() + 'px', 0), 300, function() {
            callback();
        });
    };
    this.readLinkData = function(data) {};
    this.init();
};


