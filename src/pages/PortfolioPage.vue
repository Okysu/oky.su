<script setup lang="ts">
import Hero from '../components/Hero.vue'
import ContentArea from '../components/ContentArea.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import LangToggle from '../components/LangToggle.vue'
import { useI18n } from '../composables/useI18n'

const { locale } = useI18n()
</script>

<template>
  <div class="h-screen h-[100dvh] w-screen overflow-hidden relative selection:bg-primary-500/30">
    <!-- 背景装饰 -->
    <div class="absolute top-[-15%] left-[-10%] w-[45%] h-[45%] bg-primary-400/15 dark:bg-primary-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-15%] right-[-10%] w-[45%] h-[45%] bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- 主容器 -->
    <main v-auto-animate class="h-full w-full max-w-7xl mx-auto flex flex-col lg:flex-row p-3 sm:p-4 lg:p-6 xl:p-10 gap-3 lg:gap-8 relative z-10">

      <!-- 工具栏（主题 + 语言切换） -->
      <div class="fixed top-4 right-4 lg:top-8 lg:right-8 z-50 flex items-center gap-2 lg:gap-3">
        <LangToggle />
        <ThemeToggle />
      </div>

      <!-- 左侧 / 顶部：Hero -->
      <section class="shrink-0 lg:shrink lg:h-full lg:flex-1 min-h-0 flex flex-col justify-center pt-14 lg:pt-0">
        <Transition name="fade" mode="out-in">
          <Hero :key="locale" />
        </Transition>
      </section>

      <!-- 右侧 / 底部：内容区 Tabs -->
      <section class="flex-1 lg:h-full lg:flex-[1.15] min-h-0 mt-2 lg:mt-0">
        <Transition name="fade" mode="out-in">
          <ContentArea :key="locale" />
        </Transition>
      </section>

    </main>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
</style>