<template>
  <div class="BaseField">
    <BaseFieldLabel
      v-if="label || $slots.Label"
      :label="label"
      :label-hint="labelHintComputed"
      :required="required"
    >
      <slot />
      <template v-if="$slots.Label" #Label>
        <slot name="Label" />
      </template>
      <template v-if="$slots.LabelHint" #LabelHint>
        <slot name="LabelHint" />
      </template>
    </BaseFieldLabel>
    <slot v-else />

    <!-- Message -->
    <div
      class="twc-mt-2 twc-text-sm"
      :class="[
        variant === BASE_FIELD_VARIANT.DEFAULT && 'twc-text-gray-500',
        variant === BASE_FIELD_VARIANT.DANGER && 'twc-text-danger-600',
      ]"
    >
      <p v-if="message && !$slots.Message">
        {{ message }}
      </p>
      <slot name="Message" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType, provide, toRefs } from 'vue'
  import BaseFieldLabel from './BaseFieldLabel/BaseFieldLabel.vue'
  import { BASE_FIELD_VARIANT, BaseFieldProps } from './BaseField.types'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseFieldProps['variant']>,
      default: BASE_FIELD_VARIANT.DEFAULT,
    },
    label: {
      type: String,
      default: '',
    },
    labelHint: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    optional: {
      type: Boolean,
      default: false,
    },
  })

  const labelHintComputed = $computed(() => {
    return props.optional && !props.labelHint ? '(Optional)' : props.labelHint
  })

  const { variant } = toRefs(props)

  // Provide field variant to nested inputs
  provide('fieldVariant', variant)
</script>
