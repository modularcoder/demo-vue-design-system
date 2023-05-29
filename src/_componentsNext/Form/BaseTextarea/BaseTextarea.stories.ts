import { Meta, StoryFn } from '@storybook/vue3'
import BaseTextarea from './BaseTextarea.vue'
import { BaseTextareaProps, BASE_TEXTAREA_VARIANT } from './BaseTextarea.types'

const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    defaultValue: 'default',
    description: 'Sets the variant of the textarea',
    control: {
      type: 'select',
      options: Object.values(BASE_TEXTAREA_VARIANT),
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `'default'` },
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
    type: { name: 'string', required: false },
    defaultValue: 'Hello World',
    description: 'Sets the value of the textarea',
    control: {
      type: 'text',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `''` },
    },
  },
}

export default {
  title: 'Design System Next/Form/Textarea',
  component: BaseTextarea,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4386%3A7515&t=PjuttWXpy9Qix82o-0',
    },
  },
  argTypes,
} as Meta<typeof BaseTextarea>

export const Variants: StoryFn = () => ({
  components: { BaseTextarea },
  setup() {
    const text = `Something about myself. Something about myself. Something about myself. Something about myself.`

    return { text }
  },
  template: `
    <div style="min-width: 600px;" class="twc-space-y-8">
      <h3>Variant default</h3>
      <div class="twc-grid twc-grid-cols-2  twc-gap-8 twc-w-full">
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">default</h5>
          <BaseTextarea/>
          <BaseTextarea :modelValue="text" />
        </div>
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">disabled</h5>
          <BaseTextarea :disabled="true" />
          <BaseTextarea :modelValue="text" :disabled="true"  />
        </div>
      </div>

      <h3>Variant danger</h3>
      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">default</h5>
          <BaseTextarea :variant="'danger'" />
          <BaseTextarea :modelValue="text" :variant="'danger'" />
        </div>
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">disabled</h5>
          <BaseTextarea :variant="'danger'" :disabled="true" />
          <BaseTextarea :modelValue="text" :variant="'danger'" :disabled="true" />
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

export const Playground: StoryFn<BaseTextareaProps> = (args) => ({
  components: { BaseTextarea },
  setup() {
    return { args }
  },
  template: `
    <div style="min-width: 300px">
      <BaseTextarea v-bind="args" />
    </div>
  `,
})
