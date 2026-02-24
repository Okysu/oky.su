import { ref, computed } from 'vue'
import { profileEn, labelsEn } from '../data/profile.en'
import { profileZh, labelsZh } from '../data/profile.zh'
import type { Profile, I18nLabels } from '../data/types'

export type Locale = 'en' | 'zh'

const currentLocale = ref<Locale>('en')

export function useI18n() {
    // 初始化时从 localStorage 读取
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved && (saved === 'en' || saved === 'zh')) {
        currentLocale.value = saved
    }

    const profile = computed<Profile>(() => {
        return currentLocale.value === 'zh' ? profileZh : profileEn
    })

    const labels = computed<I18nLabels>(() => {
        return currentLocale.value === 'zh' ? labelsZh : labelsEn
    })

    const toggleLocale = () => {
        currentLocale.value = currentLocale.value === 'en' ? 'zh' : 'en'
        localStorage.setItem('locale', currentLocale.value)
    }

    const setLocale = (lang: Locale) => {
        currentLocale.value = lang
        localStorage.setItem('locale', lang)
    }

    return {
        locale: currentLocale,
        profile,
        labels,
        toggleLocale,
        setLocale
    }
}
