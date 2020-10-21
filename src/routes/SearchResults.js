import React from "react"
import axios from "axios"
import "./SearchResults.css"
import Images from "../components/Images"

class SearchResults extends React.Component {
  state = {
    isLoading: false,
    key: "",
    images: [],
  }

  getImages = async (key) => {
    const serverurl = "http://localhost:3002/index?q=" + key
    console.log("this.state.key : " + key)
    console.log("서버로 보내는 값: " + serverurl)
    await axios.get(serverurl).then((res) => {
      console.log(res.data)
      console.log(typeof res.data)
    })
    this.setState({ isLoading: true })
  }

  componentDidMount() {
    const { location, history } = this.props
    if (location.state === undefined) {
      history.push("/")
    } else {
      this.setState({
        key: location.state.key,
      })
      this.getImages(location.state.key)
    }
  }

  render() {
    const { key, images, isLoading } = this.state
    console.log("저장된 이미지값 : " + images)
    return (
      <div>
        {isLoading ? (
          <div className="main">
            <h1>검색결과 페이지</h1>
            <h2>가져온 key값 : {key}</h2>
            {images.map((image) => {
              return <Images key={image.idx} title={image.alt} />
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
