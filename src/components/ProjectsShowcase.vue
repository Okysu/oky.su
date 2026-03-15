<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { ArrowUpRight } from 'lucide-vue-next'

const { profile, labels } = useI18n()
</script>

<template>
  <div class="relative w-full h-full min-h-[400px]">
    <!-- Projects Header: Protruding Tag -->
    <div class="absolute -top-5 left-8 lg:left-12 z-30 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 shadow-xl header-tag font-black tracking-widest text-xl transition-transform hover:scale-105">
      {{ labels.projects || 'PROJECTS' }}
    </div>

    <!-- Main Container -->
    <div class="projects-base glass-card h-full w-full p-6 md:p-10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto hide-scrollbar relative">
      <!-- 内部网格线背景装饰 -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <a
        v-for="(project, index) in profile.projects"
        :key="project.id"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card group relative overflow-visible transition-all duration-300"
        :style="{ transform: `rotate(${index % 2 === 0 ? 1 : -1}deg)` }"
      >
        <!-- 卡片畸形背景 -->
        <div class="absolute inset-0 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:scale-[1.03] project-shape"></div>
        
        <div class="relative z-10 p-6 flex flex-col h-full">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ project.name }}
            </h3>
            <div class="w-10 h-10 rounded-full bg-primary-50 dark:bg-gray-700 flex items-center justify-center text-primary-600 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-primary-500 group-hover:text-white shrink-0 shadow-sm border border-primary-100 dark:border-gray-600">
              <ArrowUpRight class="w-5 h-5" />
            </div>
          </div>
          
          <p class="text-sm text-gray-500 dark:text-gray-400 font-medium mb-6 line-clamp-2 leading-relaxed">
            {{ project.tagline }}
          </p>

          <div class="mt-auto flex flex-wrap gap-2">
            <span
              v-for="tech in project.techStack.slice(0, 3)"
              :key="tech"
              class="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 project-tech-shape group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors"
            >
              {{ tech }}
            </span>
            <span v-if="project.techStack.length > 3" class="px-2 py-1 text-xs font-bold text-gray-400 self-center">
              +{{ project.techStack.length - 3 }}
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.header-tag {
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
}

.projects-base {
  /* 底部左倾的异形边界 */
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
}

.project-shape {
  clip-path: polygon(0 5%, 95% 0, 100% 95%, 5% 100%);
  border: 1px solid transparent;
}
.dark .project-shape {
  border-color: rgba(255,255,255,0.05);
}
.group:hover .project-shape {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  border-color: var(--color-primary-500, #3b82f6) !important;
}

.project-tech-shape {
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
}
</style>
