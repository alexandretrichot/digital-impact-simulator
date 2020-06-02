<script>
export default {};
</script>
<template>
  <div class="container">
    <h1>L'impact du numérique sur l'environnement.</h1>
	<p>Meuse Nature Environnement intervient dans les classes de collège afin de sensibiliser aux différents impacts du numérique sur l'environnement.</p>
    <div class="box">
      <nuxt-link class="card" to="/searchEngines">
        <img src="~/assets/svg/search-solid.svg" alt="Recherches Logo" />
        <h2>Recherches</h2>
      </nuxt-link>
      <nuxt-link class="card" to="/simulator">
        <img src="~/assets/svg/calculator-solid.svg" alt="Simulator Logo" />
        <h2>Simulateur</h2>
      </nuxt-link>
      <nuxt-link class="card" to="/engage">
        <img src="~/assets/svg/handshake-regular.svg" alt="Engagements Logo" />
        <h2>Engagements</h2>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 12px;

  h1, p {
    text-align: center;
  }

  .box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .card {
      flex-shrink: 0;
      height: 200px;
      width: 180px;
      background: $bgColor;
      overflow: hidden;
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 12px;
      color: $textColor;
      text-decoration: none;
      border-radius: 12px;
	  box-shadow: $lightShadow;

	  transition: box-shadow .2s;
	  
	  &:hover {
		  box-shadow: $shadow;
	  }

      img {
        height: 100px;
      }

      h2 {
        display: block;
      }
    }
  }
}
</style>
