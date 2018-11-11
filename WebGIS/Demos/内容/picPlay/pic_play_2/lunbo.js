(function ($) {
        $.fn.changePic = function (options) {
            var defaults ={
                    figureTime: 5000,
                    figureBtnAct: 'ctrl-sel',
                    aroundEvent: 'click',
                    showButton: true,
                    switchHover: true,
                    clickNode: $(".page-ctrl li"),
                    loopNode: $(".banner-pic"),
                    loopCircle: "-1200px",
                    loopTime: 700,
                    sameNode: $(".same-pic-lop"),
                    attrData: "statics",
                    leftBtn: $(".next-ctrl"),
                    rightBtn: $(".prev-ctrl")
                };

            options = $.extend(defaults, options);
            this.each(function () {
                    var _this = $(this);
                    var oLi = _this.find(options.clickNode);
                    var oWid = _this.find(options.sameNode).width();
                    var oLen = _this.find(options.sameNode).length;
                    var oBnnerWid = oWid * oLen;
                    options.loopNode.width(oBnnerWid);
                    var time, page = 0;
                    time = setInterval(function () {
                            moveLeft();
                        }, options.figureTime);
                    function moveLeft() {
                        page++;
                        if (page > oLen - 1) page = 0;
                        options.loopNode.animate(
                            {"left": options.loopCircle},
                            options.loopTime, function () {
                                $(this).children().first().appendTo(options.loopNode.css("left", "0px"));
                                options.showButton = true;
                            }
                        );

                        oLi.eq(page).addClass(options.figureBtnAct).siblings().removeClass(options.figureBtnAct)
                    }
                    function moveRight() {
                        page--;

                        if (page < 0) page = oLen - 1;

                        options.loopNode.children().last().prependTo(options.loopNode).parent().css("left", options.loopCircle).animate(
                            {"left": "0px"}
                            , options.loopTime, function () {
                                options.showButton = true;
                            }
                        );
                        oLi.eq(page).addClass(options.figureBtnAct).siblings().removeClass(options.figureBtnAct)
                    }
                    _this.mouseover(function (event) {
                            clearInterval(time);
                        }
                    ).mouseleave(function (event) {
                            if (options.switchHover) {
                                options.loopNode.html("");
                                for (var i = 0;
                                     i < oLen;
                                     i++) {
                                    options.loopNode.append("<img src='img/a" + ((i + page) % oLen + 1) + ".png' name='" + (i + page) % oLen + "' alt='' />")
                                }
                            }
                            time = setInterval(function () {
                                    moveLeft();
                                }, options.figureTime);
                        }
                    );
                    options.rightBtn.on(options.aroundEvent, function (event) {
                            if (options.showButton) {
                                moveRight();
                            }
                            options.showButton = false;
                        }
                    );
                    options.leftBtn.on(options.aroundEvent, function (event) {
                            if (options.showButton) {
                                moveLeft();
                            }
                            options.showButton = false;
                        }
                    );
                    oLi.on(options.aroundEvent, function (event) {
                            if (options.switchHover) {
                                options.switchHover = false;
                                page = $(this).index();
                                var oName = options.loopNode.children(options.sameNode).eq(0).attr(options.attrData);
                                oLi.eq(page).addClass(options.figureBtnAct).siblings().removeClass(options.figureBtnAct);
                                if (page !== oName) {
                                    options.loopNode.children(options.sameNode).filter(
                                        "[" + options.attrData + "=" + page + "]").insertAfter(
                                            options.loopNode.children(options.sameNode).first()).stop().parent().animate(
                                        {"left": options.loopCircle},
                                            options.loopTime, function () {
                                            options.loopNode.children(options.sameNode).first().appendTo(
                                                options.loopNode).parent().css("left", "0px");
                                            options.switchHover = true;
                                        }
                                    )
                                }
                                else {
                                    options.switchHover = true
                                }
                            }
                        }
                    );






                });
        }
    }
)(jQuery);

