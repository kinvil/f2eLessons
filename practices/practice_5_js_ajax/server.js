var path = require('path'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(__dirname + '/static'));

app.post('/api/getData', function (req, res) {
    var jsonData;

    if (req.body.name === 'jack' && req.body.age === '18' && req.body.sex === '1') {
        jsonData = JSON.stringify({ identity: 'A123456789', hight: 180, weight: 80 });
    }
    else if (req.body.name === 'rose' && req.body.age === '18' && req.body.sex === '2') {
        jsonData = JSON.stringify({ identity: 'B987654321', hight: 160, weight: 60 });
    }
    else {
        jsonData = JSON.stringify({errMsg: '資料輸入錯誤'});
    }

	res.send(jsonData);
});

app.get('/', function (req, res) {
    res.sendFile((path.join(__dirname, 'index.html')));
});

app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});