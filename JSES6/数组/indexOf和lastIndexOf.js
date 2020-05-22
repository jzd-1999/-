//indexOf 返回数组元素索引号方法 indexOf(数组元素) 作用就是返回该数组元素的索引号
//它只返回第一个满足条件的索引号  如果找不到，则返回-1

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 10];
var arr1 = arr.indexOf(6);

//lastIndexOf(数组元素) 作用就是返回该数组元素的索引号，从后面查找
var arr2 = arr.lastIndexOf(6);
console.log(arr1);
console.log(arr2);