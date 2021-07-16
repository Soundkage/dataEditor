<template>
  <div class="profiles">
    <Header class="profiles-header" :title="'Profiles'" />
    <ExportButton :data="peopleData" />
    <ProfileSearch @searching="updateFromSearch" />
    <Loading v-if="isLoading" :component-name="'Profile table'" />
    <ProfileList v-if="!isLoading" :profiles="listToLoad" />
    <Pagination v-if="!isLoading" @changePage="loadPage" />
  </div>
</template>

<script>
import Header from '../components/header/header.vue';
import ProfileSearch from '../components/profile-search/profile-search.vue';
import ProfileList from '../components/profile-list/profile-list.vue';
import ExportButton from '../components/export-button/export-button.vue';
import Pagination from '../components/pagination/pagination.vue';
import Loading from '../components/loading/loading.vue';
import store from '../store';
import { onBeforeMount, ref } from '@vue/runtime-core';

const peopleData = ref(null);
const listToLoad = ref(null);

export default {
  name: 'Profiles',
  setup() {
    const loadPage = () => {
      const activePage = store.getters.getActivePage;
      const itemsPerPage = store.getters.getnumItemsPerPage;

      let startIndex = activePage === 1 ? 0 : (activePage - 1) * itemsPerPage;
      let endIndex =
        activePage === 1 ? itemsPerPage : itemsPerPage * activePage;

      listToLoad.value = peopleData.value.filter(
        (person, index) => startIndex <= index && index < endIndex
      );
    };

    const getData = async () => {
      store.commit('SET_ISLOADING', true);
      /**
       * Uploaded data to mocklab so I could use fetch
       * The link provided was throwing CORS errors
       * My IP would probably need whitelising on your
       * server or there would need to be a publicly
       * accessable endpoint for me to access that data
       */
      await fetch('http://qvk16.mocklab.io/people', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw `[Profiles View] Request Error | ${response.statusText}`;
          }

          return response.json();
        })
        .then(people => {
          store.commit('SET_PROFILE_DATA', people);
          store.commit('SET_PROFILE_DATA_TO_LOAD', people);
          store.commit('SET_ISLOADING', false);

          peopleData.value = people; // Need to keep an unedited copy in mem
        })
        .catch(error => {
          throw `[Profiles View] Error retreiving data | ${error}`;
        });
    };

    onBeforeMount(async () => {
      await getData();
      loadPage();
    });

    return {
      peopleData,
      listToLoad,
      loadPage
    };
  },
  components: {
    ProfileSearch,
    ProfileList,
    ExportButton,
    Pagination,
    Loading,
    Header
  },
  methods: {
    exportList() {
      console.log('Export list');
    },
    updateFromSearch: searchString => {
      const newList = Object.values(peopleData.value).filter(person => {
        return (
          person.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        );
      });
      store.commit('SET_PROFILE_DATA_TO_LOAD', newList);
      listToLoad.value = newList;
    }
  },
  computed: {
    isLoading: () => store.getters.isLoading
  }
};
</script>

<style>
.profiles {
  position: relative;
  margin: auto;
}

.profiles-header {
  display: inline-block;
}

@media screen and (min-width: 680px) {
  .profiles {
    width: 60vw;
  }
}
</style>
