// 边界符 ^ $
console.log('-----------/abc/------------');
var rg = /abc/;
console.log(rg.test('abc'));                    //true
console.log(rg.test('abcd'));                   //true
console.log(rg.test('aabcd'));                  //true
console.log('-----------/^abc/------------');
var reg = /^abc/;
console.log(reg.test('abc'));                   //true
console.log(reg.test('abcd'));                  //true
console.log(reg.test('aabcd'));                 //false
console.log('-----------/^abc$/------------');
var g = /^abc$/;                                //精确匹配 要求必须是 abc字符才符合规范
console.log(g.test('abc'));                     //true
console.log(g.test('abcd'));                    //false
console.log(g.test('aabcd'));                   //false
console.log(g.test('abcabc'));                  //false
console.log('-----------/[abc]/------------');

//字符类：[]表示有一系列字符可供选择，只要匹配其中一个就可以了
var a = /[abc]/;  //只要包含有a 或者 包含有b  或者包含有c 都返回 true
console.log(a.test('abc'));                     //true
console.log(a.test('abcd'));                    //true
console.log(a.test('cdefg'));                   //true
console.log(a.test('acac'));                    //true
console.log(a.test('defghijk'));                //false
console.log('-----------/^[abc]$/------------');
var b = /^[abc]$/;  //三选一 只有是 a 或者是 b 或者是 c 这三个字母才返回 true
console.log(b.test('abc'));                     //false
console.log(b.test('a'));                       //true
console.log(b.test('c'));                       //true
console.log(b.test('aabcabc'));                 //false
console.log(b.test('defghijk'));                //false
console.log('-----------/^[a-z]$/------------');
var c = /^[a-z]$/; //26个英文字母任何一个字母返回 true    如果中括号中有^ 如：[^a-z] 表示取反
console.log(c.test('abc'));                     //false
console.log(c.test('a'));                       //true
console.log(c.test('c'));                       //true
console.log(c.test('A'));                       //false
console.log(c.test('aabcabc'));                 //false
console.log(c.test('defghijk'));                //false
console.log('-----------/^[a-zA-Z0-9-_]$/------------');
//字符组合使用
var d = /^[a-zA-Z0-9-_]$/;
console.log(d.test('abc'));                     //false
console.log(d.test('a'));                       //true
console.log(d.test('c'));                       //true
console.log(d.test('A'));                       //true
console.log(d.test('12'));                      //false
console.log(d.test('1'));                       //true
console.log(d.test('-_'));                      //false

console.log('-----------/^a{3}$/------------');
var e = /^a{3}$/;
console.log(e.test('abcdeaac'));                 //false
console.log(e.test('aaa'));                    //true






