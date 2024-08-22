<template>
  <div id="app">
    <h1>Voice Analyzer</h1>
    <input v-model="userId" placeholder="Enter user ID" />
    <button @click="fetchData(userId)">Fetch Data</button>
    <VoiceTranscription :userId="userId" />
    <WordFrequencies :userId="userId" />
    <PhraseFrequencies :userId="userId" />
  </div>
</template>

<script>
import VoiceTranscription from './components/VoiceTranscription.vue';
import WordFrequencies from './components/WordFrequencies.vue';
import PhraseFrequencies from './components/PhraseFrequencies.vue';

export default {
  name: 'App',
  components: {
    VoiceTranscription,
    WordFrequencies,
    PhraseFrequencies
  },
  data() {
    return {
      userId: ''
    };
  },
  methods: {
    fetchData(userId) {
      this.userId = userId;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


