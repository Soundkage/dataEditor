<template>
  <div class="profiles">
    <ProfileSearch @searching="updateList" />
    <ProfileList
      :profiles="listToLoad"
      :is-loading="isLoading"
      @row-clicked="rowClicked"
    />
  </div>
  <Modal
    :show="showModal"
    :profile="profileData"
    @updated-show="updateShowModal"
  />
</template>

<script>
import ProfileSearch from '../components/profile-search/profile-search.vue';
import ProfileList from '../components/profile-list/profile-list.vue';
import Modal from '../components/modal/modal.vue';
import { onBeforeMount, ref } from '@vue/runtime-core';

const peopleData = ref(null);
const listToLoad = ref(null);
const isLoading = ref(true);
const showModal = ref(false);
const profileData = ref(null);

export default {
  name: 'Profiles',
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
            throw `[Profiles View] Request Error | ${response.statusText}`;
          }
          return response.json();
        })
        .then(people => {
          peopleData.value = people; // Need to keep an unedited copy in mem
          listToLoad.value = peopleData.value;
          isLoading.value = false;
        })
        .catch(error => {
          throw `[Profiles View] Error retreiving data | ${error}`;
        });
    };

    onBeforeMount(() => {
      getData();
    });

    return {
      peopleData,
      listToLoad,
      isLoading,
      showModal,
      profileData
    };
  },
  components: {
    ProfileSearch,
    ProfileList,
    Modal
  },
  methods: {
    updateList: searchString => {
      listToLoad.value = peopleData.value;
      const newList = Object.values(peopleData.value).filter(person => {
        return (
          person.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        );
      });

      listToLoad.value = newList;
    },
    rowClicked: profile => {
      showModal.value = true;
      profileData.value = profile;
      console.log(profile);
    },
    updateShowModal: show => {
      showModal.value = show;
    }
  }
};
</script>
