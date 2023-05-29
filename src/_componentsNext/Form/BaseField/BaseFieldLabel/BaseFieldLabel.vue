<template>
  <label class="twc-block twc-flex-row BaseFieldLabel">
    <div class="twc-mb-1 twc-text-sm twc-leading-5">
      <div class="twc-flex twc-flex-row">
        <div class="twc-font-medium twc-text-gray-700">
          <span v-if="label && !$slots.Label">
            {{ label }}
          </span>
          <slot name="Label" />
        </div>
        <div class="twc-ml-1 twc-font-normal twc-text-gray-500">
          <span v-if="labelHint && !$slots.LabelHint">
            {{ labelHint }}
          </span>
          <slot name="LabelHint" />
        </div>
        <BaseTooltip v-if="required" label="Required field">
          <span class="twc-px-1 twc-text-danger-600">*</span>
        </BaseTooltip>
      </div>
    </div>
    <slot />
  </label>
</template>

<script setup lang="ts">
  import BaseTooltip from '../../../BaseTooltip/BaseTooltip.vue'
  import { BaseFieldLabelProps } from './BaseFieldLabel.types'

  defineProps({
    label: {
      type: String,
      default: '',
    },
    labelHint: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  })
</script>
