<script setup lang="ts" async>
import { defineProps, ref } from "vue";

const props = defineProps<{
  src: string;
  alt: string;
  width: string;
  height: string;
  radius: string;
}>();

const style = ref(`width: ${props.width}; height: ${props.height};`);
const isLoading = ref(true);
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :style="style"
    :class="{ skeleton: isLoading }"
    @load="isLoading = false"
  />
</template>

<style scoped lang="less">
.skeleton {
  position: relative;
  display: inline-block;
  content: "";
  background: #0e0e0e;
  background-image: linear-gradient(
    110deg,
    #0e0e0e 0%,
    #191919 20%,
    #0e0e0e 40%,
    #0e0e0e 100%
  );
  animation: 1s shimmer linear infinite;
  animation-fill-mode: forwards;
  background-size: 200% 100%;
  background-repeat: no-repeat;

  @keyframes shimmer {
    from {
      background-position: 100% 0;
    }

    to {
      background-position: -100% 0;
    }
  }
}
</style>
