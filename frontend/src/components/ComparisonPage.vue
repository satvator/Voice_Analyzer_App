<template>
  <div class="comparison-container">
    <h1>Word Frequency Comparison</h1>
    <form @submit.prevent="fetchComparisonData">
      <label for="userId">User ID:</label>
      <input type="text" v-model="userId" placeholder="Enter your user ID" required />
      <button type="submit" :disabled="isLoading">Compare</button>
    </form>

    <div v-if="isLoading" class="loading-indicator">
      <p>Loading... Please wait.</p>
    </div>

    <div v-if="comparisonData" class="result">
      <h2>Comparison Data:</h2>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Your Frequency</th>
            <th>All Users Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, word) in comparisonData" :key="word">
            <td>{{ word }}</td>
            <td>{{ data.user_frequency }}</td>
            <td>{{ data.all_users_frequency }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="errorMessage" class="error">
      <p>Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComparisonPage',
  data() {
    return {
      userId: '',
      comparisonData: null,
      errorMessage: '',
      isLoading: false
    };
  },
  methods: {
    async fetchComparisonData() {
      if (!this.userId) {
        this.errorMessage = 'User ID is required.';
        return;
      }

      this.isLoading = true;

      try {
        const response = await fetch(`http://localhost:5000/comparison/${this.userId}`);
        const data = await response.json();
        if (response.ok) {
          this.comparisonData = data;
          this.errorMessage = '';
        } else {
          this.comparisonData = null;
          this.errorMessage = data.error || 'An error occurred.';
        }
      } catch (error) {
        this.comparisonData = null;
        this.errorMessage = `Error: ${error.message}`;
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.comparison-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="text"] {
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
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>
