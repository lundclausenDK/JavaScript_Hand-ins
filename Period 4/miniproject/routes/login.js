const express = require('express');
const router = express.Router();
const loginFacade = require('../facade/loginFacade');

// GET login
/*router.get('/', function(req, res, next) {
    loginCheck.loginCheck(res);
});*/

// POST login
router.post('/', function(req, res, next) {
    loginFacade.login(req, res);
});

module.exports = router;