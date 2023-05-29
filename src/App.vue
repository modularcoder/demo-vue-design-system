<template>
  <div class="twc-container twc-py-8 twc-mx-auto">
    <h1 class="twc-mb-2">Ui-Core components demo app</h1>

    <p class="twc-mb-8 twc-text-gray-500">
      This is a temporary demo app. Would be replaced by storybook soon.
    </p>

    <DemoBaseButton />
    <DemoTooltips />
    <DemoBaseInput />
    <DemoBaseCheckbox />
    <DemoBaseRadio />
    <DemoBaseSelect />
    <DemoBaseNavigationSteps />
    <DemoBaseAlert />
    <DemoBaseToast />
    <DemoBaseTable />
    <DemoBasePagination />
    <DemoBaseNavigationTabs />
    <DemoBaseDropdown />
  </div>
</template>

<script setup lang="ts">
  import DemoTooltips from './Demo/DemoTooltips.vue'
  import DemoBaseInput from './Demo/DemoBaseInput.vue'
  import DemoBaseCheckbox from './Demo/DemoBaseCheckbox.vue'
  import DemoBaseRadio from './Demo/DemoBaseRadio.vue'
  import DemoBaseSelect from './Demo/DemoBaseSelect.vue'
  import DemoBaseNavigationSteps from './Demo/DemoBaseNavigationSteps.vue'
  import DemoBaseAlert from './Demo/DemoBaseAlert.vue'
  import DemoBaseButton from './Demo/DemoBaseButton.vue'
  import DemoBaseToast from './Demo/DemoBaseToast.vue'
  import DemoBaseTable from './Demo/DemoBaseTable.vue'
  import DemoBasePagination from './Demo/DemoBasePagination.vue'
  import DemoBaseNavigationTabs from './Demo/DemoBaseNavigationTabs.vue'
  import DemoBaseDropdown from './Demo/DemoBaseDropdown.vue'
</script>

<style></style>
