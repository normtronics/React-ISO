// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  routes = require('./routes/home');
  var babel = require('babel/register');
  //config = require('./config'),

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
//app.engine('ejs', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'ejs');

// Disable etag headers on responses
//app.disable('etag');

// Index Route
app.get('/', routes.index);

// Page Route
//app.get('/page/:page/:skip', routes.page);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Fire it up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});