import React from "react"
import axios from "axios"
import "./SearchResults.css"
import Images from "../components/Images"

class SearchResults extends React.Component {
  state = {
    images: [],
    isLoading: false,
  }

  getImages = async (url) => {
    const {
      data: { imaglist },
    } = await axios.get(url)
    this.setState({ images: imaglist, isLoading: true })
  }

  componentDidMount() {
    const { location, history } = this.props
    console.log(location)

    if (location.state === undefined) {
      history.push("/")
    } else {
      const serverurl = "http://localhost:3002/index?q=" + location.state.key
      this.getImages(serverurl)
    }
  }

  render() {
    const { images, isLoading } = this.state

    return (
      <div>
        {isLoading ? (
          <div className="searchrep">
            <div className="searchrep_header"></div>
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
