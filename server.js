var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function() {
  console.log('Listen on port %d', server.address().port);
});

app.set('views', './views')
app.set('view engine', 'jade')

app.get('/', function (req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!'});
})
