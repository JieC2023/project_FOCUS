const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// Models
const User = require('../models/user') 

// Routes
router.post('/', (req, res) => {
    const { email, password } = req.body

    User
    .findByEmail(email)
    .then(user => {
        if (!user || email == '' || password == '') {
            res.status(400).json({ result: 'failed', error: 'email and/or password are invalid' })
        } else { 
            // using bcrypt to validate the password:
            const isValidPassword = bcrypt.compareSync(password, user.passwordDigest)

            if (user && isValidPassword) { 
                //log the user in
                req.session.userId = user.userId
                res.json({ result: 'successful', user: user })
            }
        }
    })  
})
router.get('/',(req, res) => { 
    const userId = req.session.userId
    // if logged in:
    if (userId) {
    User
    .findById(userId)
    .then(user => res.json({ result: 'successful', user: user }))
    } else {
      res.json({})
    }
})
router.delete('/', (req, res) => {
    // check if user is logged in
    if (req.session) {
        // attempt to destroy session/clear cookie
        req.session.destroy(err => {
            if (err) {
                // error handling if unable
                res.status(400).json({ result: 'failed', error: 'Unable to log out' })
            } else {
                // return message if successful
                res.clearCookie('user_sid')
                res.json({ result: 'successful', message: 'Logged out successfully!'})
            }
        })
    } else {
        // end the response if nobody is logged in
        res.end()
    }
})

module.exports = router