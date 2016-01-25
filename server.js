var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

app.set('port', (process.env.PORT || 3020));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.not('public/index.html')
  });

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
