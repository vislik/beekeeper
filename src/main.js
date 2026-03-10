import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { revealDirective, staggerDirective } from './directives/motion';
import './style.scss';

const app = createApp(App);
app.directive('reveal', revealDirective);
app.directive('stagger', staggerDirective);
app.use(router);
app.mount('#app');
