import { Story, Meta } from '@storybook/vue3'
import BaseBadge from '../BaseBadge/BaseBadge.vue'
import BaseTooltip from './BaseTooltip.vue'

export default {
  title: 'Design System/Tooltip (WIP)',
  component: BaseTooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: {
        type: 'position',
        options: [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
        ],
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'light'],
      },
    },
  },
} as Meta

const Template: Story<any> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  components: { BaseBadge, BaseTooltip },
  setup() {
    const variations = [
      {
        name: 'Top start',
        position: 'top-start',
      },
      {
        name: 'Top',
        position: 'top',
      },
      {
        name: 'Top end',
        position: 'top-end',
      },

      {
        name: 'Bottom',
        position: 'bottom',
      },
      {
        name: 'Bottom start',
        position: 'bottom-start',
      },
      {
        name: 'Bottom end',
        position: 'bottom-end',
      },

      {
        name: 'Right start',
        position: 'right-start',
      },
      {
        name: 'Right',
        position: 'right',
      },
      {
        name: 'Right end',
        position: 'right-end',
      },
      {
        name: 'Left',
        position: 'left',
      },
      {
        name: 'Left start',
        position: 'left-start',
      },
      {
        name: 'Left end',
        position: 'left-end',
      },
    ]

    return { variations, args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="twc-p-4 twc-bg-gray-100 twc-mb-8 twc-rounded-lg twc-grid twc-grid-cols-6 twc-w-full twc-mx-auto">
      <div v-for="item in variations" :key="item.position" class="twc-p-8">
        <BaseTooltip :position="item.position" :variant="args.variant">
          <BaseBadge variant="warning" size="small">
            <span class="twc-cursor-default">
              {{ item.name }}
            </span>
          </BaseBadge>
          <template #content>
            Hello world <br />
            Demo content!
          </template>
        </BaseTooltip>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
}
