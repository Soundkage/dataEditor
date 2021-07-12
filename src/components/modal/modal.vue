<template>
  <div class="modal" :class="{ 'modal--show': show }">
    <div class="modal__container">
      <form class="form">
        <div class="form-group">
          <label for="form__name">Name:</label>
          <input
            id="form__name"
            class="form__input"
            name="name"
            type="text"
            :value="profile ? profile.name : ''"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label for="form__age">Age:</label>
          <input
            id="form__age"
            class="form__input"
            name="age"
            type="number"
            :value="profile ? profile.age : 0"
            placeholder="Age"
          />
        </div>
        <!-- <input
          type="text"
          :value="profile ? profile.eyeColor : ''"
          placeholder="Eye Colour"
        />
        <input
          type="text"
          :value="profile ? profile.gender : ''"
          placeholder="Gender"
        />
        <input
          type="text"
          :value="profile ? profile.location.latitude : ''"
          placeholder="Latitude"
        />
        <input
          type="text"
          :value="profile ? profile.location.longitude : ''"
          placeholder="Longitude"
        />
        <input
          type="text"
          :value="profile ? profile.preferences.pet : ''"
          placeholder="Favourite Pet"
        />
        <input
          type="text"
          :value="profile ? profile.preferences.fruit : ''"
          placeholder="Favourite Fruit"
        /> -->
      </form>
      <div class="modal__buttons">
        <button
          class="button button--green"
          type="submit"
          @click="saveChanges(profile)"
        >
          Save
        </button>
        <button class="button" @click="updateShow">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    profile: Object
  },
  setup() {
    return {
      name: '',
      age: 0,
      eyeColor: '',
      gender: '',
      locationLat: '',
      locationLong: '',
      preferencePet: '',
      preferenceFuit: ''
    };
  },
  emits: ['updatedShow', 'saveProfileChanges'],
  methods: {
    updateShow() {
      this.$emit('updatedShow', !this.show);
    },
    saveChanges(profile) {
      this.$emit('saveProfileChanges profile');
      console.log('Save changes', profile.name.value);
      this.updateShow();
    }
  }
};
</script>

<style>
.modal {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.modal__container {
  position: relative;
  width: 50vw;
  padding: 20px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.modal--show {
  display: block;
}
</style>
