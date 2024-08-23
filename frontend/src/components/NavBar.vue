<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/transcribe">Transcribe</router-link></li>
      <li><router-link to="/frequency">Word Frequencies</router-link></li>
      <li><router-link to="/phrase">Phrase Frequencies</router-link></li>
      <li><router-link to="/history">History</router-link></li>
      <li><router-link to="/comparison">Comparison</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  background-color: #2c3e50;
  padding: 15px;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
}

a {
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

a:hover {
  background-color: #3498db;
  color: #fff;
}

a.router-link-active {
  background-color: #2980b9;
  color: #fff;
}
</style>
