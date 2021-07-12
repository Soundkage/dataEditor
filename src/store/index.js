import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: false,
    profileData: {},
    profileDataToLoad: {},
    pagination: [],
    numberOfPages: 0
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

      const itemsPerPage = 10;
      let numOfPages = Object.keys(data).length / itemsPerPage;
      numOfPages = Number.isInteger(numOfPages)
        ? numOfPages
        : Math.floor(numOfPages) + 1;

      state.numberOfPages = numOfPages;
    }
  },
  actions: {},
  getters: {
    getProfileData: state => state.profileDataToLoad,
    isLoading: state => state.isLoading,
    totalListLength: state => Object.keys(state.profileData).length
  }
});

export default store;
