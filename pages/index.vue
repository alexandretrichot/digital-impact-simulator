<script>
export default {};
</script>
<template>
  <div class="container">
    <h1>Le numérique et l'environnement. Séance 3</h1>
    <div class="box">
      <nuxt-link class="card" to="/simulator">
        <img src="~/assets/svg/calculator-solid.svg" alt="Simulator Logo" />
        <h2>Simulateur</h2>
      </nuxt-link>
      <nuxt-link class="card" to="/simulator">
        <img src="~/assets/svg/calculator-solid.svg" alt="Simulator Logo" />
        <h2>Simulateur</h2>
      </nuxt-link>
      <nuxt-link class="card" to="/simulator">
        <img src="~/assets/svg/calculator-solid.svg" alt="Simulator Logo" />
        <h2>Simulateur</h2>
      </nuxt-link>
      <nuxt-link class="card" to="/simulator">
        <img src="~/assets/svg/calculator-solid.svg" alt="Simulator Logo" />
        <h2>Simulateur</h2>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 12px;
  h1 {
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
      background: black;
      overflow: hidden;
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 12px;
      color: white;
      text-decoration: none;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

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
