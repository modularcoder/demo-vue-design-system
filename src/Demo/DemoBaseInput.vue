<template>
  <h3 class="twc-mb-4">BaseField + BaseInput</h3>

  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseField label="Your Name" class="twc-mb-4" variant="danger">
      <BaseInput v-model="name" />
    </BaseField>

    <BaseField label="Your Name" class="twc-mb-4">
      <BaseInput
        :model-value="name"
        @update:model-value="(value: string) => (name = value)"
      />
    </BaseField>

    <BaseField label="Your Number" class="twc-mb-4">
      <BaseInput v-model="number" type="number" />
    </BaseField>

    <BaseField label="Your Name" class="twc-mb-4">
      <BaseInput v-model="name" type="textarea" />
    </BaseField>

    {{ name }}
  </div>
</template>

<script setup lang="ts">
  import BaseInput from '../_components/BaseInput/BaseInput.vue'
  import BaseField from '../_components/BaseField/BaseField.vue'
  let name = $ref('John Doe')
  let number = $ref(0)
</script>
