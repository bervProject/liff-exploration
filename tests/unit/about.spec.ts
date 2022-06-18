import { shallowMount } from '@vue/test-utils';
import About from '@/views/AboutPage.vue';

describe('About.vue', () => {
  it('renders LIFF title', () => {
    const msg = 'LIFF';
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toMatch(msg);
  });
});
