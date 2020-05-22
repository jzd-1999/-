//在 ES6 之前没有给我们提供extends继承，我们可以通过  构造函数 + 原型对象  模拟实现继承，被称为组合继承
function fn(x,y) {
    console.log("喝咖啡");
    console.log(this);
    console.log(x+y);
}
var obj ={
    name:"andy"
}
//call(),可以调用函数
//call()可以改变这个函数的this指向 此时这个函数的this 指向了这个函数的调用者
fn.call(obj,4,4)