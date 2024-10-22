<script setup lang="ts">
/**
 * Provides a sort of "EventBus" communication style where we can react to things
 * on the client side that happen server side
 */
import { QueryTags } from "~/helpers/query-tags";
import { useRefetchQueryTagsOnNumAssetsChanged } from "~/helpers/use/useNumAssetsSubcription";

useRefetchQueryTagsOnNumAssetsChanged([QueryTags.ASSETS_DATA]);
</script>
<template></template>
