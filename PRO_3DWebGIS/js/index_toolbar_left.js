
$(document).ready(function () {
    var toolbar_obj_test,toolbar_obj_gis;
    var content_div;
    var connect_text;

    content_div = $("#main_content"); // main web content pleased. class:.XXXX, id: #XXXX; element:main_div
    toolbar_obj_test = $("#fixed .mb");
    toolbar_obj_test.bind("click",function () {
        //alert("test");
        //web_content_obj.load("test.html #content");
        // <iframe name="toppage" width=100% height=100% marginwidth=0 marginheight=0 frameborder="no" border="0"  src="index.html" ></iframe>

        content_div.html("");
        content_div.load("pages/img_play/pic_play_10/pic_play_10.html");
        connect_text ="<p style='color: #0a4db7;font-size: 18px'>hello word</p>";
        content_div.append(connect_text);
    });

    toolbar_obj_gis = $("#fixed .dh");
    toolbar_obj_gis.bind("click",function () {
        content_div.html("");
        content_div.load("pages/tab/md_tab.html .htmleaf-container");
        load_js_css_file("css/md_tab_css/default.css","css");
        load_js_css_file("css/md_tab_css/reset.css","css");
        load_js_css_file("css/md_tab_css/styles.css","css");
        load_js_css_file("css/md_tab_css/tab_font.css","css");
        load_js_css_file("js/md_tab/tab_index.js","js");
        load_js_css_file("js/md_tab/tab_stopExecutionOnTimeout.js","js");

        //content_div.css({"height":"100%", "width": "100%"});
    });


});
