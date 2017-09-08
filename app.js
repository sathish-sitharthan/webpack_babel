var falcor = require('falcor');
var path = require('path');
var FalcorServer = require('falcor-express');
var Router = require('falcor-router');
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var index = require('./routes/index');

var app = express();
var port = process.env.PORT || 80;
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public'), {dotfiles:"deny"}));

app.use('/', index);

app.get('/model.json', FalcorServer.dataSourceRoute(function (req, res) { 
	"use strict";
  return new Router([
    {
    	route: "getRate",
    	get: function(){
    		console.log("hi , we are here");
    		console.log(req.headers);
    	
            return {path:['getRate'], value:5};
          }
    }
    ]);
}));

app.listen(port, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Server is started on port : '+port+'. Navigate to http://localhost')
});