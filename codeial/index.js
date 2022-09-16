const express = require('express');


const port = 8000;


const app = express();

const db = require('./config/mongoose');

//use express layouts
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);


// extracting style and script from subfile to layout 
app.set('layout extractStyles', true);
app.set("layout extractScripts", true);


// use  express routes 
app.use('/', require('./routes'));


//set up the views engine ejs
app.set('view engine', 'ejs');                    // debug extra space give you error
app.set('views', './views');


// use static file css js images
app.use(express.static('assests'));



app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running: ${err}`)
        return;
    }

    console.log(`Server is running at port: ${port}`);
    return;
})