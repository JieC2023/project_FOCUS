const db = require('../db/db')

const Task = {
    create: (listId, taskName, description, dueDate, priorityLevel, status) => {
        const sql = `
        INSERT INTO tasks(listId, taskName, description, dueDate, priorityLevel, status)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `
        const parameters = [listId, taskName, description, dueDate, priorityLevel, status]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    getByList: listId => {
        const sql = `
        SELECT FROM tasks 
        WHERE listId = $1`
        const parameters = [listId]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows)
    },
    getById: taskId => {
        const sql = `
        SELECT FROM tasks 
        WHERE taskId = $1`
        const parameters = [taskId]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    updateById: (listId, taskName, description, dueDate, priorityLevel, status, taskId) => {
        const sql = `
        UPDATE tasks SET listId = $1, taskName = $2, description = $3, dueDate = $4, priorityLevel = $5, status = $6 
        WHERE taskId = $7
        RETURNING *`
        const parameters = [listId, taskName, description, dueDate, priorityLevel, status, taskId]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    deleteById: taskId => {
        const sql = `
        DELETE FROM tasks 
        WHERE taskId = $1 
        RETURNING *`
        const parameters = [taskId]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Task
