var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ligamxpartidosSchema = new Schema({
	jornada: { type: Number},
	local: { type: String, enum:
			["Morelia", "Pumas", "Puebla", "Leon", "Veracruz", "Queretaro", "Pachuca", "Toluca", "Dorados", "Chiapas"
			"Tijuana", "Tigres", "America", "Santos", "Chivas", "Atlas", "Cruz Azul", "Monterrey"]
			},
	goleslocal: { type: Number },
	visitante: { type: String, enum:
			["Morelia", "Pumas", "Puebla", "Leon", "Veracruz", "Queretaro", "Pachuca", "Toluca", "Dorados", "Chiapas"
			"Tijuana", "Tigres", "America", "Santos", "Chivas", "Atlas", "Cruz Azul", "Monterrey"]
			},
	golesvisitante: { type: String },
	resultado: { type: String, enum:
					['Local', 'Visitante', 'Empate', 'Indefinido']
				},
	estadio: { type: String }
});

module.exports = mongoose.model('LIGAMXpartidos', ligamxpartidosSchema);