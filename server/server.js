var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setup for Heroku deploy
var port = process.env.PORT || 7000;
var server = app.listen(port, function() {
	console.log("Express server listening on part " + server.address().port);
});
