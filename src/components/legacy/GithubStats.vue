<script setup lang="ts">
import { useI18n } from '../../composables/useI18n'
import { BarChart3, Github } from 'lucide-vue-next'
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
  <div class="h-full flex flex-col">
    <h2 class="text-lg lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2 shrink-0">
      <BarChart3 class="w-5 h-5 lg:w-6 lg:h-6 text-primary-500" />
      {{ labels.githubStats }}
    </h2>

    <div v-auto-animate class="flex-1 min-h-0 flex flex-col gap-3 lg:gap-4 overflow-y-auto hide-scrollbar pb-2 pt-2 px-1">
      <template v-if="!hasError">
        <!-- Contributions Graph -->
        <div class="w-full rounded-2xl glass-card flex flex-col items-center justify-center p-3 lg:p-4 shrink-0 transition-transform overflow-visible hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(99,102,241,0.15)] hover:border-primary-400/50 dark:hover:border-primary-500/50">
          <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 self-start">Contributions Graph</p>
          <img
            :src="contribUrl"
            alt="GitHub Contributions"
            @error="handleImgError"
            class="w-full object-contain dark:invert dark:hue-rotate-180 dark:brightness-110 dark:contrast-90 transition-all opacity-90 hover:opacity-100"
          />
        </div>
        
        <!-- Streak Stats -->
        <div class="w-full rounded-2xl glass-card flex items-center justify-center p-2 lg:p-3 shrink-0 transition-transform overflow-visible hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(99,102,241,0.15)] hover:border-primary-400/50 dark:hover:border-primary-500/50">
          <img
            :src="streakUrl"
            alt="GitHub Streak"
            @error="handleImgError"
            class="max-w-full h-auto object-contain dark:invert dark:hue-rotate-180 dark:brightness-110 dark:contrast-90 transition-all opacity-90 hover:opacity-100"
          />
        </div>
      </template>

      <div v-else class="flex-1 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 text-sm gap-3">
        <Github class="w-12 h-12 opacity-40" />
        <p>{{ labels.statsUnavailable }}</p>
        <a
          href="https://github.com/Okysu"
          target="_blank"
          rel="noopener noreferrer"
          class="link-btn text-primary-500 dark:text-primary-400 hover:underline font-medium"
        >
          {{ labels.viewOnGithub }}
        </a>
      </div>
    </div>
  </div>
</template>
