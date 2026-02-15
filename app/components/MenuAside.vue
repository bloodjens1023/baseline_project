<template>
  <teleport to="body">
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 z-[9999]" @click="handleClose">
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Container centré avec max-width comme le layout -->
        <div class="max-w-[500px] mx-auto h-full relative">
          <aside
            @click.stop
            class="absolute left-0 top-0 h-full w-80 bg-gradient-to-b from-[#162d77] to-[#1f4789] shadow-2xl overflow-y-auto"
          >
            <!-- Header avec bouton fermer et logo -->
            <div
              class="px-4 py-4 border-b border-blue-800/30 flex items-center justify-between"
            >
              <img
                src="/asset/svg/logo.svg"
                alt=""
                srcset=""
                class="w-[120px]"
              />
              <button
                @click="handleClose"
                class="p-2 bg-blue-800/50 rounded-xl hover:bg-blue-700/50 transition-all duration-200"
                aria-label="Fermer"
              >
                <img
                  src="https://downpg117.uqianbao.com/source/public/static/svg/XVrMH9vx.svg"
                  alt="Close"
                  class=""
                />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const handleClose = () => {
  emit("close");
};
</script>

<style scoped>
.slide-enter-active aside,
.slide-leave-active aside {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from aside,
.slide-leave-to aside {
  transform: translateX(-320px);
}

.slide-enter-to aside,
.slide-leave-from aside {
  transform: translateX(0);
}
</style>
