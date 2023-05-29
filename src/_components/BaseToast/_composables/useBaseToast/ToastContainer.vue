<template>
  <transition
    ref="el"
    enter-active-class="twc-transform twc-ease-out twc-duration-300 twc-transition"
    enter-from-class="twc-opacity-0 twc-translate-y-0 twc-translate-x-60"
    enter-to-class="twc-opacity-100 twc-translate-x-0"
    leave-active-class="twc-transform twc-transition twc-ease-in twc-duration-300"
    leave-from-class="twc-opacity-100 twc-translate-x-0"
    leave-to-class="twc-opacity-0 twc-translate-x-60"
  >
    <component
      :is="props.component"
      v-show="isActive"
      v-bind="$props.props"
      class="twc-my-4 twc-pointer-events-auto"
      v-on="$props.emits"
      @close="closeNotification"
    >
    </component>
  </transition>
</template>

<script lang="ts" setup>
  import { DefineComponent, PropType, shallowRef } from 'vue'
  import { useToastState } from './useToastState'

  const props = defineProps({
    component: {
      type: Object as PropType<DefineComponent>,
      required: true,
    },
    props: {
      type: Object as PropType<{ [key: string]: any }>,
      default: () => ({}),
    },
    emits: {
      type: Object as PropType<{ [key: string]: any }>,
      default: () => ({}),
    },
    duration: {
      type: Number,
      required: true,
    },
    infinite: {
      type: Boolean,
      required: true,
    },
    stackable: {
      type: Boolean,
      required: true,
    },
  })

  const el = shallowRef(null)

  const { isActive, closeNotification } = useToastState(el, {
    duration: props.duration,
    infinite: props.infinite,
    stackable: props.stackable,
  })

  defineExpose({
    close: closeNotification,
  })
</script>
