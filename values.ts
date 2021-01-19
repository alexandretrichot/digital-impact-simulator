export default { // all values are in bytes/minute or bytes/hit
  /* bytes: {
    spotify: 1638,
    youtube: 102400,
    netflix: 87381,
    onlineGame: 10,
    cloudGaming: 170667,
    email: 0,

    search: 821,
    instagram: 0,
    snapchat: 0,
  }, */
  kwh: {
    search: 0.000183852,
    email: 0.000235517,

    spotify: 0.00129024,
    youtube: 0.08064,
    netflix: 0.0672,
    onlineGame: 0.0001344,
    cloudGaming: 0.1344,
    instagram: 0.17472,
    snapchat: 0.17472,
  },
  ges: {
    search: 0.095419383,
    email: 0.122233402,

    spotify: 0.66963456,
    youtube: 41.85216,
    netflix: 34.8768,
    onlineGame: 0.0697536,
    cloudGaming: 69.7536,
    instagram: 90.67968,
    snapchat: 90.67968,
  },

  frigoPerYear: 201, // kwh/year  source: https://total.direct-energie.com/particuliers/parlons-energie/dossiers-energie/economie-d-energie/tout-savoir-sur-la-consommation-de-votre-frigo
  gesPerKmInCar: 95, // source https://ree.developpement-durable.gouv.fr/themes/defis-environnementaux/changement-climatique/emissions-de-gaz-a-effet-de-serre/article/les-emissions-de-gaz-a-effet-de-serre-des-transports
}

export const types: any = {
  searches: {
    color: "#00ffed",
    name: "Recherches"
  },
  emails: {
    color: "#0077ff",
    name: "Emails"
  },
  social: {
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