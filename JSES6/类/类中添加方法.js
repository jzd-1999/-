class start {
    //类似于构造函数，可以接受参数，和返回实例对象
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sing(song){
        console.log(this.name+"唱"+song);
    }
}
var ldh = new start("刘德华",20);
var zxy = new start("张学友",55);
console.log(ldh.name);
console.log(zxy.name);
ldh.sing("冰雨");
zxy.sing("李兰香");
