<script>
import Checkbox from "~/components/Checkbox";

export default {
  name: "SearchEngine",
  props: ["engine"],
  data() {
    return {
      pub: false,
      articles: false,
      data: false,
      eco: false,
      choice: false,
      power: false
    };
  },
  watch: {
    pub() {
      this.majScore();
    },
    articles() {
      this.majScore();
    },
    data() {
      this.majScore();
    },
    eco() {
      this.majScore();
    },
    choice() {
      this.majScore();
    },
    power() {
      this.majScore();
    }
  },
  methods: {
    majScore() {
      this.engine.score =
        (this.pub ? -1 : 0) +
        (this.articles ? -1 : 0) +
        (this.data ? 2 : 0) +
        (this.eco ? (this.choice ? 4 : 3) : 0) +
        (this.power ? 1 : 0);
    }
  },
  mounted(){
	  this.majScore();
  },
  components: {
    Checkbox
  }
};
</script>
<template>
  <div class="card">
    <img class="logo" :src="engine.logo" :alt="engine.name + ' logo'" />
    <a :href="engine.url" target="_blank">Voir le moteur</a>
    <Checkbox v-model="pub">{{ engine.name }} affiche de la publicité.</Checkbox>
    <Checkbox v-model="articles">{{ engine.name }} propose des articles à lire.</Checkbox>
    <Checkbox v-model="data">{{ engine.name }} ne sauvegarde pas de données sur ses utilisateurs.</Checkbox>
    <Checkbox
      v-model="eco"
    >{{ engine.name }} mène des actions pour l'environnement ou reverse des fonds à des associations.</Checkbox>
    <Checkbox
      v-if="eco"
      v-model="choice"
    >{{ engine.name }} premet de choisir à qui reverser les fonds générés par les recherches des utilisateurs.</Checkbox>
    <Checkbox v-model="power">{{ engine.name }} est alimenté par des énergies renouvelables.</Checkbox>
	<p>Score de {{ engine.name }} : {{ engine.score || 0 }}</p>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  display: block;
  height: 60px;
  margin: 12px;
}
</style>