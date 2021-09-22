const http = require('http');  // Пакет для работы с HTTP
const fs = require('fs');

const server = http.createServer((req, res) => {
    const path = req.url; // GET /index.html HTTP/1.1
    const file = fs.readFileSync(`./public${path}`) // Синхронное чтение файла
    res.write(file);
    res.end(); // Ответ нужно обязательно завершить чтобы клиент не ждал бесконечно.
});

console.log('Listening at http://localhost:4411')
server.listen(4411);