<template>
  <div class="export">
    <button class="button button--green button__export" @click="exportList()">
      Export List
    </button>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'ExportButton',
  methods: {
    exportList: () => {
      const exportData = store.getters.getProfileData || null;
      if (exportData) {
        const dataBlob = new Blob([JSON.stringify(exportData, null, 2)], {
          type: 'application/json'
        });

        const url = URL.createObjectURL(dataBlob);
        const dummyLink = document.createElement('a');

        dummyLink.href = url;
        dummyLink.download = `profileList-${Date.now()}.json`;
        dummyLink.click();
      } else {
        // should not get here as the button won't be created if no data
        console.error('[Export] No profile data found');
      }
    }
  }
};
</script>

<style>
.export {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 80px;
}

.export .button {
  margin: 0;
}
</style>
