<template>
  <div class="home-container">
    <h1>Welcome to Voice Analyzer</h1>
    <form @submit.prevent="goToTranscription">
      <label for="name">Enter your name:</label>
      <input type="text" v-model="userName" required />
      <button type="submit">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      userName: ''
    };
  },
  methods: {
    goToTranscription() {
      if (this.userName) {
        this.$router.push({ path: '/transcription', query: { name: this.userName } });
      }
    }
  }
};
</script>
