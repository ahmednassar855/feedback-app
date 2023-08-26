const express = require('express');
const dotenv = require('dotenv');
require('./services/passport');

// const googleAuthRoutes = require('./routes/authRoutes');


const app = express();
dotenv.config();



// googleAuthRoutes(app);
require('./routes/authRoutes')(app)

app.get('/', (req, res) => res.send('Hello there!'));
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));