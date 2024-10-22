<script setup lang="ts">
import type { Notification } from "~/stores/notify";
import { useNotifyStore } from "~/stores/notify";

const props = defineProps<{ item: Notification }>();
const notifyStore = useNotifyStore();

// progress
const isTimerRunning = ref(false);
const startTimer = ref(false);
const progressBarStyle = {
  animationDuration: props.item.timeout + "ms",
  animationTimingFunction: "linear",
};

const timerEnded = () => {
  isTimerRunning.value = false;
  notifyStore.removeMessage(props.item.id);
};

onMounted(() => {
  if (props.item.timeout > 0) {
    startTimer.value = true;
  }
});
</script>

<template>
  <div
    class="relative z-[999999] flex w-full max-w-2xl overflow-hidden rounded-lg shadow-lg pointer-events-auto ring-black ring-opacity-5"
    :class="{
      'bg-sky-500': item.type === 'info',
      'bg-amber-500': item.type === 'warning',
      'bg-green-500': item.type === 'success',
      'bg-rose-500': item.type === 'error',
      'bg-zinc-500': item.type === 'default',
    }"
  >
    <div class="p-3">
      <div class="flex items-center">
        <div class="flex-shrink-0 text-blue-500">
          <svg viewBox="0 0 48 48" class="w-6 h-6">
            <!-- info -->
            <path
              v-if="item.type === 'info'"
              class="fill-white"
              d="M22.65,34L25.65,34L25.65,22L22.65,22L22.65,34ZM23.999,18.3C24.466,18.3 24.858,18.147 25.175,17.84C25.492,17.533 25.65,17.153 25.65,16.7C25.65,16.218 25.492,15.815 25.176,15.489C24.86,15.163 24.468,15 24.001,15C23.534,15 23.142,15.163 22.825,15.489C22.508,15.815 22.35,16.218 22.35,16.7C22.35,17.153 22.508,17.533 22.824,17.84C23.14,18.147 23.532,18.3 23.999,18.3ZM24.013,44C21.255,44 18.664,43.475 16.238,42.425C13.813,41.375 11.692,39.942 9.875,38.125C8.058,36.308 6.625,34.186 5.575,31.758C4.525,29.33 4,26.736 4,23.975C4,21.214 4.525,18.62 5.575,16.192C6.625,13.764 8.058,11.65 9.875,9.85C11.692,8.05 13.814,6.625 16.242,5.575C18.67,4.525 21.264,4 24.025,4C26.786,4 29.38,4.525 31.808,5.575C34.236,6.625 36.35,8.05 38.15,9.85C39.95,11.65 41.375,13.767 42.425,16.2C43.475,18.633 44,21.229 44,23.987C44,26.745 43.475,29.336 42.425,31.762C41.375,34.187 39.95,36.305 38.15,38.116C36.35,39.926 34.233,41.36 31.8,42.416C29.367,43.472 26.771,44 24.013,44ZM24.025,41C28.742,41 32.75,39.342 36.05,36.025C39.35,32.708 41,28.692 41,23.975C41,19.258 39.353,15.25 36.059,11.95C32.766,8.65 28.746,7 24,7C19.3,7 15.292,8.647 11.975,11.941C8.658,15.234 7,19.254 7,24C7,28.7 8.658,32.708 11.975,36.025C15.292,39.342 19.308,41 24.025,41Z"
            />
            <!-- error -->
            <path
              v-else-if="item.type === 'error'"
              class="fill-white"
              d="M24,33.95C24.467,33.95 24.875,33.775 25.225,33.425C25.575,33.075 25.75,32.667 25.75,32.2C25.75,31.733 25.575,31.325 25.225,30.975C24.875,30.625 24.467,30.45 24,30.45C23.533,30.45 23.125,30.625 22.775,30.975C22.425,31.325 22.25,31.733 22.25,32.2C22.25,32.667 22.425,33.075 22.775,33.425C23.125,33.775 23.533,33.95 24,33.95ZM22.5,26.75L25.5,26.75L25.5,13.6L22.5,13.6L22.5,26.75ZM16.5,42L6,31.5L6,16.5L16.5,6L31.5,6L42,16.5L42,31.5L31.5,42L16.5,42ZM17.75,39L30.25,39L39,30.25L39,17.75L30.25,9L17.75,9L9,17.75L9,30.25L17.75,39Z"
            />
            <!-- warning -->
            <path
              v-else-if="item.type === 'warning'"
              class="fill-white"
              d="M2,42L24,4L46,42L2,42ZM7.2,39L40.8,39L24,10L7.2,39ZM24.209,36.15C24.636,36.15 24.992,36.005 25.275,35.716C25.558,35.427 25.7,35.069 25.7,34.641C25.7,34.214 25.555,33.858 25.266,33.575C24.977,33.292 24.619,33.15 24.191,33.15C23.764,33.15 23.408,33.295 23.125,33.584C22.842,33.873 22.7,34.231 22.7,34.659C22.7,35.086 22.845,35.442 23.134,35.725C23.423,36.008 23.781,36.15 24.209,36.15ZM22.7,30.6L25.7,30.6L25.7,19.4L22.7,19.4L22.7,30.6Z"
            />
            <!-- success -->
            <path
              v-else-if="item.type === 'success'"
              class="fill-white"
              d="M21.05,33.1L35.2,18.95L32.9,16.7L21.05,28.55L15.05,22.55L12.8,24.8L21.05,33.1ZM24,44C21.267,44 18.683,43.475 16.25,42.425C13.817,41.375 11.692,39.942 9.875,38.125C8.058,36.308 6.625,34.183 5.575,31.75C4.525,29.317 4,26.733 4,24C4,21.233 4.525,18.633 5.575,16.2C6.625,13.767 8.058,11.65 9.875,9.85C11.692,8.05 13.817,6.625 16.25,5.575C18.683,4.525 21.267,4 24,4C26.767,4 29.367,4.525 31.8,5.575C34.233,6.625 36.35,8.05 38.15,9.85C39.95,11.65 41.375,13.767 42.425,16.2C43.475,18.633 44,21.233 44,24C44,26.733 43.475,29.317 42.425,31.75C41.375,34.183 39.95,36.308 38.15,38.125C36.35,39.942 34.233,41.375 31.8,42.425C29.367,43.475 26.767,44 24,44ZM24,41C28.733,41 32.75,39.342 36.05,36.025C39.35,32.708 41,28.7 41,24C41,19.267 39.35,15.25 36.05,11.95C32.75,8.65 28.733,7 24,7C19.3,7 15.292,8.65 11.975,11.95C8.658,15.25 7,19.267 7,24C7,28.7 8.658,32.708 11.975,36.025C15.292,39.342 19.3,41 24,41Z"
            />
          </svg>
        </div>
        <div class="flex-1 ml-3">
          <p v-if="item.title" class="text-sm font-medium text-white">
            {{ item.title }}
          </p>
          <p class="text-sm text-white break-all">{{ item.message }}</p>
        </div>
        <div class="flex self-start flex-shrink-0 ml-4">
          <button
            type="button"
            class="relative w-8 h-8 text-white bg-transparent rounded-full hover:bg-black/5 active:bg-black/10"
            @click="notifyStore.removeMessage(item.id)"
          >
            <svg
              viewBox="0 0 48 48"
              class="w-5 h-5 mx-auto"
              fill="currentColor"
            >
              <path
                d="M12.45,37.65L10.35,35.55L21.9,24L10.35,12.45L12.45,10.35L24,21.9L35.55,10.35L37.65,12.45L26.1,24L37.65,35.55L35.55,37.65L24,26.1L12.45,37.65Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- progress indicator -->
    <div
      v-if="item.timeout > 0"
      class="absolute bottom-0 h-1.5 bg-white/50"
      :class="{ 'start-animation': startTimer }"
      :style="progressBarStyle"
      @animationend="timerEnded"
    />
  </div>
</template>

<style>
.start-animation {
  animation-name: shrink;
}

@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>
