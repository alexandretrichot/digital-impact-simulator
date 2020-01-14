<script>
import Checkbox from "~/components/Checkbox";

export default {
  name: "Engagement",
  props: ["engagement", "index"],
  components: {
    Checkbox
  },
  data() {
    return {
      picked: undefined,
      share: false
    };
  },
  computed: {
    score() {
      this.engagement.used = !isNaN(this.picked);
      this.engagement.score =
        (isNaN(this.picked) ? 0 : this.picked) + (this.share ? 1 : 0);
      return this.engagement.score;
    }
  }
};
</script>
<template>
  <div class="card">
    <h3>{{ engagement.text }}</h3>
    <label class="container">
      Je le fais déjà
      <input
        type="radio"
        :name="'engagement' + index"
        value="3"
        v-model.number="picked"
      />
      <span class="checkmark"></span>
    </label>
    <label class="container">
      Je le ferai dès maintenant
      <input
        type="radio"
        :name="'engagement' + index"
        value="2"
        v-model.number="picked"
      />
      <span class="checkmark"></span>
    </label>
    <label class="container">
      Je vais y réfléchir
      <input
        type="radio"
        :name="'engagement' + index"
        value="1"
        v-model.number="picked"
      />
      <span class="checkmark"></span>
    </label>
    <label class="container">
      Je ne le ferai pas
      <input
        type="radio"
        :name="'engagement' + index"
        value="0"
        v-model.number="picked"
      />
      <span class="checkmark"></span>
    </label>
    <Checkbox v-model="share">Je vais en parler autour de moi</Checkbox>
  </div>
</template>
<style lang="scss" scoped>

h3 {
	font-size: 24px;
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: black;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>