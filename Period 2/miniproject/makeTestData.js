require("./dbSetup");
var User = require("./model/user");
var LocationBlog = require("./model/locationBlog");
var Position = require("./model/location");

function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
    var job = [{type, company, companyUrl}, {type, company, companyUrl}];
    var user = {firstName, lastName, userName, password, job:job};
    var newUser = new User(user);

    return newUser.save();
    //console.log("ping")
}

function positionDataCreator(long, lat, userID) {
    var posDetail = {user: userID, loc: {coordinates: [long, lat]}};
    var position = new Location(posDetail);
    return position.save();
}

userCreate("a", "b", "c", "d", "e", "f", "g").then(function(data) {
    console.log(data);
    positionDataCreator(156, 26, data._id).then(function(data) {
        console.log(data);
    });
}).catch(function(error) {
    console.log(error);
});