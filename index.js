/* Importing required modules */
var express = require('express');
var bodyparser = require('body-parser');
var alert = require('alert');
var mongoose = require('mongoose');
var User = require('./model');
var dbkey = require('./keys');

/* Init app */
var app = express();

/* Let's bring static file in action */
app.use(express.static('public'));

/* Connect to database */
 try {
    mongoose.connect(process.env.dbkey,{useNewUrlParser : true , useUnifiedTopology : true});
    console.log('okk db connected...');
 } catch (error) {
     console.log(error);
 }
   
/* Body-Parser */
    // 1. as json
        app.use(bodyparser.json());
    // 2. urlencoded : true
        app.use(express.urlencoded({extended : true}));

/* Setting as the view engine */
app.set('view engine','ejs');

/* Handling GET requests */
app.get('/verify',(req,res)=>{
    res.render('verify',{user : "" , err : ""});
});

/* Handling POST requests */
app.post('/vrfy',async (req,res)=>{
    const cnum = req.body.token;
    var user = await User.findOne({CertificateNumber : cnum});
    console.log(user);
    if(user)
        res.render('verify',{user : user , err : ""});
    else
       {
           res.render('verify',{user : "" , err : "! Invalid Token"});
       } 
});

/* Setting up the server */
    // 1. Set port
    var PORT = process.env.PORT || 3000 ;

    // 2. Listen @ PORT
    app.listen(PORT,(req,res)=>{
    console.log(`server started at ${PORT}...`);
    });