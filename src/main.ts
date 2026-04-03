import { createApp } from 'vue';
import { createOruga } from '@oruga-ui/oruga-next';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@oruga-ui/theme-bulma/style.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(createOruga());
app.mount('#app');
