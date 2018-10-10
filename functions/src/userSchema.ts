/* User model to store user record in to mondo database */
// mongoose provides easier database access & basic validation
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose unique validator is a third party package used to set unique key property to a object
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
});

schema.plugin(mongooseUniqueValidator);



module.exports = mongoose.model('User', schema, 'user');