const fs = require('fs');

// 동기 함수 
// const data = fs.readFileSync('./data.txt', 'utf-8');

// 비동기 함수
fs.readFile('./data.txt', 'utf-8', function (err, data) {
    console.log(data);
});