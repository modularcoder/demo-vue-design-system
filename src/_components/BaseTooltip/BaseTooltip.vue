<template>
  <div
    ref="tooltipTriggerRef"
    v-bind="$attrs"
    class="twc-inline-flex"
    @mouseenter="handleTriggerMouseEnter"
    @mouseleave="handleTriggerMouseLeave"
  >
    <slot ref="slot"></slot>
  </div>
  <Teleport to=".app-ui-core" :disabled="false">
    <TransitionRoot
      :show="!isHidden"
      enter="twc-transition-opacity twc-duration-75"
      enter-from="twc-opacity-0"
      enter-to="twc-opacity-100"
      leave="twc-transition-opacity twc-duration-150"
      leave-from="twc-opacity-100"
      leave-to="twc-opacity-0"
    >
      <div
        ref="tooltipContentRef"
        class="twc-absolute twc-z-20 twc-text-sm twc-leading-normal"
        :style="tooltipContentPositionStyle"
      >
        <span
          ref="tooltipContentArrowRef"
          class="twc-absolute twc-z-0 twc-w-2 twc-h-2"
          :class="[
            variant === 'default' && 'twc-bg-gray-900',
            variant === 'light' &&
              `
              twc-bg-white
              twc-border twc-border-solid
              twc-border-l-gray-200 twc-border-t-gray-200 twc-border-r-transparent twc-border-b-transparent
              twc-z-10
            `,
            tooltipContentArrowStaticSide === 'top' && 'twc-rotate-45',
            tooltipContentArrowStaticSide === 'left' && '-twc-rotate-45',
            tooltipContentArrowStaticSide === 'right' && 'twc-rotate-[135deg]',
            tooltipContentArrowStaticSide === 'bottom' &&
              'twc-rotate-[-135deg]',
          ]"
          :style="tooltipContentArrowPositionStyle"
        ></span>
        <div
          class="twc-z-10 twc-py-1.5 twc-px-2.5 twc-rounded"
          :class="[
            variant === 'default' && 'twc-bg-gray-900 twc-text-white',
            variant === 'light' &&
              'twc-bg-white twc-text-gray-900 twc-shadow twc-border twc-border-solid twc-border-gray-200',
            label ? 'twc-whitespace-nowrap' : '',
          ]"
        >
          <template v-if="label">{{ label }}</template>
          <template v-else-if="$slots.content">
            <slot name="content" />
          </template>
        </div>
      </div>
    </TransitionRoot>
  </Teleport>
</template>

<script setup lang="ts">
  import { PropType, ref, onMounted } from 'vue'
  import { BaseTooltipTypes } from './BaseTooltipTypes'
  import {
    computePosition,
    flip,
    shift,
    offset,
    arrow,
    autoPlacement,
    Side,
  } from '@floating-ui/dom'
  import { TransitionRoot } from '@headlessui/vue'

  const tooltipTriggerRef = ref<HTMLElement>()
  const tooltipContentRef = ref<HTMLElement>()
  const tooltipContentArrowRef = ref<HTMLElement>()

  const props = defineProps({
    position: {
      type: String as PropType<BaseTooltipTypes['placement']>,
      required: false,
      default: () => undefined,
    },
    placement: {
      type: String as PropType<BaseTooltipTypes['placement']>,
      required: false,
      default: () => 'top',
    },
    autoPlacementOptions: {
      type: Object as PropType<BaseTooltipTypes['autoPlacementOptions']>,
      required: false,
      default: () => undefined,
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
    host: {
      type: String,
      default: () => '.app-ui-core',
    },
    boundary: {
      type: String,
      default: () => 'viewport',
    },
    delay: {
      type: [Number, Object] as PropType<BaseTooltipTypes['delay']>,
      required: false,
      default: () => 10,
    },
  })

  if (props.position) {
    console.warn(
      `UI Core: BaseTooltip 'position' attribute is depricated, please use 'placement' instead`,
    )
  }

  let isHidden = $ref(true)
  let tooltipContentX = $ref(0)
  let tooltipContentY = $ref(0)
  let tooltipContentArrowX = $ref(0)
  let tooltipContentArrowY = $ref(0)
  let tooltipContentArrowStaticSide = $ref<Side>('bottom')

  const delayShow =
    typeof props.delay === 'object' ? props.delay.show : props.delay
  const delayHide =
    typeof props.delay === 'object' ? props.delay.hide : props.delay

  let tooltipContentPositionStyle = $computed(() => {
    return {
      left: `${tooltipContentX}px`,
      top: `${tooltipContentY}px`,
    }
  })

  let tooltipContentArrowPositionStyle = $computed(() => {
    return {
      left: tooltipContentArrowX != null ? `${tooltipContentArrowX}px` : '',
      top: tooltipContentArrowY != null ? `${tooltipContentArrowY}px` : '',
      right: '',
      bottom: '',
      [tooltipContentArrowStaticSide]: '-4px',
    }
  })

  function updateTooltipPosition() {
    if (
      !tooltipTriggerRef.value ||
      !tooltipContentRef.value ||
      !tooltipContentArrowRef.value
    ) {
      return false
    }

    const positioningMiddleware =
      props.placement === 'auto'
        ? autoPlacement(props.autoPlacementOptions)
        : flip()

    computePosition(tooltipTriggerRef.value, tooltipContentRef.value, {
      placement: props.placement !== 'auto' ? props.placement : undefined,
      middleware: [
        offset(10),
        positioningMiddleware,
        shift({ padding: 5 }),
        arrow({ element: tooltipContentArrowRef.value }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      tooltipContentX = x
      tooltipContentY = y

      // Accessing the data
      const { x: arrowX, y: arrowY } = middlewareData.arrow as {
        x: number
        y: number
      }

      tooltipContentArrowStaticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]] as 'top' | 'left' | 'bottom' | 'right'

      tooltipContentArrowX = arrowX
      tooltipContentArrowY = arrowY
    })
  }

  let triggerTimout: ReturnType<typeof setTimeout> | undefined = undefined

  const handleTriggerMouseEnter = () => {
    window.clearTimeout(triggerTimout)
    triggerTimout = setTimeout(() => {
      isHidden = false

      setTimeout(() => {
        updateTooltipPosition()
      })
    }, delayShow)
  }

  const handleTriggerMouseLeave = () => {
    window.clearTimeout(triggerTimout)
    triggerTimout = setTimeout(() => {
      isHidden = true
    }, delayHide)
  }
</script>
