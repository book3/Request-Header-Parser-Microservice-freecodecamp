var express=require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');


app.get('/',function(req,res){
  res.render('index');
});

app.get('/:name',function(req,res){
  if(!isNaN(req.params.name)){
    var d = new Date(Number(req.params.name)*1000+86400000);
    var d = d.toDateString();
    var data ={
      unix: req.params.name,
      natural: d
    };
      res.json(data);
  }
  else{
    var nat= Date.parse(req.params.name);
    if(!isNaN(nat)){
      var unix=nat/1000;
      var data ={
        unix: unix,
        natural: req.params.name
      };
      res.json(data);
    }else {
      var data ={
        unix: null,
        natural: null
      };
      res.json(data);
    }
  }

});


app.listen(3000);
