const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models 
const User = require('../models/user')

// orutes
router.post('/', (req, res) => {
    const { name, email, password } = req.body

    // using bcrypt to create password digest
    const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)

    User
      .create(name, email, passwordDigest)
      .then(email => res.json(email))
})

module.exports = router