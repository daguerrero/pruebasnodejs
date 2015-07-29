//Archivo: routes/nfl.js 
module.exports = function(app) {

	var NFLpartidos = require('../models/nfl.js')

	//GET - Regresa todos los partidos en la BD
	findAllNFLPartidos = function(req, res) {
		NFLpartidos.find(function(err, partidos) {
			if(!err){
				console.log('GET /nfl')
				res.send(partidos);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	//GET - Regresa un partido en especifico (ID)
	findById = function(req, res) {
		NFLpartidos.findById(req.params.id, function(err, partidos) {
			if(!err){
				console.log('GET /nfl/' + req.params.id);
				res.send(partidos);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

	//POST - Mete un nuevo partido a la base de datos
	addNFLPartido = function(req, res){
		console.log('POST');
		console.log(req.body);

	var partidonfl = new NFLpartidos({
		jornada					: req.body.jornada,
		local					: req.body.local,
		puntoslocal				: req.body.puntoslocal,
		conferencialocal		: req.body.conferencialocal,
		visitante				: req.body.visitante,
		puntosvisitante			: req.body.puntosvisitante,
		conferenciavisitante	: req.body.conferenciavisitante,
		resultado				: req.body.resultado,
		estadio					: req.body.estadio
	});


  	partidonfl.save(function(err) {
  		if(!err) {
  			console.log('Creada');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(partidonfl);
  };

  //PUT - Actualizar un registro existente

  updatePartido = function(req, res) {
  	NFLpartidos.findById(req.params.id, function(err, partidos) {
  		partidos.jornada 				= req.body.jornada;
		partidos.local					= req.body.local;
		partidos.puntoslocal			= req.body.puntoslocal;
		partidos.conferencialocal		= req.body.conferencialocal;
		partidos.visitante				= req.body.visitante;
		partidos.puntosvisitante		= req.body.puntosvisitante;
		partidos.conferenciavisitante	= req.body.conferenciavisitante;
		partidos.resultado				= req.body.resultado;
		partidos.estadio				= req.body.estadio;

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
  	NFLpartidos.findById(req.params.id, function(err, partidos) {
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
  app.get('/nfl', findAllNFLPartidos);
  app.get('/nfl/:id', findById);
  app.post('/nfl', addNFLPartido);
  app.put('/nfl/:id', updatePartido);
  app.delete('/nfl/:id', deletePartido);

}