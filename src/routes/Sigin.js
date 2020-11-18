import React from "react"
import { Link } from "react-router-dom"
import "./Sigin.css"

class Sigin extends React.Component {
  render() {
    return (
      <div className="sigin">
        <div className="sigin_top">
          <Link to="/">
            <img className="homebtn" src="./tempsnip.ico" />
          </Link>
          <h2>signup</h2>
        </div>
        <div className="sigin_form">
          <form>
            <div className="wrapper">
              <div className="lavel">이메일</div>
              <input type="text" name="email" placeholder="이메일" />
            </div>
            <div className="wrapper">
              <div className="lavel">이름</div>
              <input type="password" name="name" placeholder="이름" />
            </div>
            <div className="wrapper">
              <div className="lavel">패스워드</div>
              <input type="password" name="password" placeholder="패스워드" />
            </div>
            <div>
              <input
                type="button"
                value="signup"
                onClick={console.log("push!")}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Sigin

// localhost:3002/sigin?id=test03&name=testtest&pw=1234&age=26&gender=men&fav=car&email=test@naver.com
