const express = require("express");
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
var employeeController = require('./controllers/employeeController.js')

var app = express();

app.use(bodyParser.json())
app.use('/employees', employeeController);


app.listen(3000, ()=>{
    console.log(`Server is running on post:3000`);
})