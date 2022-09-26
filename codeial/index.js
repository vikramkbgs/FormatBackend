const express = require('express');
const cookieParser = require('cookie-parser');
const db = require("./config/mongoose");
const expressLayouts = require("express-ejs-layouts");
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const port = 8000;



const app = express();
// use cookie parser for cookies
app.use(cookieParser());

// use express.urlencoded for post request
app.use(express.urlencoded());

//set up the views engine ejs
app.set('view engine', 'ejs');                    // debug extra space give you error
app.set('views', './views');

// use static file css js images
app.use(express.static('assests'));

//use express layouts
app.use(expressLayouts);

app.use(
  session({
    name: "codeial",
    // TODO change the secret before deployment in production mode
    secret: "blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// use  express routes 
app.use('/', require('./routes'));



// extracting style and script from subfile to layout 
app.set('layout extractStyles', true);
app.set("layout extractScripts", true);



app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running: ${err}`)
        return;
    }

    console.log(`Server is running at port: ${port}`);
    return;
})