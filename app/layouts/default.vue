<template>
  <div
    class="max-w-[500px] mx-auto min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white"
  >
    <!-- Header -->
    <TheHeader />

    <!-- Main content prend tout l'espace disponible -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer collé en bas -->
    <TheFooter />
  </div>
</template>
