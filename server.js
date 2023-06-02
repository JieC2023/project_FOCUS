const express = require('express')
// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const tasksController = require('./controllers/tasks_controller')
const listsController = require('./controllers/lists_controller')
const usersController = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => console.log(`listening on http://localhost:${port}`))


// workflow of express: starts from receiving a user's web request, and ends with us providing a response.
// Each step in the workflow is a middleware function passed into "app.use"

// receive request (from browser)
//     |
//     V
// middleware function to log request info in the terminal
app.use(logger)
//     |
//     V
// middleware to send back our SPA (Single-Page Application)
app.use(express.static('client'))
//     |
//     V
// middleware to parse JSON body in a post, PUT or DELETE
app.use(express.json())
        // V
app.use(sessions)
       //V

app.use('/api/tasks', tasksController)
app.use('/api/list', listsController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)

//     |
//     V
// send response back to user