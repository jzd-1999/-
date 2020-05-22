const fs = require('fs');
// const path = require('path');
// fs.readFile(path.join(__dirname, './1.txt'), 'utf-8', (err, dataStr) => {
//     if (err) throw err;
//     console.log(dataStr)
// });
const promise = new Promise((resolve,reject)=>{
    fs.readFile('./1.txt','utf-8',(err,dataStr)=>{
        if (err) throw err;
        console.log(dataStr)
    })
});