//1、浅拷贝只是拷贝一层，更是层次对象级别的只拷贝引用

var obj = {
    id: 1,
    name: 'andy',
    msg:{
        id:1,
        name:'hahaha'
    }
}
var o = {};
//浅拷贝
//方法一：
// for(var k in obj){
//     o[k] = obj[k];
// }
//方法二：

//Object.assign(o,obj);

//浅拷贝只是把更深层次的数据的地址拷贝了，所以obj.msg.id 会 等于2

// o.msg.id = 2;
// console.log(o.msg.id);
// console.log(obj);
//深拷贝
//2、深拷贝拷贝多层，每一级别的数据都会拷贝
//封装函数
function deepCopy(newObj,oldObj){
    for(var k in oldObj){
        //判断我们的属性属于哪种数据类型
        //1、获取属性值 oldObj[k]
        var item = oldObj[k];
        //2、判断这个值是否是数组
        if(item instanceof Array){
            newObj[k] = [];
            deepCopy(newObj[k],item)
        }else if(item instanceof Object){
            //3、判断这个值是否是对象
            newObj[k] = {};
            deepCopy(newObj[k],item)
        }else{
            //4、简单数据类型
            newObj[k] = item;
        }
    }
}
deepCopy(o,obj);
console.log(o);
o.msg.id = 3;
console.log(o);
console.log(obj);




