var express = require("express"),
	app		= express(),
	http	= require("http"),
	server	= http.createServer(app),
	mongoose = require('mongoose');

app.configure(function () {
	app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
});

app.get('/', function(req, res) {
	res.send("Hola Mundo");
});

routes = require('./routes/nfl')(app);
//routes = require('./routes/ligamx')(app);

//mongoose.connect('mongodb://localhost/nfl', function(err, res){
mongoose.connect('mongodb://Donquinielas:1UeCwXzfO1cgGGe.1wMOnFQB5v3Q9OFyNsN_X_RXo3A-@ds038888.mongolab.com:38888/Donquinielas', function(err, res) {
	if(err) {
		console.log('Error: no se puede conectar a la DB' + err);
	} else{
		console.log('Conectado a la DB');
	}
});

server.listen(3000, function(){
	console.log("Node corriendo en http://localhost:3000");
});