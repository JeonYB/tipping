# tping HTML 전달

## 구성
[Node.js](https://nodejs.org/)와 
[Express](http://expressjs.com) 를 기반의 웹 서버로 구성되어 있고, 
[ejs](https://github.com/mde/ejs) 뷰 템플릿 엔진을 이용하여 HTML을 다룹니다.  

## 사용 방법
GIT 레파지토리 clone or fork 
* npm 모듈 전체가 올라가있어 추가로 npm install 할필요가 없습니다
URL(s):http://localhost:3000

```bash
$ node serve.js # 개발모드 웹 서버 실행
```

## Directory Structure
* **node_moddules** - 웹서버에 사용되는 모듈
* **public** - css/images/js 리소스 관리
    * images - UI image 파일
    * js - 자바스크립트 파일
    * css - css 파일
* **router** - HTML 라우팅 설정 (URL구성 설정)
* **views** - HTML 파일