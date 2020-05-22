console.log('a1b2c3d4e5'.replace(/([a-z]\d){3}/,'xxx'));
console.log('ByronCasper'.replace(/Byron|Casper/g,'XX'));
console.log('ByronsperByrCasper'.replace(/Byr(on|Ca)sper/g,'★'));
//反向引用
// 注意：反向引用需要分组
// console.log('1234'.replace(/\d/g,'*'));
console.log('2020-5-21'.replace(/\d{4}-\d-\d{2}/g,'*'));
console.log('2020-5-21'.replace(/(\d{4})-(\d)-(\d{2})/g,'$2-$3-$1'));