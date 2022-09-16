const mongoose = require('mongoose');


// connection to database
mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error conneting MongoDB"));

db.once('open', function(){
    console.log('Connected to database:: MongoDB');
});

module.exports  = db;