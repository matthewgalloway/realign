import { createRouter, createWebHistory } from 'vue-router'
  import ProblemDefinition from '../components/ProblemDefinition.vue'
  import FollowUpQuestions from '../components/FollowUpQuestions.vue'
  import GeneratedSpeech from '../components/GeneratedSpeech.vue'
  import LandingPage from '../components/LandingPage.vue'

  const routes = [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/definition',
      name: 'ProblemDefinition',
      component: ProblemDefinition
    },
    {
      path: '/questions',
      name: 'FollowUpQuestions',
      component: FollowUpQuestions
    },
    {
      path: '/speech',
      name: 'GeneratedSpeech',
      component: GeneratedSpeech
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router