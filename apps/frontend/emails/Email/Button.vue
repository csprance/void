<script setup lang="ts">
import type { CSSProperties } from "vue";

export interface ButtonProps {
  url: string;
}

const { username, url } = withDefaults(defineProps<ButtonProps>(), {
  url: "http://localhost:3000",
});

const button = {
  backgroundColor: "rgb(56 189 248 / 1)",
  color: "#fff",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "0.5em",
  textTransform: "uppercase",
} as CSSProperties;
</script>

<template>
  <EButton :href="url" :style="button"> <slot /> </EButton>
</template>

<style scoped></style>
