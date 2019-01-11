window.onload = function () {
    //移动端使用 touched
    let event = navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) ? 'touched' : 'click';
    // 选择器
    let Q = function (id) {
        return document.getElementById(id)
    };


    //方向控制
    //------------------------------------------------------------------------------
    //左
    let _left = new MSlider({
        dom_sel_str: ".layer-left",
        distance: "30%"
    });
    Q('btnLeft').addEventListener(event, function () {
        _left.open();
    });

    //右
    let _right = new MSlider({
        dom_sel_str: ".layer-right",
        distance: "300px",
        direction: "right"
    });
    Q("btnRight").addEventListener(event, function (e) {
        _right.open();
    });
    //上
    let _top = new MSlider({
        dom_sel_str: ".layer-top",
        distance: "10%",
        direction: "top"
    });
    Q("btnTop").addEventListener(event, function (e) {
        _top.open();
    });
    //下
    let _bottom = new MSlider({
        dom_sel_str: ".layer-bottom",
        distance: "20%",
        direction: "bottom"
    });
    Q("btnBottom").addEventListener(event, function (e) {
        _bottom.open();
    });


    //关闭控制
    //自动
    let _autoclose = new MSlider({
        dom_sel_str: ".layer-selfclose",
        direction: "top",
        distance: "10%",
        time: "1000"
    });
    Q("btnAutoClose").addEventListener(event, function (e) {
        _autoclose.open();
    });
    //手动
    let _manualclose = new MSlider({
        dom_sel_str: ".layer-manualclose",
        direction: "top",
        distance: "auto"
    });
    Q("btnManualClose").addEventListener(event, function (e) {
        _manualclose.open();
    });
    Q("btnClose").addEventListener(event, function (e) {
        _manualclose.close();
    });
    //连环调用
    let _parent = new MSlider({
        dom_sel_str: ".layer-parent",
        direction: "top",
        distance: "auto"
    });
    let _child = new MSlider({
        dom_sel_str: ".layer-child",
        direction: "bottom"
    });
    Q("btnParent").addEventListener(event, function (e) {
        _parent.open();
    });
    Q("btnChild").addEventListener(event, function (e) {
        _parent.close();
        _child.open();
    });
};
