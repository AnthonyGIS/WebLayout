var xinm=new Array();xinm[0]="白金香"
xinm[1]="白应梅"
xinm[2]="柏仁燕"
xinm[3]="包颜琳"
xinm[4]="鲍学梅"
xinm[5]="鲍  颖"
xinm[6]="蔡玲芳"
xinm[7]="蔡  艳"
xinm[8]="蔡  玉"
xinm[9]="曹发敏"
xinm[10]="梁 河"
xinm[11]="小 舒"
xinm[12]="小 梁"
xinm[13]="小凉凉"
xinm[14]="小 量"
xinm[15]="小 喝"
xinm[16]="小 ＆"
xinm[17]="呵 呵"
xinm[18]="哈 哈"
var phone=new Array();phone[0]="15161584615"
phone[1]="18011111111"
phone[2]="1581635485"
phone[3]="13513154899"
phone[4]="1828647913"
phone[5]="18024631478"
phone[6]="18631549875"
phone[7]="18312345678"
phone[8]="15800000000"
phone[9]="13712365487"
phone[10]="13222225487"
phone[11]="13233225487"
phone[12]="13233225487"
phone[13]="13233225487"
phone[14]="13233225487"
phone[15]="13233225487"
phone[16]="13233225487"
phone[17]="13233225487"
phone[18]="13233225487"
var nametxt=$('.name');var phonetxt=$('.phone');var pcount=xinm.length-1;var runing=true;var td=15;var num=0;var gundong;var award;function start(){if(runing){runing=false;startNum()};var timing=setInterval(function(){time=timing;zd();},1000)}
function reset(){startNum();var timing=setInterval(function(){time=timing;zd();},1000)}
function startNum(){pcount=xinm.length-1;num=Math.floor(Math.random()*pcount);nametxt.html(xinm[num]);phonetxt.html(phone[num]);gundong=setTimeout(startNum,0);}
function stop(){clearInterval(gundong);gundong=0;}
function zd(){if(td<2){clearInterval(time);stop()
runing=true;$(".count_down").html("抽奖结束，恭喜获奖者");}
if(td>=9){award="三等奖";}else if(td>=4&&td<9){award="二等奖";}else{award="一等奖";}
if(td>=1){clearInterval(time);stop()
$('.list').prepend("<p>"+"<span>"+award+"</span>"+' '+xinm[num]+" -- "+phone[num]+"</p>");td-=1;}
var _this=$(".zjmd .list span")
if(td>=8){_this.addClass("green");}else if(td>=3&&td<8){_this.addClass("blue");}else{_this.addClass("red");}
if(td>0){setTimeout(reset,2000);}
xinm.splice($.inArray(xinm[num],xinm),1);phone.splice($.inArray(phone[num],phone),1);}
var endDate=5000;var second=parseInt(endDate/1000)%60;var minute=parseInt(endDate/1000/60)%60;var hour=parseInt(endDate/1000/60/60)%24;var day=parseInt(endDate/1000/60/60/24)%24;$('#countDown .count_down .second').html(second);$('#countDown .count_down .minute').html(minute);$('#countDown .count_down .hour').html(hour);$('#countDown .count_down .day').html(day);if(second<10){$('#countDown .count_down .second').html('0'+second);}
if(minute<10){$('#countDown .count_down .minute').html('0'+minute);}
if(hour<10){$('#countDown .count_down .hour').html('0'+hour);}
if(day<10){$('#countDown .count_down .day').html('0'+day);}
var timeRun=setInterval(function(){second--;if(second<0){minute=minute-1;second=59;if(minute<0){hour=hour-1;minute=59;if(hour<0){day=day-1;hour=23;}}}
$('#countDown .count_down .second').html(second);$('#countDown .count_down .minute').html(minute);$('#countDown .count_down .hour').html(hour);$('#countDown .count_down .day').html(day);if(second<=0&&minute<=0&&hour<=0&&day<=0){clearInterval(timeRun);$(".count_down").html("正在抽奖，请稍后。。。");start()}
if(second<10){$('#countDown .count_down .second').html('0'+second);}
if(minute<10){$('#countDown .count_down .minute').html('0'+minute);}
if(hour<10){$('#countDown .count_down .hour').html('0'+hour);}
if(day<10){$('#countDown .count_down .day').html('0'+day);}},1000);