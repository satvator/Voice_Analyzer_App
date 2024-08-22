<template>
  <div>
    <h2>Word Frequencies</h2>
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in frequencies" :key="index">
          <td>{{ item.word }}</td>
          <td>{{ item.frequency }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['userId'],
  data() {
    return {
      frequencies: []
    };
  },
  watch: {
    userId: function(newVal) {
      this.fetchFrequencies(newVal);
    }
  },
  methods: {
    async fetchFrequencies(userId) {
      try {
        const response = await fetch(`http://localhost:5000/frequencies/${userId}`);
        const data = await response.json();
        this.frequencies = data;
      } catch (error) {
        console.error('Error fetching word frequencies:', error);
      }
    }
  }
};
</script>
