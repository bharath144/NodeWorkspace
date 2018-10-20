const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/api/numbers') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(9898);
console.log('Listening on port 9898...');
