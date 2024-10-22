<script setup>
useHead({
  title: "Void Asset Browser",
  htmlAttrs: {
    class: useAppStore().isDark ? "dark" : "light",
  },
  bodyAttrs: {
    class: "w-full h-full bg-primary text-secondary",
  },
});
</script>
<template>
  <div class="flex flex-col w-full h-screen px-4">
    <div class="relative flex flex-col items-center justify-between grow">
      <nav class="flex items-center justify-between w-full h-16">
        <icon-logo class="w-10 h-10 shrink-0" />
        <ThemeToggle />
      </nav>

      <main class="w-full mt-16 grow">
        <slot />
      </main>

      <MainFooter />
    </div>
  </div>
  <Notifications />
</template>

<style scoped></style>
