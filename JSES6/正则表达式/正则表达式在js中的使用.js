//正则表达式在js中的使用

//1、利用 RegExp 对象来创建 正则表达式
var regexp = new RegExp(/123/);
console.log(regexp);

//2、利用字面量创建 正则表达式

var rg = /123/;
//3、test() 用来检测字符串是否符合正则表达式要求的规范
console.log(rg.test(123));
console.log(rg.test('abc'));

