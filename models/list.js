const db = require('../db/db')

const List = {
    create: (userId, name, description) => {
        const sql = `
        INSERT INTO "lists"("userId", "name", "description")
        VALUES ($1, $2, $3)
        RETURNING *
         `
         return db
            .query(sql, [userId, name, description])
            .then(dbRes => dbRes.rows[0])
    },
    getByUser: userId => {
        const sql = `
        SELECT * FROM "lists"
        WHERE "userId" = $1
        `
        return db
            .query(sql, [userId])
            .then(dbRes => {
                return dbRes.rows
            })
    },
    getById: listId => {
        const sql = `
        SELECT FROM "lists"
        WHERE "listId" = $1
        `
        const parameters = [listId]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    updateById: (userId, name, description, listId) => {
        const sql = `
        UPDATE "lists" SET "userId" = $1, "name" = $2, "description" = $3 WHERE "listId" = $4
        RETURNING *
        `
        const parameters = [userId, name, description, listId]
        return db
            .query(sql, parameters)
            .then(dbRes => dbRes.rows[0])
    },
    deleteById: listId => {
        const sql = 
        `
        DELETE FROM "lists" 
        WHERE "listId" = $1
        `
        return db.query(sql, [listId])
    }
}
module.exports = List
