<template>
  <div class="phrases-container">
    <h2>View Your Top 3 Phrases</h2>
    <form @submit.prevent="fetchPhrases">
      <label for="userId">Enter Your Name:</label>
      <input type="text" v-model="userId" required />
      <button type="submit">View Phrases</button>
    </form>

    <div v-if="phrases.length">
      <h3>Top 3 Phrases:</h3>
      <ul>
        <li v-for="(phrase, index) in phrases" :key="index">
          "{{ phrase.phrase }}" - {{ phrase.frequency }} times
        </li>
      </ul>
    </div>
    <div v-else-if="phrasesFetched">
      <p>No phrase data found for this user.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhraseFrequencies',
  data() {
    return {
      userId: '',
      phrases: [],
      phrasesFetched: false
    };
  },
  methods: {
    async fetchPhrases() {
      this.phrasesFetched = false;
      try {
        const response = await fetch(`http://localhost:5000/phrase-frequencies/${this.userId}`);
        if (response.ok) {
          this.phrases = await response.json();
        } else {
          this.phrases = [];
        }
        this.phrasesFetched = true;
      } catch (error) {
        console.error('Error fetching phrases:', error);
        this.phrases = [];
      }
    }
  }
};
</script>

<style scoped>
.phrase-frequencies table {
  width: 100%;
  border-collapse: collapse;
}
.phrase-frequencies th, .phrase-frequencies td {
  border: 1px solid #ddd;
  padding: 8px;
}
.phrase-frequencies th {
  background-color: #f4f4f4;
}
</style>
