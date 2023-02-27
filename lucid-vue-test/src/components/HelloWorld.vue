<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="headline">
    <h3>{{ msg }}</h3>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}



@media (min-width: 1024px) {
h1, h3 {
  color: #007acc;
}
}
</style>
