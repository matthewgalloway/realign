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
      <h1 class="text-4xl font-extrabold mb-6 text-center text-shadow">Welcome to ReAlign</h1>
      <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8">
        <p class="mb-4 text-xl text-shadow">Designed to help you express feelings about your relationship, to your partner, without causing conflict.</p>
        <p class="mb-4 text-xl text-shadow">A simple 2 step process that will leave you with the words to have a discussion in under 10 minutes.</p>
        <div class="text-left">
          <p class="mb-2 text-xl font-semibold text-coral-500">Remember:</p>
          <ul class="list-disc pl-5 mb-4 text-shadow">
            <li>There are no right or wrong feelings</li>
            <li>The more detail you provide, the better your partner will understand you and the more you will feel heard</li>
            <li>This is the first step in having a more fulfilling relationship with your partner</li>
          </ul>
        </div>
        <textarea   
          v-model="userInput" 
          @input="updateWordCount"
          class="w-full p-4 bg-white bg-opacity-20 rounded-lg text-white placeholder-gray-300 mb-4" 
          placeholder="What's on your mind that you would like to discuss with your partner but don't know how..."
          rows="6"
        ></textarea>
        <div class="text-right mb-4">
          <span :class="{ 'text-red-500': wordCount < 100, 'text-green-500': wordCount >= 100 }">
            {{ wordCount }} / 100 words minimum
          </span>
        </div>

        <div class="text-center">
          <button 
            @click="submitThoughts" 
            class="bg-coral-500 text-white px-6 py-3 rounded-full hover:bg-coral-600 transition-all duration-300"
            :disabled="wordCount < 100"
            :class="{
              'opacity-50 cursor-not-allowed': wordCount < 100
            }"
          >
            I'm Ready to Move Forward
          </button>
        </div>  
      </div>
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
        const response = await api.post('/generate-questions', { text: this.userInput }, {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log('API response:', response);
        this.$router.push({
          name: 'FollowUpQuestions',
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
</style>@/api/api