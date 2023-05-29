<template>
  <div class="twc-py-4 sm:twc-grid sm:twc-grid-cols-3 sm:twc-gap-4 sm:twc-py-5">
    <dt class="twc-text-sm twc-font-medium twc-text-gray-500">
      <slot name="label">{{ label }}</slot>
    </dt>
    <dd
      class="twc-flex twc-mt-1 twc-text-sm twc-text-gray-900 sm:twc-col-span-2 sm:twc-mt-0"
    >
      <slot></slot>
    </dd>
  </div>
</template>
<script lang="ts" setup>
  defineProps({
    label: { type: String, default: '' },
  })
</script>
