<template>
  <div class="lucid">
    <h1>{{lucidtest}}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      lucidtest: "Advanced Examples",
    }
  },
  methods: {
    connectBrowser: function () {
      alert('placeholder code line.');
    },
  },
  components: {
  },
}
</script>


<style>
h1 {
  color: #007ACC;
}
</style>
