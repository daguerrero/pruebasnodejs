	var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var nflpartidosSchema = new Schema({
	jornada: { type: Number},
	local: { type: String, enum:
			["Buffalo Bills", "New York Jets", "New England Patriots", "Miami Dolphins",
			"Baltimore Ravens", "Pittsburgh Steelers", "Cleveland Browns", "Cincinnati Bengals",
			"Tennessee Titans", "Jacksonville Jaguars", "Indianapolis Colts", "Houston Texans",
			"Denver Broncos", "San Diego Chargers", "Oakland Raiders", "Kansas City Chiefs",
			"Dallas Cowboys", "Washington Redskins", "Philadelphia Eagles", "New York Giants",
			"Chicago Bears", "Minnesota Vikings", "Green Bay Packers", "Detroit Lions",
			"Atlanta Falcons", "Tampa Bay Buccaneers", "New Orleans Saints", "Carolina Panthers",
			"St. Louis Rams", "Seattle Seahawks", "San Francisco 49ers", "Arizona Cardinals"]
			},
	puntoslocal: { type: Number },
	conferencialocal: { type: String, enum:
						['Americana', 'Nacional']
	 				},
	visitante: { type: String, enum:
			["Buffalo Bills", "New York Jets", "New England Patriots", "Miami Dolphins",
			"Baltimore Ravens", "Pittsburgh Steelers", "Cleveland Browns", "Cincinnati Bengals",
			"Tennessee Titans", "Jacksonville Jaguars", "Indianapolis Colts", "Houston Texans",
			"Denver Broncos", "San Diego Chargers", "Oakland Raiders", "Kansas City Chiefs",
			"Dallas Cowboys", "Washington Redskins", "Philadelphia Eagles", "New York Giants",
			"Chicago Bears", "Minnesota Vikings", "Green Bay Packers", "Detroit Lions",
			"Atlanta Falcons", "Tampa Bay Buccaneers", "New Orleans Saints", "Carolina Panthers",
			"St. Louis Rams", "Seattle Seahawks", "San Francisco 49ers", "Arizona Cardinals"]
			},
	puntosvisitante: { type: String },
	conferenciavisitante: { type: String, enum:
						['Americana', 'Nacional']
	 				},
	resultado: { type: String, enum:
					['Local', 'Visitante', 'Empate']
				},
	estadio: { type: String }
});

module.exports = mongoose.model('NFLpartidos', nflpartidosSchema);