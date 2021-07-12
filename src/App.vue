<template>
  <div id="nav">
    <router-link to="/">Profiles</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
  border-bottom: 1px solid #2c3e50;
  background-color: #2c3e50;
  color: #f5f5f5;
}

.button:hover {
  background-color: #3a5269;
}

.button:active {
  background-color: #222e3b;
}

.button--green {
  background-color: #42b983;
}

.button:hover.button--green {
  background-color: #56d29a;
}

.button:active.button--green {
  background-color: #3ba575;
}
</style>
