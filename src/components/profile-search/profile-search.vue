<template>
  <div class="search">
    <div class="searchbar">
      <input
        class="searchbar__input"
        name="profileSearchbar"
        type="text"
        placeholder="Search..."
        @keyup="runSearch"
      />
    </div>
    <div class="button"></div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSearch',
  data() {
    return {}
  },
  methods: {
    runSearch(event) {
      console.log('Search for', event.target.value)
    }
  }
}
</script>

<style>
.search {
  margin-bottom: 20px;
  width: 60vw;
}

.searchbar {
}

.searchbar__input {
}
</style>
