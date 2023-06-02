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
        res.status(400).json({ error: 'email and/or password are invalid' })
    } else { 
        // using bcrypt to validate the password:
        const isValidPassword = bcrypt.compareSync(password, user.password_digest)

        if (user && isValidPassword) { 
            //log the user in
            req.session.userId = user.user_id
            res.json({ email: user.email })
         }
       }
    })  
})
router.get('/',(req, res) => { 
    const userId = req.session.userId
    console.log(req.session)
    // if logged in:
    if (userId) {
        console.log(`userId ${userId} found!`)
    User
    .findById(userId)
    .then(user => res.json({ result: 'successful', email: user.email }))
    } else { 
        console.log(`no userId found.`)
      res.json({})
    }
})

module.exports = router