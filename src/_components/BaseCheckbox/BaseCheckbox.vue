<template>
  <label class="twc-flex">
    <input
      v-bind="$attrs"
      type="checkbox"
      data-test-id="checkbox"
      class="twc-mt-0.5 twc-mr-3 twc-w-4 twc-h-4 twc-rounded twc-form-checkbox"
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
      :checked="modelValue"
      @input="handleUpdate"
    />
    <slot />
  </label>
</template>
<script lang="ts">
  // disabling the default attributes inheritance so the attributes are not duplicated on the parent div and the input
  export default {
    inheritAttrs: false,
  }
</script>

<script setup lang="ts">
  import { inject, PropType, Ref } from 'vue'
  import { BaseCheckboxProps } from './BaseCheckboxTypes'

  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
  }>()

  const props = defineProps({
    variant: {
      type: String as PropType<BaseCheckboxProps['variant']>,
      default: () => '',
    },
    modelValue: {
      type: Boolean,
      default: () => false,
    },
  })

  let computedVariant = $computed(
    () => props.variant || inject<Ref>('fieldVariant')?.value || 'default',
  )

  const handleUpdate = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).checked)
  }
</script>
