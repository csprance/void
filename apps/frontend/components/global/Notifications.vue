<script setup lang="ts">
import { useSubscription } from "villus";
import { AllNotificationsStreamDocument } from "~/gql/operations";
import { useNotifyStore } from "~/stores/notify";

const notifyStore = useNotifyStore();
const { currentUser } = useAppStore();

const { data } = useSubscription({
  query: AllNotificationsStreamDocument,
  variables: {
    user_id: currentUser.id,
    created_at: new Date().toISOString(),
  },
});
watch([data], () => {
  notifyStore.onNewNotification(data.value);
});

const topLeftMessages = computed(() => {
  return notifyStore.messages.filter(
    (message) => message.location === "top-left",
  );
});

const topMessages = computed(() => {
  return notifyStore.messages.filter((message) => message.location === "top");
});

const topRightMessages = computed(() => {
  return notifyStore.messages.filter(
    (message) => message.location === "top-right",
  );
});

const leftMessages = computed(() => {
  return notifyStore.messages.filter((message) => message.location === "left");
});

const centerMessages = computed(() => {
  return notifyStore.messages.filter(
    (message) => message.location === "center",
  );
});

const rightMessages = computed(() => {
  return notifyStore.messages.filter((message) => message.location === "right");
});

const bottomLeftMessages = computed(() => {
  return notifyStore.messages.filter(
    (message) => message.location === "bottom-left",
  );
});

const bottomMessages = computed(() => {
  return notifyStore.messages.filter(
    (message) => message.location === "bottom",
  );
});

const bottomRightMessages = computed(() => {
  return notifyStore.messages.filter(
    (message) => message.location === "bottom-right",
  );
});
</script>

<template>
  <div id="notifications" style="z-index: 1000">
    <!-- top left -->
    <div
      class="absolute top-0 left-0 right-0 flex flex-col items-start pointer-events-none flex-nowrap"
    >
      <div v-for="item in topLeftMessages" :key="item.id">
        <div class="mx-6 mt-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- top -->
    <div
      class="absolute top-0 left-0 right-0 flex flex-col items-center pointer-events-none flex-nowrap"
    >
      <div v-for="item in topMessages" :key="item.id">
        <div class="mx-6 mt-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- top right -->
    <div
      class="absolute top-0 left-0 right-0 flex flex-col items-end pointer-events-none flex-nowrap"
    >
      <div v-for="item in topRightMessages" :key="item.id">
        <div class="mx-6 mt-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- left -->
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-start justify-center pointer-events-none flex-nowrap"
    >
      <div v-for="item in leftMessages" :key="item.id">
        <div class="mx-6 mb-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- center -->
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center pointer-events-none flex-nowrap"
    >
      <div v-for="item in centerMessages" :key="item.id">
        <div class="mx-6 mb-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- right -->
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-end justify-center pointer-events-none flex-nowrap"
    >
      <div v-for="item in rightMessages" :key="item.id">
        <div class="mx-6 mb-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- bottom left -->
    <div
      class="absolute bottom-0 left-0 right-0 flex flex-col items-start pointer-events-none flex-nowrap"
    >
      <div v-for="item in bottomLeftMessages" :key="item.id">
        <div class="mx-6 mb-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div
      class="absolute bottom-0 left-0 right-0 flex flex-col items-center pointer-events-none flex-nowrap"
    >
      <div v-for="item in bottomMessages" :key="item.id">
        <div class="mx-6 mb-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>

    <!-- bottom right -->
    <div
      class="absolute bottom-0 left-0 right-0 flex flex-col items-end pointer-events-none flex-nowrap"
    >
      <div v-for="item in bottomRightMessages" :key="item.id">
        <div class="mx-6 mb-6 transition-all">
          <!-- notification -->
          <NotificationItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
