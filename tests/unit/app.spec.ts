import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

import App from '@/App.vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
// install plugins as normal
localVue.use(Buefy);

describe('App.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(App, {
      localVue,
      stubs: ['router-link', 'router-view'],
    });

    console.log(wrapper.html());
  });
});
