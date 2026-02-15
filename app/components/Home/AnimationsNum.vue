<template>
  <div class="w-full h-[30px]">
    <div
      class="mobile-home-container-header flex w-full h-[30px] overflow-hidden"
    >
      <!-- Speaker Icon -->
      <img
        src="/asset/svg/speaker.svg"
        alt="speaker"
        class="w-5 h-5 mt-1 ml-2 object-contain"
      />

      <!-- News Container -->
      <div
        class="mobile-home-container-news flex h-full overflow-hidden flex-1"
      >
        <div
          class="mobile-home-container-news-main flex h-full whitespace-nowrap"
        >
          <!-- Loop x2 automatically -->
          <div
            v-for="loop in 2"
            :key="loop"
            class="mobile-home-container-news-box flex h-full"
          >
            <span
              v-for="(item, index) in news"
              :key="index"
              class="mx-6 flex items-center font-semibold"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const news = [
  "339***029 acabou de retirar 2.035,00 R$",
  "519***780 acabou de retirar 207,00 R$",
  "619***123 acabou de retirar 590,00 R$",
  "379***237 acabou de retirar 590,00 R$",
  "719***596 acabou de retirar 207,00 R$",
  "649***378 acabou de retirar 207,00 R$",
  "349***336 acabou de retirar 494,00 R$",
  "939***712 acabou de retirar 1.200,00 R$",
  "479***431 acabou de retirar 207,00 R$",
  "479***633 acabou de retirar 207,00 R$",
];
</script>

<style scoped>
.mobile-home-container-news-main {
  animation: marquee 80s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
