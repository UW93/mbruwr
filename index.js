var express = require('express');
var app = express();

const port = process.env.PORT || 1993

app.get('/', function (req, res) {
   
   res.sendFile(__dirname + '/html/koeln.html');
})

app.get('/koelnVR', function (req, res) {
   
   res.sendFile(__dirname + '/html/koeln.html');
})

app.get('/VRexample', function (req, res) {
   
   res.sendFile(__dirname + '/html/vr_example.html');
})

app.get('/VRexample', function (req, res) {
   
   res.sendFile(__dirname + '/html/test.html');
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})