// key.js - figur out what set of credenital to return

if (process.env.NODE_ENV === 'production') {
    // we are in prodution - return the prod set of keys
    module.exports = require('./prod')
} else {
    // we are in develpment - return the dev keys!!!
    module.exports = require('./dev')
}