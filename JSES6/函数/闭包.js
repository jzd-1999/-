//闭包（closure）：有权访问另一个函数作用域中变量的函数。 ------JavaScript高级程序设计
function fun() {
    var num = 10;

    function fn() {
        console.log(num);
    }
    fn();

}
fun();