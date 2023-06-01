const db = require('../db/db')

const List = {
    findAll: () => {
        const sql = 'SELECT * FROM lists'
        return db
            .query(sql)
            .then(dbRes => {
                return dbRes.rows
            })
    },

    create: (user_id, name, description) => {
        const sql = `
        INSERT INTO lists(user_id, name, description)
        VALUES ($1, $2, $3)
        RETURNING *
        `
        return db
            .query(sql, [user_id, name, description])
            .then(dbRes => dbRes.rows[0])
    },
    delete: listID => {
        const sql = 'DELETE FROM lists WHERE id = $1'
        return db.query(sql, [listID])
    }
}
module.exports = List