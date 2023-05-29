import { Story, Meta } from '@storybook/vue3'
import BaseBadge from '../BaseBadge/BaseBadge.vue'
import BaseTooltip from './BaseTooltip.vue'

export default {
  title: 'Design System/Tooltip',
  component: BaseTooltip,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=751%3A8634',
    },
  },
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          'auto',
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
        placement: 'top-start',
      },
      {
        name: 'Top',
        placement: 'top',
      },
      {
        name: 'Top end',
        placement: 'top-end',
      },

      {
        name: 'Bottom',
        placement: 'bottom',
      },
      {
        name: 'Bottom start',
        placement: 'bottom-start',
      },
      {
        name: 'Bottom end',
        placement: 'bottom-end',
      },

      {
        name: 'Right start',
        placement: 'right-start',
      },
      {
        name: 'Right',
        placement: 'right',
      },
      {
        name: 'Right end',
        placement: 'right-end',
      },
      {
        name: 'Left',
        placement: 'left',
      },
      {
        name: 'Left start',
        placement: 'left-start',
      },
      {
        name: 'Left end',
        placement: 'left-end',
      },
    ]

    return { variations, args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="twc-p-4 twc-bg-gray-100 twc-mb-8 twc-rounded-lg twc-grid twc-grid-cols-6 twc-w-full twc-mx-auto">
      <div v-for="item in variations" :key="item.placement" class="twc-p-8">
        <BaseTooltip :placement="item.placement" :variant="args.variant">
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

export const Light = Template.bind({})
Light.args = {
  variant: 'light',
}
