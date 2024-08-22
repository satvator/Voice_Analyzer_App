import { createApp } from 'vue';
import App from './App.vue';
import router from './router';



const app = createApp(App);
app.use(router); // Use Vue Router before mounting the app

app.mount('#app');