<template>
  <h3 class="twc-mb-4">BaseToast</h3>

  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <div class="twc-flex twc-justify-between twc-pr-4">
      <BaseToast v-bind="successParams" />
      <BaseToast v-bind="errorParams" />
    </div>
    <div class="twc-flex twc-justify-between twc-mt-4">
      <BaseButton @click="openToast">Open Toast</BaseButton>
      <BaseButton @click="openToastDanger">Open Toast danger</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseToast from '../_components/BaseToast/BaseToast.vue'
  import { BaseToastProps } from '../_components/BaseToast/BaseToastTypes'
  import BaseButton from '../_components/BaseButton/BaseButton.vue'

  import { BaseToastService } from '../_components/BaseToast'
  const successParams: BaseToastProps | any = {
    message: 'Feed created!',
    variant: 'success',
    description: 'lorem ipsum dolor',
    actions: [
      {
        message: 'Undo',
        action: () => console.log('Undo'),
      },
    ],
  }

  const errorParams: BaseToastProps | any = {
    message: 'Something went wrong!',
    variant: 'danger',
    actions: [
      {
        message: 'Undo',
        action: () => console.log('Undo'),
        class: '!twc-text-gray-400',
      },
    ],
    onCloseClick: () => console.log('onCloseClick'),
  }

  const openToast = () => {
    BaseToastService.open(successParams)
  }

  const openToastDanger = () => {
    BaseToastService.open(errorParams)
  }
</script>
