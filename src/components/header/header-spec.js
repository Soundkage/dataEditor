import { mount } from '@vue/test-utils';
import Header from './header.vue';

describe('Header', () => {
  it('should render a header title', () => {
    const title = 'Heading';
    const wrapper = mount(Header, {
      props: { title: title }
    });

    expect(wrapper.find('h1').text()).toBe(title);
  });
});
