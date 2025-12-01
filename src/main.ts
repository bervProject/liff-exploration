import { createApp } from 'vue';
import liff from '@line/liff';
import Oruga from '@oruga-ui/oruga-next';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@oruga-ui/theme-bulma/style.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Oruga);

liff
  .init({
    liffId: '1653651913-rzZXA2dX',
  })
  .then(() => {
    // console.log("LIFF Ready");
    app.mount('#app');
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .catch((err: any) => {
    // console.log(err.code, err.message);
    if (liff.isInClient()) {
      liff.closeWindow();
    } else {
      alert(err);
    }
  });
