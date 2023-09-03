const mongose = require('mongoose');
const { Schema } = mongose;

const recipentSchema = new Schema({
    email : String,
    responded: { 
        type: Boolean,
        default :false
     }
});

mongose.model('recipients' , recipentSchema)