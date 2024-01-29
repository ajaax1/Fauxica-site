import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { MotionPlugin } from '@vueuse/motion';
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.use(MotionPlugin);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
