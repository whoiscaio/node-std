const http = require('http');
const users = require('./mocks/users');

const port = 8080;

const server = http.createServer((req, res) => {
  if(req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
  }

  if(req.url === '/users') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log('Running at: https://localhost:8080');
})