# Imgae Search Web

프로젝트 생성 2020102118:20

git LF 에러 해결
git config --global core.autocrlf true

20201022
objects are not valid as a react child 에러 해결

function Images( title, src ) { }
컴포넌트props 인자를 위와 같이 작성함..

-> Images({ title, src }) { }
이렇게 {} 객체를 줘야함...

## 개발 순서

1. 회원가입, 로그인 완성
   1-1dbconnect - success
   1-2getuserlist ,insert userdata to db - success
   1-3siginreactpage
   1-4loginreactpage

2. API 로그인
3. 알고리즘 도입

# 알고리즘 이용자 기반 추천 방식

같은 성별, 나이 인 A와 B 사용자가 있을때,
A가 자동차, 게임, 캠핑 이라는 컨텐츠를 이용했고,
B가 게임 이라는 컨텐츠를 이용했을때,
B에게 자동차와 캠핑 컨텐츠를 추천해 준다.

이미지의 경우, 사용자 선호도 카테고리를 처음 정하게 하여 위와 같이 추천한다.

css

.searchrep_header_home{
margin-left: 20px;
}
.searchrep_header_home a{
text-decoration: none;
text-align: left;
-webkit-font-smoothing: antialiased;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ,
Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", "Segoe UI Symbol";
cursor: pointer;
pointer-events: auto;
color: rgb(59, 59, 59);
}

/\*

<div className="searchrep">
            <div className="searchrep_header">
              <div className="searchrep_header_home">
              <Link to="/">Home</Link>
              </div>
              <div className="searchrep_header_div">
                <Searchinput
                  pathcheck={classcheck}
                  onSubmit={this.Searchsubmit}
                />
              </div>
            </div>
*/

/////
회원가입 예제

class Login extends React.Component {
constructor(props) {
super(props);
​
this.state = {
idx: null,
email: "",
pw: "",
nickname: "",
isLogin: null
};
}
//이메일 입력창 관리
handleEmail = e => {
this.setState({
email: e.target.value
});
};
//패스워드 입력창 관리
handlePW = e => {
this.setState({
pw: e.target.value
});
};
//로그인버튼 클릭시 서버로 데이터 전송
handleSubmit = e => {
e.preventDefault();
​
const login_info = {
method: "POST",
body: JSON.stringify(this.state),
headers: {
"Content-Type": "application/json"
}
};
fetch(" node server ", login_info)
.then(res => {
return res.json();
})
.then(json => {
//json형식 {idx: 8, nickname: "noh", email: "noh@gmail.com", success: true}
if (json.success === true) {
alert("로그인되었습니다");
// 서버로 부터 받은 JSON형태의 데이터를 로컬스토리지에 우선 저장한다.
window.localStorage.setItem('userInfo', JSON.stringify(json))
//스테이트에 유저정보를 저장한다.
this.setState({
idx: json.idx,
email: json.email,
nickname: json.nickname,
isLogin: json.success
});
this.props.history.push("/main")
} else {
alert("아이디 혹은 비밀번호를 확인하세요");
}
});
};
