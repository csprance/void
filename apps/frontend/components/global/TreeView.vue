<script lang="ts" setup>
import { logger as myLogger } from "~/helpers/logger";

const logger = myLogger.withTag("TreeView");

interface TreeNode {
  id: string | number;
  label: string;
  children?: TreeNode[];
}

const props = defineProps<{
  nodes: TreeNode[];
  expanded: string[] | number[];
  selected: string | number;
  filter: string;
  connectors: boolean;
}>();

// computed
const filteredNodes = computed(() => {
  if (!props.filter) {
    return props.nodes;
  }
  return filterTreeObjects(props.nodes, props.filter);
});

// methods
function collectParentIds(objects: TreeNode[]): (string | number)[] {
  let ids: (string | number)[] = [];
  for (const object of objects) {
    if (object.children && object.children.length > 0) {
      ids.push(object.id);
      ids = [...ids, ...collectParentIds(object.children)];
    }
  }
  return ids;
}

function expandAll() {
  const ids = collectParentIds(props.nodes);
  emit("update:expanded", ids);
}

function collapseAll() {
  emit("update:expanded", []);
}

function filterTreeObjects(objects: TreeNode[], filter: string): TreeNode[] {
  return objects.reduce<TreeNode[]>((acc, obj) => {
    if (obj.label.toLowerCase().includes(filter.toLowerCase())) {
      acc.push(obj);
    } else if (obj.children) {
      const filteredChildren = filterTreeObjects(obj.children, filter);
      if (filteredChildren.length > 0) {
        acc.push({ ...obj, children: filteredChildren });
      }
    }
    return acc;
  }, []);
}

function getNodeByKey(id: string | number): TreeNode | null {
  for (const object of props.nodes) {
    if (String(object.id) === String(id)) {
      return object;
    }
  }
  return null;
}

const expanded = ref(props.expanded);

function onToggleExpanded(id: string | number) {
  const index = expanded.value.indexOf(id);
  if (index === -1) {
    expanded.value.push(id);
  } else {
    expanded.value.splice(index, 1);
  }
  emit("update:expanded", expanded.value);
}

function onToggleSelected(id: string | number) {
  const newSelected = props.selected === id ? -1 : id;
  logger.debug("Category ID: ", newSelected);
  emit("update:selected", newSelected);
}

const emit = defineEmits(["update:expanded", "update:selected"]);

// public
defineExpose({ expandAll, collapseAll, getNodeByKey });
</script>
<template>
  <ul class="relative text-sm">
    <TreeViewNode
      v-for="node in filteredNodes"
      :key="node.id"
      :node="node"
      :expanded="expanded"
      :selected="selected"
      :connectors="connectors"
      @emit-toggle-expanded="onToggleExpanded"
      @emit-toggle-selected="onToggleSelected"
    />
  </ul>
</template>
