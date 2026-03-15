<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
const { profile } = useI18n()
</script>

<template>
  <div class="relative w-full h-full min-h-[360px]">
    <!-- 主卡片，畸形裁剪 -->
    <div class="profile-card-base glass-card h-full w-full p-8 md:p-14 flex flex-col justify-center relative overflow-hidden">
      <!-- 内部装饰线 -->
      <div class="absolute inset-0 border-l-[10px] border-primary-500/30 transform -skew-x-12 -translate-x-4"></div>
      
      <div class="max-w-xl z-20">
        <!-- 标签 -->
        <div class="inline-block px-3 py-1 mb-4 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 font-bold text-xs tracking-widest uppercase" style="clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%)">
          Developer
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tight text-gray-900 dark:text-white leading-[1.1]">
          <!-- 分段动感展示 -->
          <span class="block transform -translate-x-2 text-primary-500">{{ profile.name }}</span>
          <span class="block text-2xl md:text-3xl mt-2 transform translate-x-2">{{ profile.title }}</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium max-w-sm leading-relaxed">
          {{ profile.subtitle }}
        </p>
      </div>
    </div>
    
    <!-- 溢出/悬浮的畸形元素 -->
    <div class="protruding-blob absolute -top-8 -left-8 w-40 h-40 bg-primary-500 rounded-full blur-[60px] opacity-50 dark:opacity-40 animate-pulse pointer-events-none"></div>
    
    <!-- 破框而出的图像或装饰块 -->
    <div class="protruding-shape absolute -bottom-6 -right-6 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-purple-500 to-indigo-500 shadow-2xl flex items-center justify-center transform rotate-12 hover:rotate-[360deg] transition-transform duration-1000 cursor-pointer z-30">
      <span class="text-5xl md:text-7xl drop-shadow-lg">✨</span>
    </div>
  </div>
</template>

<style scoped>
.profile-card-base {
  /* 左上角与右下角进行极端的斜切 */
  clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%);
}

.protruding-shape {
  /* 畸形多边形，不规则感 */
  clip-path: polygon(25% 0%, 100% 15%, 85% 100%, 0% 85%);
}
</style>
