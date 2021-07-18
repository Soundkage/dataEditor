<template>
  <div class="pagination">
    <ul class="list" v-if="pages > 1">
      <li
        class="button list__item"
        :class="getActivePage === 1 ? 'list__item--disabled' : ''"
        @click="navigateLeft()"
      >
        &lt;
      </li>
      <li
        class="button list__item"
        v-for="num in pages"
        :key="num"
        :class="getActivePage === num ? 'list__item--active button--green' : ''"
        @click="loadPage(num)"
      >
        {{ num }}
      </li>
      <li
        class="button list__item"
        :class="getActivePage === pages ? 'list__item--disabled' : ''"
        @click="navigateRight()"
      >
        &gt;
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'Pagination',
  emits: ['changePage'],
  methods: {
    loadPage(pageNumber) {
      store.commit('SET_ACTIVE_PAGE', pageNumber);
      this.$emit('changePage');
    },
    navigateLeft() {
      let activePageNumber = store.getters.getActivePage;
      activePageNumber--;
      store.commit('SET_ACTIVE_PAGE', activePageNumber);
      this.$emit('changePage');
    },
    navigateRight() {
      let activePageNumber = store.getters.getActivePage;
      activePageNumber++;
      store.commit('SET_ACTIVE_PAGE', activePageNumber);
      this.$emit('changePage');
    }
  },
  computed: {
    pages: () => store.getters.numberOfPages,
    getActivePage: () => store.getters.getActivePage
  }
};
</script>

<style>
.pagination .button {
  margin: 10px 5px;
}

.list {
  list-style: none;
  padding: 0;
}

.list__item {
  cursor: pointer;
  display: inline-block;
  font-weight: bold;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.list__item--active {
  transform: scale(1.2);
}

.list__item--disabled {
  pointer-events: none;
  visibility: hidden;
}

@media screen and (min-width: 820px) {
  .pagination .button {
    margin: 10px;
  }
}
</style>
