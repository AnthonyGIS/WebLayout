//banneralert.js
(function(){
	var timeout = setTimeout(function(){}, 0);
	var bannerID = 0;
	$.fn.extend({
		showbanner:function(opt){
			var _def = {
				"title" : "",
				"icon" : "",
				"content" : "",
				"handle" : true,
				"addclass" : "",
				"sound" : "",
				"position" : "top",
				"html" : false,
				"show_duration" : 400,
				"show_easing" : "swing",
				"duration" : 3000,
				"hide_duration" : 400,
				"hide_easing" : "swing",
				"onClick" : "",
				"onHide" : "",
				"width" : "100%",
				"margin_left": "0",
				"margin_top": "0",
				"z":"3",
				"custom_css":"",//yes
			}
			var _opt = $.extend(_def, opt);
			var $obj = $(this);
			if(_opt.custom_css == ""){
				if($obj.find(".article").length == 0){
					_opt.width = $obj.width();
					_opt.margin_left = $obj.offset().left;
					_opt.margin_top = $obj.offset().top;
					_opt.z = "1";
				}
			}
			if(_opt.icon != ""){
				_opt.icon = "<img class='bannericon' src='" + _opt.icon + "' />";
			};
			if(_opt.handle == true){
				var handle = "<div class=\"bannerhandle\"><svg><use xlink:href=\"/admin/images/svg/symbol-defs.svg#next-remove\"></use></svg></div>";
			}
			else
			{
				var handle = "";
			};
			if(_opt.sound != ""){
				_opt.sound = "<audio id=\"bannersound\" autoplay=\"autoplay\" src=\"" + _opt.sound + "\"></audio>";
			}
			var position = _opt.position;
			var clickedhandle = false;
			var handletop = "";
			bannerID ++;
			if(position == "bottom"){
				handletop = handle;
				handle = "";
			}
			var stringtohtml = function(str) { 
				str = str.replace(/&/g, "&amp;");
				str = str.replace(/</g, "&lt;");
				str = str.replace(/>/g, "&gt;");
				str = str.replace(/"/g, "&quot;");
				str = str.replace(/\n/g, "<br>");
				return str;
			}
			if(_opt.html != true){
				_opt.title = stringtohtml(_opt.title);
				_opt.content = stringtohtml(_opt.content);
			}
			var show = function(){
				$(".banneralert,#bannersound").remove();
				clearTimeout(timeout);
				$obj.append("<div class=\"banneralert " + _opt.addclass + "\"><div class=\"bannercontainer\">" + handletop + "<div class=\"bannertitlebar\">" + _opt.icon + _opt.title + "</div><div class=\"bannercontent\">" + _opt.content + "</div>" + handle + "</div></div>" + _opt.sound).find(".banneralert").width(_opt.width).css({"margin-left":_opt.margin_left,"margin-top":_opt.margin_top,"z-index":_opt.z});
				$(".banneralert").addClass("bannerID" + bannerID);
				if(_opt.sound != ""){
					document.getElementById("bannersound").onended = function() {
						$("#bannersound").remove();
					}
				}
				var bannerw = $(".banneralert").outerHeight();
				$(".banneralert").css(position, -bannerw);
				if(position != "bottom"){
					$(".banneralert").animate({top:0}, _opt.show_duration, _opt.show_easing, function(){
						timeout = setTimeout(function(){
							hide(bannerID);
						}, _opt.duration)
					});
				}
				else
				{
					$(".banneralert").animate({bottom:0}, _opt.show_duration, _opt.show_easing, function(){
						timeout = setTimeout(function(){
							hide(bannerID);
						}, _opt.duration)
					});
				}
				$(".bannerhandle").click(function(){
					clickedhandle = true;
					hide(bannerID);
				});
				$(".banneralert").click(function(){
					if(typeof _opt.onClick == "function" && clickedhandle != true){
						_opt.onClick();
					}
				});
			}
			var hide = function(thisbannerID){
				var bannerw = $(".bannerID" + thisbannerID).outerHeight();
				if(position != "bottom"){
					$(".bannerID" + thisbannerID).animate({top:-bannerw}, _opt.hide_duration, _opt.hide_easing, function(){
						$(".bannerID" + thisbannerID).remove();
						if(typeof _opt.onHide == "function"){
							_opt.onHide();
						}
					});
				}
				else
				{
					$(".bannerID" + thisbannerID).animate({bottom:-bannerw}, _opt.hide_duration, _opt.hide_easing, function(){
						$(".bannerID" + thisbannerID).remove();
						if(typeof _opt.onHide == "function"){
							_opt.onHide();
						}
					});
				}
			}
			show();
		}
	});
})(jQuery);