<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="https://lucid.spacebudz.io/logo.svg" width="125" height="125" />

    <div class="wrapper">
     <h1>LUCID-CARDANO</h1>
      <h3>
     This web app is a working recap of the material provided by the <a href="https://lucid.spacebudz.io/docs/overview/about-lucid/">Lucid documentation</a> on a Vue3 framework.
    </h3>
      <nav>
        <RouterLink to="/lucid">Library Explanation</RouterLink>
        <RouterLink to="/naptcha">Advanced Example</RouterLink>
        <RouterLink to="/">Vue Documentation</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center; 
}

h1 {
  margin-bottom: .5em;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: inline-grid;
  background-color: #0d1117;
  border: 1px solid yellow;
  border-radius: 15px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: underline;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    padding-top: 1em;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    padding-left: calc(var(--section-gap) / 2);
    background-color: #35363a;
  }

  .logo {
    margin: 2em auto;
  }

  header .wrapper {
    display: grid;
    flex-wrap: wrap;
    max-width: 300px;
  }

  nav {
    margin-left: 0rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
