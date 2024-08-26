<template>
  <div class="about-container">
    <h1>About VoiceScribe</h1>
    <p>
      VoiceScribe is an advanced voice transcription and analysis application designed to transform spoken words into written text seamlessly. Whether you need to transcribe meetings, lectures, or personal notes, VoiceScribe provides accurate and efficient transcription services. Our application supports live audio transcription, translation to English, and detailed analysis of transcription history.
    </p>
    <h2>Features:</h2>
    <ul>
      <li>Live audio transcription with real-time processing.</li>
      <li>Translation of transcriptions to English.</li>
      <li>Storage and retrieval of transcription history.</li>
      <li>Word frequency analysis and phrase detection.</li>
      <li>Comparison of user data with overall trends.</li>
    </ul>
    <h2>About the Creator</h2>
    <p>
      VoiceScribe was developed by Himanshu Tiwari, a dedicated student pursuing a BSc in Data Science at IITM. Himanshu holds a BTech in Computer Science and Engineering from PSIT Kanpur. Combining a passion for technology and data analysis with a solid engineering background, Himanshu creates innovative solutions. For any inquiries or feedback, feel free to reach out via email:
    </p>
    <p>
      <a href="mailto:21f1004266@ds.study.iitm.ac.in">21f1004266@ds.study.iitm.ac.in</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h1, h2 {
  color: #333;
}

p {
  line-height: 1.6;
  color: #555;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
