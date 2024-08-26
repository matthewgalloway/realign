<template>
    <div class="relative min-h-screen bg-gray-900 text-white">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="/images/reconnecting-couple.jpg" alt="Reconnecting Couple" class="object-cover w-full h-full" />
      </div>
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
  
      <!-- Content Overlay -->
      <div class="relative z-10 container mx-auto px-4 py-8">
        <!-- Header -->
        <header class="flex justify-between items-center mb-16">
          <div class="logo">
            <div class="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span class="text-2xl font-bold">ReAlign</span>
            </div>
          </div>
          <nav>
            <!-- <ul class="flex items-center space-x-6">
              <li><a href="#" class="hover:text-gray-300 text-shadow">Billing</a></li>
              <li><button class="bg-coral-500 text-white px-4 py-2 rounded-full hover:bg-coral-600 transition">Get Connected</button></li>
            </ul> -->
          </nav>
        </header>
  
        <!-- Hero Section -->
        <div class="flex flex-col md:flex-row items-center justify-between mb-16">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-5xl font-extrabold mb-4 text-shadow">Reconnect with your partner and improve your relationship</h1>

            <!-- Features List -->
            <ul class="space-y-4">
              <li><a href="#" class="flex items-center hover:text-coral-500 text-shadow"><span class="mr-2">🧘</span> Space to express raw emotions</a></li>
              <li><a href="#" class="flex items-center hover:text-coral-500 text-shadow"><span class="mr-2">💬</span> Guided Questions to help improve understanding</a></li>
              <li><a href="#" class="flex items-center hover:text-coral-500 text-shadow"><span class="mr-2">❤️</span> Personalised Speech Creation</a></li>
              <li><a href="#" class="flex items-center hover:text-coral-500 text-shadow"><span class="mr-2">🎯</span> Scientific Principles applied through out</a></li>
              
            </ul>
          </div>
  
          <!-- Sign-up Form -->
          <div class="md:w-5/12">
            <div class="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-4">Start Reconnecting Today</h2>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 border rounded" required />
                <button type="submit" class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Get Started</button>
              </form>
            </div>
          </div>
        </div>
  
        <!-- New Section: Benefits of Constructive Conversations -->
        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-16">
          <h2 class="text-3xl font-bold mb-6 text-center text-shadow">Why Is Having Difficult Conversations Essential for your Relationship?</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 class="text-xl font-semibold mb-2 text-coral-500">Strengthens Trust and Emotional Connection</h3>
              <ul class="list-disc list-inside text-shadow">
                <li>Addressing issues openly and honestly builds trust</li>
                <li>Sharing feelings and thoughts fosters deeper emotional intimacy</li>
              </ul>
            </div>
            <div class="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 class="text-xl font-semibold mb-2 text-coral-500">Prevents Resentment from Building Up</h3>
              <ul class="list-disc list-inside text-shadow">
                <li>When issues are discussed, rather than suppressed, it prevents unresolved feelings from festering into resentment</li>
                <li>It allows both partners to feel heard and understood</li>
              </ul>
            </div>
            <div class="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 class="text-xl font-semibold mb-2 text-coral-500">Improves Conflict Resolution Skills</h3>
              <ul class="list-disc list-inside text-shadow">
                <li>Practicing constructive communication helps partners learn to navigate future conflicts more effectively</li>
                <li>It equips both individuals with tools to handle disagreements healthily</li>
              </ul>
            </div>
            <div class="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 class="text-xl font-semibold mb-2 text-coral-500">Promotes Mutual Understanding</h3>
              <ul class="list-disc list-inside text-shadow">
                <li>Difficult conversations allow partners to gain insight into each other's perspectives and feelings</li>
                <li>It enhances empathy and promotes a more supportive partnership</li>
              </ul>
            </div>
            <div class="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 class="text-xl font-semibold mb-2 text-coral-500">Enhances Relationship Satisfaction</h3>
              <ul class="list-disc list-inside text-shadow">
                <li>Open, respectful communication leads to greater relationship satisfaction</li>
                <li>It creates a sense of partnership and teamwork in addressing challenges together</li>
              </ul>
            </div>
            <div class="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 class="text-xl font-semibold mb-2 text-coral-500">Encourages Personal Growth</h3>
              <ul class="list-disc list-inside text-shadow">
                <li>Constructive discussions encourage self-reflection and personal growth</li>
                <li>It helps both partners develop better emotional intelligence and communication skills</li>
              </ul>
            </div>
          </div>
        </div>

      <!-- New Section: Principles We Apply -->
      <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-16">
        <h2 class="text-3xl font-bold mb-6 text-center text-shadow">Principles We Apply for Constructive Conversations</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="text-xl font-semibold mb-2 text-coral-500">Using "I" Statements</h3>
            <ul class="list-disc list-inside text-shadow">
              <li>Reduces defensiveness by focusing on personal feelings rather than blaming</li>
              <li>Encourages openness and honesty</li>
              <li><span class="font-bold">98% of couples</span> who use "I" statements in difficult conversations are able to resolve their conflicts effectively</li>
            </ul>
          </div>
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="text-xl font-semibold mb-2 text-coral-500">Positive Affirmations</h3>
            <ul class="list-disc list-inside text-shadow">
              <li>Reinforces the positives in the relationship</li>
              <li>Helps balance the conversation by acknowledging strengths along with areas of concern</li>
              <li>Reduces tension and promotes a supportive atmosphere</li>
            </ul>
          </div>
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="text-xl font-semibold mb-2 text-coral-500">Staying Calm and Managing Emotions</h3>
            <ul class="list-disc list-inside text-shadow">
              <li>Take deep breaths, and if necessary, take a short break to cool down</li>
              <li>Keeps the conversation constructive and prevents it from escalating into an argument</li>
              <li>Allows for rational discussion rather than emotional reactions</li>
            </ul>
          </div>
          <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <h3 class="text-xl font-semibold mb-2 text-coral-500">Solutions Seeking Together</h3>
            <ul class="list-disc list-inside text-shadow">
              <li>Instead of focusing solely on the problem, work together to find a solution that suits both parties</li>
              <li>Encourages a team mentality and collaborative problem-solving</li>
              <li>Strengthens the bond by showing willingness to work through issues together</li>
            </ul>
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
  
  export default {
    name: 'LandingPage',
    setup() {
      const router = useRouter();
  
      const handleSubmit = () => {
        // Handle form submission
        console.log('Form submitted');
        // Navigate to the Problem Definition page
        router.push({ name: 'ProblemDefinition' });
      };
  
      return {
        handleSubmit
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