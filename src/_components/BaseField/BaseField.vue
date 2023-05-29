<template>
  <div class="BaseField">
    <!-- Has label -->
    <label
      v-if="props.label"
      data-test-id="field-label-wrapper"
      class="twc-block twc-text-sm twc-font-medium twc-leading-5 twc-text-gray-700"
    >
      <div class="twc-mb-1" data-test-id="field-label">
        {{ props.label }}
        <span
          v-if="labelHint"
          data-test-id="field-label-hint"
          class="twc-ml-1 twc-font-normal twc-text-gray-500"
        >
          {{ props.labelHint }}
        </span>
        <BaseTooltip
          v-if="props.required"
          data-test-id="field-required"
          placement="top-start"
          label="Required field"
        >
          <span class="twc-px-2 twc-text-danger-600">*</span>
        </BaseTooltip>
      </div>
      <slot></slot
    ></label>
    <!--  doesn't have a label -->
    <label v-else data-test-id="field-no-label">
      <slot></slot>
    </label>

    <p
      v-if="props.message"
      class="twc-mt-2 twc-text-sm"
      data-test-id="field-msg"
      :class="[
        variant === 'default' && 'twc-text-gray-500',
        variant === 'danger' && 'twc-text-danger-600',
        variant === 'warning' && 'twc-text-warning-600',
        variant === 'success' && 'twc-text-success-500',
      ]"
    >
      {{ props.message }}
    </p>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'BaseField',
  }
</script>

<script lang="ts" setup>
  import { PropType, provide, toRefs } from 'vue'
  import { BaseTooltip } from '../BaseTooltip'
  import type { BaseFieldProps } from './BaseFieldTypes'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseFieldProps['variant']>,
      default: () => 'default',
    },
    label: {
      type: String as PropType<BaseFieldProps['label']>,
      default: () => '',
    },
    labelHint: {
      type: String as PropType<BaseFieldProps['labelHint']>,
      default: () => '',
    },
    message: {
      type: String as PropType<BaseFieldProps['message']>,
      default: () => '',
    },
    required: {
      type: Boolean as PropType<BaseFieldProps['required']>,
      default: () => false,
    },
  })

  const { variant } = toRefs(props)

  provide('fieldVariant', variant)
</script>

<style></style>
