# [Pollution Numérique](https://numerique.meusenature.fr/)

![screenshot](screenshot.png)

Simulateur de consommation électrique et d'émission de GES sur l'utilisation de services en ligne.

Ce simulateur a été développé à l'initiative de [Meuse Nature Environnement](https://meusenature.fr/)

Le simulateur est accessible au public ici: [numerique.meusenature.fr](https://numerique.meusenature.fr/)

## Sources

Liste rapide des sources utilisées pour les données du projet :

- [Consommation d'un frigo](https://total.direct-energie.com/particuliers/parlons-energie/dossiers-energie/economie-d-energie/tout-savoir-sur-la-consommation-de-votre-frigo)
- [Émission de GES d'une voiture](https://ree.developpement-durable.gouv.fr/themes/defis-environnementaux/changement-climatique/emissions-de-gaz-a-effet-de-serre/article/les-emissions-de-gaz-a-effet-de-serre-des-transports)

| Service             | Source                                                       | kWh pour 1 unité | GES (en g) pour 1 unité |
| ------------------- | ------------------------------------------------------------ | ---------------- | ----------------------- |
| Recherches internet | Test avec les DevTools de Chrome avec le cache désactivé sur Google | 0,000188265 kWh  | 0,097709448 g           |
| Email               | Analyse d’une boite mail perso de 12,29 Go pour 11689 emails | 0,000235517 kWh  | 0,122233402 g           |
| Instagram           | Mesure de la consommation internet sur un terminal iPhone dans l’espace de 5 minutes. | 0,002912 kWh     | 1,511328 g              |
| Snapchat            | Mesure de la consommation internet sur un terminal iPhone dans l’espace de 5 minutes. | 0,002912 kWh     | 1,511328 g              |
| TikTok              | Mesure de la consommation internet sur un terminal iPhone dans l’espace de 5 minutes. | 0,00448 kWh      | 2,32512 g               |
| Facebook            | Mesure de la consommation internet sur un terminal iPhone dans l’espace de 5 minutes. | 0,00289408 kWh   | 1,50202752 g            |
| Jeux en ligne       | Moyenne de consommation d'une partie de jeu en ligne sur Fortnite. | 0,0001344 kWh    | 0,0697536 g             |
| Cloud Gaming        | Pour une utilisation de Stadia en qualitée 1080p à 60 fps Pour une source : https://support.google.com/stadia/answer/9607891?hl=en | 0,04704 kWh      | 24,41376 g              |
| YouTube             | Pour une vidéo en 1080p 60 fps à 6000 kbps source: https://support.google.com/youtube/answer/2853702?hl=fr | 0,10752 kWh      | 55,80288 g              |
| Netflix             | Pour une vidéo en HD à 5Mb/s source : https://help.netflix.com/fr/node/306 | 0,08064 kWh      | 41,85216 g              |
| Musique             | Pour une qualité en 'Normal' à 96kbps source : https://support.spotify.com/us/article/high-quality-streaming/ | 0,00129024 kWh   | 0,66963456 g            |

Les chiffres indiqués si dessus ont été calculés avec le [model "1byte"](https://theshiftproject.org/wp-content/uploads/2018/10/Lean-ICT-Materials-1byte-Model-2018.xlsx) mis au point par The Shift Project

