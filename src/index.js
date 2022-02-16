const http = require('http');
const users = require('./mocks/users');
const routes = require('./routes');

const port = 8080;

const server = http.createServer((req, res) => {

  const route = routes.find((route) => route.endpoint === req.url);

  if(route) {
    res.send = (statusCode, contentType, finalResponse) => {
      const handleResponse = contentType === 'application/json' ? JSON.stringify(finalResponse) : finalResponse;

      res.writeHead(statusCode, { 'Content-Type': contentType });
      res.end(handleResponse);
    }

    route.handler(req, res);
  }
});

server.listen(port, () => {
  console.log('Running at: https://localhost:8080');
})