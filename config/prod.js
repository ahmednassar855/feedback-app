// prod .js - figur out what set of credenital to return
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublisheKey: process.env.STRIPE_PUBLISH_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    googleRedirectURI: 'https://feedback-app-5ggq.onrender.com/'
};
