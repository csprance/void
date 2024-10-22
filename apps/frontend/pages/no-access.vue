<script setup>
import { Role_Enum } from "~/gql/operations";

definePageMeta({
  layout: "default",
  acl: {
    roles: [{ role: Role_Enum.Public }],
  },
});
</script>

<template>
  <div
    class="justify-center items-center flex flex-col"
    :style="{ height: '100vh' }"
  >
    <h1 class="" :style="{ 'font-size': '32px' }">You do not have access.</h1>
    <h2
      class="justify-center items-center flex"
      :style="{ 'font-size': '20px' }"
    >
      Please notify your manager or the site admin for help or just wait a bit
      until your account is granted access.
    </h2>
  </div>
</template>
