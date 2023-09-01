const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');
const bodyparser = require('body-parser');


require('./models/User'); 
// User model shall start before service passport as the user collection shall be completedebfore passport
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
dotenv.config();

app.use(bodyparser.json())
app.use( 
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    }) 
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)


if( process.env.NODE_ENV === 'production' ) {
    // express will serve up production assets
    // like our main.js file,or main.css file
    app.use(express.static('client/build'))
    // express will serve up the index.html file
    // if it does not recoginze the route
    const path = require('path');
    app.get('*' , ( req , res ) => {
        res.sendFile(path.resolve(__dirname , 'client' ,'dist', 'index.html'))
    })
}

app.get('/', (req, res) => res.send('Hello there!'));
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));