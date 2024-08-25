import { createRouter, createWebHistory } from 'vue-router';
import HistoryPage from './components/HistoryPage.vue';
import VoiceTranscription from './components/VoiceTranscription.vue';
import WordFrequencies from './components/WordFrequencies.vue';
import PhraseFrequencies from './components/PhraseFrequencies.vue';
import HomePage from './components/HomePage.vue';
import ComparisonPage from './components/ComparisonPage.vue';
import LiveAudio from './components/LiveAudio.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
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
  {
    path: '/history',
    name: 'HistoryPage',
    component: HistoryPage,
  },
  {
    path: '/comparison',
    name: 'ComparisonPage',
    component: ComparisonPage,
  },
  {
    path: '/transcribe_live',
    name: 'LiveAudio',
    component: LiveAudio,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
