import { createRouter, createWebHistory } from 'vue-router'
  import FistPage from '../components/FirstPage.vue'
  import SecondPage from '../components/SecondPage.vue'
  import ThirdPage from '../components/ThirdPage.vue'
  
  const routes = [
    {
      path: '/',
      name: 'FirstPage',
      component: FistPage
    },
    {
      path: '/page2',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/page3',
      name: 'ThirdPage',
      component: ThirdPage
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router