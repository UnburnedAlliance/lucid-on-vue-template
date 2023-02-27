<script>
import Instantiating from './InstantiateLucid.vue';
import CreateWallet from './CreateWallet.vue';
import BuildTx from './BuildTx.vue'
export default {
  data() {
    return {
      lucidtest: "Getting Started",
    }
  },
  components: {
    Instantiating,
    CreateWallet,
    BuildTx
  },
}
</script>

<template>
  <div class="lucid">
    <h1>Getting Started</h1>
    <div class="lessonbox">
      <Instantiating />
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
