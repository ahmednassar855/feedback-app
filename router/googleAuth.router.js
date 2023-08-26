const express = require('express');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');



const router = express.Router();

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, (accessToken , refreshToken , profile , done) => {
            console.log( 'accessTokne' ,accessToken);
            console.log( 'refreshTokne' ,refreshToken);
            console.log( 'profile' ,profile);

        }
    )
);

router.get('/auth/google', passport.authenticate('google' , {
    scope: ['profile' ,'email']
}) )

router.get('/auth/google/callback', passport.authenticate('google') )



module.exports = router;