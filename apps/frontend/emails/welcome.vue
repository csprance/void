<script setup lang="ts">
export interface WelcomeEmailParams {
  username: string;
  url: string;
}

const { username, url } = withDefaults(defineProps<WelcomeEmailParams>(), {
  username: "Michael Scott",
  url: "http://localhost:3000",
});
</script>

<template>
  <EHtml>
    <EHead />
    <EPreview>Void Batch Asset Ingest</EPreview>
    <EmailBase>
      <EContainer class="text-left">
        <EText class="text-left">
          Welcome <strong>{{ username }}</strong
          >,
        </EText>

        <EText>We hope you enjoy VOID!</EText>
      </EContainer>
      <EmailButton :href="url"> Login to Void </EmailButton>
    </EmailBase>
  </EHtml>
</template>

<style scoped></style>
