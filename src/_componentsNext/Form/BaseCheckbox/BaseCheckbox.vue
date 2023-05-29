<template>
  <label
    class="twc-flex BaseCheckbox"
    :class="[disabled && 'twc-opacity-60', !disabled && 'twc-cursor-pointer']"
  >
    <input
      v-bind="$attrs"
      type="checkbox"
      class="twc-mt-0.5 twc-w-4 twc-h-4 twc-rounded twc-form-checkbox"
      :class="[checkboxClass, !disabled && 'twc-cursor-pointer']"
      :value="nativeValue"
      :checked="isChecked"
      :disabled="disabled"
      @input="handleUpdate"
    />
    <span v-if="$slots.default" class="twc-pl-2">
      <slot />
    </span>
    <BaseTooltip v-if="required" label="Required field">
      <span class="twc-px-1 twc-text-danger-600 twc-cursor-default">*</span>
    </BaseTooltip>
  </label>
</template>
<script lang="ts">
  // disabling the default attributes inheritance so the attributes are not duplicated on the parent div and the input
  export default {
    inheritAttrs: false,
  }
</script>

<script setup lang="ts">
  import { Ref, PropType, inject, toRefs } from 'vue'
  import BaseTooltip from '../../BaseTooltip/BaseTooltip.vue'
  import {
    BASE_CHECKBOX_VARIANT,
    BaseCheckboxProps,
  } from './BaseCheckbox.types'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseCheckboxProps['variant']>,
      default: BASE_CHECKBOX_VARIANT.DEFAULT,
    },
    modelValue: {
      type: [Array, Boolean] as PropType<BaseCheckboxProps['modelValue']>,
      default: undefined,
    },
    nativeValue: {
      type: [Boolean, String, Object] as PropType<
        BaseCheckboxProps['nativeValue']
      >,
      default: 'off',
    },
    disabled: {
      type: Boolean as PropType<BaseCheckboxProps['disabled']>,
      default: false,
    },
    required: {
      type: Boolean as PropType<BaseCheckboxProps['required']>,
      default: false,
    },
  })

  const emit = defineEmits<{
    (e: 'update:modelValue', value: BaseCheckboxProps['modelValue']): void
  }>()

  const { variant } = toRefs(props)

  const computedVariant = $computed(
    () =>
      inject<Ref>('fieldVariant')?.value ||
      variant?.value ||
      BASE_CHECKBOX_VARIANT.DEFAULT,
  )

  const isChecked = $computed(() => {
    if (Array.isArray(props.modelValue)) {
      // Deep comparison for object items
      if (typeof props.nativeValue === 'object') {
        return props.modelValue
          .map((item) => JSON.stringify(item))
          .includes(JSON.stringify(props.nativeValue))
      }

      // Default comparison for primitive values
      return props.modelValue.includes(props.nativeValue)
    }

    return props.modelValue
  })

  const checkboxClass = $computed(() => {
    // Default
    if (computedVariant === BASE_CHECKBOX_VARIANT.DEFAULT) {
      return `
        twc-border-gray-300
        hover:enabled:twc-border-gray-400
        focus:enabled:twc-ring-primary-600

        enabled:checked:twc-text-primary-600
        enabled:checked:twc-border-primary-600
        enabled:checked:hover:twc-text-primary-700
        enabled:checked:hover:twc-border-primary-700

        disabled:checked:twc-bg-gray-400
        disabled:checked:twc-border-gray-400
        disabled:twc-pointer-events-none
      `
    }
    // Danger
    else if (computedVariant === BASE_CHECKBOX_VARIANT.DANGER) {
      return `
        twc-border-red-300
        hover:enabled:twc-border-red-400
        focus:enabled:twc-ring-red-600

        enabled:checked:twc-text-red-600
        enabled:checked:twc-border-red-600
        enabled:checked:hover:twc-text-red-700
        enabled:checked:hover:twc-border-red-700

        disabled:checked:twc-bg-red-400
        disabled:checked:twc-border-red-400
        disabled:twc-pointer-events-none
      `
    }
  })

  const handleUpdate = (e: Event) => {
    // Current checkbox state
    const isChecked = (e.target as HTMLInputElement).checked
    const isArray = Array.isArray(props.modelValue)

    // Toggle array value
    if (isArray) {
      // Remove the value first to avoid of duplicates
      let newValue = props.modelValue.filter((item) => {
        if (typeof item === 'object' && typeof props.nativeValue === 'object') {
          return JSON.stringify(item) !== JSON.stringify(props.nativeValue)
        }

        return item !== props.nativeValue
      })

      if (isChecked) {
        newValue.push(props.nativeValue)
      }

      emit('update:modelValue', newValue)
    }
    // Emit boolean
    else {
      emit('update:modelValue', isChecked)
    }
  }
</script>
