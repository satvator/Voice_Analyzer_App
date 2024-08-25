<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/history">History</router-link>
      <router-link to="/frequency">Word Frequencies</router-link>
      <router-link to="/phrase">Phrase Frequencies</router-link>
      <router-link to="/comparison">Comparison</router-link>
      <router-link to="/transcribe_live">Real Time Transcription</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #34495e;
}
nav a {
  margin: 10px;
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
