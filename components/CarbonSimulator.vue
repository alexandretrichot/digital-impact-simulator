<script>
import HourInput from "~/components/HourInput";
export default {
  name: "CarbonSimulator",
  components: {
    HourInput
  },
  data() {
    return {
		//user
		googleRequests: 4,
		emailsSended: 6,
		emailsReceived: 12,
		youtubeTime: 2.25,
		netflixTime: 4,

		//data
		gramPerGoogle: 7,
		googleRequestPerSecond: 38000,
		gramPerEmail: 27,
		emailPerSecond: 3391203,
		gramPerPhotos: 30,
		snapsPerDay: 40509.26,

	};
  },
  computed: {
	  
  }
};
</script>
<template>
  <div class="main">
    <h1>Simulateur d'impact carbone numérique</h1>
    <p>Remplissez les cases en fonction de votre usage du numérique pour déterminer votre impact sur l'environnement.</p>
    <div class="card">
      <h2>Recherches sur le web</h2>
	  <p>Une recherche google emet en moyenne {{ gramPerGoogle }} grammes de CO<sub>2</sub>.</p>
	  <p>Chaques secondes, google doit répondre à <b>{{ googleRequestPerSecond }}</b> requêtes. Soit <b>{{ (googleRequestPerSecond * 60) }}</b> par minutes et plus de <b>{{ (googleRequestPerSecond * 60 * 60 / 1000000).toFixed(0) }} millions</b> par heures.</p>
	  <p>Cela a pour effet de dégager <b>{{ (gramPerGoogle * googleRequestPerSecond * 60 * 60 / 1000000) }} tonnes</b> de CO<sub>2</sub> chaque heure en permanence.</p>
	  <h3>Nombres de recherches google par jour.</h3>
	  <input type="number" min="0" placeholder="emails/jour" v-model="googleRequests" />
    </div>
	<div class="card">
      <h2>Communications</h2>
	  <h3>L'email</h3>
	  <p>L'envoi d'un email emet en moyenne 27 grammes de CO<sub>2</sub>.</p>

	  <p>Chaques secondes, <b>{{ emailPerSecond }}</b> sont envoyés. Soit plus de <b>{{ (emailPerSecond * 60 * 60 / 1000000000).toFixed(0) }} milliards</b> par heures.</p>
	  <p>Cela a pour effet de dégager plus de <b>{{ (gramPerEmail * emailPerSecond * 60 * 60 / 1000000000).toFixed(0) }} kilotonnes</b> de CO<sub>2</sub> par heure. ({{ (gramPerEmail * emailPerSecond * 60 * 60 / 1000000) }} tonnes)</p>

	  <h3>Nombre d'emails envoyés par jour</h3>
	  <input type="number" min="0" placeholder="emails/jour" v-model="emailsSended" />
	  <h3>Nombre d'emails reçus par jour</h3>
	  <input type="number" min="0" placeholder="emails/jour" v-model="emailsReceived" />

	  <h3>Snapchat / Instagram</h3>
    </div>
	<div class="card">
      <h2>Les vidéos</h2>
	  <h3>YouTube</h3>
	  <h3>Temps passé sur YouTube par jour</h3>
      <HourInput v-model="youtubeTime" />
	  <h3>Netflix</h3>
	  <h3>Temps passé sur Netflix par jour</h3>
      <HourInput v-model="netflixTime" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  h1,
  h2,
  h3,
  h4,
  p,
  input,
  .input {
    margin: 12px;
  }

  input {
  }
}

.card {
  display: block;
  background: white;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  overflow: hidden;
  padding: 12px;
  margin: 12px;
}
</style>