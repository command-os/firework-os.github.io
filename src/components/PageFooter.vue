<script setup lang="ts">
import Divider from "@/components/Divider.vue";
import SmoothImage from "@/components/SmoothImage.vue";
import { resolve_path } from "@/utils/resolve_path.ts";
</script>

<template>
  <footer>
    <h3>&copy; 2021-2022 VisualDevelopment. All rights reserved.</h3>
    <Divider />
    <a href="https://github.com/Firework-OS" target="_blank">
      <SmoothImage
        :src="resolve_path('github.png')"
        alt="GitHub logo"
        height="2.5rem"
        width="2.5rem"
        radius="2.5rem"
      />
    </a>
  </footer>
</template>

<style lang="less">
footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem 1rem 2rem;
  justify-content: center;
  gap: 1rem;

  h3 {
    margin: 0;
  }

  a > img {
    background: #0e0e0e;
    border-radius: 2.5rem;
  }
}
</style>
