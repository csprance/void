import { Settings } from "@void/settings";
import { flatten } from "flatten-anything";
import { nestifyObject } from "nestify-anything";
import { useMutation, useQuery } from "villus";
import { ref } from "vue";
// GraphQL documents import
import { FlatSettingsDocument, UpdateSettingsDocument } from "~/gql/operations";
import { QueryTags } from "~/helpers/query-tags";
import type { DeepPartial } from "~/types/app";

export function useSettings() {
  // State management for settings
  const settings = ref<Settings>();

  // Villus query to fetch settings
  const { data, error } = useQuery({
    query: FlatSettingsDocument,
    tags: [QueryTags.SETTINGS],
  });

  // Watch the query data and update local settings ref
  watch(data, (newVal) => {
    if (newVal !== null) {
      console.log(nestifyObject(newVal.flat_settings[0].settings));
      settings.value = nestifyObject(
        newVal.flat_settings[0].settings,
      ) as unknown as Settings;
    }
  });

  // Villus mutation to update settings
  const { execute: executeUpdateSettings } = useMutation(
    UpdateSettingsDocument,
    { refetchTags: [QueryTags.SETTINGS] },
  );

  // Function to update settings
  async function updateSettings(newSettings: DeepPartial<Settings>) {
    const formattedSettings = Object.entries(flatten(newSettings)).map(
      ([name, value]) => ({
        where: { name: { _eq: name } },
        _set: { value },
      }),
    );
    const results = await executeUpdateSettings({
      settings: formattedSettings,
    });

    // Optionally, refresh the local settings after mutation
    settings.value = { ...settings.value, ...newSettings } as Settings;
    useNotifyStore().show({
      message: results.error ? "Failure" : "Settings Updated",
      type: results.error ? "failure" : "success",
      location: "top",
    });
  }

  return {
    settings,
    updateSettings,
    error,
  };
}
