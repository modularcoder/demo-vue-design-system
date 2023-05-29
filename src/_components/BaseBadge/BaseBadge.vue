<template>
  <div
    data-test-id="badge-base"
    :class="[
      'twc-inline-flex twc-items-center twc-font-medium twc-py-0.5',
      paddingClassHorizontal,
      variant === 'default' && 'twc-bg-gray-100 twc-text-gray-800',
      variant === 'success' && 'twc-bg-success-100 twc-text-success-800',
      variant === 'danger' && 'twc-bg-danger-100 twc-text-danger-800',
      variant === 'warning' && 'twc-bg-warning-100 twc-text-warning-800',
      variant === 'primary' && 'twc-bg-primary-100 twc-text-primary-800',
      size === 'small' ? 'twc-text-xs' : 'twc-text-sm',
      rounded ? 'twc-rounded-full' : 'twc-rounded-md',
    ]"
  >
    <div
      v-if="dot"
      data-test-id="badge-dot"
      :class="[
        'twc-h-2 twc-w-2 twc-rounded-full twc-mr-2',
        variant === 'default' && 'twc-bg-gray-400',
        variant === 'success' && 'twc-bg-success-400',
        variant === 'danger' && 'twc-bg-danger-400',
        variant === 'warning' && 'twc-bg-warning-400',
        variant === 'primary' && 'twc-bg-primary-400',
      ]"
    />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { PropType, computed } from 'vue'
  import type { BaseBadgeProps } from './BaseBadgeTypes'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseBadgeProps['variant']>,
      default: () => 'default',
    },
    size: {
      type: String as PropType<BaseBadgeProps['size']>,
      default: () => 'large',
    },
    dot: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  })

  const paddingClassHorizontal = computed(() => {
    if (props.rounded) {
      if (props.size === 'small') {
        return 'twc-px-2.5'
      } else {
        return 'twc-px-3'
      }
    } else {
      if (props.size === 'small') {
        return 'twc-px-2'
      } else {
        return 'twc-px-2.5'
      }
    }
  })
</script>

<style></style>
