<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
const { profile, labels } = useI18n()

// CSS Colors helper for random look
const colors = [
  'text-green-500', 'text-blue-500', 'text-teal-400', 
  'text-pink-500', 'text-purple-400', 'text-orange-500', 
  'text-indigo-500', 'text-gray-900 dark:text-gray-100'
]
</script>

<template>
  <div class="relative w-full h-full min-h-[250px] lg:min-h-full">
    <!-- 顶端悬浮的不规则碎片 -->
    <div class="absolute -top-10 left-10 w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 opacity-90 z-20 float-anim hover:scale-125 transition-transform cursor-crosshair"></div>
    
    <div class="tech-base glass-card h-full w-full p-6 md:p-8 z-10 flex flex-col justify-end group overflow-visible relative">
      <div class="absolute top-4 right-4 text-4xl lg:text-5xl opacity-[0.08] dark:opacity-[0.15] text-gray-900 dark:text-gray-100 font-black tracking-tighter mix-blend-overlay">TECH</div>
      
      <div class="z-20">
        <h2 class="text-2xl font-black uppercase tracking-widest text-right mb-6 text-gray-800 dark:text-gray-100 group-hover:-translate-x-2 transition-transform">{{ labels.techStack || 'Tech Stack' }}</h2>
        
        <div class="flex flex-wrap gap-2 justify-end">
          <div v-for="(skill, index) in profile.techStack" :key="skill.id" 
               class="tech-tag"
               :class="colors[index % colors.length]"
               :style="{ transform: `rotate(${index % 2 === 0 ? 3 : -4}deg) translateY(${index % 3 === 0 ? '-5px' : '0'})` }">
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-base {
  /* 顶部左侧大切角，底部右侧小切角 */
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%);
}

.float-anim {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-15px) rotate(15deg); }
  100% { transform: translateY(0) rotate(0); }
}

.tech-tag {
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  font-weight: 800;
  font-size: 0.875rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
.tech-tag:hover {
  transform: scale(1.15) rotate(0deg) !important;
  background: #111827 !important;
  color: white !important;
  z-index: 10;
}
.dark .tech-tag {
  background: rgba(30, 41, 59, 0.8);
}
.dark .tech-tag:hover {
  background: #f8fafc !important;
  color: #0f172a !important;
}
</style>
