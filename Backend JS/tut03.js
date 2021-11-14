const http = require('http');
const fs = require('fs');// fs is a module of node.js
// reading a file to serve on website 
const file = fs.readFileSync('if_else.html');

const server = http.createServer((req, res) =>              // create a server which hav request and responses
{
    res.writeHead(200, { 'content-type': 'text/html' });    // (response code, type of content which you want to serve)
    res.end(file);                                          //serving file
})
// make server to listen
server.listen(80, '127.0.0.1', () => {                    //(port,localHost Address)
    console.log("Listning on port 80 in localHost");        //generally port 80 is your localHost port you need not to write explicitaly in
                                                            //browser like(127.0.0.1) is enough else (127.0.0.1:port)
})
// above arrow function in server listen is a call back 
// you can quiet the server by pressing ctrl+c on terminal 