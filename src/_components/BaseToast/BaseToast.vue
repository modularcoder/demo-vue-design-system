<template>
  <div
    role="toast"
    class="twc-flex twc-flex-row twc-items-center twc-p-4 twc-w-96 twc-rounded-md twc-shadow-md"
    data-test-id="toast"
    :class="[
      variant === 'info' && 'twc-bg-info-50 ',
      variant === 'success' && 'twc-bg-success-50 ',
      variant === 'warning' && 'twc-bg-warning-50 ',
      variant === 'danger' && 'twc-bg-danger-50 ',
    ]"
  >
    <!-- Icon -->
    <div
      v-if="variant && Icons[variant]"
      class="twc-flex twc-justify-center twc-self-start twc-mr-3 twc-w-6 twc-text-sm twc-text-center"
      data-test-id="toast-icon"
      :class="[
        variant === 'info' && 'twc-text-info-600',
        variant === 'success' && 'twc-text-success-600',
        variant === 'warning' && 'twc-text-warning-600',
        variant === 'danger' && 'twc-text-danger-600',
        description ? 'twc-self-baseline' : '',
      ]"
    >
      <component :is="Icons[variant]" class="twc-w-5 twc-h-5"></component>
    </div>
    <div class="twc-flex twc-flex-col twc-flex-auto">
      <div
        class="twc-flex twc-flex-wrap twc-justify-between twc-text-base twc-font-medium"
        data-test-id="toast-msg"
        :class="[
          variant === 'info' && 'twc-text-gray-900',
          variant === 'success' && 'twc-text-success-700',
          variant === 'warning' && 'twc-text-warning-700',
          variant === 'danger' && 'twc-text-danger-700',
        ]"
      >
        {{ message }}
        <div v-if="!description">
          <a
            v-for="action of actions"
            :key="action.message"
            class="twc-mr-2 twc-text-sm twc-font-medium twc-whitespace-nowrap twc-cursor-pointer"
            :class="action.class"
            @click="action.action"
          >
            {{ action.message }}
          </a>
        </div>
      </div>
      <p
        v-if="description"
        class="twc-my-2 twc-text-gray-600"
        data-test-id="toast-desc"
      >
        {{ description }}
      </p>
      <div v-if="description" data-test-id="toast-actions">
        <a
          v-for="action of actions"
          :key="action.message"
          data-test-id="toast-action"
          class="twc-mr-2 twc-text-sm twc-font-medium twc-whitespace-nowrap twc-cursor-pointer"
          :class="action.class"
          @click="action.action"
        >
          {{ action.message }}
        </a>
      </div>
    </div>
    <span
      :class="description ? 'twc-self-start' : ''"
      data-test-id="toast-close-btn"
    >
      <XIcon
        class="twc-shrink-0 twc-self-start twc-w-5 twc-h-5 twc-text-gray-400 hover:twc-text-gray-600 twc-cursor-pointer"
        @click="$emit('close', $event)"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
  import {
    CheckCircleIcon,
    XIcon,
    XCircleIcon,
    ExclamationIcon,
    InformationCircleIcon,
  } from '@heroicons/vue/solid'
  import { BaseToastProps } from './BaseToastTypes'
  import { PropType } from 'vue'
  import { defineEmits } from 'vue'

  const Icons = {
    success: CheckCircleIcon,
    danger: XCircleIcon,
    warning: ExclamationIcon,
    info: InformationCircleIcon,
  }

  defineEmits(['close'])

  defineProps({
    variant: {
      type: String as PropType<BaseToastProps['variant']>,
      default: 'success',
    },
    message: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    actions: {
      type: Array as PropType<BaseToastProps['actions']>,
      default: () => [],
    },
  })
</script>
