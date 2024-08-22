<template>
  <div class="phrase-frequencies">
    <h2>Top Phrases</h2>
    <table v-if="phrases.length">
      <thead>
        <tr>
          <th>Phrase</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in phrases" :key="item.phrase">
          <td>{{ item.phrase }}</td>
          <td>{{ item.frequency }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No phrase frequencies available.</p>
  </div>
</template>

<script>
export default {
  props: ['userId'],
  data() {
    return {
      phrases: []
    };
  },
  async created() {
    if (this.userId) {
      const response = await fetch(`http://localhost:5000/phrase-frequencies/${this.userId}`);
      const result = await response.json();
      this.phrases = result;
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
