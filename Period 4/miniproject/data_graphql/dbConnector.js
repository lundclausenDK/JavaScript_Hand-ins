// Mongo connection
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mlc_user:developer@ds111279.mlab.com:11279/local_library");

/*
const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    }

});
*/

const blogScema = new mongoose.Schema({
    headline: {
        type: String
    },
    content: {
        type: String
    },
    likes: {
        type: Array
    }

});

const Blogs = mongoose.model("blogs", blogScema);
//const Friends = mongoose.model("friends", friendSchema);

module.exports = {
    Blogs
};