<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { Github } from 'lucide-vue-next'
import { ref } from 'vue'

const { labels } = useI18n()

const hasError = ref(false)
const handleImgError = () => {
  hasError.value = true
}

const contribUrl = 'https://ghchart.rshah.org/6366f1/Okysu'
const streakUrl = 'https://github-readme-streak-stats.herokuapp.com/?user=Okysu&theme=transparent&hide_border=true&title_color=6366f1&text_color=718096&icon_color=6366f1&date_format=M%20j%5B%2C%20Y%5D'
</script>

<template>
  <div class="bento-stats glass-card clip-shape-hex flex flex-col items-center justify-center relative group p-4 overflow-visible">
    <!-- Icon/Title Background -->
    <div class="absolute -top-6 -right-5 text-6xl group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out cursor-pointer z-50">🔥</div>
    
    <div class="w-full h-full flex flex-col relative z-10" v-if="!hasError">
      <h3 class="text-xl font-black bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text mb-2">{{ labels.githubStats || 'Stats' }}</h3>
      
      <!-- Contributions Graph -->
      <div class="flex-1 min-h-0 flex flex-col justify-center gap-3">
        <img
          :src="contribUrl"
          alt="GitHub Contributions"
          @error="handleImgError"
          class="w-full object-contain dark:invert dark:hue-rotate-180 dark:brightness-110 dark:contrast-90 transition-all opacity-80 group-hover:opacity-100"
        />
        <!-- Streak Stats -->
        <img
          :src="streakUrl"
          alt="GitHub Streak"
          @error="handleImgError"
          class="w-full object-contain dark:invert dark:hue-rotate-180 dark:brightness-110 dark:contrast-90 transition-all opacity-80 group-hover:opacity-100"
        />
      </div>
    </div>
    
    <div v-else class="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 text-sm gap-2 z-10">
      <Github class="w-10 h-10 opacity-40 mb-2" />
      <p class="font-bold text-center">{{ labels.statsUnavailable }}</p>
      <a href="https://github.com/Okysu" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:underline font-medium text-xs">
        {{ labels.viewOnGithub || 'View on GitHub' }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.clip-shape-hex {
  clip-path: polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%);
  border-radius: 0;
}
</style>
