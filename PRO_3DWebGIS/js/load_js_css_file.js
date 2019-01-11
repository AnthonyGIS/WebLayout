function load_js_css_file(file_name, file_type) {
    var link_obj;

    if (file_type === "js") {
        link_obj = document.createElement('script');
        link_obj.setAttribute("type", "text/javascript");
        link_obj.setAttribute("src", file_name);
        //add to html for js import location
        //<script src="jquery_002.js"></script>
        //<script>window.jQuery || document.write('<script src="js/jquery-2.1.1.min.js"><\/script>')</script>
    } else if (file_type === "css") {
        link_obj = document.createElement('link');
        link_obj.setAttribute("rel", "stylesheet");
        link_obj.setAttribute("type", "text/css");
        link_obj.setAttribute("href", file_name);
    }

    // add to header
    if (typeof link_obj !== "undefined") {
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(link_obj);
    }
}

// usages
// load_js_css_file("do.js","js");
// load_js_css_file("test.css","css");


// 动态加载css代码片段
function loadCssCode(code) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    //for Chrome Firefox Opera Safari style.appendChild(document.createTextNode(code));
    //for IE //style.styleSheet.cssText = code;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}

// usage
// loadCssCode('body{background-color:#f00}');
function loadCssCode(code) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    try {
        //for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(code));
    }
    catch (ex) {
        //for IE
        style.styleSheet.cssText = code;
    }
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}

//loadCssCode('body{background-color:#f00}');






// -------------------------------------------------------------
// 动态加载css文件
// $('#btn').click(function(){
//     $('head').children(':last').attr({
//         rel: "stylesheet",
//         type: 'text/css',
//         href: './style.css'}
//         );
// });

// 动态加载js文件:
// $.getScript("index.js");
// $.getScript("test.js", function() {
//     console.log('success')
// });
// $.getScript("test.js").done(function() {
//     console.log('success')
// }).error(function(err){
//     console.log(err)
// });