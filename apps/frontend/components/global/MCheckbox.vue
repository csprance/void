<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  modelValue: any;
  disabled?: boolean;
  trueValue?: any;
  falseValue?: any;
  indeterminateValue?: any;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  disabled: false,
  falseValue: false,
  trueValue: true,
  indeterminateValue: null,
});

const emits = defineEmits(["update:modelValue"]);

const checked = ref(props.modelValue);
const focused = ref(false);

const toggleCheckbox = () => {
  if (!props.disabled) {
    if (
      checked.value === props.trueValue ||
      checked.value === props.indeterminateValue
    ) {
      // If currently true or indeterminate, set to false value
      checked.value = props.falseValue;
    } else {
      // In all other cases, set to true value
      checked.value = props.trueValue;
    }

    // Emit the new value
    emits("update:modelValue", checked.value);
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    checked.value = newValue;
  },
);
</script>

<template>
  <input
    type="checkbox"
    :class="$attrs.class"
    :checked="checked === props.trueValue"
    :disabled="disabled"
    :indeterminate="checked === props.indeterminateValue"
    @change="toggleCheckbox"
    @focus="focused = true"
    @blur="focused = false"
  />
</template>
