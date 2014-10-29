var express = require('express'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  path = require('path'),
  session = require('express-session');

module.exports = function() {
  var app = express();

  app.use(compress());

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

   app.set('views', '/src/server/views');
   app.set('view engine', 'ejs');

   require('./routes/index.server.routes.js')(app);

   app.use(express.static('/src/client'));

  return app;
};
