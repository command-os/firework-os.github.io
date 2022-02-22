<script setup lang="ts">
import Hero from "@/components/HeroItem.vue";
import Footer from "@/components/PageFooter.vue";
</script>

<template>
  <main>
    <Hero style="background-color: steelblue">
      <h1 class="title">Firework</h1>
      <h3 class="subtitle">Modern, fast and stable Operating System</h3>
    </Hero>
    <Hero style="background-color: #151515">
      <h1 class="title">Filler content</h1>
      <h3 class="subtitle">Yes</h3>
    </Hero>
  </main>
  <Footer />
</template>
