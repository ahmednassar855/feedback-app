const express = require('express');
const dotenv = require('dotenv');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./config/keys');

const googleAuthRoutes = require('./router/googleAuth.router')


const app = express();
dotenv.config();


// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: keys.googleClientID,
//             clientSecret: keys.googleClientSecret,
//             callbackURL: '/auth/google/callback'
//         }, (accessToken) => {
//             console.log(accessToken);
//         }
//     )
// );




app.use(googleAuthRoutes);
// app.get('/auth/google', passport.authenticate('google' , {
//     scope: ['profile' ,'email']
// }))

// app.get('/auth/google/callback' , passport.authenticate('google'))

app.get('/', (req, res) => res.send('Hello there!'));
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));