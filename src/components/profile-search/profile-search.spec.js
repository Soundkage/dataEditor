import { mount } from '@vue/test-utils';
import ProfileSearch from '../profile-search/profile-search.vue';

describe('ProfileSearch Component', () => {
  it('should create the searchbar with a placeholder of Search...', () => {
    const wrapper = mount(ProfileSearch);

    const input = wrapper.find('input');

    expect(input.attributes('placeholder')).toBe('Search...');
  });

  it('should emit "searching" event with value when user is typing', () => {
    const wrapper = mount(ProfileSearch);

    const input = wrapper.find('input');
    input.trigger('keyup', {
      key: 'd'
    });

    expect(wrapper.emitted()).toHaveProperty('searching');
  });
});
