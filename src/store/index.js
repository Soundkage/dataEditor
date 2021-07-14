import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: false,
    profileData: {},
    profileDataToLoad: {},
    pagination: [],
    numberOfPages: [],
    activePage: 1,
    numItemsPerPage: 10
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
    }
  },
  getters: {
    getProfileData: state => state.profileDataToLoad,
    isLoading: state => state.isLoading,
    totalListLength: state => Object.keys(state.profileData).length,
    numberOfPages: state => state.numberOfPages,
    getActivePage: state => state.activePage,
    getnumItemsPerPage: state => state.numItemsPerPage
  }
});

export default store;
