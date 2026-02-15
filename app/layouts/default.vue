<template>
  <div
    class="max-w-[500px] mx-auto min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white"
  >
    <!-- Header -->
    <TheHeader  v-if="route.path === '/'" />


    <!-- Main content prend tout l'espace disponible -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer collé en bas -->
    <TheFooter v-if="route.path === '/'"/>
  </div>
</template>
<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
</script>
