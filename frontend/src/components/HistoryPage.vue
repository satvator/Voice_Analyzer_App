<template>
  <div class="history-container">
    <h2>View Your Transcription History</h2>
    <form @submit.prevent="fetchHistory">
      <label for="userId">Enter Your Name:</label>
      <input type="text" v-model="userId" required />
      <button type="submit">View History</button>
    </form>

    <div v-if="history.length">
      <h3>Transcription History:</h3>
      <ul>
        <li v-for="(transcription, index) in history" :key="index">
          {{ transcription.timestamp }}: {{ transcription.translated_text }}
        </li>
      </ul>
    </div>
    <div v-else-if="historyFetched && !history.length">
      <p>No transcription history found for this user.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage',
  data() {
    return {
      userId: '',
      history: [],
      historyFetched: false,
    };
  },
  methods: {
    async fetchHistory() {
    this.historyFetched = false;
    try {
        const response = await fetch(`http://127.0.0.1:5000/history/${this.userId}`);
        if (response.ok) {
            this.history = await response.json();
        } else {
            this.history = [];
        }
        this.historyFetched = true;
    } catch (error) {
        console.error('Error fetching history:', error);
        this.history = [];
        this.historyFetched = true;
    }
}
  }
};
</script>


<style scoped>
.history-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
</style>
