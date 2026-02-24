import { ref, onMounted, watch } from 'vue'

export function useTheme() {
    const isDark = ref(false)

    const toggleTheme = () => {
        isDark.value = !isDark.value
    }

    const applyTheme = (dark: boolean) => {
        if (dark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }

    onMounted(() => {
        // Check local storage first
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            isDark.value = savedTheme === 'dark'
        } else {
            // Fallback to system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            isDark.value = prefersDark
        }

        // Apply initial theme
        applyTheme(isDark.value)

        // Listen to system changes if no local storage preference is set
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                isDark.value = e.matches
            }
        })
    })

    // Watch for manual toggles
    watch(isDark, (newVal) => {
        applyTheme(newVal)
    })

    return {
        isDark,
        toggleTheme
    }
}
