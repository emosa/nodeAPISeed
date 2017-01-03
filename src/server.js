var express = require('express');
var body_Parser = require('body-parser');
var app = express();
//Config

var port = 3000;

//Route ex '/aboutus' use http://localhost:3000/aboutus
//app.get('/aboutus', function (req, res) {
//  res.json({Hello: 'World'});
//});

app.use('/api', require('../routes/api.js')(express));

app.listen(port, function(){
  console.log("Server Active on", port);
});
