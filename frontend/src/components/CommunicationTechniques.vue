<template>
    <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-16">
      <h2 class="text-3xl font-bold mb-6 text-center text-shadow">Communication Techniques We Apply for You</h2>
      <div class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-300 ease-in-out" :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }">
            <div v-for="technique in techniques" :key="technique.title" class="w-1/3 flex-shrink-0 px-2">
              <div class="bg-white bg-opacity-20 rounded-lg p-4 h-full">
                <h3 class="text-xl font-semibold mb-2 text-coral-500">{{ technique.title }}</h3>
                <p class="text-shadow mb-2 text-sm">{{ technique.description }}</p>
                <p class="italic text-sm">"{{ technique.example }}"</p>
              </div>
            </div>
          </div>
        </div>
        <button @click="prevTechnique" class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-coral-500 text-white rounded-full p-2 focus:outline-none" aria-label="Previous technique">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button @click="nextTechnique" class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-coral-500 text-white rounded-full p-2 focus:outline-none" aria-label="Next technique">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
      <div class="flex justify-center mt-4">
        <div v-for="(technique, index) in techniques" :key="`dot-${index}`" 
             class="w-3 h-3 rounded-full mx-1 cursor-pointer"
             :class="{ 'bg-coral-500': index >= currentIndex && index < currentIndex + 3, 'bg-gray-300': index < currentIndex || index >= currentIndex + 3 }"
             @click="goToTechnique(index)">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommunicationTechniques',
    data() {
      return {
        currentIndex: 0,
        techniques: [
        {
            title: "Team Mindset",
            description: "We reinforce that you and your partner are team working together on the problem of connection.",
            example: "I’ve been feeling less of a connection lately and I think it’s important for us to talk about it so we can work through it together as a team."
          },
          {
            title: "Using \"I\" Statements",
            description: "We use \"I\" statements to express needs without blame.",
            example: "I need some quiet time to focus. Can we set a time when we both can work without interruptions?"
          },
          {
            title: "Express Your Feelings First",
            description: "We guide you to express your emotions before addressing the issue.",
            example: "I feel overwhelmed when the house is messy. Can we create a cleaning schedule together?"
          },

          {
            title: "Being Specific",
            description: "We help you communicate clear, specific requests.",
            example: "I need your help with dinner tonight. Could you chop the vegetables while I cook?"
          },
          {
            title: "We make Requests, not Demands",
            description: "We teach you to make requests instead of demands.",
            example: "Would you mind spending some time with me this weekend? I miss our quality time."
          },
          {
            title: "We Express Appreciation",
            description: "We guide you to express gratitude and make requests.",
            example: "I really appreciate it when you listen to me. Can we talk about something that's been on my mind?"
          },
          {
            title: "We Acknowledge your partners Efforts",
            description: "We help you recognize your partner's contributions.",
            example: "I know you've been working hard. Could we both try to make more time for each other?"
          },
          {
            title: "We Suggest Solutions",
            description: "We encourage proposing solutions to issues.",
            example: "I've noticed we've been arguing more. How about we set aside a few minutes each evening to check in with each other?"
          },
          {
            title: "We Use Positive Reinforcement",
            description: "We guide the reinforcement of positive behaviors.",
            example: "I love when we collaborate on a task. Can we work together on organizing the living room this weekend?"
          }
        ]
      };
    },
    methods: {
      nextTechnique() {
        this.currentIndex = (this.currentIndex + 3) % this.techniques.length;
      },
      prevTechnique() {
        this.currentIndex = (this.currentIndex - 3 + this.techniques.length) % this.techniques.length;
      },
      goToTechnique(index) {
        this.currentIndex = Math.floor(index / 3) * 3;
      }
    }
  };
  </script>
  
  <style scoped>
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  }
  .backdrop-filter {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }
  .bg-coral-500 {
    background-color: #FF6F61;
  }
  .text-coral-500 {
    color: #FF6F61;
  }
  </style>