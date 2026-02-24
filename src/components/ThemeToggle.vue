<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { Sun, Moon } from 'lucide-vue-next'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-2 lg:p-2.5 rounded-full glass cursor-pointer transition-all duration-300
           hover:scale-110 active:scale-95
           focus:outline-none focus:ring-2 focus:ring-primary-500/50
           hover:text-amber-500 dark:hover:text-blue-300"
    aria-label="Toggle Theme"
  >
    <Sun v-if="isDark" class="w-5 h-5 text-yellow-300" />
    <Moon v-else class="w-5 h-5 text-gray-600" />
  </button>
</template>
