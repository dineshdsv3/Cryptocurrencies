var express = require('express');
var app = express();
var path = require('path');
var crypto = require('./db.js')
var bodyParser = require('body-parser');


app.use(express.static('../js'));
app.use(express.static('../css'));
app.use(express.static('../img'));
app.use(express.static('../html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req, res) => {
    res.sendFile(path.resolve("../index.html"));
})

app.post('/searchRecords',(req, res) => {
    var body = req.body;
    console.log(body);
    
    // creating a record in database
    crypto.create(body,(err, data) => {
        if(err){
            console.log(`Error, ${err}`);
        }else{
            console.log(`data ${data}`);
        }
    })
    // By sending Response the promise will be solved for post request
    res.send('success')
    
})

app.get('/displayresults',(req, res) => {
    crypto.find({}, (err, data) => {
        if(err){
            console.log(`error is ${error}`)
        }else {
            console.log(`finded data is ${data}`)
            // Here we are sending data as response for get request
            res.send(data);
        }
    })
    
})

app.listen('3000',() => { 
    console.log("server started on port 3000");
})