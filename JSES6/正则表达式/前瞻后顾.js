/*
前瞻：
    正则表达式从文本头部向尾部开始解析，文本尾部方向，称为“前”
    前瞻就是在正则表达式匹配到规则的时候，向前检查是否符合断言，后顾则相反
    javaScript 不支持后顾
    符合和不符合特定断言称为 肯定/正向 匹配和 否定/负向 匹配
* */
console.log('a2*3'.replace(/\w(?=\d)/g, 'X'));
console.log('a2*3V8'.replace(/\w(?=\d)/g, 'X'));
console.log('a2*3'.replace(/\w(?!\d)/g, 'X'));
let str = new RegExp('\\w', 'g');
while(str.test('a^bc')){
    console.log(str.lastIndex)
    // console.log(str.test('abc'))
}