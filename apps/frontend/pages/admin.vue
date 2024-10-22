<script setup>
import { useQuery } from "villus";
import { BackendVersionDocument, Role_Enum } from "~/gql/operations";
import { createAclMeta } from "~/helpers/acl";
import { version } from "~/package.json";

definePageMeta({
  layout: "default",
  acl: createAclMeta([{ role: Role_Enum.Admin }]),
});

const { data } = useQuery({ query: BackendVersionDocument });
</script>

<template>
  <div class="w-full max-w-4xl p-6 mx-auto">
    <!-- header -->
    <div class="flex flex-wrap items-center w-full gap-4">
      <!-- first column -->
      <div class="space-y-1 grow">
        <h1 class="text-3xl font-bold text-primary">Admin Dashboard</h1>
        <p class="text-sm">
          The 'Ministry of Management' your headquarters for control is here!
        </p>
      </div>
    </div>
    <hr class="my-8 divider" />
    <div class="flex flex-wrap items-center w-full gap-4">
      <!-- first column -->
      <div class="space-y-1 grow">
        <h3 class="text-1xl font-bold text-primary">Versions</h3>
        <p>Frontend: {{ version }}</p>
        <p>Backend: {{ data?.backend_version.version }}</p>
      </div>
    </div>
    <hr class="my-8 divider" />

    <AdminStoragePoints />

    <hr class="my-8 divider" />

    <AdminOllamaSettings />

    <hr class="my-8 divider" />

    <AdminIngestSettings />

    <hr class="my-8 divider" />

    <AdminMLTaggingSettings />

    <hr class="my-8 divider" />
  </div>
</template>
