/*
*时间：
*2016年9月24日 17:42:54
*作者：无言
* pop弹窗插件 v1.0.0
*
*/


function pop(obj) {

    function showPopWnd(obj) {

        // mask
        $('body').append('<div id="mry-mask" deletes="mry-opo"></div>');

        // pop wnd add
        $('body').append('<div id="mry-opo"><div id="mry-opo-title"></div><div  id="mry-opo-content"></div></div>');
        var div = $('#mry-opo');
        $('#mry-opo-title').text(obj.title);
        $('#mry-opo-content').text(obj.content);
        div.css('width', obj.width + 'px');
        div.css('height', obj.height + 'px');
        div.css('margin-left', -(parseInt(obj.width) / 2) + 'px');
        div.css('margin-top', -(parseInt(obj.height) / 2) + 'px');
        div.css('background', obj.backgorund);
        $('#mry-mask').css('display', 'block');

        // add del button and its event
        $('#mry-opo').append('<a href="javascript:void(0)" deletes="mry-opo" ' +
            'style="position:absolute;right:10px;top:6px;color:#fff;font-size:12px;">X</a>');
        $('[deletes=mry-opo]').click(function () {
            $('#mry-opo,#mry-mask').remove();
        });
    }



    var ject = obj;
    ject.width = parseInt(obj.width) || 300;
    ject.height = parseInt(obj.height) || 300;
    ject.title = obj.title || '来自提示信息';
    ject.content = obj.content || '这是一个提示信息';
    ject.backgorund = obj.backgorund || '#fff';
    showPopWnd(ject);


    // usage
    /*
    pop({
        width: 500,//提示窗口的宽度
        height: 200,//提示窗口的高度
        title: '重要信息弹窗提示',//提示窗口的标题
        content: 'Today is 14.8.2018'//提示窗口的内容
    });*/




}