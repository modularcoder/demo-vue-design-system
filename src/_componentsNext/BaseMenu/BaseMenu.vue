<template>
  <ul
    ref="refMenu"
    role="menu"
    tabindex="0"
    class="twc-py-1 twc-w-56 twc-bg-white twc-rounded-md twc-outline-primary-500 focus:twc-outline-offset-1 twc-shadow-md BaseMenu"
    @keydown="handleKeyDown"
    @keyup="handleKeyUp"
  >
    <slot />
  </ul>
</template>
<script lang="ts">
  export default {
    name: 'BaseMenu',
  }
</script>
<script setup lang="ts">
  import { onMounted, provide, reactive, ref, VNode } from 'vue'
  import { Keys } from '@/_utils/Keyboard'
  import { BaseMenuAPI } from './BaseMenu.types'

  const refMenu = ref<HTMLElement | null>(null)

  const api = reactive<BaseMenuAPI>({
    items: [],
  })

  provide('BaseMenuApiKey', api)

  onMounted(() => {
    refMenu.value?.focus()
  })

  const itemsEnabled = $computed(() =>
    api.items.filter((item) => !item.disabled),
  )

  const itemIndexActive = $computed(() => {
    return itemsEnabled.findIndex((item) => item.active)
  })

  const prevItem = $computed(() => {
    const prevItemIndex = Math.max(0, itemIndexActive - 1)
    return itemsEnabled[prevItemIndex]
  })

  const nextItem = $computed(() => {
    const nextItemIndex = Math.min(itemsEnabled.length - 1, itemIndexActive + 1)
    return itemsEnabled[nextItemIndex]
  })

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      // Ref: https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/#keyboard-interaction-13
      case Keys.Enter:
      case Keys.Space:
        event.preventDefault()
        event.stopPropagation()
        const activeItem = itemsEnabled[itemIndexActive]
        if (activeItem) {
          activeItem?.el?.click()
        }
        break
      case Keys.ArrowRight:
      case Keys.ArrowDown:
        event.preventDefault()
        event.stopPropagation()

        nextItem?.el?.focus()

        break

      case Keys.ArrowLeft:
      case Keys.ArrowUp:
        event.preventDefault()
        event.stopPropagation()

        prevItem?.el?.focus()
        break
    }
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case Keys.Space:
        // Required for firefox, event.preventDefault() in handleKeyDown for
        // the Space key doesn't cancel the handleKeyUp, which in turn
        // triggers a *click*.
        event.preventDefault()
        break
    }
  }
</script>
