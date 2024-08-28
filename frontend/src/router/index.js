import { createRouter, createWebHistory } from 'vue-router'
import ProblemDefinition from '../components/ProblemDefinition.vue'
import FollowUpQuestions from '../components/FollowUpQuestions.vue'
import GeneratedSpeech from '../components/GeneratedSpeech.vue'
import LandingPage from '../components/LandingPage.vue'
import UserLogin from '../components/UserLogin.vue'
import UserRegister from '../components/UserRegister.vue'


  const routes = [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/definition',
      name: 'ProblemDefinition',
      component: ProblemDefinition,
      meta: { requiresAuth: true }
    },
    {
      path: '/questions',
      name: 'FollowUpQuestions',
      component: FollowUpQuestions,
      meta: { requiresAuth: true }
    },
    {
      path: '/speech',
      name: 'GeneratedSpeech',
      component: GeneratedSpeech,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/register',
      name: 'UserRegister',
      component: UserRegister
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  


  export default router

