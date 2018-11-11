$(document).ready(function () {
    var toolbar_obj_test;
    var web_content_obj;
    var connect_text;

    web_content_obj = $(".cd-main-content"); // main web content pleased
    toolbar_obj_test = $("#fixed .mb");
    toolbar_obj_test.bind("click",function () {
        //alert("test");
        //web_content_obj.load("test.html #content");
        // <iframe name="toppage" width=100% height=100% marginwidth=0 marginheight=0 frameborder="no" border="0"  src="index.html" ></iframe>

        web_content_obj.html("");
        web_content_obj.load("pages/img_play/pic_play_10/pic_play_10.html");
        connect_text ="<p style='color: #0a4db7;font-size: 18px'>hello word</p>";
        web_content_obj.append(connect_text);
    });




});
