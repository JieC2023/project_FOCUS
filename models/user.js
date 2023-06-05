const db = require('../db/db')

const User = {
  findById: id => {
    const sql = `
      SELECT * FROM users
      WHERE userId = $1
    `

    return db
      .query(sql, [id])
      .then(dbRes => dbRes.rows[0])
  },

  findByEmail: email => {
    const sql = `
      SELECT * FROM users
      WHERE email = $1
    `

   return db
   .query(sql, [email])
   .then(dbRes => dbRes.rows[0])
  },

  ////////Creating the name, email and password for the database
  create: (name, email, passwordDigest) => {
    const sql = `
      INSERT INTO users(name, email, passwordDigest) 
      VALUES ($1, $2, $3)
      RETURNING *
    `
/// Returns the name, email and password into the database
    return db
    .query(sql, [name, email, passwordDigest])
    .then(dbRes => dbRes.rows[0]) 
 
    }
}

module.exports = User  
  