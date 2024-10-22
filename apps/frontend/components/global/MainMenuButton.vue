<script setup lang="ts">
import { signout } from "next-auth/src/core/routes";
import { Role_Enum } from "~/gql/operations";
import { canPerformAction } from "~/helpers/acl";

const { currentUser } = useAppStore();
const {
  public: { docsUrl },
} = useRuntimeConfig();
const { signOut } = useAuth();
const router = useRouter();

type MenuItemType = {
  label?: string;
  icon?: any;
  action?: () => void;
  hr?: boolean;
  role: Role_Enum;
};
const menuItems: MenuItemType[] = [
  {
    label: "My Account",
    icon: resolveComponent("IconAccount"),
    role: Role_Enum.Public,
    action: () => {
      router.push({
        path: `/users/${encodeURIComponent(String(currentUser.name))}`,
      });
    },
  },
  {
    label: "Manage Users",
    icon: resolveComponent("IconPeople"),
    role: Role_Enum.Manager,
    action: () => {
      router.push({
        path: `/users`,
      });
    },
  },
  // {
  //   label: "Upload Single Asset",
  //   icon: resolveComponent("IconUpload"),
  //   role: Role_Enum.User,
  //   action: () => {
  //     router.push({
  //       path: `/asset/new`,
  //     });
  //   },
  // },
  // {
  //   label: "Upload Multiple Assets",
  //   icon: resolveComponent("IconUploadMultiple"),
  //   role: Role_Enum.User,
  //   action: () => {
  //     router.push({
  //       path: `/asset/new-batch`,
  //     });
  //   },
  // },
  {
    hr: true,
    role: Role_Enum.Public,
  },
  {
    label: "Admin Dashboard",
    icon: resolveComponent("IconSettings"),
    role: Role_Enum.Admin,
    action: () => {
      router.push({
        path: `/admin`,
      });
    },
  },
  {
    label: "Embeddings",
    icon: resolveComponent("IconMachineLearning"),
    role: Role_Enum.Admin,
    action: () => {
      router.push({
        path: `/embeddings`,
      });
    },
  },
  {
    label: "ML Tagging",
    icon: resolveComponent("IconTag"),
    role: Role_Enum.Admin,
    action: () => {
      router.push({
        path: `/ml-tagging`,
      });
    },
  },
  {
    hr: true,
    role: Role_Enum.User,
  },
  {
    label: "Help Center",
    icon: resolveComponent("IconInfo"),
    role: Role_Enum.User,
    action: () => {
      window.open(docsUrl, "_blank").focus(); // Opens the URL in a new tab and focuses on it
    },
  },
  {
    hr: true,
    role: Role_Enum.Admin,
  },
  {
    label: "Sign Out",
    icon: resolveComponent("IconLogout"),
    role: Role_Enum.Public,
    action: () => {
      signOut();
      router.push({
        path: `#`,
      });
    },
  },
];
// Filter menu items based on the current user's role
const accessibleMenuItems = menuItems.filter((item) =>
  canPerformAction(currentUser.role, item.role),
);
</script>

<template>
  <VDropdown
    :triggers="['click']"
    :hide-triggers="['click']"
    :popper-hide-triggers="['click']"
    :distance="12"
    :arrow-padding="18"
    :delay="{ show: 0, hide: 0 }"
  >
    <button
      type="button"
      class="w-10 h-10 rounded-full button-primary-flat"
      @click.stop
    >
      <img
        v-if="currentUser.image"
        alt=" Main Menu Button as Users Profile Image"
        :src="currentUser?.image"
        class="w-6 h-6 rounded"
      />
      <IconFace v-else class="w-6 h-6" />
    </button>

    <template #popper>
      <div class="flex flex-col items-start py-2 w-80 flex-nowrap">
        <!-- Current User -->
        <div class="flex items-center w-full gap-2 px-4 py-1 flex-nowrap">
          <div>
            <img
              v-if="currentUser.image"
              :src="currentUser?.image"
              alt="User Profile Image"
              class="w-6 h-6 rounded shrink-0"
            />
            <IconFace v-else class="w-6 h-6" />
          </div>
          <div>
            <h1 class="text-xs text-secondary">Signed in as</h1>
            <p class="text-sm truncate text-primary">
              {{ currentUser.email }}
            </p>
          </div>
        </div>

        <hr class="my-1.5 divider" />

        <!-- Action Links -->
        <template v-for="(item, index) in accessibleMenuItems" :key="index">
          <hr v-if="item.hr" class="my-1.5 divider" />
          <button
            v-else
            type="button"
            class="w-full p-2 px-4 button-primary-flat"
            @click="item.action?.()"
          >
            <span class="flex items-center w-full gap-2 text-sm text-primary">
              <component :is="item.icon" class="w-6 shrink-0" />
              <span>{{ item.label }}</span>
            </span>
          </button>
        </template>
      </div>
    </template>
  </VDropdown>
</template>
