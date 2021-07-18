import { mount } from '@vue/test-utils';
import store from '../../store/index.js';
import ExportButton from './export-button.vue';

const profileDataToLoad = [
  {
    _id: '5d5d7ad6b0e83bc2d9d67dfb',
    age: 28,
    eyeColor: 'brown',
    name: 'Stephens Townsend',
    gender: 'male',
    location: { latitude: 26.723281, longitude: 99.391104 },
    preferences: { pet: 'bird', fruit: 'apple' }
  },
  {
    _id: '5d5d7ad625ceac160b06721f',
    age: 25,
    eyeColor: 'blue',
    name: 'Padilla Blair',
    gender: 'male',
    location: { latitude: 31.288038, longitude: -56.647435 },
    preferences: { pet: 'cat', fruit: 'strawberry' }
  }
];

store.replaceState({ profileDataToLoad });
global.URL.createObjectURL = jest.fn(() => {});

describe('ExportButton Component', () => {
  it('should render the export button', () => {
    const wrapper = mount(ExportButton);

    expect(wrapper.find('button').text()).toBe('Export List');
  });

  it('should query store for profile data', async () => {
    const wrapper = mount(ExportButton);
    const profileData = store.getters.getProfileData;

    await wrapper.find('button').trigger('click');

    expect(profileData).toEqual(profileDataToLoad);
  });

  it('should throw error ', async () => {
    jest.spyOn(console, 'error');
    store.replaceState({});
    const wrapper = mount(ExportButton);

    await wrapper.find('button').trigger('click');

    expect(console.error).toHaveBeenLastCalledWith(
      '[Export] No profile data found'
    );
  });
});
