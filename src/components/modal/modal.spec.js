import { mount } from '@vue/test-utils';
import store from '../../store/index.js';
import Modal from '../modal/modal.vue';

let mockData = {
  _id: '5d5d7ad6b0e83bc2d9d67dfb',
  age: 28,
  eyeColor: 'brown',
  name: 'Stephens Townsend',
  gender: 'male',
  location: { latitude: 26.723281, longitude: 99.391104 },
  preferences: { pet: 'bird', fruit: 'apple' }
};

describe('Modal Component', () => {
  describe('modal visibility', () => {
    it('should not display if showModal is false', () => {
      const wrapper = mount(Modal, { props: { showModal: false } });

      const modalProfile = wrapper.find('#modal-profile');

      expect(modalProfile.classes()).not.toContain('modal--show');
    });

    it('should display if showModal is true', () => {
      const wrapper = mount(Modal, { props: { showModal: true } });

      const modalProfile = wrapper.find('#modal-profile');

      expect(modalProfile.classes()).toContain('modal--show');
    });
  });

  describe('closing the modal', () => {
    it('should emit closeModal when close button is clicked', async () => {
      const wrapper = mount(Modal, { props: { showModal: true } });

      const closeButton = wrapper.find('.modal__buttons button');
      await closeButton.trigger('click');

      expect(wrapper.emitted('closeModal')).toBeTruthy();
    });

    it('should emit closeModal when the modal-profile container is clicked', async () => {
      const wrapper = mount(Modal, { props: { showModal: true } });

      const modalProfileContainer = wrapper.find('#modal-profile');
      await modalProfileContainer.trigger('click');

      expect(wrapper.emitted('closeModal')).toBeTruthy();
    });
  });

  describe('form data', () => {
    it('should set default data if none is found', () => {
      const wrapper = mount(Modal, {
        props: {
          showModal: true,
          profileData: {}
        }
      });

      const inputs = wrapper.findAll('input');

      expect(inputs[0].element.value).toBe('Name');
      expect(inputs[1].element.value).toBe('0');
      expect(inputs[2].element.value).toBe('Eye Colour');
      expect(inputs[3].element.value).toBe('Gender');
      expect(inputs[4].element.value).toBe('Latitude');
      expect(inputs[5].element.value).toBe('Longitude');
      expect(inputs[6].element.value).toBe('Pet');
      expect(inputs[7].element.value).toBe('Fruit');
    });

    it('should setup the form with data from props', () => {
      const wrapper = mount(Modal, {
        props: {
          showModal: true,
          profileData: mockData
        }
      });

      const inputs = wrapper.findAll('input');

      expect(inputs[0].element.value).toBe('Stephens Townsend');
      expect(inputs[1].element.value).toBe('28');
      expect(inputs[2].element.value).toBe('brown');
      expect(inputs[3].element.value).toBe('male');
      expect(inputs[4].element.value).toBe('26.723281');
      expect(inputs[5].element.value).toBe('99.391104');
      expect(inputs[6].element.value).toBe('bird');
      expect(inputs[7].element.value).toBe('apple');
    });

    it('should emit profileUpdated on an input change', async () => {
      const wrapper = mount(Modal, {
        props: {
          showModal: true,
          profileData: mockData
        }
      });

      const inputName = wrapper.find('input');
      await inputName.trigger('change');

      expect(wrapper.emitted()).toHaveProperty('profileUpdated');
    });

    it('should commit UPDATE_PROFILE_DATA to store with input value', async () => {
      const wrapper = mount(Modal, {
        props: {
          showModal: true,
          profileData: mockData
        }
      });

      const inputName = wrapper.find('input');
      await inputName.trigger('change');

      expect(store.state.formData.name).toBe(mockData.name);
    });
  });
});
