<template>
  <h3 class="twc-mb-4">BaseCheckbox</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseField class="twc-mb-4">
      <BaseCheckbox v-model="checkbox">
        <div>
          <p class="twc-font-medium twc-text-gray-700">Comments</p>
          <p class="twc-text-gray-500">
            Get notified when someones posts a comment on a posting.
          </p>
        </div>
      </BaseCheckbox>
    </BaseField>
    <BaseField
      class="twc-mb-4"
      variant="danger"
      label="Select something"
      :required="true"
      message="Something needs to be selected"
    >
      <BaseCheckbox v-model="checkbox">
        <p>something</p>
      </BaseCheckbox>
    </BaseField>
  </div>

  <!-- <h3 class="twc-mb-4">BaseCheckbox Next</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseField class="twc-mb-4">
      <BaseCheckboxNext v-model="checkbox">
        <div>
          <p class="twc-font-medium twc-text-gray-700">Comments</p>
          <p class="twc-text-gray-500">
            Get notified when someones posts a comment on a posting.
          </p>
        </div>
      </BaseCheckboxNext>
    </BaseField>
    <BaseField
      class="twc-mb-4"
      variant="danger"
      label="Select something"
      :required="true"
      message="Something needs to be selected"
    >
      <BaseCheckboxNext v-model="checkbox">
        <p>something</p>
      </BaseCheckboxNext>
    </BaseField>
  </div> -->

  <h3 class="twc-mb-4">BaseCheckbox Next Array</h3>
  <div class="twc-p-4 twc-mb-8 twc-bg-gray-50 twc-rounded-lg">
    <BaseField v-for="value in values" :key="value" class="twc-mb-4">
      <BaseCheckboxNext
        v-model="valuesSelected"
        name="BaseCheckboxNextArray"
        :value="value"
        >{{ value }}
      </BaseCheckboxNext>
    </BaseField>
  </div>
  <div class="p-4">
    {{ valuesSelected }}
  </div>
</template>

<script setup>
  import BaseCheckbox from '../_components/BaseCheckbox/BaseCheckbox.vue'
  import { BaseCheckbox as BaseCheckboxNext } from '../_componentsNext/Form/BaseCheckbox'
  import BaseField from '../_components/BaseField/BaseField.vue'

  let checkbox = $ref(false)

  const values = $ref([{ hello: 'world' }, { goodbye: 'afternoon' }])
  const valuesSelected = $ref([{ hello: 'world' }])
</script>
