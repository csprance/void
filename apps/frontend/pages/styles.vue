<script setup>
definePageMeta({
  layout: "empty",
});

const toggle1 = ref(true);
const toggle2 = ref(false);
const toggle3 = ref(false);
const toggleNumber0 = ref(0);
const toggleNumber1 = ref(1);
const toggleNumber2 = ref(2);
</script>

<template>
  <div class="px-12 pt-6 pb-24 space-y-8 overflow-auto grow">
    <ThemeToggle />

    <section>
      <h1 class="mb-4 text-3xl font-semibold text-primary">Checkbox</h1>
      <div class="flex gap-2">
        <input
          v-model="toggle1"
          type="checkbox"
          class="input-checkbox-filled-outlined size-6"
        />
        <input
          v-model="toggle2"
          type="checkbox"
          class="input-checkbox-filled-outlined size-6"
          checked
        />
        <input
          v-model="toggle3"
          type="checkbox"
          class="input-checkbox-filled-outlined size-6"
          indeterminate
        />
        <input
          v-model="toggle1"
          type="checkbox"
          class="input-checkbox-filled-outlined size-6"
          disabled
        />
        <input
          v-model="toggle2"
          type="checkbox"
          class="input-checkbox-filled-outlined size-6"
          disabled
        />
        <input
          v-model="toggle3"
          type="checkbox"
          class="input-checkbox-filled-outlined size-6"
          checked
          disabled
          indeterminate
        />
      </div>
    </section>
    <section>
      <h1 class="mb-4 text-3xl font-semibold text-primary">
        Checkbox - Custom Model Values
      </h1>
      <div class="flex gap-2">
        <MCheckbox
          v-model="toggleNumber0"
          class="input-checkbox-filled-outlined size-6"
          :true-value="1"
          :false-value="0"
          :indeterminate-value="2"
        />
        {{ toggleNumber0 }}
        <MCheckbox
          v-model="toggleNumber1"
          class="input-checkbox-filled-outlined size-6"
          :true-value="1"
          :false-value="0"
          :indeterminate-value="2"
        />
        {{ toggleNumber1 }}
        <MCheckbox
          v-model="toggleNumber2"
          class="input-checkbox-filled-outlined size-6"
          :true-value="1"
          :false-value="0"
          :indeterminate-value="2"
        />
        {{ toggleNumber2 }}
      </div>
    </section>

    <section>
      <h1 class="mb-4 text-3xl font-semibold text-primary">Text</h1>
      <div class="space-y-1">
        <p class="text-primary">Primary Text</p>
        <p class="text-secondary">Secondary Text</p>
        <p class="text-tertiary">Tertiary Text</p>
        <br />
        <p class="font-semibold text-primary">Primary Text</p>
        <p class="font-semibold text-secondary">Secondary Text</p>
        <p class="font-semibold text-tertiary">Tertiary Text</p>
      </div>
    </section>

    <hr class="divider" />
    <section>
      <h1 class="mb-4 text-3xl font-semibold text-primary">Text Links</h1>
      <div class="flex flex-col items-start justify-start gap-2">
        <a href="#" class="text-link-primary"> Primary Text Link </a>
        <a href="#" class="text-link-accent"> Accent Text Link </a>
        <a href="#" class="text-link-secondary"> Secondary Text Link </a>
      </div>
    </section>

    <section>
      <h1 class="mb-4 text-3xl font-semibold text-primary">Button</h1>
      <div class="space-y-4">
        <!-- Accent Filled -->
        <div class="flex gap-2">
          <button class="px-6 h-9 button-accent-filled">Accent Filled</button>
          <button class="pl-4 pr-6 h-9 button-accent-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Accent Filled Icon</span>
          </button>
          <button class="w-9 h-9 button-accent-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
          <button disabled class="px-6 h-9 button-accent-filled">
            Accent Filled Disabled
          </button>
          <button disabled class="pl-4 pr-6 h-9 button-accent-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Accent Filled Icon Disabled</span>
          </button>
          <button disabled class="w-9 h-9 button-accent-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
        </div>
        <!-- Accent Outlined -->
        <div class="flex gap-2">
          <button class="px-6 h-9 button-accent-outlined">
            Accent Outlined
          </button>
          <button class="pl-4 pr-6 h-9 button-accent-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Accent Outlined Icon</span>
          </button>
          <button class="w-9 h-9 button-accent-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
          <button disabled class="px-6 h-9 button-accent-outlined">
            Accent Outlined Disabled
          </button>
          <button disabled class="pl-4 pr-6 h-9 button-accent-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Accent Outlined Icon Disabled</span>
          </button>
          <button disabled class="w-9 h-9 button-accent-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
        </div>
        <!-- Primary Filled -->
        <div class="flex gap-2">
          <button class="px-6 h-9 button-primary-filled">Primary Filled</button>
          <button class="pl-4 pr-6 h-9 button-primary-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Primary Filled Icon</span>
          </button>
          <button class="w-9 h-9 button-primary-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
          <button disabled class="px-6 h-9 button-primary-filled">
            Primary Filled Disabled
          </button>
          <button disabled class="pl-4 pr-6 h-9 button-primary-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Primary Filled Icon Disabled</span>
          </button>
          <button disabled class="w-9 h-9 button-primary-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
        </div>
        <!-- Primary Outlined -->
        <div class="flex gap-2">
          <button class="px-6 h-9 button-primary-outlined">
            Primary Outlined
          </button>
          <button class="pl-4 pr-6 h-9 button-primary-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Primary Outlined Icon</span>
          </button>
          <button class="w-9 h-9 button-primary-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
          <button disabled class="px-6 h-9 button-primary-outlined">
            Primary Outlined Disabled
          </button>
          <button disabled class="pl-4 pr-6 h-9 button-primary-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Primary Outlined Icon Disabled</span>
          </button>
          <button disabled class="w-9 h-9 button-primary-outlined">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
        </div>
        <!-- Primary Flat -->
        <div class="flex gap-2">
          <button class="px-6 h-9 button-primary-flat">Primary Flat</button>
          <button class="pl-4 pr-6 h-9 button-primary-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Primary Flat Icon</span>
          </button>
          <button class="w-9 h-9 button-primary-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
          <button disabled class="px-6 h-9 button-primary-flat">
            Primary Flat
          </button>
          <button disabled class="pl-4 pr-6 h-9 button-primary-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Primary Flat Icon</span>
          </button>
          <button disabled class="w-9 h-9 button-primary-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
        </div>
        <!-- Warning Flat -->
        <div class="flex gap-2">
          <button class="px-6 h-9 button-warning-flat">Warning Flat</button>
          <button class="pl-4 pr-6 h-9 button-warning-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Warning Flat Icon</span>
          </button>
          <button class="w-9 h-9 button-warning-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
          <button disabled class="px-6 h-9 button-warning-flat">
            Warning Flat
          </button>
          <button disabled class="pl-4 pr-6 h-9 button-warning-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Warning Flat Icon</span>
          </button>
          <button disabled class="w-9 h-9 button-warning-flat">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
        </div>
        <!-- Warning Filled -->
        <div class="flex gap-2">
          <button class="px-6 h-9 button-warning-filled">Warning Flat</button>
          <button class="pl-4 pr-6 h-9 button-warning-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Warning Flat Icon</span>
          </button>
          <button class="w-9 h-9 button-warning-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
          <button disabled class="px-6 h-9 button-warning-filled">
            Warning Flat
          </button>
          <button disabled class="pl-4 pr-6 h-9 button-warning-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
            <span>Warning Flat Icon</span>
          </button>
          <button disabled class="w-9 h-9 button-warning-filled">
            <IconEdit class="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>

    <section>
      <h1 class="mb-4 text-3xl font-semibold text-primary">Input</h1>
      <div class="space-y-4">
        <!-- Pimary Filled -->
        <div class="flex gap-2">
          <input
            type="text"
            class="px-4 h-9 input-primary-filled"
            value="Primary Filled"
            placeholder="Placeholder text"
          />
          <input
            type="text"
            class="px-4 input-primary-filled h-9"
            placeholder="Placeholder text"
          />
          <input
            disabled
            type="text"
            class="px-4 input-primary-filled h-9"
            value="Primary Filled Disabled"
            placeholder="Placeholder text"
          />
        </div>
        <div class="flex gap-2">
          <textarea rows="3" class="px-4 py-2 input-primary-filled">
Primary Filled...</textarea
          >
          <textarea
            rows="3"
            class="px-4 py-2 input-primary-filled"
            placeholder="Placeholder text"
          />
          <textarea rows="3" disabled class="px-4 py-2 input-primary-filled">
Primary Filled Disabled...</textarea
          >
        </div>
        <!-- Primary Outlined -->
        <div class="flex gap-2">
          <input
            type="text"
            class="px-4 h-9 input-primary-outlined"
            value="Primary Outlined"
          />
          <input
            type="text"
            class="px-4 h-9 input-primary-outlined"
            placeholder="Placeholder text"
          />
          <input
            disabled
            type="text"
            class="px-4 h-9 input-primary-outlined"
            value="Primary Outlined Disabled"
          />
        </div>
        <div class="flex gap-2">
          <textarea rows="3" class="px-4 py-2 input-primary-outlined">
Primary Outlined...</textarea
          >
          <textarea
            rows="3"
            class="px-4 py-2 input-primary-outlined"
            placeholder="Placeholder text"
          />
          <textarea rows="3" disabled class="px-4 py-2 input-primary-outlined">
Primary Outlined Disabled...</textarea
          >
        </div>
        <!-- Primary Filled Outlined -->
        <div class="flex gap-2">
          <input
            type="text"
            class="px-4 h-9 input-primary-filled-outlined"
            value="Primary Filled Outlined"
          />
          <input
            type="text"
            class="px-4 h-9 input-primary-filled-outlined"
            placeholder="Placeholder text"
          />
          <input
            disabled
            type="text"
            class="px-4 h-9 input-primary-filled-outlined"
            value="Primary Filled Outlined Disabled"
          />
        </div>
        <div class="flex gap-2">
          <textarea rows="3" class="px-4 py-2 input-primary-filled-outlined">
Primary Filled Outlined...</textarea
          >
          <textarea
            rows="3"
            class="px-4 py-2 input-primary-filled-outlined"
            placeholder="Placeholder text"
          />
          <textarea
            rows="3"
            disabled
            class="px-4 py-2 input-primary-filled-outlined"
          >
Primary Filled Outlined Disabled...</textarea
          >
        </div>
        <!-- Examples -->
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <IconSearch class="w-6 h-6 text-secondary" aria-hidden="true" />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            class="block pl-12 leading-9 rounded-full input-primary-filled h-9"
            placeholder="you@example.com"
          />
        </div>
      </div>
    </section>
  </div>
</template>
