<script setup lang="ts">
import { useI18n } from '../../composables/useI18n'
import { ref } from 'vue'
import { Code } from 'lucide-vue-next'

const { profile, labels } = useI18n()

// 鍥剧墖鍔犺浇澶辫触鏃剁殑闄嶇骇澶勭悊
const failedIcons = ref<Set<string>>(new Set())
const handleImgError = (id: string) => {
  failedIcons.value.add(id)
}
</script>

<template>
  <div class="h-full flex flex-col">
    <h2 class="text-lg lg:text-2xl font-bold mb-3 lg:mb-5 text-gray-800 dark:text-gray-100 flex items-center gap-2 shrink-0">
      <Code class="w-5 h-5 lg:w-6 lg:h-6 text-primary-500" />
      {{ labels.techStack }}
    </h2>
    <div class="flex flex-wrap gap-2 lg:gap-3">
      <div
        v-for="(tech, index) in profile.techStack"
        :key="tech.id"
        class="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl
               bg-white dark:bg-gray-800/80
               border border-gray-200 dark:border-gray-700
               shadow-sm hover:shadow-[0_4px_20px_rgb(99,102,241,0.15)] hover:border-primary-400/50 dark:hover:border-primary-500/50
               transition-all duration-300 hover:-translate-y-1 hover:scale-105 group cursor-default"
        :style="{ animation: `slideUp 0.3s ease-out forwards ${index * 0.05}s`, opacity: 0 }"
      >
        <!-- 瀹樻柟 devicon 鍥炬爣 -->
        <img
          v-if="!failedIcons.has(tech.id)"
          :src="tech.iconUrl"
          :alt="tech.name"
          class="w-5 h-5 object-contain"
          loading="lazy"
          @error="handleImgError(tech.id)"
        />
        <Code v-else class="w-5 h-5 text-gray-400" />
        <span class="font-medium text-sm text-gray-700 dark:text-gray-200">{{ tech.name }}</span>
      </div>
    </div>
  </div>
</template>
