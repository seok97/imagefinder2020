import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home"
import SearchResults from "./routes/SearchResults"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/searchresult/:key" component={SearchResults} />
    </HashRouter>
  )
}

export default App