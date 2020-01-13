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
  components: {
    Checkbox
  }
};
</script>
<template>
  <div>
    <h3>{{engine.name}}</h3>
    <a :href="engine.url" target="_blank">Voir le moteur</a>
    <Checkbox v-model="pub">{{ engine.name }} affiche de la publicité.</Checkbox>
	<Checkbox v-model="articles">{{ engine.name }} propose des articles à lire.</Checkbox>
	<Checkbox v-model="data">{{ engine.name }} sauvegarde des données sur ses utilisateurs.</Checkbox>
	<Checkbox v-model="eco">{{ engine.name }} mène des actions pour l'environnement ou reverse des fonds à des associations.</Checkbox>
	<Checkbox v-if="eco" v-model="choice">{{ engine.name }} premet de choisir à qui reverser les fonds générés par les recherches des utilisateurs.</Checkbox>
	<Checkbox v-model="power">{{ engine.name }} est alimenté par des énergies renouvelables.</Checkbox>
  </div>
</template>
<style lang="scss" scoped>
</style>