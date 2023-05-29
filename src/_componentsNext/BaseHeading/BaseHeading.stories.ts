import { withDesign } from 'storybook-addon-designs'
import { Story, StoryFn, Meta } from '@storybook/vue3'

import BaseHeading from './BaseHeading.vue'
import { BaseHeadingProps, BASE_HEADING_TYPE } from './BaseHeading.types'

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=6607%3A9077&t=Oig61YMDYd0KRg5l-0',
}

const CONTENT = 'The quick brown fox jumps over the lazy dog'

export default {
  title: 'Design System Next/Heading',
  component: BaseHeading,
  parameters: {
    layout: 'centered',
    design,
  },
  argTypes: {
    type: {
      defaultValue: BASE_HEADING_TYPE.H1,
      description: 'Sets the type  of the heading (h1, h2, h3, h4, h5, h6)',
      control: {
        type: 'select',
        options: Object.values(BASE_HEADING_TYPE),
      },
    },
    // Slots
    default: {
      name: 'Default',
      // not a prop!
      control: {
        type: 'text',
      },
      defaultValue: CONTENT,
      table: {
        type: {
          summary: 'template',
        },
        defaultValue: { summary: 'no-content' },
      },
    },
  },
  decorators: [withDesign],
} as Meta<typeof BaseHeading>

const HeadingsTemplate: StoryFn<typeof BaseHeading> = (args) => ({
  components: { BaseHeading },
  setup() {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    return { args, headings, CONTENT }
  },
  template: `
    <div class="twc-space-y-8">
      <div class="twc-space-y-2" v-for="(heading, index) in headings">
        <div class="twc-text-xs twc-font-medium twc-leading-4 twc-text-gray-500">Heading {{ index + 1 }}</div>
        <BaseHeading :type="heading">{{ CONTENT }}</BaseHeading>
      </div>
    </div>
  `,
})

export const Default = HeadingsTemplate.bind({})

export const DefaultMobile = HeadingsTemplate.bind({})
DefaultMobile.parameters = {
  viewport: {
    defaultViewport: 'sm',
  },
}

export const Playground: StoryFn<typeof BaseHeading> = (args) => ({
  components: { BaseHeading },
  setup() {
    return { args }
  },
  template: `
    <BaseHeading v-bind="args">{{ args.default }}</BaseHeading>
  `,
})
