import { StoryFn, Meta } from '@storybook/vue3'
import BaseBadge from './BaseBadge.vue'

import {
  BASE_BADGE_VARIANT,
  BASE_BADGE_SIZE,
  BaseBadgeProps,
} from './BaseBadge.types'

const argTypes = {
  variant: {
    control: {
      type: 'select',
      options: Object.values(BASE_BADGE_VARIANT),
    },
    description: 'Sets the variant of the badge',
    defaultValue: BASE_BADGE_VARIANT.DEFAULT,
  },
  size: {
    control: {
      type: 'select',
      options: Object.values(BASE_BADGE_SIZE),
    },
    description: 'Sets the size of the badge',
    defaultValue: BASE_BADGE_SIZE.DEFAULT,
  },
  default: {
    // not a prop!
    name: 'Default',
    control: {
      type: 'text',
    },
    defaultValue: 'Badge',
    table: {
      type: {
        summary: 'template',
      },
      defaultValue: { summary: 'no-content' },
    },
  },
}

export default {
  title: 'Design System Next/Badge',
  component: BaseBadge,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4191%3A7206&t=aejfFHSErslpo9wJ-0',
    },
  },
  argTypes,
} as Meta

const VariantsTemplate: StoryFn<typeof BaseBadge> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {}
  },
  template: `
    <div class="twc-flex twc-flex-row twc-space-x-4">
      <BaseBadge >Badge</BaseBadge>
      <BaseBadge variant="danger" >Badge</BaseBadge>
      <BaseBadge variant="warning" >Badge</BaseBadge>
      <BaseBadge variant="success" >Badge</BaseBadge>
      <BaseBadge variant="info" >Badge</BaseBadge>
    </div>
  `,
})

export const Variants = VariantsTemplate.bind({})

const SizesTemplate: StoryFn<typeof BaseBadge> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {}
  },
  template: `
    <div class="twc-flex twc-flex-row twc-space-x-5 twc-items-center">
      <BaseBadge >Badge</BaseBadge>
      <BaseBadge size="lg" >Badge</BaseBadge>
    </div>
  `,
})

export const Sizes = SizesTemplate.bind({})

export const Playground: StoryFn<typeof BaseBadge> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  template: `
    <BaseBadge v-bind="args" >{{ args.default }}</BaseBadge>
  `,
})
