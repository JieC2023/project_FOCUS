const express = require('express')
const router = express.Router()

//models for lists
const List = require('../models/list')

//routes

router.get('/', (req, res) => {
    List
        .getByUser()
        .then(lists => res.json(lists))
})

router.post('/', (req, res) => {
    const { userID, name, description } = req.body

    List
        .create(userID, name, description)
        .then(list => res.json(list))
})

router.put('/update/:id', (req, res) => {
    const { user_id, name, description }= req.body
    const listID = req.params.listID
    List
        .updateByID(user_id, name, description, listID)
        .then(list => res.json({message: `list ${list.list_id} has been updated!`}))
})

router.get('/:id', (req, res) => {
    const listID = req.params.listID
    List
        .getByID(listID)
        .then(list => res.json(list))
})
router.delete('/:id', (req, res) => {
    const listID = req.params.id

    List
        .deleteByID(listID)
        .then(() => res.json({message: 'deleted successfully'}))
})

mosule.exports = router