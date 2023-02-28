<script type="module">
import { Lucid, Blockfrost } from "../../node_modules/lucid-cardano";

const lucid = await Lucid.new(
 await new Blockfrost("https://cardano-mainnet.blockfrost.io/api/v0", "mainnetZLfKC8wgc5vNbe31vGt5sK6u8lQxoNxm"), "Mainnet",
);

const alreadyEnabled = await window.cardano.isEnabled();
//const wtf = await window.cardano.nami.enable();

export default {
  data() {
    return {
      lucidAPI: lucid,
      connectmsg: "Connect",
      walletname: "UNK",
      walletbal: "UNK",
    }
  },
  methods: {
    connectWallet: function () {
      console.log('connectWallet function')
      const api = window.cardano.nami.enable();
      this.lucidAPI.selectWallet(api);
      this.walletname = this.lucidAPI.network;
      console.log(this.lucidAPI);  
      console.log(window.cardano.nami.name) 
    }
  },
  mounted() {
    console.log('mounted section');
    if(alreadyEnabled) {
      console.log("cardano enabled.")
      this.connectmsg = "Connected to ".concat(window.cardano.nami.name);
      this.walletname = window.cardano.nami.name;
      this.walletbal = "TBD";
      console.log('getBalance....');
      console.log(window.cardano.getUsedAddresses());
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
