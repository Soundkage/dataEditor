<template>
  <table class="table profile-table">
    <thead class="table__head">
      <tr class="table__row">
        <td class="table__cell">Name</td>
        <td class="table__cell">Age</td>
        <td class="table__cell">Eye Colour</td>
        <td class="table__cell">Gender</td>
      </tr>
    </thead>
    <tbody class="table__body">
      <tr
        class="table__row"
        :key="profile._id"
        v-for="profile in profiles"
        @click="onRowClicked(profile)"
      >
        <td class="table__cell">{{ profile.name }}</td>
        <td class="table__cell">{{ profile.age }}</td>
        <td class="table__cell">{{ profile.eyeColor }}</td>
        <td class="table__cell">{{ profile.gender }}</td>
      </tr>
    </tbody>
  </table>
  <Modal
    :showModal="showModal"
    :profile-data="profileToShow"
    @close-modal="closeModalClicked"
    @profile-updated="reload"
  />
</template>

<script>
import Modal from '../modal/modal.vue';
import store from '../../store';
import { ref } from '@vue/runtime-core';

const showModal = ref(false);
const profileToShow = ref(null);

export default {
  name: 'ProfileList',
  components: {
    Modal
  },
  props: {
    profiles: Object
  },
  emits: ['row-clicked', 'reloadList'],
  setup() {
    return {
      showModal,
      profileToShow
    };
  },
  methods: {
    onRowClicked(profile) {
      store.commit('SET_FORM_DATA', profile);
      profileToShow.value = profile;
      showModal.value = true;
    },
    closeModalClicked() {
      showModal.value = false;
    },
    reload() {
      this.$emit('reloadList');
    }
  }
};
</script>

<style>
.table {
  width: 100%;
  margin: auto;
  border: 1px solid #ececec;
  border-bottom-color: #c7c7c7;
  border-radius: 5px;
  border-spacing: 0;
  box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.2);
}

.table__head {
  background-color: var(--primary-color);
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
  color: #42b983;
}

.table__head .table__cell:first-child {
  border-radius: 5px 0 0 0;
}
.table__head .table__cell:last-child {
  border-radius: 0 5px 0 0;
}

.table__head .table__row,
.table__head .table__row:hover,
.table__head .table__row:last-child:hover,
.table__head .table__row:last-child {
  background: var(--primary-color);
  border-radius: 5px 5px 0 0;
  cursor: default;
}

.table__body {
  border-radius: 0 0 5px 5px;
}

.table__body:empty {
  min-height: 100px;
  line-height: 1em;
}

.table__body:empty::before {
  content: 'No content found';
  font-weight: bold;
  font-size: 1.2em;
  line-height: 5em;
}

.table__row {
  cursor: pointer;
  text-align: left;
}

.table__row:last-child {
  border-bottom: none;
  background: linear-gradient(
    0deg,
    rgba(143, 155, 175, 0.15) 0%,
    rgba(253, 187, 46, 0) 50%
  );
}

.table__row:hover,
.table__row:last-child:hover {
  background-color: #ececec;
}

.table__row:active,
.table__row--active,
.table__row:active:last-child {
  background-color: #dedede;
}

.table__cell {
  padding: 20px;
  border-bottom: 1px solid #ececec;
}
</style>
