import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css';
import './assets/img1.jpg';
createApp(App)
  .use(router)
  .mount('#app');