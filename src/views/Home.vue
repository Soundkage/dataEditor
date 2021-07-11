<template>
  <div class="home">
    <ProfileSearch />
    <ProfileList :profiles="peopleData" :is-loading="isLoading" />
  </div>
</template>

<script>
import ProfileSearch from '../components/profile-search/profile-search.vue';
import ProfileList from '../components/profile-list/profile-list.vue';
import { onBeforeMount, ref } from '@vue/runtime-core';

export default {
  name: 'Home',
  setup() {
    const peopleData = ref(null);
    const isLoading = ref(true);

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
          peopleData.value = people;
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
      isLoading
    };
  },
  components: {
    ProfileSearch,
    ProfileList
  },
  methods: {}
};
</script>
