import React from "react"
import "./Sigin.css"

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h2>sigin</h2>
        <div className="login_form">
          <form>
            <div className="wrapper">
              <div className="lavel">이메일</div>
              <input type="text" name="email" placeholder="이메일" />
            </div>
            <div className="wrapper">
              <div className="lavel">패스워드</div>
              <input type="password" name="password" placeholder="패스워드" />
            </div>
            <button>로그인</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login

// localhost:3002/sigin?id=test03&name=testtest&pw=1234&age=26&gender=men&fav=car&email=test@naver.com
