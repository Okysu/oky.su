<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import { useI18n } from '../../composables/useI18n'
import { Languages, Check } from 'lucide-vue-next'

const { locale, labels, setLocale } = useI18n()
const isOpen = ref(false)

const handleSelect = (lang: 'en' | 'zh') => {
  setLocale(lang)
  isOpen.value = false
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="relative group" v-on-click-outside="closeMenu">
    <button @click.stop="toggleMenu" class="p-2 lg:p-2.5 rounded-full glass cursor-pointer transition-all duration-300
             hover:scale-110 active:scale-95
             focus:outline-none focus:ring-2 focus:ring-primary-500/50
             text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
      :aria-label="labels.switchLang" :title="labels.switchLang">
      <Languages class="w-5 h-5" />
    </button>

    <!-- 寮圭獥鑿滃崟 -->
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <div v-show="isOpen"
        class="absolute right-0 mt-2 w-32 rounded-xl glass-card py-2 px-1.5 z-50 shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex flex-col gap-1">
        <button @click="handleSelect('en')"
          class="w-full text-left px-3 py-2 text-sm font-bold rounded-lg flex items-center justify-between transition-colors"
          :class="locale === 'en' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'">
          English
          <Check v-if="locale === 'en'" class="w-4 h-4 text-primary-500" />
        </button>
        <button @click="handleSelect('zh')"
          class="w-full text-left px-3 py-2 text-sm font-bold rounded-lg flex items-center justify-between transition-colors"
          :class="locale === 'zh' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'">
          简体中文
          <Check v-if="locale === 'zh'" class="w-4 h-4 text-primary-500" />
        </button>
      </div>
    </transition>
  </div>
</template>
