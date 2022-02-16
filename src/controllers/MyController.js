class MyController {
  homeGet(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Home Get');
  }

  usersGet(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Users Get');
  }
}

module.exports = new MyController();