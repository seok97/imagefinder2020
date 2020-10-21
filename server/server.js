const express = require("express")
const app = express()
const cors = require("cors")

const indexRouter = require("./routes/index")

app.use(cors())
app.use("/index", indexRouter)

const port = 3002

app.listen(port, () => console.log("express server listening on port " + port))
