import { mount } from '@vue/test-utils';
import ProfileList from '../profile-list/profile-list.vue';
import store from '../../store/index.js';

const mockProfiles = [
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

describe('ProfileList Component', () => {
  it('should display a list of profiles from props', () => {
    const wrapper = mount(ProfileList, { props: { profiles: mockProfiles } });

    const tableRows = wrapper.findAll('tbody tr.table__row');
    const firstRow = tableRows[0].findAll('td');
    const secondRow = tableRows[1].findAll('td');

    expect(tableRows.length).toEqual(2);
    expect(firstRow[0].html()).toBe(
      `<td class="table__cell">${mockProfiles[0].name}</td>`
    );
    expect(firstRow[1].html()).toBe(
      `<td class="table__cell">${mockProfiles[0].age}</td>`
    );
    expect(firstRow[2].html()).toBe(
      `<td class="table__cell">${mockProfiles[0].eyeColor}</td>`
    );
    expect(firstRow[3].html()).toBe(
      `<td class="table__cell">${mockProfiles[0].gender}</td>`
    );

    expect(secondRow[0].html()).toBe(
      `<td class="table__cell">${mockProfiles[1].name}</td>`
    );
    expect(secondRow[1].html()).toBe(
      `<td class="table__cell">${mockProfiles[1].age}</td>`
    );
    expect(secondRow[2].html()).toBe(
      `<td class="table__cell">${mockProfiles[1].eyeColor}</td>`
    );
    expect(secondRow[3].html()).toBe(
      `<td class="table__cell">${mockProfiles[1].gender}</td>`
    );
  });

  it('should SET_FORM_DATA with profile data when row is clicked', async () => {
    const wrapper = mount(ProfileList, { props: { profiles: mockProfiles } });

    const tableRows = wrapper.findAll('tbody tr.table__row');
    await tableRows[0].trigger('click');

    const formData = store.state.formData;

    expect(formData.name).toEqual(mockProfiles[0].name);
    expect(formData.age).toEqual(mockProfiles[0].age);
    expect(formData.eyeColor).toEqual(mockProfiles[0].eyeColor);
    expect(formData.gender).toEqual(mockProfiles[0].gender);
    expect(formData.latitude).toEqual(mockProfiles[0].location.latitude);
    expect(formData.longitude).toEqual(mockProfiles[0].location.longitude);
    expect(formData.pet).toEqual(mockProfiles[0].preferences.pet);
    expect(formData.fruit).toEqual(mockProfiles[0].preferences.fruit);
  });
});
