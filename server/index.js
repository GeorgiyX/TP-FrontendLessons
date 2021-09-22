'use strict'; // Активация фич ES5+, не совместимых со старым JS. Webpack () это добавляет автоматом.

// require - функция nodejs, ищет в локальной node_modules, глобальной node_modules, затем в системных либах..
const http = require('http');  // Пакет для работы с HTTP
const fs = require('fs');

const debug = require('debug');
const log = debug('*');

const page404 = fs.readFileSync('./public/404.html'); // Подгтовим заранее страницу 404, чтобы не чистать ее раждый раз

const server = http.createServer((req, res) => {
    const path = req.url === '/' ? '/index.html' : req.url; // GET <url> HTTP/1.1
    log('request', req.url, req.headers['user-agent']);
    fs.readFile(`./public${path}`, (error, data) => {
        log('read file done!')
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