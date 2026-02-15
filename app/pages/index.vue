<template>
  <div class=" scrollbar-hide scroll-smooth">
    <div>
    <img class="w-full h-full object-cover p-3"
      src="https://downpg117.uqianbao.com/source/public/static/webp/DKG9OB7h.webp" alt="">
  </div>
  
  <div class="w-full px-[10px] mt-[10px]">
    <div class="w-full aspect-[6.73/1] flex flex-row justify-center items-center gap-[10px] ">
      <Rewards bg-image="https://downpg117.uqianbao.com/source/public/static/webp/sdfBvLKb.webp"/>
      <Rewards bg-image="https://downpg117.uqianbao.com/source/public/static/webp/DMpFmNoL.webp"/>
    </div>
  </div>
  <div class="py-[10px] w-full
     aspect-[5.34/1] sticky top-[var(--mobile-header-height)] z-[40] my-[10px] flex items-center justify-center gap-[5px]">
      <RoundedButton title="Resgatar" bg-image="https://downpg117.uqianbao.com/source/public/static/webp/C7_SoLrK.webp"/> 
      <RoundedButton title="Semana" bg-image="https://downpg117.uqianbao.com/source/public/static/webp/3TY0Tzzx.webp"/>
      <RoundedButton title="Misterioso" bg-image="https://downpg117.uqianbao.com/source/public/static/webp/D9Vf61xP.webp"/>
      <RoundedButton title="Check-in" bg-image="https://downpg117.uqianbao.com/source/public/static/webp/BzOmGKPn.webp"/>
      <RoundedButton title="Roleta" bg-image="https://downpg117.uqianbao.com/source/public/static/webp/CHoWiKXg.webp"/>
    </div>
  <BottomSection />
  </div>
  
</template>
<script setup>
  import BottomSection from '../components/Home/BottomSection.vue';

</script>