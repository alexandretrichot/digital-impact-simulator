<script>
export default {
  name: "HourInput",
  props: {
    value: {
      type: Number
    }
  },
  computed: {
    h() {
      return this.value - this.mnDeci;
    },
    mnDeci() {
      return this.value % 1;
    },
    mn() {
      return this.mnDeci * 60;
    }
  },
  methods: {
    updateH: function(value) {
      this.$emit("input", value + this.mnDeci);
    },
    updateMn: function(value) {
      this.$emit("input", value / 60 + this.h);
	},
	round(x, dec){
		return Number.parseFloat(x).toFixed(dec);
	}
  }
};
</script>
<template>
  <div class="input">
    <input
      min="0"
      max="100"
      type="number"
      placeholder="Heures"
      :value="round(h, 0)"
      v-on:input="updateH(Number($event.target.value))"
    />
    H
    <input
      type="number"
      placeholder="Minutes"
      :value="round(mn, 0)"
	  step="10"
      v-on:input="updateMn(Number($event.target.value))"
    />
  </div>
</template>
<style lang="scss" scoped>
.input {
	
}
</style>