<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col">
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
    <div class="flex-grow flex flex-col">
      <h1 class="text-4xl font-extrabold my-6 text-center text-shadow">Reflect on These Questions</h1>
      <div class="flex-grow bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8">
        <div class="max-w-4xl mx-auto">
          <p class="mb-6 text-xl text-shadow">Take your time to think deeply about each question. Your honest responses will help guide the conversation with your partner.</p>

          <div v-for="(question, index) in questions" :key="index" class="mb-8">
            <p class="mb-2 text-lg font-semibold text-coral-500">{{ question }}</p>
            <textarea 
              v-model="answers[index]" 
              @input="updateWordCount(index)"
              class="w-full p-4 bg-white bg-opacity-20 rounded-lg text-white placeholder-gray-300 mb-2"
              :placeholder="'Your answer to question ' + (index + 1)"
              rows="4"
            ></textarea>
            <div class="text-right mb-2">
              <span :class="{ 'text-red-500': wordCounts[index] < 30, 'text-green-500': wordCounts[index] >= 30 }">
                {{ wordCounts[index] }} / 30 words minimum
              </span>
            </div>
          </div>

          <div class="text-center mt-8">
            <button 
              @click="submitAnswers"
              class="bg-coral-500 text-white px-6 py-3 rounded-full hover:bg-coral-600 transition-all duration-300"
              :disabled="!allAnswersMeetWordCount"
              :class="{
                'opacity-50 cursor-not-allowed': !allAnswersMeetWordCount
              }"
            >
              I'm ready for the solution
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api'; 

export default {
  data() {
    return {
      questions: [],
      originalText: '',
      answers: [],
      wordCounts: []
    }
  },
  computed: {
    allAnswersMeetWordCount() {
      return this.wordCounts.every(count => count >= 30);
    }
  },
  created() {
    this.initializeData();
  },
  methods: {
    initializeData() {
      try {
        const questionsData = JSON.parse(this.$route.query.questions || '[]');
        this.questions = Array.isArray(questionsData) ? questionsData : Object.values(questionsData);
        this.originalText = this.$route.query.originalText || '';
        this.answers = new Array(this.questions.length).fill('');
        this.wordCounts = new Array(this.questions.length).fill(0);

        console.log('Initialized data:', {
          questions: this.questions,
          originalText: this.originalText,
          answers: this.answers,
          wordCounts: this.wordCounts
        });
      } catch (error) {
        console.error('Error initializing data:', error);
        this.questions = [];
        this.answers = [];
        this.wordCounts = [];
      }
    },
    updateWordCount(index) {
      this.wordCounts[index] = this.answers[index].trim().split(/\s+/).filter(word => word.length > 0).length;
    },
    async submitAnswers() {
      if (!this.allAnswersMeetWordCount) return;

      try {
        console.log('Submitting answers:', {
          originalText: this.originalText,
          questions: this.questions,
          answers: this.answers
        });

        const response = await api.post('/generate-speech', {
          originalText: this.originalText,
          questions: this.questions,
          answers: this.answers
        });

        console.log('Response:', response.data);

        if (response.data.speech) {
          console.log('Received speech data, navigating to GeneratedSpeech');
          this.$router.push({
            name: 'GeneratedSpeech',
            query: { speech: JSON.stringify(response.data) }
          });
        } else {
          throw new Error('No speech data in response');
        }
      } catch (error) {
        console.error('Error:', error);
        console.error('Error response:', error.response);
        alert(`An error occurred: ${error.response?.data?.error || error.message}`);
      }
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