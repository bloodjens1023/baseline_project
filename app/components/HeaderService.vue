<template>
    <div
      class="bg-gradient-to-b from-[#162d77] to-[#1f4789] backdrop-blur-sm text-white shadow-xl border-b border-blue-800/30 bg-cover test"
      style="
        background-image: url(&quot;https://downpg117.uqianbao.com/source/public/static/webp/OMR6_kmW.webp&quot;);
      "
    >
      <div
        class="bg-contain h-[68px] w-[95px] absolute z-[0] bottom-[-30px] right-[0px]"
        style="
          background-image: url(&quot;https://downpg117.uqianbao.com/source/public/static/webp/DnbsAF0P.webp&quot;);
        "
      ></div>
      <div class="px-4 py-4 flex items-center max-w-3xl mx-auto w-full"><NuxtLink to="/">
        <button
          
          class="mr-4 p-2 bg-blue-800/50 rounded-xl transition-all duration-200 w-30"
          aria-label="Back"
        >
          <img
            src="https://downpg117.uqianbao.com/source/public/static/svg/Cz-n34NG.svg"
            alt=""
            srcset=""
          />
        </button>
        </NuxtLink>
        <div class="flex-1 flex items-center justify-center gap-2">
          <img
            src="https://downpg117.uqianbao.com/source/public/static/svg/DrVQ8Lpq.svg"
            alt="Customer Service Icon"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="w-8 h-8"
          />
          <h1 class="text-lg font-bold">{{t('service_title')}}</h1>
        </div>

        <div class="w-10"></div>
      </div>
      <div class="bg-contain w-full h-[4px] absolute z-[0] bottom-[-2px] bg-center" style="background-image: url(&quot;https://downpg117.uqianbao.com/source/public/static/webp/B_MtXw-3.webp&quot;);"></div>
    </div>
</template>
<script setup>
    const { t } = useI18n()
</script>