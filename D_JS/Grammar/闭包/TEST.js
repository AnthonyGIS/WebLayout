console.log("test");
// https://www.cnblogs.com/wangfupeng1988/p/3994065.html

// 需要记住闭包的两种使用情况：
// 函数作为返回值，函数作为参数传递。函数作为参数传递
// 闭包，除了结合着作用域之外，还需要结合着执行上下文栈来说一下。

// 1 函数作为返回值
function fn() {
    var max =100;
    return function bar(x) {
        if (x>max)
        {
            console.log(x);
        }
    };
}

var f1 = fn();
f1(15);

// 2.函数作为参数被传递
var max = 10,
    fn = function (x) {
        if(x>max)
        {
            console.log(x);
        }
    };

// 匿名函数
(function (f) {
    var max = 100;
    f(15);

})(fn);


