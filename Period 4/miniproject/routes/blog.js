const express = require('express');
const router = express.Router();
const {Blogs} = require("../data_graphql/dbConnector");
const loginCheck = require('../model/customSession');

router.post('/', function(req, res) {
    if (loginCheck.logged_in === true) {

        const newBlog = new Blogs({
            headline: req.body.title,
            content: req.body.content
        });

        newBlog.id = newBlog._id;

        return new Promise((resolve, object) => {
            newBlog.save((err) => {
                if (err) reject(err)
                else resolve(newBlog)
                res.redirect("/dashboard/")
            });
        });


    } else {
        res.redirect("/")
    }
});

router.get('/delete/', function(req, res) {
    if (loginCheck.logged_in === true) {

        return new Promise((resolve, object) => {
            Blogs.remove({_id: req.query.blog_id}, (err) => {
                if (err) reject(err)
                else resolve("Successfully deleted blogpost");
                res.redirect("/dashboard/")
            })
        });

    } else {
        res.redirect("/")
    }

});

module.exports = router;