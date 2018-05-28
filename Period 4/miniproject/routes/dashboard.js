const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const loginCheck = require('../model/customSession');

// GET dashboard
router.get('/', async function(req, res, next) {
    if (loginCheck.logged_in === true) {

        const response = await fetch("http://localhost:3030/graphql?query={getAllBlogs{id,headline,content}}");
        const json = await response.json();

        const response2 = await fetch("http://localhost:3030/api/users/");
        const json2 = await response2.json();

        res.render('dashboard', {blog: json.data.getAllBlogs.reverse(), friends: json2});

    } else {
        res.redirect("/")
    }
});

module.exports = router;