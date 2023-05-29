<template>
  <div>
    <div class="sm:twc-hidden">
      <BaseSelect
        data-test-id="tabs-dropdown"
        :model-value="selectedTab?.name"
        variant="default"
        @update:model-value="handleSelectChange"
      >
        <template #value>
          {{ selectedTab?.displayName }}
        </template>
        <BaseSelectOption
          v-for="tab in tabs"
          :key="tab.name"
          :selected="tab.current"
          :value="tab.name"
        >
          {{ tab.displayName }}
        </BaseSelectOption>
      </BaseSelect>
    </div>
    <div class="twc-hidden sm:twc-block">
      <div
        class="twc-border-gray-200"
        :class="[type === 'underline' && 'twc-border-b']"
      >
        <nav
          class="twc-flex twc-px-4 twc--mb-px twc-space-x-8"
          aria-label="tabs"
          data-test-id="tabs"
        >
          <a
            v-for="tab in tabs"
            :key="tab.name"
            class="twc-flex twc-text-sm twc-font-medium twc-whitespace-nowrap twc-cursor-pointer BaseLinkCustom"
            :class="[
              !tab.current &&
                'twc-border-transparent !twc-text-gray-500 hover:!twc-text-gray-700 hover:twc-border-gray-200',
              tab.current &&
                type === 'underline' &&
                'twc-border-primary-500 twc-text-primary-600',
              tab.current &&
                type === 'pill' &&
                'twc-bg-gray-100 twc-rounded-md',
              type === 'pill' && 'twc-px-3 twc-py-2',
              type === 'underline' && 'twc-border-b-2 twc-px-1 twc-py-4',
            ]"
            data-test-id="tab-item"
            :aria-current="tab.current ? 'page' : undefined"
            @click="$emit('change', tab)"
          >
            <component
              :is="tab.icon"
              v-if="tab.icon && type === 'underline'"
              class="twc-mr-2 twc-w-5 twc-h-5"
            />
            {{ tab.displayName }}
            <span
              v-if="tab.badge && type === 'underline'"
              :class="[
                tab.current
                  ? 'twc-bg-primary-100 twc-text-primary-600'
                  : 'twc-bg-gray-100 twc-text-gray-900',
                'twc-hidden twc-ml-3 twc-py-0.5 twc-px-2.5 twc-rounded-full twc-text-xs twc-font-medium md:twc-inline-block',
              ]"
            >
              {{ tab.badge }}
            </span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {
    BaseNavigationTabsProps,
    BaseNavigationTabType,
  } from './BaseNavigationTabsTypes'
  import BaseSelect from '../BaseSelect/BaseSelect.vue'
  import BaseSelectOption from '../BaseSelect/BaseSelectOption.vue'
  import { PropType } from 'vue'

  const props = defineProps({
    tabs: {
      type: Array as PropType<BaseNavigationTabsProps['tabs']>,
      required: true,
    },
    type: {
      type: String as PropType<BaseNavigationTabsProps['type']>,
      default: () => 'underline',
    },
  })
  const emit = defineEmits<{
    (e: 'change', tab: BaseNavigationTabType): void
  }>()

  const tabsByName = $computed(() => {
    return props.tabs.reduce((acc, tab) => {
      acc[tab.name] = tab
      return acc
    }, {} as Record<string, BaseNavigationTabType>)
  })

  const selectedTab = $computed(() => {
    return props.tabs.find((tab) => tab.current)
  })

  const handleSelectChange = (value: string) => {
    emit('change', tabsByName[value])
  }
</script>
