var arr = [1,2,3,4,5]
var sum = 0;
//forEach() 迭代（遍历）数组   
arr.forEach(function(value,index,arr){
    console.log("每个数组元素"+value);
    console.log("每个数组元素的索引号"+index);
    console.log("数组本身"+arr);
    sum=sum + value;
    console.log(sum);
    
    
    
})