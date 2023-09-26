const express = require('express');
const app = express();
const bodyParer = require('body-parser');
app.use(bodyParer.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://bestfesu:skshfpel7@cluster0.lbgqxym.mongodb.net/?retryWrites=true&w=majority',
    function (에러, client) {
        // database 접속이 완료되면, 내부 코드 실행하기 
        http.listen(8080, function () {
            console.log('listening on 8080')
        });
    })



app.post('/add', function (요청, 응답) {
    응답.send('전송완료');
    console.log(요청.body.data);
    console.log(요청.body.title);
});