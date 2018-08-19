var data = [{
    url: "img/t1.png",
    text: "北国冰封，千里冰封，万里雪飘"
},
{
    url: "img/t2.png",
    text: "待从头收拾旧山河，朝天阙"
},
{
    url: "img/t3.png",
    text: "但愿人长久千里共婵娟"
},
{
    url: "img/t4.png",
    text: "才下船头却上心头"
},{
    url: "img/t5.png",
    text: "北国冰封，千里冰封，万里雪飘"
},
{
    url: "img/t1.png",
    text: "待从头收拾旧山河，朝天阙"
},
{
    url: "img/t2.png",
    text: "但愿人长久千里共婵娟"
},
{
    url: "img/t3.png",
    text: "才下船头却上心头"
},
{
    url: "img/t4.png",
    text: "小小小小小小小"
}];
//从后台取数据
/*$.ajax({
    url: "http://localhost/Ehcache/baraage",//服务器端应改为服务器端的地址
    type: "post",
    async: false,
    success: function(st) {
       // console.log(st);
        $.extend(true, data, st); //st覆盖data
       // console.log(data);
    }
});*/
var num = data.length;
for (var i = 0; i < num; i++) {
    $("ul").append("<li ><img src='"+data[i].url+"' class='img '><div class='BarMes'>" + data[i].text + "</div></li>");
    // $("li").addClass("journal-reward");
    if(i==7){
    	$("ul li:eq(7)").slideDown(10);
    }
    
}

//
function add() {
/*    $.ajax({
        url: "****",
        type: "post",
        async: false,
        success: function(st) {
            //console.log(st);
            $.extend(true, data, st);
            //console.log(data);
        }
    });*/
    var num = data.length;
    for (var i = 0; i < num; i++) {
        $("ul").append("<li><img src='"+data[i].url+"' class='img'><div class='BarMes'>" + data[i].text + "</div></li>");
        //console.log(data[i].text);
    }

}