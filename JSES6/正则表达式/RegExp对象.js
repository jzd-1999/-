const reg = /\bis\b/g;
const new_reg = new RegExp('\\byou\\b');
// \b 单词边界
// \B 非单词边界
//g  全局匹配
//i  忽略大小写
//m  多行匹配

console.log('she is your mather'.replace(reg,'***'));
console.log('are you ok?'.replace(new_reg,'am'));