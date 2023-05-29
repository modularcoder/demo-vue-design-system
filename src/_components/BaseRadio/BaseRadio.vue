<template>
  <label class="twc-flex twc-pt-4">
    <input
      v-model="computedValue"
      v-bind="$attrs"
      type="radio"
      class="twc-mt-0.5 twc-mr-3 twc-w-4 twc-h-4 twc-form-radio"
      :class="[
        computedVariant === 'danger' &&
          'focus:twc-ring-danger-500 twc-text-danger-600 twc-border-danger-300',
        computedVariant === 'success' &&
          'focus:twc-ring-success-500 twc-text-success-600 twc-border-success-300',
        computedVariant === 'warning' &&
          'focus:twc-ring-warning-500 twc-text-warning-600 twc-border-warning-300',
        computedVariant &&
          !['danger', 'success', 'warning'].includes(computedVariant) &&
          'focus:twc-ring-primary-500 twc-text-primary-600 twc-border-gray-300',
      ]"
      :value="nativeValue"
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
  import { computed, inject, PropType, Ref, toRef, toRefs, useAttrs } from 'vue'
  import { BaseRadioProps } from './BaseRadioTypes'
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const props = defineProps({
    variant: {
      type: String as PropType<BaseRadioProps['variant']>,
      default: () => '',
    },
    modelValue: {
      type: String,
      default: () => '',
    },
    nativeValue: {
      type: String,
      default: () => '',
    },
  })

  let computedVariant = $computed(
    () => props.variant || inject<Ref>('fieldVariant')?.value || 'default',
  )

  const computedValue = computed({
    get: () => props.modelValue,
    set: (val) => {
      emit('update:modelValue', val)
    },
  })
</script>
