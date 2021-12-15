/* COMP229 - Fall 2021 - - Sec 09
Group - 13
WEbExpert */

let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let passportLocalMongoose = require('passport-local-mongoose');

// creating a blueprint for users.

let userModel = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        displayName: String,
        provider: {
            type: String,
            required: 'Provider is required'
        },
        providerId: String,
        providerData: {},
        created: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

module.exports.userModel = mongoose.model('Users', userModel);