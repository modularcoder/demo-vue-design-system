<template>
  <Listbox as="div" @click.prevent>
    <div class="twc-relative">
      <ListboxButton
        class="twc-relative twc-py-2 twc-pr-10 twc-pl-3 twc-w-full twc-text-left twc-bg-white twc-rounded-md twc-border focus:twc-outline-none focus:twc-ring-1 twc-shadow-sm twc-cursor-pointer sm:twc-text-sm"
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
      >
        <span
          v-if="$attrs.modelValue || $attrs['model-value']"
          class="twc-block twc-truncate"
        >
          <slot name="value">{{
            $attrs.modelValue || $attrs['model-value']
          }}</slot>
        </span>
        <span
          v-else
          class="twc-block twc-text-gray-300 twc-truncate"
          :class="[
            computedVariant === 'danger' && 'twc-text-danger-300',
            computedVariant === 'success' && 'twc-text-success-300',
            computedVariant === 'warning' && 'twc-text-warning-300',
            computedVariant &&
              !['danger', 'success', 'warning'].includes(computedVariant) &&
              'twc-text-gray-300',
          ]"
        >
          <slot name="placeholder">
            {{ placeholder || '&ensp;' }}
          </slot>
        </span>
        <span
          class="twc-flex twc-absolute twc-inset-y-0 twc-right-0 twc-items-center twc-pr-2 twc-pointer-events-none"
        >
          <SelectorIcon
            class="twc-w-5 twc-h-5 twc-text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>
      <transition
        leave-active-class="twc-transition twc-ease-in twc-duration-100"
        leave-from-class="twc-opacity-100"
        leave-to-class="twc-opacity-0"
      >
        <ListboxOptions
          class="twc-overflow-auto twc-absolute twc-z-10 twc-py-1 twc-mt-1 twc-w-full twc-max-h-60 twc-text-sm twc-bg-white twc-rounded-md focus:twc-outline-none twc-ring-1 twc-ring-black twc-ring-opacity-5 twc-shadow-lg"
        >
          <slot name="default"></slot>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts" setup>
  import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue'
  import { SelectorIcon } from '@heroicons/vue/solid'
  import { computed, inject, PropType, Ref, toRefs } from 'vue'
  import { BaseSelectProps } from './BaseSelectTypes'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseSelectProps['variant']>,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  })
  const { variant } = toRefs(props)

  const computedVariant = computed(
    () => variant?.value || inject<Ref>('fieldVariant')?.value || 'default',
  )
</script>
