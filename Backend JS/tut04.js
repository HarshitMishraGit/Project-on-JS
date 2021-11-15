const http = require('http'); // attaching http module 
const fs = require('fs');       // attaching fs module 
const hostname = '127.0.0.1';
const port = 3000;
// reading the html files
const home = fs.readFileSync('home.html');
const About = fs.readFileSync('About.html');
const Contact = fs.readFileSync('Contact.html');
const products = fs.readFileSync('products.html');




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    url = req.url;
    
    res.setHeader('Content-Type', 'text/html');
   
    console.log(url);
    if (url == '/') {
        res.end(home)
    }
    else if (url == '/products') {                  // given the url that we attached in home.html file
        res.end(products)
    }
    else if (url == '/Contact') {
        res.end(Contact)
    }
    else if (url == '/About') {
        res.end(About)
    }
    else {
        res.statusCode = 404;                   // if url is other than the given condition then it is showing 404 error
        res.end('<h1>404 Page Not found </h1>')
    }
       
  
    
 });
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
 });