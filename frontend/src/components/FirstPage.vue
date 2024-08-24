<template>
  <div class="container">
    <h1>Welcome to ReAlign</h1>
    <p class="mb-4">Designed to help you express feelings about your relationship, to your partner, without causing conflict.</p>
    <p class="mb-4">A simple 2 step process that will leave you with the words to have a discussion in under 10 minutes.</p>
    <div class="text-left">
      <p class="mb-2">Remember:</p>
      <ul class="list-disc pl-5 mb-4">
        <li>There are no right or wrong feelings</li>
        <li>The more detail you provide, the better your partner will understand you and the more you will feel heard</li>
        <li>This is the first step in having a more fulfilling relationship with your partner</li>
      </ul>
    </div>
    <textarea   
      v-model="userInput" 
      @input="updateWordCount"
      class="text-box" 
      placeholder="What's area of your relationship would you like to work on..."
    ></textarea>
    <div class="text-right mb-2">
      <span :class="{ 'text-red-500': wordCount < 100, 'text-green-500': wordCount >= 100 }">
        {{ wordCount }} / 100 words minimum
      </span>
    </div>

    <div class="text-center">
      <button 
        @click="submitThoughts" 
        class="btn px-4 py-2 rounded transition-all duration-300"
        :disabled="wordCount < 100"
        :class="{
          'bg-blue-500 text-white hover:bg-blue-600': wordCount >= 100,
          'bg-gray-300 text-gray-500 cursor-not-allowed': wordCount < 100
        }"
      >
        I'm Ready to Move Forward
      </button>
    </div>  

  </div>
</template>


<script>
import api from '@/api'; 

export default {
  data() {
    return {
      userInput: '',
      wordCount: 0
    }
  },
  methods: {
    updateWordCount() {
      this.wordCount = this.userInput.trim().split(/\s+/).filter(word => word.length > 0).length;
    },
    async submitThoughts() {
      if (this.wordCount < 100) return; // Extra check, though button should be disabled

      try {
      const response = await api.post('/api/generate-questions', { text: this.userInput}, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('API response:', response);
        this.$router.push({
          name: 'SecondPage',
          query: {
            questions: JSON.stringify(response.data.questions),
            originalText: this.userInput
          }
        });
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
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
.text-left {
  text-align: left;
}
.btn {
  transition: all 0.3s ease;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>