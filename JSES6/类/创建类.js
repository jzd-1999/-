//类名首字母尽量大写
//类里面的构造函数不用function声明
class start {
    //类似于构造函数，可以接受参数，和返回实例对象
    //
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
var ldh = new start("刘德华",20);
var zxy = new start("张学友",55);
console.log(ldh.name);
console.log(zxy.name);
