'use strict'; // Активация фич ES5+, не совместимых со старым JS. Webpack () это добавляет автоматом.

// Require - функция nodejs
const http = require('http');  // Пакет для работы с HTTP
const fs = require('fs');
const { strict } = require('assert/strict');

const page404 = fs.readFileSync('./public/404.html'); // Подгтовим заранее страницу 404, чтобы не чистать ее раждый раз

const server = http.createServer((req, res) => {
    const path = req.url === '/' ? '/index.html' : req.url; // GET /index.html HTTP/1.1
    fs.readFile(`./public${path}`, (error, data) => {
        if (error) { 
            res.statusCode = 404;
            data = page404; 
        }
        res.write(data);
        res.end(); // Ответ нужно обязательно завершить чтобы клиент не ждал бесконечно.
    }); // Асинхронное чтение файла, обработка ошибки. Профит именно в отсутствии try-catch
    
});

console.log('Listening at http://localhost:4411')
server.listen(4411);