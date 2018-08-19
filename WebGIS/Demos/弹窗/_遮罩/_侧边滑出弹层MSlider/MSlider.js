/*
 * 侧边滑出弹层插件 MSlider.js
 * DH (https://denghao.me)
 * 2018-07
 */

(function (b,c) {
    function MS(paras_in) {
        this.opts = {
            "direction": paras_in.direction || "left",
            "distance": paras_in.distance || "60%",
            "dom": this.Q(paras_in.dom),
            "time": paras_in.time || "",
            "maskClose": (paras_in.maskClose + "").toString() !== "false",
            "callback": paras_in.callback || ""
        };
        this.rnd = this.genRnd();
        this.dom = this.opts.dom[0];
        this.wrap = "";
        this.inner = "";
        this.mask = "";
        this.init()
    }

    MS.prototype = {
        Q: function (d) {
            return document.querySelectorAll(d)
        },
        isMobile: function () {
            return !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
        },
        addEvent: function (dom, event_name, callback_func) {
            if (dom.attachEvent) {
                dom.attachEvent("on" + event_name, callback_func)
            } else {
                dom.addEventListener(event_name, callback_func, false)
            }
        },
        genRnd: function () {
            return Math.random().toString(36).substr(2, 6)
        },
        init: function () {
            let ms_obj = this;
            if (!ms_obj.dom) {
                console.log("未正确绑定弹窗容器");
                return
            }
            // 创建弹出遮罩的div
            let d_ms_main = document.createElement("div"); // MSlider-main
            let e_ms_inner = document.createElement("div"); // MSlider-inner
            let f_ms_mask = document.createElement("div"); // MSlider-mask
            d_ms_main.setAttribute("class", "MSlider-main ms-" + ms_obj.rnd);
            e_ms_inner.setAttribute("class", "MSlider-inner");
            f_ms_mask.setAttribute("class", "MSlider-mask");
            ms_obj.Q("body")[0].appendChild(d_ms_main);
            ms_obj.Q(".ms-" + ms_obj.rnd)[0].appendChild(e_ms_inner);
            ms_obj.Q(".ms-" + ms_obj.rnd)[0].appendChild(f_ms_mask);

            // 获取对添加入的div的引用
            ms_obj.wrap = ms_obj.Q(".ms-" + ms_obj.rnd)[0];
            ms_obj.inner = ms_obj.Q(".ms-" + ms_obj.rnd + " .MSlider-inner")[0];
            ms_obj.mask = ms_obj.Q(".ms-" + ms_obj.rnd + " .MSlider-mask")[0];
            ms_obj.inner.appendChild(ms_obj.dom);

            // 根据初始化的opts，设置遮罩的css样式
            switch (ms_obj.opts.direction) {
                case"top":
                    ms_obj.top = "0";
                    ms_obj.left = "0";
                    ms_obj.width = "100%";
                    ms_obj.height = ms_obj.opts.distance;
                    ms_obj.translate = "0,-100%,0";
                    break;
                case"bottom":
                    ms_obj.bottom = "0";
                    ms_obj.left = "0";
                    ms_obj.width = "100%";
                    ms_obj.height = ms_obj.opts.distance;
                    ms_obj.translate = "0,100%,0";
                    break;
                case"right":
                    ms_obj.top = "0";
                    ms_obj.right = "0";
                    ms_obj.width = ms_obj.opts.distance;
                    ms_obj.height = document.documentElement.clientHeight + "px";
                    ms_obj.translate = "100%,0,0";
                    break;
                default:
                    ms_obj.top = "0";
                    ms_obj.left = "0";
                    ms_obj.width = ms_obj.opts.distance;
                    ms_obj.height = document.documentElement.clientHeight + "px";
                    ms_obj.translate = "-100%,0,0"
            }
            ms_obj.wrap.style.display = "none";
            ms_obj.wrap.style.position = "fixed";
            ms_obj.wrap.style.top = "0";
            ms_obj.wrap.style.left = "0";
            ms_obj.wrap.style.width = "100%";
            ms_obj.wrap.style.height = "100%";
            ms_obj.wrap.style.zIndex = 99;

            ms_obj.inner.style.position = "absolute";
            ms_obj.inner.style.top = ms_obj.top;
            ms_obj.inner.style.bottom = ms_obj.bottom;
            ms_obj.inner.style.left = ms_obj.left;
            ms_obj.inner.style.right = ms_obj.right;
            ms_obj.inner.style.width = ms_obj.width;
            ms_obj.inner.style.height = ms_obj.height;
            ms_obj.inner.style.backgroundColor = "#fff";
            ms_obj.inner.style.transform = "translate3d(" + ms_obj.translate + ")";
            ms_obj.inner.style.webkitTransition = "all .2s ease-out";
            ms_obj.inner.style.transition = "all .2s ease-out";
            ms_obj.inner.style.zIndex = 100;

            ms_obj.mask.style.width = "100%";
            ms_obj.mask.style.height = "100%";
            ms_obj.mask.style.opacity = "0";
            ms_obj.mask.style.backgroundColor = "black";
            ms_obj.mask.style.zIndex = "98";
            ms_obj.mask.style.webkitTransition = "all .2s ease-out";
            ms_obj.mask.style.transition = "all .2s ease-out";
            ms_obj.mask.style.webkitBackfaceVisibility = "hidden";

            ms_obj.events()
        },

        open: function () {
            let d = this;
            d.wrap.style.display = "block";
            setTimeout(function () {
                d.inner.style.transform = "translate3d(0,0,0)";
                d.inner.style.webkitTransform = "translate3d(0,0,0)";
                d.mask.style.opacity = 0.5
            }, 30);
            if (d.opts.time) {
                d.timer = setTimeout(function () {
                    d.close()
                }, d.opts.time)
            }
        },

        close: function () {
            let d = this;
            d.timer && clearTimeout(d.timer);
            d.inner.style.webkitTransform = "translate3d(" + d.translate + ")";
            d.inner.style.transform = "translate3d(" + d.translate + ")";
            d.mask.style.opacity = 0;
            setTimeout(function () {
                d.wrap.style.display = "none";
                d.timer = null;
                d.opts.callback && d.opts.callback()
            }, 300)
        },

        events: function () {
            let d = this;
            d.addEvent(d.mask, "touchmove", function (dom) {
                dom.preventDefault()
            });
            d.addEvent(d.mask, (d.isMobile() ? "touched" : "click"), function (f) {
                if (d.opts.maskClose) {
                    d.close()
                }
            })
        }
    };


    b.MSlider = MS
})(window);