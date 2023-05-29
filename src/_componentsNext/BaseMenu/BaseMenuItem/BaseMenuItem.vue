<template>
  <component
    :is="tag"
    :ref="apiItem.el"
    role="menuitem"
    :to="to"
    :href="href"
    :tabindex="!disabled ? 0 : -1"
    :class="[
      disabled && 'disabled',
      disabled && 'twc-text-gray-400 twc-pointer-events-none',
    ]"
    class="twc-flex twc-gap-3 twc-py-2 twc-px-4 twc-w-full twc-h-full twc-text-gray-700 hover:twc-bg-gray-100 twc-cursor-pointer BaseMenuItem"
    @keydown="handleKeyDown"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <component
      :is="icon"
      class="twc-mt-[2px] twc-ml-[2px] twc-w-4 twc-h-4 twc-text-gray-400"
      :class="apiItem.active && !disabled && 'twc-text-gray-500'"
    ></component>
    <component :is="$slots.default" v-if="$slots.default"></component>
    <div v-else>
      <span
        class="twc-text-sm twc-font-normal twc-leading-5"
        :class="apiItem.active && !disabled && 'twc-text-gray-700'"
      >
        {{ title }}
      </span>

      <p
        v-if="description"
        class="twc-text-xs twc-font-normal twc-leading-4 twc-text-gray-500"
      >
        {{ description }}
      </p>
    </div>
  </component>
</template>
<script lang="ts">
  export default {
    name: 'BaseMenuItem',
  }
</script>
<script setup lang="ts">
  import { BaseMenuItemProps, BASE_MENU_ITEM_TAG } from './BaseMenuItem.types'
  import { onMounted, onUnmounted, inject, PropType, ref, toRef } from 'vue'
  import { Keys } from '@/_utils/Keyboard'
  import { BaseMenuAPI, BaseMenuItemAPI } from '../BaseMenu.types'

  const props = defineProps({
    id: {
      type: [String, Number] as PropType<BaseMenuItemProps['id']>,
      required: true,
    },
    title: {
      type: String as PropType<BaseMenuItemProps['title']>,
      default: '',
      required: true,
    },
    description: {
      type: String as PropType<BaseMenuItemProps['description']>,
      default: '',
    },
    icon: {
      type: Function as PropType<BaseMenuItemProps['icon']>,
      default: undefined,
    },
    to: {
      type: [String, Object] as PropType<BaseMenuItemProps['to']>,
      default: undefined,
    },
    href: {
      type: String as PropType<BaseMenuItemProps['href']>,
      default: undefined,
    },
    tag: {
      type: String as PropType<BaseMenuItemProps['tag']>,
      default: BASE_MENU_ITEM_TAG.LI,
    },
    disabled: {
      type: Boolean as PropType<BaseMenuItemProps['disabled']>,
      default: false,
    },
  })

  const apiItem: BaseMenuItemAPI = {
    el: ref<HTMLElement | null>(null),
    active: ref(false),
    disabled: toRef(props, 'disabled'),
  }

  const api = inject<BaseMenuAPI>('BaseMenuApiKey', { items: [] })

  onMounted(() => {
    api.items.push(apiItem)
  })

  onUnmounted(() => {
    api.items.splice(api.items.indexOf(apiItem), 1)
  })

  const handleFocus = () => {
    apiItem.active.value = true
  }

  const handleBlur = () => {
    apiItem.active.value = false
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case Keys.Enter:
        event.preventDefault()
        break
    }
  }

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
  }
</script>
