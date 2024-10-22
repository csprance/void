<script setup>
// props
const props = defineProps({
  // Add a new prop for controlling separators
  showSeparators: {
    type: Boolean,
    default: true, // By default, separators are shown
  },
  isLoading: {
    type: Boolean,
    default: false, // By default, not loading
  },
});

// Set inheritAttrs to false
defineOptions({
  inheritAttrs: false,
});

// events
onUnmounted(() => {
  document.documentElement.style.overflowY = "";
});

onMounted(() => {
  document.documentElement.style.overflowY = "hidden";
});
</script>
<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 z-10 overflow-hidden">
    <slot name="backdrop">
      <div class="fixed inset-0 bg-black bg-opacity-50" />
    </slot>

    <!-- container -->
    <div class="fixed inset-0 z-10 flex items-center justify-center w-full p-8">
      <!-- dialog -->
      <div
        v-bind="$attrs"
        class="relative overflow-hidden shadow-xl rounded-xl bg-secondary"
      >
        <!-- Conditionally apply padding if slot 'header' is provided -->
        <div v-if="$slots.header" class="px-6 py-4">
          <slot name="header" />
        </div>

        <!-- separator -->
        <hr v-if="$slots.header && showSeparators" class="divider" />

        <!-- main -->
        <div
          class="px-6 max-h-[70vh] overflow-auto relative"
          :class="showSeparators ? 'py-4' : 'py-0'"
        >
          <slot />

          <!-- busy overlay -->
          <div
            v-if="isLoading"
            class="absolute inset-0 flex items-center justify-center bg-sky-500"
          >
            <IconBusy class="w-6 h-6" />
          </div>
        </div>

        <!-- separator -->
        <hr v-if="$slots.footer && showSeparators" class="divider" />

        <!-- Conditionally apply padding if slot 'footer' is provided -->
        <div v-if="$slots.footer" class="px-6 py-4">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
