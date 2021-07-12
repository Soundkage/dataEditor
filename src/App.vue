<template>
  <div id="nav">
    <router-link to="/">Profiles</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
:root {
  --primary-color: #2c3e50;
  --primary-color-dark: #222e3b;
  --primary-color-light: #3a5269;
  --secondary-color: #42b983;
  --secondary-color-dark: #3ba575;
  --secondary-color-light: #56d29a;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  font-size: 16px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--primary-color);
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.button {
  cursor: pointer;
  outline: none;
  border: none;
  margin: 10px;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 5px;
  border-bottom: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: #f5f5f5;
}

.button:hover {
  background-color: var(--primary-color-light);
}

.button:active {
  background-color: var(--primary-color-dark);
}

.button--green {
  background-color: var(--secondary-color);
}

.button:hover.button--green {
  background-color: var(--secondary-color-light);
}

.button:active.button--green {
  background-color: var(--secondary-color-dark);
}
</style>
