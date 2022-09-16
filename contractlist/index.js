const express = require('express');
const path = require('path');

const db = require('./config/mongoose');
//10. importing collection from models
const Contact = require('./models/contact');


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


app.get('/', function(req, res){

    // console.log(req);

    // 12. fetching data from db using .find function
    Contact.find({}, function(err, contacts)
    {
        if(err){
            console.log('Error in fetching contacts from db.');
            return;
        }

        return res.render('home', {
        title : "Contract List",
        contract : contacts
    });
    });
});

// 14. adding function for delete operation
app.get('/delete-contact', function(req, res){

    // console.log(req);
    // using query param(there is two param and query)
        let id = req.query.id;
    // 15. findByIdAndDelete function use to find and delete item
    Contact.findByIdAndDelete(id, function(err)
    {
        if(err){
            console.log('Error in deleting contacts from db.');
            return;
        }

        return res.redirect('back');
    });
});

app.get('/practice', function(req, res){
    return res.render('practice',{
        message : "I'm in index.js"
    });
});


// adding data in data base using this url
app.post('/contract_list', function(req, res){

    // console.log(req.body);
    // contract_list.push({
    //     name : req.body.name, 
    //     phone : req.body.number
    // });

    // 11. using create function storing data from input
    Contact.create({
        name : req.body.name,
        phone : req.body.number
    }, function(error, newContact){
        if(error){console.log('error in creating a contact'); return;}

        console.log('******', newContact);
        return res.redirect('back');
    });
});



app.listen(port, function(err)
{
    if(err){console.log("Error in runing port.", err)}

    console.log("Yup!, server is runing at port:", port);
});