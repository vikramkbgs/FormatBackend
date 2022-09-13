const mongoose = require('mongoose');

//1. creating schema

const contactSchema = new mongoose.Schema({

    name : {
        type: String,
        required: true
    },
     
    phone: {
        type : String,
        required : true
    }
});

// 2. creating collection
const Contact = mongoose.model('Contact', contactSchema);

//3. exporting our collection
module.exports = Contact;