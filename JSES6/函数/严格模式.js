//开启严格模式
'use strict';
//1、使用变量前必须先声明
a = 1;
console.log(a); 
//2、不能随意删除已经声明的变量
delete a;
//3、全局作用域中函数的 this 是 undefine
function fn(){
    console.log(this);
}
//4、构造函数不加 new 调用，this指向的是undefined 如果此时赋值，则会报错
function Start() {
    this.name = '张三';
}
Start();
//5、定时器this还是指向的window
setTimeout(function () {
    console.log(this);
})
//6、严格模式下，函数里的参数不能重名
function abc(a,a) {
    console.log(a+a);
}
//7、不能再非函数代码块里声明函数
for(var i =0; i < 5; i++){
    function aa(params) {
    }
}



