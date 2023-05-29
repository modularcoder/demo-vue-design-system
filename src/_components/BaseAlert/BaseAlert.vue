<template>
  <div
    role="alert"
    class="twc-flex twc-flex-row twc-items-center twc-p-4 twc-rounded-md twc-border twc-border-1 BaseAlert"
    :class="[
      props.variant === 'info' && 'twc-bg-info-50 twc-border-info-200',
      props.variant === 'success' && 'twc-bg-success-50 twc-border-success-200',
      props.variant === 'warning' && 'twc-bg-warning-50 twc-border-warning-200',
      props.variant === 'danger' && 'twc-bg-red-50 twc-border-red-200',
    ]"
  >
    <!-- Icon -->
    <div
      v-if="$slots.icon"
      class="twc-flex twc-justify-center twc-mr-3 twc-w-6 twc-text-sm twc-text-center"
      :class="[
        props.variant === 'info' && 'twc-text-primary-600',
        props.variant === 'success' && 'twc-text-success-600',
        props.variant === 'warning' && 'twc-text-warning-600',
        props.variant === 'danger' && 'twc-text-danger-600',
        $slots.description ? 'twc-self-baseline' : '',
      ]"
    >
      <div class="twc-w-5 twc-h-5">
        <slot name="icon"></slot>
      </div>
    </div>
    <!-- Text -->
    <div class="twc-flex-auto">
      <slot name="titleBlock">
        <div
          class="twc-text-sm twc-font-medium twc-leading-5"
          :class="[
            props.variant === 'info' && 'twc-text-gray-900',
            props.variant === 'success' && 'twc-text-success-700',
            props.variant === 'warning' && 'twc-text-warning-700',
            props.variant === 'danger' && 'twc-text-red-700',
          ]"
        >
          <slot></slot>
        </div>
      </slot>
      <slot name="descriptionBlock">
        <p
          v-if="$slots.description"
          class="twc-mt-2 twc-leading-5 twc-text-gray-600"
        >
          <slot name="description"></slot>
        </p>
      </slot>
    </div>
    <!-- Action -->
    <div v-if="$slots.action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { BaseAlertProps } from './BaseAlertTypes'
  import { PropType } from 'vue'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseAlertProps['variant']>,
      default: '',
    },
  })
</script>

<style></style>
