<script type="module">/* ERRORS
import { Lucid } from "https://unpkg.com/lucid-cardano@0.9.4/web/mod.js"
import { Blockfrost } from "@blockfrost/blockfrost-js"
const API = new Blockfrost.BlockFrostAPI({
  projectId: 'mainnetZLfKC8wgc5vNbe31vGt5sK6u8lQxoNxm', // see: https://blockfrost.io
  // For a list of all options see section below
});
const lucid = await Lucid.new(
  new Blockfrost("https://cardano-preprod.blockfrost.io/api/v0", "mainnetZLfKC8wgc5vNbe31vGt5sK6u8lQxoNxm"),
  "Preprod",
); */
</script>

<template>
  <div class="lesson">
    <h3>Instantiate Lucid</h3><p>
<code>
  import { Lucid } from "https://deno.land/x/lucid/mod.ts";
</code>    </p>
<p>Lucid can be instantiated with a blockchain provider or without. Usually you want to select a provider in order to query data and submit transactions. </p>
<p><code>
  const lucid = await Lucid.new(
  new Blockfrost("https://cardano-preprod.blockfrost.io/api/v0", "PROJECTID"),
  "Preprod",
);
</code></p>
 </div>
</template>

<style scoped>
code {
  font-weight: bold;
}
</style>
