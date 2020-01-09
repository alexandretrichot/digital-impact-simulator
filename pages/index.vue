<script>
import CarbonSimulator from "~/components/CarbonSimulator";
import { version } from "~/package.json";

export default {
  data() {
    return {
      version
    };
  },
  components: {
    CarbonSimulator
  }
};
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <CarbonSimulator />
    </div>
    <footer>
      <div>
        © Copyright
        <a href="https://github.com/alexandretrichot">@alexandretrichot</a>
      </div>
      <div>Version : {{ version }}</div>
    </footer>
  </div>
</template>
<style lang="scss">
* {
  font-family: sans-serif;
  box-sizing: border-box;
  outline: none;
}

body {
  background: black;
  color: white;
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

footer {
  background: white;
  color: black;
  padding: 12px;
  font-weight: bold;

  div {
    text-align: center;

    a {
      color: black;
    }
  }
}
</style>
