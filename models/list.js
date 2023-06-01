const db = require('../db/db')

const List = {
    create: (userID, name, description) => {
        const sql = `
        INSERT INTO lists(user_id, name, description)
        VALUES ($1, $2, $3)
        RETURNING *
         `
         return db
            .query(sql, [userID, name, description])
            .then(dbRes => dbRes.rows[0])
    },
    getByUser: () => {
        const sql = `
        SELECT * FROM lists
        WHERE list_id = $1
        `
        return db
            .query(sql)
            .then(dbRes => {
                return dbRes.rows
            })
    },
    getByID: list_id => {
        const sql = `
        SELECT FROM lists
        WHERE list_id = $1
        `
        const parameters = [list_id]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    updateByID: (listID, user_id, name, description) => {
        const sql = `
        UPDATE lists SET user_id = $1, name = $2, description = $3 WHERE list_id = $4
        RETURNING *
        `
        const parameters = [listID, user_id, name, description]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    deleteByID: listID => {
        const sql = 
        `
        DELETE FROM lists 
        WHERE id = $1
        `
        return db.query(sql, [listID])
    }
}
module.exports = List
