const db = require('../db/db')

const Task = {
    create: (listID, taskName, description, dueDate, priorityLevel, status) => {
        const sql = `
        INSERT INTO tasks(list_id, task_name, description, due_date, priority_level, status)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `
        const parameters = [listID, taskName, description, dueDate, priorityLevel, status]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    getByList: list_id => {
        const sql = `
        SELECT FROM tasks 
        WHERE list_id = $1`
        const parameters = [list_id]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows)
    },
    getByID: task_id => {
        const sql = `
        SELECT FROM tasks 
        WHERE task_id = $1`
        const parameters = [task_id]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    updateByID: (listID, taskName, description, dueDate, priorityLevel, status, taskID) => {
        const sql = `
        UPDATE tasks SET list_id = $2, task_name = $3, description = $4, due_date = $5, priority_level = $6, status = $7 
        WHERE task_id = $1
        RETURNING *`
        const parameters = [listID, taskName, description, dueDate, priorityLevel, status, taskID]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    deleteByID: task_id => {
        const sql = `
        DELETE FROM tasks 
        WHERE task_id = $1 
        RETURNING *`
        const parameters = [task_id]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Task
