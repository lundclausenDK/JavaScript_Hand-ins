const express = require('express');
const router = express.Router();
const loginFacade = require('../facade/loginFacade');

router.get('/', function(req, res, next) {
    loginFacade.logout(req, res);
});

module.exports = router;