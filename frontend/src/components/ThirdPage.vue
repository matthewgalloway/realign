<template>
  <div class="container">
    <h1>Your Constructive Communication</h1>
    <div class="text-left">
      <p class="mb-2">Remember:</p>
      <ul class="list-disc pl-5 mb-4">
        <li>Connecting with someone will feel better than being right</li>
        <li>Your growning as a person by expressing yourself clearly and collaboratively </li>
      </ul>
    </div>
    <div v-if="speechData">
      <textarea v-model="speechData" class="text-box" style="height: 400px;"></textarea>
    </div>
    <div v-else>
      <p>No speech data received or unable to parse the data.</p>
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
      }
  }
}
</script>
<style scoped>

.text-left {
  text-align: left;
}
.btn {
  transition: all 0.3s ease;
}

</style>