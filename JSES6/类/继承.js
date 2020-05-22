//子类继承父类的属性和方法
class Father{
    //属性
    constructor(name,x,y){
        this.name = name;
        this.x = x;
        this.y = y;
    }
    sum(){
        console.log(this.x+this.y);
    }
    money(){
        console.log('我是'+this.name+"100万");
    }
    say(){
        console.log('我'+this.name+'是爸爸'); 
        // return "我是爸爸"
    }
}
//继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，有就执行子类的方法，否则就执行父类的方法。（就近原则）
class Son extends Father{
    //不写构造函数就可以将参数传递给父类，写了构造函数就需要加 super()方法；
    //super()就是调用父类的普通函数和构造函数
    constructor(name,x,y){
        //调用父类的构造函数
        super(name,x,y);
    }
    say(){
        super.say();
        console.log("我的儿子");
    }
}
var father = new Father("马云",100,200);
father.money();
father.sum();
father.say();
var son = new Son("马二代",700,200); 
son.money();
son.sum();
son.say();


//
