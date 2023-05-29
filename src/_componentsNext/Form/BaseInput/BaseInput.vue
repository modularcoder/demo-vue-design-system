<template>
  <div
    class="twc-relative twc-rounded twc-shadow-sm BaseInput"
    :class="[disabled && 'twc-opacity-60']"
  >
    <input
      v-bind="$attrs"
      ref="input"
      :type="type"
      class="twc-block twc-relative focus:twc-z-10 twc-py-2 twc-px-3 twc-w-full twc-text-sm twc-font-normal twc-leading-5 twc-bg-white twc-rounded twc-border twc-border-solid twc-outline-none focus:twc-ring-1"
      :class="[
        computedVariant === BASE_INPUT_VARIANT.DEFAULT &&
          'twc-text-gray-900 twc-placeholder-gray-300 twc-border-gray-300  focus:twc-ring-primary-500 focus:twc-border-primary-500',
        computedVariant === BASE_INPUT_VARIANT.DEFAULT &&
          !disabled &&
          'hover:twc-border-gray-400',
        computedVariant === BASE_INPUT_VARIANT.DANGER &&
          'twc-border-red-300 focus:twc-ring-danger-500 focus:twc-border-danger-500  twc-pr-10 ',
        computedVariant === BASE_INPUT_VARIANT.DANGER &&
          !disabled &&
          'hover:twc-border-red-400',
      ]"
      :value="modelValue"
      :disabled="disabled"
      @input="handleUpdate"
    />
    <div
      class="twc-flex twc-absolute twc-top-[9px] twc-right-0 twc-z-10 twc-items-center twc-pr-3 twc-pointer-events-none"
    >
      <ExclamationCircleIcon
        v-if="computedVariant === BASE_INPUT_VARIANT.DANGER"
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
  import { Ref, PropType, inject, toRefs } from 'vue'
  import { ExclamationCircleIcon } from '@heroicons/vue/solid'
  import {
    BASE_INPUT_TYPE,
    BASE_INPUT_VARIANT,
    BaseInputProps,
  } from './BaseInput.types'

  const props = defineProps({
    type: {
      type: String as PropType<BaseInputProps['type']>,
      default: BASE_INPUT_TYPE.TEXT,
    },
    variant: {
      type: String as PropType<BaseInputProps['variant']>,
      default: BASE_INPUT_VARIANT.DEFAULT,
    },
    disabled: {
      type: Boolean as PropType<BaseInputProps['disabled']>,
      default: false,
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

  const computedVariant = $computed(
    () =>
      inject<Ref>('fieldVariant')?.value ||
      variant?.value ||
      BASE_INPUT_VARIANT.DEFAULT,
  )

  const handleUpdate = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>

<style></style>
