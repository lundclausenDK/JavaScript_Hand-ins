const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let JobSchema = new Schema({
    type: String,
    company: String,
    companyUrl: String
});

let UserSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    //email: {type: String, required: true},
    created: {type: Date, default: Date.now},
    lastUpdated: Date,
    job: [JobSchema],
    latitude: Number,
    longitude: Number
});
/*
UserSchema.pre("save", function(next) {
    this.password = "poiofqjf9f3o9jF3o9" + this.password;
    this.lastUpdated = Date.now;
});
*/

module.exports = mongoose.model("User", UserSchema);