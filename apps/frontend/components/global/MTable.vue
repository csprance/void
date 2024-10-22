<!--
Table:
    filter: (string)
        - used to filter rows in the table
    initialSortedColumn: (string)
        - uses column by name to determine sorting
    initialSortedReversed: (bool)
        - reverses the sort order
    columns: (object array)
        - defines columns displayed in table
    rows: (object array)
        - defines rows displayed in table
    selection: (string)
        - selection type
        - Default value
            none
        - Accepted values
            single, multiple, none
    selected: (object array)
        - v-model:selected="selection"
    tableClass: classes for <table>
    theadClass: classes for <thead>
    tbodyClass: classes for <tbody>

Columns:
    name: (string)
        - identifies unique column id
    label: (string)
        - what's displayed in ui
    field: (string)
        - row's object property displayed in table, supports nested properties
        - Examples:
            'name'
            'user.name'
    format: (function) [optional]
        - you can format the data with a function
        - Examples:
            (val, row) => `${val}% ${row.user.name}`
            (val) => `${val}%}`
    sortable: (boolean)
        - allows column to be sortable
    sort: (function) [optional]
        - compare function if you have
        some custom data or want a specific way to compare two rows
        note that rows with null/undefined as value will get auto sorted
        - without calling this method (if you want to handle those as well, use "rawSort" instead)

        (a, b, rowA, rowB) => parseInt(a, 10) - parseInt(b, 10)

        function return value:
            * is less than 0 then sort a to an index lower than b, i.e. a comes first
            * is 0 then leave a and b unchanged with respect to each other, but sorted with respect to all different elements
            * is greater than 0 then sort b to an index lower than a, i.e. b comes first
    tdClass: string
        - classes assigned to all td elements
    thClass: string
        - classes assigned to the th elements

Slots:
    body-cell-[name]
        props:
            row: row object
            column: column object
            value: parsed/formatted value

    header-cell-[name]
        props:
            column: column object
-->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rows: any[];
    columns: any[];
    initialSortedColumn?: string | null;
    initialSortedReversed?: boolean;
    filter?: string;
    selection?: string;
    selected?: string[];
    tableClass?: string;
    theadClass?: string;
    tbodyClass?: string;
  }>(),
  {
    rows: [],
    columns: [],
    initialSortedColumn: null,
    initialSortedReversed: false,
    filter: "",
    selection: "none",
    selected: [],
    tableClass: "",
    theadClass: "",
    tbodyClass: "",
  } as any,
);

// emits
const emits = defineEmits(["update:selected"]);

// Internal state as fallback
const sortedColumn = ref(props.initialSortedColumn);
const sortedReversed = ref(props.initialSortedReversed);

// Use a local copy that syncs with the external v-model
const selectedRows = ref(props.selected);

// Watch for external changes
watch(
  () => props.selected,
  (newValue) => {
    selectedRows.value = newValue;
  },
);

// Watch for internal changes and emit update
watch(selectedRows, (newValue) => {
  emits("update:selected", newValue);
});

// Watchers to react to prop changes
watch(
  () => props.initialSortedColumn,
  (newValue) => {
    sortedColumn.value = newValue;
  },
);

watch(
  () => props.initialSortedReversed,
  (newValue) => {
    sortedReversed.value = newValue;
  },
);

function getNestedProperty(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

function formatData(row, column) {
  const value = getNestedProperty(row, column.field);
  return column.format ? column.format(value, row) : value;
}

function sort(column) {
  if (sortedColumn.value === column.name) {
    sortedReversed.value = !sortedReversed.value; // reverse direction if same column
  } else {
    sortedColumn.value = column.name;
    sortedReversed.value = false;
  }
}

const filteredSortedRows = computed(() => {
  let filteredRows = [...props.rows];

  // Filtering logic
  if (props.filter) {
    const filterLower = props.filter.toLowerCase();
    filteredRows = filteredRows.filter((row) => {
      return props.columns.some((column) => {
        // const cellValue = getNestedProperty(row, column.field);
        const formattedCellValue = formatData(row, column);
        return String(formattedCellValue).toLowerCase().includes(filterLower);
      });
    });
  }

  // Sorting logic
  if (sortedColumn.value) {
    const column = props.columns.find((obj) => obj.name === sortedColumn.value);
    if (!column) {
      return filteredRows;
    }

    return filteredRows.sort((a, b) => {
      // let valA = getNestedProperty(a, column.field);
      // let valB = getNestedProperty(b, column.field);
      let valA = formatData(a, column);
      let valB = formatData(b, column);

      if (column.sort) {
        return sortedReversed.value
          ? column.sort(valB, valA)
          : column.sort(valA, valB);
      }

      // regular string comparison
      valA = String(valA != null ? valA : "");
      valB = String(valB != null ? valB : "");

      return sortedReversed.value
        ? valB.localeCompare(valA)
        : valA.localeCompare(valB);
    });
  }

  return filteredRows;
});

// If multiselection is enabled show header checkbox
// const overallSelectionState = ref(false);
const overallSelectionState = computed(() => {
  if (props.rows.length === 0) {
    return false;
  }
  if (
    selectedRows.value.length >= 1 &&
    selectedRows.value.length === props.rows.length
  ) {
    return true;
  }
  return false;
});

const isTristate = computed(() => {
  if (selectedRows.value.length >= 1) {
    if (selectedRows.value.length !== props.rows.length) {
      return true;
    }
  }
  return false;
});

// Toggle all rows selection
function toggleAllSelection(event) {
  if (event.target.checked) {
    selectedRows.value = [...filteredSortedRows.value];
  } else {
    selectedRows.value = [];
  }
}

// Update single selection
function updateSingleSelection(selectedRow) {
  // row is native already selected before we do this check
  const isSelected = selectedRows.value.includes(selectedRow);
  selectedRows.value = isSelected ? [selectedRow] : [];
}
</script>
<template>
  <div>
    <table class="w-full" :class="tableClass">
      <thead :class="theadClass">
        <tr>
          <!-- Selection Column -->
          <th v-if="selection !== 'none'" class="leading-[0px] pr-2">
            <input
              v-if="selection === 'multiple'"
              type="checkbox"
              class="w-5 h-5 input-checkbox-filled-outlined"
              :checked="overallSelectionState"
              :indeterminate="isTristate"
              @change="toggleAllSelection"
            />
          </th>

          <!-- Header Columns -->
          <th
            v-for="column in columns"
            :key="column.name"
            class="group"
            :class="[{ 'cursor-pointer': column.sortable }, column.thClass]"
            @click="column.sortable && sort(column)"
          >
            <!-- Flex container for label and indicator -->
            <div class="flex items-center">
              <span class="whitespace-normal">{{ column.label }}</span>
              <!-- <span class="inline-flex">{{ column.label }}</span> -->

              <!-- Indicator -->
              <div
                class="inline-flex px-1 align-middle transition-transform"
                :class="{
                  'rotate-180': sortedReversed,
                  'group-hover:visible group-hover:opacity-50':
                    column.sortable && sortedColumn !== column.name,
                  invisible: !column.sortable || sortedColumn !== column.name,
                }"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </th>
        </tr>
      </thead>

      <!-- Rows -->
      <tbody :class="tbodyClass">
        <tr v-for="row in filteredSortedRows" :key="row.id">
          <!-- Selection Checkbox -->
          <td
            v-if="selection !== 'none'"
            class="leading-[0px] text-center pr-2"
          >
            <input
              v-if="selection === 'multiple'"
              v-model="selectedRows"
              type="checkbox"
              :value="row"
              class="w-5 h-5 input-checkbox-filled-outlined"
            />
            <input
              v-if="selection === 'single'"
              v-model="selectedRows"
              type="checkbox"
              :value="row"
              class="w-5 h-5 input-checkbox-filled-outlined"
              @change="updateSingleSelection(row)"
            />
          </td>
          <!-- Data Columns -->
          <td
            v-for="column in columns"
            :key="column.name"
            class="leading-[0px]"
            :class="column.tdClass"
          >
            <slot
              :key="column.name"
              :name="'body-cell-' + column.name"
              :row="row"
              :value="formatData(row, column)"
              :column="column"
            >
              {{ formatData(row, column) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- No Data -->
    <slot v-if="filteredSortedRows.length === 0" name="no-data">
      <div
        class="flex items-center justify-center w-full space-x-2 opacity-50 flex-nowrap"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <span>No data available</span>
      </div>
    </slot>
  </div>
</template>
