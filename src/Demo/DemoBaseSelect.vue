<template>
  <h3 class="twc-mb-4">BaseSelect</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseField label="Country" class="twc-mb-4">
      <BaseSelect v-model="select" placeholder="Select Country">
        <template #value>
          <span v-if="select" class="block truncate">{{ select }}</span>
        </template>
        <BaseSelectOption
          v-for="country in COUNTRY_LIST"
          :key="country"
          :value="country"
        >
          {{ country }}
        </BaseSelectOption>
      </BaseSelect>
    </BaseField>
  </div>
</template>

<script setup lang="ts">
  import BaseSelect from '../_components/BaseSelect/BaseSelect.vue'
  import BaseSelectOption from '../_components/BaseSelect/BaseSelectOption.vue'
  import BaseField from '../_components/BaseField/BaseField.vue'
  import { COUNTRY_LIST } from '../_statics/counties'
  let select = $ref('')
</script>
