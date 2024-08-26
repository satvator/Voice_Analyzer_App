import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importing Bootstrap CSS and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App);
app.use(router); // Use Vue Router before mounting the app

app.mount('#app');