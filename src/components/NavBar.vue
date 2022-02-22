<script setup lang="ts">
import Divider from "@/components/Divider.vue";
import SmoothImage from "@/components/SmoothImage.vue";
import { resolve_path } from "@/utils/resolve_path.ts";
</script>

<template>
  <nav>
    <router-link to="/">
      <SmoothImage
        :src="resolve_path('logo.png')"
        alt="Firework Logo"
        height="2rem"
        width="2rem"
        radius="6px"
      />
    </router-link>
    <Divider vertical />
    <router-link to="/docs">Docs</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style lang="less">
nav {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  height: 2.75rem;
  padding: 0.5rem 1rem 0.5rem;
  border-bottom: 0.1rem solid black;
  background: #191919;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    border-bottom: 0.1rem solid slategray;
  }

  a {
    color: steelblue;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: 0.25rem;
  }
}
</style>
