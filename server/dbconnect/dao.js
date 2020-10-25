const mariadb = require("mariadb")

const pool = mariadb.createPool({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "1234",
  connectionLimit: 5,
})

async function getUserList() {
  let conn, rows
  try {
    conn = await pool.getConnection()
    conn.query("USE imagefinderDB")
    rows = await conn.query("select * from userinfo")
  } catch (e) {
    throw e
  } finally {
    if (conn) conn.end()
    return rows
  }
}

module.exports = { getUserList }
