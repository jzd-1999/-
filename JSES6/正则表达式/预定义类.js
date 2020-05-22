//  . 等价于  [^\r\n]         含义：除了回车符和换行符之外的所有字符
// \d 等价于  [0-9]           含义：数字字符
// \D 等价于  [^0-9]          含义：非数字字符
// \s 等价于  [\t\n\x0B\f\r]  含义：空白符
// \S 等价于  [^\t\n\x0B\f\r] 含义：非空白符
// \w 等价于  [a-zA-Z0-9-_]   含义：单词字符(字母，数字，下划线)
// \W 等价于  [^a-zA-Z0-9-_]  含义：非单词字符(字母，数字，下划线)

str = /bucket$/g;
console.log(str.test('bucket'));
console.log(str.test('buckets'));
console.log('This is a boy'.replace(/\Bis\b/, '***'));
console.log('@123@456@abc@'.replace(/@[a-z]/g, ' '));
console.log('@123@456@abc@'.replace(/^@[0-9]/g, ' *'));
console.log('@123@456@abc@b'.replace(/@[a-z]$/g, ' *'));
