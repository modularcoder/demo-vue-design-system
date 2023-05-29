<template>
  <div class="twc-z-20 twc-w-max twc-text-sm twc-leading-normal">
    <div class="twc-relative">
      <span
        ref="arrowRef"
        class="twc-absolute twc-z-0 twc-bg-gray-900"
        :class="[
          direction === 'top' && 'twc-rotate-45',
          direction === 'left' && '-twc-rotate-45',
          direction === 'right' && 'twc-rotate-[135deg]',
          direction === 'bottom' && 'twc-rotate-[-135deg]',
        ]"
        :style="[
          { width: `${arrowSize}px`, height: `${arrowSize}px` },
          arrowStyleComputed,
        ]"
      ></span>
      <div
        class="twc-z-10 twc-py-1.5 twc-px-2.5 twc-w-max twc-text-white twc-bg-gray-900 twc-rounded"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType, ref } from 'vue'
  import { Side } from '@floating-ui/vue'
  import {
    BaseTooltipPanelProps,
    BASE_TOOLTIP_CONTENT_DIRECTION,
  } from './BaseTooltipPanel.types'

  const props = defineProps({
    direction: {
      type: String as PropType<BaseTooltipPanelProps['direction']>,
      required: false,
      default: 'top',
    },
    arrowSize: {
      type: Number as PropType<BaseTooltipPanelProps['arrowSize']>,
      requred: false,
      default: 8,
    },
    arrowStyle: {
      type: Object as PropType<BaseTooltipPanelProps['arrowStyle']>,
      default: undefined,
    },
  })

  const arrowRef = ref<HTMLElement>()

  type StylesDefault = { [key in Side]: any }
  const stylesDefault: StylesDefault = {
    top: {
      left: '50%',
      marginLeft: `-${props.arrowSize / 2}px`,
    },
    right: {
      top: '50%',
      marginTop: `-${props.arrowSize / 2}px`,
    },
    left: {
      top: '50%',
      marginTop: `-${props.arrowSize / 2}px`,
    },
    bottom: {
      left: '50%',
      marginLeft: `-${props.arrowSize / 2}px`,
    },
  }

  const arrowStyleComputed = $computed(() => {
    let styleDefault = {}

    if (props.direction) {
      styleDefault = {
        ...styleDefault,
        ...stylesDefault[props.direction],
        [props.direction]: `-${props.arrowSize / 2}px`,
      }
    }

    return props.arrowStyle || styleDefault
  })

  defineExpose({ arrowRef })
</script>
