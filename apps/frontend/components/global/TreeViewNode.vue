<script lang="ts" setup>
import { logger } from "~/helpers/logger";

interface TreeNode {
  id: string | number;
  label: string;
  children?: TreeNode[];
}

const props = defineProps<{
  node: TreeNode;
  expanded: string[] | number[];
  selected: string | number;
  connectors: boolean;
}>();

const emits = defineEmits(["emitToggleExpanded", "emitToggleSelected"]);

function onToggleExpanded(id: string | number) {
  emits("emitToggleExpanded", id);
}

function onToggleSelected(id: string | number) {
  emits("emitToggleSelected", id);
}

function emitToggleExpanded(id: string | number) {
  emits("emitToggleExpanded", id);
}

function emitToggleSelected(id: string | number) {
  emits("emitToggleSelected", id);
}

// computed
const isExpanded = computed(() => {
  return props.expanded.includes(props.node.id as any);
});
const isSelected = computed(() => {
  logger.withTag("TreeViewNode").trace(props.selected);
  return props.selected === props.node.id;
});
</script>

<template>
  <li>
    <!-- header -->
    <div
      class="flex items-center rounded-full cursor-pointer flex-nowrap"
      :class="[
        isSelected
          ? 'bg-sky-500 font-semibold text-white'
          : 'hover:bg-gray-500/5 dark:hover:text-white text-gray-600 dark:text-gray-300 ',
      ]"
      @click="onToggleSelected(node.id)"
    >
      <!-- arrow -->
      <div class="flex items-center text-center w-7 h-7">
        <button
          v-if="node.children && node.children.length"
          class="w-full h-full rounded-full hover:bg-gray-500/10 active:bg-gray-500/20"
          :class="[isExpanded ? 'rotate-90' : 'rotate-0']"
          @click.stop="onToggleExpanded(node.id)"
        >
          <svg viewBox="0 0 48 48" class="w-4 h-4 mx-auto" fill="currentColor">
            <path
              d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
            />
          </svg>
        </button>
      </div>
      <!-- text -->
      <div class="ml-0.5 select-none">{{ node.label }}</div>
    </div>

    <!-- children recursive -->
    <ul v-if="isExpanded && node.children" class="relative pl-4">
      <TreeViewNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :expanded="expanded"
        :selected="selected"
        :connectors="connectors"
        @emit-toggle-expanded="emitToggleExpanded"
        @emit-toggle-selected="emitToggleSelected"
      />
      <!-- lines -->
      <div
        v-if="connectors"
        class="absolute top-0 w-4 h-full border-l border-gray-900/10 dark:border-gray-100/10 left-3.5 pointer-events-none"
      />
    </ul>
  </li>
</template>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
  /* transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1); */
  transition: transform 0.2s ease-in-out;
}

.rotate-0 {
  transform: rotate(0deg);
  /* transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1); */
  transition: transform 0.2s ease-in-out;
}
</style>
