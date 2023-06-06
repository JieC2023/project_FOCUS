const express = require('express')
const router = express.Router()

//models for lists
const List = require('../models/list')

//routes

router.get('/:userId', (req, res) => {
    const userId = req.params.userId
    List
        .getByUser(userId)
        .then(lists => res.json(lists))
})

router.post('/', (req, res) => {
    const { userId, name, description } = req.body

    List
        .create(userId, name, description)
        .then(list => res.json(list))
})

router.put('/update/:listId', (req, res) => {
    const { userId, name, description }= req.body
    const listId = req.params.listId
    List
        .updateById(userId, name, description, listId)
        .then(list => res.json({message: `list ${list.listId} has been updated!`}))
})

router.get('/:id', (req, res) => {
    const listId = req.params.listId
    List
        .getById(listId)
        .then(list => res.json(list))
})
router.delete('/:id', (req, res) => {
    const listId = req.params.id

    List
        .deleteById(listId)
        .then(() => res.json({message: 'deleted successfully'}))
})

module.exports = router