class Father{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    sum(){
        console.log(this.x + this.y);
    }
}
class Son extends Father{
    constructor(x,y){
        //子类在构造函数中使用super,必须放到this的前面（必须先调用父类的构造方法，在使用子类构造方法）
        super(x,y);
        //定义子类独有的属性
        this.x = x;
        this.y = y;
    }
    subtract(){
        console.log(this.x - this.y);
    }
}
var son = new Son(10,20);
son.sum();
son.subtract();