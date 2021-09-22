const http = require('http');  // Пакет для работы с HTTP
const fs = require('fs');

const server = http.createServer((req, res) => {
    const file = fs.readFileSync('./public/index.html')
    res.write('hello');
    res.end(); // Ответ нужно обязательно завершить чтобы клиент не ждал бесконечно.
});

console.log('Listening at http://localhost:4411')
server.listen(4411);