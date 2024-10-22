<template>
  <div class="bg-blue-500/50">
    <button class="hover:underline" @click="showMore = !showMore">
      Toggle
    </button>
    <div v-if="showMore">
      <div v-for="item in 1000" :key="item">
        <p>List Item {{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const showMore = ref(false);
</script>
