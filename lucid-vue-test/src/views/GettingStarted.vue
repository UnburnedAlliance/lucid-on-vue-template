<script>
import Instantiate from '../components/Instantiate.vue';
import CreateWallet from '../components/CreateWallet.vue';
import BuildTx from '../components/BuildTx.vue'
export default {
  data() {
    return {
      lucidtest: "Getting Started",
    }
  },
  components: {
    Instantiate,
    CreateWallet,
    BuildTx
  },
}
</script>

<template>
  <div class="lucid">
    <h1>Getting Started</h1>
    <div class="lessonbox">
      <Instantiate />
      <CreateWallet />
      <BuildTx />
    </div>
    <div class="prevlink">
    <RouterLink to="/lucid">&lt; About</RouterLink>
  </div>
    <div class="nextlink">
    <RouterLink to="/components">Components &gt;</RouterLink>
  </div>
  </div>
</template>

<style scoped>
</style>
