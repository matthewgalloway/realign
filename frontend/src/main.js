import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  
import store from './store'  

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error: ', err);
  console.error('Error info: ', info);
};

app.use(router)  // Use the router
app.use(store)  // Use the Vuex store
app.mount('#app')