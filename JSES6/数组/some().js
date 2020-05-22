var arr = [1,2,3,4,5,6,7,8,9,10]

//some() 查找数组中是否有满足条件的元素   返回一个布尔值 如果查到第一个满足条件的元素，就终止循环 并返回一个true
var flag = arr.some(function(value,index,arr){
    console.log(value);
    return value === 9;
})
console.log(flag);
