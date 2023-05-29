<template>
  <h3 class="twc-mb-4">BaseNavigationSteps</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseNavigationSteps :steps="NAVIGATION_STEPS" />
  </div>
</template>
<script setup lang="ts">
  import { NAVIGATION_STEPS } from '../_statics/navigation'
  import BaseNavigationSteps from '../_components/BaseNavigationSteps/BaseNavigationSteps.vue'
</script>
