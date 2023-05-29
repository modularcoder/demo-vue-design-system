<template>
  <label
    class="twc-flex BaseCheckbox"
    :class="[disabled && 'twc-opacity-60', !disabled && 'twc-cursor-pointer']"
  >
    <input
      v-bind="$attrs"
      type="radio"
      class="twc-mt-0.5 twc-mr-2 twc-w-4 twc-h-4 twc-form-radio BaseRadio"
      :class="[radioClass, !disabled && 'twc-cursor-pointer']"
      :checked="isSelected"
      :value="nativeValue"
      :disabled="disabled"
      @input="handleUpdate"
    />
    <slot></slot>
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
  import { BASE_RADIO_VARIANT, BaseRadioProps } from './BaseRadio.types'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseRadioProps['variant']>,
      default: BASE_RADIO_VARIANT.DEFAULT,
    },
    modelValue: {
      type: [String, Object] as PropType<BaseRadioProps['modelValue']>,
      default: '',
    },
    nativeValue: {
      type: [String, Object] as PropType<BaseRadioProps['nativeValue']>,
      default: '',
    },
    disabled: {
      type: Boolean as PropType<BaseRadioProps['disabled']>,
      default: false,
    },
  })

  const emit = defineEmits<{
    (e: 'update:modelValue', value: BaseRadioProps['nativeValue']): void
  }>()

  const { variant } = toRefs(props)

  const computedVariant = $computed(
    () =>
      inject<Ref>('fieldVariant')?.value ||
      variant?.value ||
      BASE_RADIO_VARIANT.DEFAULT,
  )

  const isSelected = $computed(() => {
    return (
      typeof props.modelValue !== 'undefined' &&
      props.modelValue === props.nativeValue
    )
  })

  // enabled:hover:twc-border-gray-400

  const radioClass = $computed(() => {
    // Default
    if (computedVariant === BASE_RADIO_VARIANT.DEFAULT) {
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
    else if (computedVariant === BASE_RADIO_VARIANT.DANGER) {
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

    if (isChecked) {
      emit('update:modelValue', props.nativeValue)
    }
  }
</script>
