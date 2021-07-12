import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: false,
    profileData: {},
    profileDataToLoad: {}
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
    }
  },
  actions: {},
  getters: {
    getProfileData: state => state.profileDataToLoad,
    isLoading: state => state.isLoading
  }
});

export default store;
