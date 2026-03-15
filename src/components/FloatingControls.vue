<script setup lang="ts">
import ThemeToggle from './legacy/ThemeToggle.vue'
import LangToggle from './legacy/LangToggle.vue'
</script>

<template>
  <div class="fixed top-6 right-6 z-50 flex items-center justify-center gap-4 py-3 px-8">
    <div class="absolute inset-0 floating-bg -z-10"></div>
    <LangToggle />
    <ThemeToggle />
  </div>
</template>

<style scoped>
.floating-bg {
  clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.dark .floating-bg {
  background: rgba(17, 24, 39, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
}
</style>
