<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
};
</script>

<style>
.header {
  width: 100%;
  text-align: left;
}
</style>
