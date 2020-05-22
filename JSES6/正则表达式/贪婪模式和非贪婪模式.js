console.log('12345678'.replace(/\d{3,6}/g,'X'));
console.log('123456789'.match(/\d{3,6}?/g));
console.log('12345678'.replace(/^\d{3,6}?/g,'^^^'));
