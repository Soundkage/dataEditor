<template>
  <div class="loading">
    <div class="loading__container">
      <div class="loader">
        <div class="loader__dot"></div>
        <div class="loader__dot"></div>
        <div class="loader__dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
};
</script>

<style>
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: bold;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.loading__container {
  position: relative;
  top: 50%;
  width: 300px;
  margin: auto;
  border-radius: 10px;
  transform: translateY(-50%);
  padding: 20px;
}

/* ---- Adapted from Jason Liquorish - https://codepen.io/bassetts/pen/RqrPWG ------ */

.loader {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.loader__dot {
  width: 1rem;
  height: 1rem;
  margin: 2rem 0.3rem;
  background: #42b983;
  border-radius: 50%;
  animation: 0.9s bounce infinite alternate;
}

.loader__dot:nth-child(2) {
  animation-delay: 0.3s;
}

.loader__dot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}
/* ----------------------------------------------------------------------------------- */
</style>
