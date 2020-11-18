import React from "react"
import { HashRouter, Route } from "react-router-dom"
import "./App.css"
import Home from "./routes/Home"
import SearchResults from "./routes/SearchResults"
import Login from "./routes/Login"
import Sigin from "./routes/Sigin"

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/searchresult" component={SearchResults} />
        <Route path="/sigin" component={Sigin} />
        <Route path="/login" component={Login} />
      </HashRouter>
    )
  }
}

export default App
