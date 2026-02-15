<template>
  <footer class="bg-contain text-white shadow-xl border-t border-blue-800/30 relative overscroll-none" style="background-image: url(https://downpg117.uqianbao.com/source/public/static/webp/B6QWs8Dc.webp);">
    <div class="bg-contain w-[500px] h-[4px] absolute z-[0] bottom-[64px] bg-center" style="background-image: url(&quot;https://downpg117.uqianbao.com/source/public/static/webp/B_MtXw-3.webp&quot;);">
    </div>

    <!-- Systeme Grid 5 colonnes -->
    <div class="grid grid-cols-5 items-center h-16 max-w-3xl mx-auto w-full relative px-2">
        
        <!-- Colonne 1: Depósito -->
        <button class="flex flex-col items-center justify-center p-2">
            <img src="https://downpg117.uqianbao.com/source/public/static/svg/sIofWxJ8.svg" alt="" class="h-[22px] mb-1">
            <span class="text-[11px] capitalize text-center  font-bold text-[#698ed4]">{{ t('promotion') }} </span>
        </button>
        
        <!-- Colonne 2: Promoções -->
        <button class="flex flex-col items-center justify-center p-2">
            <img src="https://downpg117.uqianbao.com/source/public/static/svg/D4seqzx_.svg" alt="" class="h-[22px] logo h-[28px]">
            <span class="text-[11px] capitalize text-center  font-bold text-[#698ed4]">{{t('deposit')}}</span>
        </button>
        
        <!-- Colonne 3: Ranking (centrée) -->
        <button class="relative group flex flex-col items-center justify-center">
            <div class="relative flex flex-col items-center">
                <img src="https://downpg117.uqianbao.com/source/public/static/webp/DftLpS0R.webp" 
                     alt="Ranking" 
                     class="w-[80px] scale-[1.9] aspect-[1.32/1] absolute top-[-25px] left-[46%] transform -translate-x-1/2 z-[1] 
                            transition-all duration-300 ease-in-out  hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
                <span class="text-[11px] text-[#698ed4] capitalize text-center tracking-wider mt-[20px] font-bold">
                    {{t('ranking')}}
                </span>
            </div>
        </button>
        
        <!-- Colonne 4: Saque -->
        <button class="flex flex-col items-center justify-center p-2">
            <img src="https://downpg117.uqianbao.com/source/public/static/svg/DntYU2eA.svg" alt="" class="h-[22px] h-[24px]">
            <span class="text-[11px] capitalize text-center  font-bold text-[#698ed4]">{{ t('loot') }}</span>
        </button>
        
        <!-- Colonne 5: Pessoal -->
        <button class="flex flex-col items-center justify-center p-2">
            <img src="https://downpg117.uqianbao.com/source/public/static/svg/ChRMZLyf.svg" alt="" class="h-[22px] h-[28px]">
            <span class="text-[11px] capitalize text-center  font-bold text-[#698ed4]">{{ t('personal') }}</span>
        </button>
        
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>