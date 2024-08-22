<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">{{ userName }}'s Dashboard</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <div class="flex-container" v-if="role == 'admin'">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="approvalRequests">Approval Requests &vert;</a>
            </li>
          </div>
          
          <div class="flex-container" v-if="role=='user'">
            <li>
              <a class="nav-link" href="#" @click="userProfile"
                >Profile &vert;</a
              >
            </li>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="returnDashboard">Dashboard &vert;</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    role: String,
    userName: String,
  },
  methods: {
    approvalRequests() {
      const data = encodeURIComponent(
        JSON.stringify({ role: this.role, userName: this.userName })
      );
      this.$router.push({
        path: "/admin/approvalRequests",
        query: { data: data },
      });
    },
    userProfile() {
      const data = encodeURIComponent(
        JSON.stringify({ role: this.role, userName: this.userName })
      );
      this.$router.push({ path: "/user/profile", query: { data: data } });
    },
    returnDashboard() {
      this.$router.push("/studentdb");
    },
    logout(){
        sessionStorage.removeItem('accessToken');
        this.$router.push("/");
    }
  },
};
</script>