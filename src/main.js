import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './translation/index.js';


createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
