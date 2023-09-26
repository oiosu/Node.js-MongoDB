const express = require('express');
const app = express();
const bodyParer = require('body-parser');
app.use(bodyParer.urlencoded({ extended: true }));

http.listen(8080, function () {
    console.log('listening on 8080')
});

app.post('/add', function (요청, 응답) {
    응답.send('전송완료');
    console.log(요청.body.data);
    console.log(요청.body.title);
});