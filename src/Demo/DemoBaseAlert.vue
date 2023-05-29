<template>
  <h3 class="twc-mb-4">BaseAlert</h3>

  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseAlert :variant="'info'" class="twc-mb-2">Something happened</BaseAlert>

    <BaseAlert :variant="'info'" class="twc-mb-2">
      <template #default> Something happened </template>

      <template #description>
        This is the description of what happened
      </template>
    </BaseAlert>

    <BaseAlert :variant="'info'" class="twc-mb-2">
      <template #default> Something happened </template>

      <template #description>
        This is the description of what happened
      </template>

      <template #action>
        <BaseButton :variant="'info'" :inverted="true">
          Try again →
        </BaseButton>
      </template>
    </BaseAlert>

    <BaseAlert :variant="'info'" class="twc-mb-2">
      <template #default> Something happened </template>

      <template #icon>
        <AcademicCapIcon />
      </template>

      <template #action>
        <BaseButton :variant="'info'" :inverted="true">
          Try again →
        </BaseButton>
      </template>
    </BaseAlert>

    <BaseAlert :variant="'info'" class="twc-mb-2">
      <template #default> Something happened </template>

      <template #icon>
        <AcademicCapIcon />
      </template>

      <template #description>
        This is the description of what happened
      </template>

      <template #action>
        <BaseButton :variant="'info'" :inverted="true">
          Try again →
        </BaseButton>
      </template>
    </BaseAlert>
  </div>
</template>
<script setup lang="ts">
  import { AcademicCapIcon } from '@heroicons/vue/solid'
  import BaseButton from '../_components/BaseButton/BaseButton.vue'
  import BaseAlert from '../_components/BaseAlert/BaseAlert.vue'
</script>
