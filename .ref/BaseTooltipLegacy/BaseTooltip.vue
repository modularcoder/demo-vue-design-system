<template>
  <div
    ref="tooltip"
    class="twc-inline-flex twc-relative twc-leading-none"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="triggerRef"
      class="twc-leading-default"
      @mouseenter="handleTriggerMouseEnter"
      @mouseleave="handleTriggerMouseLeave"
    >
      <slot ref="slot"></slot>
    </div>
    <div
      v-show="!isHidden"
      ref="content"
      class="twc-absolute twc-z-20 twc-text-sm twc-leading-normal"
      :class="contentClass"
      @mouseenter="handleContentMouseEnter"
      @mouseleave="handleContentMouseLeave"
    >
      <span
        class="twc-absolute twc-z-0 twc-w-2 twc-h-2"
        :class="[
          variant === 'default' && 'twc-bg-gray-900',
          variant === 'light' && 'twc-bg-white ',
        ]"
        :style="contentArrowStyle"
      ></span>
      <div
        class="twc-z-10 twc-py-1.5 twc-px-2.5 twc-whitespace-nowrap twc-rounded"
        :class="[
          variant === 'default' && 'twc-bg-gray-900 twc-text-white',
          variant === 'light' && 'twc-bg-white twc-text-gray-900 twc-shadow',
        ]"
      >
        <template v-if="label">{{ label }}</template>
        <template v-else-if="$slots.content">
          <slot name="content" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, PropType, ref } from 'vue'
  import { useElementSize } from '../../_composables'
  import { BaseTooltipTypes } from './BaseTooltipTypes'

  const triggerRef = ref<HTMLElement>()
  const { width, height } = useElementSize(triggerRef)

  const props = defineProps({
    position: {
      type: String,
      required: false,
      default: () => 'top-start',
    },
    inversePositionOnOverflow: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    preventHidingOnContentMouseOver: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    label: {
      type: String,
      required: false,
      default: () => '',
    },
    variant: {
      type: String as PropType<BaseTooltipTypes['variant']>,
      default: () => 'default',
    },
  })

  const resolvedPosition = computed<string>(() => {
    return props.position
  })

  const contentClass = computed(() => {
    const classes: { [key: string]: string } = {
      top: 'twc-pb-1.5 twc-bottom-full twc-left-1/2 twc--translate-x-1/2',
      'top-start': 'twc-pb-1.5 twc-bottom-full twc-left-0',
      'top-end': 'twc-pb-1.5 twc-bottom-full twc-right-0',
      right: 'twc-pl-2 twc-left-full twc-top-1/2 twc--translate-y-1/2',
      'right-start': 'twc-pl-2 twc-left-full twc-top-0',
      'right-end': 'twc-pl-2 twc-left-full twc-bottom-0',
      bottom: 'twc-pt-1.5 twc-top-full twc-left-1/2 twc--translate-x-1/2',
      'bottom-start': 'twc-pt-1.5 twc-top-full twc-left-0',
      'bottom-end': 'twc-pt-1.5 twc-top-full twc-right-0',
      left: 'twc-pr-2 twc-right-full twc-top-1/2 twc--translate-y-1/2',
      'left-start': 'twc-pr-2 twc-right-full twc-top-0',
      'left-end': 'twc-pr-2 twc-right-full twc-bottom-0',
    }

    return classes[resolvedPosition.value] || ''
  })

  const contentArrowStyle = computed(() => {
    const arrowMarginX = 5
    const arrowMarginY = 3
    const widthHalf = width.value / 2
    const heightHalf = height.value / 2

    let style = {}

    // Center arrow horizontally
    if (resolvedPosition.value === 'top') {
      style = {
        bottom: `${arrowMarginY}px`,
        left: `50%`,
        transform: 'translateX(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'top-start') {
      style = {
        bottom: `${arrowMarginY}px`,
        left: `${widthHalf}px`,
        transform: 'translateX(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'top-end') {
      style = {
        bottom: `${arrowMarginY}px`,
        right: `${widthHalf}px`,
        transform: 'translateX(50%) rotate(45deg)',
      }
    }
    // Bottom
    else if (resolvedPosition.value === 'bottom') {
      style = {
        top: `${arrowMarginY}px`,
        left: `50%`,
        transform: 'translateX(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'bottom-start') {
      style = {
        top: `${arrowMarginY}px`,
        left: `${widthHalf}px`,
        transform: 'translateX(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'bottom-end') {
      style = {
        top: `${arrowMarginY}px`,
        right: `${widthHalf}px`,
        transform: 'translateX(50%) rotate(45deg)',
      }
    }
    // Left
    else if (resolvedPosition.value === 'left') {
      style = {
        right: `${arrowMarginX}px`,
        top: `50%`,
        transform: 'translateY(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'left-start') {
      style = {
        right: `${arrowMarginX}px`,
        top: `${heightHalf}px`,
        transform: 'translateY(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'left-end') {
      style = {
        right: `${arrowMarginX}px`,
        bottom: `${heightHalf}px`,
        transform: 'translateY(50%) rotate(45deg)',
      }
    }
    // Right
    else if (resolvedPosition.value === 'right') {
      style = {
        left: `${arrowMarginX}px`,
        top: `50%`,
        transform: 'translateY(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'right-start') {
      style = {
        left: `${arrowMarginX}px`,
        top: `${heightHalf}px`,
        transform: 'translateY(-50%) rotate(45deg)',
      }
    } else if (resolvedPosition.value === 'right-end') {
      style = {
        left: `${arrowMarginX}px`,
        bottom: `${heightHalf}px`,
        transform: 'translateY(50%) rotate(45deg)',
      }
    }

    return style
  })

  let isHidden = $ref(true)

  const handleMouseEnter = () => {
    isHidden = false
  }

  const handleMouseLeave = () => {
    isHidden = true
  }

  const handleTriggerMouseEnter = () => {
    isHidden = false
  }

  const handleTriggerMouseLeave = () => {
    isHidden = true
  }

  const handleContentMouseEnter = () => {
    //
  }

  const handleContentMouseLeave = () => {
    //
  }
</script>

<style></style>
