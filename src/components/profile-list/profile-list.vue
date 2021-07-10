<template>
  <div class="list profile-list">
    <div class="list__head">
      <div class="list__row">
        <div class="list__cell">User Profiles</div>
      </div>
    </div>
    <div class="list__body">
      <div class="list__row">
        <div class="list__cell">Stephens Townsend</div>
      </div>
      <div class="list__row">
        <div class="list__cell">Padilla Blair</div>
      </div>
      <div class="list__row">
        <div class="list__cell">Mercado West</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  props: {},
  data() {
    return {
      isSelected: false
    };
  }
};
</script>

<style>
.list {
  width: 60vw;
  margin: auto;
  border: 1px solid #ececec;
  border-radius: 5px;
  box-shadow: 0px 5px 8px -5px rgba(0, 0, 0, 0.2);
}

.list__head {
  background-color: #2c3e50;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px 5px 0 0;
  color: #42b983;
}

.list__head .list__row,
.list__head .list__row:hover {
  background-color: #2c3e50;
  border-radius: 5px 5px 0 0;
  cursor: default;
}

.list__body {
  border-radius: 0 0 5px 5px;
}

.list__row {
  cursor: pointer;
}

.list__row:hover {
  background-color: #ececec;
}

.list__row:active,
.list__row--active {
  background-color: #dedede;
}

.list__cell {
  padding: 20px;
}
</style>
