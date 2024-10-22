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

const formkitConfig = {
  classes: {
    form: "space-y-6",
    outer: "",
    label: "select-none text-base text-primary",
    input: "",
    wrapper: "",
    help: "text-xs text-tide-500",
    message: "mt-1 text-rose-500 text-sm",
  },
};

const textInputClasses = {
  input: `mt-1 input-field`,
};

const submitHandler = async ({ email }) => {
  try {
    await signIn("email", {
      email: `${email}`.trim().toLowerCase(),
    });
  } catch (e) {
    notifyStore.show({
      type: NotificationTypes.Error,
      message: "Something went wrong. Please refresh and try again.",
    });
  }
};
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <div class="relative w-full max-w-sm pb-12 space-y-6">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h2 class="text-4xl font-bold leading-normal text-primary">
          Sign in to Void
        </h2>
        <p class="text-sm text-secondary">
          Need an account?
          {{ " " }}
          <NuxtLink to="/auth/signup" class="text-link-accent">
            Sign Up
          </NuxtLink>
        </p>
      </div>

      <!-- Form -->
      <FormKit
        autocomplete="off"
        type="form"
        :actions="false"
        :config="formkitConfig"
        @submit="submitHandler"
      >
        <FormKit
          name="email"
          type="email"
          default="JaneDoe@gmail.com"
          validation="required|email"
          validation-visibility="dirty"
          placeholder="Your Email address"
          :classes="{
            input: `mt-1 input-primary-filled-outlined px-4 py-2 w-full rounded-lg`,
          }"
        />

        <FormKit
          type="submit"
          label="Sign In"
          :classes="{
            input: `button-accent-filled rounded-full w-full p-3
              font-semibold`,
          }"
        />
      </FormKit>

      <AuthSocialLogins />
    </div>
  </div>
</template>
