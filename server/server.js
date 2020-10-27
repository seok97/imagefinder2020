const express = require("express")
const app = express()
const cors = require("cors")

const indexRouter = require("./reqpage/index")
const dbconn = require("./reqpage/getuserlist")
const sigin = require("./reqpage/sigin")

app.use(cors())
app.use("/index", indexRouter)
app.use("/userlist", dbconn)
app.use("/sigin", sigin)

const port = 3002

app.listen(port, () => console.log("express server listening on port " + port))
