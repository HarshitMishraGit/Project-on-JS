
const express = require("express");// importing the express 
const app = express();// assign a value to express fxn
const port = 8080;
const path = require('path');



                                         
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

// Our pug home endpoint
app.get("/home", (req, res)=>{ 
    res.status(200).render('home')
});


// Our pug home endpoint
app.get("/contacts", (req, res)=>{ 
    res.status(200).render('contacts')
});

app.get("/about", (req, res) => {
    res.status(200).send("This is About page");
});
app.get("/ContactUs", (req, res) => {
    res.status(404).send("TPage Not Found on this website");//giving status code 404
});




app.listen(port, () => {
    console.log(`Hello Harshit website Started at port http://localhost:${port}/`);
});


