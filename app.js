var express=require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');


app.get('/api/woami',urlencodedParser,function(req,res){

  var i={
    ip: req.socket.remoteAddress,
    language: req.headers['accept-language'],
    userAgent: req.headers['user-agent']
  };
  res.json(i);
});

app.listen(3000);
