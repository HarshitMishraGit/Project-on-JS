


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World how are You');
});

// If you want to paas html through the server then simply do the follwing steps
// res.setHeader('Content-Type', 'text/html');        // change the type from plain to html
// res.end(` -------your html ---------------- `);   // you have to use your html code b/w backticks
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


