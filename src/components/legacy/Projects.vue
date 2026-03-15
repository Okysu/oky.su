<script setup lang="ts">
import { useI18n } from '../../composables/useI18n'
import { FolderGit2, ArrowUpRight } from 'lucide-vue-next'

const { profile, labels } = useI18n()
</script>

<template>
  <div class="h-full flex flex-col">
    <h2 class="text-lg lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2 shrink-0">
      <FolderGit2 class="w-5 h-5 lg:w-6 lg:h-6 text-primary-500" />
      {{ labels.projects }}
    </h2>

    <div v-auto-animate class="flex-1 min-h-0 overflow-y-auto hide-scrollbar pb-2 pr-1 pt-2 px-1 space-y-4 lg:space-y-5">
      <a
        v-for="(project, index) in profile.projects"
        :key="project.id"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="block p-4 lg:p-5 rounded-2xl glass-card group relative overflow-visible transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(99,102,241,0.15)] hover:border-primary-400/50 dark:hover:border-primary-500/50"
        :style="{ animation: `slideUp 0.4s ease-out forwards ${index * 0.1}s`, opacity: 0 }"
      >
        <!-- 鑳屾櫙鍔ㄦ晥 -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div class="relative z-10 flex flex-col h-full">
          <!-- 澶撮儴锛氭爣棰樹笌绠ご -->
          <div class="flex justify-between items-start mb-2 lg:mb-3">
            <div class="pr-4">
              <h3 class="text-base lg:text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ project.name }}
              </h3>
              <p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium leading-relaxed">
                {{ project.tagline }}
              </p>
            </div>
            <div class="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-primary-50 dark:bg-gray-800 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 shrink-0 shadow-sm border border-primary-100 dark:border-gray-700">
              <ArrowUpRight class="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
          </div>

          <!-- 鐗规€у垪琛?-->
          <ul class="text-[11px] lg:text-xs text-gray-500 dark:text-gray-400 space-y-1 lg:space-y-1.5 mb-4 flex-1">
            <li v-for="(feature, idx) in project.features" :key="idx" class="flex items-start gap-2">
              <span class="text-primary-400 font-bold translate-y-[1px]">鉁?/span>
              <span class="leading-relaxed">{{ feature }}</span>
            </li>
          </ul>

          <!-- 鎶€鏈爤 -->
          <div class="mt-auto flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-700/50">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="px-2.5 py-1 rounded-md text-[10px] lg:text-xs font-bold tracking-wide
                     bg-gray-100/80 text-gray-600
                     dark:bg-gray-800 dark:text-gray-300
                     group-hover:bg-primary-50 group-hover:text-primary-600 
                     dark:group-hover:bg-primary-500/20 dark:group-hover:text-primary-400 transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
