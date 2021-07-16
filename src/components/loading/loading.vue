<template>
  <div class="loading">
    <div class="loading__container">
      <p>Loading {{ componentName.toLowerCase() }} ...</p>
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
  name: 'Loading',
  props: {
    componentName: String
  }
};
</script>

<style>
.loading {
  width: 100%;
  height: 100%;
  font-weight: bold;
}

.loading__container {
  width: 100%;
  margin: auto;
  border-radius: 10px;
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
  background: var(--secondary-color);
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
