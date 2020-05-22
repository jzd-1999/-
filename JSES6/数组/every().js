var arr = [1,2,3,4,5,6,7,8,9,10]

//every()   查找数组中是否有满足条件的元素  返回一个布尔值 如果查到第一个不满足条件的元素，就终止循环 并返回一个false
var flag = arr.every(function(value,index,arr){
    console.log(value+'位置'+index);
    return value > 8;
})