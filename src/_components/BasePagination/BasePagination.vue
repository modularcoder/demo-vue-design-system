<template>
  <nav
    class="twc-flex twc-justify-between twc-items-center twc-p-3 twc-w-full sm:twc-px-6 sm:twc-rounded-b-lg"
    aria-label="Pagination"
  >
    <div class="twc-hidden twc-text-sm twc-text-gray-700 sm:twc-block">
      <slot />
    </div>
    <div
      class="twc-flex twc-flex-1 twc-justify-between twc-items-center sm:twc-justify-end"
    >
      <BaseButton
        tag="a"
        class="!twc-p-2 twc-min-w-0 !twc-rounded-r-none"
        size="xs"
        :disabled="!hasPrev"
        @click="$emit('change', 'prev', $event)"
      >
        <ChevronLeftIcon
          class="twc-w-5 twc-h-5 twc-text-gray-500"
        ></ChevronLeftIcon>
      </BaseButton>
      <div class="twc-block twc-text-sm twc-text-gray-700 sm:twc-hidden">
        <slot />
      </div>
      <BaseButton
        tag="a"
        class="!twc-p-2 twc-min-w-0 !twc-rounded-l-none"
        size="xs"
        :disabled="!hasNext"
        @click="$emit('change', 'next', $event)"
      >
        <ChevronRightIcon
          class="twc-w-5 twc-h-5 twc-text-gray-500"
        ></ChevronRightIcon>
      </BaseButton>
    </div>
  </nav>
</template>
<script setup lang="ts">
  import BaseButton from '../BaseButton/BaseButton.vue'
  import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'

  defineEmits<{
    (e: 'change', value: 'next' | 'prev', event: Event): void
  }>()

  defineProps({
    hasNext: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    hasPrev: {
      type: Boolean,
      required: false,
      default: () => true,
    },
  })
</script>
