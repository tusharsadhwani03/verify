/* Importing required modules */
var express = require('express');
var bodyparser = require('body-parser');

/* Init app */
var app = express();

/* Let's bring static file in action */
app.use(express.static('public'));

/* Setting as the view engine */
app.set('view engine','ejs');

/* Handling GET requests */
app.get('/verify',(req,res)=>{
    res.render('verify');
});

/* Handling POST requests */
/*app.post('/verify',(req,res)=>{

});*/

/* Setting up the server */
    // 1. Set port
    var PORT = process.env.PORT || 3000 ;

    // 2. Listen @ PORT
    app.listen(PORT,(req,res)=>{
    console.log(`server started at ${PORT}...`);
    });