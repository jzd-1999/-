var data = [{
    id: 1,
    name: '家电',
    goods: [{
        id:11,
        gname:'冰箱'
    },{
        id:12,
        gname:'洗衣机'
    }]
},{
    id:2,
    name:'服饰'
}]
//输入id返回对应的数据
//利用forEach()去遍历数组
function getId(json,id) {
    var o = {};
    json.forEach(function(value){
        if(value.id === id){
            o = value;
            return value; //返回给getId()
        }else if(value.goods && value.goods.lenght > 0){

            o = getId(goods,id);//利用覆盖以前的o
        }
    })
    return o;//返回给调用者
}
getId(data,1)
getId(data,2)
