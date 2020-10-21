import React from "react"
import axios from "axios"
import "./SearchResults.css"
import Images from "../components/Images"

class SearchResults extends React.Component {
  state = {
    images: [],
    isLoading: false,
  }

  getImages = async () => {
    const serverurl =
      "http://localhost:3002/index?q=" + this.props.location.state.key
    await axios.get(serverurl).then((res) => {
      this.setState({ images: res.data, isLoading: true })
    })
  }

  componentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push("/")
    } else {
      this.getImages()
    }
  }

  render() {
    const { images, isLoading } = this.state

    return (
      <div>
        {isLoading ? (
          <div className="main">
            {images.map((att) => {
              return <Images title={att.alt} key={att.idx} />
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
  }
}

export default SearchResults
