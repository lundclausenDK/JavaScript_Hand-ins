var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    type: String,
    company: String,
    companyUrl: String
});

var UserSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    //email: {type: String, required: true},
    created: {type: Date, default: Date.now},
    lastUpdated: Date,
    job: [JobSchema]
});
/*
UserSchema.pre("save", function(next) {
    this.password = "poiofqjf9f3o9jF3o9" + this.password;
    this.lastUpdated = Date.now;
});
*/

module.exports = mongoose.model("User", UserSchema);