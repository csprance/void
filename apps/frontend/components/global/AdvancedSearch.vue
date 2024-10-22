<script setup lang="ts">
import { useQuery } from "villus";
import { AllAttributesDocument } from "~/gql/operations";
import { logger } from "~/helpers/logger";

const { showQueryFilterDSLDocs } = useDialogStore();
const assetsStore = useAssetsStore();

const operationOptions = ref([
  { label: "Equals", value: "_eq" },
  { label: "Not Equal", value: "_neq" },
  { label: "Regex", value: "_iregex" },
  { label: "Not Regex", value: "_niregex" },
  { label: "Greater Than", value: "_gt" },
  { label: "Less Than", value: "_lt" },
]);

const name = reactive<{ op: string; value: string }>({
  op: "_iregex",
  value: "",
});
const creator = reactive<{ op: string; value: string }>({
  op: "_iregex",
  value: "",
});
const owner = reactive<{ op: string; value: string }>({
  op: "_iregex",
  value: "",
});
const description = reactive<{ op: string; value: string }>({
  op: "_iregex",
  value: "",
});
const isArchived = reactive<{ op: string; value: boolean }>({
  op: "_eq",
  value: false,
});

const { data } = useQuery({
  query: AllAttributesDocument,
  variables: {
    name: ".*",
  },
});

function resetSearch() {
  name.op = "_iregex";
  name.value = "";
  creator.op = "_iregex";
  creator.value = "";
  owner.op = "_iregex";
  owner.value = "";
  description.op = "_iregex";
  description.value = "";
  isArchived.value = false;
}

function executeSearch() {
  const params = {
    name,
    creator,
    owner,
    description,
    archived: isArchived,
  };
  logger.debug(params);
  let queryString = "";

  for (const [key, { op, value }] of Object.entries(params)) {
    if (value !== "") {
      if (key === "archived") {
        if (value === false) continue;
        queryString += "archived:true ";
      } else {
        queryString += `${key}:${op}:"${value}" `;
      }
    }
  }

  assetsStore.querySearchString = queryString.trim();
}
</script>

<template>
  <div class="p-4 space-y-2">
    <!-- header -->
    <div class="flex flex-row justify-between">
      <h1 class="text-sm text-secondary">Search Query Builder</h1>
      <button
        class="w-6 h-6 text-sm font-semibold rounded-full button-primary-outlined"
        @click="showQueryFilterDSLDocs"
      >
        ?
      </button>
    </div>
    <!-- content -->
    <table class="-mx-1 border-separate table-auto border-spacing-1">
      <tbody>
        <!-- Name -->
        <tr>
          <td class="leading-none whitespace-nowrap">
            <label for="name-search-advanced" class="text-sm text-primary">
              Name
            </label>
          </td>
          <td class="inline-flex">
            <select
              id="name-operation-search-advanced"
              v-model="name.op"
              class="text-sm rounded-l input-primary-filled-outlined"
            >
              <option v-for="item in operationOptions" :value="item.value">
                {{ item.label }}
              </option>
            </select>

            <input
              id="name-search-advanced"
              v-model="name.value"
              type="text"
              class="w-48 text-sm rounded-r input-primary-filled-outlined"
            />
          </td>
        </tr>

        <!-- Creator -->
        <tr>
          <td class="leading-none whitespace-nowrap">
            <label for="creator-search-advanced" class="text-sm text-primary">
              Creator
            </label>
          </td>
          <td class="inline-flex">
            <select
              id="creator-operation-search-advanced"
              v-model="creator.op"
              class="text-sm rounded-l input-primary-filled-outlined"
            >
              <option v-for="item in operationOptions" :value="item.value">
                {{ item.label }}
              </option>
            </select>
            <input
              id="creator-search-advanced"
              v-model="creator.value"
              class="w-48 text-sm rounded-r input-primary-filled-outlined"
            />
          </td>
        </tr>

        <!-- Owner -->
        <tr>
          <td class="leading-none whitespace-nowrap">
            <label for="owner-search-advanced" class="text-sm text-primary">
              Owner
            </label>
          </td>
          <td class="inline-flex">
            <select
              id="owner-operation-search-advanced"
              v-model="owner.op"
              class="text-sm rounded-l input-primary-filled-outlined"
            >
              <option v-for="item in operationOptions" :value="item.value">
                {{ item.label }}
              </option>
            </select>
            <input
              id="owner-search-advanced"
              v-model="owner.value"
              class="w-48 text-sm rounded-r input-primary-filled-outlined"
            />
          </td>
        </tr>

        <!-- Description -->
        <tr>
          <td class="leading-none whitespace-nowrap">
            <label
              for="description-search-advanced"
              class="text-sm text-primary"
            >
              Description
            </label>
          </td>
          <td class="inline-flex">
            <select
              id="description-operation-search-advanced"
              v-model="description.op"
              class="text-sm rounded-l input-primary-filled-outlined"
            >
              <option v-for="item in operationOptions" :value="item.value">
                {{ item.label }}
              </option>
            </select>
            <input
              id="description-search-advanced"
              v-model="description.value"
              class="w-48 text-sm rounded-r input-primary-filled-outlined"
            />
          </td>
        </tr>

        <!-- Archived -->
        <tr>
          <td class="leading-none whitespace-nowrap">
            <label
              for="is-archived-search-advanced"
              class="text-sm text-primary"
            >
              Is Archived
            </label>
          </td>
          <td class="inline-flex">
            <input
              id="archived-search-advanced"
              v-model="isArchived.value"
              type="checkbox"
              class="size-5 input-checkbox-filled-outlined"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- footer -->
    <div class="flex justify-end gap-2">
      <button
        class="px-6 text-sm font-semibold rounded-full h-9 button-primary-flat"
        @click="resetSearch"
      >
        Reset
      </button>
      <button
        class="px-6 text-sm font-semibold rounded-full h-9 button-accent-filled"
        @click="executeSearch"
      >
        Search
      </button>
    </div>
  </div>
</template>
