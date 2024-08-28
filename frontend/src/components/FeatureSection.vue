<template>
    <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-16">
      <h2 class="text-3xl font-bold mb-10 text-center text-shadow text-white">Key Features</h2>
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div v-for="(feature, index) in features" :key="feature.title" class="feature-container mb-8 md:mb-0 w-full md:w-1/4 flex flex-col items-center">
          <div class="w-32 h-32 mb-4 bg-gray-300 rounded-full overflow-hidden">
            <img :src="feature.imageUrl" :alt="feature.title" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-semibold mb-2 text-coral-500 text-center">{{ feature.title }}</h3>
          <p class="text-white text-shadow text-center text-sm">{{ feature.description }}</p>
          <svg v-if="index < features.length - 1" class="hidden md:block w-16 h-16 text-coral-500 transform translate-x-full -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureSection',
    data() {
      return {
        features: [
          {
            title: "Expression",
            description: "Space to express raw emotions and thoughts freely.",
            imageUrl: "/images/features/expression.jpg"
          },
          {
            title: "Idea Refinement",
            description: "Follow-up questions to help you explore deeper insights.",
            imageUrl: "/images/features/idea-refinement.jpg"
          },
          {
            title: "Apply Principles",
            description: "Personalized guidance to implement effective communication strategies.",
            imageUrl: "/images/features/apply-principles.jpg"
          },
          {
            title: "Conversation Tips",
            description: "Practical advice on how and when to have the most impactful discussions.",
            imageUrl: "/images/features/conversation-tips.jpg"
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles remain unchanged */
  </style>