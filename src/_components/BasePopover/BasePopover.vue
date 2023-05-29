<template>
  <div
    ref="popoverTriggerRef"
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
        ref="popoverContentRef"
        class="twc-absolute twc-z-20 twc-text-sm twc-leading-normal"
        :style="popoverContentPositionStyle"
      >
        <span
          ref="popoverContentArrowRef"
          class="twc-absolute twc-z-10 twc-w-2 twc-h-2 twc-bg-white twc-border twc-border-t-gray-200 twc-border-r-transparent twc-border-b-transparent twc-border-l-gray-200 twc-border-solid"
          :class="[
            popoverContentArrowStaticSide === 'top' && 'twc-rotate-45',
            popoverContentArrowStaticSide === 'left' && '-twc-rotate-45',
            popoverContentArrowStaticSide === 'right' && 'twc-rotate-[135deg]',
            popoverContentArrowStaticSide === 'bottom' &&
              'twc-rotate-[-135deg]',
          ]"
          :style="popoverContentArrowPositionStyle"
        ></span>
        <div
          class="twc-z-10 twc-py-4 twc-px-6 twc-min-w-[300px] twc-text-gray-900 twc-bg-white twc-rounded twc-border twc-border-gray-200 twc-border-solid twc-shadow"
        >
          <slot name="content" />
        </div>
      </div>
    </TransitionRoot>
  </Teleport>
</template>

<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { BasePopoverTypes } from './BasePopoverTypes'
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

  const popoverTriggerRef = ref<HTMLElement>()
  const popoverContentRef = ref<HTMLElement>()
  const popoverContentArrowRef = ref<HTMLElement>()

  const props = defineProps({
    placement: {
      type: String as PropType<BasePopoverTypes['placement']>,
      required: false,
      default: () => 'top',
    },
    autoPlacementOptions: {
      type: Object as PropType<BasePopoverTypes['autoPlacementOptions']>,
      required: false,
      default: () => undefined,
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
      type: [Number, Object] as PropType<BasePopoverTypes['delay']>,
      required: false,
      default: () => 10,
    },
  })

  let isHidden = $ref(true)
  let popoverContentX = $ref(0)
  let popoverContentY = $ref(0)
  let popoverContentArrowX = $ref(0)
  let popoverContentArrowY = $ref(0)
  let popoverContentArrowStaticSide = $ref<Side>('bottom')

  const delayShow =
    typeof props.delay === 'object' ? props.delay.show : props.delay
  const delayHide =
    typeof props.delay === 'object' ? props.delay.hide : props.delay

  let popoverContentPositionStyle = $computed(() => {
    return {
      left: `${popoverContentX}px`,
      top: `${popoverContentY}px`,
    }
  })

  let popoverContentArrowPositionStyle = $computed(() => {
    return {
      left: popoverContentArrowX != null ? `${popoverContentArrowX}px` : '',
      top: popoverContentArrowY != null ? `${popoverContentArrowY}px` : '',
      right: '',
      bottom: '',
      [popoverContentArrowStaticSide]: '-4px',
    }
  })

  function updateTooltipPosition() {
    if (
      !popoverTriggerRef.value ||
      !popoverContentRef.value ||
      !popoverContentArrowRef.value
    ) {
      return false
    }

    const positioningMiddleware =
      props.placement === 'auto'
        ? autoPlacement(props.autoPlacementOptions)
        : flip()

    computePosition(popoverTriggerRef.value, popoverContentRef.value, {
      placement: props.placement !== 'auto' ? props.placement : undefined,
      middleware: [
        offset(10),
        positioningMiddleware,
        shift({ padding: 5 }),
        arrow({ element: popoverContentArrowRef.value }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      popoverContentX = x
      popoverContentY = y

      // Accessing the data
      const { x: arrowX, y: arrowY } = middlewareData.arrow as {
        x: number
        y: number
      }

      popoverContentArrowStaticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]] as 'top' | 'left' | 'bottom' | 'right'

      popoverContentArrowX = arrowX
      popoverContentArrowY = arrowY
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
