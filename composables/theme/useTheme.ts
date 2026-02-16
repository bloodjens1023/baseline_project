import { useRuntimeConfig, ref, onMounted } from '#imports'

interface Theme {
  [key: string]: string
}

export const useTheme = () => {
  const config = useRuntimeConfig()
  const themes: Record<string, Theme> = config.public.themes

  // 👇 récupère automatiquement le thème défini dans nuxt.config
  const currentTheme = ref<string>(config.public.activeTheme || 'default')

  const applyTheme = (themeName: string) => {
    const theme = themes[themeName]
    if (!theme) {
      console.warn(`Theme "${themeName}" not found!`)
      return
    }

    if (typeof window !== 'undefined') {
      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value)
      })
    }

    currentTheme.value = themeName
  }

  onMounted(() => {
    applyTheme(currentTheme.value)
  })

  return { currentTheme, applyTheme }
}
