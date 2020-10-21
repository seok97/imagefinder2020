import React from "react"
import "./SearchResults.css"
class SearchResults extends React.Component {
  state = {
    key: "",
  }
  componentDidMount() {
    const { location, history } = this.props
    console.log(location)
    if (location.state === undefined) {
      history.push("/")
    } else {
      this.setState({
        key: location.state.key,
      })
    }
  }
  render() {
    const { key } = this.state
    console.log(key)
    return (
      <div>
        <h1>검색결과 페이지</h1>
        <h2>가져온 값 : {key}</h2>
      </div>
    )
  }
}

export default SearchResults
