<template>
  <h3 class="twc-mb-4">BaseButton</h3>
  <BaseButtonNext :icon-leading="PencilAltIcon" :icon-trailing="PencilAltIcon"
    >Test Icon</BaseButtonNext
  >
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <div class="twc-flex">
      <div class="twc-flex twc-flex-col twc-mx-2">
        <BaseButton class="twc-my-2">Default</BaseButton>
        <BaseButton class="twc-my-2" :disabled="true"
          >Default disabled</BaseButton
        >
        <BaseButton :inverted="true" class="twc-my-2">
          Default inverted
        </BaseButton>
        <BaseButton :inverted="true" :disabled="true" class="twc-my-2">
          Default inverted/disabled
        </BaseButton>
      </div>
      <div class="twc-flex twc-flex-col twc-mx-2">
        <BaseButton :variant="'primary'" class="twc-my-2">Primary</BaseButton>
        <BaseButton :variant="'primary'" class="twc-my-2" :disabled="true"
          >Primary disabled</BaseButton
        >
        <BaseButton :variant="'primary'" :inverted="true" class="twc-my-2"
          >Primary inverted</BaseButton
        >
        <BaseButton
          :variant="'primary'"
          :disabled="true"
          :inverted="true"
          class="twc-my-2"
          >Primary inverted/disabled
        </BaseButton>
      </div>
      <div class="twc-flex twc-flex-col twc-mx-2">
        <BaseButton :variant="'danger'" class="twc-my-2">Danger</BaseButton>
        <BaseButton :variant="'danger'" class="twc-my-2" :disabled="true"
          >Danger disabled</BaseButton
        >
        <BaseButton :variant="'danger'" :inverted="true" class="twc-my-2"
          >Danger inverted</BaseButton
        >
        <BaseButton
          :variant="'danger'"
          :disabled="true"
          :inverted="true"
          class="twc-my-2"
          >Danger inverted/disabled
        </BaseButton>
      </div>
      <div class="twc-flex twc-flex-col twc-mx-2">
        <BaseButton :variant="'success'" class="twc-my-2">Success</BaseButton>
        <BaseButton :variant="'success'" class="twc-my-2" :disabled="true"
          >Success disabled</BaseButton
        >
        <BaseButton :variant="'success'" :inverted="true" class="twc-my-2"
          >Success inverted</BaseButton
        >
        <BaseButton
          :variant="'success'"
          :disabled="true"
          :inverted="true"
          class="twc-my-2"
          >Success inverted/disabled
        </BaseButton>
      </div>
      <div class="twc-flex twc-flex-col twc-mx-2">
        <BaseButton :variant="'warning'" class="twc-my-2">Warning</BaseButton>
        <BaseButton :variant="'warning'" class="twc-my-2" :disabled="true"
          >Warning disabled</BaseButton
        >
        <BaseButton :variant="'warning'" :inverted="true" class="twc-my-2"
          >Warning inverted</BaseButton
        >
        <BaseButton
          :variant="'warning'"
          :disabled="true"
          :inverted="true"
          class="twc-my-2"
          >Warning inverted/disabled
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import BaseButton from '../_components/BaseButton/BaseButton.vue'
  import { BaseButton as BaseButtonNext } from '../_componentsNext/BaseButton'
  import { PencilAltIcon } from '@heroicons/vue/solid'
</script>
