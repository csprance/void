<script setup lang="ts">
import { useMutation } from "villus";
import { ClearStoragePointLogsDocument } from "~/gql/operations";

const { logs, storagePointName } = defineProps<{
  storagePointName: string;
  logs: { log: string; timestamp?: any }[];
}>();

const { execute } = useMutation(ClearStoragePointLogsDocument);

const timestamps = ref(false);
const containerRef = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
  if (containerRef.value) {
    containerRef.value.scrollTop = containerRef.value.scrollHeight;
  }
};

const clearLogs = async () => {
  await execute({ storagePointName });
};

onMounted(() => {
  scrollToBottom();
});
watch([logs], () => {
  scrollToBottom();
});
</script>

<template>
  <div>
    <div class="flex items-center gap-2 pb-3 justify-between">
      <div>
        <label for="live-log-viewer" class="text-base text-secondary">
          TimeStamps:
        </label>
        <input
          id="live-log-viewer"
          v-model="timestamps"
          type="checkbox"
          class="input-checkbox-filled-outlined size-5"
        />
      </div>
      <button
        class="self-end px-6 text-sm font-semibold rounded-full h-9 button-primary-flat"
        @click="clearLogs()"
      >
        <span>Clear Logs</span>
      </button>
    </div>
    <div
      class="w-full bg-primary min-h-5 rounded-md p-3 max-h-[500px] overflow-auto"
      ref="containerRef"
    >
      <pre
        v-for="log in logs.toReversed()"
        :key="log.timestamp"
        class="whitespace-pre-wrap overflow-x-auto"
      ><code> <span v-if="timestamps">[{{log.timestamp}}]</span> {{ log.log }}</code></pre>
    </div>
  </div>
</template>

<style scoped></style>
