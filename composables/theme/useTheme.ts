import { ref, computed, onMounted } from 'vue'
import { themes, type Theme } from './themes.config'

export const currentTheme = ref<Theme>(themes.default)

export function useTheme() {
  const THEME_KEY = 'user-theme' // clé pour localStorage

  const setTheme = (themeId: string) => {
    if (themes[themeId]) {
      currentTheme.value = themes[themeId]

      if (process.client) {
        // Appliquer les couleurs CSS
        Object.entries(currentTheme.value.colors).forEach(([key, value]) => {
          document.documentElement.style.setProperty(`--${key}`, value)
        })

        // Sauvegarder dans localStorage
        localStorage.setItem(THEME_KEY, themeId)
      }
    } else {
      console.warn(`Theme ${themeId} not found`)
    }
  }

  // Initialiser le thème depuis localStorage côté client
  const initTheme = () => {
    if (process.client) {
      const storedTheme = localStorage.getItem(THEME_KEY)
      if (storedTheme && themes[storedTheme]) {
        setTheme(storedTheme)
      } else {
        setTheme('default')
      }
    }
  }

  return {
    currentTheme: computed(() => currentTheme.value),
    setTheme,
    initTheme,
    availableThemes: Object.keys(themes),
  }
}
