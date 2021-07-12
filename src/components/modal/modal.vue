<template>
  <div
    @click="updateShow"
    class="modal__container"
    :class="{ 'modal--show': show }"
  >
    <!-- <div class="modal-info">
      <p>{{ profileData.name }}</p>
      <p>{{ profileData.age }}</p>
      <p>{{ profileData.eyeColor }}</p>
      <p>{{ profileData.location }}</p>
      <p>{{ profileData.preferences }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    profileData: Object
  },
  emits: ['updatedShow'],
  methods: {
    updateShow() {
      this.$emit('updatedShow', !this.show);
    }
  }
};
</script>

<style>
.modal__container {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: white;
  background: black;
}

.modal--show {
  display: block;
}
</style>
