const express = require('express');



const port = 8000;


const app = express();

// use routes 
app.use('/', require('./routes'));


//seting views engines ejs
app.set('view  engines', 'ejs');
app.use('views', './views');



app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running: ${err}`)
        return;
    }

    console.log(`Server is running at port: ${port}`);
    return;
})