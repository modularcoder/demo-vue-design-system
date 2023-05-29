// Ref: https://github.com/spaceone-dev/spaceone-design-system/blob/beta/src/inputs/checkbox/story-helper.ts
import { ref } from 'vue'
import type { ArgTypes } from '@storybook/addons'
import { Meta, StoryFn } from '@storybook/vue3'

import BaseCheckbox from './BaseCheckbox.vue'
import { BaseCheckboxProps, BASE_CHECKBOX_VARIANT } from './BaseCheckbox.types'

const argTypes: ArgTypes = {
  variant: {
    defaultValue: BASE_CHECKBOX_VARIANT.DEFAULT,
    description: 'Sets the checkbox variant',
    control: {
      type: 'select',
      options: Object.values(BASE_CHECKBOX_VARIANT),
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Makes the checkbox disabled',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  modelValue: {
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Sets the value of the checkbox',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: `false` },
    },
  },
  nativeValue: {
    type: { name: 'string', required: false },
    defaultValue: 'off',
    description:
      'Sets the HTML native value of the input (used for array bindings)',
    control: {
      type: 'text',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `'off'` },
    },
  },
  default: {
    // not a prop!
    control: {
      type: 'text',
    },
    defaultValue: 'Check me',
    table: {
      type: {
        summary: 'template',
      },
      defaultValue: { summary: 'no-content' },
    },
  },
}

export default {
  title: 'Design System Next/Form/Checkbox',
  component: BaseCheckbox,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=705%3A4352',
    },
  },
  argTypes,
} as Meta<typeof BaseCheckbox>

export const States: StoryFn<BaseCheckboxProps> = () => ({
  components: { BaseCheckbox },
  setup() {
    return {}
  },
  template: `
    <div style="min-width: 400px;" class="twc-space-y-8">
      <h3>Variant default</h3>

      <h5 class="twc-text-gray-500">active</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseCheckbox>Remember me</BaseCheckbox>
        <BaseCheckbox :modelValue="true">Remember me</BaseCheckbox>
      </div>

      <h5 class="twc-text-gray-500">disabled</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseCheckbox :disabled="true">Remember me</BaseCheckbox>
        <BaseCheckbox :disabled="true" :modelValue="true">Remember me</BaseCheckbox>
      </div>

      <h3>Variant error</h3>

      <h5 class="twc-text-gray-500">active</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseCheckbox variant="danger" >Remember me</BaseCheckbox>
        <BaseCheckbox variant="danger" :modelValue="true" >Remember me</BaseCheckbox>
      </div>

      <h5 class="twc-text-gray-500">disabled</h5>

      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <BaseCheckbox variant="danger" :disabled="true">Remember me</BaseCheckbox>
        <BaseCheckbox variant="danger" :disabled="true" :modelValue="true" >Remember me</BaseCheckbox>
      </div>
    </div>
  `,
})

States.parameters = {
  pseudo: {
    // focus: ['.__focused'],
  },
}

export const Required: StoryFn<BaseCheckboxProps> = () => ({
  components: { BaseCheckbox },
  setup() {
    return {}
  },
  template: `
    <BaseCheckbox required>
      Remember me
    </BaseCheckbox>
  `,
})

export const WithCustomContent: StoryFn<BaseCheckboxProps> = () => ({
  components: { BaseCheckbox },
  setup() {
    return {}
  },
  template: `
    <BaseCheckbox required>
      I agree to the <a href="#">privacy policy</a>
    </BaseCheckbox>
  `,
})

export const List: StoryFn<BaseCheckboxProps> = () => ({
  components: { BaseCheckbox },
  setup() {
    const value = ref([])

    return { value }
  },
  template: `
    <div style="width: 320px;" class="twc-divide-y">
      <div class="twc-space-y-4 twc-mb-6">
        <BaseCheckbox v-model="value" native-value="one">
          Option one
        </BaseCheckbox>
        <BaseCheckbox v-model="value"  native-value="two">
          Option two
        </BaseCheckbox>
        <BaseCheckbox v-model="value"  native-value="three">
          Option three
        </BaseCheckbox>
      </div>
      <div class="twc-pt-6">
        <span class="twc-font-medium">Selected: </span> {{JSON.stringify(value)}}
      </div>
    </div>
  `,
})

export const Playground: StoryFn<BaseCheckboxProps> = (args) => ({
  components: { BaseCheckbox },
  setup() {
    return { args }
  },
  template: `
    <div style="min-width: 300px">
      <BaseCheckbox v-bind="args" >{{ args.default }}</BaseCheckbox>
    </div>
  `,
})
