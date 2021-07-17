<template>
  <div
    id="modal-profile"
    class="modal"
    :class="{ 'modal--show': showModal }"
    @click="containerClicked"
  >
    <div class="modal__container">
      <form class="form">
        <h3 class="form__title">Details</h3>
        <div class="form-group">
          <div class="form-input-group">
            <label class="form__label" for="name">Name</label>
            <input
              id="form__name"
              class="form__input"
              name="name"
              type="text"
              :value="profileData?.name ? profileData.name : 'Name'"
              @change="updateData"
            />
          </div>
          <div class="form-input-group">
            <label class="form__label" for="age">Age</label>
            <input
              id="form__age"
              class="form__input"
              name="age"
              type="number"
              :value="profileData?.age ? profileData.age : 'Age'"
              @change="updateData"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="form-input-group">
            <label class="form__label" for="eyeColor">Eye colour</label>
            <input
              id="form__eyeColor"
              class="form__input"
              name="eyeColor"
              type="text"
              :value="
                profileData?.eyeColor ? profileData.eyeColor : 'Eye Colour'
              "
              @change="updateData"
            />
          </div>
          <div class="form-input-group">
            <label class="form__label" for="gender">Gender</label>
            <input
              id="form__gender"
              class="form__input"
              name="gender"
              type="text"
              :value="profileData?.gender ? profileData.gender : 'Gender'"
              @change="updateData"
            />
          </div>
        </div>
        <h3 class="form__title">Location</h3>
        <div class="form-group">
          <div class="form-input-group">
            <label class="form__label" for="latitude">Latitude</label>
            <input
              id="form__latitude"
              class="form__input"
              name="latitude"
              type="text"
              :value="
                profileData?.location?.latitude
                  ? profileData.location.latitude
                  : 'Latitude'
              "
              @change="updateData"
            />
          </div>
          <div class="form-input-group">
            <label class="form__label" for="longitude">Longitude</label>
            <input
              id="form__longitude"
              class="form__input"
              name="longitude"
              type="text"
              :value="
                profileData?.location?.longitude
                  ? profileData.location.longitude
                  : 'Longitude'
              "
              @change="updateData"
            />
          </div>
        </div>

        <h3 class="form__title">Preferences</h3>
        <div class="form-group">
          <div class="form-input-group">
            <label class="form__label" for="pet">Pet</label>
            <input
              id="form__pet"
              class="form__input"
              name="pet"
              type="text"
              :value="
                profileData?.preferences?.pet
                  ? profileData.preferences.pet
                  : 'Pet'
              "
              @change="updateData"
            />
          </div>
          <div class="form-input-group">
            <label class="form__label" for="fruit">Fruit</label>
            <input
              id="form__fruit"
              class="form__input"
              name="fruit"
              type="text"
              :value="
                profileData?.preferences?.fruit
                  ? profileData.preferences.fruit
                  : 'Fruit'
              "
              @change="updateData"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="modal__buttons">
            <button type="button" class="button" @click="closeModal">
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'Modal',
  props: {
    profileData: Object,
    showModal: Boolean
  },
  emits: ['profileUpdated', 'closeModal'],
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    updateData(event) {
      const inputData = {
        profileId: this.profileData._id,
        inputName: event.srcElement.name,
        value: event.target.value
      };

      store.commit('UPDATE_PROFILE_DATA', inputData);
      store.dispatch('updateProfileData');
      this.$emit('profileUpdated');
    },
    containerClicked(event) {
      if (event.srcElement.id === 'modal-profile') {
        this.closeModal();
      }
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
  width: 90vw;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.modal--show {
  position: fixed;
  display: block;
}

.form {
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
}

.form-group {
  display: flex;
  padding: 5px 0;
  flex-direction: column;
  justify-content: space-around;
}

.form__label {
  color: var(--secondary-color);
  display: block;
  text-align: left;
  font-size: 0.8em;
  padding: 2px 0;
}

.form__input {
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

.form__input:focus,
.form__input:focus-visible {
  bottom: 2px;
  background-color: #fff;
  border-bottom-color: #fff;
  outline: none;
  cursor: text;
  box-shadow: 0 3px 4px -2px rgba(0, 0, 0, 0.2);
}

@media screen and (min-width: 580px) {
  .form {
    padding: 0;
  }
  .form-group {
    flex-direction: row;
  }
}

@media screen and (min-width: 980px) {
  .modal__container {
    width: 50vw;
  }
}
</style>
