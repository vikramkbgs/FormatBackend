const express = require('express');
const path = require('path');
const { brotliDecompressSync } = require('zlib');


const port = 8000;
const app = express();


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets')); // accessing assets file


// middleware first 
// app.use(function(res, req, next){
//     console.log("first middleware calling!");
//     next();
// });

// middleware second 
// app.use(function(res, req, next){
//     console.log("second middleware calling!");
//     next();
// });

var contract_list = [
    {
        name : "Vikram",
        phone : 7808440498
    },

    {
        name : "Piyush",
        phone : 6201390330
    },

    {
        name : "Mausam",
        phone : 6287766613
    },

    {
        name : "Muskan",
        phone : 7549753432
    }
];

app.get('/', function(req, res){

    // console.log(req);
    return res.render('home', {
        title : "Contract List",
        contract : contract_list
    });
});

app.get('/practice', function(req, res){
    return res.render('practice',{
        message : "I'm in index.js"
    });
});

app.post('/contract_list', function(req, res){

    // console.log(req.body);
    contract_list.push({
        name : req.body.name, 
        phone : req.body.number
    });
    return res.redirect('back');
});



app.listen(port, function(err)
{
    if(err){console.log("Error in runing port.", err)}

    console.log("Yup!, server is runing at port:", port);
});