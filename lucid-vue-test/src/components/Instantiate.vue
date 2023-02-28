<script type="module">
/*
import { Lucid, Blockfrost } from "../../node_modules/lucid-cardano";

const lucid = await Lucid.new(
 await new Blockfrost("https://cardano-preprod.blockfrost.io/api/v0", "mainnetZLfKC8wgc5vNbe31vGt5sK6u8lQxoNxm"),
  "Preview",
);*/

import { Lucid } from "../../node_modules/lucid-cardano";
const lucid = await Lucid.new();

export default {
  data() {
    return {
      lucidAPI: lucid,
      connectmsg: "Connect",
      walletname: "UNK",
      walletbal: "UNK",
      cardapi: undefined,
    }
  },
  methods: {
    connectWallet: function () {
      console.log('connectWallet function')
      this.cardapi = window.cardano.nami.enable();
      console.log(window.cardano.nami.isEnabled());  
      console.log(window.cardano.nami.name) 
    }
  },
  mounted() {
    console.log('mounted section');
    if(window.cardano.nami.isEnabled()) {
      console.log("cardano enabled.")
      this.connectmsg = "Connected to ".concat(window.cardano.nami.name);
      this.walletname = window.cardano.nami.name;
      this.walletbal = window.cardano.getBalance();
      console.log('getBalance....');
      console.log(cardano.getUsedAddresses());
    }
    
  },
  updated() {
    console.log('updated section');
  }
}

</script>

<template>

  <div class="lesson">
    <h3>Instantiate Lucid</h3><p>
      We will use the NPM version of the Lucid docs.
        </p>
        <code>
    npm install lucid-cardano
  </code>
<p>Lucid can be instantiated with a blockchain provider or without. Usually you want to select a provider in order to query data and submit transactions. </p>
<p><code>
  const lucid = await Lucid.new(
  new Blockfrost("https://cardano-preprod.blockfrost.io/api/v0", "PROJECTID"),
  "Preprod",
);
</code></p>
<button @click="connectWallet">
  {{ connectmsg }}
</button>
<h3>{{ walletname }}: {{ walletbal }}</h3>
 </div>
</template>

<style scoped lang="scss">
code {
  font-weight: bold;
}
</style>
