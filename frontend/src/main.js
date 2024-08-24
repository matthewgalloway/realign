import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Make sure to import your router

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error: ', err);
  console.error('Error info: ', info);
};

app.use(router)  // Use the router
app.mount('#app')