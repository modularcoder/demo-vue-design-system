import { Meta, StoryFn } from '@storybook/vue3'
import BaseFieldLabel from './BaseFieldLabel.vue'
import argTypes from './BaseFieldLabel.stories.argTypes'

export default {
  title: 'Design System Next/Form/Field/FieldLabel',
  component: BaseFieldLabel,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4822%3A7797&t=Q6sha3pSNkSngYpT-0',
    },
  },
  argTypes,
} as Meta<typeof BaseFieldLabel>

const PlaygroundTemplate: StoryFn<typeof BaseFieldLabel> = (args) => ({
  components: {
    BaseFieldLabel,
  },
  setup() {
    return {
      args,
    }
  },
  template: `
    <BaseFieldLabel v-bind="args" />
  `,
})

export const Playground = PlaygroundTemplate.bind({})

Playground.args = {
  label: 'hello',
  labelHint: 'world',
  required: true,
}
