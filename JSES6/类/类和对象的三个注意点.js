//ES6中，类没有变量提升，所以必须先定义类，才能通过类实例化对象。

//类里的共用属性和方法一定要加this使用。

class Start{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.sing();
    }
    sing(){
        console.log(this.name);
    }
}
var ldh = new Start("刘德华");
