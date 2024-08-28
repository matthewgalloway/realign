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
      <div class="px-4 sm:px-6 lg:px-8 py-8 max-w-full flex flex-col items-center justify-center">
        <!-- Registration Form -->
        <div class="w-full max-w-md">
          <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
            <h2 class="text-3xl font-bold mb-6 text-center text-shadow">Register</h2>
            <form @submit.prevent="handleRegister" class="space-y-4">
              <div>
                <label for="username" class="block text-sm font-medium text-white">Username:</label>
                <input type="text" id="username" v-model="username" required class="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-white">Email:</label>
                <input type="email" id="email" v-model="email" required class="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white">
              </div>
              <div>
                <label for="password" class="block text-sm font-medium text-white">Password:</label>
                <input type="password" id="password" v-model="password" required class="mt-1 block w-full px-3 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coral-500 focus:border-coral-500 text-white">
              </div>
              <button type="submit" class="w-full bg-coral-500 text-white py-2 px-4 rounded-md hover:bg-coral-600 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2 transition">Register</button>
            </form>
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
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'UserRegister',
    setup() {
      const store = useStore()
      const router = useRouter()
      const username = ref('')
      const email = ref('')
      const password = ref('')
      const error = ref('')
  
      const handleRegister = async () => {
        try {
          await store.dispatch('auth/register', {
            username: username.value,
            email: email.value,
            password: password.value
          })
          router.push('/definition')  
        } catch (err) {
          error.value = err.response?.data?.message || 'Registration failed. Please try again.'
        }
      }
  
      return {
        username,
        email,
        password,
        error,
        handleRegister
      }
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