import React from "react"
import "./Home.css"

class Home extends React.Component {
  state = {
    searchkey: "",
  }

  Searchsubmit = () => {
    const { history } = this.props
    const { searchkey } = this.state
    history.push({
      pathname: "/searchresult",
      state: { key: searchkey },
    })
  }

  searchkeychange = (e) => {
    this.setState({
      searchkey: e.target.value,
    })
  }

  pressenter = (e) => {
    if (e.key === "Enter") {
      this.Searchsubmit()
    }
  }

  render() {
    const { searchkey } = this.state
    const { pressenter, searchkeychange } = this
    return (
      <div className="homepage">
        <div className="homepage_body">
          <input
            type="text"
            name="searchkey"
            className="homepage_body_input"
            placeholder="검색어 입력"
            onChange={searchkeychange}
            onKeyPress={pressenter}
            value={searchkey}
          />
        </div>
      </div>
    )
  }
}

export default Home
