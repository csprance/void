<script setup lang="ts">
const { signIn } = useAuth();

const handleGithubClick = () => signIn("github");
const handleGoogleClick = () => signIn("google");
</script>

<template>
  <div class="space-y-6">
    <div class="relative flex items-center gap-2 text-sm">
      <hr class="flex-grow divider" />
      <span class="mx-2 font-medium shrink-0 text-tertiary"> OR </span>
      <hr class="flex-grow divider" />
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <button
        type="button"
        class="h-10 rounded-full button-primary-outlined"
        @click="handleGoogleClick"
      >
        <icon-google class="w-5 h-5 shrink-0" />
        <span class="ml-2">Google</span>
      </button>

      <button
        type="button"
        class="h-10 rounded-full button-primary-outlined"
        @click="handleGithubClick"
      >
        <icon-github class="w-5 h-5 dark:fill-white fill-black shrink-0" />
        <span class="ml-2">GitHub</span>
      </button>
    </div>
  </div>
</template>
