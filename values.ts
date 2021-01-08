export default {
  gramPerSearch: 7,
  gramPerEmail: 27,
  gramPerEmailSleep: 10 / 365,
  gramPerPhoto: 30,
  gramPerGameMinute: 0,
  gramPerStreamMinute: 43000 / 60,

  bytesPerSpotifyStreamMinute: 96 * 60 * 1024, // Pour une qualité en 'Normal' à 96kbps source : https://support.spotify.com/us/article/high-quality-streaming/
  bytesPerYoutubeMinute: 6000 * 60 * 1024, // Pour une vidéo en 1080p 30 fps à 6000 kbps source: https://support.google.com/youtube/answer/2853702?hl=fr
  bytesPerNetflixMinute: 5 * 60 * 1024, // Pour une vidéo en HD à 5mo/s source : https://help.netflix.com/fr/node/306
  bytesPerSearch: 296452 + 544016,
  bytesPerOnlineGameMinute: 10 * 1024, // Moyenne de consommation d'une partie de jeu en ligne sur Fortnite.
  bytesPerCloudGamingMinute: 12.6 / 60 * 1024 * 1024 * 1024, // Pour une utilisation de Stadia en qualitée 1080p à 60 fps Pour une  source : https://support.google.com/stadia/answer/9607891?hl=en
  
  

  //mo

  gramPerKm: 118.5
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
    name: "Jeux en ligne"
  },
  streaming: {
    color: "#ff8f00",
    name: "Vidéos à la demande"
  },
}