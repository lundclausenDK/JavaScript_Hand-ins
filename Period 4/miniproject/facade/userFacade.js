require("../data_rest/dbSetup");
const User = require('../model/user');
const Location = require("../model/location");

function createUser(firstName, lastName, userName, password, type, company, companyUrl, latitude, longitude) {
    let job = [{type, company, companyUrl}];
    let user = {firstName, lastName, userName, password, job: job, latitude, longitude};
    let newUser = new User(user);

    return newUser.save();
}

function createDataPosition(long, lat, userID) {
    let posDetail = {user: userID, loc: {coordinates: [long, lat]}};
    let position = new Location(posDetail);
    return position.save();
}

function getAllUsers(req, res, next) {
    //return data;
    User.find(function(err, users) {
        if (err) return next(err);

        // object of all the users
        res.json(users);
    });
}

function findByUserName(req, res, next) {
    //return data;
    User.findOne({userName: req.params.userName}, function(err, user) {
        if (err) return next(err);

        // object of user
        res.json(user);
    });


    /*

    let userExists;
    //let searchName = username.req.params.user_name;


    for (let i = 0; i < json.length; i++) {
        if (req.body.username === json[i].userName && req.body.password === json[i].password) {
            apiUser = json[i].userName;
            apiPass = json[i].password;
        }
    }


    for (let i = 0; i < testData.length; i++) {
        if (testData[i].car === searchName) {
            return testData[i];
        } else {
            return "Sorry no results";
        }
    }
    */
}




module.exports = {
    getAllUsers,
    createUser,
    createDataPosition,
    findByUserName
};

/*
const testData = [
    {car: "Saab", type: "Mid car"},
    {car: "Volvo", type: "Good car"},
    {car: "BMW", type: "Luxury car"}
];


function addUser(data) {
    //Forget about the Position in this part
    testData.push(data);
}
*/

/*

 // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

 */

/*

*/