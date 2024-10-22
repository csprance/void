<script setup lang="ts">
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
  <slot />
  <DialogProvider />
  <Notifications />
  <EventsProvider />
</template>
