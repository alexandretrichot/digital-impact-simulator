const values = {
	kwh: {
		search: 0.000188265,

		email: 0.000235517,

		instagram: 0.002912,
		snapchat: 0.002912,
		tiktok: 0.00448,
		facebook: 0.00289408,

		onlineGame: 0.0001344,
		cloudGaming: 0.04704,

		youtube: 0.10752,
		netflix: 0.08064,
		music: 0.00129024,
	},
	ges: {
		search: 0.097709448,

		email: 0.122233402,

		instagram: 1.511328,
		snapchat: 1.511328,
		tiktok: 2.32512,
		facebook: 1.50202752,

		onlineGame: 0.0697536,
		cloudGaming: 24.41376,

		youtube: 55.80288,
		netflix: 41.85216,

		music: 0.66963456,
	},

	frigoPerYear: 201, // kwh/year  source: https://total.direct-energie.com/particuliers/parlons-energie/dossiers-energie/economie-d-energie/tout-savoir-sur-la-consommation-de-votre-frigo
	gesPerKmInCar: 95, // source https://ree.developpement-durable.gouv.fr/themes/defis-environnementaux/changement-climatique/emissions-de-gaz-a-effet-de-serre/article/les-emissions-de-gaz-a-effet-de-serre-des-transports
}

export default values;

export const types = {
	searches: {
		color: "#00ffed",
		name: "Recherches"
	},
	emails: {
		color: "#0077ff",
		name: "E-mails"
	},
	socials: {
		color: "#ab00ff",
		name: "Réseaux sociaux"
	},
	games: {
		color: "#ff0051",
		name: "Jeux vidéo"
	},
	streaming: {
		color: "#ff8f00",
		name: "Streaming"
	},
}