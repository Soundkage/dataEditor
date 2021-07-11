<template>
  <div class="home">
    <ProfileSearch @searching="updateList" />
    <ProfileList :profiles="listToLoad" :is-loading="isLoading" />
  </div>
</template>

<script>
import ProfileSearch from '../components/profile-search/profile-search.vue';
import ProfileList from '../components/profile-list/profile-list.vue';
import { onBeforeMount, ref } from '@vue/runtime-core';

const peopleData = ref(null);
const listToLoad = ref(null);
const isLoading = ref(true);

export default {
  name: 'Home',
  setup() {
    const getData = async () => {
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
            throw `[Home View] Fetch Error | ${response.statusText}`;
          }
          return response.json();
        })
        .then(people => {
          peopleData.value = people; // Need to keep an unedited copy
          listToLoad.value = peopleData.value;
          isLoading.value = false;
        })
        .catch(error => {
          throw `[Home View] Error retreiving data | ${error}`;
        });
    };

    onBeforeMount(() => {
      getData();
    });

    return {
      peopleData,
      listToLoad,
      isLoading
    };
  },
  components: {
    ProfileSearch,
    ProfileList
  },
  methods: {
    updateList: searchString => {
      listToLoad.value = peopleData.value;
      let newList = Object.values(peopleData.value).filter(person => {
        return person.name.toLowerCase().indexOf(searchString) !== -1;
      });

      listToLoad.value = newList;
    }
  }
};
</script>
