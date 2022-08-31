const express = require('express');
const path = require('path');


const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));



app.get('/', function(req, res){
    return res.render('home', {title : "i'm flying"});
});

app.get('/practice', function(req, res){
    return res.render('practice',{
        message : "I'm in index.js"
    })
});



app.listen(port, function(err)
{
    if(err){console.log("Error in runing port.", err)}

    console.log("Yup!, server is runing at port:", port);
});