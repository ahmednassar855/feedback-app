const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');

require('./models/User'); 
// User model shall start before service passport as the user collection shall be completedebfore passport
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
dotenv.config();

app.use( 
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    }) 
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app)

app.get('/', (req, res) => res.send('Hello there!'));
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));