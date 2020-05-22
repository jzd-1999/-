var arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, "a", "b", "c", "d", "a", 1, 3, 5];
var newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.indexOf(arr[i]) == -1 ? newArr.push(arr[i]) : newArr;
    console.log(newArr);
}