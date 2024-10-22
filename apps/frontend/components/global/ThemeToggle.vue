<template>
  <button
    v-tooltip="'Toggle Light/Dark'"
    class="w-10 h-10 rounded-full button-primary-flat"
    @click="appStore.toggle_theme"
  >
    <icon-moon v-if="appStore.isDark" class="w-6 h-6" />
    <icon-sun v-else class="w-6 h-6" />
  </button>
</template>

<script setup>
import { useAppStore } from "~/stores/app";

const appStore = useAppStore();
</script>
