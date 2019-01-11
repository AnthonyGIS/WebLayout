var browser = {
    versions: function () {
        var u = navigator.userAgent;
        var app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') === -1
        };
    }(), language: (navigator.browserLanguage || navigator.language).toLowerCase()
};


$(document).ready(function () {
    if (!browser.versions.mobile) {
        var _st = $.cookie("fixed"); // 获取Cookie值
        if (!_st) _st = 0;
        var _code = '<div id="fixed" ><dl>' +
            '<dd><a href="#" class="web">OSGB</a></dd> ' +
            '<dd><a href="#" class="mb">Cord</a></dd>' +
            '<dd><a href="#" target="_blank" class="dj">Label</a></dd>' +
            '<dd><a href="#" target="_blank" class="mh">Draw</a></dd>' +
            '<dd><a href="#" target="_blank" class="dh">气泡</a></dd>' +
            '<dd><a href="http://www.jq22.com/demo/jQuery-nav-150326225206/" class="pk165">弹窗</a></dd>' +
            '<dd><a href="#" class="w267">GIS</a></dd>' +
            '<dt><a href="javascript:void(0);" class="close" ></a></dt>' +
            '</dl></div>';

        if (_st === 1) {  // 隐藏
            $(_code).hide().appendTo("body").fixed({x: -44, y: 0}).fadeIn(500);
            $("#fixed dt a.close").width('68px');
        } else {  // 展现
            $(_code).hide().appendTo("body").fixed({x: 0, y: 0}).fadeIn(500);
        }

        $("#fixed dt").click(function () {

            var _left = $("#fixed").offset().left; //获取距离左边的距离

            if (_left >= 0) {
                // 如果是打开时
                $.cookie("fixed", 1, {path: '/'});
                $("#fixed").animate({left: -44}, 300, 'swing', function () {
                    $("#fixed dt a.close").hide().width('68px').fadeIn(500);
                });
            }
            else {
                // 如果是关闭时
                $.cookie("fixed", 0, {path: '/'});
                $("#fixed dt a.close").width('44px');
                $("#fixed").animate({left: 0}, 300, 'swing', function () {
                });
            }
        });
    }
});
