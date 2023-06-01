const session = require('express-session')

module.exports = session({ 
key: 'user_sid', 
secret: process.env.EXPRESS_SESSION_SECRET_KEY,
resave: false,
saveUninitialized: false,
cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1000 ms * 60 seconds * 60 minutes * 24 hours = 24 hour duration
})