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
      <h1 class="text-4xl font-extrabold my-6 text-center text-shadow">Understanding your concerns</h1>
      <div class="flex-grow bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8">
        <div class="max-w-4xl mx-auto">
          <p class="mb-4 text-xl text-shadow">Step 1 of 2 in being able to communicate with your partner effectively.</p>
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

    <!-- Loading Spinner -->
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div class="bg-indigo-900 rounded-lg p-6 shadow-lg text-center">
        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-coral-500 border-solid mx-auto mb-4"></div>
        <p class="text-white text-lg font-semibold">
          Thank you for sharing, I'm considering how best to approach this
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/api';

export default defineComponent({
  setup() {
    const router = useRouter();
    const userInput = ref('');
    const wordCount = ref(0);
    const isLoading = ref(false);

    const updateWordCount = () => {
      wordCount.value = userInput.value.trim().split(/\s+/).filter(word => word.length > 0).length;
    };

    const submitThoughts = async () => {
      if (wordCount.value < 100) return;

      isLoading.value = true;
      try {
        const response = await api.post('/generate-questions', { text: userInput.value }, {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log('API response:', response);
        router.push({
          name: 'FollowUpQuestions',
          query: {
            questions: JSON.stringify(response.data.questions),
            originalText: userInput.value
          }
        });
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      } finally {
        isLoading.value = false;
      }
    };

    return {
      userInput,
      wordCount,
      isLoading,
      updateWordCount,
      submitThoughts
    };
  }
});
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