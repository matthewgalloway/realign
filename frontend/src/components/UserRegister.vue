<template>
    <div class="relative min-h-screen bg-gray-900 text-white">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="/images/reconnecting-couple.jpg" alt="Reconnecting Couple" class="object-cover w-full h-full" />
      </div>
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
  
      <!-- Content Overlay -->
      <div class="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <!-- Header -->
        <header class="w-full flex justify-between items-center mb-16">
          <div class="logo">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold">ReAlign</span>
            </div>
          </div>
        </header>
  
        <!-- Registration Form -->
        <div class="w-full max-w-md">
          <div class="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-6 text-center">Register</h2>
            <form @submit.prevent="handleRegister" class="space-y-4">
              <div>
                <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
                <input type="text" id="username" v-model="username" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                <input type="email" id="email" v-model="email" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
              </div>
              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                <input type="password" id="password" v-model="password" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
              </div>
              <button type="submit" class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition">Register</button>
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