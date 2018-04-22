require("../dbSetup");
const Login = require('../model/login');
const fetch = require('node-fetch');

function login(req, res/*username, password, longitude, latitude, distance*/) {

    //console.log(res.body);
    /*
    fetch("http://localhost:3000/api/login/").then(function(data) {

        console.log(data.json());

        for (var i = 0; i < data.json().length; i++) {
            if (data[i].username === res.body.username) {
                console.log("ping");
            }
        }

    }).catch(function(err) {
        console.log(err);
    });
    */
}

function getAllLogins(req, res, next) {

    Login.find(function(err, logins) {
        if (err) return next(err);

        // object of all the users
        //console.log(logins);
        res.json(logins);
    });
}

module.exports = {
    login,
    getAllLogins
};