import { Component, Vue } from 'vue-property-decorator';
import MyNavBar from '@/components/MyNavBar.vue';

@Component({
  components: {
    'my-nav-bar': MyNavBar,
  },
})
export default class App extends Vue { }
