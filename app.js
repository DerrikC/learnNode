const http = require('http');

const hostname = '127.0.0.1'; // request to got to that location
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\, we out here\n');   //this is the response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); //server running here
});