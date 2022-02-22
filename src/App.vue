<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  color: whitesmoke;
  background: #191919;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  flex-grow: 1;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
