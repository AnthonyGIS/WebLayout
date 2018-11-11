// usage:
// Dialog.init('测试文字') //默认
// Dialog.init('测试文字',2000) //第二个参数时间，2秒后自动关闭
// Dialog.init('测试文字',{
// time : 1000,  //自动关闭
// maskClick : false, //点击背景层是否关闭弹层
// mask : false, //是否显示遮罩
// title : '是否删除？', //添加标题
// index : 1,  //设置索引，用于close方法
// addClass : 'bgRed', //追加class
// style : 'color:red', //追加css
// button : { //按钮
// 确定 : function(){
// Dialog.init('你点击了确定',1000);
// Dialog.close(this);
// },
// 取消 : function(){
// Dialog.init('你点击了取消',1000)
// Dialog.close(this);
// }
// },
// before : function(){
// //this.classList.add('autoWidth')
// //dom创建成功，但未渲染
// console.log('创建成功',this);
// },
// after : function(){
// console.log('关闭成功',this)
// },
// onload : function(){
// console.log('加载成功',this)
// }
// });
// //关闭
// Dialog.close(this); //在内部使用可直接使用this
// Dialog.close(1,function(){
// //手动关闭弹层，第一个参数为索引值（配合上面index参数使用）；
// //第二个参数为回调
// });


mdialog1.onclick = function () {
    Dialog.init('大家都吃着聊着笑着', {maskClick: 1});
};
mdialog2.onclick = function () {
    Dialog.init('两秒后自动关闭\rUpdate Success!', 2000);
};
mdialog3.onclick = function () {
    Dialog.init('带有title', {
        title: '是否删除？'
    });
};

mdialog4.onclick = function () {
    Dialog.init('<input type="text" placeholder="请输入5个字符"  style="margin:8px 0;width:100%;padding:11px 8px;font-size:15px; border:1px solid #999;"/>', {
        title: '输入点什么吧！',
        button: {
            确定: function () {
                if (this.querySelector('input').value.length >= 5) {
                    Dialog.init('你输入的内容是：' + this.querySelector('input').value);
                    Dialog.close(this);
                }
                else {
                    Dialog.init('你输入的内容不符合要求！', 1100);
                }
            },
            点击关闭: function () {
                Dialog.init('你点击了关闭', 1000);
                Dialog.close(this);
            }
        }
    });
};
mdialog5.onclick = function () {
    Dialog.init('追加样式', {
        title: '警告',
        style: 'padding: 30px 14px;color:red;font-weight: bold;font-size:25px'
    });
};
mdialog6.onclick = function () {
    Dialog.init('<img src="dist/6.jpg" width="100%">', {
        title: '图片预览',
        button: {
            确定: function () {
                Dialog.close(this);
            }
        }
    });
};
mdialog9.onclick = function () {
    Dialog.init('<img src="dist/load3.gif" width="48px"/>', {
        mask: 0,
        addClass: 'dialog_load',
        time: 3000,
        after: function () {
            Dialog.init('加载成功！', 1000);
        }
    });
};