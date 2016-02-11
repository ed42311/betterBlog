var express = require('express');
var path = require('path');
var http = require('http');
var port = process.env.PORT || 8020;
var app = express();



app.use(express.static('public'));

app.get('/', function(req, res){
  res.not('public/index.html')
  });

app.listen(port);

console.log('Node app is running on port +' + port);

