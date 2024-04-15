import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './translation/index.js';

const piniaStore = createPinia();

createApp(App)
  .use(piniaStore)
  .use(router)
  .use(i18n)
  .mount('#app')
