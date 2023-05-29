<template>
  <h3 class="twc-mb-4">BaseRadio</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseField
      label="Push Notifications"
      label-hint="(via SMS to your mobile)"
      class="twc-mb-4"
    >
      <BaseRadio v-model="radio" native-value="everything">
        <p>Everything</p>
      </BaseRadio>
      <BaseRadio v-model="radio" native-value="asEmail">
        <p>Same as email</p>
      </BaseRadio>
      <BaseRadio v-model="radio" native-value="nothing">
        <p>No push notifications</p>
      </BaseRadio>
    </BaseField>

    <div>
      {{ radio }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseRadio from '../_components/BaseRadio/BaseRadio.vue'
  import BaseField from '../_components/BaseField/BaseField.vue'
  let radio = $ref('')
</script>
