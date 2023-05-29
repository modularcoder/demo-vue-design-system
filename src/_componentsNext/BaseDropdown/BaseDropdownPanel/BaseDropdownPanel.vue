<template>
  <teleport :to="api.teleportTarget">
    <transition
      enter-active-class="twc-transition twc-duration-100 twc-ease-out"
      enter-from-class="twc-transform twc-scale-95 twc-opacity-0"
      enter-to-class="twc-transform twc-scale-100 twc-opacity-100"
      leave-active-class="twc-transition twc-duration-75 twc-ease-in"
      leave-from-class="twc-transform twc-scale-100 twc-opacity-100"
      leave-to-class="twc-transform twc-scale-95 twc-opacity-0"
    >
      <component
        :is="is"
        v-if="api.isOpen.value"
        :ref="api.panelRef"
        v-bind="$attrs"
        :style="api.styles.value"
        tabindex="0"
        @keydown="handleKeyDown"
      >
        <slot> </slot>
      </component>
    </transition>
  </teleport>
</template>
<script lang="ts">
  export default {
    name: 'BaseDropdownPanel',
    inheritAttrs: false,
  }
</script>
<script setup lang="ts">
  import { Keys } from '@/_utils/Keyboard'
  import { PropType } from 'vue'
  import { useDropdownContext } from '../_utils'
  import { onClickOutside } from '@vueuse/core'
  defineProps({
    is: {
      type: [Object, String] as PropType<any>,
      default: 'div',
    },
  })

  const api = useDropdownContext('BaseDropdownPanel')
  defineExpose({ $el: api.panelRef })

  onClickOutside(
    api.panelRef,
    () => {
      api.closeDropdown()
    },
    {
      ignore: [api.triggerRef],
    },
  )

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      // Ref: https://www.w3.org/WAI/ARIA/apg/patterns/menu/#keyboard-interaction-12

      case Keys.Escape:
        event.preventDefault()
        event.stopPropagation()
        api.closeDropdown()
        break

      case Keys.Tab:
        event.preventDefault()
        event.stopPropagation()
        api.closeDropdown()
        break
    }
  }
</script>
