<template>
  <component
    :is="is"
    :ref="api.triggerRef"
    aria-haspopup="menu"
    :aria-expanded="api.isOpen.value"
    :disabled="disabled"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <slot> </slot>
  </component>
</template>
<script lang="ts">
  export default {
    name: 'BaseDropdownTrigger',
  }
</script>
<script setup lang="ts">
  import { Keys } from '@/_utils/Keyboard'
  import { PropType } from 'vue'
  import { useDropdownContext } from '../_utils'
  const props = defineProps({
    is: {
      type: [Object, String] as PropType<any>,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  })
  const api = useDropdownContext('BaseDropdownPureTrigger')
  defineExpose({ $el: api.triggerRef })
  const handleClick = (event: Event) => {
    if (props.disabled) return
    if (api.isOpen.value) {
      api.closeDropdown()
    } else {
      event.preventDefault()
      api.openDropdown()
    }
  }
  const handleKeyDown = (event: KeyboardEvent) => {
    if (props.disabled) return
    switch (event.key) {
      // Ref: https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/#keyboard-interaction-13

      case Keys.Space:
      case Keys.Enter:
      case Keys.ArrowDown:
      case Keys.ArrowUp:
        event.preventDefault()
        event.stopPropagation()
        api.openDropdown()
        break
    }
  }
</script>
