<template>
  <div>
    <h2>Add New Course</h2>
    <div class="text-danger">*{{ error }}</div>
    <div class="mb-3">
      <label for="name" class="form-label">Course Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Course Name"
        v-model="course.name"
      />
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Course Description</label>
      <input
        type="text"
        class="form-control"
        id="desc"
        placeholder="Course Description"
        v-model="course.desc"
      />
    </div>
    <button class="btn btn-primary" @click="addcour">Add Course</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {
        name: null,
        desc: null,
      },
      token: localStorage.getItem('auth-token'),
      error: null,
    };
  },
  methods: {
    async addcour() {
      try {
        const response = await fetch('/courses', {
          method: 'POST',
          headers: {
            'Authentication-Token': this.token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.course),
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to add course');
        }
        this.$router.push({ path: '/admindb' });
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
.text-danger {
  color: red;
}
</style>