<script>
import CarbonSimulator from "~/components/CarbonSimulator";

export default {
  name: "CorbonSimulator",
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
  </div>
</template>
<style lang="scss" scoped>
.container {
  padding: 12px;
  margin-right: 300px;

  @media screen and (max-width: 760px) {
    margin-right: 0;
  }
}
</style>
