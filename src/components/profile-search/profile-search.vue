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
  </div>
</template>

<script>
export default {
  name: 'ProfileSearch',
  setup() {
    return {};
  },
  emits: ['searching'],
  methods: {
    runSearch(event) {
      this.$emit('searching', event.target.value);
    }
  }
};
</script>

<style>
.search {
  margin: 0 auto 20px;
  width: 60vw;
}

.searchbar__input {
  position: relative;
  bottom: 0;
  width: 100%;
  border: none;
  padding: 10px;
  font-size: 1em;
  color: #2c3e50;
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  border-bottom-color: #c7c7c7;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.searchbar__input:focus,
.searchbar__input:focus-visible {
  bottom: 2px;
  background-color: #fff;
  border-bottom-color: #fff;
  outline: none;
  cursor: text;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.2);
}
</style>
