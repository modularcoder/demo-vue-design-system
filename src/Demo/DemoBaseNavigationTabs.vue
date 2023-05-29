<template>
  <h3 class="twc-mb-4">BaseNavigationTabs</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseNavigationTabs
      class="twc-mb-4"
      :tabs="tabs"
      type="underline"
      @change="handleTabChange"
    ></BaseNavigationTabs>

    <BaseNavigationTabs
      :tabs="tabs"
      type="pill"
      @change="handleTabChange"
    ></BaseNavigationTabs>
  </div>
</template>
<script setup lang="ts">
  import { BaseNavigationTabType } from '../_components/BaseNavigationTabs/BaseNavigationTabsTypes'
  import BaseNavigationTabs from '../_components/BaseNavigationTabs/BaseNavigationTabs.vue'
  import { UserIcon } from '@heroicons/vue/solid'

  let selectedTab = $ref('upload route')
  const handleTabChange = (tab: BaseNavigationTabType) => {
    selectedTab = tab.name
  }

  const tabs = $computed<BaseNavigationTabType[]>(() => [
    {
      displayName: 'Upload',
      name: 'upload route',
      current: selectedTab == 'upload route',
      icon: UserIcon,
    },
    {
      displayName: 'Tracking',
      name: 'tracking route',
      current: selectedTab == 'tracking route',
      badge: '10',
    },
  ])
</script>
