const express = require('express');



const port = 8000;


const app = express();


app.listen(port, function(){
    if(err)
    {
        console.log(`Error in running: ${err}`)
        return;
    }

    console.log('*****Server is running******');
    return;
})