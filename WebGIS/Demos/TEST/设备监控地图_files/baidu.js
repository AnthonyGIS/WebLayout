/*!
* @copyright Copyright &copy; 深圳市智控信息科技有限公司, izkong.com, 2014 - 2018
* @version 0.0.1
*
* 根据百度地图API进行简单封装，适合本公司业务场景
*
*
* 欢迎有需要农农沟通
* Author: 欧阳高高
* EMail:inkcaridge@qq.com
* Copyright: 2018, 深圳市智控信息科技有限公司, izkong.com
*/(function($){"use strict";const BaiduMap=function(element,options){this.$element=$(element);this.init(options);};BaiduMap.prototype={constructor:BaiduMap,init:function(options){const me=this,$el=me.$element;$.each(options,function(key,value){me[key]=value;});me.initElementStyle();const map=new BMap.Map($el[0]);map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP,BMAP_HYBRID_MAP]}));map.addControl(new BMap.NavigationControl());me.initLocalCity(map);map.enableScrollWheelZoom();map.enableContinuousZoom();if(me.clickSelect){map.addEventListener("click",function(e){me.onMapClick(e);});}
me.mapObject=map;},getBoundary:function(city){const me=this,map=me.getMap(),bdary=new BMap.Boundary();bdary.get(city,function(rs){map.clearOverlays();var count=rs.boundaries.length;if(count===0){alert('未能获取当前输入行政区域');return;}
var pointArray=[];for(var i=0;i<count;i++){var ply=new BMap.Polygon(rs.boundaries[i],{strokeWeight:2,strokeColor:"#ff0000",strokeOpacity:0.0,fillOpacity:0.3,fillColor:"#DBECC8"});map.addOverlay(ply);pointArray=pointArray.concat(ply.getPath());}
map.setViewport(pointArray);me.raise('polygonComplete',[city,count]);});},autoComplete:function(autoCompleteEl){const me=this,map=me.getMap(),el=$('#'+autoCompleteEl),f=new BMap.Autocomplete({input:autoCompleteEl,location:map});f.setInputValue(el.val());f.addEventListener("onconfirm",function(res){var d=res.item.value,myValue=d.province+d.city+d.district+d.street+d.business;function e(){var h=c.getResults().getPoi(0).point;map.centerAndZoom(h,me.defaultZoom);me.setGeocoder(h);me.setMapMarker(h);map.panTo(h);el.val(myValue);}
var c=new BMap.LocalSearch(map,{onSearchComplete:e});c.search(myValue)})},initElementStyle:function(){const me=this,$el=me.$element;if(!$.isPlainObject(me.style)){return;}
$el.css(me.style);},raise:function(event,params){const self=this,e=$.Event(event);if(params!==undefined){self.$element.trigger(e,params);}else{self.$element.trigger(e);}
let out=e.result||false;if(!out){return;}
switch(event){case 'markerselect':case 'markerclick':case 'search':case 'markererror':case 'polygonComplete':break;default:break;}},initLocalCity:function($map){const me=this;if(!me.authLocalCity){$map.centerAndZoom(me.defaultCenter,me.zoom||me.defaultZoom);return;}
const myCity=new BMap.LocalCity();myCity.get(function(result){var cityName=result.name;$map.centerAndZoom(cityName,me.zoom||me.defaultZoom);});},switchCenter:function(name,zoom){const me=this,map=me.getMap();map.centerAndZoom(name||me.defaultCenter,zoom||me.defaultZoom);},onMapClick:function(e){const me=this,map=me.getMap();if(!map){return;}
me.clearData();const pt=e.point,point=new BMap.Point(pt.lng,pt.lat);me.setMapMarker(point);},setMapMarker:function(point,opts){const me=this,map=me.getMap();if(!map){return;}
const marker=new BMap.Marker(point,opts);map.addOverlay(marker);return marker;},setGeocoder:function(point){const me=this,map=me.getMap();if(!map){return;}
return new BMap.Geocoder().getLocation(point,function(res){me.raise('markerselect',[res]);});},searchLocal:function(search){const me=this,map=me.getMap();let beforeSearch=me.beforeSearch;if(beforeSearch==search||!map){return;}
const local=new BMap.LocalSearch(map,{renderOptions:{map:map},onSearchComplete:function(results){if(local.getStatus()!=BMAP_STATUS_SUCCESS){return;}
me.raise('search',results);}});local.search(search);me.beforeSearch=search;},setLocation:function(lng,lat){const me=this,map=me.getMap();if(map==null){return;}
me.clearData();const point=me.setMarker({'lng':lng||me.defaultLng,'lat':lat||me.defaultLat});if(point){map.centerAndZoom(point,me.defaultZoom);map.panTo(point);}},setData:function(rows){if(!rows){return;}
if(!$.isArray(rows)&&$.isPlainObject(rows)){rows=[rows];}
const me=this,map=me.getMap();if(map==null){return;}
me.clearData();let cfg;for(let i=0,len=rows.length;i<len;i++){cfg=rows[i];me.setDataMarker(cfg);}},clearData:function(){const me=this,map=me.getMap();map.clearOverlays();},setDataMarker:function(cfg){const me=this,map=me.getMap();if(map==null){me.raise('markererror',['地图对象不存在',cfg]);return;}
if(!$.isPlainObject(cfg)){console.error('参数错误:'+cfg);me.raise('markererror',['参数格式错误，要求为JSON Object',cfg]);return;}
const lng=cfg.lng,lat=cfg.lat,content=cfg.content,zoom=cfg.zoom||me.defaultZoom;if(!$.isNumeric(lng)||!$.isNumeric(lat)){me.raise('markererror',['经纬度错误[lng|lat]',cfg]);return;}
const point=new BMap.Point(lng,lat),icon=cfg.iconUrl?cfg.iconUrl:me.getIcon(cfg.icon),objIcon=me.buildIcon(icon),marker=me.setMapMarker(point,{icon:objIcon});marker.disableMassClear();if(content&&content!=''){const infoWindow=new BMap.InfoWindow(content);marker.addEventListener("click",function(){this.openInfoWindow(infoWindow);me.raise('markerclick',[me,marker,infoWindow]);});}
return point;},buildIcon:function(icon){const me=this,cfg=me.iconConfig||{},size=new BMap.Size(cfg.width||32,cfg.height||32);return new BMap.Icon(icon||me.iconUrlConfig.defaultIcon,size,{imageSize:size});},getIcon:function(name){const me=this;if(!name){return me.iconUrlConfig.defaultIcon;}
return me.iconUrlConfig[name]||me.iconUrlConfig['defaultIcon'];},getMap:function(){return this.mapObject;}};$.fn.baidumap=function(option){var args=Array.apply(null,arguments);args.shift();return this.each(function(){var $this=$(this),data=$this.data('baidumap'),options=typeof option==='object'&&option;if(!data){data=new BaiduMap(this,$.extend({},$.fn.baidumap.defaults,options,$(this).data()));$this.data('baidumap',data);}
if(typeof option==='string'){data[option].apply(data,args);}});};$.fn.baidumap.defaults={defaultZoom:12,defaultCenter:'中国',defaultLng:116.404,defaultLat:39.915,authLocalCity:true,clickSelect:false,iconConfig:{width:32,height:32},iconUrlConfig:{defaultIcon:"images/online.png",online:"images/online.png",offline:"images/offline.png"}}
$.fn.baidumap.Constructor=BaiduMap;})(window.jQuery);