<template>
    <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-16">
      <h2 class="text-3xl font-bold mb-6 text-center text-shadow">Why Is Having Difficult Conversations Essential for your Relationship?</h2>
      <div class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-300 ease-in-out" :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }">
            <div v-for="reason in reasons" :key="reason.title" class="w-1/3 flex-shrink-0 px-2">
              <div class="bg-white bg-opacity-20 rounded-lg p-4 h-full">
                <h3 class="text-xl font-semibold mb-2 text-coral-500">{{ reason.title }}</h3>
                <ul class="list-disc list-inside text-shadow text-sm">
                  <li v-for="point in reason.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button @click="prevReason" class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-coral-500 text-white rounded-full p-2 focus:outline-none" aria-label="Previous reason">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button @click="nextReason" class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-coral-500 text-white rounded-full p-2 focus:outline-none" aria-label="Next reason">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
      <div class="flex justify-center mt-4">
        <div v-for="(reason, index) in reasons" :key="`dot-${index}`" 
             class="w-3 h-3 rounded-full mx-1 cursor-pointer"
             :class="{ 'bg-coral-500': index >= currentIndex && index < currentIndex + 3, 'bg-gray-300': index < currentIndex || index >= currentIndex + 3 }"
             @click="goToReason(index)">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DifficultyConversationsImportance',
    data() {
      return {
        currentIndex: 0,
        reasons: [
          {
            title: "Strengthens Trust and Emotional Connection",
            points: [
              "Addressing issues openly and honestly builds trust",
              "Promotes deeper emotional intimacy between partners"
            ]
          },
          {
            title: "Prevents Resentment from Building Up",
            points: [
              "Discussing issues prevents unresolved feelings",
              "Reduces the risk of festering resentment over time"
            ]
          },
          {
            title: "Improves Conflict Resolution Skills",
            points: [
              "Practicing constructive communication enhances skills",
              "Helps partners navigate future conflicts more effectively"
            ]
          },
          {
            title: "Promotes Mutual Understanding",
            points: [
              "Allows partners to gain insight into each other's perspectives",
              "Enhances empathy and promotes a more supportive partnership"
            ]
          },
          {
            title: "Enhances Relationship Satisfaction",
            points: [
              "Open, respectful communication leads to greater satisfaction",
              "Creates a sense of partnership in addressing challenges"
            ]
          },
          {
            title: "Encourages Personal Growth",
            points: [
              "Constructive discussions encourage self-reflection",
              "Helps develop better emotional intelligence and communication skills"
            ]
          }
        ]
      };
    },
    methods: {
      nextReason() {
        this.currentIndex = (this.currentIndex + 3) % this.reasons.length;
      },
      prevReason() {
        this.currentIndex = (this.currentIndex - 3 + this.reasons.length) % this.reasons.length;
      },
      goToReason(index) {
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