<template>
    <div class="flex flex-col-reverse lg:flex-row items-center justify-between mb-16 max-w-7xl mx-auto">
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
        <h1 class="text-4xl lg:text-5xl font-extrabold mb-6 text-shadow">Reconnect with your partner and improve your relationship</h1>
        <div class="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4">Start Reconnecting Today</h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 border rounded" required />
            <button type="submit" class="w-full bg-coral-500 text-white py-2 rounded hover:bg-coral-600 transition">Fix my communication in 10 minutes</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        heroImages: [
          { url: '/images/hero/couple_1.png', alt: 'Couple 1' },
          { url: '/images/hero/couple_2.png', alt: 'couple_2.png' },
          { url: '/images/hero/couple_3.png', alt: 'couple_3.png' },
          { url: '/images/hero/couple_4.png', alt: 'couple_4.png' }
        ]
      }
    },
    methods: {
      handleSubmit() {
        const handleSubmit = () => {
        console.log('Form submitted');
        router.push({ name: 'UserRegister' })
      }
    }
  }
  </script>
  
  <style scoped>
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
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
  </style>