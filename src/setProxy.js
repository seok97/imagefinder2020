const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    proxy("/index", {
      target: "http://localhost:3002/",
    })
  )
}

//vscode://vscode.github-authentication/did-authenticate?windowid=1&code=ef6b1e84309c56a4b447&state=70a688da-3225-47b3-9bd2-b7cdda4eb5e5
