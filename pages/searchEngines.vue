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
		  logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          url: "https://google.com/"
        },
        {
          id: 1,
		  name: "Bing",
		  logo: "https://vignette.wikia.nocookie.net/logopedia/images/e/ee/Bing_2016.svg/revision/latest/scale-to-width-down/250?cb=20160115161107",
          url: "https://bing.com/"
        },
        {
          id: 2,
		  name: "Ecosia",
		  logo: "https://upload.wikimedia.org/wikipedia/fr/1/11/Ecosia_logo.png",
          url: "https://ecosia.org/"
        },
        {
          id: 3,
		  name: "Lilo",
		  logo: "https://www.lilo.org/wp-content/themes/jarvis_wp/colibri/assets/img/logo.svg",
          url: "https://www.lilo.org/"
        },
        {
          id: 4,
		  name: "Qwant",
		  logo: "https://vignette.wikia.nocookie.net/logopedia/images/f/fd/Qwant_Logo_2018.svg/revision/latest/scale-to-width-down/300?cb=20190927162354",
          url: "https://www.qwant.com/"
        },
        {
          id: 5,
		  name: "Yahoo",
		  logo: "https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png",
          url: "https://fr.yahoo.com/"
        },
        {
          id: 6,
		  name: "Orange",
		  logo: "https://c.woopic.com/logo-orange.png",
          url: "https://www.orange.fr/"
        },
        {
          id: 7,
		  name: "Startpage",
		  logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNjIuNzUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNjIuNzUiPjxwYXRoIGZpbGw9IiMzNzQ2NzciIGQ9Ik0yMzEuNzQsMjguNTZhNy4zNyw3LjM3LDAsMCwxLTIuMjEtLjM1bC4wNiwyLjA5YTExLjY4LDExLjY4LDAsMCwwLDQuNDIuODJjNS40NiwwLDkuMTItMy4xNCw5LjEyLTcuNjcsMC00LjM2LTMuNjYtOC4xNy05Ljg4LTguMTctOC41NCwwLTEzLjgzLDctMTMuODMsMTUuMzcsMCw4LjE0LDUsMTMuMTMsMTIuNTUsMTMuMTMsNS44NywwLDkuNjUtMi43OCwxMS00LjQxbC0uNTgtMi4xNUExMS4xNiwxMS4xNiwwLDAsMSwyMzYsMzkuMzFjLTQuMzYsMC04LjY2LTIuMDktOC42Ni0xMC40LDAtNywyLjIxLTExLDUuNDEtMTEsMi4xNSwwLDMuNzIsMS41NywzLjcyLDQuODIsMCwzLjk1LTEuODYsNS44MS00LjcxLDUuODEiLz48cGF0aCBmaWxsPSIjMzc0Njc3IiBkPSJNNjguNywyNy4yNCw2MSwyOS41MWMtNC40MiwxLjM0LTYuNjgsMy42Ni02LjY4LDcuMjYsMCwzLjg0LDMsNyw3LjcyLDcsNC4xOSwwLDYuNzQtMS44Niw4LTMuNTUuNDEsMS43NCwxLjc1LDMuNiw1LjA2LDMuNiwyLjY3LDAsNC41LS43NSw2LTIuNTVsLS43LTEuNTdhMS41MSwxLjUxLDAsMCwxLTEuMTMuNDZjLTEsMC0xLjY4LS41Mi0xLjY4LTEuOTFWMjIuNmMwLTUtMy41NS03LjM2LTkuNTktNy4zNi03LjE1LDAtMTIuODQsMy4zNS0xMi44NCw3LjA3LDAsMS45MSwxLjUxLDMsMy40OSwzYTcuMTgsNy4xOCwwLDAsMCwxLjI1LS4xM0EyLjc0LDIuNzQsMCwwLDAsNjIsMjIuNVYyMS4zMmMwLTIuMTUuOTMtMy4yNiwzLjYxLTMuMjYsMi4zOCwwLDQuMywxLjA1LDQuMyw0LjU0djMuMjVjMCwuOTMtLjI5LDEuMTYtMS4yMiwxLjM5bTEuMjIsOC44OWMwLDIuMzMtMS40NiwzLjU1LTMuNjYsMy41NS0yLjQ1LDAtNC4xOS0xLjQtNC4xOS00LDAtMi4yNywxLjI4LTQuMDcsNC01LjIzbDMuODQtMS41MVoiLz48cGF0aCBmaWxsPSIjMzc0Njc3IiBkPSJNMjA5LDM4LjI0bC04LjA3LS4xMmMtMS45Mi0uMDYtMy4xNC0uNzYtMy4xNC0yLjU2YTMuNTcsMy41NywwLDAsMSwuNzYtMS45MSwxNi40NywxNi40NywwLDAsMCw1LjM0LjgxYzcuOSwwLDEyLjM4LTQuMzYsMTIuMzgtOS41OWE4LjcxLDguNzEsMCwwLDAtNC4zLTcuNDRsLS41Mi0uM2E3Ljc3LDcuNzcsMCwwLDAtLjktLjQ4bC0uNDQtLjJhMTMuNjgsMTMuNjgsMCwwLDAtMi4zNy0uNzJsLS4zMy0uMDZjLjctMS4xMiwzLjUyLTYuNDQsNi40Ny03LjQ2LDEuMDctLjM3LDEuODEuMTIsMywxLjE2Ljc4LjcsMS40MywxLjgyLDMuMjksMS44MnM0LjE3LTEuOTMsNC4xNy00LS41My00Ljc4LTUuMjEtNC43OGMtNi41MywwLTEwLjc0LDYuNzYtMTMuMTIsMTEuNDEsMCwwLS41NywxLjE5LS43MSwxLjU0LS40NSwwLS45LS4wNS0xLjM3LS4wNS03Ljg0LDAtMTIuMzIsNC40Mi0xMi4zMiw5LjUzYTguODUsOC44NSwwLDAsMCw1LjA2LDhjLTEuNTcsMS40Ni00LDMuNDQtNCw1LjU4YTUuMTIsNS4xMiwwLDAsMCwyLjE5LDQuMzZBOC4zLDguMywwLDAsMCwxOTcuNTUsNDRhMjMuMjUsMjMuMjUsMCwwLDAsMy44OS42bDQuNTMuMTdjMy41NS4xMiw1LjkzLDEuMDUsNS45Myw0LjA3LDAsMy41NC00LDUuNjQtOS41Myw1LjY0LTQuNDcsMC03Ljg0LTEuNjktNy44NC00Ljg4YTQuNDcsNC40NywwLDAsMSwyLjM5LTMuOTNjLTEuMjQtLjQ0LTIuMzUtLjg4LTMuMjktMS4xNC0yLjgsMS4yOS00LDMuMTUtNCw1LjQxLDAsMy44NCw0LjEyLDcsMTEuNjIsNywxMC44NiwwLDE3LjE0LTUuNTgsMTcuMTQtMTEuMzksMC01LjEyLTMuOS03LjI3LTkuNDItNy4zMm0tNS4wNS0yMC41N2MzLjU0LDAsNC42NSwyLjg0LDQuNjUsNy4ycy0xLjExLDcuMjctNC42NSw3LjI3LTQuNTktMi44NS00LjU5LTcuMjcsMS4wNS03LjIsNC41OS03LjIiLz48cGF0aCBmaWxsPSIjMzc0Njc3IiBkPSJNMzUuMzgsMzcuMzVjMCwzLjE0LDIsNi40NSw3LjY3LDYuNDVhOS42OSw5LjY5LDAsMCwwLDktNS41MmwtMS40Ni0xLjE2YTUuNDEsNS40MSwwLDAsMS00LjI0LDIuMjdjLTEuODYsMC0zLjMxLTEtMy4zMS0zLjE0VjIwaDcuNTVWMTcuMjFINDNWOS4wNkg0MC4zMmMtLjI5LDMuNDItMy44NCw4LjQ5LTguNjYsOC43M1YyMGgzLjcyWiIvPjxwYXRoIGZpbGw9IiMzNzQ2NzciIGQ9Ik05LjU1LDMwLjc4Yy4xMi0uNjUuMTYtMi4wNS0uNDQtMi41MUEyLjMsMi4zLDAsMCwwLDgsMjcuNzRjLTQuNzctLjY0LTguMDgsNy44Mi00LjUsMTEuNSwyLjI4LDIuMzUsNS4zOCw0LjIyLDExLjEyLDQuNTYsMTAsLjYsMTUuOC01LjIxLDE2LjItMTEuODguMzgtNi4yLTQuMjEtOS4yMi0xMC40OC0xMi41NmwtNC4yNC0yLjA3Yy0zLjYxLTItNS40OC0zLjY1LTUuMzUtNi45LjMzLTQuNDEsNC02LjY0LDgtNi4yMiwzLjU4LjM4LDMuODMsMi40NSwzLjcyLDUuMTdMMjIuMzIsMTJhMS44NiwxLjg2LDAsMCwwLDEuNzQsMmMyLjQ0LjE1LDUuMzYtMSw1LjU1LTQuMTUuMjEtMy41OS0xLjg5LTcuNDktMTAuNTktOEM5LjYyLDEuMjQsMy44Myw2LjYsMy40OCwxMi40NWMtLjMsNC45MywyLjE5LDguMTEsNy45NCwxMS4xOWw0LjUyLDIuMjZjNC40LDIuNDIsNyw0LjM5LDYuNzIsOC41N3MtMi4zMiw3LjM0LTcuNTIsNi44LTUuNzItNS4xNS01LjgzLTYuODhhOC44MSw4LjgxLDAsMCwxLDAtLjg5LDE5LjE4LDE5LjE4LDAsMCwxLC4yNi0yLjcyIi8+PHBhdGggZmlsbD0iIzM3NDY3NyIgZD0iTTg2LjkyLDIyLjE0VjM3LjYxYzAsMi40NC0uNDEsMy4zNy0yLjc0LDMuMzdoLTFWNDMuM2gxNS44VjQxSDk3Ljc4Yy0yLjM4LDAtMy4yNS0uOTMtMy4yNS0zLjM3VjIzYTMzLjEyLDMzLjEyLDAsMCwxLDQuMDYtMyw0LjA5LDQuMDksMCwwLDAsNC4yNSwzLjY2QTQuMTksNC4xOSwwLDAsMCwxMDcsMTkuNTJjMC0yLjI2LTEuNjMtNC4yNC00LjY1LTQuMjQtMi4yMSwwLTUuNTIsMS41Ny03LjksNC44OFYyMGMwLTIuMjEtMS41Ny00LjQ4LTUuMzUtNC40OGExOS4xMSwxOS4xMSwwLDAsMC02LjUsMS4yOHYyLjE1YTcuMTksNy4xOSwwLDAsMSwxLjUxLS4xN2MyLDAsMi44NSwxLjMzLDIuODUsMy4zNyIvPjxwYXRoIGZpbGw9IiMzNzQ2NzciIGQ9Ik0xMjMuNTUsMzkuMzljLTEuODYsMC0zLjMxLTEtMy4zMS0zLjE0VjIwaDcuNTVWMTcuMmgtNy41NVY5LjA2aC0yLjY4Yy0uMjksMy40My0zLjgzLDguNDktOC42Niw4LjczVjIwaDMuNzJWMzcuMzVjMCwzLjE0LDIsNi40NSw3LjY3LDYuNDVhOS42Nyw5LjY3LDAsMCwwLDktNS41MmwtMS40NS0xLjE2YTUuNDMsNS40MywwLDAsMS00LjI0LDIuMjciLz48cGF0aCBmaWxsPSIjMzc0Njc3IiBkPSJNMjQ4LjI1LDM4LjEyQTIuODQsMi44NCwwLDEsMCwyNTEuMTIsNDFhMi44MiwyLjgyLDAsMCwwLTIuODctMi44MyIvPjxwYXRoIGZpbGw9IiMzNzQ2NzciIGQ9Ik0yNjQuNDQsNDEuMTZjLTIuNTUsMC01LjUzLTEuMjktNS41My02LjU3LDAtNC44NSwxLjYyLTYuNjgsMy44MS02LjY4LDEuMTEsMCwxLjU0LjQzLDEuNTQsMS42MnYxLjY1YTMsMywwLDAsMCwxLjg3LjY1LDIuMTQsMi4xNCwwLDAsMCwyLjM0LTIuMTJjMC0xLjY5LTItMy4yNy01LjYxLTMuMjctNS4yLDAtOC43OSwzLjc3LTguODMsOS40MSwwLDQuODEsMy4xMiw3LjkzLDcuOTQsNy45M2E5LjUzLDkuNTMsMCwwLDAsNi42OC0yLjU0bC0uMjktMS4zYTcsNywwLDAsMS0zLjkyLDEuMjIiLz48cGF0aCBmaWxsPSIjMzc0Njc3IiBkPSJNMjc5LjEzLDI2LjQ0YTguMzQsOC4zNCwwLDAsMC04LjU1LDguNjksOC41Myw4LjUzLDAsMSwwLDE3LjA2LDAsOC4zMyw4LjMzLDAsMCwwLTguNTEtOC42OW0wLDE1LjhjLTIuMjMsMC0zLjU2LTEuNzYtMy41Ni03LjExUzI3Ni45LDI4LDI3OS4xMywyOHMzLjUyLDEuNzYsMy41Miw3LjE0LTEuMzMsNy4xMS0zLjUyLDcuMTEiLz48cGF0aCBmaWxsPSIjMzc0Njc3IiBkPSJNMzE3LjUsNDEuODhjLTEuMjIsMC0xLjY1LS41Ny0xLjY1LTIuMDhWMzAuMzJjMC0yLjQxLTEuNTEtMy44OC00LjM1LTMuODhhOS43Miw5LjcyLDAsMCwwLTYuMTcsMi42MmMtLjM2LTEuMzYtMS44NC0yLjYyLTQuMjEtMi42MmE4Ljk0LDguOTQsMCwwLDAtNS44MSwyLjYybC4xLTIuNjJoLTEuMThjLTEsLjc2LTMuMiwxLjM3LTUuODksMS4zN3YxLjQzaDEuMDhjLjkzLDAsMS4yMi4yOSwxLjIyLDEuMTVWMzkuOGMwLDEuNTEtLjI1LDIuMDgtMS42OSwyLjA4aC0uNjV2MS40NGg5LjMxVjQxLjg4aC0uNTFjLTEuNDcsMC0xLjc2LS42MS0xLjc2LTIuMDhWMzEuNDdjMC0xLjQ0LDEuMzMtMi4yNiwzLTIuMjZzMi41OS43OSwyLjU5LDIuNjl2Ny45YzAsMS41MS0uMzMsMi4wOC0xLjczLDIuMDhoLS4zOXYxLjQ0aDlWNDEuODhoLS41OGMtMS4yMiwwLTEuNjUtLjU3LTEuNjUtMi4wOFYzMS40N2MwLTEuNDQsMS4zMy0yLjI2LDMtMi4yNnMyLjU1Ljc5LDIuNTUsMi42OXY3LjljMCwxLjUxLS4yOSwyLjA4LTEuNjksMi4wOGgtLjM5djEuNDRIMzE4VjQxLjg4WiIvPjxwYXRoIGZpbGw9IiMzNzQ2NzciIGQ9Ik0xNDkuNzQsMTUuMmExMS43NCwxMS43NCwwLDAsMC04LjA4LDMuMTRsLjE3LTMuMTRoLTJjLTEuNTcsMS4yMi01LjEyLDIuMjEtOS40NywyLjIxdjIuMzJoMS43NGMxLjUxLDAsMiwuNDcsMiwxLjg2VjUxLjcyYzAsMi40NC0uNDEsMy4zMS0yLjc5LDMuMzFoLTFWNTcuM2gxNS44NlY1NWgtMS41MWMtMi4zMiwwLTIuOS0xLTIuOS0zLjM3VjIyLjUyYzAtMi4zOCwxLjc0LTMuNzIsNC40MS0zLjcyLDMuNjEsMCw2LjkyLDIuODUsNi45MiwxMS4xLDAsNy42MS0zLjA5LDExLjEtNi43OCwxMS4zOS0uNTguMDUtMS4wNS4wNi0xLjU2LjA2djJhMTcuMjgsMTcuMjgsMCwwLDAsMi4wNi4xMmM4LjM3LDAsMTQuMy01Ljc1LDE0LjMtMTUuMjIsMC04LTQuODgtMTMuMDctMTEuMzMtMTMuMDciLz48cGF0aCBmaWxsPSIjMzc0Njc3IiBkPSJNMTkwLjMxLDQxLjI1bC0uNy0xLjU3YTEuNTEsMS41MSwwLDAsMS0xLjEzLjQ2Yy0xLDAtMS42OC0uNTItMS42OC0xLjkxVjIyLjZjMC01LTMuNTUtNy4zNi05LjU5LTcuMzYtNy4xNSwwLTEyLjg0LDMuMzUtMTIuODQsNy4wNywwLDEuOTEsMS41MSwzLDMuNDgsM2E3LDcsMCwwLDAsMS4yNS0uMTMsMi43NCwyLjc0LDAsMCwwLDIuMTgtMi43VjIxLjMyYzAtMi4xNS45My0zLjI2LDMuNi0zLjI2LDIuMzksMCw0LjMsMS4wNSw0LjMsNC41NHYzLjI1YzAsLjkzLS4yOSwxLjE2LTEuMjIsMS4zOWwtNy42NywyLjI3Yy00LjQxLDEuMzQtNi42OCwzLjY2LTYuNjgsNy4yNiwwLDMuODQsMyw3LDcuNzMsNyw0LjE4LDAsNi43NC0xLjg2LDgtMy41NS40MSwxLjc0LDEuNzQsMy42LDUsMy42YTcsNywwLDAsMCw2LTIuNTVtLTExLjEzLTUuMTJjMCwyLjMzLTEuNDUsMy41NS0zLjY2LDMuNTUtMi40NCwwLTQuMTgtMS40LTQuMTgtNCwwLTIuMjcsMS4yOC00LjA3LDQtNS4yM2wzLjgzLTEuNTFaIi8+PHBhdGggZmlsbD0iIzY1NzNmZiIgZD0iTTEyMi4yMSw1NS40N2MtOC4yLTEtMjItMi41NS0zNS44MS0zLjM1LTEyLjUtLjcxLTI0LjIyLS45My0yOS42MS0uOTMtMzAuNjYsMC0zMS42OC43NS00OS43NywyLjY2LTYuMTkuNjUtNi4xNCw3Ljg1Ljc0LDcuMDdDMTgsNTkuNzcsMzIuMzEsNTguMyw0NC41NSw1Ny40OSw1NC42Nyw1Ni44Myw3MCw1Niw4Ni44Miw1NmMxNC43OCwwLDI3Ljg1LjI5LDM1LjI0LjgzYS42OC42OCwwLDEsMCwuMTUtMS4zNCIvPjwvc3ZnPg==",
          url: "https://www.startpage.com/"
        },
        {
          id: 8,
		  name: "DuckDuckGo",
		  logo: "https://vignette.wikia.nocookie.net/logopedia/images/0/00/DuckDuckGo_Logo-_Horizontal%404x.png/revision/latest/scale-to-width-down/200?cb=20190826133259",
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