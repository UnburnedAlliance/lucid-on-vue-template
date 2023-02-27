<template>
  <div class="lucid">
    <h1>{{lucidtest}}</h1>
    <div class="lessonbox">
    <About_Import />
    </div>
    <div class="prevlink">
    <RouterLink to="/"></RouterLink>
  </div>
    <div class="nextlink">
    <RouterLink to="/getstarted">Get Started</RouterLink>
  </div>
  </div>
</template>

<script>
import About_Import from './Overview.vue'
export default {
  data() {
    return {
      lucidtest: "Lucid Tutorial",
    }
  },
  methods: {
    connectBrowser: function () {
      alert('placeholder code line.');
    },
  },
  components: {
    About_Import
  },
}
</script>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
:root {
  --lightbg: #35363a;
  --darkbg: #181818;
}

.nextlink {
  float: right;
  font-size: 1.5em;
  padding-right: 2em;
}

.prevlink {
  float: left;
  font-size: 1.5em;
  padding-left: 2em;
}

.lesson {
  border: 15px solid yellow;
  border-color: rgba(255, 255, 0, 0.15);
  margin: 2em auto;
  background-color: var(--lightbg);
  border-radius: 2em;
  padding: 2em;
}

.lessonbox {
  margin: 2em auto;
  background-color: var(--lightbg);
  border-radius: 2em;
  padding: 2em;
}

.lucid {
  padding: 2em;
}

p, h1, h2, h3 { 
  margin-bottom: 1em;
}
</style>
