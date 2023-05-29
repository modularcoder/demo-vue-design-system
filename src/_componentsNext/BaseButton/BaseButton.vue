<template>
  <component
    v-bind="{ ...$props, ...$attrs }"
    :is="computedTag"
    :to="to"
    :disabled="disabled"
    class="twc-font-medium twc-text-gray-700 twc-border focus:twc-outline-none BaseButton"
    :class="[
      // Sizes
      size === BASE_BUTTON_SIZE.XS &&
        'twc-px-2.5 twc-py-1.5 twc-text-xs twc-leading-4 twc-rounded',
      size === BASE_BUTTON_SIZE.SM &&
        'twc-px-3 twc-py-2 twc-text-sm twc-leading-5 twc-rounded-md',
      size === BASE_BUTTON_SIZE.DEFAULT &&
        'twc-px-4 twc-py-2 twc-text-sm twc-leading-5 twc-rounded-md',
      size === BASE_BUTTON_SIZE.LG &&
        'twc-px-4 twc-py-2 twc-text-base twc-leading-6 twc-rounded-md',
      size === BASE_BUTTON_SIZE.XL &&
        'twc-px-6 twc-py-3 twc-text-base twc-leading-6 twc-rounded-md',
      // Variants
      variant === BASE_BUTTON_VARIANT.DEFAULT &&
        'twc-border-gray-300 twc-rounded-md twc-text-gray-700 twc-bg-white hover:twc-bg-gray-50 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-primary-500',
      variant === BASE_BUTTON_VARIANT.PRIMARY &&
        'twc-border-transparent twc-rounded-md twc-text-white twc-bg-primary-600 hover:twc-bg-primary-700 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-primary-500',
      variant === BASE_BUTTON_VARIANT.PRIMARY_LINK &&
        'twc-border-transparent twc-rounded-md twc-text-primary-500  twc-bg-transparent focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-primary-500  hover:twc-bg-primary-50 hover:twc-text-primary-700',
      variant === BASE_BUTTON_VARIANT.DANGER &&
        'twc-border-transparent twc-rounded-md twc-text-white twc-bg-danger-600 hover:twc-bg-danger-700 focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-danger-600',
      variant === BASE_BUTTON_VARIANT.DANGER_LINK &&
        'twc-border-transparent twc-rounded-md twc-text-danger-600 twc-bg-transparent  focus:twc-outline-none focus:twc-ring-2 focus:twc-ring-offset-2 focus:twc-ring-danger-600  hover:twc-bg-danger-50 hover:twc-text-danger-700',

      // Disabled
      disabled && 'twc-opacity-50 twc-pointer-events-none',
    ]"
    role="button"
  >
    <span
      class="twc-flex twc-flex-nowrap twc-justify-center twc-items-center twc-mx-auto"
      :class="[
        (size === BASE_BUTTON_SIZE.XS || size === BASE_BUTTON_SIZE.SM) &&
          'twc-space-x-2',
        (size === BASE_BUTTON_SIZE.DEFAULT ||
          size === BASE_BUTTON_SIZE.LG ||
          size === BASE_BUTTON_SIZE.XL) &&
          'twc-space-x-3',
      ]"
    >
      <component
        :is="iconLeading"
        v-if="iconLeading"
        :class="iconClasses"
      ></component>
      <span class="twc-whitespace-nowrap"><slot></slot></span>
      <component
        :is="iconTrailing"
        v-if="iconTrailing"
        :class="iconClasses"
      ></component>
    </span>
  </component>
</template>

<script lang="ts">
  export default {
    name: 'BaseButton',
  }
</script>

<script setup lang="ts">
  import { PropType } from 'vue'
  import {
    BASE_BUTTON_VARIANT,
    BASE_BUTTON_SIZE,
    BASE_BUTTON_TAG,
    BaseButtonProps,
  } from './BaseButton.types'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseButtonProps['variant']>,
      default: BASE_BUTTON_VARIANT.DEFAULT,
    },
    size: {
      type: String as PropType<BaseButtonProps['size']>,
      default: BASE_BUTTON_SIZE.DEFAULT,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String as PropType<BaseButtonProps['tag']>,
      default: BASE_BUTTON_TAG.BUTTON,
    },
    href: {
      type: String as PropType<BaseButtonProps['href']>,
      default: undefined,
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    iconLeading: {
      type: Function as PropType<BaseButtonProps['iconLeading']>,
      default: undefined,
    },
    iconTrailing: {
      type: Function as PropType<BaseButtonProps['iconTrailing']>,
      default: undefined,
    },
  })

  const computedTag = $computed(() => {
    if (typeof props.disabled !== 'undefined' && props.disabled !== false) {
      return 'button'
    }
    return props.tag
  })

  const iconClasses = $computed(() => {
    const classes = ['']

    if (
      props.size === BASE_BUTTON_SIZE.XS ||
      props.size === BASE_BUTTON_SIZE.SM
    ) {
      classes.push('twc-w-4 twc-w-4')
    } else {
      classes.push('twc-w-5 twc-w-5')
    }

    if (props.variant === BASE_BUTTON_VARIANT.DEFAULT) {
      classes.push('twc-text-gray-500')
    } else if (props.variant === BASE_BUTTON_VARIANT.PRIMARY_LINK) {
      classes.push('twc-text-primary-500')
    } else if (props.variant === BASE_BUTTON_VARIANT.DANGER_LINK) {
      classes.push('twc-text-danger-500')
    }

    return classes
  })
</script>

<style>
  .BaseButton {
  }
</style>
