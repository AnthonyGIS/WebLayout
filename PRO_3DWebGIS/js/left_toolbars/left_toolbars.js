// ORI
jQuery(document).ready(function($){
	var $lateral_menu_trigger = $('#cd-menu-trigger'),
		$content_wrapper = $('.cd-main-content'),
		$navigation = $('header');

	//open-close lateral menu clicking on the menu icon
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, so we need to wait for the end of the transitions to give the body an overflow hidden
			$('body').toggleClass('overflow-hidden');
		});
		$('#cd-lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			$('body').toggleClass('overflow-hidden');
		}
	});

	//close lateral menu clicking outside the menu itself
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
			$('#cd-lateral-nav').removeClass('lateral-menu-is-open');
			//check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				$('body').removeClass('overflow-hidden');
			}

		}
	});

	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
	$('.item-has-children').children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
	});
});

// 侧边栏
// ---------------------------------------------------------------------------------------
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
            '<dd><a href="#" class="web">Main</a></dd> ' +
            '<dd><a href="#" class="mb">项目</a></dd>' +
            '<dd><a href="#" target="_blank" class="dj">成果</a></dd>' +
            '<dd><a href="#" target="_blank" class="mh">范围</a></dd>' +
            '<dd><a href="#" class="dh">UAV</a></dd>' +
            '<dd><a href="http://www.jq22.com/demo/jQuery-nav-150326225206/" class="pk165">Source</a></dd>' +
            '<dd><a href="#" class="w267">Help</a></dd>' +
            '<dt><a href="#" class="close" ></a></dt>' +
            '</dl></div>';

        if (_st == 1) {
            // 隐藏
            $(_code).hide().appendTo("body").fixed({x: -44, y: 0}).fadeIn(500);
            $("#fixed dt a.close").width('68px');
        } else {  // 展现
            $(_code).hide().appendTo("body").fixed({x: 0, y: 0}).fadeIn(500);
        }

        $("#fixed dt").click(function () {
            var fixed_obj;
            fixed_obj = $("#fixed");
            var _left = fixed_obj.offset().left; //获取距离左边的距离

            if (_left >= 0) {
                // 如果是打开时
                $.cookie("fixed", 1, {path: '/'});
                fixed_obj.animate({left: -44}, 300, 'swing', function () {
                    $("#fixed dt a.close").hide().width('68px').fadeIn(500);
                });
            }
            else {
                // 如果是关闭时
                $.cookie("fixed", 0, {path: '/'});
                $("#fixed dt a.close").width('44px');
                fixed_obj.animate({left: 0}, 300, 'swing', function () {
                });
            }
        });
    }
});
