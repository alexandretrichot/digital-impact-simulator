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
    <CarbonSimulator />
  </div>
</template>
<style>
* {
  font-family: monospace, sans-serif;
  box-sizing: border-box;
}

body {
  background: white;
  color: black;
  margin: 0;
}

.container {
  margin: 0 auto;
  max-width: 800px;
  padding: 12px;
}

p {
	font-size: 20px;
}

</style>
