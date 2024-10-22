<script setup lang="ts">
import { signinErrors } from "~/helpers/auth";
import {
  NotificationLocation,
  NotificationTypes,
  useNotifyStore,
} from "~/stores/notify";

definePageMeta({
  layout: "auth",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

const notifyStore = useNotifyStore();
const { signIn } = useAuth();

const {
  query: { error },
} = useRoute();

onMounted(() => {
  if (Object.keys(signinErrors).includes(String(error))) {
    notifyStore.show({
      id: signinErrors[error],
      message: signinErrors[error],
      type: NotificationTypes.Error,
      location: NotificationLocation.Top,
    });
  }
});
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <div class="relative w-full max-w-md space-y-6">
      <!-- Header -->
      <div class="text-center">
        <icon-logo class="w-12 h-12 mx-auto" />
        <h3 class="text-3xl font-semibold leading-normal text-primary">
          Check your email.
        </h3>
        <p class="pb-5">We just sent you a link to sign in. Go click it!</p>
        <NuxtLink to="/auth/signup" class="text-link-accent">
          Back To Sign Up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
