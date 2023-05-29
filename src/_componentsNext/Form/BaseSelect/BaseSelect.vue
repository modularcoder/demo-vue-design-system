<template>
  <Listbox
    v-slot="{ open }"
    :model-value="modelValue"
    as="div"
    class="BaseSelect"
    :disabled="disabled"
    :class="[disabled && 'twc-opacity-60']"
    @update:model-value="handleUpdate"
    @click.prevent
  >
    <div class="twc-relative">
      <ListboxButton
        ref="selectTriggerRef"
        class="twc-relative twc-py-2 twc-pr-10 twc-pl-3 twc-w-full twc-text-sm twc-text-left twc-text-gray-900 twc-bg-white twc-rounded-md twc-border focus:twc-outline-none focus:twc-ring-1 twc-shadow-sm"
        :class="[
          computedVariant === BASE_SELECT_VARIANT.DANGER &&
            'twc-border-danger-300  focus:twc-ring-danger-500 focus:twc-border-danger-500 twc-pr-10',
          computedVariant === BASE_SELECT_VARIANT.DEFAULT &&
            'twc-border-gray-300  focus:twc-ring-primary-500 focus:twc-border-primary-500',
          !disabled && 'twc-cursor-pointer',
        ]"
        @keydown.enter="updatePosition"
        @click="updatePosition"
      >
        <!-- Selected value -->
        <span v-if="modelValue" class="twc-block twc-truncate">
          <slot name="Value" v-bind="{ modelValue, placeholder }">{{
            displayValue
          }}</slot>
        </span>
        <!-- Placeholder -->
        <span v-else class="twc-block twc-text-gray-500 twc-truncate">
          <slot name="Placeholder" v-bind="{ modelValue, placeholder }">
            {{ placeholder || '&ensp;' }}
          </slot>
        </span>
        <!-- Arrow icon -->
        <span
          class="twc-flex twc-absolute twc-inset-y-0 twc-right-0 twc-items-center twc-pr-2 twc-pointer-events-none"
        >
          <ChevronDownIcon
            class="twc-w-5 twc-h-5 twc-text-gray-500"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>
      <transition
        leave-active-class="twc-transition twc-ease-in twc-duration-100"
        leave-from-class="twc-opacity-100"
        leave-to-class="twc-opacity-0"
      >
        <div v-if="open">
          <ListboxOptions
            ref="selectContentRef"
            static
            class="twc-overflow-auto twc-absolute twc-z-10 twc-py-1 twc-w-full twc-max-h-60 twc-text-sm twc-bg-white twc-rounded-md focus:twc-outline-none twc-ring-1 twc-ring-black twc-ring-opacity-5 twc-shadow-lg"
            :style="selectContentPositionStyle"
          >
            <slot v-if="options" name="default">
              <BaseSelectOption
                v-for="option in options"
                :key="option.id || option.value"
                :value="option.value"
              >
                {{ option.name }}
              </BaseSelectOption>
            </slot>
            <slot v-else name="default"></slot>
          </ListboxOptions>
        </div>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts" setup>
  import { computed, inject, PropType, Ref, toRefs, ref } from 'vue'
  import { Listbox, ListboxButton, ListboxOptions } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/solid'
  import { Side, useFloating, offset, flip } from '@floating-ui/vue'
  import { BASE_SELECT_VARIANT, BaseSelectProps } from './BaseSelect.types'
  import BaseSelectOption from './BaseSelectOption.vue'

  const props = defineProps({
    variant: {
      type: String as PropType<BaseSelectProps['variant']>,
      default: BASE_SELECT_VARIANT.DEFAULT,
    },
    placeholder: {
      type: String as PropType<BaseSelectProps['placeholder']>,
      default: '',
    },
    disabled: {
      type: Boolean as PropType<BaseSelectProps['disabled']>,
      default: false,
    },
    modelValue: {
      type: String as PropType<BaseSelectProps['modelValue']>,
      default: '',
    },
    options: {
      type: Array as PropType<BaseSelectProps['options']>,
      default: undefined,
    },
  })

  const emit = defineEmits<{
    (e: 'update:modelValue', value: BaseSelectProps['modelValue']): void
  }>()

  // let floating: UseFloatingReturn | any = {}
  let selectTriggerRef = ref<HTMLElement | null>(null)
  let selectContentRef = ref<HTMLElement | null>(null)

  const placementInitial = $ref<Side>('bottom')
  const middleware = $ref([offset(5), flip()])

  const displayValue = $computed(() => {
    if (props?.options?.length && props.modelValue) {
      return (
        props.options?.find((option) => option.value === props.modelValue)
          ?.name || props.modelValue
      )
    }

    return props.modelValue
  })

  const floating = useFloating(selectTriggerRef, selectContentRef, {
    placement: placementInitial,
    middleware,
  })

  const selectContentPositionStyle = $computed(() => {
    return {
      left: `${floating?.x?.value || 0}px`,
      top: `${floating?.y?.value || 0}px`,
    }
  })

  const { variant } = toRefs(props)

  const computedVariant = computed(
    () =>
      inject<Ref>('fieldVariant')?.value ||
      variant?.value ||
      BASE_SELECT_VARIANT.DEFAULT,
  )

  const updatePosition = () => {
    floating?.update()
  }

  const handleUpdate = (value: BaseSelectProps['modelValue']) => {
    emit('update:modelValue', value)
  }
</script>
