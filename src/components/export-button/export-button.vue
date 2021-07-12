<template>
  <div class="export">
    <button
      class="button button--green button__export"
      @click="exportList(data.value)"
    >
      Export List
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExportButton',
  props: {
    data: Object
  },
  methods: {
    exportList: data => {
      console.log('>>>> Export', data);
    }
  }
};
</script>

<style></style>
