const mongoose = require('mongoose');
// const Schema = mongoose.Schema; >> the two codes are the same
const { Schema} = mongoose;

const userSchema =  new Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
});


mongoose.model('users' , userSchema);