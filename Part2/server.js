const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
app.use(express.urlencoded({ extended: true }));


var db;
MongoClient.connect('접속URL', { useUnifiedTopology: true }, function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp');

    db.collection('post').insertOne({ 이름: 'John', _id: 100 }, function (에러, 결과) {
        console.log('저장완료');
    });

    app.listen(8080, function () {
        console.log('listening on 8080')
    });
});;


// app.post('/add', function (요청, 응답) {
//     응답.send('전송완료');
//     console.log(요청.body.data);
//     console.log(요청.body.title);
// });