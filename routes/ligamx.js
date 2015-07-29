//Archivo /routes/ligamx.js 
module.exports = function(app) {
	
	var LIGAMXpartidos = require('../models/ligamx.js')

	//GET - Regresa todos los partidos en la base de datos
	findAllLigaMXPartidos = function(req, res) {
		LIGAMXpartidos.find(function(err, partidos) {
			if(!err){
				console.log('GET /ligamx');
				res.send(partidos);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	findById = function(req, res) {
		LIGAMXpartidos.findById(req.params.id, function(err, partidos) {
			if(!err){
				console.log('GET /ligamx/' + req.params.id);
				res.send(partidos);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	//POST - Mete un nuevo partido a la base de datos
	addLigaMXPartido = function(req, res){
		console.log('POST');
		console.log(req.body);

	var partidoligamx = new LIGAMXpartidos({
		jornada					: req.body.jornada,
		local					: req.body.local,
		goleslocal				: req.body.puntoslocal,
		visitante				: req.body.visitante,
		golesvisitante			: req.body.puntosvisitante,
		resultado				: req.body.resultado,
		estadio					: req.body.estadio
	});


  	partidoligamx.save(function(err) {
  		if(!err) {
  			console.log('Creada');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(partidoligamx);
  };

  //PUT - Actualizar un registro existente

  updatePartido = function(req, res) {
  	LIGAMXpartidos.findById(req.params.id, function(err, partidos) {
		partidos.jornada			: req.body.jornada,
		partidos.local				: req.body.local,
		partidos.goleslocal			: req.body.puntoslocal,
		partidos.visitante			: req.body.visitante,
		partidos.golesvisitante		: req.body.puntosvisitante,
		partidos.resultado			: req.body.resultado,
		partidos.estadio			: req.body.estadio

		partidos.save(function(err) {
			if(!err) {
				console.log('Actualizado');
			} else {
				console.log('ERROR: ' + err);
			}
			res.send(partidos);
		});
  	});
  }

  //DELETE - Borrar un partido especificando un ID

  deletePartido = function(req, res) {
  	LIGAMXpartidos.findById(req.params.id, function(err, partidos) {
  		partidos.remove(function(err) {
  			if(!err) {
  				console.log('Borrado');
  			} else {
  				console.log("ERROR: " + err);
  			}
  		});
  	});
  }

  //Rutas y funciones
  app.get('/ligamx', findAllLigaMXPartidos);
  app.get('/ligamx/:id', findById);
  app.post('/ligamx', addLigaMXPartido);
  app.put('/ligamx/:id', updatePartido);
  app.delete('/ligamx/:id', deletePartido);
}