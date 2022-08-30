const http = require('http');
const port = 8000;

//for reading of file we need fs module
const fs = require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});

    fs.readFile('./index.html', function(err, data){
        if(err)
        {
            console.log('error', err);
            return res.end('<h1>Error</h1>');
        }
        // console.log("vikram");
        return res.end(data); 
    });

    // res.end('<h1>gocha!</h1>');
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("Server is runing port: ", port);
});