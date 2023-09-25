const express = require('express');
const app = express();
const bodyParer = require('body-parser');
app.use(bodyParer.urlencoded({extended : true}));


// listen(파라미터1, 파라미터2)
// listen(서버띄울 포트번호, 띄운 후 실행할 코드)
// 8080 port에 서버를 띄워주세요!
app.listen(8080, function(){
    console.log('listening on 8080')
});

// ___경로로 들어오면 ____보여주세요
// 요청을 처리하는 기계 제작하기 
// ex) /beauty/home으로 방문하면(GET요청) 뷰티 상품들을 보여주세요
app.get('/beauty/home', function(요청, 응답){
    응답.send('뷰티 상품들을 볼 수 있는 페이지 입니다.')
});

// 누군가가 /PET으로 방문을 하면, PET과 관련된 안내문을 띄워준다. 
// app.get('경로,' function(요청, 응답){
//      응답.send('반갑습니다');
// });

// ex) /pet/home으로 방문하면(GET요청) 펫 상품을 보여주세요.
// http://localhost:8080/pet
app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지 입니다.');
});

// GET 요청 업그레이드 HTML 파일을 보내보기 
app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});

app.get('/write', function(요청, 응답){
    응답.sendFile(__dirname + '/write.html');
});

// POST 요청 업그레이드
app.post('/add', function(요청, 응답){
    응답.send('전송완료');
    console.log(요청.body.title);
});