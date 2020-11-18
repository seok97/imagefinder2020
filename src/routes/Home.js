import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import Searchinput from "../components/Searchinput"

class Home extends React.Component {
  state = {
    searchkey: "",
    classcheck: "homepage_body_input",
  }

  Searchsubmit_Home = (searchkey) => {
    const { history } = this.props
    history.push({
      pathname: "/searchresult/" + searchkey,
      state: { key: searchkey },
    })
  }

  render() {
    const { classcheck } = this.state
    return (
      <div className="homepage">
        <div className="homepage_top">
          <div className="navigater">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/sigin">
                <li>signup</li>
              </Link>
              <Link to="/login">
                <li>login</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="homepage_body">
          <div className="homepage_body_div">
            <Searchinput
              pathcheck={classcheck}
              onSubmit={this.Searchsubmit_Home}
            />
          </div>
        </div>
        <div className="homepage_footer"></div>
      </div>
    )
  }
}

export default Home
