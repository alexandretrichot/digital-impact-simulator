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
  watch: {
    picked() {
      this.majData();
    },
    share() {
      this.majData();
    }
  },
  methods: {
    majData() {
      this.engagement.used = !isNaN(this.picked);
      this.engagement.score =
        (isNaN(this.picked) ? 0 : this.picked) + (this.share ? 1 : 0);
    }
  }
};
</script>
<template>
  <div class="card print">
    <h3>{{ engagement.text }}</h3>
    <label class="container" :class="{noprint: picked != 3}">
      Je le fais déjà
      <input
        type="radio"
        :name="'engagement' + index"
        value="3"
        v-model.number="picked"
      />
      <span class="checkmark noprint"></span>
    </label>
    <label class="container" :class="{noprint: picked != 2}">
      Je le ferai dès maintenant
      <input
        type="radio"
        :name="'engagement' + index"
        value="2"
        v-model.number="picked"
      />
      <span class="checkmark noprint"></span>
    </label>
    <label class="container" :class="{noprint: picked != 1}">
      Je vais y réfléchir
      <input
        type="radio"
        :name="'engagement' + index"
        value="1"
        v-model.number="picked"
      />
      <span class="checkmark noprint"></span>
    </label>
    <label class="container" :class="{noprint: picked != 0}">
      Je ne le ferai pas
      <input
        type="radio"
        :name="'engagement' + index"
        value="0"
        v-model.number="picked"
      />
      <span class="checkmark noprint"></span>
    </label>
    <Checkbox v-model="share" :class="{noprint: !share}">Je vais en parler autour de moi</Checkbox>
  </div>
</template>
<style lang="scss" scoped>
@media print {
  .print {
    &.card {
      margin: 0;
      padding: 3pt;
    }

    h3 {
      font-size: 10pt;
      margin: 0;
    }

    .card {
      margin: 0;
    }

    .container {
      display: block;
      font-size: 8pt;
      margin: 0;

      &.noprint {
        display: none;
      }
    }
  }
}

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