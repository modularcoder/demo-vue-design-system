<template>
  <div>
    <p
      v-if="heading"
      class="twc-py-2 twc-px-4 twc-text-xs twc-font-medium twc-tracking-wider twc-text-gray-500 twc-uppercase twc-opacity-80"
    >
      {{ heading }}
    </p>
    <slot />
  </div>
</template>
<script lang="ts">
  export default {
    name: 'BaseMenuSection',
  }
</script>
<script setup lang="ts">
  import { PropType } from 'vue'
  import { BaseMenuSectionProps } from './BaseMenuSection.types'

  defineProps({
    heading: {
      type: String as PropType<BaseMenuSectionProps['heading']>,
      default: '',
    },
  })
</script>
