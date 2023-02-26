<template>
  <div class="lucid">
    <h1>{{lucidtest}}</h1>
    <div class="subline">
    <HelloWorld msg="Docs Walkthrough" />
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  data() {
    return {
      lucidtest: "Lucid Testing",
    }
  },
  methods: {
    connectBrowser: function () {
      alert('placeholder code line.');
    },
  },
  components: {
    HelloWorld,
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

<style>
.subline {
  color: green !important;
  text-decoration: wavy;
}

.lucid {
  padding: 1em;
}
</style>
