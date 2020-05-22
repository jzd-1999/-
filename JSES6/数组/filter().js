//filter() 筛选数组，并直接返回一个新数组       返回所有满足条件的元素
var arr = [1, 2, 3, 4, 5], newArr = arr.filter(function (value, index, arr) {
    return value % 2 === 0;
});
console.log(newArr);
