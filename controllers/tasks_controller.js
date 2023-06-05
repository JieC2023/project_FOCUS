const express = require('express')
const router = express.Router()

// import model
const Task = require('../models/task')

// routes to go here
router.post('/', (req, res) => {
    const { listId, taskName, description, dueDate, priorityLevel, status }= req.body
    Task
        .create(listId, taskName, description, dueDate, priorityLevel, status)
        .then(task => res.json(task))
})

router.get('/:listId', (req, res) => {
    const listId = req.params.listId
    Task
        .getByList(listId)
        .then(tasks => res.json(tasks))
})

router.get('/:taskId', (req, res) => {
    const taskId = req.params.taskId
    Task
        .getById(taskId)
        .then(task => res.json(task))
})

router.put('/update/:taskId', (req, res) => {
    const { listId, taskName, description, dueDate, priorityLevel, status } = req.body
    const taskId = req.params.taskId
    Task
        .updateById(listId, taskName, description, dueDate, priorityLevel, status, taskId)
        .then(task => res.json({message: `task ${task.taskId} has been updated!`}))
})

router.delete('/delete/:taskId', (req, res) => {
    const taskId = req.params.taskId
    Task
        .deleteById(taskId)
        .then(() => res.json({message: 'your task has been deleted!'}))
})

module.exports = router
