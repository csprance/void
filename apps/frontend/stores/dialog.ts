import { defineStore } from "pinia";
import { logger as mainLogger } from "~/helpers/logger";

const logger = mainLogger.withTag("dialogStore");

export const useDialogStore = defineStore("dialog", () => {
  // Asset Bulk Edit
  const isDialogAssetBulkEditOpen = ref(false);
  const assetBulkEditIds = ref([]);
  function showDialogAssetBulkEdit(ids = []) {
    assetBulkEditIds.value = ids;
    isDialogAssetBulkEditOpen.value = true;
  }

  // Asset Bulk Collection Edit
  const isDialogAssetBulkCollectionEditOpen = ref(false);
  const assetBulkCollectionEditIds = ref([]);
  function showDialogAssetBulkCollectionEdit(ids = []) {
    assetBulkCollectionEditIds.value = ids;
    isDialogAssetBulkCollectionEditOpen.value = true;
  }

  // User New
  const isDialogNewUserOpen = ref(false);
  function showDialogNewUser() {
    isDialogNewUserOpen.value = true;
  }

  // Edit User
  const isDialogUserBulkEditOpen = ref(false);
  const userBulkEditIds = ref([]);
  function showDialogUserBulkEdit(ids = []) {
    userBulkEditIds.value = ids;
    isDialogUserBulkEditOpen.value = true;
  }

  // Collection Delete Single
  const isDialogCollectionDeleteOpen = ref(false);
  const collectionDeleteId = ref();
  function showDialogCollectionDelete(id: number) {
    collectionDeleteId.value = id;
    isDialogCollectionDeleteOpen.value = true;
  }

  // Collection New
  const isDialogCollectionNewOpen = ref(false);
  function showDialogCollectionNew() {
    isDialogCollectionNewOpen.value = true;
  }

  // Collection Edit
  const isDialogCollectionEditOpen = ref(false);
  const collectionEditId = ref();
  function showDialogCollectionEdit(id: number) {
    collectionEditId.value = id;
    isDialogCollectionEditOpen.value = true;
  }

  // Storage Point New
  const isDialogStoragePointNewOpen = ref(false);
  function showDialogStoragePointNew() {
    isDialogStoragePointNewOpen.value = true;
  }

  // Storage Point Delete Single
  const isDialogStoragePointDeleteOpen = ref(false);
  const storagePointName = ref();
  function showDialogStoragePointDelete(name: string) {
    storagePointName.value = name;
    isDialogStoragePointDeleteOpen.value = true;
  }

  // QueryFilter DSL Docs
  const isQueryFilterDSLDocsOpen = ref(false);
  function showQueryFilterDSLDocs() {
    isQueryFilterDSLDocsOpen.value = true;
  }

  // Attribute New
  const isDialogAttributeNewOpen = ref(false);
  function showDialogAttributeNew() {
    isDialogAttributeNewOpen.value = true;
  }

  // Attribute Edit
  const isDialogAttributeEditOpen = ref(false);
  const attributeEditId = ref();
  function showDialogAttributeEdit(id: number) {
    attributeEditId.value = id;
    isDialogAttributeEditOpen.value = true;
  }
  //
  //
  //
  //
  //
  //
  //
  // TODO: CLEAN UP
  const editingAssetIds = ref([]);
  const isAdvancedFiltersOpen = ref(false);
  const advancedFilterIds = ref<number[]>([]);
  function openAdvancedFilterEditor() {
    isAdvancedFiltersOpen.value = true;
  }
  const isAssetAttributeManagerDialogOpen = ref(false);

  // public
  return {
    // Asset Bulk Edit
    isDialogAssetBulkEditOpen,
    assetBulkEditIds,
    showDialogAssetBulkEdit,

    // Asset Bulk Collection Edit
    isDialogAssetBulkCollectionEditOpen,
    assetBulkCollectionEditIds,
    showDialogAssetBulkCollectionEdit,

    // User New
    isDialogNewUserOpen,
    showDialogNewUser,

    // User Bulk Edit
    isDialogUserBulkEditOpen,
    userBulkEditIds,
    showDialogUserBulkEdit,

    // Collection Delete
    isDialogCollectionDeleteOpen,
    showDialogCollectionDelete,
    collectionDeleteId,

    // Collection New
    isDialogCollectionNewOpen,
    showDialogCollectionNew,

    // Collection Edit
    isDialogCollectionEditOpen,
    collectionEditId,
    showDialogCollectionEdit,

    // Storage Point New
    isDialogStoragePointNewOpen,
    showDialogStoragePointNew,

    // Storage Point
    isDialogStoragePointDeleteOpen,
    storagePointName,
    showDialogStoragePointDelete,

    // QueryFilter DSL Docs
    isQueryFilterDSLDocsOpen,
    showQueryFilterDSLDocs,

    // Attribute New
    isDialogAttributeNewOpen,
    showDialogAttributeNew,

    // Attribute Edit
    isDialogAttributeEditOpen,
    attributeEditId,
    showDialogAttributeEdit,

    //
    //
    //
    //
    //
    // TODO: CLEAN UP
    editingAssetIds,
    isAdvancedFiltersOpen,
    advancedFilterIds,
    isAssetAttributeManagerDialogOpen,
    openAdvancedFilterEditor,
  };
});
