const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loginSchema = new Schema({
    username: String,
    password: String,
    latitude: Number,
    longitude: Number,
    distance: Number
});

module.exports = mongoose.model('Login', loginSchema);