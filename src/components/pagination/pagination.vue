<template>
  <div class="pagination">{{ this.paginate() }}</div>
</template>

<script>
import store from '../../store';

export default {
  name: 'Pagination',
  methods: {
    paginate: () => {
      console.log('>>>> HIT', store.getters.totalListLength);
    }
  }
};
</script>

<style></style>
