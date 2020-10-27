const mdbconn = require("../dbconnect/dao")
const express = require("express")
const router = express.Router()

// localhost:3002/sigin?id=&name=&pw=&age=&gender=&fav=&email=

router.get("/", function (req, res, next) {
  let userinfo = {
    id: req.query.id,
    pw: req.query.pw,
    name: req.query.name,
    age: req.query.age,
    gender: req.query.gender,
    fav: req.query.fav,
    email: req.query.email,
  }
  console.log("req data : " + req.query)

  mdbconn
    .siginuser(userinfo)
    .then((rows) => {
      res.json(rows)
    })
    .catch((e) => {
      console.error(e)
    })
})

module.exports = router
