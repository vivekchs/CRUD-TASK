const mongoose1 = require('mongoose');
const validator = require('validator')
const userschema = new mongoose1.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        
    },
    description: {
        "description": "fm,fk fkfk",
        type: String,
        required: true,
    }
   
});
module.exports=mongoose1.model('product', userschema);