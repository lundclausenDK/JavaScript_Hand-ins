require("./dbSetup");
const User = require("./model/user");
const Login = require('./model/login');
const LocationBlog = require("./model/locationBlog");
const Position = require("./model/location");

function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
    let job = [{type, company, companyUrl}, {type, company, companyUrl}];
    let user = {firstName, lastName, userName, password, job: job};
    let newUser = new User(user);

    return newUser.save();
    //console.log("ping")
}

function positionDataCreator(long, lat, userID) {
    let posDetail = {user: userID, loc: {coordinates: [long, lat]}};
    let position = new Location(posDetail);
    return position.save();
}

function loginCreate(username, password, longitude, latitude, distance) {
    let loginDetails = {username, password, longitude, latitude, distance};
    let newLogin = new Login(loginDetails);

    return newLogin.save();
}

/*
loginCreate("Mike", "tester", 12.4970, 55.8810, 5).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
});

loginCreate("Patricia", "bluesky", 	12.5040, 55.8840, 3).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
});

loginCreate("Peter", "greengrass", 12.4953, 55.8781, 5).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
});

loginCreate("Linda", "horses", 12.5021, 55.8787, 8).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
});

loginCreate("Susan", "mypass", 12.5031, 55.8775, 2).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
});

loginCreate("Michael", "bubbles", 12.5040, 55.8840, 6).then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
});
*/



/*
userCreate("a", "b", "c", "d", "e", "f", "g").then(function(data) {
    console.log(data);
    positionDataCreator(156, 26, data._id).then(function(data) {
        console.log(data);
    });
}).catch(function(error) {
    console.log(error);
});
*/


