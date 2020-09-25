var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
   res.sendFile(__dirname + '/html/koeln.html');
})

app.get('/koelnVR', function (req, res) {
   
   res.sendFile(__dirname + '/html/koeln.html');
})

var server = app.listen(1993, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})