<script type="module">
import { Lucid, Blockfrost } from "../../node_modules/lucid-cardano";

const lucid = await Lucid.new(
 await new Blockfrost("https://cardano-mainnet.blockfrost.io/api/v0", "mainnetZLfKC8wgc5vNbe31vGt5sK6u8lQxoNxm"), "Mainnet",
);



let alreadyEnabled = await window.cardano.nami.isEnabled();
console.log("WTF")
console.log(await window.cardano.nami.isEnabled())
//const wtf = await window.cardano.nami.enable();
if(alreadyEnabled) {
  console.log("Detected whether enabled: ".concat(alreadyEnabled));
} else {
  console.log("not yet enabled")
  console.log(alreadyEnabled)
}

export default {
  data() {
    return {
      lucidAPI: undefined,
      connectmsg: undefined,
      walletname: undefined,
      walletbal: undefined,
      networkid: undefined,
      firstaddy: undefined,
      apiv: undefined,
    }
  },
  methods: {
    connectWallet: function () {
      async function fuckthisbullshit() {
        console.log('connectWallet function');
        const api = window.cardano.nami.enable();
        lucid.selectWallet(api);
        this.lucidAPI = api;
        console.log("inside async function")
        this.walletname = (await this.lucidAPI).getChangeAddress();
        this.networkid = (await this.lucidAPI).getNetworkId();
        this.walletname = window.cardano.nami.name;
        this.walletbal = (await this.lucidAPI).getBalance();
        this.connectmsg = "Connected to ".concat(this.walletname);
        this.firstaddy = (await this.lucidAPI).getChangeAddress();
        this.apiv = window.cardano.nami.apiVersion;
        console.log("connectWallet() activating uiSwitch(true)")
        this.uiSwitch(true);
      }
      fuckthisbullshit();
      console.log(window.cardano.nami.name) 
    },
    uiSwitch: function(connected) {
      console.log("in uiswitch")
      if(connected == true) {
        console.log("connected == true??????????")
        let el = document.getElementById("connectioninfobox");
        el.style.display = "inherit";
        this.connectmsg = "Connected ".concat(this.walletname)
      } else {
        console.log("switching ui elements off")
        let el = document.getElementById("connectioninfobox");
        el.style.display = "none";
        this.connectmsg = "Disconnected";
      }
    },
    checkBrowser: function() {
      console.log("checkBrowser function")
      async function isConnected() {
        let walletOn = await window.cardano.nami.isEnabled();
        console.log("WTF!!!! ", walletOn);
        
        return false;
      }
      console.log('connected? '.concat(isConnected()));
      if(isConnected()) {
        console.log("window.cardano.nami.isEnabled == true???????")
        let connectwhat = async () => { await window.cardano.nami.isEnabled()};
        console.log(connectwhat);
        this.uiSwitch(true);
      } else {
        console.log("Not connected, flipping uiSwitch(false)")
        this.uiSwitch(false);
      }
    }
  },
  mounted() {
    console.log('mounted section');
    this.uiSwitch(alreadyEnabled);
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
<div id="connectioninfobox">
<ul>
  <li>
  Wallet Name: {{ walletname }}
</li>
<li>
  Network: {{ networkid }}
</li>
<li>
  Account Address: {{ firstaddy }}
</li>
<li>
  API Version: {{  apiv }}
</li>
<li>
  Balance: {{  walletbal }}
</li>
</ul>
</div>
 </div>
</template>

<style scoped lang="scss">
code {
  font-weight: bold;
}

ul {
  list-style-type: "🔔";
  padding-inline-start: 1em;
  margin-top: 1em;
}
</style>
