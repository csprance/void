<script setup lang="ts">
export interface LoginEmailParams {
  url: string;
  username: string;
}

const { url, username } = withDefaults(defineProps<LoginEmailParams>(), {
  url: "http://localhost/token",
});
</script>

<template>
  <EHtml>
    <EHead />
    <EPreview>Void Login Email</EPreview>
    <EmailBase>
      <EText class="text-left"> Hi! </EText>
      <EText class="text-left">
        You recently requested to be logged in through email. Click the link
        below to be securely signed in.
      </EText>
      <EmailButton :href="url"> Login to Void </EmailButton>
    </EmailBase>
  </EHtml>
</template>
