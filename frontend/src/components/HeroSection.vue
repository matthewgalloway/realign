<template>
    <div class="flex flex-col-reverse lg:flex-row items-start justify-between mb-16 max-w-7xl mx-auto">
      <!-- Image Grid -->
      <div class="lg:w-1/2 mt-8 lg:mt-0 lg:pr-8">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(image, index) in heroImages" :key="index" class="relative overflow-hidden rounded-lg aspect-square">
            <img :src="image.url" :alt="image.alt" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      <!-- Text and Form -->
      <div class="lg:w-1/2 mb-8 lg:mb-0 lg:pl-8">
        <h1 class="text-3xl lg:text-4xl font-bold mb-6 text-shadow">Transform 'We Need to Talk' into 'We Love to Talk'</h1>
        <ul class="space-y-4 mb-8">
          <li v-for="(point, index) in subPoints" :key="index" 
              class="flex items-start space-x-4 animate-slide-in"
              :style="{ animationDelay: `${index * 0.2}s` }">
            <span class="flex-shrink-0 w-6 h-6 bg-coral-500 rounded-full flex items-center justify-center text-white font-bold">
              {{ index + 1 }}
            </span>
            <p class="text-xl font-semibold text-shadow">{{ point }}</p>
          </li>
        </ul>
      <!-- New section to emphasize the script -->
      <div class="bg-coral-100 border-l-4 border-coral-500 p-4 mb-8 rounded-r-lg shadow-md animate-fade-in">
        <p class="text-coral-700">We take the answers you give and generate a personalized script for you to navigate your important talks with confidence and clarity.</p>
      </div>

        <div class="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 border rounded" required />
            <button type="submit" class="w-full bg-coral-500 text-white py-2 rounded hover:bg-coral-600 transition">Fix my communication in under 10 minutes</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'HeroSection',
    data() {
      return {
        heroImages: [
          { url: '/images/hero/couple_1.png', alt: 'Couple 1' },
          { url: '/images/hero/couple_2.png', alt: 'Couple 2' },
          { url: '/images/hero/couple_3.png', alt: 'Couple 3' },
          { url: '/images/hero/couple_4.png', alt: 'Couple 4' }
        ],
        subPoints: [
          "Express yourself clearly and effectively to your partner, anytime.",
          "No video appointments, no waiting – just better understanding, on demand.",
          "Therapy-level solutions, for less than your monthly coffee budget",
        ]
      }
    },
    setup() {   
      const router = useRouter();
      
      const handleSubmit = () => {
        console.log('Form submitted');
        router.push({ name: 'UserRegister' });
      };
  
      return {
        handleSubmit
      }
    }
  };
  </script>
  
  <style scoped>
  .text-shadow {
    text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
  }
  .bg-coral-500 {
    background-color: #FF6F61;
  }
  .bg-coral-600 {
    background-color: #E5634F;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-slide-in {
    animation: slideIn 1s ease-out forwards;
  }
  </style>