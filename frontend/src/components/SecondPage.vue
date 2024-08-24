<template>
  <div class="container">
    <h1>Reflect on These Questions</h1>
    <p class="mb-4">Take your time to think deeply about each question. Your honest responses will help guide the conversation with your partner.</p>
    
    <div v-for="(question, index) in questions" :key="index" class="mb-6">
      <p class="mb-2">{{ question }}</p>
      <textarea 
        v-model="answers[index]" 
        @input="updateWordCount(index)"
        class="text-box"
        :placeholder="'Your answer to question ' + (index + 1)"
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
        class="btn px-4 py-2 rounded transition-all duration-300"
        :disabled="!allAnswersMeetWordCount"
        :class="{
          'bg-blue-500 text-white hover:bg-blue-600': allAnswersMeetWordCount,
          'bg-gray-300 text-gray-500 cursor-not-allowed': !allAnswersMeetWordCount
        }"
      >
        I'm ready for the solution
      </button>
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
          console.log('Received speech data, navigating to ThirdPage');
          this.$router.push({
            name: 'ThirdPage',
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
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.text-box {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn {
  transition: all 0.3s ease;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>