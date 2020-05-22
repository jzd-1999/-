//我们fun 外面的作用域可以访问 fun内部的局部变量
//闭包的主要作用：延伸了变量的作用范围
function fun(){
    var num = 10;
    function fn(){
        console.log(num);
        
    }
    return fn;
}
var f = fun();
f();
//类似于：
// var f = function fn(){
//     console.log(num);
    
// }