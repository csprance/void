<script setup lang="ts">
import { useQuery } from "villus";
import { NumNotificationsDocument } from "~/gql/operations";
import { QueryTags } from "~/helpers/query-tags";
import { useAssetsStore } from "~/stores/assets";

const assetsStore = useAssetsStore();
const appStore = useAppStore();

const { data } = useQuery({
  query: NumNotificationsDocument,
  tags: [QueryTags.NOTIFICATIONS_DATA],
  variables: {
    user_id: appStore.currentUser.id,
  },
  cachePolicy: "cache-and-network",
});
const links = [
  {
    name: "Assets",
    link: "/assets",
    // handler: () => {
    //   assetsStore.baseWhere = {};
    // },
  },
  // { name: "Collections", link: "/" },
];
</script>

<template>
  <div class="z-10 flex justify-between w-full h-16 px-4 mx-auto bg-secondary">
    <!-- left -->
    <div class="flex items-stretch gap-6">
      <!-- logo -->
      <NuxtLink
        to="/"
        class="flex items-center text-white transition gap-x-2 hover:text-amber-500 hover:scale-110"
      >
        <icon-logo class="w-10 h-10 shrink-0" />
      </NuxtLink>
      <!-- nav -->
      <nav class="flex gap-6 px-2 text-primary">
        <NuxtLink
          v-for="item in links"
          :key="item.name"
          :value="item.link"
          :to="item.link"
          class="inline-flex items-center px-2 font-semibold transition-all border-b-2 border-transparent bg-reg-500 dark:hover:bg-white/5 hover:bg-black/5"
          active-class="border-b-sky-500"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>

    <!-- right -->
    <div class="flex items-center gap-1">
      <NuxtLink to="/notifications">
        <button
          v-tooltip="'Notifications'"
          class="w-10 h-10 rounded-full button-primary-flat"
        >
          <icon-bell class="w-6 h-6" />
          <span
            v-if="data?.notification_aggregate.aggregate?.count"
            class="absolute w-2.5 h-2.5 rounded-full top-2 right-2 bg-rose-500"
          />
        </button>
      </NuxtLink>

      <ThemeToggle />
      <MainMenuButton />
    </div>
  </div>
</template>
