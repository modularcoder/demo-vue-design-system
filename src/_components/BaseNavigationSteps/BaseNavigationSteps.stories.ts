import { Meta, Story } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'

import BaseNavigationSteps from './BaseNavigationSteps.vue'
import { BaseNavigationStepsProps } from './BaseNavigationStepsTypes'

export default {
  title: 'Design System/Navigation Steps',
  component: BaseNavigationSteps,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=590%3A3443',
    },
  },
} as Meta

const Template: Story<BaseNavigationStepsProps> = (args) => ({
  components: { BaseNavigationSteps },
  setup() {
    return { args }
  },
  template: `<BaseNavigationSteps v-bind="args"></BaseNavigationSteps>`,
})

export const Default = Template.bind({})

Default.args = {
  steps: [
    {
      id: '1',
      name: 'Step One',
      description: 'Here is step one description (completed)',
      isDisabled: false,
      isVisible: true,
      isCompleted: true,
      isActive: false,
      onClick: () => action('step one!')(),
    },
    {
      id: '2',
      name: 'Step Two',
      description: 'Here is step two description (active)',
      isDisabled: false,
      isVisible: true,
      isCompleted: false,
      isActive: true,
      onClick: () => action('step two!')(),
    },
    {
      id: '3',
      name: 'Step Three',
      description: 'Here is step three description (default)',
      isDisabled: false,
      isVisible: true,
      isCompleted: false,
      onClick: () => action('step three!')(),
    },

    {
      id: '4',
      name: 'Step four',
      description: 'Here is step four description (disabled)',
      isDisabled: true,
      isVisible: true,
      isCompleted: false,
      onClick: () => action('step four!')(),
    },

    {
      id: '5',
      name: 'Step five',
      description: 'Here is step five description (disabled and completed)',
      isDisabled: true,
      isVisible: true,
      isCompleted: true,
      onClick: () => action('step five!')(),
    },
    {
      id: '6',
      name: 'Step six',
      description: 'Here is step five description (not visible)',
      isDisabled: false,
      isVisible: false,
      isCompleted: false,
      onClick: () => action('step six!')(),
    },
  ],
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  steps: [
    {
      id: '1',
      name: 'Step One',
      isDisabled: false,
      isVisible: true,
      isCompleted: true,
      isActive: false,
      onClick: () => action('step one!')(),
    },
    {
      id: '2',
      name: 'Step Two',
      isDisabled: false,
      isVisible: true,
      isCompleted: false,
      isActive: true,
      onClick: () => action('step two!')(),
    },
    {
      id: '3',
      name: 'Step Three',
      isDisabled: false,
      isVisible: true,
      isCompleted: false,
      onClick: () => action('step three!')(),
    },

    {
      id: '4',
      name: 'Step four',
      isDisabled: true,
      isVisible: true,
      isCompleted: false,
      onClick: () => action('step four!')(),
    },

    {
      id: '5',
      name: 'Step five',
      isDisabled: true,
      isVisible: true,
      isCompleted: true,
      onClick: () => action('step five!')(),
    },
    {
      id: '6',
      name: 'Step six',
      isDisabled: false,
      isVisible: false,
      isCompleted: false,
      onClick: () => action('step six!')(),
    },
  ],
}
