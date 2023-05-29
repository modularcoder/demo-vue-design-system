<template>
  <div class="twc-grid twc-grid-cols-3 twc-gap-1 twc-py-4 sm:twc-gap-5">
    <dt
      class="twc-text-sm twc-text-gray-500"
      :class="[
        direction === BASE_DESCRIPTION_LIST_ITEM_DIRECTION.COLUMN &&
          'twc-col-span-3',
        direction === BASE_DESCRIPTION_LIST_ITEM_DIRECTION.ROW &&
          'twc-col-span-1',
        direction === BASE_DESCRIPTION_LIST_ITEM_DIRECTION.AUTO &&
          'sm:twc-col-span-1',
      ]"
    >
      <slot name="Label">{{ label }}</slot>
    </dt>
    <dd
      class="twc-text-sm twc-text-gray-900"
      :class="[
        direction === BASE_DESCRIPTION_LIST_ITEM_DIRECTION.COLUMN &&
          'twc-col-span-3 twc-mt-0',
        direction === BASE_DESCRIPTION_LIST_ITEM_DIRECTION.ROW &&
          'twc-col-span-2',
        direction === BASE_DESCRIPTION_LIST_ITEM_DIRECTION.AUTO &&
          'sm:twc-col-span-2',
      ]"
    >
      <slot></slot>
    </dd>
  </div>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue'
  import {
    BaseDescriptionListItemProps,
    BASE_DESCRIPTION_LIST_ITEM_DIRECTION,
  } from './BaseDescriptionListItem.types'

  defineProps({
    label: {
      type: String as PropType<BaseDescriptionListItemProps['label']>,
      default: '',
    },
    direction: {
      type: String as PropType<BaseDescriptionListItemProps['direction']>,
      default: BASE_DESCRIPTION_LIST_ITEM_DIRECTION.AUTO,
    },
  })
</script>
