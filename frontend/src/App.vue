<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark-blue fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">VoiceScribe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end bg-dark-blue" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/history">History</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/frequency">Word Frequencies</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/phrase">Phrase Frequencies</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/comparison">Comparison</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container" style="margin-top: 80px;">
      <router-view/>
    </div>
  </div>
</template>

<style>
.bg-dark-blue {
  background-color: #001f3f !important;
}

.navbar {
  padding: 10px;
}

.navbar-toggler-icon {
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"%3E%3Cpath stroke="%23ffffff" stroke-width="2" d="M5 7h20M5 15h20M5 23h20" fill="none"/%3E%3C/svg%3E'); /* White color for toggler icon */
}

.offcanvas {
  background-color: #001f3f; 
  color: #e0e0e0; 
}

.offcanvas .nav-link {
  color: #e0e0e0; 
}

.offcanvas .nav-link.active {
  font-weight: bold;
  color: #ffffff;
}

.offcanvas .btn-close {
  filter: invert(1); 
}

.form-control {
  background-color: #00274d; 
  color: #e0e0e0; 
  border: 1px solid #001f3f; 
}

.form-control::placeholder {
  color: #e0e0e0; 
}

.btn-outline-light {
  color: #e0e0e0;
  border-color: #e0e0e0; 
}

.btn-outline-light:hover {
  background-color: #e0e0e0;
  color: #001f3f; 
}
</style>
