import { Meta, StoryFn } from '@storybook/vue3'
import BaseInput from './BaseInput.vue'
import {
  BaseInputProps,
  BASE_INPUT_VARIANT,
  BASE_INPUT_TYPE,
} from './BaseInput.types'

const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    defaultValue: 'default',
    description: 'Sets the variant of the input',
    control: {
      type: 'select',
      options: Object.values(BASE_INPUT_VARIANT),
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `'default'` },
    },
  },
  type: {
    type: { name: 'string', required: false },
    defaultValue: 'text',
    description: 'Sets the type of the input',
    control: {
      type: 'select',
      options: Object.values(BASE_INPUT_TYPE),
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `'text'` },
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Makes the button disabled',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  modelValue: {
    type: { name: 'string | number', required: false },
    defaultValue: 'Hello World',
    description: 'Sets the value of the input',
    control: {
      type: 'text',
    },
    table: {
      type: { summary: 'string | number' },
      defaultValue: { summary: `''` },
    },
  },
}

export default {
  title: 'Design System Next/Form/Input',
  component: BaseInput,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4319%3A7740&t=PjuttWXpy9Qix82o-0',
    },
  },
  argTypes,
} as Meta<typeof BaseInput>

export const Variants: StoryFn = () => ({
  components: { BaseInput },
  template: `
    <div style="min-width: 600px;" class="twc-space-y-8">
      <h3>Variant default</h3>
      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <div class="twc-space-y-5">
          <h5 class="twc-text-gray-500">default</h5>
          <BaseInput/>
          <BaseInput :modelValue="'Filled'" />
        </div>
        <div class="twc-space-y-5">
          <h5 class="twc-text-gray-500">disabled</h5>
          <BaseInput :disabled="true" />
          <BaseInput :modelValue="'Filled'" :disabled="true"  />
        </div>
      </div>

      <h3>Variant danger</h3>
      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <div class="twc-space-y-5">
          <h5 class="twc-text-gray-500">default</h5>
          <BaseInput :variant="'danger'" />
          <BaseInput :modelValue="'Filled'" :variant="'danger'" />
        </div>
        <div class="twc-space-y-5">
          <h5 class="twc-text-gray-500">disabled</h5>
          <BaseInput :variant="'danger'" :disabled="true" />
          <BaseInput :modelValue="'Filled'" :variant="'danger'" :disabled="true" />
        </div>
      </div>
    </div>
  `,
})

Variants.parameters = {
  pseudo: {
    // focus: ['.__focused'],
  },
}

export const Playground: StoryFn<BaseInputProps> = (args) => ({
  components: { BaseInput },
  setup() {
    return { args }
  },
  template: `
    <div style="min-width: 300px">
      <BaseInput v-bind="args" />
    </div>
  `,
})
