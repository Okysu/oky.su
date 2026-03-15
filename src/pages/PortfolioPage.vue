<script setup lang="ts">
import ProfileCard from '../components/ProfileCard.vue'
import TechStackCard from '../components/TechStackCard.vue'
import ProjectsShowcase from '../components/ProjectsShowcase.vue'
import FloatingControls from '../components/FloatingControls.vue'
import AboutCard from '../components/AboutCard.vue'
import { useI18n } from '../composables/useI18n'

const { labels } = useI18n()
</script>

<template>
  <div class="h-screen h-[100dvh] w-screen overflow-hidden bg-gray-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 relative">
    
    <!-- Background Decorators -->
    <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
    <div class="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
    
    <FloatingControls />

    <main class="h-full w-full max-w-[1400px] mx-auto p-4 md:p-8 overflow-y-auto hide-scrollbar pb-24">
      <div class="bento-grid min-h-full mt-14 lg:mt-0 lg:py-10">
        <!-- 1. Profile / Hero -->
        <ProfileCard class="bento-profile" />
        
        <!-- 2. Tech Stack -->
        <TechStackCard class="bento-tech" />
        
        <!-- 3. Projects Showcase -->
        <ProjectsShowcase class="bento-projects" />
        
        <!-- 4. Stats / Easter Egg -->
        <AboutCard class="bento-stats" />
      </div>
    </main>
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

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
  }
}

/* Layout Assignments */
.bento-profile {
  grid-column: 1 / 8;
  grid-row: 1 / 3;
}
.bento-tech {
  grid-column: 8 / 13;
  grid-row: 1 / 3;
}
.bento-projects {
  grid-column: 1 / 9;
  grid-row: 3 / 6;
}
.bento-stats {
  grid-column: 9 / 13;
  grid-row: 3 / 6;
}

/* Global Glass & Custom Classes for Children */
:deep(.glass-card) {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.4);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.dark :deep(.glass-card), .dark .glass-card {
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}

.clip-shape-hex {
  clip-path: polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%);
  border-radius: 0;
}
</style>
