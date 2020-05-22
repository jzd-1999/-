var arr = [11, 22, 33, 77, 32, 90, 40, 89, 65, 56, 123, 50, 43];
var newArr = arr.reverse();
console.log(newArr);
var newArr1 = newArr.sort(function(a, b) {
    //升序
    return a - b;
    //降序
    //return b - a;
});
console.log(newArr1);