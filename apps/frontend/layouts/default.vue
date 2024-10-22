<script setup lang="ts">
import EventsProvider from "~/components/global/EventsProvider.vue";

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
  <div class="flex h-screen">
    <div class="flex flex-col w-full">
      <!-- First row (auto height) -->
      <div class="h-auto">
        <MainNavBar />
      </div>

      <!-- Second row (stretch to fill height) -->
      <div class="flex flex-col flex-1 overflow-auto grow">
        <slot />
        <!-- <MainFooter class="mx-auto" /> -->
      </div>
    </div>
  </div>
  <DialogProvider />
  <Notifications />
  <EventsProvider />
</template>
