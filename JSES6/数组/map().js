var arr = [1,2,3,4,5,6,7,8,9,10]

//map()   遍历数组，并返回一个新数组
var newArr = arr.map(function (value,index,arr) {
    console.log(arr[index])
    return value+10
  })
  console.log(newArr)