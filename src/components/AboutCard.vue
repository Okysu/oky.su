<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { Github, Newspaper, FileText, Mail } from 'lucide-vue-next'
import { computed } from 'vue'

const { profile } = useI18n()

const iconMap: Record<string, any> = {
  'github': Github,
  'newspaper': Newspaper,
  'file-text': FileText,
  'mail': Mail
}

</script>

<template>
  <div class="bento-about glass-card clip-shape-hex flex flex-col p-6 lg:p-8 relative group overflow-hidden">
    <!-- Icon/Title Background -->
    <div class="absolute -top-8 -right-8 text-8xl opacity-5 group-hover:rotate-[360deg] transition-transform duration-[2000ms] pointer-events-none z-0">💬</div>
    
    <div class="w-full h-full flex flex-col relative z-10">
      <h3 class="text-xl lg:text-2xl font-black bg-gradient-to-r from-primary-500 to-purple-500 text-transparent bg-clip-text mb-4 lg:mb-6 uppercase tracking-widest shrink-0">
        About Me
      </h3>
      
      <!-- Bio content -->
      <div class="flex-1 min-h-0 overflow-y-auto hide-scrollbar text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-3 font-medium">
        <p v-for="(p, i) in profile.about" :key="i">
           {{ p }}
        </p>
      </div>

      <!-- Links / Socials -->
      <div class="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex flex-wrap gap-3">
        <a v-for="link in profile.links" :key="link.id" :href="link.url" target="_blank" rel="noopener noreferrer"
           class="flex items-center gap-2 px-3 py-1.5 bg-gray-100/80 dark:bg-gray-800/80 hover:bg-primary-50 dark:hover:bg-primary-900/40 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg text-sm font-bold transition-all duration-300 link-shape group/link">
          <component :is="iconMap[link.icon]" class="w-4 h-4 group-hover/link:animate-bounce" />
          {{ link.name }}
        </a>
      </div>
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

.clip-shape-hex {
  /* Using same hex-like clip as previous stats card */
  clip-path: polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%);
  border-radius: 0;
}

.link-shape {
  clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
}
</style>
