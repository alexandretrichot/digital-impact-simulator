<script>
import CarbonSimulator from "~/components/CarbonSimulator";

export default {
  components: {
    CarbonSimulator
  }
};
</script>
<template>
  <div class="container">
    <h1>Simulateur d'impact carbone numérique</h1>
    <CarbonSimulator />
  </div>
</template>
<style>
* {
  font-family: sans-serif;
  box-sizing: border-box;
}

body {
  background: black;
  color: white;
  margin: 0;
}

.container {
  padding: 12px;
  margin: 0 auto;
  max-width: 600px;
}
</style>
