<template>
  <component
    v-bind="{ ...$props, ...$attrs }"
    :is="computedTag"
    :disabled="computedDisabled"
    :class="rootClasses"
    role="button"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
  export default {
    name: 'BaseButton',
  }
</script>

<script setup lang="ts">
  import { PropType } from 'vue'
  import type { BaseButtonProps } from './BaseButtonTypes'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseButtonProps['variant']>,
      default: () => 'default',
    },
    size: {
      type: String as PropType<BaseButtonProps['size']>,
      default: () => 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String as PropType<BaseButtonProps['tag']>,
      default: 'button',
    },
    href: {
      type: String as PropType<BaseButtonProps['href']>,
      default: undefined,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
  })

  const rootClasses = $computed(() => {
    return [
      'BaseButton o-btn p-btn',
      `o-btn--${props.variant}`,
      `p-btn--size-${props.size}`,
      props.inverted ? `o-btn--inverted o-btn--inverted-${props.variant}` : '',
      props.disabled ? `o-btn--disabled` : '',
    ]
  })

  const computedTag = $computed(() => {
    if (typeof props.disabled !== 'undefined' && props.disabled !== false) {
      return 'button'
    }
    return props.tag
  })

  const computedDisabled = $computed(() => {
    if (props.disabled) return true
    return null
  })
</script>

<style>
  .BaseButton {
    min-width: 100px;
    text-align: center;
    justify-content: center;
    @apply twc-inline-flex twc-items-center twc-border twc-border-gray-300  twc-font-medium twc-text-gray-700 twc-bg-white hover:twc-bg-gray-50 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-primary-500;

    /* Size modifier */
    &.p-btn--size-xs {
      border-radius: 4px;
      padding: 7px 11px;
      @apply twc-text-xs twc-leading-4 twc-rounded-md;
    }

    &.p-btn--size-sm {
      padding: 9px 13px;
      @apply twc-text-sm twc-leading-5 twc-rounded-md;
    }

    &.p-btn--size-default {
      padding: 9px 17px;
      @apply twc-text-sm twc-leading-5 twc-rounded-md;
    }

    &.p-btn--size-lg {
      padding: 9px 17px;
      @apply twc-text-base twc-leading-6 twc-rounded-md;
    }

    &.p-btn--size-xl {
      padding: 13px 25px;
      @apply twc-text-base twc-leading-6 twc-rounded-md;
    }

    /* Variant modifiers */
    &.o-btn--default {
      @apply twc-border-gray-300 twc-rounded-md twc-text-gray-700 twc-bg-white hover:twc-bg-gray-50 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-primary-500;

      &.o-btn--inverted-default {
        @apply twc-text-gray-700 twc-bg-transparent hover:twc-bg-gray-50 twc-border-transparent hover:twc-text-gray-800;
      }
    }

    &.o-btn--primary,
    &.o-btn--info {
      @apply twc-border-transparent twc-rounded-md twc-text-white twc-bg-primary-600 hover:twc-bg-primary-700 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-primary-500;

      &.o-btn--inverted-primary,
      &.o-btn--inverted-info {
        @apply twc-text-primary-500 twc-bg-transparent hover:twc-bg-primary-50 hover:twc-text-primary-700;
      }
    }

    &.o-btn--danger {
      @apply twc-border-transparent twc-rounded-md twc-text-white twc-bg-danger-600 hover:twc-bg-danger-700 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-danger-600;

      &.o-btn--inverted-danger {
        @apply twc-text-danger-600 twc-bg-transparent hover:twc-bg-danger-50 hover:twc-text-danger-700;
      }
    }

    &.o-btn--warning {
      @apply twc-border-transparent twc-rounded-md twc-text-white twc-bg-warning-600 hover:twc-bg-warning-700 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-warning-600;

      &.o-btn--inverted-warning {
        @apply twc-text-warning-600 twc-bg-transparent hover:twc-bg-warning-50 hover:twc-text-warning-700;
      }
    }

    &.o-btn--success {
      @apply twc-border-transparent twc-rounded-md twc-text-white twc-bg-success-600 hover:twc-bg-success-700 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-success-600;

      &.o-btn--inverted-success {
        @apply twc-text-success-600 twc-bg-transparent hover:twc-bg-success-50 hover:twc-text-success-700;
      }
    }

    &.o-btn--disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
</style>
