<template>
  <div class="list profile-list">
    <div class="list__head">
      <div class="list__row">
        <div class="list__cell">User Profiles</div>
      </div>
    </div>
    <div class="list__body">
      <Loading :component-name="'Profile list'" v-if="isLoading" />
      <div
        class="list__row"
        :key="profile._id"
        v-for="profile in profiles"
        @click="onRowClicked(profile)"
      >
        <div class="list__cell">{{ profile.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../loading/loading.vue';
import store from '../../store';

export default {
  name: 'ProfileList',
  props: {
    profiles: Object
  },
  components: {
    Loading
  },
  emits: ['row-clicked'],
  methods: {
    onRowClicked: profile => {
      this.$emit('row-clicked', profile);
      console.log('row clicked');
    }
  },
  computed: {
    isLoading: () => store.getters.isLoading
  }
};
</script>

<style>
.list {
  width: 60vw;
  margin: auto;
  border: 1px solid #ececec;
  border-bottom-color: #c7c7c7;
  border-radius: 5px;
  box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.2);
}

.list__head {
  background-color: var(--primary-color);
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
  color: #42b983;
}

.list__head .list__row,
.list__head .list__row:hover,
.list__head .list__row:last-child:hover,
.list__head .list__row:last-child {
  background: var(--primary-color);
  border-radius: 5px 5px 0 0;
  cursor: default;
}

.list__body {
  border-radius: 0 0 5px 5px;
}

.list__body:empty {
  min-height: 100px;
  line-height: 1em;
}

.list__body:empty::after {
  content: 'No content found';
  font-weight: bold;
  font-size: 1.2em;
  line-height: 5em;
}

.list__row {
  cursor: pointer;
  border-bottom: 1px solid #ececec;
}

.list__row:last-child {
  border-bottom: none;
  background: linear-gradient(
    0deg,
    rgba(143, 155, 175, 0.15) 0%,
    rgba(253, 187, 46, 0) 50%
  );
}

.list__row:hover,
.list__row:last-child:hover {
  background-color: #ececec;
}

.list__row:active,
.list__row--active,
.list__row:active:last-child {
  background-color: #dedede;
}

.list__cell {
  padding: 20px;
}
</style>
