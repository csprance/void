<script setup lang="ts">
import { defaultAcl } from "~/helpers/acl";

definePageMeta({
  layout: "default",
  acl: defaultAcl(),
});
</script>
<template>
  <div class="w-full">
    <!-- banner -->
    <HomeBanner />

    <!-- content -->
    <div class="px-12 py-8 space-y-8">
      <HomeNewContent />
      <HomePopularContent />
      <MainFooter />
    </div>
  </div>
</template>
