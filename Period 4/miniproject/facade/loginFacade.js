require("../data_rest/dbSetup");
const Login = require('../model/login');
const fetch = require('node-fetch');
const loginCheck = require('../model/customSession');

//const loginData = ["admin", "test"];

async function login(req, res) {

    // Get user data from REST API
    const response = await fetch("http://localhost:3030/api/users/");
    const json = await response.json();

    // Prepare user data
    let apiUser = null;
    let apiPass = null;

    // Store user if exit
    for (let i = 0; i < json.length; i++) {
        if (req.body.username === json[i].userName && req.body.password === json[i].password) {
            apiUser = json[i].userName;
            apiPass = json[i].password;
        }
    }

    // Login validation
    if (req.body.username === apiUser && req.body.password === apiPass) {
        loginCheck.logged_in = true;
        res.redirect("/dashboard");
    } else {
        console.log("login error!");
        res.redirect("/")

    }
}

function logout(req, res) {
    loginCheck.logged_in = false;
    res.redirect("/")
}

function getAllLogins(req, res, next) {
    Login.find(function(err, logins) {
        if (err) return next(err);

        // object of all the users
        res.json(logins);
    });
}

module.exports = {
    login,
    logout,
    getAllLogins
};