const express = require('express');
const path = require('path');




const port = 8000;




const app = express();



// settiing view engine and its path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
// setting static file path for use
app.use(express.static('assests'));

// using urlendcoded function to use post method
app.use(express.urlencoded());







app.get('/', function(req, res){

    // console.log(req.body);
    return res.render('home');
});

app.post('/add', function(req, res){

    console.log("*************************************");
    console.log(req);
    return res.render('home');
});




app.listen(port, function(err){
    if(err){
        console.log('*******',err);
        return;
    }
    console.log('Running Server');
});