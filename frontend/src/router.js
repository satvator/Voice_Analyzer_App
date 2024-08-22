import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HistoryPage.vue';
import VoiceTranscription from './components/VoiceTranscription.vue';
import WordFrequencies from './components/WordFrequencies.vue';
import PhraseFrequencies from './components/PhraseFrequencies.vue';
// import AddCourse from './components/AddCourse.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  // { path: '/addcourse', component: AddCourse, name: 'AddCourse' },
  {
    path: '/transcribe',
    name: 'VoiceTranscription',
    component: VoiceTranscription,
  },
  {
    path: '/frequency',
    name: 'WordFrequency',
    component: WordFrequencies,
  },
  {
    path: '/phrase',
    name: 'PhraseFrequency',
    component: PhraseFrequencies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
