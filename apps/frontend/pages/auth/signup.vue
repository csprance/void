<script setup lang="ts">
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
  input: `mt-1 input-field `,
};

const submitHandler = async ({ firstName, lastName, username, email }) => {
  try {
    const data = await signIn("email", {
      firstName,
      lastName,
      username: `${username}`.trim().toLowerCase(),
      email,
    });
    if (data) {
      notifyStore.show({
        type: NotificationTypes.Success,
        message: "Redirecting to login page!",
        location: NotificationLocation.Bottom,
        timeout: 2000,
        progress: true,
      });
      return setTimeout(() => {
        navigateTo("/auth/signin");
      }, 2000);
    }
  } catch (e) {
    notifyStore.show({
      type: NotificationTypes.Error,
      message: e.response.data.message,
      timeout: 0,
      location: NotificationLocation.Bottom,
      progress: true,
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
          Create an account
        </h2>
        <p class="text-sm text-secondary">
          Already have an account?
          {{ " " }}
          <nuxt-link to="/auth/signin" class="text-link-accent">
            Sign In
          </nuxt-link>
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
          label="Create Account"
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
