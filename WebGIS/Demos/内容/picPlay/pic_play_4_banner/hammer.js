!function (t, e, i, n) {
    "use strict";

    function r(t, e, i) {
        return setTimeout(u(t, i), e)
    }

    function s(t, e, i) {
        return !!Array.isArray(t) && (o(t, i[e], i), !0)
    }

    function o(t, e, i) {
        var r;
        if (t) if (t.forEach) t.forEach(e, i); else if (t.length !== n) for (r = 0; r < t.length;) e.call(i, t[r], r, t), r++; else for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t)
    }

    function a(e, i, n) {
        var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function () {
            var i = new Error("get-stack-trace"),
                n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                s = t.console && (t.console.warn || t.console.log);
            return s && s.call(t.console, r, n), e.apply(this, arguments)
        }
    }

    function h(t, e, i) {
        var n, r = e.prototype;
        n = t.prototype = Object.create(r), n.constructor = t, n._super = r, i && ct(n, i)
    }

    function u(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function c(t, e) {
        return typeof t == ft ? t.apply(e ? e[0] || n : n, e) : t
    }

    function l(t, e) {
        return t === n ? e : t
    }

    function p(t, e, i) {
        o(m(e), function (e) {
            t.addEventListener(e, i, !1)
        })
    }

    function f(t, e, i) {
        o(m(e), function (e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function d(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function v(t, e) {
        return t.indexOf(e) > -1
    }

    function m(t) {
        return t.trim().split(/\s+/g)
    }

    function g(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++
        }
        return -1
    }

    function T(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function y(t, e, i) {
        for (var n = [], r = [], s = 0; s < t.length;) {
            var o = e ? t[s][e] : t[s];
            g(r, o) < 0 && n.push(t[s]), r[s] = o, s++
        }
        return i && (n = e ? n.sort(function (t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }

    function E(t, e) {
        for (var i, r, s = e[0].toUpperCase() + e.slice(1), o = 0; o < lt.length;) {
            if (i = lt[o], (r = i ? i + s : e) in t) return r;
            o++
        }
        return n
    }

    function I() {
        return yt++
    }

    function A(e) {
        var i = e.ownerDocument || e;
        return i.defaultView || i.parentWindow || t
    }

    function _(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
            c(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }

    function b(t) {
        var e = t.options.inputClass;
        return new (e || (At ? F : _t ? k : It ? L : Y))(t, D)
    }

    function D(t, e, i) {
        var n = i.pointers.length, r = i.changedPointers.length, s = e & Dt && n - r == 0,
            o = e & (St | wt) && n - r == 0;
        i.isFirst = !!s, i.isFinal = !!o, s && (t.session = {}), i.eventType = e, P(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function P(t, e) {
        var i = t.session, n = e.pointers, r = n.length;
        i.firstInput || (i.firstInput = x(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = x(e) : 1 === r && (i.firstMultiple = !1);
        var s = i.firstInput, o = i.firstMultiple, a = o ? o.center : s.center, h = e.center = C(n);
        e.timeStamp = mt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = z(a, h), e.distance = M(a, h), S(i, e), e.offsetDirection = R(e.deltaX, e.deltaY);
        var u = O(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = vt(u.x) > vt(u.y) ? u.x : u.y, e.scale = o ? X(o.pointers, n) : 1, e.rotation = o ? N(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, w(i, e);
        var c = t.element;
        d(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
    }

    function S(t, e) {
        var i = e.center, n = t.offsetDelta || {}, r = t.prevDelta || {}, s = t.prevInput || {};
        e.eventType !== Dt && s.eventType !== St || (r = t.prevDelta = {
            x: s.deltaX || 0,
            y: s.deltaY || 0
        }, n = t.offsetDelta = {x: i.x, y: i.y}), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y)
    }

    function w(t, e) {
        var i, r, s, o, a = t.lastInterval || e, h = e.timeStamp - a.timeStamp;
        if (e.eventType != wt && (h > bt || a.velocity === n)) {
            var u = e.deltaX - a.deltaX, c = e.deltaY - a.deltaY, l = O(h, u, c);
            r = l.x, s = l.y, i = vt(l.x) > vt(l.y) ? l.x : l.y, o = R(u, c), t.lastInterval = e
        } else i = a.velocity, r = a.velocityX, s = a.velocityY, o = a.direction;
        e.velocity = i, e.velocityX = r, e.velocityY = s, e.direction = o
    }

    function x(t) {
        for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
            clientX: dt(t.pointers[i].clientX),
            clientY: dt(t.pointers[i].clientY)
        }, i++;
        return {timeStamp: mt(), pointers: e, center: C(e), deltaX: t.deltaX, deltaY: t.deltaY}
    }

    function C(t) {
        var e = t.length;
        if (1 === e) return {x: dt(t[0].clientX), y: dt(t[0].clientY)};
        for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++;
        return {x: dt(i / e), y: dt(n / e)}
    }

    function O(t, e, i) {
        return {x: e / t || 0, y: i / t || 0}
    }

    function R(t, e) {
        return t === e ? xt : vt(t) >= vt(e) ? t < 0 ? Ct : Ot : e < 0 ? Rt : Mt
    }

    function M(t, e, i) {
        i || (i = Yt);
        var n = e[i[0]] - t[i[0]], r = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + r * r)
    }

    function z(t, e, i) {
        i || (i = Yt);
        var n = e[i[0]] - t[i[0]], r = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(r, n) / Math.PI
    }

    function N(t, e) {
        return z(e[1], e[0], Ft) + z(t[1], t[0], Ft)
    }

    function X(t, e) {
        return M(e[0], e[1], Ft) / M(t[0], t[1], Ft)
    }

    function Y() {
        this.evEl = qt, this.evWin = kt, this.pressed = !1, _.apply(this, arguments)
    }

    function F() {
        this.evEl = Ut, this.evWin = Vt, _.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function W() {
        this.evTarget = Gt, this.evWin = Zt, this.started = !1, _.apply(this, arguments)
    }

    function q(t, e) {
        var i = T(t.touches), n = T(t.changedTouches);
        return e & (St | wt) && (i = y(i.concat(n), "identifier", !0)), [i, n]
    }

    function k() {
        this.evTarget = $t, this.targetIds = {}, _.apply(this, arguments)
    }

    function H(t, e) {
        var i = T(t.touches), n = this.targetIds;
        if (e & (Dt | Pt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
        var r, s, o = T(t.changedTouches), a = [], h = this.target;
        if (s = i.filter(function (t) {
            return d(t.target, h)
        }), e === Dt) for (r = 0; r < s.length;) n[s[r].identifier] = !0, r++;
        for (r = 0; r < o.length;) n[o[r].identifier] && a.push(o[r]), e & (St | wt) && delete n[o[r].identifier], r++;
        return a.length ? [y(s.concat(a), "identifier", !0), a] : void 0
    }

    function L() {
        _.apply(this, arguments);
        var t = u(this.handler, this);
        this.touch = new k(this.manager, t), this.mouse = new Y(this.manager, t), this.primaryTouch = null, this.lastTouches = []
    }

    function U(t, e) {
        t & Dt ? (this.primaryTouch = e.changedPointers[0].identifier, V.call(this, e)) : t & (St | wt) && V.call(this, e)
    }

    function V(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {x: e.clientX, y: e.clientY};
            this.lastTouches.push(i);
            var n = this.lastTouches, r = function () {
                var t = n.indexOf(i);
                t > -1 && n.splice(t, 1)
            };
            setTimeout(r, Jt)
        }
    }

    function j(t) {
        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var r = this.lastTouches[n], s = Math.abs(e - r.x), o = Math.abs(i - r.y);
            if (s <= Kt && o <= Kt) return !0
        }
        return !1
    }

    function G(t, e) {
        this.manager = t, this.set(e)
    }

    function Z(t) {
        if (v(t, ne)) return ne;
        var e = v(t, re), i = v(t, se);
        return e && i ? ne : e || i ? e ? re : se : v(t, ie) ? ie : ee
    }

    function B(t) {
        this.options = ct({}, this.defaults, t || {}), this.id = I(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = oe, this.simultaneous = {}, this.requireFail = []
    }

    function $(t) {
        return t & le ? "cancel" : t & ue ? "end" : t & he ? "move" : t & ae ? "start" : ""
    }

    function J(t) {
        return t == Mt ? "down" : t == Rt ? "up" : t == Ct ? "left" : t == Ot ? "right" : ""
    }

    function K(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }

    function Q() {
        B.apply(this, arguments)
    }

    function tt() {
        Q.apply(this, arguments), this.pX = null, this.pY = null
    }

    function et() {
        Q.apply(this, arguments)
    }

    function it() {
        B.apply(this, arguments), this._timer = null, this._input = null
    }

    function nt() {
        Q.apply(this, arguments)
    }

    function rt() {
        Q.apply(this, arguments)
    }

    function st() {
        B.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ot(t, e) {
        return e = e || {}, e.recognizers = l(e.recognizers, ot.defaults.preset), new at(t, e)
    }

    function at(t, e) {
        this.options = ct({}, ot.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = b(this), this.touchAction = new G(this, this.options.touchAction), ht(this, !0), o(this.options.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function ht(t, e) {
        var i = t.element;
        i.style && o(t.options.cssProps, function (t, n) {
            i.style[E(i.style, n)] = e ? t : ""
        })
    }

    function ut(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }

    var ct, lt = ["", "webkit", "Moz", "MS", "ms", "o"], pt = e.createElement("div"), ft = "function", dt = Math.round,
        vt = Math.abs, mt = Date.now;
    ct = "function" != typeof Object.assign ? function (t) {
        if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (r !== n && null !== r) for (var s in r) r.hasOwnProperty(s) && (e[s] = r[s])
        }
        return e
    } : Object.assign;
    var gt = a(function (t, e, i) {
            for (var r = Object.keys(e), s = 0; s < r.length;) (!i || i && t[r[s]] === n) && (t[r[s]] = e[r[s]]), s++;
            return t
        }, "extend", "Use `assign`."), Tt = a(function (t, e) {
            return gt(t, e, !0)
        }, "merge", "Use `assign`."), yt = 1, Et = /mobile|tablet|ip(ad|hone|od)|android/i, It = "ontouchstart" in t,
        At = E(t, "PointerEvent") !== n, _t = It && Et.test(navigator.userAgent), bt = 25, Dt = 1, Pt = 2, St = 4,
        wt = 8, xt = 1, Ct = 2, Ot = 4, Rt = 8, Mt = 16, zt = Ct | Ot, Nt = Rt | Mt, Xt = zt | Nt, Yt = ["x", "y"],
        Ft = ["clientX", "clientY"];
    _.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(A(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(A(this.element), this.evWin, this.domHandler)
        }
    };
    var Wt = {mousedown: Dt, mousemove: Pt, mouseup: St}, qt = "mousedown", kt = "mousemove mouseup";
    h(Y, _, {
        handler: function (t) {
            var e = Wt[t.type];
            e & Dt && 0 === t.button && (this.pressed = !0), e & Pt && 1 !== t.which && (e = St), this.pressed && (e & St && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: "mouse",
                srcEvent: t
            }))
        }
    });
    var Ht = {pointerdown: Dt, pointermove: Pt, pointerup: St, pointercancel: wt, pointerout: wt},
        Lt = {2: "touch", 3: "pen", 4: "mouse", 5: "kinect"}, Ut = "pointerdown",
        Vt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Ut = "MSPointerDown", Vt = "MSPointerMove MSPointerUp MSPointerCancel"), h(F, _, {
        handler: function (t) {
            var e = this.store, i = !1, n = t.type.toLowerCase().replace("ms", ""), r = Ht[n],
                s = Lt[t.pointerType] || t.pointerType, o = "touch" == s, a = g(e, t.pointerId, "pointerId");
            r & Dt && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : r & (St | wt) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: s,
                srcEvent: t
            }), i && e.splice(a, 1))
        }
    });
    var jt = {touchstart: Dt, touchmove: Pt, touchend: St, touchcancel: wt}, Gt = "touchstart",
        Zt = "touchstart touchmove touchend touchcancel";
    h(W, _, {
        handler: function (t) {
            var e = jt[t.type];
            if (e === Dt && (this.started = !0), this.started) {
                var i = q.call(this, t, e);
                e & (St | wt) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: "touch",
                    srcEvent: t
                })
            }
        }
    });
    var Bt = {touchstart: Dt, touchmove: Pt, touchend: St, touchcancel: wt},
        $t = "touchstart touchmove touchend touchcancel";
    h(k, _, {
        handler: function (t) {
            var e = Bt[t.type], i = H.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: "touch",
                srcEvent: t
            })
        }
    });
    var Jt = 2500, Kt = 25;
    h(L, _, {
        handler: function (t, e, i) {
            var n = "touch" == i.pointerType, r = "mouse" == i.pointerType;
            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n) U.call(this, e, i); else if (r && j.call(this, i)) return;
                this.callback(t, e, i)
            }
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Qt = E(pt.style, "touchAction"), te = Qt !== n, ee = "auto", ie = "manipulation", ne = "none", re = "pan-x",
        se = "pan-y";
    G.prototype = {
        set: function (t) {
            "compute" == t && (t = this.compute()), te && this.manager.element.style && (this.manager.element.style[Qt] = t), this.actions = t.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var t = [];
            return o(this.manager.recognizers, function (e) {
                c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), Z(t.join(" "))
        }, preventDefaults: function (t) {
            if (!te) {
                var e = t.srcEvent, i = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var n = this.actions, r = v(n, ne), s = v(n, se), o = v(n, re);
                if (r) {
                    var a = 1 === t.pointers.length, h = t.distance < 2, u = t.deltaTime < 250;
                    if (a && h && u) return
                }
                if (!o || !s) return r || s && i & zt || o && i & Nt ? this.preventSrc(e) : void 0
            }
        }, preventSrc: function (t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var oe = 1, ae = 2, he = 4, ue = 8, ce = ue, le = 16;
    B.prototype = {
        defaults: {}, set: function (t) {
            return ct(this.options, t), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (t) {
            if (s(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        }, dropRecognizeWith: function (t) {
            return s(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
        }, requireFailure: function (t) {
            if (s(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return t = K(t, this), -1 === g(e, t) && (e.push(t), t.requireFailure(this)), this
        }, dropRequireFailure: function (t) {
            if (s(t, "dropRequireFailure", this)) return this;
            t = K(t, this);
            var e = g(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id]
        }, emit: function (t) {
            function e(e) {
                i.manager.emit(e, t)
            }

            var i = this, n = this.state;
            n < ue && e(i.options.event + $(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ue && e(i.options.event + $(n))
        }, tryEmit: function (t) {
            if (this.canEmit()) return this.emit(t);
            this.state = 32
        }, canEmit: function () {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (32 | oe))) return !1;
                t++
            }
            return !0
        }, recognize: function (t) {
            var e = ct({}, t);
            if (!c(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
            this.state & (ce | le | 32) && (this.state = oe), this.state = this.process(e), this.state & (ae | he | ue | le) && this.tryEmit(e)
        }, process: function (t) {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, h(Q, B, {
        defaults: {pointers: 1}, attrTest: function (t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        }, process: function (t) {
            var e = this.state, i = t.eventType, n = e & (ae | he), r = this.attrTest(t);
            return n && (i & wt || !r) ? e | le : n || r ? i & St ? e | ue : e & ae ? e | he : ae : 32
        }
    }), h(tt, Q, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Xt}, getTouchAction: function () {
            var t = this.options.direction, e = [];
            return t & zt && e.push(se), t & Nt && e.push(re), e
        }, directionTest: function (t) {
            var e = this.options, i = !0, n = t.distance, r = t.direction, s = t.deltaX, o = t.deltaY;
            return r & e.direction || (e.direction & zt ? (r = 0 === s ? xt : s < 0 ? Ct : Ot, i = s != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === o ? xt : o < 0 ? Rt : Mt, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction
        }, attrTest: function (t) {
            return Q.prototype.attrTest.call(this, t) && (this.state & ae || !(this.state & ae) && this.directionTest(t))
        }, emit: function (t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = J(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), h(et, Q, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ne]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ae)
        }, emit: function (t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }), h(it, B, {
        defaults: {event: "press", pointers: 1, time: 251, threshold: 9}, getTouchAction: function () {
            return [ee]
        }, process: function (t) {
            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold,
                s = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (St | wt) && !s) this.reset(); else if (t.eventType & Dt) this.reset(), this._timer = r(function () {
                this.state = ce, this.tryEmit()
            }, e.time, this); else if (t.eventType & St) return ce;
            return 32
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (t) {
            this.state === ce && (t && t.eventType & St ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = mt(), this.manager.emit(this.options.event, this._input)))
        }
    }), h(nt, Q, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [ne]
        }, attrTest: function (t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ae)
        }
    }), h(rt, Q, {
        defaults: {event: "swipe", threshold: 10, velocity: .3, direction: zt | Nt, pointers: 1},
        getTouchAction: function () {
            return tt.prototype.getTouchAction.call(this)
        },
        attrTest: function (t) {
            var e, i = this.options.direction;
            return i & (zt | Nt) ? e = t.overallVelocity : i & zt ? e = t.overallVelocityX : i & Nt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && vt(e) > this.options.velocity && t.eventType & St
        },
        emit: function (t) {
            var e = J(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), h(st, B, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        }, getTouchAction: function () {
            return [ie]
        }, process: function (t) {
            var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold,
                s = t.deltaTime < e.time;
            if (this.reset(), t.eventType & Dt && 0 === this.count) return this.failTimeout();
            if (n && s && i) {
                if (t.eventType != St) return this.failTimeout();
                var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    a = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = r(function () {
                    this.state = ce, this.tryEmit()
                }, e.interval, this), ae) : ce
            }
            return 32
        }, failTimeout: function () {
            return this._timer = r(function () {
                this.state = 32
            }, this.options.interval, this), 32
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == ce && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ot.VERSION = "2.0.6", ot.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[nt, {enable: !1}], [et, {enable: !1}, ["rotate"]], [rt, {direction: zt}], [tt, {direction: zt}, ["swipe"]], [st], [st, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [it]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    at.prototype = {
        set: function (t) {
            return ct(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        }, stop: function (t) {
            this.session.stopped = t ? 2 : 1
        }, recognize: function (t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers, r = e.curRecognizer;
                (!r || r && r.state & ce) && (r = e.curRecognizer = null);
                for (var s = 0; s < n.length;) i = n[s], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && i.state & (ae | he | ue) && (r = e.curRecognizer = i), s++
            }
        }, get: function (t) {
            if (t instanceof B) return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];
            return null
        }, add: function (t) {
            if (s(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        }, remove: function (t) {
            if (s(t, "remove", this)) return this;
            if (t = this.get(t)) {
                var e = this.recognizers, i = g(e, t);
                -1 !== i && (e.splice(i, 1), this.touchAction.update())
            }
            return this
        }, on: function (t, e) {
            var i = this.handlers;
            return o(m(t), function (t) {
                i[t] = i[t] || [], i[t].push(e)
            }), this
        }, off: function (t, e) {
            var i = this.handlers;
            return o(m(t), function (t) {
                e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t]
            }), this
        }, emit: function (t, e) {
            this.options.domEvents && ut(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function () {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;) i[n](e), n++
            }
        }, destroy: function () {
            this.element && ht(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, ct(ot, {
        INPUT_START: Dt,
        INPUT_MOVE: Pt,
        INPUT_END: St,
        INPUT_CANCEL: wt,
        STATE_POSSIBLE: oe,
        STATE_BEGAN: ae,
        STATE_CHANGED: he,
        STATE_ENDED: ue,
        STATE_RECOGNIZED: ce,
        STATE_CANCELLED: le,
        STATE_FAILED: 32,
        DIRECTION_NONE: xt,
        DIRECTION_LEFT: Ct,
        DIRECTION_RIGHT: Ot,
        DIRECTION_UP: Rt,
        DIRECTION_DOWN: Mt,
        DIRECTION_HORIZONTAL: zt,
        DIRECTION_VERTICAL: Nt,
        DIRECTION_ALL: Xt,
        Manager: at,
        Input: _,
        TouchAction: G,
        TouchInput: k,
        MouseInput: Y,
        PointerEventInput: F,
        TouchMouseInput: L,
        SingleTouchInput: W,
        Recognizer: B,
        AttrRecognizer: Q,
        Tap: st,
        Pan: tt,
        Swipe: rt,
        Pinch: et,
        Rotate: nt,
        Press: it,
        on: p,
        off: f,
        each: o,
        merge: Tt,
        extend: gt,
        assign: ct,
        inherit: h,
        bindFn: u,
        prefixed: E
    }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = ot, "function" == typeof define && define.amd ? define(function () {
        return ot
    }) : "undefined" != typeof module && module.exports ? module.exports = ot : t.Hammer = ot
}(window, document);