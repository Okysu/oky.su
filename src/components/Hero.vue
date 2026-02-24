<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { Github, Newspaper, FileText, Mail, Award } from 'lucide-vue-next'
import { computed } from 'vue'
import type { LinkItem } from '../data/types'

const { profile } = useI18n()

// 映射图标名到 lucide 组件
const iconMap: Record<string, any> = {
  github: Github,
  newspaper: Newspaper,
  'file-text': FileText,
  mail: Mail
}

const getIcon = (link: LinkItem) => iconMap[link.icon] || FileText

// 标题拆分
const titleMain = computed(() => {
  const parts = profile.value.title.split('👋')
  return parts[0] + '👋'
})
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex-1 flex flex-col justify-center min-h-0">
      <!-- 徽章 -->
      <div v-if="profile.badges.length" class="mb-3 lg:mb-4 flex flex-wrap gap-2">
        <span
          v-for="badge in profile.badges"
          :key="badge"
          class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                 bg-primary-50 text-primary-600 border border-primary-200
                 dark:bg-primary-900/30 dark:text-primary-400 dark:border-primary-400/30"
        >
          <Award class="w-3.5 h-3.5" />
          {{ badge }}
        </span>
      </div>

      <!-- 标题 -->
      <h1 class="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-2 lg:mb-4 leading-tight">
        <span class="text-gradient">{{ titleMain }}</span><br />
        <span class="text-gray-900 dark:text-white">I'm {{ profile.name }}</span>
      </h1>

      <p class="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 mb-4 lg:mb-6 max-w-xl font-medium leading-relaxed">
        {{ profile.subtitle }}
      </p>

      <!-- 关于我 -->
      <div class="space-y-2 text-xs sm:text-sm lg:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
        <p v-for="(paragraph, index) in profile.about" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>

    <!-- 社交链接 -->
    <div class="flex flex-wrap gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-gray-200 dark:border-gray-700/50 shrink-0">
      <a
        v-for="link in profile.links"
        :key="link.id"
        :href="link.url"
        :target="link.id === 'email' ? undefined : '_blank'"
        rel="noopener noreferrer"
        :aria-label="link.name"
        class="link-btn glass-card flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl text-xs sm:text-sm font-medium
               text-gray-700 dark:text-gray-200"
      >
        <component :is="getIcon(link)" class="w-4 h-4" />
        <span>{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>
