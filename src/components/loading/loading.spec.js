import { mount } from '@vue/test-utils';
import Loading from '../loading/loading.vue';

describe('Loading Component', () => {
  it('should load component with lowercase string displayed', () => {
    let componentName = 'Test Component';
    const wrapper = mount(Loading, {
      props: {
        componentName: componentName
      }
    });

    const pText = wrapper.find('p');

    expect(pText.text()).toEqual('Loading test component ...');
  });
});
