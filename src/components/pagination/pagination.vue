<template>
  <div class="pagination">
    <ul class="list" v-if="numOfPages > 1">
      <li
        class="button list__item"
        :class="activePageNum === 1 ? 'list__item--disabled' : ''"
        @click="navigateLeft()"
      >
        &lt;
      </li>
      <li
        class="button list__item"
        v-for="num in pages"
        :key="num"
        :class="activePageNum === num ? 'list__item--active button--green' : ''"
        @click="loadPage(num)"
      >
        {{ num }}
      </li>
      <li
        class="button list__item"
        :class="activePageNum === pages ? 'list__item--disabled' : ''"
        @click="navigateRight()"
      >
        &gt;
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../../store';
import { ref } from '@vue/runtime-core';
let activePageNum = ref(1);

export default {
  name: 'Pagination',
  setup() {
    return {
      activePageNum
    };
  },
  emits: ['changePage'],
  methods: {
    loadPage(pageNumber) {
      activePageNum.value = pageNumber;
      store.commit('SET_ACTIVE_PAGE', pageNumber);
      this.$emit('changePage');
    },
    navigateLeft() {
      activePageNum.value--;
      store.commit('SET_ACTIVE_PAGE', activePageNum);
      this.$emit('changePage');
    },
    navigateRight() {
      activePageNum.value++;
      store.commit('SET_ACTIVE_PAGE', activePageNum.value);
      this.$emit('changePage');
    }
  },
  computed: {
    pages: () => store.getters.numberOfPages,
    numOfPages: () => store.getters.numberOfPages
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
