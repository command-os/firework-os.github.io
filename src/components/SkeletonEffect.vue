<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  maxWidth: { type: Number, default: 25 },
  minWidth: { type: Number, default: 1 },
  height: { type: String, default: "1em" },
  width: { type: String, default: null },
  radius: { type: String, default: "6px" },
});

const style = computed(
  () =>
    `width: ${
      props.width ||
      `${Math.floor(
        Math.random() * (props.maxWidth - props.minWidth) + props.minWidth
      )}%`
    }; height: ${props.height}; border-radius: ${props.radius}`
);
</script>

<template>
  <div class="skeleton" :style="style"></div>
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
