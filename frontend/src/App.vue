<template>
  <div id="app">
  <NavBar />
  <router-view></router-view>

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import VoiceTranscription from './components/VoiceTranscription.vue';
// import WordFrequencies from './components/WordFrequencies.vue';
// import PhraseFrequencies from './components/PhraseFrequencies.vue';

// export default {
//   name: 'App',
//   components: {
//     VoiceTranscription,
//     WordFrequencies,
//     PhraseFrequencies
//   },
//   data() {
//     return {
//       userId: ''
//     };
//   },
//   methods: {
//     fetchData(userId) {
//       this.userId = userId;
//     }
//   }
// };

export default {
  name: 'App',
  components: {
    NavBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


