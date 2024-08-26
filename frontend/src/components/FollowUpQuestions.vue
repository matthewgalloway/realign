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
      <h1 class="text-4xl font-extrabold mb-6 text-center text-shadow">Reflect on These Questions</h1>
      <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8">
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
        
        <div class="text-center">
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

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css';

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
