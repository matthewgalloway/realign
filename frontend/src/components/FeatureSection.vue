<template>
    <div class="bg-gray-900 rounded-lg p-8 mb-16">
      <h2 class="text-3xl font-bold mb-10 text-center text-white">Our Process</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Expression -->
        <div class="feature-container flex flex-col items-center">
          <div class="relative w-32 h-32 mb-4">
            <img src="/images/features/expression.jpg" alt="Expression" class="w-full h-full object-cover rounded-full" />
            <svg class="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
          <div class="bg-gray-800 rounded-lg p-4 w-full flex flex-col justify-between" style="height: 150px;">
            <h3 class="text-xl font-semibold mb-2 text-coral-500 text-center">Expression</h3>
            <p class="text-white text-center text-sm">We provide a space to express raw emotions and thoughts without judgement.</p>
          </div>
        </div>
  
        <!-- Idea Refinement -->
        <div class="feature-container flex flex-col items-center">
          <div class="relative w-32 h-32 mb-4">
            <img src="/images/features/idea-refinement.jpg" alt="Idea Refinement" class="w-full h-full object-cover rounded-full" />
            <svg class="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
          <div class="bg-gray-800 rounded-lg p-4 w-full flex flex-col justify-between" style="height: 150px;">
            <h3 class="text-xl font-semibold mb-2 text-coral-500 text-center">Idea Refinement</h3>
            <p class="text-white text-center text-sm">We help you refine your ideas and dig deeper into the emotions you are feeling and why they are occuring.</p>
          </div>
        </div>
  
        <!-- Communication Principles -->
        <div class="feature-container flex flex-col items-center">
          <div class="relative w-32 h-32 mb-4">
            <img src="/images/features/apply-principles.jpg" alt="Communication Principles" class="w-full h-full object-cover rounded-full" />
            <svg class="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
          <div class="bg-gray-800 rounded-lg p-4 w-full flex flex-col justify-between" style="height: 150px;">
            <h3 class="text-xl font-semibold mb-2 text-coral-500 text-center">Communication Principles</h3>
            <p class="text-white text-center text-sm">We apply communication strategies from experts, so your ideas are expressed in a way your partner will hear them.</p>
          </div>
        </div>
  
        <!-- Speech Generation -->
        <div class="feature-container flex flex-col items-center">
          <div class="relative w-32 h-32 mb-4">
            <img src="/images/features/conversation-tips.jpg" alt="Speech Generation" class="w-full h-full object-cover rounded-full" />
          </div>
          <div class="bg-gray-800 rounded-lg p-4 w-full flex flex-col justify-between" style="height: 150px;">
            <h3 class="text-xl font-semibold mb-2 text-coral-500 text-center">Speech Generation</h3>
            <p class="text-white text-center text-sm">We generate a speech for you to use with your partner to help you reconnect on the issues you are feeling.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureSection'
  }
  </script>
  
  <style scoped>
  .text-coral-500 {
    color: #FF6F61;
  }
  </style>