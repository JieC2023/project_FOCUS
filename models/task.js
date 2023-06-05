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
        UPDATE tasks SET listId = $2, taskName = $3, description = $4, dueDate = $5, priorityLevel = $6, status = $7 
        WHERE taskId = $1
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
