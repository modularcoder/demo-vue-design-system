import { withDesign } from 'storybook-addon-designs'
import { Story, StoryFn, Meta } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'
import { BaseButtonProps } from './BaseButtonTypes'

const argTypes = {
  variant: {
    type: { name: 'string', required: false },
    defaultValue: 'default',
    description: 'Sets the variant of the button',
    control: {
      type: 'select',
      options: ['default', 'primary', 'warning', 'danger'],
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `'default'` },
    },
  },
  size: {
    type: { name: 'string', required: false },
    defaultValue: 'default',
    description: 'Sets the size of the button',
    control: {
      type: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
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
  inverted: {
    type: { name: 'boolean', required: false },
    defaultValue: false,
    description: 'Makes the button inverted',
    control: {
      type: 'boolean',
    },
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  tag: {
    type: { name: 'string', required: false },
    defaultValue: 'button',
    description: 'Sets the tag component of the button',
    control: {
      type: 'select',
      options: ['button', 'a', 'router-link'],
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: `'button'` },
    },
  },
  href: {
    type: { name: 'string', required: false },
    defaultValue: undefined,
    description:
      'Sets the href attribute of the button (if the "a" is used as a tag)',
    control: {
      type: 'text',
    },
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: undefined },
    },
  },
  to: {
    type: { name: 'string', required: false },
    defaultValue: undefined,
    description:
      'Sets the router-link "to" attribute of the button (if the "router-link" is used as a tag)',
    control: {
      type: 'text',
    },
    table: {
      type: { summary: ['string', 'object'] },
      defaultValue: { summary: undefined },
    },
  },
}

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=19%3A228',
}

export default {
  title: 'Design System/Button',
  component: BaseButton,
  parameters: {
    layout: 'centered',
    design,
  },
  argTypes,
  decorators: [withDesign],
} as Meta<typeof BaseButton>

const ButtonTemplate: StoryFn<typeof BaseButton> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  template: `
    <h3 class="twc-mb-2">Button</h3>
    <BaseButton v-bind="args" class="twc-mr-4">Button Text</BaseButton>
  `,
})

export const Button = ButtonTemplate.bind({})

// Variants

const VariantTemplate: Story<BaseButtonProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div>
      <h3 class="twc-mb-2">Main variations</h3>
      <div class="twc-mb-8">
        <BaseButton v-bind="args" class="twc-mr-4">Button</BaseButton>
        <BaseButton v-bind="args" class="twc-mr-4" :disabled="true">Disabled</BaseButton>
        <BaseButton v-bind="args" class="twc-mr-4" :inverted="true">Inverted</BaseButton>
      </div>
      <h3  class="twc-mb-2">Sizes variations</h3>
      <div class="twc-mb-4">
        <BaseButton v-bind="args" size="xs" class="twc-mr-4">Button size xs</BaseButton>
        <BaseButton v-bind="args" size="sm" class="twc-mr-4">Button size sm</BaseButton>
        <BaseButton v-bind="args" class="twc-mr-4">Button size default</BaseButton>
        <BaseButton v-bind="args" size="lg" class="twc-mr-4">Button size lg</BaseButton>
        <BaseButton v-bind="args" size="xl" class="twc-mr-4">Button size xl</BaseButton>
      </div>
      <div class="twc-mb-4">
        <BaseButton v-bind="args" size="xs" :disabled="true" class="twc-mr-4">Button size xs</BaseButton>
        <BaseButton v-bind="args" size="sm" :disabled="true" class="twc-mr-4">Button size sm</BaseButton>
        <BaseButton v-bind="args" :disabled="true" class="twc-mr-4">Button size default</BaseButton>
        <BaseButton v-bind="args" size="lg" :disabled="true" class="twc-mr-4">Button size lg</BaseButton>
        <BaseButton v-bind="args" size="xl" :disabled="true" class="twc-mr-4">Button size xl</BaseButton>
      </div>
      <div>
        <BaseButton v-bind="args" size="xs" :inverted="true" class="twc-mr-4">Button size xs</BaseButton>
        <BaseButton v-bind="args" size="sm" :inverted="true" class="twc-mr-4">Button size sm</BaseButton>
        <BaseButton v-bind="args" :inverted="true" class="twc-mr-4">Button size default</BaseButton>
        <BaseButton v-bind="args" size="lg" :inverted="true" class="twc-mr-4">Button size lg</BaseButton>
        <BaseButton v-bind="args" size="xl" :inverted="true" class="twc-mr-4">Button size xl</BaseButton>
      </div>
    </div>
  `,
})

export const VariantDefault = VariantTemplate.bind({})
VariantDefault.args = {
  variant: 'default',
}

export const VariantPrimary = VariantTemplate.bind({})
VariantPrimary.args = {
  variant: 'primary',
}

export const VariantWarning = VariantTemplate.bind({})
VariantWarning.args = {
  variant: 'warning',
}

export const VariantDanger = VariantTemplate.bind({})
VariantDanger.args = {
  variant: 'danger',
}
