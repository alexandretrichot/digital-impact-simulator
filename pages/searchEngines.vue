<script>
import SearchEngine from "~/components/SearchEngine";

export default {
  components: {
    SearchEngine
  },
  data() {
    return {
      engines: [
        {
          id: 0,
          name: "Google",
          url: "https://google.com/"
        },
        {
          id: 1,
          name: "Bing",
          url: "https://bing.com/"
        },
        {
          id: 2,
          name: "Ecosia",
          url: "https://ecosia.org/"
        },
        {
          id: 3,
          name: "Lilo",
          url: "https://www.lilo.org/"
        },
        {
          id: 4,
          name: "Qwant",
          url: "https://www.qwant.com/"
        },
        {
          id: 5,
          name: "Yahoo",
          url: "https://fr.yahoo.com/"
        },
        {
          id: 6,
          name: "Orange",
          url: "https://www.orange.fr/"
        },
        {
          id: 7,
          name: "Startpage",
          url: "https://www.startpage.com/"
        },
        {
          id: 8,
          name: "DuckDuckGo",
          url: "https://duckduckgo.com/"
        }
      ]
    };
  }
};
</script>
<template>
  <div class="container">
    <div class="searches">
      <h2>Comparez les moteurs de recherche.</h2>
      <p>
        Un des outils numériques le plus utile de notre quotidien est le moteur de recherche. Au dela de Google, il en existe un certain nombre.
        <br />Mais tous ne se valent pas !
      </p>
      <p>Essayez de naviguer et de chercher des informations sur chacun d'entre eux afin de trouver celui qui vous parrait être le meilleur de tous.</p>
      <SearchEngine v-for="engine of engines" :key="engine.id" :engine="engine" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 12px;
}
.searches {
  max-width: 800px;
  margin: 0 auto;
}
</style>