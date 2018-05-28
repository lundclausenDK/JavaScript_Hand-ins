require("./dbSetup");
const User = require("../model/user");
const Location = require("../model/location");
const userFacade = require("../facade/userFacade");

// Test data
userFacade.createUser("Vanessa", "Paradis", "vanessa@mail.com", "paradis", "Singer", "MGM", "www.mgm.com", 0, 0);





/*
function userCreate(firstName, lastName, userName, password, type, company, companyUrl) {
    let job = [{type, company, companyUrl}];
    let user = {firstName, lastName, userName, password, job: job};
    let newUser = new User(user);

    return newUser.save();
}

function positionDataCreator(long, lat, userID) {
    let posDetail = {user: userID, loc: {coordinates: [long, lat]}};
    let position = new Location(posDetail);
    return position.save();
}
*/