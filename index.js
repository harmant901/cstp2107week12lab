/**
 * You will need to install the following npm modules
 * express, body-parser and uuid to make this work.
 * Life will also be easier if you use nodemon
 */

//Require Express
const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
//Adding Mongoose Support
const mongoose = require("mongoose");

//Allow all the things
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, DELETE, PUT"
}

//Invoke the express library as an app
const app = express();

//Set the WS port
const port = 8000;

//IMPORTANT
app.use(bodyParser.json());
app.use(cors(corsOptions));

//Require the route
var carRoute = require('./routes/cars');
//Attach the route
app.use('/', carRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    //mongoose.connect("mongodb://localhost:27017/cars", {useNewUrlParser: true, useUnifiedTopology: true})
});
