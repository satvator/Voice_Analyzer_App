<template>
  <div class="home-container">
    <h1>Welcome to Voice Analyzer</h1>
    <p>Select an option from the navigation bar to get started or upload a new audio file to transcribe.</p>

    <form @submit.prevent="uploadAudio">
      <label for="userId">User ID:</label>
      <input type="text" v-model="userId" placeholder="Enter your user ID" required />

      <label for="audioFile">Upload Audio File:</label>
      <input type="file" @change="handleFileChange" accept="audio/*" required />

      <button type="submit" :disabled="isLoading">Transcribe</button>
    </form>

    <div v-if="isLoading" class="loading-indicator">
      <p>Transcribing... Please wait.</p>
    </div>

    <div v-if="transcribedText" class="result">
      <h2>Transcribed Text:</h2>
      <p>{{ transcribedText }}</p>
    </div>

    <div v-if="errorMessage" class="error">
      <p>Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      userId: '',
      audioFile: null,
      transcribedText: '',
      errorMessage: '',
      isLoading: false
    };
  },
  methods: {
    handleFileChange(event) {
      this.audioFile = event.target.files[0];
    },
    async uploadAudio() {
      if (!this.userId || !this.audioFile) {
        this.errorMessage = 'User ID and audio file are required.';
        return;
      }

      const formData = new FormData();
      formData.append('user_id', this.userId);
      formData.append('audio', this.audioFile);

      this.isLoading = true;

      try {
        const response = await fetch('http://localhost:5000/transcribe', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();
        if (response.ok) {
          this.transcribedText = result.translated_text;
          this.errorMessage = '';
        } else {
          this.transcribedText = '';
          this.errorMessage = result.message || 'An error occurred.';
        }
      } catch (error) {
        this.transcribedText = '';
        this.errorMessage = `Error: ${error.message}`;
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.home-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="text"],
input[type="file"] {
  display: block;
  margin-bottom: 10px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.result, .error {
  margin-top: 20px;
}
.loading-indicator {
  font-size: 1.2em;
  color: #007bff;
}
</style>
