
const express = require("express");// importing the express 
const app = express();// assign a value to express fxn
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harshit', { useNewUrlParser: true });

// establishing connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', () => {
    
    // we are connected
    console.log('We are Connected');
})

// once we are connected define a schema like tables in excel sheets

const contactSchema = new mongoose.Schema({
    name: String,
    father: String,
    email: String,
    mobile: String
    
});
  
// now convert your schema as a model
const Contact = mongoose.model('Kitten', contactSchema);


app.use(bodyParser.urlencoded({ extended: false }))
// if anyone sumbit the form then we have to use post req
app.post('/contacts', (req, res) => { 
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
    
       

})
                                         
    


    app.get("/products", (req, res) => {
        res.send("This is out products");
    });

    // <<------------include pug templates------------------>>

    // Set the template engine as pug
    app.set('view engine', 'pug')

    // Set the views directory
    app.set('views', path.join(__dirname, 'views'));

    // Our pug demo endpoint
    app.get("/demo", (req, res) => {
        res.status(200).render('demo')
    });

    // Our pug home endpoint
    app.get("/", (req, res) => {
        res.status(200).render('home')
    });


    // Our pug home endpoint
    app.get("/contacts", (req, res) => {
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


