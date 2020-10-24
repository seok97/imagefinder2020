import React from "react"
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
        <div className="homepage_body">
          <div className="homepage_body_div">
            <Searchinput
              pathcheck={classcheck}
              onSubmit={this.Searchsubmit_Home}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
