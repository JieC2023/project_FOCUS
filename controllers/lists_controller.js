const express = require('express')
const router = express.Router()

//models for lists
const List = require('../models/list')

//routes

router.get('/', (req, res) => {
    List
        .findAll()
        .then(lists => res.json(lists))
})

router.post('/', (req, res) => {
    const { userID, name, description } = req.body

    List
        .create(userID, name, description)
        .then(list => res.json(list))
})

router.delete('/:id', (req, res) => {
    const listID = req.params.id

    List
        .deleteByID(listID)
        .then(() => res.json({message: 'deleted successfully'}))
})

mosule.exports = router