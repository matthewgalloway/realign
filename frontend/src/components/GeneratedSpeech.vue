<template>
  <div class="min-h-screen bg-gray-900 text-white">
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
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-extrabold mb-6 text-center text-shadow">Your Constructive Communication</h1>
      <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 mb-8">
        <div class="text-left mb-6">
          <p class="mb-2 text-xl font-semibold text-coral-500">Remember:</p>
          <ul class="list-disc pl-5 mb-4 text-shadow">
            <li>Connecting with someone will feel better than being right</li>
            <li>You're growing as a person by expressing yourself clearly and collaboratively</li>
          </ul>
        </div>
        <div v-if="speechData">
          <textarea 
            v-model="speechData" 
            class="w-full p-4 bg-white bg-opacity-20 rounded-lg text-white placeholder-gray-300 mb-4" 
            style="height: 400px;"
            readonly
          ></textarea>
        </div>
        <div v-else class="text-center p-4 bg-white bg-opacity-20 rounded-lg text-white">
          <p>No speech data received or unable to parse the data.</p>
        </div>
        <div class="text-center mt-6">
          <button 
            @click="goBack" 
            class="bg-coral-500 text-white px-6 py-3 rounded-full hover:bg-coral-600 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      speechData: ''
    }
  },
  created() {
    this.initializeSpeech();
  },
  methods: {
    initializeSpeech() {
      const receivedSpeech = this.$route.query.speech;
      console.log('Received speech data:', receivedSpeech);

      if (receivedSpeech) {
        try {
          // Parse the received data
          const parsedData = JSON.parse(receivedSpeech);
          // Extract the nested speech content
          this.speechData = parsedData.speech.speech || '';
          console.log('Parsed speech data:', this.speechData);
        } catch (error) {
          console.error('Error parsing speech data:', error);
          this.speechData = 'Unable to parse speech data';
        }
      } else {
        console.error('No speech data received in route query');
        this.speechData = 'No speech data received';
      }
    },
    goBack() {
      this.$router.go(-1);
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