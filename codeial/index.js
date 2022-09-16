const express = require('express');



const port = 8000;


const app = express();

// use  express routes 
app.use('/', require('./routes'));


//set up the views engine ejs
app.set('view engine', 'ejs');                    // debug extra space give you error
app.set('views', './views');



app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running: ${err}`)
        return;
    }

    console.log(`Server is running at port: ${port}`);
    return;
})