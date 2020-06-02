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
      googleRequests: 0,
      emailsSended: 0,
      emailsReceived: 0,
      emailsSleep: 0,
      youtubeTime: 0,
      netflixTime: 0,
      snapCount: 0,
      instaCount: 0,

      //data
      gramPerGoogle: 7,
      googleRequestPerSecond: 38000,
      gramPerEmail: 27,
      gramPerEmailSleepDay: 10 / 365,
      emailPerSecond: 3391203,
      gramPerPhoto: 30,
      gramPerStreamHour: 43000,
      snapsPerDay: 40509.26,
      instaPostsPerDay: 100000000,
	  instaLikesPerDay: 4200000000,
	  
	  gramPerKm: 118.5,
    };
  },
  computed: {
    totalGoogle() {
      return this.googleRequests * this.gramPerGoogle;
    },
    totalEmail() {
      return (
        this.emailsSended * this.gramPerEmail +
        this.emailsReceived * this.gramPerEmail * 0.8 +
        this.emailsSleep * this.gramPerEmailSleepDay
      );
    },
    totalSocial() {
      return (
        this.instaCount * this.gramPerPhoto + this.snapCount * this.gramPerPhoto
      );
    },
    totalStream() {
      return (
        this.netflixTime * this.gramPerStreamHour +
        this.youtubeTime * this.gramPerStreamHour
      );
    },
    result() {
      return (
        this.totalGoogle + this.totalEmail + this.totalSocial + this.totalStream
      );
    }
  }
};
</script>
<template>
  <div class="main">
    <div class="simulator">
      <h1>Simulateur d'impact carbone</h1>
      <p>Remplissez les cases en fonction de votre usage du numérique pour déterminer votre impact sur l'environnement.</p>

      <!-- Web -->
      <div class="card">
        <h2>Recherches sur le web</h2>
        <p>
          Une recherche google emet en moyenne {{ gramPerGoogle }} grammes de CO<sub>2</sub>.
        </p>
        <p>
          Chaques secondes, google doit répondre à
          <b>{{ googleRequestPerSecond }}</b> requêtes. Soit
          <b>{{ (googleRequestPerSecond * 60) }}</b> par minutes et plus de
          <b>{{ (googleRequestPerSecond * 60 * 60 / 1000000).toFixed(0) }} millions</b> par heures.
        </p>
        <p>
          Cela a pour effet de dégager
          <b>{{ (gramPerGoogle * googleRequestPerSecond * 60 * 60 / 1000000) }} tonnes</b> de CO<sub>2</sub> chaque heure en permanence.
        </p>
        <h3>Nombres de recherches google par jour.</h3>
        <input type="number" min="0" placeholder="recherches/jour" v-model="googleRequests" />

        <h3>
          <span class="num">{{ totalGoogle }} grammes/jour</span> de CO<sub>2</sub> rejetés avec les recherches Google.
        </h3>
      </div>

      <!-- Email -->
      <div class="card">
        <h2>L'email</h2>
        <p>
          L'envoi d'un email émet en moyenne {{ gramPerEmail }} grammes de CO<sub>2</sub>.
        </p>

        <p>
          Chaques secondes,
          <b>{{ emailPerSecond }}</b> emails sont envoyés. Soit plus de
          <b>{{ (emailPerSecond * 60 * 60 / 1000000000).toFixed(0) }} milliards</b> par heures.
        </p>
        <p>
          Cela a pour effet de dégager plus de
          <b>{{ (gramPerEmail * emailPerSecond * 60 * 60 / 1000000000).toFixed(0) }} kilotonnes</b> de CO<sub>2</sub>
          par heure. ({{ (gramPerEmail * emailPerSecond * 60 * 60 / 1000000).toFixed(2) }} tonnes)
        </p>

        <h3>Nombre d'emails envoyés par jour</h3>
        <input type="number" min="0" placeholder="envoyés/jour" v-model="emailsSended" />
        <h3>Nombre d'emails reçus par jour</h3>
        <input type="number" min="0" placeholder="reçus/jour" v-model="emailsReceived" />
        <h3>Nombre d'emails stockés dans la boîte de reception et autres dossiers</h3>
        <input type="number" min="0" placeholder="emails dans les boîtes" v-model="emailsSleep" />

        <h3>
          <span class="num">{{ totalEmail.toFixed(2) }} grammes/jour</span> de CO<sub>2</sub> à cause des emails.
        </h3>
      </div>

      <!-- Social -->
      <div class="card">
        <h2>Snapchat / Instagram</h2>

        <p>
          Sur Instagram,
          <b>{{ (instaPostsPerDay / 1000000).toFixed(2) }} millions</b> de photos et de vidéos sont publiées par jours. En parallèle,
          <b>{{ (instaLikesPerDay / 1000000000).toFixed(2) }} milliards</b> de likes sont comptabilisés quotidiennement.
        </p>

        <h3>Nombre de photos envoyées par jour sur Instagram</h3>
        <input type="number" min="0" placeholder="photos/jour" v-model="instaCount" />
        <h3>Nombre de photos envoyées par jour sur Snapchat</h3>
        <input type="number" min="0" placeholder="photos/jour" v-model="snapCount" />

        <h3>
          <span class="num">{{ totalSocial.toFixed(0) }} grammes/jour</span> de CO<sub>2</sub> dù à l'envoi de photos sur les réseaux sociaux.
        </h3>
      </div>

      <!-- Streaming -->
      <div class="card">
		<h2>Le streaming</h2>
		<p>Chaque années, YouTube et les plateformes de vidéos eu lignes génèrent 65 millions de tonnes de CO<sub>2</sub>.</p>
		<p>Les services de VOD comme Netflix ou Amazon prime en génèrent quand à eux 102 millions.</p>
		<p>Combinés, ils génèrent plus de 170 millions de tonnes de CO<sub>2</sub> sur une année.</p>
        <h3>YouTube</h3>
        <h3>Temps passé sur YouTube par jour</h3>
        <HourInput v-model="youtubeTime" />
        <h3>Netflix</h3>
        <h3>Temps passé sur Netflix par jour</h3>
        <HourInput v-model="netflixTime" />
        <h3>
          <span class="num">{{ totalStream.toFixed(0) }} grammes/jour</span> de CO<sub>2</sub> regeté par le visionnage de vidéos en ligne.
        </h3>
      </div>
    </div>
    <div class="result card">
      <h2>
        Total de CO<sub>2</sub> rejeté
      </h2>
      <p>
        <span class="num">{{ (result / 1000).toFixed(2) }} Kg/jour</span>
      </p>
	  <p>C'est l'équivalent de {{ (result / gramPerKm).toFixed(0) }} Km en voiture</p>
	  <p>Donc {{ (result / gramPerKm / 85.3).toFixed(0) }} fois Bar-le-Duc/Nancy</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  display: flex;

  .simulator {
    max-width: 800px;
    margin: 0 auto;
  }

  .result {
    width: 300px;
	max-height: calc(100vh - 84px);
	overflow: hidden;
    position: fixed;
    top: 60px;
    right: 0;
  }

  @media screen and (max-width: 760px) {
    display: block;

	.result {
		position: relative;
		width: auto;
		max-height: auto;
	}
  }
}

.num {
  display: inline-block;
  padding: 6px;
  border-radius: 6px;
  background: #ffef24;
  color: black;
  font-weight: bold;
}

input[type="text"],
input[type="number"] {
  width: calc(100% - 24px);
  display: block;
  padding: 6px;
  margin: 12px;
  box-sizing: border-box;
  font-size: 18px;
  background: #333;
  color: white;
  border-radius: 6px;
  border: none;
  font-weight: bold;
}
</style>