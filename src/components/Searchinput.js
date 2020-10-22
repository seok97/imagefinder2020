import React from "react"

class Searchinput extends React.Component {
  state = {
    classcheck: "searchw_input",
    searchkey: "",
  }

  onFormSubmit = (e) => {
    //e.preventDefault()
    this.props.onSubmit(this.state.searchkey)
  }

  pressenter = (e) => {
    if (e.key === "Enter") {
      this.onFormSubmit(this.state.searchkey)
    }
  }

  searchkeychange = (e) => {
    this.setState({
      searchkey: e.target.value,
    })
  }

  componentDidMount() {
    this.setState({ classcheck: this.props.pathcheck })
  }

  render() {
    const { searchkeychange, pressenter } = this
    const { classcheck, searchkey } = this.state
    return (
      <div className="searchw">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="searchkey"
            className={classcheck}
            placeholder="검색어 입력"
            onChange={searchkeychange}
            onKeyPress={pressenter}
            value={searchkey}
          />
        </form>
      </div>
    )
  }
}

export default Searchinput
