var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const MINUTES = 1;
var EXPIRES = 60 * MINUTES;

var LocationSchema = new mongoose.Schema({
    //Make sure that next line reflects your User-model
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    created: {type: Date, expires: EXPIRES, default: Date.now},
    loc: {
        'type': {type: String, enum: "Point", default: "Point"},
        coordinates: {type: [Number]}
    }
});

module.exports = mongoose.model("Location", LocationSchema)