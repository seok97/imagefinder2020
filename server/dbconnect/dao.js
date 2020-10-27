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

async function usercheck(userinfo) {
  let conn, rows
  try {
    conn = await pool.getConnection()
    conn.query("USE imagefinderDB")
    rows = await conn.query("select " + userinfo.id + " from userinfo")
  } catch (e) {
    throw e
  } finally {
    if (conn) conn.end()
    return rows
  }
}

async function siginuser(userinfo) {
  let conn, rows
  try {
    conn = await pool.getConnection()
    conn.query("USE imagefinderDB")
    await conn.query(
      "INSERT INTO userinfo ( user_id, user_name, user_pw, user_age, user_gender,user_fav,user_email) values ('" +
        userinfo.id +
        "'," +
        "'" +
        userinfo.name +
        "'," +
        "'" +
        userinfo.pw +
        "'," +
        "'" +
        userinfo.age +
        "'," +
        "'" +
        userinfo.gender +
        "'," +
        "'" +
        userinfo.fav +
        "'," +
        "'" +
        userinfo.email +
        "'" +
        ")"
    )
    rows = await conn.query("select " + userinfo.id + " from userinfo")
  } catch (e) {
    throw e
  } finally {
    if (conn) conn.end()
    return rows
  }
}

module.exports = { getUserList, siginuser }
