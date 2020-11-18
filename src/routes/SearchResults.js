import React from "react"
import axios from "axios"
import "./SearchResults.css"
import Searchinput from "../components/Searchinput"
import Images from "../components/Images"
import { Link } from "react-router-dom"

class SearchResults extends React.Component {
  state = {
    images: [],
    isLoading: false,
    searchkey: "",
    classcheck: "searchrep_header_div_input",
  }

  getImages = async (url) => {
    console.log("getIMAGE !!!")
    const {
      data: { imaglist },
    } = await axios.get(url)
    this.setState({ images: imaglist, isLoading: true })
  }

  componentDidMount() {
    console.log("mount !! ")
    const { location, history } = this.props
    console.log(location)

    if (location.state === undefined) {
      history.push("/")
    } else {
      this.getImages("http://localhost:3002/index?q=" + location.state.key)
    }
  }

  /////////////////////////////////////

  Searchsubmit = (searchkey) => {
    console.log("submit !!")
    this.setState({ isLoading: false })
    const { location } = this.props
    console.log(location)
    if (location !== undefined) {
      this.getImages("http://localhost:3002/index?q=" + searchkey)
    }
  }

  ///////////////////////////////////
  render() {
    console.log("render !!")
    const { images, isLoading, classcheck } = this.state
    return (
      <div>
        {isLoading ? (
          <div className="searchrep">
            <div className="searchrep_header">
              <div className="searchrep_header_div_homeicondiv">
                <Link to="/">
                  <img src="./tempsnip.ico" />
                </Link>
              </div>
              <div className="searchrep_header_div">
                <Searchinput
                  pathcheck={classcheck}
                  onSubmit={this.Searchsubmit}
                />
              </div>
            </div>
            <div className="searchrep_body">
              {images.map((img) => {
                return (
                  <Images
                    title={img.alt}
                    key={img.idx}
                    src={img.src}
                    href={img.href}
                  />
                )
              })}
            </div>
            <div className="searchrep_footer"></div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
  }
}

export default SearchResults
