var arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, "a", "b", "c", "d", "a", 1, 3, 5];
//数组转字符串方法1   默认的是用逗号分隔
var str = arr.toString();
console.log(str);
//数组转字符串方法2
var newArr = arr.join("-");
console.log(newArr);