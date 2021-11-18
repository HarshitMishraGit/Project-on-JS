// you have to simply create a location where you want to download the packages
// the packages is for siplicity 
// first of all you have to select a folder 
// then open teminal in that folder and write the cmd--- npm init
// it creats a package.json file in your folder
// then in terminal type the cmd----npm i express

const express = require("express");// importing the express 
const app = express();// assign a value to express fxn
const port = 8080;

app.get("/", (req,res) => {
    res.send("This is my Homepage");
});
app.get("/products", (req,res) => {
    res.send("This is out products");
});
app.get("/about", (req,res) => {
    res.status(200).send("This is About page");//
});
app.get("/ContactUs", (req,res) => {
    res.status(404).send("TPage Not Found on this website");//giving status code 404
});
// lets check for the post request

app.post("/post", (req,res) => {
    res.send("this page is for getting post request");
});

app.listen(port, () => {
    console.log(`Hello Harshit website Started at port ${port}`);
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
