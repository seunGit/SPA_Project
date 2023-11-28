// express 서버 설치
// npm init -y 명령어로 프로젝트의 기본 구성 파일인 package.json 파일을 생성한다.
// npm i express 명령어로 express를 설치한다.

// express 변수에 express 프레임 워크 정의
const express = require("express");
// Node.js 내장 모듈 path 정의
const path = require("path");
// express 어플리케이션 생성하기
const app = express();

// use 메서드를 사용하여 정적 파일을 제공하는 미들웨어 추가하기
// '/static' 경로에 들어오는 요청들은 frontend/static 폴더 안에 있는 정적파일을 제공한다. __dirname은 현재 디렉토리를 의미.
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// get 메서드를 사용하여 "/*"경로 즉 모든경로로 들어오는 get요청을 처리한다.
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// 특정포트에서 클라이언트의 요청을 수신설정
// app.listen으로 포트를 지정하고 서버가 시작되면 Server running을 터미널창에 출력한다.
// 서버 실핼은 node server.js 명령어로 실행한다.
app.listen(process.env.PORT || 3002, () => console.log("Server running..."));