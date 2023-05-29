<template>
  <div class="twc-relative twc-rounded twc-shadow-sm">
    <textarea
      v-if="props.type === 'textarea'"
      v-bind="$attrs"
      ref="textarea"
      class="twc-block focus:twc-z-10 twc-w-full twc-font-normal twc-rounded twc-border twc-shadow-sm sm:twc-text-sm twc-form-textarea"
      :class="[
        computedVariant === 'danger' &&
          'twc-text-danger-900 twc-border-danger-300 twc-placeholder-danger-300 focus:twc-ring-danger-500 focus:twc-border-danger-500 twc-pr-10',
        computedVariant === 'success' &&
          'twc-text-success-900 twc-border-success-300 twc-placeholder-success-300 focus:twc-ring-success-500 focus:twc-border-success-500',
        computedVariant === 'warning' &&
          ' twc-text-warning-900 twc-border-warning-300 twc-placeholder-warning-300 focus:twc-ring-warning-500 focus:twc-border-warning-500',
        computedVariant &&
          !['danger', 'success', 'warning'].includes(computedVariant) &&
          'twc-text-gray-900 twc-placeholder-gray-300 twc-border-gray-300 focus:twc-ring-primary-500 focus:twc-border-primary-500',
        $attrs.disabled && 'twc-text-gray-400',
      ]"
      :value="props.modelValue"
      @input="handleUpdate"
    />
    <input
      v-else
      v-bind="$attrs"
      ref="input"
      :type="props.type"
      class="twc-block twc-relative focus:twc-z-10 twc-w-full twc-text-sm twc-font-normal twc-rounded focus:twc-outline-none twc-form-input"
      :class="[
        computedVariant === 'danger' &&
          'twc-border-danger-300 twc-text-danger-900 twc-placeholder-danger-300 focus:twc-ring-danger-500 focus:twc-border-danger-500 twc-pr-10',
        computedVariant === 'success' &&
          'twc-border-success-300 twc-text-success-900 twc-placeholder-success-300 focus:twc-ring-success-500 focus:twc-border-success-500',
        computedVariant === 'warning' &&
          'twc-border-warning-300 twc-text-warning-900 twc-placeholder-warning-300 focus:twc-ring-warning-500 focus:twc-border-warning-500',
        computedVariant &&
          !['danger', 'success', 'warning'].includes(computedVariant) &&
          'twc-border-gray-300 twc-text-gray-900 twc-placeholder-gray-300 focus:twc-ring-primary-500 focus:twc-border-primary-500',
        $attrs.disabled && 'twc-text-gray-400',
      ]"
      :value="props.modelValue"
      @input="handleUpdate"
    />
    <div
      class="twc-flex twc-absolute twc-inset-y-0 twc-right-0 twc-z-10 twc-items-center twc-pr-3 twc-pointer-events-none"
    >
      <ExclamationCircleIcon
        v-if="computedVariant === 'danger'"
        class="twc-w-5 twc-h-5 twc-text-red-500"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'BaseInput',
    inheritAttrs: false,
  }
</script>

<script setup lang="ts">
  import { Ref, PropType, computed, inject, toRefs } from 'vue'

  import { ExclamationCircleIcon } from '@heroicons/vue/solid'
  import type { BaseInputProps } from './BaseInputTypes'

  const props = defineProps({
    type: {
      type: String as PropType<BaseInputProps['type']>,
      default: () => 'text',
    },
    variant: {
      type: String as PropType<BaseInputProps['variant']>,
      default: () => '',
    },
    modelValue: {
      type: [String, Number] as PropType<BaseInputProps['modelValue']>,
      default: () => '',
    },
  })

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const { variant } = toRefs(props)

  const computedVariant = computed(
    () => variant?.value || inject<Ref>('fieldVariant')?.value || 'default',
  )

  const handleUpdate = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>

<style></style>
