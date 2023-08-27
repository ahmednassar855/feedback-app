const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const router = express.Router();

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google' , {
        scope: ['profile' ,'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', ( req , res ) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req , res) => {
        // res.send(req.session);
        res.send(req.user);
    });
}
