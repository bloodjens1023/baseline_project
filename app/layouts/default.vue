<template>
  <div class="min-h-screen "  :style="{ color: 'var(--text)' }">

    <!-- default style bg-[#061237]  -->
    <div class="w-full max-w-[500px] mx-auto flex flex-col min-h-screen bg-[#061237]">

      <!-- Header -->
      <TheHeader 
        v-if="route.path === '/' || route.path === '/en' || route.path === '/pt-br'" 
      />

      <!-- Main -->
      <main class="flex-1">
        <slot />
      </main>

      <!-- Footer -->
      <TheFooter 
        v-if="route.path === '/' || route.path === '/en' || route.path === '/pt-br'" 
      />

    </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>


