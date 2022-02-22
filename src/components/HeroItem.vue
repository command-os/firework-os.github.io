<template>
  <div class="hero">
    <slot />
  </div>
</template>

<style lang="less">
.hero {
  width: 100%;
  padding: 0.1rem 0;

  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
    color: #e5e5e5;
  }
}
</style>
