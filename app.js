const router = require("./router");

// Create a web server
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Function that handles the reading of files and merge in value
// read from file and get a string
// merge values into string