const express = require('express')
const passport = require('passport')

const userModel = require('../models/users.schema');
const authFbRouter = express.Router();

authFbRouter.get('/facebook', passport.authenticate('facebook'));

authFbRouter.get('/facebook/callback',
    passport.authenticate("facebook", {
        successRedirect: 'http://localhost:3000/',
        failureRedirect: 'http://localhost:3000/login',
        function(req, res) {
            res.redirect('/');
          }
    })
);

authFbRouter.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = authFbRouter;