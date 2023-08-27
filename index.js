const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); 
// User model shall start before service passport as the user collection shall be completedebfore passport
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
dotenv.config();



require('./routes/authRoutes')(app)

app.get('/', (req, res) => res.send('Hello there!'));
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));