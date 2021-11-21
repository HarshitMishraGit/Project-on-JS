// you have to simply create a location where you want to download the packages
// the packages is for siplicity 
// first of all you have to select a folder 
// then open teminal in that folder and write the cmd--- npm init
// it creats a package.json file in your folder
// then in terminal type the cmd----npm i express

const express = require("express");// importing the express 
const app = express();// assign a value to express fxn
const port = 404;
const path = require('path');
// const fs = require('fs');


// <<--------directly Serving files as html ------------>>
// const home = fs.readFileSync('hello.html');
// app.get("/home", (req,res) => {
//     res.send(home);                              //it serve html like text with tags and all
// });                                          
app.get("/", (req, res) => {
    res.send("This is my Homepage");
});


app.get("/products", (req, res) => {
    res.send("This is out products");
});

// <<------------include pug templates------------------>>

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo')
});


app.get("/about", (req, res) => {
    res.status(200).send("This is About page");
});
app.get("/ContactUs", (req, res) => {
    res.status(404).send("TPage Not Found on this website");//giving status code 404
});


// <<-------------simple html file serving--------------------->>
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '/hello.html'));
});

app.listen(port, () => {
    console.log(`Hello Harshit website Started at port http://localhost:${port}/`);
});



// You can install nodemon if you want to save the code and get live changes
// you can download nodemon by terminal cmd----
//  npm i nodemon
// for use it globally
// npm i -g nodemon
// for locally use go to the packae.json file
// in script column {
//     "serve": "nodemon server.js"   
// }

//  then click npm run serve
// nodemon gets started
// for terminate the process you have to close the live changes 
// click Ctrl+C to terminate the process
