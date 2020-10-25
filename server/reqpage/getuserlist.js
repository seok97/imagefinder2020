const mdbconn = require("../dbconnect/dao")
const express = require("express")
const router = express.Router()

router.get("/", function (req, res, next) {
  mdbconn
    .getUserList()
    .then((rows) => {
      res.json(rows)
    })
    .catch((e) => {
      console.error(e)
    })
})

module.exports = router
