<template>
  <div
    class="twc-inline-flex twc-items-center twc-py-0.5 twc-font-medium twc-rounded-full"
    :class="[
      paddingClassHorizontal,
      variant === BASE_BADGE_VARIANT.DEFAULT &&
        'twc-bg-gray-100 twc-text-gray-800',
      variant === BASE_BADGE_VARIANT.SUCCESS &&
        'twc-bg-success-100 twc-text-success-800',
      variant === BASE_BADGE_VARIANT.DANGER &&
        'twc-bg-danger-100 twc-text-danger-800',
      variant === BASE_BADGE_VARIANT.WARNING &&
        'twc-bg-warning-100 twc-text-warning-800',
      variant === BASE_BADGE_VARIANT.INFO &&
        'twc-bg-primary-100 twc-text-primary-800',
    ]"
  >
    <div
      :class="
        size === BASE_BADGE_SIZE.DEFAULT
          ? 'twc-text-xs twc-leading-4'
          : 'twc-text-sm twc-leading-5'
      "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import {
    BASE_BADGE_VARIANT,
    BASE_BADGE_SIZE,
    BaseBadgeProps,
  } from './BaseBadge.types'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseBadgeProps['variant']>,
      default: BASE_BADGE_VARIANT.DEFAULT,
    },
    size: {
      type: String as PropType<BaseBadgeProps['size']>,
      default: BASE_BADGE_SIZE.DEFAULT,
    },
  })

  const paddingClassHorizontal = computed(() => {
    if (props.size === BASE_BADGE_SIZE.LG) {
      return 'twc-px-3'
    }

    return 'twc-px-2.5'
  })
</script>

<style></style>
