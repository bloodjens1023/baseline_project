<template>
  <div class="p-8 rounded-lg transition-colors duration-300" :style="{ color: 'var(--text)', backgroundColor: 'var(--background)' }">
    
    <!-- Logo du thème -->
    <div class="mb-4">
      <img :src="currentTheme.assets.logo" alt="Logo du thème" class="h-16 w-auto mx-auto" />
    </div>

    <h1 class="text-3xl font-bold mb-2 text-center">Bienvenue</h1>
    <p class="mb-4 text-center">Ceci est la page d'accueil</p>

    <div class="mb-4 flex justify-center items-center gap-2">
      <label for="theme-select" class="font-semibold">Choisir un thème :</label>
      <select
        id="theme-select"
        v-model="selectedTheme"
        @change="changeTheme"
        class="border border-gray-300 rounded px-2 py-1"
      >
        <option v-for="theme in availableThemes" :key="theme" :value="theme">
          {{ theme }}
        </option>
      </select>
    </div>

    <p class="font-medium text-center">Thème actif : <span class="font-bold">{{ selectedTheme }}</span></p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useTheme } from '../../composables/theme/useTheme'

const { setTheme, initTheme, availableThemes, currentTheme } = useTheme()
const selectedTheme = ref('default')

// Initialiser le thème depuis localStorage côté client
onMounted(() => {
  initTheme()
  selectedTheme.value = localStorage.getItem('user-theme') || 'default'
})

// Appliquer le thème quand le select change
const changeTheme = () => setTheme(selectedTheme.value)

// Synchroniser le select si le thème change via d'autres mécanismes
watch(selectedTheme, (newTheme) => setTheme(newTheme))
</script>

<style scoped>
/* Optionnel: centrer les images et transitions si besoin */
img {
  transition: all 0.3s ease;
}
</style>
