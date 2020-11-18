import React from "react"
import "./Sigin.css"
import { Link } from "react-router-dom"
class Login extends React.Component {
  render() {
    return (
      <div className="sigin">
        <div className="sigin_top">
          <Link to="/">
            <img className="homebtn" src="./tempsnip.ico" />
          </Link>
          <h2>Login</h2>
        </div>
        <div className="sigin_form">
          <form>
            <div className="wrapper">
              <div className="lavel">이메일</div>
              <input type="text" name="email" placeholder="이메일" />
            </div>

            <div className="wrapper">
              <div className="lavel">패스워드</div>
              <input type="password" name="password" placeholder="패스워드" />
            </div>
            <div>
              <input
                type="button"
                value="Login"
                onClick={console.log("push!")}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login

// localhost:3002/sigin?id=test03&name=testtest&pw=1234&age=26&gender=men&fav=car&email=test@naver.com
