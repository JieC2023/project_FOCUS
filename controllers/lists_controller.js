const express = require('express')
const router = express.Router()

//models for lists
const List = require('../models/list')

//routes

router.get('/', (req,res) => {
    List
        .findAll()
        .then(lists => res.json(lists))
})

router.post('/', (req, res) => {
    const user_id = req.body.user_id
    const name = req.body.name
    const description = req.body.description

    List
        .create(user_id, name, description)
        .then(list => res.json(list))
})

router.delete('/:id', (req, res) => {
    const listID = req.params.id

    List
        .delete(listID)
        .then(() => res.json({message: 'deleted successfully'}))
})

mosule.exports = router