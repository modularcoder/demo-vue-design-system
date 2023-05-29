import { withDesign } from 'storybook-addon-designs'
import { Story, StoryFn, Meta } from '@storybook/vue3'
import {
  PlusIcon,
  UserAddIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/vue/solid'

import BaseButton from './BaseButton.vue'
import {
  BaseButtonProps,
  BASE_BUTTON_VARIANT,
  BASE_BUTTON_SIZE,
} from './BaseButton.types'

const argTypes = {
  variant: {
    // type: { name: 'string', required: false },
    // defaultValue: 'default',
    description: 'Sets the variant of the button',
    control: {
      type: 'select',
      options: Object.values(BASE_BUTTON_VARIANT),
    },
    // table: {
    //   type: { summary: 'string' },
    //   defaultValue: { summary: `'default'` },
    // },
  },
  size: {
    type: { name: 'string', required: false },
    defaultValue: 'default',
    description: 'Sets the size of the button',
    control: {
      type: 'select',
      options: Object.values(BASE_BUTTON_SIZE),
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
  iconLeading: {
    defaultValue: undefined,
    description: 'Sets the leading icon',
  },
  iconTrailing: {
    defaultValue: undefined,
    description: 'Sets the trailing icon',
  },
  // Slots
  default: {
    name: 'Default',
    // not a prop!
    control: {
      type: 'text',
    },
    defaultValue: 'Button Text',
    table: {
      type: {
        summary: 'template',
      },
      defaultValue: { summary: 'no-content' },
    },
  },
}

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4165%3A6688&t=aejfFHSErslpo9wJ-0',
}

export default {
  title: 'Design System Next/Button',
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
    <BaseButton v-bind="args" class="twc-mr-4">{{ args.default }}</BaseButton>
  `,
})

// Variants
const VariantsTemplate: Story<BaseButtonProps> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {}
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="twc-flex twc-flex-col twc-space-y-10">
      <div>
        <h3 class="twc-mb-3">primary</h3>
        <div class="twc-flex twc-flex-row twc-space-x-20">
          <BaseButton :variant="'primary'" >Normal</BaseButton>
          <BaseButton :variant="'primary'" class="__hovered" >Hovered</BaseButton>
          <BaseButton :variant="'primary'" :disabled="true" >Disabled</BaseButton>
        </div>
      </div>
      <div>
        <h3 class="twc-mb-3">primary-link</h3>
        <div class="twc-flex twc-flex-row twc-space-x-20">
          <BaseButton :variant="'primary-link'" >Normal</BaseButton>
          <BaseButton :variant="'primary-link'" class="__hovered" >Hovered</BaseButton>
          <BaseButton :variant="'primary-link'" :disabled="true" >Disabled</BaseButton>
        </div>
      </div>
      <div>
        <h3 class="twc-mb-3">default</h3>
        <div class="twc-flex twc-flex-row twc-space-x-20">
          <BaseButton >Normal</BaseButton>
          <BaseButton class="__hovered" >Hovered</BaseButton>
          <BaseButton :disabled="true" >Disabled</BaseButton>
        </div>
      </div>
      <div>
        <h3 class="twc-mb-3">danger</h3>
        <div class="twc-flex twc-flex-row twc-space-x-20">
          <BaseButton :variant="'danger'" >Normal</BaseButton>
          <BaseButton :variant="'danger'" class="__hovered" >Hovered</BaseButton>
          <BaseButton :variant="'danger'" :disabled="true" >Disabled</BaseButton>
        </div>
      </div>
      <div>
        <h3 class="twc-mb-3">danger-link</h3>
        <div class="twc-flex twc-flex-row twc-space-x-20">
          <BaseButton :variant="'danger-link'" >Normal</BaseButton>
          <BaseButton :variant="'danger-link'" class="__hovered" >Hovered</BaseButton>
          <BaseButton :variant="'danger-link'" :disabled="true" >Disabled</BaseButton>
        </div>
      </div>
    </div>
  `,
})

export const Variants = VariantsTemplate.bind({})

Variants.parameters = {
  pseudo: {
    hover: ['.__hovered'],
  },
}

const WithLeadingIconTemplate: StoryFn<typeof BaseButton> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton, PlusIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  template: `
    <div class="twc-flex twc-flex-row twc-space-x-10 twc-items-center">
      <div>
        <BaseButton :variant="'default'" :icon-leading="args.iconLeading">
          Button text
        </BaseButton>
      </div>
      <div>
        <BaseButton :variant="'primary'" :icon-leading="args.iconLeading">
          Button text
        </BaseButton>
        </div>
      <div>
        <BaseButton :variant="'primary-link'" :icon-leading="args.iconLeading">
          Button text
        </BaseButton>
        </div>
      <div>
        <BaseButton :variant="'danger'" :icon-leading="args.iconLeading">
          Button text
        </BaseButton>
      </div>
      <div>
        <BaseButton :variant="'danger-link'" :icon-leading="args.iconLeading">
          Button text
        </BaseButton>
      </div>
    </div>
  `,
})

export const WithLeadingIcon = WithLeadingIconTemplate.bind({})

WithLeadingIcon.args = {
  iconLeading: PlusIcon,
}

const WithTrailingIconTemplate: StoryFn<typeof BaseButton> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton, PlusIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  template: `
    <div class="twc-flex twc-flex-row twc-space-x-10 twc-items-center">
      <div>
        <BaseButton :variant="'default'" :icon-trailing="args.iconTrailing">
          Button text
        </BaseButton>
      </div>
      <div>
        <BaseButton :variant="'primary'" :icon-trailing="args.iconTrailing">
          Button text
        </BaseButton>
        </div>
      <div>
        <BaseButton :variant="'primary-link'" :icon-trailing="args.iconTrailing">
          Button text
        </BaseButton>
        </div>
      <div>
        <BaseButton :variant="'danger'" :icon-trailing="args.iconTrailing">
          Button text
        </BaseButton>
      </div>
      <div>
        <BaseButton :variant="'danger-link'" :icon-trailing="args.iconTrailing">
          Button text
        </BaseButton>
      </div>
    </div>
  `,
})

export const WithTrailingIcon = WithTrailingIconTemplate.bind({})

WithTrailingIcon.args = {
  iconTrailing: ArrowNarrowRightIcon,
}

const SizesTemplate: StoryFn<typeof BaseButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const iconLeading = UserAddIcon

    return { iconLeading }
  },
  template: `
    <div class="twc-flex twc-flex-row twc-space-x-10 twc-items-center">
      <div>
        <BaseButton :variant="'primary'" :size="'xs'" :icon-leading="iconLeading">Button xs</BaseButton>
      </div>
      <div>
        <BaseButton :variant="'primary'" :size="'sm'" :icon-leading="iconLeading">Button sm</BaseButton>
        </div>
      <div>
        <BaseButton :variant="'primary'" :icon-leading="iconLeading" >Button default</BaseButton>
        </div>
      <div>
        <BaseButton :variant="'primary'" :size="'lg'" :icon-leading="iconLeading">Button lg</BaseButton>
      </div>
      <div>
        <BaseButton :variant="'primary'" :size="'xl'" :icon-leading="iconLeading">Button xl</BaseButton>
      </div>
    </div>
  `,
})

export const Sizes = SizesTemplate.bind({})

const FullWidthTemplate: StoryFn<typeof BaseButton> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const icon = PlusIcon

    return { icon }
  },
  template: `
    <div class=" twc-w-80 twc-space-y-5 twc-block ">
        <BaseButton class="twc-w-full" :variant="'primary'" :icon-leading="icon">Button text</BaseButton>
        <BaseButton class="twc-w-full" :variant="'primary'" :icon-trailing="icon">Button text</BaseButton>
    </div>
  `,
})

export const FullWidth = FullWidthTemplate.bind({})

export const Playground: StoryFn<typeof BaseButton> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  template: `
    <BaseButton v-bind="args" class="twc-mr-4">{{ args.default }}</BaseButton>
  `,
})
