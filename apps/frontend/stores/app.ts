import { defineStore } from "pinia";
import { getCurrentUser } from "~/helpers/auth";

export const useAppStore = defineStore(
  "app",
  () => {
    /**
     * Indicates if the side panel is currently open.
     */
    const isSidePanelOpen = ref(true);

    /**
     * Indicates if the current view is a grid view.
     */
    const isGridView = ref(true);

    /**
     * Indicates if the auto-play feature is enabled.
     */
    const isAutoPlayEnabled = ref(false);

    /**
     * Indicates if the theme is currently set to dark mode.
     */
    const isDark = ref(
      import.meta.client
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : true,
    );

    /**
     * Indicates if the filter for liked items is currently enabled.
     */
    const isFilterLikedEnabled = ref(false);

    /**
     * Is the acquired toggle enabled
     */
    const isFilterAcquiredEnabled = ref(false);

    /**
     * Represents the current user. Computed from the `getCurrentUser` helper function.
     */
    const currentUser = computed(() => getCurrentUser());

    /**
     * Used to toggle the display of grid view item details
     */
    const showGridViewItemDetails = ref(false);

    /**
     * Size in which to display the grid items
     */
    const gridItemSize = ref<number>(360);

    /**
     * Toggles the theme between dark and light mode. It updates the `isDark` value,
     * toggles the `dark` class on the `documentElement`, and stores the preference in local storage.
     */
    function toggle_theme() {
      isDark.value = !isDark.value;
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("isDark", String(isDark.value));
    }

    return {
      isSidePanelOpen,
      isGridView,
      isAutoPlayEnabled,
      isFilterAcquiredEnabled,
      isDark,
      isFilterLikedEnabled,
      showGridViewItemDetails,
      currentUser,
      gridItemSize,
      toggle_theme,
    };
  },
  { persist: true },
);
