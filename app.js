//1. Create a web server
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  setInterval(() => response.write(new Date() + "\n"), 1000);
  // response.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//2. handle HTTP route GET / and POST / i.e Home
// if url == "/" && GET
// show search
// if url == "/" && POST
// redirect to /:username

//3. Handle HTTP route GET /:username i.e /chalkers
// if url == "/..."
// get json from treehouse api
// on "end"
// show profile
// on "error"
// show error

//4. Function that handles the reading of files and merge in value
// read from file and get a string
// merge values into string