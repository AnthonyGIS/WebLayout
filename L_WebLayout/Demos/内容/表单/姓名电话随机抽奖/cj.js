
var candidates_lst = []; //= new Array();
var phone = [];// = new Array();
{
candidates_lst[0] = "白金香";
candidates_lst[1] = "白应梅";
candidates_lst[2] = "柏仁燕";
candidates_lst[3] = "包颜琳";
candidates_lst[4] = "鲍学梅";
candidates_lst[5] = "鲍  颖";
candidates_lst[6] = "蔡玲芳";
candidates_lst[7] = "蔡  艳";
candidates_lst[8] = "蔡  玉";
candidates_lst[9] = "曹发敏";
candidates_lst[10] = "梁 河";
candidates_lst[11] = "小 舒";
candidates_lst[12] = "小 梁";
candidates_lst[13] = "小凉凉";
candidates_lst[14] = "小 量";
candidates_lst[15] = "小 喝";
candidates_lst[16] = "小 ＆";
candidates_lst[17] = "呵 呵";
candidates_lst[18] = "哈 哈";

phone[0] = "15161584615";
phone[1] = "18011111111";
phone[2] = "15816359485";
phone[3] = "13513154899";
phone[4] = "1828647913";
phone[5] = "18024631478";
phone[6] = "18631549875";
phone[7] = "18312345678";
phone[8] = "15800000000";
phone[9] = "13712365487";
phone[10] = "13222225487";
phone[11] = "13233225487";
phone[12] = "13233225487";
phone[13] = "13233225487";
phone[14] = "13233225487";
phone[15] = "13233225487";
phone[16] = "13233225487";
phone[17] = "13233225487";
phone[18] = "13233225487";
}

var name_txt = $('.name');
var phone_txt = $('.phone');
var p_count = candidates_lst.length - 1;
var is_running = true;
var num_win = 15; //抽奖的人数
var winner = 0;
var scroll_disp = null;
var award;
var time = null;

function startRunLottery() {
    if (is_running) {
        is_running = false;
        startNum();
    }
    var timing = setInterval(function () {
        time = timing;
        zd();
    }, 1000);
}

function reset() {
    startNum();
    var timing = setInterval(function () {
        time = timing;
        zd();
    }, 1000)
}

function startNum() {
    p_count = candidates_lst.length - 1;
    winner = Math.floor(Math.random() * p_count);
    name_txt.html(candidates_lst[winner]);
    phone_txt.html(phone[winner]);
    scroll_disp = setTimeout(startNum, 0);
}

function stop() {
    clearInterval(scroll_disp);
    scroll_disp = 0;
}

function zd() {
    if (num_win < 2) {
        clearInterval(time);
        stop();
        is_running = true;
        $(".count_down").html("抽奖结束，恭喜获奖者");
    }
    if (num_win >= 9) {
        award = "三等奖";
    } else if (num_win >= 4 && num_win < 9) {
        award = "二等奖";
    } else {
        award = "一等奖";
    }
    if (num_win >= 1) {
        clearInterval(time);
        stop();
        $('.list').prepend("<p>" + "<span>" + award + "</span>" + ' ' + candidates_lst[winner] + " -- " + phone[winner] + "</p>");
        num_win -= 1;
    }

    var _this = $(".winning_results .list span");
    if (num_win >= 8) {
        _this.addClass("green");
    } else if (num_win >= 3 && num_win < 8) {
        _this.addClass("blue");
    } else {
        _this.addClass("red");
    }
    if (num_win > 0) {
        setTimeout(reset, 2000);
    }
    candidates_lst.splice($.inArray(candidates_lst[winner], candidates_lst), 1);
    phone.splice($.inArray(phone[winner], phone), 1);
}



function dateTimeBackCountInitial(pi_day,pi_hour, pi_minute, pi_second) {

    function timeStrModify() {
        if (second < 10) { bc_s.html('0' + second);}
        if (minute < 10) {bc_m.html('0' + minute);}
        if (hour < 10) {bc_h.html('0' + hour);}
        if (day < 10) {bc_d.html('0' + day);}
    }
    function backCountDisplay() {
        bc_s.html(second);
        bc_m.html(minute);
        bc_h.html(hour);
        bc_d.html(day);
    }

    var endDate = 1000 * (pi_day*24*60*60+pi_hour*60*60+pi_minute*60+pi_second); // 10s
    var second = parseInt(endDate / 1000) % 60;
    var minute = parseInt(endDate / 1000 / 60) % 60;
    var hour = parseInt(endDate / 1000 / 60 / 60) % 24;
    var day = parseInt(endDate / 1000 / 60 / 60 / 24) % 24;

    var bc_s = $('#countDown .count_down .second');
    var bc_m = $('#countDown .count_down .minute');
    var bc_h = $('#countDown .count_down .hour');
    var bc_d = $('#countDown .count_down .day');
    backCountDisplay();
    timeStrModify();

    // 抽奖倒计时
    var timeRun = setInterval(function () {
        second--;
        if (second < 0) {
            minute = minute - 1;
            second = 59;
            if (minute < 0) {
                hour = hour - 1;
                minute = 59;
                if (hour < 0) {
                    day = day - 1;
                    hour = 23;
                }
            }
        }
        backCountDisplay();

        // 剩余时间倒计时结束，开始抽奖
        if (second <= 0 && minute <= 0 && hour <= 0 && day <= 0) {
            clearInterval(timeRun);
            $(".count_down").html("抽奖中，请等待...");
            startRunLottery();
        }

        timeStrModify();
    }, 1000);
}

dateTimeBackCountInitial(0,0,0,5);