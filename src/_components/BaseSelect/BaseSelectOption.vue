<template>
  <ListboxOption v-slot="{ active, selected, disabled }" as="template">
    <li
      :class="[
        active ? 'twc-text-white twc-bg-primary-600' : 'twc-text-gray-900',
        'twc-cursor-pointer twc-select-none twc-relative twc-py-2 twc-pl-3 twc-pr-9',
        selected ? 'twc-font-semibold' : 'twc-font-normal',
      ]"
    >
      <slot v-bind="{ active, selected, disabled }"></slot>
      <span
        v-if="selected"
        :class="[
          active ? 'twc-text-white' : 'twc-text-primary-600',
          'twc-absolute twc-inset-y-0 twc-right-0 twc-flex twc-items-center twc-pr-4',
        ]"
      >
        <CheckIcon class="twc-w-5 twc-h-5" aria-hidden="true" />
      </span>
    </li>
  </ListboxOption>
</template>

<script lang="ts" setup>
  import { ListboxOption } from '@headlessui/vue'
  import { CheckIcon } from '@heroicons/vue/solid'
</script>
