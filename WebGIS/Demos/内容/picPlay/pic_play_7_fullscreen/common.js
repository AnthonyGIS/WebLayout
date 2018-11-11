var picTotal = 3;
var change_delay = 3000;
var change_speed = 800;
var arr = ["text1", "text2", "text3"];
var change_mode = 1;
var direction = 0;
var img_width = $(".lunbo_img").width();
var t;
var currentPic = 1;
var lastPic = 0;
var status = 0;
var img_position;
$(document).ready(function () {
    document.getElementById("lunbo_tip").innerHTML = arr[0];
    $(".lunbo_img").each(function (i) {
        $(this).css("z-index", 10 + i);
    });
    for (var index = 1; index < picTotal; index++) {
        if (direction == 1) {
            img_position = -img_width;
        } else {
            img_position = img_width;
        }
        $(".lunbo_img").eq(index).css("left", img_position);
    }
    t = setTimeout("picChange()", 3000);
});
$("#lunbo_num span").on('click', function () {
    if ($(this).index() != lastPic && status == 0) {
        currentPic = $(this).index();
        clearTimeout(t);
        picChange();
        status = 1;
    }
});
picChange = function () {
    $("#lunbo_tip").fadeOut(200).animate({left: 870}, 0);
    if (change_mode == 1) {
        change_position = -img_position / 2;
    } else if (change_mode == 2) {
        change_position = -img_position;
    } else if (change_mode == 3) {
        change_position = 0;
    }
    $(".lunbo_img").eq(lastPic).animate({left: change_position}, change_speed, function () {
        $(this).children(".lunbo_detail").fadeOut();
    });
    $("#lunbo_num span").eq(lastPic).animate({padding: "5px 5px"}, 200);
    $("#lunbo_num span").eq(lastPic).css("backgroundColor", "#f4f4f4");
    $("#lunbo_num span").eq(currentPic).animate({padding: "5px 10px"}, 200);
    $("#lunbo_num span").eq(currentPic).css("backgroundColor", "#ffa719");
    $(".lunbo_img").eq(currentPic).animate({left: "0"}, change_speed, function () {
        $(this).children(".lunbo_detail").fadeIn(500);
        $(".lunbo_content").eq(currentPic).fadeIn(500);
        $(".lunbo_content").eq(lastPic).hide();
        $(".lunbo_img").eq(lastPic).css("left", img_position).css("z-index", 11);
        $(".lunbo_img").eq(currentPic).css("z-index", 10);
        var val;
        switch (currentPic) {
            case 0:
                val = arr[0];
                break;
            case 1:
                val = arr[1];
                break;
            case 2:
                val = arr[2];
                break;
        }
        document.getElementById("lunbo_tip").innerHTML = val;
        $("#lunbo_tip").show().animate({left: 890}, 200);
        lastPic = currentPic;
        currentPic += 1;
        currentPic = currentPic % picTotal;
        status = 0;
    });
    t = setTimeout("picChange()", change_delay);
};
$(window).resize(function () {
    img_width = $(".lunbo_img").width();
    for (var index = 0; index < picTotal; index++) {
        if (direction == 1 && index != lastPic) {
            img_position = -img_width;
        } else {
            img_position = img_width;
        }
    }
    $(".lunbo_img").eq(index).css("left", img_position);
});