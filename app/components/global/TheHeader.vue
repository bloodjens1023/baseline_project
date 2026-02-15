<template>
  <div
    class="sticky top-0 left-0 right-0  w-[500px] bg-gradient-to-b from-[#162d77] to-[#1f4789] backdrop-blur-sm text-white shadow-xl border-b border-blue-800/30 bg-cover overscroll-none "
    style="
      background-image: url(&quot;https://downpg117.uqianbao.com/source/public/static/webp/OMR6_kmW.webp&quot;);
      z-index: 9999 !important;
    "
  >
    <div
      class="bg-contain h-[68px] w-[95px] absolute z-[2] bottom-[-40px] right-[0px]"
      style="
        background-image: url(&quot;https://downpg117.uqianbao.com/source/public/static/webp/DnbsAF0P.webp&quot;);
      "
    ></div>
    <div class="px-4 py-4 flex items-center max-w-3xl mx-auto w-full">
      <button
        @click="toggleMenu"
        class="mr-4 p-2 bg-blue-800/50 rounded-xl transition-all duration-200 w-30"
        aria-label="Back"
      >
        <img
          src="https://downpg117.uqianbao.com/source/public/static/png/Csdczrui.png"
          alt=""
          srcset=""
        />
      </button>
      <img src="/asset/svg/logo.svg" alt="" srcset="" class="w-[120px]" />

      <div
        class="right tools-login flex-1 flex justify-end items-center pr-[6px] gap-[4px] flex-nowrap min-w-0"
      >
        <button
          class="!px-[10px] !py-[2px] mr-[4px] whitespace-nowrap flex-shrink-0"
        >
          <span class="font-semibold">   {{t('enter')}}</span>
        </button>
        <button
          class="bg-gradient-to-b from-[#bfea36] to-[#48bc49] rounded-xl text-black submit !ml-[2px] !px-[10px] !py-[4px] whitespace-nowrap relative flex items-center justify-center flex-shrink min-w-0"
        >
          <span class="my-1/2 font-semibold"> {{t('register')}}</span>
        </button>
      </div>
    </div>

    <div
      class="bg-contain w-full h-[4px] absolute z-[0] bottom-[-2px] bg-center"
      style="
        background-image: url(&quot;https://downpg117.uqianbao.com/source/public/static/webp/B_MtXw-3.webp&quot;);
      "
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
