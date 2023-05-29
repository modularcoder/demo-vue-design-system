<template>
  <div
    :style="{ height: '600px' }"
    class="twc-flex twc-justify-center twc-items-start"
  >
    <BaseDropdown v-slot="{ close }">
      <BaseDropdownTrigger :is="BaseButton">
        something is here
      </BaseDropdownTrigger>
      <BaseDropdownPanel :is="BaseMenu" class="">
        <BaseMenuItem @click="close"> Option 1</BaseMenuItem>
        <BaseMenuItem> Option 2</BaseMenuItem>
        <BaseMenuItem> Option 3</BaseMenuItem>
      </BaseDropdownPanel>
    </BaseDropdown>
  </div>

  <div>
    <BaseDropdown v-slot="{ close, isOpen }">
      <BaseDropdownTrigger
        :is="BaseButton"
        :icon-trailing="isOpen ? ChevronUpIcon : ChevronDownIcon"
      >
        Options
      </BaseDropdownTrigger>
      <BaseDropdownPanel :is="BaseMenu">
        <BaseMenuItem
          v-for="item in menuItems"
          :key="item"
          :title="item.title"
          :disabled="true"
          @click="close"
        />
      </BaseDropdownPanel>
    </BaseDropdown>
  </div>
</template>
<script setup lang="ts">
  import {
    BaseDropdown,
    BaseDropdownPanel,
    BaseDropdownTrigger,
  } from '../_componentsNext/BaseDropdown'
  import { BaseMenu, BaseMenuItem } from '../_componentsNext/BaseMenu'
  import { BaseButton } from '../_componentsNext/BaseButton'
  import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid'

  const menuItems = [
    { title: 'Edit' },
    { title: 'Add' },
    { title: 'Share' },
    { title: 'Settings' },
    { title: 'Add to favorite' },
    { title: 'Logout' },
  ]
</script>
