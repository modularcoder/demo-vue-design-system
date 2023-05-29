<template>
  <div
    class="twc-relative twc-rounded twc-shadow-sm BaseTextarea"
    :class="[disabled && 'twc-opacity-60']"
  >
    <textarea
      v-bind="$attrs"
      ref="textarea"
      class="twc-block focus:twc-z-10 twc-py-2 twc-px-3 twc-w-full twc-min-h-[105px] twc-text-sm twc-font-normal twc-leading-5 twc-text-gray-900 twc-bg-white twc-rounded twc-border focus:twc-outline-none focus:twc-ring-1 sm:twc-text-sm twc-placeholder-gray-300"
      :class="[
        computedVariant === BASE_TEXTAREA_VARIANT.DEFAULT &&
          'twc-border-gray-300  focus:twc-ring-primary-500 focus:twc-border-primary-500',
        computedVariant === BASE_TEXTAREA_VARIANT.DEFAULT &&
          !disabled &&
          'hover:twc-border-gray-400',
        computedVariant === BASE_TEXTAREA_VARIANT.DANGER &&
          ' twc-border-danger-300   focus:twc-ring-danger-500 focus:twc-border-danger-500 twc-pr-8',
        computedVariant === BASE_TEXTAREA_VARIANT.DANGER &&
          !disabled &&
          'hover:twc-border-red-400',
        disabled && 'twc-text-gray-400',
      ]"
      :value="props.modelValue"
      :disabled="props.disabled"
      @input="handleUpdate"
    />
    <div
      class="twc-flex twc-absolute twc-top-[9px] twc-right-0 twc-z-10 twc-items-center twc-pr-3 twc-pointer-events-none"
    >
      <ExclamationCircleIcon
        v-if="computedVariant === BASE_TEXTAREA_VARIANT.DANGER"
        class="twc-w-5 twc-h-5 twc-text-red-500"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'BaseTextarea',
    inheritAttrs: false,
  }
</script>

<script setup lang="ts">
  import { Ref, PropType, computed, inject, toRefs } from 'vue'
  import { ExclamationCircleIcon } from '@heroicons/vue/solid'
  import {
    BASE_TEXTAREA_VARIANT,
    BaseTextareaProps,
  } from './BaseTextarea.types'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseTextareaProps['variant']>,
      default: BASE_TEXTAREA_VARIANT.DEFAULT,
    },
    disabled: {
      type: Boolean as PropType<BaseTextareaProps['disabled']>,
      default: false,
    },
    modelValue: {
      type: String as PropType<BaseTextareaProps['modelValue']>,
      default: '',
    },
  })

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const { variant } = toRefs(props)

  const computedVariant = computed(
    () =>
      inject<Ref>('fieldVariant')?.value ||
      variant?.value ||
      BASE_TEXTAREA_VARIANT.DEFAULT,
  )

  const handleUpdate = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>

<style></style>
