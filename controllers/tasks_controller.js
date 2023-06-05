const express = require('express')
const router = express.Router()

// import model
const Task = require('../models/task')

// routes to go here
router.post('/', (req, res) => {
    const { listID, taskName, description, dueDate, priorityLevel, status }= req.body
    console.log(req.body)
    Task
        .create(listID, taskName, description, dueDate, priorityLevel, status)
        .then(task => res.json(task))
})

router.get('/:listID', (req, res) => {
    const listID = req.params.listID
    Task
        .getByList(listID)
        .then(tasks => res.json(tasks))
})

router.get('/:taskID', (req, res) => {
    const taskID = req.params.taskID
    Task
        .getByID(taskID)
        .then(task => res.json(task))
})

router.put('/update/:taskID', (req, res) => {
    console.log(req.body)
    const { listID, taskName, description, dueDate, priorityLevel, status }= req.body
    const taskID = req.params.taskID
    Task
        .updateByID(listID, taskName, description, dueDate, priorityLevel, status, taskID)
        .then(task => res.json({message: `task ${task.task_id} has been updated!`}))
})

router.delete('/delete/:taskID', (req, res) => {
    const taskID = req.params.taskID
    Task
        .deleteByID(taskID)
        .then(() => res.json({message: 'your task has been deleted!'}))
})

module.exports = router
