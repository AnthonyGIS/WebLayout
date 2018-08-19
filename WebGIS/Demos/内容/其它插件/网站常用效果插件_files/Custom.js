$(function(){$.fn.limit=function(num){var objString=$(this).text();var objLength=$(this).text().length;if(objLength>num){$(this).attr("title",objString);objString=$(this).text(objString.substring(0,num)+"...");}};$.each($('*[dsh=limit'),function(i){$('*[dsh=limit').eq(i).limit($('*[dsh=limit').eq(i).attr('num'));});$.fn.imgAuto=function(maxWidth,maxHeight){var $t=$(this);function DrawImg(obj,boxWidth,boxHeight)
{var imgWidth=obj.width();var imgHeight=obj.height();if((boxWidth/boxHeight)>=(imgWidth/imgHeight))
{obj.width((boxHeight*imgWidth)/imgHeight);obj.height(boxHeight);}
else
{obj.width(boxWidth);obj.height((boxWidth*imgHeight)/imgWidth);var margin=(boxHeight-obj.height())/2;obj.css("margin-top",margin);}}
DrawImg($t.find('img'),maxWidth,maxHeight);};$.each($('*[dsh=imgAuto]'),function(i){$('*[dsh=imgAuto]').eq(i).imgAuto($('*[dsh=imgAuto]').eq(i).attr('width'),$('*[dsh=imgAuto]').eq(i).attr('height'));});$.fn.GetTime=function(Welcome,Format,putType){var timebox=$(this);var date=new Date;var Year=date.getFullYear();var Month=parseInt(date.getMonth())+1;var Day=date.getDate();var Week=date.getDay();var Hours=parseInt(date.getHours());var Minutes=parseInt(date.getMinutes());var Seconds=parseInt(date.getSeconds());var vk="";var hello="";switch(Week)
{case 0:vk="日";break;case 1:vk="一";break;case 2:vk="二";break;case 3:vk="三";break;case 4:vk="四";break;case 5:vk="五";break;case 6:vk="六";break;}
if(Hours<=8){hello="早上好！";}
if(Hours>8&Hours<12){hello="上午好！";}
if(Hours>=12&Hours<14){hello="中午好！";}
if(Hours>=14&Hours<20){hello="下午好！";}
if(Hours>=20){hello="晚上好！";}
if(Hours<10){Hours="0"+Hours;}
if(Minutes<10){Minutes="0"+Minutes;}
if(Seconds<10){Seconds="0"+Seconds;}
if(Welcome==""||Welcome==null){Welcome='欢迎光临，今天是：';}
if(Format==""||Format==null){Format='1';}
if(putType==""||putType==null){switch(Format){case '0':timebox.html(Hours+" : "+Minutes+" : "+Seconds);break;case '1':timebox.html(hello+Welcome+Year+"年"+Month+"月"+Day+"日 "+" 星期"+vk+" "+Hours+" : "+Minutes+" : "+Seconds);break;case '2':timebox.html(Welcome+Year+"年"+Month+"月"+Day+"日 "+" 星期"+vk);break;case '3':timebox.html(Welcome+Hours+" : "+Minutes+" : "+Seconds);break;}}else{timebox.val(Year+"-"+Month+"-"+Day+" "+Hours+":"+Minutes+":"+Seconds);}};$.each($('*[dsh=time]'),function(i){var wel=$('*[dsh=time]').attr('wel')!='undefined'?$('*[dsh=time]').attr('wel'):'';if($('*[dsh=time]').eq(i).is('input')){setInterval(function(){$('*[dsh=time]').eq(i).GetTime('','1','input')},1000);}else{setInterval(function(){$('*[dsh=time]').eq(i).GetTime(wel,'1');},1000);}});$.fn.tab=function(MenuTags,MenuOnClass,Nav,NavTags,Event){var YjMenu=$(this);var ms=YjMenu.find(MenuTags).length;var ns=$(Nav).find(NavTags).length;if(ms!=ns){YjMenu.html('错误信息：主菜单与二级菜单数不同,如果二级菜单有为空的请保留空标签！').css({color:'#f00',background:'#FF9',fontSize:'12px',padding:'5px'});$('.'+Nav+'').css({display:'none'});return;}
YjMenu.find(MenuTags).css({cursor:'pointer'});$(Nav).find(NavTags).css({display:'none'});for(var s=0;s<ms;s++){YjMenu.find(MenuTags).eq(s).attr('s',s);}
$(Nav).find(NavTags).eq(0).css({display:'block'});YjMenu.find(MenuTags).eq(0).addClass(MenuOnClass);if(Event=='click'){YjMenu.find(MenuTags).click(function(){var RjMenu=$(this);var sy=RjMenu.attr('s');for(var i=0;i<ms;i++){if(i==sy){YjMenu.find(MenuTags).eq(i).addClass(MenuOnClass);$(Nav).find(NavTags).eq(i).css({display:'block'});}else{YjMenu.find(MenuTags).eq(i).removeClass(MenuOnClass);$(Nav).find(NavTags).eq(i).css({display:'none'});}}})}
if(Event=='hover'||Event==''){YjMenu.find(MenuTags).mouseover(function(){var RjMenu=$(this);var sy=RjMenu.attr('s');for(var i=0;i<ms;i++){if(i==sy){YjMenu.find(MenuTags).eq(i).addClass(MenuOnClass);$(Nav).find(NavTags).eq(i).css({display:'block'});}else{YjMenu.find(MenuTags).eq(i).removeClass(MenuOnClass);$(Nav).find(NavTags).eq(i).css({display:'none'});}}})}};$.each($('*[dsh=tab]'),function(i){$('*[dsh=tab]').eq(i).tab('*[tab]','focus',$('*[dsh=tab]').eq(i).find('*[switchblock]'),'*[block]',$('*[dsh=tab]').eq(i).attr('event'));});$.fn.tool=function(Hmpe,type,Favs){var Address=location.href;kdocTitle=$('title').html();if(kdocTitle==null){var t_titles=$('title');if(t_titles&&t_titles.length>0)
{kdocTitle=t_titles[0];}else{kdocTitle="";}}
if(Hmpe==""||Hmpe==null){Hmpe='设为首页';}
if(type==""||type==null){type='';}
if(Favs==""||Favs==null){Favs='加入收藏';}
function SetHome(url){if(document.all){document.body.style.behavior='url(#default#homepage)';document.body.setHomePage(url);}else{alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");}}
var Homepage="<a title='"+Hmpe+"' onclick=\"javascript:SetHome("+Address+")\">"+Hmpe+"</a>";var Favorites="<a onclick=\"javascript:window.external.addFavorite('"+Address+"','"+kdocTitle+"')\" title='"+Favs+"'>"+Favs+"</a>";$(this).html(Favorites+type+Homepage);};$.each($('*[dsh=sc]'),function(i){$('*[dsh=sc]').eq(i).tool('设为首页','   ','加入收藏');});$.fn.icc=function(listTags,onStyle,evenStyle,oddStyle){var alst=$(this);if(listTags==""||listTags==null){alst.html('错误信息：没有传入列表标记').css({color:'#f00',background:'#FF9',fontSize:'12px',padding:'5px'});return;}
var ls=alst.find(listTags).length;if(ls==""||ls==null){alst.html('错误信息：传入列表标记错误').css({color:'#f00',background:'#FF9',fontSize:'12px',padding:'5px'});return;}
if(!evenStyle==""||!evenStyle==null||!oddStyle==""||!oddStyle==null){alst.find(listTags+':even').addClass(evenStyle);alst.find(listTags+':odd').addClass(oddStyle);}
for(var s=0;s<ls;s++){alst.find(listTags).eq(s).attr('s',s);}
alst.find(listTags).mouseover(function(){var alstTags=$(this);var sy=alstTags.attr("s");for(var i=0;i<ls;i++)
{if(i==sy&&onStyle){alst.find(listTags).eq(i).addClass(onStyle);alst.find(listTags).eq(i).removeClass(oddStyle);alst.find(listTags).eq(i).removeClass(evenStyle);}else{alst.find(listTags).eq(i).removeClass(onStyle);if(i%2==1){alst.find(listTags).eq(i).addClass(oddStyle);}
else{alst.find(listTags).eq(i).addClass(evenStyle);}}}})};$.each($('*[dsh=icc]'),function(i){$('*[dsh=icc]').eq(i).icc('*[listtag]','focusstyle','basestyle','evenstyle');});$.fn.qq=function(Num,Style){var str='<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin='+Num+'&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:'+Num+':'+Style+'" alt="点击这里给我发消息" title="点击这里给我发消息"></a>';$(this).html(str);};$.each($('*[dsh=qq]'),function(i){var v=$('*[dsh=qq]').eq(i).attr('qq').split(',');$('*[dsh=qq]').eq(i).qq(v[0],v[1]);});$.colsewindow=function(){window.opener=null;window.open("","_self");window.close();};$.each($('*[dsh=closewindow]'),function(i){$('*[dsh=closewindow]').eq(i).click(function(){$.colsewindow()});});$.GetRequest=function(){var url=location.search;var theRequest={};if(url.indexOf("?")!=-1){var str=url.substr(1);strs=str.split("&");for(var i=0;i<strs.length;i++){theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);}}
    return theRequest;
};
    var RequestQueryString = {};
    RequestQueryString = $.GetRequest();
    $.fn.roll = function (o) {
        var defaults = {speed: 30};
        var opts = $.extend(defaults, o);
        var $e = $(this);
        $e.css({overflow: 'hidden'});
        $e.html('<div class="rollDiv"><div>' + $e.html() + '</div>\r\n<div></div></div>');
        $e.find('.rollDiv').css({width: '9999px'});
        $e.find('.rollDiv').find('div').css({float: 'left'});
        var _slideli1 = $e.find('.rollDiv').find('div:eq(0)');
        var _slideli2 = $e.find('.rollDiv').find('div:eq(1)');
        _slideli2.html(_slideli1.html());
        function Marquee() {
            if ($e.scrollLeft() >= _slideli1.width()) {
                $e.scrollLeft(0);
            } else {
                $e.scrollLeft($e.scrollLeft() + 1);
            }
        }
        var sliding = setInterval(Marquee, opts.speed);
        $e.hover(function () {
            clearInterval(sliding);
        }, function () {
            sliding = setInterval(Marquee, opts.speed);
        });
    };
    $.each($('*[dsh=roll]'), function (i) {
        $('div[dsh=roll]:eq(' + i + ')').roll();
    });
    $.fn.rollTop = function (opt, callback) {
        if (!opt) var opt = {};
        var _btnUp = $(this).find(opt.up);
        var _btnDown = $(this).find(opt.down);
        var timerID;
        var _this = this.eq(0).find("ul:first");
        var lineH = _this.find("li:first").height(),
            line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10),
            speed = opt.speed ? parseInt(opt.speed, 10) : 500;
        timer = opt.timer;
        if (line == 0) line = 1;
        var upHeight = 0 - line * lineH;
        var scrollUp = function () {
            _btnUp.unbind("click", scrollUp);
            _this.animate({marginTop: upHeight}, speed, function () {
                for (i = 1; i <= line; i++) {
                    _this.find("li:first").appendTo(_this);
                }
                _this.css({marginTop:-1});_btnUp.bind("click",scrollUp);});};
var scrollDown=function(){_btnDown.unbind("click",scrollDown);for(i=1;i<=line;i++){_this.find("li:last").show().prependTo(_this);}
_this.css({marginTop:upHeight});_this.animate({marginTop:0},speed,function(){_btnDown.bind("click",scrollDown);});};
    var autoPlay = function () {
        if (timer) timerID = window.setInterval(scrollUp, timer);
    };
    var autoStop = function () {
        if (timer) window.clearInterval(timerID);
    };
    _this.hover(autoStop, autoPlay).mouseout();
    _btnUp.css("cursor", "pointer").click(scrollUp).hover(autoStop, autoPlay);
    _btnDown.css("cursor", "pointer").click(scrollDown).hover(autoStop, autoPlay);
};
    $.each($('*[dsh=rollTop]'), function (i) {
        $('*[dsh=rollTop]').eq(i).rollTop({
            line: $('*[dsh=rollTop]').eq(i).attr('line'),
            speed: $('*[dsh=rollTop]').eq(i).attr('speed'),
            timer: $('*[dsh=rollTop]').eq(i).attr('timer'),
            up: '*[btnt]',
            down: '*[btnb]'
        });
    });
    $.fn.rollLeft = function (o) {
        var defaults = {
            RollRow: 1,
            DisplayRow: 7,
            Time: 3000,
            Left: null,
            Right: null,
            SwitchBigImg: false,
            Title: false
        };
        var opts = $.extend(defaults, o);
        var $r = $(this);
        var $s = $r.find('li').length;
        var $w = $r.find('li').width();
        var $led = $r.find('ul');
        var $roll_width = opts.RollRow * $w;
        var $page = 1;
        var $page_count = parseInt($s / opts.RollRow);
        var $y = $s % opts.RollRow;
        var aPay;
        $r.css({overflow: 'hidden', position: 'relative'});
        $led.css({display: 'block', position: 'relative'});
        $r.find('li').css({cursor: 'pointer'});
        if ($s > opts.DisplayRow) {
            $led.append($led.html());
        }
        $r.parents('*[dsh=rollLeft]').find(opts.Title).html($r.find('li:eq(0)').attr('title'));
        $r.parents('*[dsh=rollLeft]').find(opts.Right).bind('click', function () {
            rPay();
        });
        $r.parents('*[dsh=rollLeft]').find(opts.Left).bind('click', function () {
            if ($s > opts.DisplayRow) {
                if (!$led.is(":animated")) {
                    if ($page == 1) {
                        $led.animate({left: '-=' + $roll_width * ($page_count - 1)}, "slow");
                        $page = $page_count;
                    } else {
                        $led.animate({left: '+=' + $roll_width}, "slow");
                        $page--;
                    }
                }
            }
            stBig($page);});function rPay(){if($s>opts.DisplayRow){if(!$led.is(":animated")){if($page==$page_count){$led.animate({left:'0px'},"slow");$page=1;}else{$led.animate({left:'-='+$roll_width+'px'},"slow");$page++;}}}
    stBig($page);
}
    if (opts.SwitchBigImg != false || opts.Title != false) {
        var $ms = 0;
        $r.find('li').bind('click', function () {
            $r.parents('*[dsh=rollLeft]').find(opts.SwitchBigImg).hide().attr('src', $(this).find('img').attr('bigSrc')).fadeIn();
            $r.parents('*[dsh=rollLeft]').find(opts.Title).html($(this).attr('title'));
        });
        show($ms);
        function show(s) {
            var src = $r.find('li:eq(' + (s - 1) + ')').find('img').attr('bigSrc');
            if (src == 'undefined') {
                alert('请为缩略图列表图片指定bigSrc属性，值为大图地址');
            } else {
                $r.parents('*[dsh=rollLeft]').find(opts.SwitchBigImg).hide().attr('src', $r.find('li:eq(' + s + ')').find('img').attr('bigSrc')).fadeIn();
                $r.parents('*[dsh=rollLeft]').find(opts.SwitchBigImg).parent('a').attr('href', $r.find('li:eq(' + s + ')').attr('href'));
                $r.parents('*[dsh=rollLeft]').find(opts.Title).html($r.find('li:eq(' + (s - 1) + ')').attr('title'));
            }
        }
    }
    function stBig(s){if(opts.SwitchBigImg!=false||opts.Title!=false){var src=$r.find('li:eq('+(s-1)+')').find('img').attr('bigSrc');if(src=='undefined'){alert('请为缩略图列表图片指定bigSrc属性，值为大图地址');}else{$r.parents('*[dsh=rollLeft]').find(opts.SwitchBigImg).hide().attr('src',src).fadeIn(500);$r.parents('*[dsh=rollLeft]').find(opts.SwitchBigImg).parent('a').attr('href',$r.find('li:eq('+(s-1)+')').attr('href'));$r.parents('*[dsh=rollLeft]').find(opts.Title).html($r.find('li:eq('+(s-1)+')').attr('title'));}}}
if(opts.Time>0){aPay=setInterval(rPay,opts.Time);$r.parents('*[dsh=rollLeft]').find(opts.Left).hover(function(){clearInterval(aPay);},function(){aPay=setInterval(rPay,opts.Time);});$r.parents('*[dsh=rollLeft]').find(opts.Right).hover(function(){clearInterval(aPay);},function(){aPay=setInterval(rPay,opts.Time);});}};$.each($('*[dsh=rollLeft]'),function(i){var ti=$('*[dsh=rollLeft]').eq(i);ti.find('*[roll]').rollLeft({RollRow:ti.attr('RollRow'),DisplayRow:ti.attr('DisplayRow'),Left:'*[btnl]',Right:'*[btnr]',Time:ti.attr('Time'),SwitchBigImg:ti.attr('SwitchBigImg'),Title:ti.attr('Title')});});$.topPrompt=function(w,h,msg){$('<div>',{'class':'topPrompt',html:'<b>×</b><p></p>'}).appendTo('body');$('.topPrompt b').css({cursor:'pointer',float:'right',padding:'0px 5px 0px 0px'});$('.topPrompt p').css({padding:'8px',color:'#666'});$('.topPrompt p').html(msg);$('.topPrompt').css({position:'absolute',top:($(window).height()-h)/2+'px',left:($(window).width()-w)/2+'px',display:'none',width:w+'px',height:h+'px',border:'solid #9BDF70 1px',background:'#F0FBEB',zIndex:'999999'});$('.topPrompt').slideDown("slow");$(window).scroll(function(){var top=$(document).scrollTop();$('.topPrompt').css({top:($(window).height()-h)/2+top+"px"});});$('.topPrompt').find('b').click(function(){$('.topPrompt').fadeOut();});};$.fn.flash=function(o){var _html;try{_html='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+o.width+'" height="'+o.height+'">';_html+='<param name="movie" value="'+o.src+'" />';_html+='<param name="quality" value="high" />';_html+='<param name="wmode" value="'+o.wmode+'" />';_html+='<embed src="'+o.src+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+o.width+'" height="'+o.height+'"></embed>';_html+='</object>';if(o.mask==true){$(this).css({position:'relative'});_html+='<i style="display:block;width:'+o.width+'px;height:'+o.height+'px;background:#000;position:absolute;z-index:99;top:0px;left:0px;filter: alpha(opacity=0); opacity: 0.8;"></i>';}}
catch(e){_html='<p>您没有安装flash插件或此插件已被禁用</p>';}
$(this).html(_html);};$.each($('*[dsh=flash]'),function(i){var ti=$('*[dsh=flash]').eq(i);ti.flash({src:ti.attr('src'),width:ti.attr('width'),height:ti.attr('height'),wmode:'transparent',mask:true});});jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};$.fn.smartFloat=function(o){var defaults={top:0};
var opts=$.extend(defaults,o);var position=function(element){var top=element.position().top,pos=element.css("position");$(window).scroll(function(){var scrolls=$(this).scrollTop();if(scrolls>top){if(window.XMLHttpRequest){element.css({position:"fixed",top:opts.top});}else{element.css({top:scrolls});}}else{element.css({position:"absolute",top:top});}});};return $(this).each(function(){position($(this));});};$.each($('*[dsh=smartFloat]'),function(i){$('*[dsh=smartFloat]').eq(i).smartFloat();});$.fn.scrollLoading=function(options){var defaults={attr:"data-url"};var params=$.extend({},defaults,options||{});params.cache=[];$(this).each(function(){var node=this.nodeName.toLowerCase(),url=$(this).attr(params["attr"]);if(!url){return;}
var data={obj:$(this),tag:node,url:url};params.cache.push(data);});var loading=function(){var st=$(window).scrollTop(),sth=st+$(window).height();$.each(params.cache,function(i,data){var o=data.obj,tag=data.tag,url=data.url;if(o){post=o.offset().top;posb=post+o.height();if((post>st&&post<sth)||(posb>st&&posb<sth)){if(tag==="img"){o.attr("src",url);}else{o.load(url);}
    data.obj = null;
}
}
});
    return false;
};
    loading();
    $(window).bind("scroll", loading);
};
    $('img').scrollLoading();
    $.each($('*[dsh=scrollLoading]'), function (i) {
        $('*[dsh=scrollLoading]').eq(i).scrollLoading();
    });
    $.fn.hoverDelay = function (options) {
        var defaults = {
            hoverDuring: 200, outDuring: 200, hoverEvent: function () {
                $.noop();
            }, outEvent: function () {
                $.noop();
            }
        };
        var sets = $.extend(defaults, options || {});
        var hoverTimer, outTimer;
        return $(this).each(function () {
            $(this).hover(function () {
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            }, function () {
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
        });
    };
    $.fn.CasSelect = function (options) {
        var defaults = {tree: true, indent: 20};
        var sets = $.extend(defaults, options || {});
        var TreeSt = $(this);
        TreeSt.find('a').click(function () {
            var id = $(this).attr('id');
            var rjs = TreeSt.find('a[pid=' + id + ']').length;
            if (rjs > 0) {
                if ($(this).find('input:checkbox').attr('checked')) {
                    nav(id, true);
                } else {
                    nav(id, false);
                }
            }
        });
        function nav(pid, mode) {
            TreeSt.find('a[pid=' + pid + ']').each(function (i) {
                TreeSt.find('a[pid=' + pid + ']').eq(i).find('input:checkbox').attr('checked', mode);
                var id = TreeSt.find('a[pid=' + pid + ']').eq(i).attr('id');
                nav(id, mode);
            })
        }
        if (sets.tree) {
            pdl(0, sets.indent);
            function pdl(i, n) {
                var ss = TreeSt.find('a').length;
                var lt = i * n;
                TreeSt.find('.p' + i).css({paddingLeft: lt + 'px'});
                if (i == ss) {
                    return;
                }
                pdl(i + 1, n);
}
}
};
    $.each($('*[dsh=CasSelect]'), function (i) {
        $('*[dsh=CasSelect]').eq(i).CasSelect();
    });
    $.fn.IsNull = function (content) {
        if (content == null) {
            content = '暂无内容...';
        }
        if ($(this).html() == "") {
        $(this).html('<p class="Null">' + content + '</p>');
    }
};
    $.fn.input = function () {
        var Default = $(this).attr('default');
        $(this).val(Default);
        $(this).bind('focus', function () {
            if ($(this).val() == Default) {
                $(this).val('');
            }
        });
        $(this).bind('blur', function () {
            if ($(this).val() == '' || $(this).val() == Default) {
                $(this).val(Default);
            }
        });
    };
    $.each($('input[type=text]'), function (i) {
        if ($('input[type=text]').eq(i).attr('default') != null) {
            $('input[type=text]').eq(i).input();
        }
    });
    $.fn.fs = function (o) {
        var defaults = {bg: '#000', btnH: '30px', btnBgbottom: '0px', btnbottom: '5px', textAlign: 'right'};
        var opts = $.extend(defaults, o);
        var $r = $(this);
        $r.css({width: $r.width(), height: $r.height(), overflow: 'hidden', position: 'relative'});
        $r.find('ul').css({position: 'absolute', height: $r.height()});
        $r.find('ul li').css({
            float: 'left',
            width: $r.width(),
            height: $r.height(),
            overflow: 'hidden',
            position: 'relative'
        });
        $r.find('ul li div').css({position: 'absolute', overflow: 'hidden'});
        var sWidth = $r.width();
        var len = $r.find('ul li').length;
        var index = 0;
        var picTimer;
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for (var i = 0; i < len; i++) {
            btn += "<span>" + (i + 1) + "</span>";
        }
        btn += "</div>";
        $r.append(btn);
        $r.find(".btnBg").css("opacity", 0.5);
        $r.find('.btnBg').css({
            position: 'absolute',
            width: $r.width(),
            left: '0px',
            bottom: '0px',
            height: opts.btnH,
            background: opts.bg,
            bottom: opts.btnBgbottom
        });
        $r.find('.btn').css({
            position: 'absolute',
            width: $r.width() - 10,
            bottom: opts.btnbottom,
            textAlign: opts.textAlign,
            left: '0px'
        });
        $r.find('.btn span').css({display: 'inline-block', _display: 'inline', _zoom: '1', cursor: 'pointer'});
        $r.find(".btn span").mouseenter(function () {
            index = $r.find(".btn span").index(this);
            showPics(index);
        }).eq(0).trigger("mouseenter");
        $r.find("ul").css("width", sWidth * (len + 1));
        $r.find("ul li div").hover(function () {
            $(this).siblings().css("opacity", 0.7);
        }, function () {
            $r.find("ul li div").css("opacity", 1);
        });
        $r.hover(function () {
            clearInterval(picTimer);
        }, function () {
            picTimer = setInterval(function () {
                if (index == len) {
                    showFirPic();
                    index = 0;
                } else {
                    showPics(index);
                }
                index++;
}, 3000);
}).trigger("mouseleave");
    function showPics(index) {
        var nowLeft = -index * sWidth;
        $r.find("ul").stop(true, false).animate({"left": nowLeft}, 500);
        $r.find(".btn span").removeClass("on").eq(index).addClass("on");
    }
    function showFirPic() {
        $r.find("ul").append($r.find("ul li:first").clone());
        var nowLeft = -len * sWidth;
        $r.find("ul").stop(true, false).animate({"left": nowLeft}, 500, function () {
            $r.find("ul").css("left", "0");
            $r.find("ul li:last").remove();
        });
        $r.find(".btn span").removeClass("on").eq(0).addClass("on");
    }
};
    $.each($('*[dsh=fs]'), function (i) {
        var ti = $('*[dsh=fs]').eq(i);
        ti.eq(i).fs();
    });
    $.syncHigh = function (ele1, ele2) {
        function LrHeight() {
            var _left = ele1.height();
            var _right = ele2.height();
            if (_left < _right) {
                ele1.css({height: _right});
            } else {
                ele2.css({height: _left});
            }
        }
        LrHeight();
        $(window).resize(function () {
            LrHeight();
        })
    };
    $.fn.pager = function (clas, options) {
        var settings = {
            navId: 'nav',
            navClass: 'Page',
            navAttach: 'append',
            highlightClass: 'focus',
            prevText: '上一页',
            nextText: '下一页',
            linkText: null,
            linkWrap: null,
            height: null
        };
        if(options)$.extend(settings,options);return this.each(function(){var me=$(this);var size;var i=0;var navid='#'+settings.navId;function init(){size=$(clas,me).not(navid).size();if(settings.height==null){}
if(size>1){makeNav();show();highlight();}
sizePanel();if(settings.linkWrap!=null){linkWrap();}}
function makeNav(){var str='<div id="'+settings.navId+'" class="'+settings.navClass+'">';str+='<a rel="prev">'+settings.prevText+'</a>';for(var i=0;i<size;i++){var j=i+1;str+='<a rel="'+j+'">';str+=(settings.linkText==null)?j:settings.linkText[j-1];str+='</a>';}
str+='<a rel="next">'+settings.nextText+'</a>';str+='</div>';switch(settings.navAttach){case 'before':$(me).before(str);break;case 'after':$(me).after(str);break;case 'prepend':$(me).prepend(str);break;default:$(me).append(str);break;}}
function show(){$(me).find(clas).not(navid).hide();var show=$(me).find(clas).not(navid).get(i);$(show).show();}
function highlight(){$(me).find(navid).find('a').removeClass(settings.highlightClass);var show=$(me).find(navid).find('a').get(i+1);$(show).addClass(settings.highlightClass);}
function sizePanel(){if($.browser.msie){$(me).find(clas).not(navid).css({height:settings.height});}else{$(me).find(clas).not(navid).css({minHeight:settings.height});}}
function getHighest(){var highest=0;$(me).find(clas).not(navid).each(function(){if(this.offsetHeight>highest){highest=this.offsetHeight;}});highest=highest+"px";return highest;}
function getNavHeight(){var nav=$(navid).get(0);return nav.offsetHeight;}
function linkWrap(){$(me).find(navid).find("a").wrap(settings.linkWrap);}
init();$(this).find(navid).find("a").click(function(){if($(this).attr('rel')=='next'){if(i+1<size){i=i+1;}}else if($(this).attr('rel')=='prev'){if(i>0){i=i-1;}}else{var j=$(this).attr('rel');i=j-1;}
show();highlight();return false;});});};$.each($('*[dsh=pager]'),function(i){var ti=$('*[dsh=pager]').eq(i);ti.pager(ti.attr('tag'));});$.fn.downpage=function(o){var defaults={ButtonHtml:'下一条',left:null,top:null,right:10,bottom:10};
var opts=$.extend(defaults,o);var $r=$(this);var $where='-=';var $rollWidth=$r.width();var $i=1;var $s=$r.find('li').length;$r.append('<a class="next" title="下一条">'+opts.ButtonHtml+'</a>');$r.css({overflow:'hidden',position:'relative'});$r.find('ul').css({width:$s*$rollWidth,position:'relative',height:$r.height(),overflow:'hidden',display:'none'});$r.find('li').css({width:$r.width(),height:$r.height(),float:'left'});$r.find('a.next').css({position:'absolute',right:opts.right,bottom:opts.bottom});function toPlayLeft(where,left){$r.find('ul').animate({left:where+left});}
$r.find('a.next').bind('click',function(n){if($i==$s){$where='+=';$rollWidth=$rollWidth*($s-1);$i=0;}else{$where='-=';$rollWidth=$r.width();}
toPlayLeft($where,$rollWidth);$i++;});$r.find('.loading').hide();$r.find('ul').fadeIn();};$.each($('*[dsh=downpage]'),function(i){$('*[dsh=downpage]').eq(i).downpage();});$.fn.Code=function(){var $r=$(this);var codes=new Array(4);var colors=["Red","Green","Gray","Blue","Maroon","Aqua","Fuchsia","Lime","Olive","Silver"];$r.css({cursor:'pointer'});$r.attr('onselectstart','return false');$r.attr('onselect','document.selection.empty()');for(var i=0;i<codes.length;i++) {
    codes[i] = Math.floor(Math.random() * 10);
}
    for (var i = 0; i < codes.length; i++) {$r.append('<i style="color:'+colors[Math.floor(Math.random()*10)]+'">'+codes[i]+'</i>');}
$r.bind('click',function(){$r.html('');$r.Code();});};$.each($('*[dsh=Code]'),function(i){$('*[dsh=Code]').eq(i).Code();});$.fn.Rscroll=function(o){var $r=$(this);var defaults={top:0,left:null,right:'0px'};
var opts=$.extend(defaults,o);$r.html('<div class="abs">'+$r.html()+'</div>');$r.find('.abs').css({position:'absolute',left:opts.left,right:opts.right});var s=$('.abs').position().top;var t=opts.top;$(window).scroll(function(){if($(window).scrollTop()>215)
{$(".abs").animate({top:$(window).scrollTop()-t+"px"},{queue:false,duration:400});}else{$(".abs").animate({top:$(window).scrollTop()+s+"px"},{queue:false,duration:400});}});};$.each($('*[dsh=Rscroll]'),function(i){var ti=$('*[dsh=Rscroll]').eq(i);var css='';ti.Rscroll({top:ti.attr('top'),left:ti.attr('left'),right:ti.attr('right')});});$('select[dsh=jump]').each(function(i){$('select[dsh=jump]:eq('+i+')').change(function(){window.location=$(this).val();});});$('*[dsh=CrossMenu] li').hover(function(){$(this).addClass('focus');$(this).find('ul').show();},function(){$(this).removeClass('focus');$(this).find('ul').hide();});Array.prototype.max=function(){return Math.max.apply({},this)};Array.prototype.sum=function(){for(var sum=i=0;i<this.length;i++){sum+=parseInt(this[i]);}return sum;};var oj='*[dsh=CrossMenu]';$(oj+' li').each(function(k){var arr=[];if($(oj+' li:eq('+k+') ul').length>0){$(oj+' li:eq('+k+') li').each(function(i){arr.push(parseInt($(oj+' li:eq('+k+') li').eq(i).text().length)*14+16);});$(oj+' li:eq('+k+') ul').width(arr.sum());}});$('*[dsh=VerticalMenu] li').hover(function(){$(this).addClass('focus');$(this).find('ul').slideDown();},function(){$(this).removeClass('focus');$(this).find('ul').slideUp();});Array.prototype.max=function(){return Math.max.apply({},this)};var oj='*[dsh=VerticalMenu]';$(oj+' li').each(function(k){var arr=[];if($(oj+' li:eq('+k+') ul').length>0){$(oj+' li:eq('+k+') li').each(function(i){arr.push($(oj+' li:eq('+k+') li').eq(i).text().length);});$(oj+' li:eq('+k+') ul').width(arr.max()*14<$(oj+' li:eq('+k+')').width()?$(oj+' li:eq('+k+')').width():arr.max()*14+20);}});if($('meta[name=ie6Prompts]').attr('content')=='true'){if($.browser.msie){var ie=$.browser.version;if(ie=='6.0'){if($.cookie('ie6ts')==null){$("body").prepend('<div class="ie6"><i class="nots"><input type="checkbox">不在提示</i><a class="close">×</a><p>请注意：您正在使用 IE 6 浏览器,安全系数很底，同时为了能达到更好的浏览效果，请升级您的浏览器。<a href="http://download.microsoft.com/download/1/6/1/16174D37-73C1-4F76-A305-902E9D32BAC9/IE8-WindowsXP-x86-CHS.exe">点击下载</a></p></div><div class="ie6Placeholder"></div>');$('.ie6').css({width:'100%',height:'50px',lineHeight:'50px',background:'#FC6',textAlign:'center',fontSize:'15px',color:'#800404',position:'absolute',zIndex:'999999'});$('.ie6Placeholder').css({height:'50px'});$('.ie6 .close').css({display:'block',float:'right',paddingRight:'20px',cursor:'pointer',fontSize:'20px'}).click(function(){$('.ie6').slideUp();$('.ie6Placeholder').slideUp();if($('.ie6 i input').attr('checked')){$.cookie('ie6ts',1);}else{$.cookie('ie6ts',null);}});$('.ie6 i').css({display:'block',position:'absolute',right:'38px',top:'15px',fontSize:'12px',fontStyle:'normal'});}
    $(window).scroll(function () {
        var top = document.documentElement.scrollTop;
        $('.ie6').css({top: top + "px"});
    });
}
}
}
    if ($('meta[name=rightMouseButton]').attr('content') == 'true') {
        $(document).bind("contextmenu", function (e) {
            return false;
        })
    }
    if ($('meta[name=toTop]').attr('content') == 'true') {
        $('<div>', {
            'class': 'toTop',
            html: '<img src="data:image/png;base64,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" />'
        }).appendTo('body');
        var windowH = $(window).height();
        var top;
        $('.toTop').css({
            width: '50px',
            height: '50px',
            display: 'none',
            cursor: 'pointer',
            zIndex: '999999',
            bottom: '10px',
            right: '15px',
            position: 'absolute'
        });
        $(window).scroll(function () {
            top = $(document).scrollTop();
            $('.toTop').css({top: top + windowH - 65});
            $('.toTop').fadeIn();
            if (top == 0) {
                $('.toTop').fadeOut();
            }
        });
        $(window).resize(function () {
            windowH = $(window).height();
            top = $(document).scrollTop();
            $('.toTop').css({top: top + windowH - 65});
        });
        $('.toTop img,toTop a').bind('click', function () {
            $("html, body").animate({scrollTop: "0px"}, 500);
        });
    }
    if ($('meta[name=Copyright]').attr('content') == 'true') {
        document.body.oncopy = function () {
            setTimeout(function () {
                var text = clipboardData.getData("text");
                if (text) {
                    text = text + $('title').html();
                    clipboardData.setData("text", text);
                }
            }, 100)
        }
    }
    if ($('meta[name=DClickScrolling]').attr('content') == 'true') {
        var currentpos, timer;
        function scrollwindow() {currentpos=$(document).scrollTop();window.scroll(0,++currentpos);if(currentpos!=$(document).scrollTop()){clearInterval(timer);}}
        $(document).mousedown(function () {
            clearInterval(timer);
        });
        $(document).dblclick(function () {
            timer = setInterval(scrollwindow, 30);
        });
    }
    if ($('meta[name=GrayPage]').attr('content') == 'true') {
        $('html').css({filter: 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)'});
    }
    if ($('meta[name=Egis]').attr('content') == 'true') {
        $('body').html('<div style="width:498px;height:296px;margin:160px auto 0px auto;background:url(data:image/gif;base64,R0lGODlh8gEoAeYAAPX19f2obfDw8O3t7ebm5uDg4MzMzP39/ffHpe6wi9dFA93d3dHR0enp6dXV1tI8A9jY2Pr6+mRjY6Cenff39xMNDP3ky+VJA87O0NxQBPrXvbbR2v733/pnB8TQ2vP//tJ/V+f+/viMQtHm7//98NJsPsPZ5sxEAtvIvPp9KshaLf7s3//++fn//6lTKcHAw/71/dXI0svk3cjJy/bq8sTSzMTGyH8pB//7/9TRwS8nI+rw+dtWE//27rZsSeX17OPa6cNEE9HV4fD4/Le3tu/+9P/598ytnfr/+dVFELrFwMvIw9m+qs3DzMDLyOnSxdaXdtJRBfj7/9/t7t3T2kpDQPLs2MpRG9Dc3trY19HS1dLa0ubj8NjPzfLl2NNhKOljH4mHhcnX1uPr3tXR09TVzt7a2eva0PLy8vzf4ujm4uvr6/vy69ra2tPT09fg4uji2tjh1Ong5Pj2/vD479zk6PXx4/Pp5trl3ePj4/jw99zZ4/n88/n5+f7+/v///ywAAAAA8gEoAQAH/4B/goOEhYaHiImKi4yNjo+QkZKTlJWJfpiKfoJ9fRERB5uWo6SlpqeoqaqrrK2ur7Cxg5iihbUHnp8HobWyvr/AwcLDxMXGxrSaEQC7u7S9x9HS09TV1tfYigeDERQUEYLPmdnk5ebn6OnnossA4Ibj6vLz9PX294jJBxQA36H4AAMKHEiwGK1u/bb9gVawocOHECPawiQAQJ9/4eJJ3Mixo0dhGBfCWybAU8iPKFOqXJmqlqh9ACyCOsmyps2bOBdq9LMMjTs/vHIKHUpUYrxNFNBUjKCxqNOnUOXFO4DQ5zuGUbNq3WpQFFB+Vp1xHUu2rKxMPMH+XKhwFlazcP/jys0nCCYaNGIHKUw2t6/fskcX9lEqgMLbv4gTbwXaCxcAn98OK55MOeezWTGtbpJcubPnj427CfDZh/Pn06g52l1qOrXr1wPtkg5HE7bt2/WoPoa8y21r3MCDR9MtYHQfvbeEK1+OzGXS0RSCMp9O/RhVsGi+havOvfurW2ArRvdOvnyrfYQTml/PnlTP0Rbbtp9PfxFPAMWzM3Vbv7//P+Hp10tT/xVIHmGa6USggQzaBM2ApkiHyHuk1dbghZbhwg8oXsXylVK8dYjhiDihV1w/TPF1ymULvSfeO3WRKKNKvESAoHG8LEiJisTB5wmEMwbZ0TZ+DDZARQNkl+P/b5qII0gEfeBXXGRMCmllQTaemORFGZESFFC7hLfUlWTSKKVSa604C5RJ3SVgmXButFeUd6nHyn0IrsUYITrG6aeDmEinkGMIjrfdn4hG5eR2urkZVqKQClMlNo3C58+kkWYKyVEWogNUlPkl1KmmpFpyiy70gClmfKW22lI4UXJ5qDlU9RGgO/K5qqupdeFnqEjmpJVZnaAAyyemu+p6AAAD/IosMEB1k6esNAGV7LUEqShsepHNgu23HH26213e7DcruOg2BOVj8LnDYbrwOoSJmNmVxmK8+N4DpouPdpnvv/NE642jrAJscG5VWVrswQyrI+60bTX1bMMUl9Jb/110crtwxRxTk8l17JJrUsckT/Ppre6GNHHJLG86VZTsWprXuS3X3NI4hE4LI58293xzoD2BCNnGPhetykt0hirTykY3TdcfJobqz7FMO81SW7kmJnDMFXpr9Vi1boxR1oiBfNeJU9NMZtWfhWKiknX9w3ZR2+ann8pr6zXT3JOFqdSRcEO9mV8DhhlzRbgCKaS1GL/rNXNZFpffzoi5VOvhkEl8JeNQm6T4coPZPRrlfLN0KnahEu3nqTNzR+GUe6kt11dcx6R6pKVTJq7kAlwlt9bSSs6b7F9rtQmh7lS+k4v5dVte7i4XfjFuVN0el4psiSkz9JMtWvxG2P+xLv9haG/MPVznV5I+WWC6RLhL8+5mt+ePU7dnNIFOD1tenM8+yy5BU1rr1heXbpRrVK7IXzMoBxyyXa9Wz5FaabxzOmaJB4GoeMYnZiKh7yXQMVJKnQOX8xJ+ZAZFGDQFmAC4t+AokIApqZvUrFcdkvjkJP1bxb4Y2DACNQMjx3vJCCexQiKZTXg/6ZNyvAKlT5ACKwTaIKpYhpW9HcUrpXPStvIUncGt54ew4ImtNugMJVbsK+aCHzz0Z6pAJU1paWxP7nYCQdupbIgVCxOM1EiI68gqEgyJ1uFeFDHc9REhCcFeDlmmoULyhy0n/NUjHgQy4dVLPjCcXfoAaCtvpM3/NzZj4ifRcqh98M5Ok+TTEU8Un0z+5X7GGsXWYiJJ+LkSUR+LksrCF7pT8lAT/1tXyIbmSPMEZhR19MbI+ti0PaFnjbmiwGjONjr1sWlckLkIFvtTtWGhEkzIsQWkAvlEtvwhShRoBJ4EMIAjpckRaMkZiFB0yyXSAoBqcd4isXUvWSooKb80BJTOZpUdXUdoddImSviyT3v00xZBs4r58NiqaDnuicd7DEVp48lPRqKSdkNhPfE3joYS0YzfCV/1sHM3eIzUP2L8UYQ2EYGKAPKHyBIW70jDoZceA6UAAc/foGMuhsW0qMicl03b+FHtDc2n+NsgVI/GkDqeLZG0/3lkvCyaQke47S7HgUTrPso8n+BqJVXRTymA2opn/HBVkszIQ+E1V/WdsyKd4mMZKWErrl1yqsagJnQ2uogFdvVmEDShmyyyGbaii5ymkCYAGmq5QDr2D8Oqk0wI65D8NK9q1/EGZzMIQuF1CxMXNen+skEVIbZ1MGiY4BPRGbuXya9dN/GsOwOaCIwgpHlEkoRGgPgSQxAKiXKkla1GWwn0oIG3m+qGrB4kLS6m0yaCDdwkvQIzYnnRZfmgpAEJ9g3oTgeW1zCgeS2GH2bEsrlThKhTz2qTzAxWuCXMptwwNaCH0o6axGTP2JgLLarIjcCPCN145hYoSr7RRwhWl/8J4wpPUcqUV3pRZsTGZ9pL6cQ8f7zsMLwSYUb4AT+x/e5aOfXgoQmlGfWDpyp5RsT/EQuf2OyHvbBY4tSMErCAZAVJkvfecuptXArrsUSUPBEv2YiW9CImkOFCgQsXWRp7IeBz3CtiGX9omvDp6ZSvUSXJhG8SuonJ4Wgpti4HpxN/ZG3cjscKKRnmw7LcSYtC9phEBuom+UMWDpdU10eAMIQSlZ44QXzDGKlkhWhiymGNi7VqkaSdrCzqmEs0wOOesoskgsl1mexQqnhXxFme1f04bFaiFXHS1wPq5eRXpypftEHbeHJwWSIauLE1fO1z60pDaLfh2ebMqkyY1Eb/OaKMatcj8QBViv2Fil0MsjidVHNMYN2ZWZIvmzTEkCCzE8P8jonai26ycfPZBwnOTFi7FZFrZv1tnpL6i7m+y73TMQ6S4JXG8DgEE0HVzjU0AHApy9pqJJemTUNkhdfkHeLiDEoZfazPoNELqArzuWPRRqo1PZIA1uBOf+gPgoTZbSjiu2+iAM2A9lXaMl3q8L9g7TkZrws/sE0832xtNGtYQAF6Zy9KczjM0NiHoWpOEE6ijuGXKpzASYQzaT63EC2/hA+ZrPA5yQ8A2/GDFCLAAhYgAQktkMI5KQADGqyBDnSQgthXUIISQIEJFliDEVjwgQ8MAQcckJI7d32I/5gEceqNoEq4StoMhn7CE96IeZJ0zEZccvcxksy6iXMXO73ofDcLawsO/PCBFuCADV7wAh0EMAcplJ0Ff2CBERBwhQck4QoqAAEUEKABO8xhB2tIENQY2O/ryrWIvX2Xah9yZg31Y1jTrFcLM8UXRC7dp25GRNaqPs89CgIAfT9AGqDggwSQAAlSaIEfyo6DD5AAClG4wAUUkIEg2L4ETIiA3Kvl85cwdoWHsSdpQWGL51KyQT4+Mn2lwnig13MqdAnc9jQ6MT3+5hOEMBN9xwEJUAJBEAQ8cAYk0AIiyH4f0AMgEAQZEAUqKH+2BwV8hwO0US21AA7LMllQc0gH9P9IBqR562ALdSRxSXYtGvEc0RGBQRaDS1J5ktB4CqJz6aF2ovB6fKABJ/gACvAADwAFFsACI8gCfoADFqACSTB/KqgA8pcEUEACH4AD7/YWCmEr3ABzu8FYPGNgMdYR0WIrbrJTbBYxTEcdPYFVCRQO7UBPDugI5VJVZ5I82/B6d5AAKvAA8kd/CuACCdADC2EEoYAECXAFCvCJZBgFV1gCVmB6tSEZ6CQaCRgKKGJi4HNPOBYTEgduudJBuCNe7YVUOtQrp7RvY/Rd94E2LTAIstcDOWB/k3gCJzCKCAB7mNACRQAFy/iJ1CiKD6ACGtACflg/0SI+O+cTeMGEnJD/iNwYLj90TbfVLiYHWQD3JziUUdiWfZFgI0nCTiXhaJZgh+LDIY6BNnIHDmVHAl3wiVFwAkmQBKAYBFBgB7TQAjBQApJIjWNIfxcQBAjQB7BHNb2ASIATW8qASgNmjsN2bUOji02SLMsyJWGEHvUIO31iYEaYMRVBcTbyBZI4jVeYBA8QBAnAd3+nAZGYAdN4AlZYkGjIBx9QBGsIAyzAB3wAA0jZAnqwAmiwA/3gYTQ3DrazDkZ4CAuUbYMEGc6TLIyDQMezZeslS0ZiWoSHdRMhDnAJlxkjfHoBADZ5ATipkw9wAj6AAi3Qd51ohUSpAKKoAMv4ACDAAX/5hQcg/3ukRwJ3kCQ/UAToNxNYB0TTk5JgF5ec2Zme+Zmf6YOE5j354AyrxIdXaUVlBJqs2Zqu+ZqwGZuyOZu0WZv9pIQ0FjTudYel4G8nsh9v8Q4mqU5tQi5jFQEgUJTTiJBXqJAWwAFWAAKDaZAPUJif+AAlkAY4YHpmt4akxwQgYH4hUAQsAIMBN2cC5RN/6JVwSAkjiYC1Rj/qRioXg1KXVxxF1ZXaADMxMV3aJz5hxVy++WxscQBQUJRXeIXTuJN15wO194nUaZigeI1PIAXbeXZ/yQZM8AVBoAIIQAJfaJ7qdBI2wpnWwQsgE17iQCR5uHPshGmLVWVKCE7YMkRCVf8YMKKf88lV7uOVwFIkCsKaFZhiBJIA9meNRDmYWLikSkqde0mNJ8CTSIADETAEQ/ABdACJN+mh2zmMvTU9QEMBA1AADmCbZtqZommiAldHakZQZnVAfNR/ZzqndFqndnqntrk3KeQSNnR9bINe7Jhuy3cIEWScfLJBTGB/CoCQy6iThqmMRGmFS6qXhomFUQoFHFAEakADLbAGUHCXKfgAX/AEB/ABpHkIfTAABJAHbWAABuAGA1FEirVTMWoSOvonjYFHU7FlsjWoFWYfl9A53wcJdKJmF1E9lyYAQLmXjLqoermXyiiplpqkksqMdrB3VhCY9HcCBYmdHypX3KD/EDXVAAWwAAzgqgZgAwxQANgAl9rAQo+nbY6ijrcWL7kWVuZVUlGSJL+iecGGbO0IAOg6sARbsDNwsOjKAA4AAQUwedsQhpVaqdG6pBRLsYvKrNLqA0dQBNGoqAc5fxlwAdj5BO1YU3kAAQzAABiArhigshiwsgUbszI7szRbszYrszCLrgeLsAPLszfbsz8btEI7tERbtEZ7tEibtDQ7A+nKAOnEWfmTHp0nKeNwXQCAAWgACSHoB3v3ASzABHgHoun3lz+QnBEbqRWbtmpLsVeQAilwBQaZoNT4iRnAAwjwlzCABB8AAHDgAFqwsgf7si9rAAzwtwYQVh50D+Aw/wAGkE6Iax9gwi50CD2+SgjpFAFBNwCRwIU4YAQiuAIgcAUgwAR20HfaSALJuZeWurasq7YdGATKOLfUmAH0lwEgUKE0kAU10LIpm7OC+7K9iwFpmbjtilmY1QYEsF27wxpHswwfdWIMsJtitQ0fcAC094m5hwBswHcaAJGVKq2tG77Q+qRyK7vXCQUYEAMzkL5MawC/K7gqq7IGAAE8SLy+QFOY5bTKGzXSa2TiA3ZiRQEMkLU3+AjDyIUfwAZQAIpXyANQ8AQDELqCeYUiK74WbIUKar7UeAFQ4AQ2YAMxEAMw+77A27Kuyq72mxvDJwhoYADKG4zGwWB6I1bnNP8D+OgIrscH6ocAX3ABPCB/eHkCuVd78zexF3zE5KvBaCgGNeAEBtAES0DC76sFBjADmpvCqcINm2ADwsW/wwu5vPmWPAEgDuC4H9WULdADUDCGQnkCGfDGS2qGhpkERozEFXuFGIyFGoy9R7ABTuDEBhDFg+uqU+yqAIzF83Bd4NAHDHCSPliBxpdB9gFGx8HFx/HFLBCCLdC99BcFPMADOgnE85egdDy3dty6lGq+fekBTTADSuC+gwzLv0vFBlC/iOwK2wDA4MDFWpd0X2aBpKWrLDQIDMAOWquGUmCkFxAFb6yCKQilpiy7p0yxaJvKptyXTdAEXeAEGGADLEv/wgbwtxhwZbdMDrniwh/FixD2C05XF7U8CSTAd3cAAvSXBG98z7S7x+Y7zWsbqcy5lxOAAq3sATaAAUuws+0ry7+bvFrVb09Szj91KOi8KU6INrYscCvkzgjGAgegjQlwAhdgz/hMifpsyvyctodJvlFwBChw0AQdyAodswcLAWgQl/Jx0RBN0cAy0cJFIe8EEu8sCUhgBNtpASVQu/h8zyUtzSfNpE4dpURw0H/szTqLsLH8sky7APXKEzid0zotCjx9U730JsNwAEENSFM6B5wo0iP9xkutwU2Ntnh8BUqgBFP9wUtgAzsry/Lrvu4LAZ4EfWji1dIgImENSBUo/4jBYNYI1n5+AAMtQHdIndRu/dZMfcpyvZcl4AR27cE28AIfzLSDOwN6fbAMsAB5EHyR9zfthCZTS9jBYNg78nnzpFBh9GdQc9aQAANJiQM4wAKdSNlKnc+WTY1xjYVJAAJLUNcf3NwH29ylzQBtkAcDAA6boG22hk+PC9uSItH49RID1X23hDO6/QhGIHay9wegK9xJXdz7fNJBAAKk/QKgHdqk/cEG4ACofXXq/FQX2L/cDS3eDUiWsyzpQXGywNiTgAQw4AdFQAK/zQTsTbtK7d7G3dQqoAVU0ASgTd9KANrS3QBooHbbkKqAU4QCdU5c1tUBvmhgbQpJI33b+P8KCi4JpiuCIQoCnnwFIZuCw+3WCFmGB+nGhlmQQ4mQ04q2FgwCKyAFJrABNuABJlAHOzAEm1B6eoBpKNRbC0FkpaB+MLCdH2Chr1fmZv56540DJMABAQkD8cwCERDmOJC3ZecHejvUAUkC8cwHWuQHLXDmZYfjM4xLA+4ez6Ff7cgKNR4JRtDosld2fMDDPn4BPj7hcky30mzKsXvKlmgHU1AAZ2AFfNADJNADK9ADP/ADepCaeKQQoiWPWjx6K9elIljrw7gfC8OFLaC3LUACfzDnoyeCfTd65SnnfHfjfjAHbLgk7Ofbzu7bALs6hY5MGxciWqXo5e0I0K4TZ0f/Akd9zzzAzMLNzKAYsgkax9RsjeBrwR0KBSCge7rn7u+OAlU6er/BDj/BZJBe5nwA6F6INYKghuoXAmmMdlIgN2j3l2fn57t+dkiQImF+dmhO1LZu64e6nqch22vl0/SFZ+eR7Y3wAQm/EHMuBSWAz+HO3pTuzJ+YBCpQAu/+7l8ghnp8nUrOz/a3k1DQA4/tUlx+YsdRNXa+8DCY8BU/jBGzDWpI1B/wB0aABHnuhZgg8mWHBEr568Fe6w5f54Pg8F6PBKv2xc027dR+JrEVRzQO8oyg52VH1F8oByVA6W/MAxO+zOIuxFBwBExgAGIgBgbwAkcABSWglyp485iN/4UiWwJbaO+vxuUAEsmWIIJFIILp57WAvhByxxZA8QFGwJR90H57V+fCXp6+ncnPTuyZDKIdXevDfvql3+hhnDc7vSLBsz0JrvaLYKFSMLZ9x8NyP+HNHO4nwAMlcARL4AHIn/zIPwNEAAU0r7pIrJM4GbsiewVHoIbR7nH/K/aI0PTx/JctwOdxmVWz4IVqJwWl13d9N3ad2+B9p+ykV3p/Xp5fGCgVz5llHvtWovERAggRAGgCAmgAEQd+f4yNjo+QkZJ/BwYHk5iKOD1sFk9MUBkXUaIZpqeopApXIEwOYjUGBjExSzNOGLBHIFcPCg/AwcLDxMAKClHHJyArLf+YkIuMEQIAz9aMHyQ9K38fLGx+4eLhPSzm5ywcCCwhfuYrHBw9f344MDAkHCQkLUP5+/t64PjwgZ67Hj0AKgRYzpwiP86uSZxIsaLFixgzapwULZqBjY2iHaBAqBAaCopAXqt0ySKJFaBAlPjC48sFHjxKodopSkErGRuaYDDgpEYNJ0sM2HjhQYgTKL18FZsKLEmSE1gfJHlw4YEKDTAeiZMU7U+EAQPKZkyHgEkPJGwQBJhLdy4cNuaMGGETtwSHEPAsiEghAooFFi1afOAARYQFPx8QDJ4sIoEFDuZeaniCQAOCz6A/n7FjLlpElahTq17N2mJHRh9VHxBUklr/n5atHfnB0FKtNT9PeIziSZznBQUlXpjIkWOGrOeybhmw5aHJERe+fj3ISnXqVQVdoSChd4AFpT6ODuBONMCBgQIUVPrRg6BDirgd6tJNkQJGCyQagNHBgAR2IMJgn4GBgBE4tNADDAeS4IcFBiYwl4X5tYADDkZIRhl/hIUIhQb6fNACCyTkpuKKLLY40Wt/xJaaHyMBUAg1FCTS4m69UQSccKQUJ2QGCvAAhRhCLFHDUNA958F0NjhhwBkJqGDMMd1RddUJv/jghTjqNYJSSAAMsAAEGGCwABq+YRRCCzDUl0IAHYDjTGIkMNEBDTiw4EcAIgCa334pkEBhAHaQ//AmDoMZ8UGAGvSRoh8cBNoCBZC18I8UzqAYDgsH6OUHpxri4OKpqKbaGowyykcPbSYBkGObq/HICK0cBTfckMU9AAIKWGCQgxMxNOnkDEs4oSwdJCTQiwJcbpdlMd894EICfoYTASNSSIPGGgU4kKYNNrRRDSUg4SAPEgnYN6h+InTQgxE9hKDBZCES1kECn01W72ApGBiAnCDqGwBEfiBBkDkt+DGHPQxuGE6Y3Kpq8cUYv3grbDN2RNKNh9zGoq30+KhrkLzyZCQWYizBAAYxpMmkkzYk5YQSOyCxAhRBSCXttMNc1dUyKxgRjXktAACuG0PN4BwDazaCW0ZxOv/GhwZ0fjjYgPwYEYJgB4YYaAcCDgiGBpBZyN/A9fHbmWeV8XFAC/SGA4MiJmpKEBKJ9e2OeRkHLnjgrHbcCG0lHaKjiiTjStbJKRNXAhMmIGuAEDHLPLMYyNoygx44AAfCCdtFC7QwWGH5xRN+tnDAHWrUwYABTjuX5nvnpgQSgPxpgEO74LAgKht60qFhCwmAgaFcYHCQQKAB8MfBB0XAwGgK7GiwrxHycCBYAvn0ED3A/MX7IWEJFI2DFFMP7v77KxaOWjhS9zHIjbJuyzhvG78IeeQ7AUEZNjCD5ghBKJrT3HSWQAvQ+YEPCLAStLRzOtJt5xfQOgIbpFCHNnT/IVm0M4DMRLgAATBCdyBpgff4g4B2fcYznZFLncJBAjphaC4p8F4AyoaAFJGAQwfigAq3ViDlleNRMUTAGT6Tgs+gIAGe0UAaEOOOFMHvilhUjfxAMg6D1Chxsoof/0rmPyABcCdQ2IIHYlCGJYkwgWlyznNmIIA+IYEPPDPG6YBhQdMpIAwocMoSkuKBBBqAAQ4AAIzadxEjSOEDFiDMvQpGmMEEYEOaih68tjangImALxsijB+MwAINeMECK2DDHTiwgh4QJAT5UIcIOHCAFSjICF4IgAX2gRgpIGEfWQymMDGyxY2MYywUuJ8hAHCu3DTOZDZB2RkzwAQxMCAG/1qIxZLgyKQZGMUJP/hlOJ5QAq5YsIJSiRYPjoCCKBngBUt4kiyYxIA2nDAC2/KD/jRCgg/MoZQJCEGfTkQCFpgIIS1gwwdgELAEWAhQASsQFBFQhA8M4XoJiGiBCpQCuin0AyIAwwGkwIEO9PBQLYhAxCATgmG69KXPKCZrImC/xJ0kAjAaCz1sJLL+kYUelljEMYc6VABowCYXSJk0kWMDBjj1ZU7l5lCm6pw13MpER+jZMSh4uq145Qi1c9ocw4oBLUAADSfUDVHXutYPhAAGSGjM88RWvjlpwFGRDBslA+W2zxTtDoJq4goCoAE2AIoDbICHFBDjSjbMqQcHYP+DSUdJJ7QR5J8swClbN8vZznr2s6ANrWhHS9rSstWL5MHAimbzMUPclJH0owdJFvcboOKUEqENAQKuYIok8ESaSy3BErQAVQxElZsiFKFzGvCHEyWGnNnBEjq9AgUPkCustYOOcbWABvXcdjamHQsSEiI2iM5FYPvqRn02yl4CKUhO9pkeHfLDgufxwUTTC8FbhtAuDYRACiQwKT0iGQBHGQ1FDQuvghfM4AY7+MGbDRONVMu4L8ZqVmIpSwRyxMif+sEAiaCRekZM4hKrBzCjywAPiiSk4BrAAS+bqlRHiAGn5eEPSGBB6BhDuq12lXRXgAIGNkCuIof1jTNjEyX/1LMIEzv5ySPmxAEolLwA8AFQPahPDwMFgyGkYwUWGN9kotdEC7CBDkXAgQaGcCB/ahkGdKrLvKbHAsJE4L8lRQAMstHfFqxAPa6EsqAHTehCG/rQiE60ohfNaEGL+BI0alVrWKtMHLVPpyJ2XCQ+HOJEw9ULUFEAkVpsClWUAJE0nvHtmraAhOkYB0iIYHS5qqUHBLkGG3hBka9L1pm9B62U0FGjR/wHg9KppAH4QPT+UB8NHGBOfiCBBp7X3o3OxQIfKAd//GM+P7SLMhqIABJC4MKE+MEKJu3nB1aQH4T8QQpGG7a8503vetv73oUOtqRZQ6OaggwRl1ZLbCXC/2nvIpoFc/BDD6DAA1+c4gJJFVIJZqCFNBVX1W+cAQT6kGMczOEDVgDBrGlNDNIFAQq4VkITdo1dOT4HAzaAwAD0N5J5L3YFKYACH/Kj7BQcoNl9CJShDgSwQEFvPwYCQwBW4AfHdhTdAZu2CBKSD4UBJkMA0JAdTOpIWEYPbS3glBHwTfaym/3sZsfpbPbNGkrX5qYCb5PAMVHw2SC6ICJGwBdOEIUgHSMDpAiSqctqceOqetUUFwASDrAhEyUgCVv1cXdO7oFcM2HXNmi5dmtsAwwU4FwomXezOqABdgeghlPXcg8CxYYQCGAOK4hXwfRKmBV8gA84GIIUgogg2f+LoJ+w5ANi6WSBWJc+zyygwAeMECCKDkExkEW79KdP/eqbWO0RYHutZjMIMN5m4Jsui6Y5nQh8mv/86De/FIpAAus9qgRR4NJxkHECwJeaSCXAgLjeGGNVz2CqBJAY5vABUqABKhB5kjcVKsAEG0AE8KRrmHdkL4cBbjADndcGM6dP6beBHIhPcCFJ3zZXGFIZIFAZ/oEEdCACIEAXD2UhYCACBkVSAQAFg6I8kBRRFxIACUABPQBFSBBJSscEYPAEMNAHdNMsa3YnmdWBTNiETviEUBiFUjiFVFiFVtiBs4FP3qV9WuR2+IMSOuVTBhESdAdi5SeFy2cE97VYVpD/AvF3DDwABjzQd6JmamWAJsl1eHEURwUwN7/EKWlQAggILd3hA03gAUQwAy+wcph3XW9kLLPTeQ2QI1eITx8gACngBc6jH5yogwK1QViTg/rhbHYwLygwF3owMK7USnJhIZNBA9wTArCUZZUxSw8DbxxiBH1gBDliFpX4i8AYjMI4jMTIgVl4hlxYK7DyhYrAZDSiaT8VI31whhuIBEhAAVIgBQ/TB1JwN0VQBAOQexYAAipQAlCAAp4BBV+ADMKhAF+QA2vwAsVSFF3wVP03YxQgMQcFBZGXOt2xgFjwAkqgcktRkBaYXUwyQs7hAAXQAAOQTFlYc1fIB9PIgXzA/wfGeH4YyYQXiX59UJEcCJLFOJIkWZImeZJPmIXJ2IXJdCOGwGEpEYYaI41NSAcbEgH2AAPscw8DIAA0oAcDUASccRkL0yFQIH/IwARGIAQYoCRiYFzHdXgNsCEHcFBHAHlbZTpTEQRMMAIO6AREcF3kEkK2czvRgQEQQABoEGINsAYUUJGUiJJyOZd0WZd2eZdSCJIrqUUbhgbed1u3Ao2bBhsiuYH2oAfPBwM0IAUrEI4wMAc7QAAAoHv78AE7sAM/4FZnUE6AdwIJ0AMNUGNaUHF6qDkQgBIRcFBMkAxZKV3FEAQJQAdCQAREsAQv8AJKoWsWeDtiRYENmTto0P8ADHkS0xiXeHmcyJmcyrmcUKiXqcJ9tcFMYxISgikWsPGW+PSR2qmdOnlHP/ADdKAHPVAEP3AH90UHB2A9FOCTNEADbLBndCBypuArK4AEb0A7ZVmaQ7EGraMpwYGVE4RBxPALKoAAAjAFiHibmZd5SuE0mYcBbdAAwOYHFDAABaAFztEGxLlhNLWdHvqhIBqiIjqiJFqiJnqiKJqiKrqiLNqiLvqiMCqi5jeNH7mXLKlMhwAAKAR+1+ARFPCWffCjQiqkcGUHCAAFOYAE61MEu2AZLDAENNAAU/ADAAADKMKLRnCUEJcEX9ECRbAHKycucHSPmjMDWQAAiHEiZ7D/d/0YeQp4BPNQAO8EgQuaeQz5kN6SB/uXXAsAAEHKoUMaqII6qIRaqIZ6qIiaqIq6qIzaqI76qJAaqZI6qYaqnTkSpDZqTOkRpDgKcNSJEQbwo0FKqB8ABwznK1bQDUUgckEAAgkwBTCABkMwDjHYIT2TBCXwKxRwKXsgVVEJRwagBkhAIywAB2DAJa05QSVnciCQBuN1B2Vgmy/wfwswid6yBhDANE6zXZ73ln6aI5QaruI6ruRaruZ6ruhqrn/6o5mqEWqhHv7mWhwmhhURqoeqWz1jawmAV+UEDCVgBfYgMZpAEDjwBCDgqhagAWawA+4wBFiQFAn0qwlkA2Uw/waKwAJqUALIqgwIKAwX4I8PMDl4YQRqcCZ1kIFmIQDhgp8iFFUi9HnJFKSjmq40W7M2e7M4m7PkKrM/OgM70hHe1VrL9H1kdBH2aqj20gtdUQJTxATPYmsUlWMsgAQVdSl08J1wYAd+AEsNsANW+gF0kAXzJDMSW6ZLsAWY8gdrAAasybFuKgxB4FUESgR3YA4blhh/0AdrsACzg2TA2qfMNLM6O7iEW7iGe7g727MXQyOtRQiIkBFCZQDSCQBFkCiyCDo7oAcWYCUZoBUgYAFQsBW/AJuwhhgfYA9TcLKI0GRp2pPmcF9twAD/5wZMI0KjmZAiFDNOUAbPlwZf0P+2g+ia5ySgSQACGsAP1vMDC+AeYiULMTaBGJAHsvKj04u41nu92Ju9OTu50tmuq3EA9mMSttFhPQpUkxsCfMAGQzAHuFQEOwAHIqcdV+ADUTG6UNBlBKFKAqAH2ShhD0GhPekMfEABC7CtaeIGfvsyzhEDHuAEOfAGQ3AGx+pbweuaPuOmQVACCYAGU7AHZcCyUKk5DDCaTyWZk6u9KJzCKrzCjMq9suK9fCm0ilOdZCG5zAQAXksDQ2AET2AY6wcFepSvpeOvA6AYS9AKP0QeJ6QeOKAHd7AAdTAEf2AEf0ABcmoDh3SPI1xjNRAztOMEdYACcyhqFSx5G/u2C1j/Awb5f6lmcS8jQpN4w3I8x3Rcx3Z8x3icx3q8x3zcx378x4AcyII8yIRcyIBMATAsG7Dil7JCvj1qw8ykB4/5AxwAAi4AAk/AGFpBQRDnj0nABCugAT4QshrQMEx2KetZAB/kBFwggJdwAHnQtwZAXGSbJjVABm+0AVtwBERCxmX8yyfQFUmAckjxiNn1xn5rAJLJyIbczM78zNAczdI8zdRczTeMyIFTI4awTIDpGpBcpXpAAXSgAVGhAupoTlrZY9txyf0asl5AShAhAAugBVFiAwNJBUaweGQkAA5QllHJALdsux5QBqHwd738y8EbLVdwBBjgAS4XQoZHtiQ8/wN5wMjJZM0YndEavdEc3dHNnKMAkMir0Zd+6ZcY5hozcMNoQAdsIABsAMQQ9wBB0Ecmd05D7FWd6yt3wAZmQBS61gRSIgZEAAU9VBAUIwBtUGP/d49OQAZDoQVigAIgsFWAh9AV3Hdf1dC9KcJjO0JuQADL5NFiPdZkXdZm/dE3LNKyUVMl3cgX4QcpzUxo8ANooAcNANPgIaB8R0FedU7csRUTYJtK4ASZ1wQqZwJHoALMcBr6AwDhImOag01O4AEMwATreArAa9XJqgJHUEhdbZZIZrsOkAc9maPUUNKondqqvdqs3dqu/dqwHduyPdu0Xdu2fdu4ndu6vdusLf/XgwAAPis4JN3Wjkx3ce2XeqAHlknOm6wMXqVHfIQ6FtQzE4ACSzDYhb0Eh8gEW5EAQ9BhDdAGtBPCWhADAP2UUJAMERd/B63ZotYVX8CANpADTcJN9SShp30Ijsvb/N3f/v3fAB7gAj7gAO7bhxDcgyPXheCnzxiY12AACz7XIeDEdsAzPiZdH9tjv8AdwXAVSXAEBjCQg60ENrByG+AEIBAEKoAtMKAHXkoCehAOc8AFGCpCZBAzNaAFDsAEU10cFYyUW3UBVvEAX9DZDLAECSkzBwkBeSChZULgUB7lUj7lVF7lU+5ajqvWrJFMiRN6uvHgEb4CP4lm0IUlynD/JUBzBYmoBLc5kAKpa2XwBAkABUcQB6ATdn1SBOdgJtGK5GQwAx4AAVCgAhGHCr48iG1rFVYBce7IBE+y1fSUBwTQk8uE5VZ+6Zie6Zq+6QFuEn5JDVo+0i254LRVtJgA4dtMB+15mTSgpdASf1hBOlxi06gj018w2ETQBLfZ5lTABQPAByTQnmOgBrs6B9ajMIlxR2vwBrBgAyYgA0wgiEJSwT0xf8kwnwtoAns4VS+2BgtuI5XukuI+7uRe7uZ+7uie7uq+7uze7u7+7vAe7/I+7/Qu74SABqGuyK3VyDTcCKhOCD9gCHSwA1KwmsqQOsfw3LH+3FIRBGDQwA6o/2sGQAU/YAQwIADfqXsFywR2EHZMJgWa5TA7UAcjMAU5MNW74uMI+IZblQx9dwIqEE9yNDv/ZwBnJQCUPgDeXhv13vM+//NAH/RCP/REX/Tjju/ww32xUupgPgCEsAY0cLV3AGrImgzZIdNJcAUqEARCPAxB8AVdgAVOoAVvMAU7gAN3oPMCwAfI7gdnAAKG0Uv1ECp6ETqJ8fbSRByiZugKcBV0aArggX9MoNT/9zQWeFaEgBZoYfSM3/iO//iQH/lDT+k4j/RJP+oCcNISAeE9OQDtCWpQIBNVDx7AEAQ+AAVM8AK7YCWvifpKZAV8sANcQAMKM8UkkGPZwDMa/P8lfUMQfaMOIEAkUSAcvLL3psDoGHQc8zc5QyFPT6MUGNAAhUD5kl/91n/92J/9QL/40y8ACL4qRPUMI1ES/D4RBrD4nv8DZ8D6fHcc8pcEraokG7ABJrAER+ADXR8MKq4Cig0IKCwtMC0fB0YsSCwfLBoqD1cgCWdebH0HPV5PUConFxlRPKAZpaanpxegXyWtrj4lIC9OBjUYGAYGGAwMWg4NAgMDwcLFxsfIycrLzM3Oz9DR0tPU1dbX2NnUwQIzf9/g4eLj5OMH5+jn5eAHfQACAmgAEX7r4wbCwTQ/VleqqkkURFGg4IGPBB5mvCDyYsmSF1+SPJhIsWIQKCT/WuD48AEHjhaEcBThAELBhUhfQASAwrJExFKiVEVBRRPVlYM5HjrUhaKLCSc5uuS6RXSGAQJoBqxRqq2p06dQo0qdSrWqMm7e7Gnd6ofCvG9+6tnzc4ACGnhoKNDb+ucABmN2dqT5EsqfghMEFVyMYaPvi78vbCjxQfHEiYkSJ5ZI80EsuD4CuEw58kUVjwx5MyuoybmzAhBCTNSo0SQG0Vu6TqvWBazBMKuwY8ueTbv21KVLhWFgy7tcBEy9yUYAcFZehANs3RobI1fF5s0ZTmBWcOWIh742AP91cuQKxYLfIyVoAbYPGgIQah3xYTJ65/fwTUWBIuT6rSaq8+c3/5DHtv//AAYoYFW4KbXGbr0lCA5ZCpLlFVoUILeVWwVOMUAaIDwgE2bRXfDFEUJglx1gNmAAQmIPHFbRAyCw8QcABLTBwAzZEUEYKFHMFN+ONX1owgxNLFFDavrpx4ABEBAQjGsDNunkk1AC6Jpraxyo4JUNgvXbWQLM49g6ERhQ4A5rsIFACQ9ARxBeJSxhgogivrABE2gmpqKKLqCA3ogvzMBAdzLNBB2PhGbwBRMyeBBDLQwUWeSRSC5FQJWUVmrppZhmqummnHbq6aeghirqqKSWauqpqH46wJSrNmAAlliGpZWs3xwwHJcRbhVmA2vwutQYAyAAgnQXbMbmEv8bwImdEkrUAcWKaVJUAkMk2jBDDN1tpmOh3CYBxRh1zDCaaY4WaQN/rTag7rrstuvuu/DGK++89NZr77345qvvvvz26++/9Pa6aquvwsqWWAy2tQ6tfzj4TpfA2bMruwPI8AMdTwz7XBQPfIEsjcpmN8IT3oGH1wNBqHBEEySCbEMOUJTMQ47cEprEFwgg8UYNS5Bbbn7nFjAlwEQXbfTRSCet9NJMt9trr64afHCtCI8VzjlmxeOlxAawu8YUU6hRBxoaXKGmAoe+EbINS9jgARwZmjyRyga4XK0HL3Si7bY1w3fBCSCsMMQWS5Dx82oYzOBAHpM27fjjkEcu+eT/ShPQQONRSz0rWAuO5dgBfgwHz9Zgdr3uGFPQkEYeU6RRAnQDfYHCFH3N4LINTCjxghxQHBZEihOB0MQGuvsVpwkyJMCDhnz3/d4FSSTgBwAMeHD4abkYILTllHfv/ffgh4+05dwTkJXm6NtTVnEA9AHWl22FSQD5asghAB5gawCGtph5iwQeSnCCQqzVFyW4rTuFCd4GNvACJTQhSAF8gQGEcAc+cIAJznHeji7AgySUQAN+4IIYSnSkGewCF1rQQmpWCAFeze+FMIyhDGdIwxra8IY4zKEOd8jDHvrwh0AMohCH+MPLXa5g6UviOPzgDjTIgwIMu5r8yNcAOeTB/zVe6B2OonASENiBAm3Iju2stQTdbQCBEgnIA0pwBjw0kFpEcMIeBMAHAdRhBCgogQZ5FIUk8AAKLJACF4jCC6JoIXEG6EUvDOAGoV2OiJCMpCQnSclKWvKSmKzhFQmARCV6slZZM45jPucWGKqhfmuAAxSCIJ8MnEQFCMABDKjwgiDRaAlOsMEZvRMt8EDhDCHYwl+yMIA57KABccCA25rwuj3GRxRoe0IL9NAGZWLgkLqoW2oalYsFPDKT4AynOMdJznKGk3Gc/KQ6v3EreOSKc2BxSx7QqYYxyIELZyDMZWCiiitAAQZ+2MEe/kKjWeiSCV84gRrVyCINsAENO/8QBgFUqIQlNMEDdBKIMzuzrc9wAAcAWMBQctEoRe5iRm6w3DwJgE5zuvSlMI2pTCuJzk6uM4lMfFj7OhdPDMyTcXCwJxe8UBIODupvX3gCIz6Ah4ewTYBn/EKaTraZuTHhDjuAQAwaaLsZeEAMeVTAPjdKk1GUAm2x/AMaIKCaRuFihQWYH+PyENef2vWueM2rXvfK17769a+ADaxgB0vYwhr2sIhNrGBZytg82PSm6SvLO9IiIXH4wacF+KkaFjBUBJhtnzMp1gmgYAEkcEQNBsCOV49gp4IYBjw+sI4NFuWExF3UBDkogXTIWhOzCgoEZ4CRA4aCCxMywAFaMOH/AliaWeayVLHQja50p0vd6lr3uti9KwHqej7IKnF9XVoLPP+A2XniQQ10LcAKSsJFmLjyBFdIwApAwgIB7MEADjQAFAiSBLwQZCIFqc4Im9CXJmghBl1YAhS+MCjepiIDPLjMBVTABAhgk0gYaIMDGNCGNixgDc9lbnZHTOISm/jEKB5xZvPQXe8ajGHmicc7FfaN8uYBD0BA5hUT8FqBhBYzsAwdC/wghR1sIcGEUUASAsLfgJyAB0eoAdu82gTuQMEHo7hA8xys5StIuAQJOORJb8HhBbxgAhi4XGbjut01p/jNcI6znOds3RW32MVJdGL7JOQY7a04D3XAA13V/3CGI4CgFe1x5SsTwAHThiAEH1hBzAhykiWnCTMPiJ6Uq6yEGGDwAaFwZZZpQgpUzEQUo4iEDyKyxVHQTMtH2AAurokBNzigAC8IQxUqMAH0FqC5zP11ARYw11+nV9jITrayl83sZjv72dCOtrSnTe1qW/va2M62tred7Hm6uQAIwrMnAUDur4jDz+ldwAIK0AY43OEMGnhCAhJaClJcQQVQQEAPSEACCyTAE6ow1icq/QCV1cAJVXZCDJxQVJplIAmomNnMIFwKicOEizwAAQoSAIKB4EjLo/gMCsTgi+RqAQJECIMOKsByCZhBAGpAtnYJoO75rZvbOM+5znfO8/+e+/znOz82XcMt7iRGwCyUPbexC2BFxi0gC3BQA/6yqCONVjoWLAGBJ6BzgoHwVwUlkIR1gOSE2p5xf6FOu3xyNJOx/jgUn2GCB7CAggUnOrQfEgJqMDBcCayc5YCvQhiysKQ2u9nDDShAkoDO+MY7/vGQjzzPj/1rohc9fRE4i7nB4edfA2Hd81R3AfYwgjUkIAk4QoVhovBaVYSC9QEvwRFQwIQjLCEhS6jFDHB7otdX3OE0cXiWLxOFBGDBqybYAhNAwIPNBBwKWjABGRbJABvsGvDYr4AOBD8BBqyZ2LdGj9AgIPnym//86E+/zm/+68deXmoHmOyM/9D5Apj/YQFmMMOv1y2HN8iBx1q2LTrieorGX320JiBgACawAV2AAR5gALlXNx6gBXSyW673aq5HCq82VtEBBSZQBg44d3VXAlx0ASXABDtjO7nAbteXfS64fRIwAUvgBle0f8SmfjiYgzq4g+bHfiL1fkqUU8axIAYgeqBHAPk3bG8QBzIwBlr0enwTcGelZEu2ZF30BEKwAQJ0C0tgQgaAAh5QBiVRb1uEGTxwBQ73ajoiKFBQBwaAYLWwBWWwfF4GBWVQBkLiAA4AATMwAX/ngoAIeBLwAuxGbOumboiYiIq4iIzYiI74iJAYiZI4iZRYiZZ4iZiYiZq4iZy4iMP2iT8I/4RJtD5J1zBFeIgdRlf6twBvgAcjYAVPWBM0Q3yD0nWYEV9pgAEGtCgq+IVikAMgEICgVQqSkHVmU1ZZVgJWIAQz0AVC4YAmwAQswQRiwHdbQAa51oKBuI0tR4Pk14ngGI7iOI7kWI7meI7lOGyJ6H6imCV/kHnhBRanqG54sAX4RwULsAf+BwQYclQXx3ag0GDaYhKAcwdT4AQWVQu48BAycAQq8DesZArFcoIyEAdHUAIXWIKhoApfsAJyUAskFwPisgVY4AE1IAZ7QAUpp43c2JIVIAE2kAfoOJM0WZM2eZM4mY6KeGftCCuS5UR9EAFhwm4e1oh7UAcS4AJg8P8PmCETrjaQpJAEOTIzoJYAUhAuRpELJWIGwPg7N3ADQTBqF5CAYiAGbwAFouZ8fOMCGtAHw4UaisMAZOAAGkYEfueSeIl9E6CObcBut7YAEJCTgjmYhFmYhmmJHlaU6saOPckblXV0Z6EWB1CEHaaYivgGb6BrKnAZaMN8AQhhVRdqBBgKJ7AYUhBGJUKXBeAEYSABQfCVXxmWrpQBUOAANTB3GfMJEzeAF3AFCHAAC2AUtnYLDrAADjABd5mXyikB3pcFC9AGWdAGeSAj6niY1nmd2Jmd5ZiY69iYBgM64CA6XmIAbQAB5VmZ6NkGW8AFQvACy8cDssMEWAZhzSf/gKH1AB7XfKNlnEahhytZAVUAm7DpZaIAIjUQIibATKAQYQ53AUGQAGrlALbDAOCHnH+onHkJg0SwABiwbqppnukZoiI6oiRaoiZ6oiiaoiq6oizaoi76ojAaozIaos9Zo6HonVcCnqDkRBGCJOYJoiGaTEIwAvl0EMjpAxnERRrpcCnxOhwZZbmAchLQgjrgAgIKlhAne/VhAGQwAiOAlg/gWzTjTyxAARDgfbg2AVVwoRjapgAaBg1BfhAApDNap3Z6p3iap3q6p3zaos+JnoyJo7OCMEcXXj4KmCPaBVtQBwtABVP6d1WAkWlHEKcwHyhgaBMBBTWgBTbAAAMw/wHZpwM6cKU3oAoahwVaQAUFYAPIWQIdkGhpBwIA0BVtkI1uequAWAUTQJ592qu++qvAGqzCCqM/ep5tEKiC6jkNcw7vQAGHOqfQGq1nEAdl0AV3IAa6Bngu0AGgsApf0F6XcQRAMCcgEFsm4AtnqnKAOKqwCQpQAAF1oAVLkK0AmgIcVG+KlgKgQwb0iqv+mn0S4FPROrAEW7AGe7AIm7AKu7AM27AO+7AQG7ESO7EUW7HQep4gypPJajULUg8R0CXkSZd7WLBkcH8b9gYj4AFEcKSj0HwlAAWUQQoXAAV7sAEQgAIoQAVC4AC2yo2iegNRAAZHYAL/CXg64ANgIP+aPAAGYNAm/fqvUCuII2uxVFu1Vnu1WJu1Wru1EVue0aqxG1sOldUw4ACybeAGEDC1A7sAMUAFbyAGZvAEWRAHQPAGTGAXYwkBbxCMWjaWXnBgIzAFBoCcLOmzN3AFTzACuiaq2BeppdABTasCLpCcUVu52hcGasu1mru5nNu5nvu5D+u10Aq2Ydsbw4Ek5Ym2DSsEWhC3IPA7M2sAUxBWm1ECFlAEQNAErcmmGTqIPEsEbqCmgpgCJeADLrCmlpu8l0sAmQu6zvu80Bu90ruwI7uHw1W6mlMWBmC9zZuwDpAFXiCNJZAER4ABLHsZtusEjwq1EpCYbEUGRHB966v/vPQbsNN7v/ibv/qrudWbtsiKvbqyvWmrhwRcwAZMwFnAVu12BhtXBgzghzrwCpQLtWHAvMflnHnQBBJAvxzcckTAAAN8wCI8wiRcwiZ8wiicwiq8wizcwi78wjAcwzJMwiFsvf8LwGGRwznMTozkwl1gBm5QlliQBVmwBGdAS7oWoMrbvm5ga+Z5CwRABqDawZZbBUSQHiA8w1q8xVzcxV78xWAcxjBsaw6AttcLwFdCFraSSE1cxk38xnAcx27gjFtQlmWpBWcwA2SwB2Xgh8kLpzMAmCDsJ9VkAFngAEewwVTsr7qqYR52XHIcyZI8yZRcyZZ8yZicyZq8yZzc/8me/MmgHMqVXMZ6SMY3jMYdWxZ94KwM0MaavABZfIcQUAY1IAM18MNOULTad6sTQARIwqEcRsrRWj3ZIbyLrJw6gLkiy0jGKcrO/MzQHM3SPM3UXM2eTMqk7AanjL1q/BsUYBbkNgO2xsmHBAHO2AVkQAZYUANbYAZkcEhU4ARnRgRt4Md4qatm0KG7sGFnO8BugAsgXJIT6ADmi7wsVwUSMMFUnMwOsAYg3MoaxsbWPNEUXdEWfdEY3clunM3bHLar7BVcAg/xIM5urMms2wZtSwWGwwDOeIddAAFiIIeJJAbDZc+BKAHAS9DHtWG21gtawAtO7ABkcM7OSAYQgP8FDtCaE+AnHPa0ypvMXQPL0+e/bqBhGX3VWJ3VWr3VnNzKrtzROBVF4bDDlnV05OZEIi0P7eMH28sLXl3ReogBKxsGYUAEK1nXHuYGbw3K3FvA1WTTlhuwDbAA48zVhn3YiJ3YGb1h6ZzFpFt0Yp3KZk0caQ0Akjk9fqA4SHJSbt3Znv3ZoO3Zknymei3O1eQLZTwUGxbarP3ZkqyHgGnM/6oDAZtZbFVIrZ3bur3bvN3bvv3bwB3cwj3cxF3cxn3cq72HR8IA3qnDS2QrTRTSWiOZ74MGupAFbX3cve0nEPDPXu1WO73a2h3agSnb68qNgygA0wnQTczZ4/3e8B3/3/I93/Rd3/RNBgLMpQ5gA9xsK9981mjxREGpo20RFjOA3eJt327d3bug14Xk3gA934SMC3toACk3v8m8BcHLkoM42ISkhyWl4CI+4iRe4iZ+4qy9YbXGVhtrK5Md0npGAUEJP2QROms8fSaeSG5NZm7s1j2t4GWMAemMwSJFzz2tOKyK0/pH0GyM262c4Cge5VI+5VRe5Z2dHhiA3RgAAKKow+nw32hd2ZcNP+8DOl6BCw5u4nqtCypOZmku36nNSMv94NmTSGwVskZBBllwJCelzafRKExt5YI+6IRe6MW92vjNAGtA5njWzUcH5lyi1jJ+HKNEDvQARdPDd9ez/+nXM1zERWZvNWacPurKdFwh7udyGeIolR5+4ueJFOcN3sQ7Tuq0Xuu2fuu4nuu6vuu83uu+7ihH0tMDENmNDt0AHubyEDGDGhagEzqhcy51Hu3SPu3UXu22gxqtnD1wWe3c3u11Hup1YxRvFe3FZVzZA+jaBOhZOVLe3u7u/u7wHu/yPu/0Xu/2fu/4nu/07ifnAkXihT5jO17x9OgAHgyS/u8Kcg7wgw7MrsMO//AQH/ESP/EQXw4Uf/EYn/Eav/Ec3/Ee//EYb/EVf3kgX/Ihj8p8xugvphXQ7RXE4UQxrhaUnqPqwE4UEGxrxoM6v/M8v22NyGw52fPVqZ2I2P8A7rMWKg8rZM0OLy7S000Pzh0r4EABa0BX6maZRJ/1Wr/12UltXP/zPW+eccXl7+hdZNFETv/0BN6xsBIBazBslCdsdLZXzDb3dn/3h1X3eeX1lKj3eP9TXL90eSAASQ/wP5n2TzTzkYUcH0tXcS/3fx/5kj/5g0VDesVDizVDlL/5PxVXaLBOZ490lW3Zx2FZxM4b9eAH59FcLfVTzyX5fs/5sj/7tF/72LVdRzgAAf9i3QzSo3/ZSxRZA+D4rv/6r2/7yJ/8JWb5eYX5gcX8yh9nbGb1DbD7Su/flB0PMY4J1p8+9UABDcA4l7NSxj9TmtT85p/+6r/+7N/+mDT//upiOUo/1tgf6YmfDmYPQ9/k/jcECHkFBXkEhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydl3+goaKjo36hBxF9FABoAgJoaAAUEQemf7akubq7B70NDZ4Ev8CJw4a/j8PIjMt5hcHQ0dLT1NXW19jRu9uiqKusrrEAtLjc5tzkDQPAyu3u7/Dta8rz8fbu9ff6+/z9/v8AAwocSLCgwYMIExo8xysCAFatXsmK4Kccw4u61gyYt6ajx48gQ4psJ2zAul8bRZrcqCylPI0pTYqcSbOmzZs4c+rcybOnz59AgwodSrRoToygbPmJQKEVLHF9auWyiPRcy5VYs2rVCnJY/x51MmFuHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt22VSv6ObDKaaxZB6ZWrHpxqbNCYO16LIm2gdiVj+9Knky5suXLmDNrnly1FipwEgETHj0KlbOSrlKrXs16tdrWAiLnG5DapICVrmzD3s27t+/fwIMLH068uPHjyJMrX87ceOdefQColiX1FmnSB4Spa846Ylbf6wggpl07N/nb3NOrX8++vfv38OMXJ3wg+nQAUfXW0sv/urkIEcEiX28CNnAYYq+kFhFvTw3o4IMQRijhhBDS11c4DwHWy35U+beNQ+E8JeKIJJZo4okornMaggG2iOKLMMYo44w01mjjjTjmqP/jjjz26OOPMnbGFGiv/DULLb0MhpSSGB0gHZA93oYIi7A8+dCVEEGp5ZZcdunll2CGKWaJedX30IIYytJHBGwmaUqHU3UGEZZ01mnnnXjmeWUrxIhHwBoCYCnOnHU+peehiCaq6KKMNuroo5BGKumklFZqKaKE7RUdmgpiScGnayLJpIenNHVppXwe0kCgsrBy5m20DXrqrLTWauutuOaq6651jqYpkauJSCebbXJIqh/f8Hrop6vctl2GfTVbD21XMqvstdhmq+223OpKmqbJNtidodCGimR1mUbXKrPstuvuu/DGK++FRlKgSqsn/bKGOPaqMu+/AAcs8MAEF2z/8MEIJ6zwwgw37HDAeSnlzad7CtgauRn2Eep+6cqyysMLa8wsmw9pfGa+v/Crsb8gt+zyyzDHLPPMNNdM6h+9pNIXpxeTy2yoG1fXXyhvqnIvwCvXPC8a68DUwF8s9xvwylRXbfXVWGet9dZcd+3112CHLfbYZJdt9tlon31zRagwleyZPIcobLWgFruhsaGkwma/5u7989jEBp7K14ITG91JHpWsM6hUz5v245BHLvnklFdu+eVp30z0hmz6C/eIsM0Nbb/Ebvhmm3oHviHffRfu+uuwx/46Bbd1RNunhjPutey89+7778AHL/zwxBdv/PHIJ6888prnkrPOhaJJ/6KContsL7GMM156fa3DjvXygnsz55HPg2/++einr/767Lfvfu/Nk7IX551TXHGJDGIM95me/q0x8XcLoAAHSMCccW5NA+zc+xbIwAY68IEQjCCx1jaqW/BHP21jmaDw55tW6EZuVaLTv15XwBKaEDrnSlL4Ove/0pHwhDCMoQxnSMMa2vCGOMyhDnfIwx76cIAUtAicLHhADUYPdMGCVW4IBKM7vWx0oKIY7ljWwhT+8IpYzKIWt8jFLnrxi/HL1Jvo57Y7iStE6EmjebZCoWAtiFz8+ljdtvfFOtrxjnjMox732IswNo+ALLQWnc7YRtbcCWt8TKQiF8nIRjqSgPx+1NwFMdg2BQ6OXd3Cz9VeKMBJevKToAylKEdJylKa8pSoTKUqV8nKVrrylbCM5ScjSctSzM+C8yth+gg4y1r68pfADKYwh0nMYhrzmL5yZSR7icxmOvOZ0IymNKdZywoa85XUzKY2t8nNbnpzG8y0ZSk9FM5vmvOc6EynOtcpziESzZMYKSc750nPetrznseUJz73yc9++vOfAA2oQAdK0IIa9KAITahCF8rQhjr0oRCNqEQnStGKWvSiGM2oRjfK0Y569KMgDalIR0rSkpr0pChNqUpXytKWuvSlMI2pTGdK05ra9KY4zalOd8rTnvr0p0ANqlCHStSRBgIAOw==) no-repeat;color:#666;"><p style="padding:179px 0px 0px 225px;">网站维护中，造成不便，请见谅...<br>谢谢合作！</p></div>');
    }
});