import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: false,
    profileData: {},
    profileDataToLoad: {},
    pagination: [],
    numberOfPages: [],
    activePage: 1,
    numItemsPerPage: 10,
    formData: {
      _id: '',
      name: '',
      age: 0,
      eyeColor: '',
      gender: '',
      latitude: '',
      longitude: '',
      pet: '',
      fruit: ''
    }
  },
  mutations: {
    SET_ISLOADING(state, loadingState) {
      state.isLoading = loadingState;
    },
    SET_PROFILE_DATA(state, data) {
      state.profileData = data;
    },
    SET_PROFILE_DATA_TO_LOAD(state, data) {
      state.profileDataToLoad = data;
      state.numberOfPages = [];

      let numOfPages = Object.keys(data).length / state.numItemsPerPage;
      numOfPages = Number.isInteger(numOfPages)
        ? numOfPages
        : Math.floor(numOfPages) + 1;

      state.numberOfPages = numOfPages;
    },
    SET_ACTIVE_PAGE(state, data) {
      state.activePage = data;
    },
    SET_FORM_DATA(state, data) {
      state.formData = {
        _id: data._id || '',
        name: data.name || '',
        age: data.age || 0,
        eyeColor: data.eyeColor || '',
        gender: data.gender || '',
        latitude: data.location.latitude || '',
        longitude: data.location.longitude || '',
        pet: data.preferences.pet || '',
        fruit: data.preferences.fruit || ''
      };
    },
    UPDATE_PROFILE_DATA(state, data) {
      state.formData._id = data.profileId;
      state.formData[data.inputName] = data.value;
    }
  },
  actions: {
    updateProfileData(context) {
      Object.values(context.state.profileDataToLoad).forEach(profile => {
        if (profile._id === context.state.formData._id) {
          profile.name = context.state.formData.name;
          profile.age = context.state.formData.age;
          profile.eyeColor = context.state.formData.eyeColor;
          profile.gender = context.state.formData.gender;
          profile.location.latitude = context.state.formData.latitude;
          profile.location.longitude = context.state.formData.longitude;
          profile.preferences.pet = context.state.formData.pet;
          profile.preferences.fruit = context.state.formData.fruit;
        }
      });
    }
  },
  getters: {
    getProfileData: state => state.profileDataToLoad,
    isLoading: state => state.isLoading,
    totalListLength: state => Object.keys(state.profileData).length,
    numberOfPages: state => state.numberOfPages,
    getActivePage: state => state.activePage,
    getnumItemsPerPage: state => state.numItemsPerPage,
    getProfileById: state => profileId =>
      Object.values(state.profileDataToLoad).find(
        item => item._id === profileId
      )
  }
});

export default store;
