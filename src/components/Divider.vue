<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  text?: string;
  vertical?: boolean;
}>();
</script>

<template>
  <div
    :class="{
      divider: true,
      vertical,
      'no-text': !text || text.trim().length === 0,
    }"
  >
    {{ text }}
  </div>
</template>

<style scoped lang="less">
.divider {
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.25rem;

  &::before,
  &::after {
    content: "";
    display: block;
    flex: 1;

    background-color: slategray;
  }

  &:not(.vertical) {
    &::before,
    &::after {
      height: 1px;
    }
  }

  &.vertical {
    flex-direction: column;

    &::before,
    &::after {
      height: auto;
      width: 1px;
    }
  }

  &:not(.no-text) {
    color: #959595;

    &:not(.vertical)::before,
    &:not(.vertical)::after {
      margin-right: 1rem;
      margin-left: 1rem;
    }

    &.vertical::before,
    &.vertical::after {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
}
</style>
