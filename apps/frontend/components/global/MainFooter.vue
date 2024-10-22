<script setup>
const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="w-full pt-12 pb-4">
    <div class="flex items-center justify-center gap-1 mx-8">
      <span class="text-sm text-tertiary">
        © {{ currentYear }} JokerMartini. All Rights reserved.</span
      >
    </div>
  </footer>
</template>
