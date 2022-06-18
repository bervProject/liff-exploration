import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Buefy);

import App from '@/App.vue';

describe('App.vue', () => {
  it('Render correctly', () => {
    const wrapper = shallowMount(App, {
      localVue,
      stubs: ['router-link', 'router-view']
    });

    console.log(wrapper.html());

  });
});
