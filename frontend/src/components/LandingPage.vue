<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Top color bar with centered logo -->
    <div class="bg-indigo-900 h-20 w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="logo flex items-center">
        <div class="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center mr-3">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <span class="text-3xl font-bold text-coral-500">ReAlign</span>
      </div>
    </div>
      <!-- Content -->
      <div class="px-4 sm:px-6 lg:px-8 py-8 -mt-8 max-w-full">

        <!-- Feature Section -->
        <FeatureSection/>
  
  
        <!-- Hero Section with embedded image -->
        <HeroSection />
  

        <!-- Difficult Conversations Importance Section -->
        <DifficultyConversationsImportance />
  
        <!-- Communication Techniques Section -->
        <CommunicationTechniques />
  
        <!-- Testimonials Section -->
        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-16">
            <h2 class="text-3xl font-bold mb-6 text-center text-shadow">What Our Users Say</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white bg-opacity-20 rounded-lg p-6 flex items-start">
                <img :src="testimonial.image" :alt="testimonial.author" class="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                <p class="text-lg mb-4">"{{ testimonial.content }}"</p>
                <p class="font-bold">- {{ testimonial.author }}</p>
                </div>
            </div>
            </div>
        </div>
  
        <!-- Trust Signals -->
        <div class="mt-16 flex items-center justify-center space-x-8">
          <div class="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center">
            <span class="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</span>
            <span class="font-bold">#1 Relationship Reconnection App</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  import CommunicationTechniques from './CommunicationTechniques.vue';
  import DifficultyConversationsImportance from './DifficultyConversationsImportance.vue';
  import FeatureSection from './FeatureSection.vue';
  import HeroSection from './HeroSection.vue';
  export default {
    name: 'LandingPage',
    components: {
      CommunicationTechniques,
      DifficultyConversationsImportance,
      FeatureSection,
      HeroSection
    },
    setup() {
      const router = useRouter();
  
      const handleSubmit = () => {
        console.log('Form submitted');
        router.push({ name: 'UserRegister' });
      };
  
      return {
        handleSubmit,
        testimonials: [
            {
            content: "ReAlign has transformed my relationship. We're communicating better than ever!",
            author: "Anna",
            image: "/images/testimonials/anna_testimonial.png"
            },
            {
            content: "The guided questions really helped me address issues I've been avoiding for years.",
            author: "Michael",
            image: "/images/testimonials/michael_testimonial.png"
            },
            {
            content: "I was skeptical at first, but ReAlign has truly improved my understanding of my partner.",
            author: "Peter",
            image: "/images/testimonials/peter_testimonial.png"
            }

        ]
      };    
    }
  }
  </script>
  
  <style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';
  
  /* Additional custom styles */
  .bg-coral-500 {
    background-color: #FF6F61;
  }
  .bg-coral-600 {
    background-color: #E5634F;
  }
  .text-coral-500 {
    color: #FF6F61;
  }
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  }
  .backdrop-filter {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  </style>