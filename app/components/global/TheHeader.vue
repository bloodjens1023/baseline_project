<template>
  <div
    class="fixed top-0 left-0 right-0 mx-auto w-full max-w-[500px] 
           bg-gradient-to-b from-[#162d77] to-[#1f4789] 
           backdrop-blur-sm text-white shadow-xl 
           border-b border-blue-800/30 
           bg-cover overscroll-none z-[90]"
    style="background-image: url('https://downpg117.uqianbao.com/source/public/static/webp/OMR6_kmW.webp');"
  >
    <!-- Decoration image -->
    <div
      class="bg-contain bg-no-repeat h-[68px] w-[95px] absolute z-[2] bottom-[-40px] right-0"
      style="background-image: url('https://downpg117.uqianbao.com/source/public/static/webp/DnbsAF0P.webp');"
    ></div>

    <!-- HEADER CONTENT -->
    <div class="px-3 py-3 flex items-center w-full">
      
      <!-- MENU BUTTON -->
      <button
        @click="toggleMenu"
        class="mr-3 p-2 bg-blue-800/50 rounded-xl transition-all duration-200"
        aria-label="Back"
      >
        <img
          src="https://downpg117.uqianbao.com/source/public/static/png/Csdczrui.png"
          alt="menu"
          class="w-5 h-5 object-contain"
        />
      </button>

      <!-- LOGO -->
      <img
        src="/asset/svg/logo.svg"
        alt="logo"
        class="w-[100px] sm:w-[120px] object-contain"
      />

      <!-- RIGHT SIDE -->
      <div class="flex-1 flex justify-end items-center gap-2 min-w-0">
        
        <button
          class="px-3 py-1 text-sm font-semibold whitespace-nowrap"
        >
          {{ t('enter') }}
        </button>

        <button
          class="bg-gradient-to-b from-[#bfea36] to-[#48bc49] 
                 rounded-xl text-black px-3 py-1 text-sm font-semibold 
                 whitespace-nowrap"
        >
          {{ t('register') }}
        </button>

      </div>
    </div>

    <!-- Bottom line decoration -->
    <div
      class="bg-contain bg-no-repeat w-full h-[4px] absolute bottom-[-2px] bg-center"
      style="background-image: url('https://downpg117.uqianbao.com/source/public/static/webp/B_MtXw-3.webp');"
    ></div>
  </div>

  <TheMenuAside :is-open="menuOpen" @close="closeMenu" />
</template>


<script setup>
import { ref } from 'vue'
import TheMenuAside from '../MenuAside.vue'
const { t } = useI18n()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>
