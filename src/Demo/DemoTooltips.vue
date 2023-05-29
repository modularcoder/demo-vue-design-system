<template>
  <h3 class="twc-mb-4">BaseTooltip</h3>

  <h4 class="twc-mb-4">Dark</h4>

  <div
    class="twc-grid twc-grid-cols-6 twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg"
  >
    <div v-for="item in variations" :key="item.placement" class="twc-p-8">
      <BaseTooltip :placement="item.placement">
        <BaseBadge variant="warning" size="small">
          <span class="twc-cursor-default">
            {{ item.name }}
          </span>
        </BaseBadge>
        <template #content>
          Hello world <br />
          Demo content!
        </template>
      </BaseTooltip>
    </div>
  </div>

  <h4 class="twc-mb-4">Light</h4>

  <div
    class="twc-grid twc-grid-cols-6 twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg"
  >
    <div v-for="item in variations" :key="item.placement" class="twc-p-8">
      <BaseTooltip :placement="item.placement" :variant="'light'">
        <BaseBadge variant="warning" size="small">
          <span class="twc-cursor-default">
            {{ item.name }}
          </span>
        </BaseBadge>
        <template #content>
          Hello world <br />
          Demo content!
        </template>
      </BaseTooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import BaseBadge from '../_components/BaseBadge/BaseBadge.vue'
  import BaseTooltip from '../_components/BaseTooltip/BaseTooltip.vue'
  import { BaseTooltipTypes } from '@/_components/BaseTooltip'

  const variations: {
    name: string
    placement: BaseTooltipTypes['placement']
  }[] = [
    {
      name: 'Top start',
      placement: 'top-start',
    },
    {
      name: 'Top',
      placement: 'top',
    },
    {
      name: 'Top end',
      placement: 'top-end',
    },

    {
      name: 'Bottom',
      placement: 'bottom',
    },
    {
      name: 'Bottom start',
      placement: 'bottom-start',
    },
    {
      name: 'Bottom end',
      placement: 'bottom-end',
    },

    {
      name: 'Right start',
      placement: 'right-start',
    },
    {
      name: 'Right',
      placement: 'right',
    },
    {
      name: 'Right end',
      placement: 'right-end',
    },
    {
      name: 'Left',
      placement: 'left',
    },
    {
      name: 'Left start',
      placement: 'left-start',
    },
    {
      name: 'Left end',
      placement: 'left-end',
    },
  ]
</script>
