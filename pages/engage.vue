<script>
import Engagement from "~/components/Engagement";

export default {
  components: {
    Engagement
  },
  data() {
    return {
      e: [
        "Changer de moteur de recherche pour un moteur plus responsable.",
        "Passer moins de temps sur YouTube.",
		"Passer moins de temps sur Netflix.",
		"Taper directement le nom du site dans la barre d'adresse du navigateur.",
		"S'organiser pour regarder des vidéos à plusieurs.",
		"Réduire la qualité des vidéos regardées.",
		"Réduire le nombre de photos inutiles dans les conversations.",
		"Éviter au maximum de \"Répondre à tous\" dans les emails.",
		"Envoyer des messages les plus courts possibles.",
		"Réduire la luminosité de l'écran.",
		"Utiliser le \"Mode nuit\".",
		"Préferer stocker mes photos et vidéos sur mon ordinateur plutôt que \"dans le cloud\".",
		"faire du tri dans ses photos, vidéos, messages, emails.",
		"Couper le reseau le plus souvent possible.",
		"Utiliser des appareils moins gourmands en energie (smartphone plutôt qu'ordinateur).",
		"Réparer mes appareils plutôt que de les changer.",
		"Proteger son téléphone pour le garder plus longtemps.",
		"Revendre ou recycler les appareils ne fonctionnants plus dormant dans vos tiroirs"
      ],
      engagements: []
    };
  },
  mounted() {
    this.engagements = this.e.map(engagement => ({
      text: engagement,
      score: undefined,
      used: false
    }));
  },
  computed: {
    total() {
      let score = this.engagements
        .map(engagement => engagement.score)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      return score;
    },
    finished() {
      return this.engagements.length > 0
        ? this.engagements
            .map(engagement => {
              return engagement.used;
            })
            .reduce((a, b) => a && b)
        : 0;
    }
  }
};
</script>
<template>
  <div class="container">
    <div class="engage">
      <h2>Mes engagements.</h2>
      <p class="noprint">Voici une liste d'engagements que vous pouvez choisir de tenir ou non. Le but serait que vous puissiez déterminer ce que vous pouvez faire dès à présent pour ameliorer votre impact du numérique.</p>
      <Engagement
        v-for="(engagement, index) of engagements"
        :key="index"
        :index="index"
        :engagement="engagement"
      />
      <h2 v-if="finished">Score total {{ total }}</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 12px;
}
.engage {
  max-width: 800px;
  margin: 0 auto;
}
</style>