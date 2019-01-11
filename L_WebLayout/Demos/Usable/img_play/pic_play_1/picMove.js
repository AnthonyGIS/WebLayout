;(function ($) {
    $.fn.extend({
        fade: function (opt) {
            var settings = {url: null, boxWid: 1000, boxHei: 500, times: 2000};
            var o = $.extend(settings, opt);
            var $box = this;
            var $oUl = $('<ul></ul>');
            var $prev = $('<h3>&lt;</h3>');
            var $next = $('<h3>&gt;</h3>');
            $.each(o.url, function (index, items) {
                $box.append('<div><a href=' + items.href + '><img src=' + items.imgUrl + ' /></a></div>');
                $oUl.append('<li></li>');
            });
            $box.append($oUl, $prev, $next);
            $box.css({width: o.boxWid, height: o.boxHei, position: 'relative'}).children('div').css({
                width: o.boxWid,
                height: o.boxHei,
                position: 'absolute',
                left: '0',
                top: '0',
                display: 'none'
            }).eq(0).show().end().find('a,img').css({display: 'block', width: '100%', height: '100%'});
            $oUl.css({
                position: 'absolute',
                bottom: o.boxHei / 20,
                right: o.boxWid / 20,
                overflow: 'hidden',
                zIndex: 5,
                listStyle: 'none'
            }).children('li').css({
                float: 'left',
                width: 15,
                height: 15,
                borderRadius: '50%',
                background: '#fff',
                opacity: 0.3,
                marginRight: 5
            }).eq(0).css('opacity', 0.9);
            $box.children('h3').css({
                position: 'absolute',
                top: (o.boxHei - 70) / 2,
                padding: '20px 10px',
                fontSize: 30,
                fontFamily: '黑体',
                color: '#fff',
                background: 'rgba(0,0,0,0.5)',
                cursor: 'pointer'
            }).hide().eq(1).css('right', '0');
            var $timer = setTimeout(move, o.times);
            var $flag = true;
            var $index = 0;

            function move() {
                $index++;
                if ($index === o.url.length) {
                    $index = 0;
                }
                $box.children('div').eq($index).stop().fadeIn(300, function () {
                    if ($flag) {
                        clearTimeout($timer);
                        $timer = setTimeout(move, o.times);
                    }
                }).siblings('div').stop().fadeOut(300);
                $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
            }

            $oUl.children('li').click(function () {
                $index = $(this).index();
                $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                $(this).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
            });
            $box.hover(function () {
                $flag = false;
                clearTimeout($timer);
                $(this).children('h3').stop().fadeIn(300);
                $prev.off('click').click(function () {
                    $index--;
                    if ($index === -1) {
                        $index = o.url.length - 1;
                    }
                    $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                    $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                }).next('h3').off('click').click(function () {
                    $index++;
                    if ($index === o.url.length) {
                        $index = 0;
                    }
                    $box.children('div').eq($index).stop().fadeIn(300).siblings('div').stop().fadeOut(300);
                    $oUl.children('li').eq($index).stop().fadeTo(300, 0.9).siblings('li').stop().fadeTo(300, 0.3);
                })
            }, function () {
                $flag = true;
                $timer = setTimeout(move, o.times);
                $(this).children('h3').stop().fadeOut(300)
            });
            $box.children('h3').each(function (index, items) {
                items.onselectstart = items.onmousedown = items.onmouseup = function () {
                    return false;
                }
            });
            return this;
        }
    })
}(jQuery));