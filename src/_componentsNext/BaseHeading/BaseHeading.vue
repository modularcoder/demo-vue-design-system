<template>
  <component
    :is="type"
    :class="[
      type === BASE_HEADING_TYPE.H1 &&
        'twc-text-2xl twc-leading-8 md:twc-text-3xl md:twc-leading-9',
      type === BASE_HEADING_TYPE.H2 &&
        'twc-text-xl twc-leading-7 md:twc-text-2xl md:twc-leading-8',
      type === BASE_HEADING_TYPE.H3 &&
        'twc-text-lg twc-leading-7 md:twc-text-xl md:twc-leading-7',
      type === BASE_HEADING_TYPE.H4 &&
        'twc-text-base twc-leading-6 md:twc-text-lg md:twc-leading-7',
      type === BASE_HEADING_TYPE.H5 &&
        'twc-text-sm twc-leading-5 md:twc-text-base md:twc-leading-6',
      type === BASE_HEADING_TYPE.H6 && 'twc-text-sm twc-leading-5',
    ]"
    class="twc-font-medium BaseHeading"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { BASE_HEADING_TYPE, BaseHeadingProps } from './BaseHeading.types'

  defineProps({
    type: {
      type: String as PropType<BaseHeadingProps['type']>,
      required: true,
      default: undefined,
    },
  })
</script>
