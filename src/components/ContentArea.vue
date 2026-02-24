<script setup lang="ts">
import { ref, markRaw } from 'vue'
import { useI18n } from '../composables/useI18n'
import TechStack from './TechStack.vue'
import Projects from './Projects.vue'
import GithubStats from './GithubStats.vue'

const { labels } = useI18n()

const tabs = [
  { id: 'tech', labelKey: 'techStack' as const, component: markRaw(TechStack) },
  { id: 'projects', labelKey: 'projects' as const, component: markRaw(Projects) },
  { id: 'stats', labelKey: 'githubStats' as const, component: markRaw(GithubStats) }
]

const activeTab = ref('tech')
</script>

<template>
  <div class="h-full flex flex-col glass-card rounded-2xl lg:rounded-3xl overflow-hidden">
    <!-- Tabs 导航 -->
    <div class="flex items-center gap-1 p-1.5 lg:p-2 bg-gray-100/60 dark:bg-gray-800/60 m-2 lg:m-3 rounded-xl shrink-0">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="flex-1 px-2 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer"
        :class="[
          activeTab === tab.id
            ? 'text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-600 shadow-md ring-1 ring-black/5 dark:ring-white/10'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50'
        ]"
      >
        {{ labels[tab.labelKey] }}
      </button>
    </div>

    <!-- 内容区 -->
    <div class="flex-1 min-h-0 p-3 lg:p-5 overflow-hidden">
      <Transition name="fade" mode="out-in">
        <component
          :is="tabs.find(t => t.id === activeTab)?.component"
          :key="activeTab"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
