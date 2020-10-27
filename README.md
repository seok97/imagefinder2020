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
   dbconnect - success
   getuserlist ,insert userdata to db - success
   siginreactpage
   loginreactpage

2. API 로그인
3. 알고리즘 도입

# 알고리즘 이용자 기반 추천 방식

같은 성별, 나이 인 A와 B 사용자가 있을때,
A가 자동차, 게임, 캠핑 이라는 컨텐츠를 이용했고,
B가 게임 이라는 컨텐츠를 이용했을때,
B에게 자동차와 캠핑 컨텐츠를 추천해 준다.

이미지의 경우, 사용자 선호도 카테고리를 처음 정하게 하여 위와 같이 추천한다.
