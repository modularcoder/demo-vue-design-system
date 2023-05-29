<template>
  <div v-bind="$attrs" class="twc-inline-flex">
    <div
      ref="tooltipTriggerRef"
      class="twc-inline-flex"
      @mouseenter="handleTriggerMouseEnter"
      @mouseleave="handleTriggerMouseLeave"
    >
      <slot></slot>
    </div>
    <Teleport to=".app-ui-core" :disabled="true">
      <TransitionRoot
        :show="!isHidden || !!isOpen"
        enter="twc-transition-opacity twc-duration-75"
        enter-from="twc-opacity-0"
        enter-to="twc-opacity-100"
        leave="twc-transition-opacity twc-duration-150"
        leave-from="twc-opacity-100"
        leave-to="twc-opacity-0"
      >
        <BaseTooltipPanel
          ref="tooltipContentRef"
          class="twc-absolute"
          :style="tooltipContentPositionStyle"
          :direction="tooltipContentArrowSide"
          :arrow-style="tooltipContentArrowPositionStyle"
        >
          <template v-if="label"
            ><span class="twc-whitespace-nowrap">{{ label }}</span></template
          >
          <template v-else-if="$slots.Content">
            <slot name="Content" />
          </template>
        </BaseTooltipPanel>
      </TransitionRoot>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import { Ref, PropType, ref, computed, onMounted } from 'vue'
  import {
    Side,
    Placement,
    useFloating,
    offset,
    flip,
    shift,
    arrow,
  } from '@floating-ui/vue'
  import { TransitionRoot } from '@headlessui/vue'
  import BaseTooltipPanel from './BaseTooltipPanel/BaseTooltipPanel.vue'
  import { BASE_TOOLTIP_PLACEMENT, BaseTooltipProps } from './BaseTooltip.types'

  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: undefined,
    },
    placement: {
      type: String as PropType<BaseTooltipProps['placement']>,
      required: false,
      default: 'top',
    },
    label: {
      type: String as PropType<BaseTooltipProps['label']>,
      required: false,
      default: undefined,
    },
    delay: {
      type: [Number, Object] as PropType<BaseTooltipProps['delay']>,
      required: false,
      default: 100,
    },
  })

  let tooltipTriggerRef = ref<HTMLElement>()
  let tooltipContentRef = ref<null | InstanceType<typeof BaseTooltipPanel>>(
    null,
  )
  let tooltipContentArrowRef = computed(() => {
    return tooltipContentRef.value?.arrowRef
  })

  let isHidden = $ref(!props.isOpen)

  const middleware = ref([
    offset(10),
    flip(),
    shift({
      padding: 10,
    }),
    arrow({ element: tooltipContentArrowRef, padding: 10 }),
  ])

  const floating = useFloating(tooltipTriggerRef, tooltipContentRef, {
    placement: props.placement,
    middleware,
  })

  const {
    middlewareData,
    x: tooltipContentX,
    y: tooltipContentY,
    update,
  } = floating

  const placementComputed = floating.placement as Readonly<
    Ref<`${BASE_TOOLTIP_PLACEMENT}`>
  >

  const tooltipContentArrowX = $computed(() => {
    return middlewareData?.value?.arrow?.x
  })

  const tooltipContentArrowY = $computed(() => {
    return middlewareData?.value?.arrow?.y
  })

  const tooltipContentArrowSide = $computed<Side>(() => {
    if (!props.placement) {
      return 'bottom' as Side
    }

    return {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placementComputed.value.split('-')[0]] as Side
  })

  const tooltipContentPositionStyle = $computed(() => {
    return {
      left: `${tooltipContentX.value}px`,
      top: `${tooltipContentY.value}px`,
    }
  })

  let tooltipContentArrowPositionStyle = $computed(() => {
    return {
      left: tooltipContentArrowX != null ? `${tooltipContentArrowX}px` : '',
      top: tooltipContentArrowY != null ? `${tooltipContentArrowY}px` : '',
      right: '',
      bottom: '',
      [tooltipContentArrowSide]: '-4px',
    }
  })

  const delayShow =
    typeof props.delay === 'object' ? props.delay.show : props.delay
  const delayHide =
    typeof props.delay === 'object' ? props.delay.hide : props.delay

  let triggerTimout: ReturnType<typeof setTimeout> | undefined = undefined

  const handleTriggerMouseEnter = () => {
    // Opening/closing controled externally
    if (typeof props.isOpen !== 'undefined') {
      return false
    }

    window.clearTimeout(triggerTimout)
    triggerTimout = setTimeout(() => {
      isHidden = false

      setTimeout(() => {
        update()
      })
    }, delayShow)
  }

  const handleTriggerMouseLeave = () => {
    // Opening/closing controled externally
    if (typeof props.isOpen !== 'undefined') {
      return false
    }

    window.clearTimeout(triggerTimout)
    triggerTimout = setTimeout(() => {
      isHidden = true
    }, delayHide)
  }
</script>
