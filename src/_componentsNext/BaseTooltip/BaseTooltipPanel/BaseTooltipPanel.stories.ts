import { Story, StoryFn, Meta } from '@storybook/vue3'
import BaseTooltipPanel from './BaseTooltipPanel.vue'
import { BASE_TOOLTIP_CONTENT_DIRECTION } from './BaseTooltipPanel.types'

const CONTENT = 'Tooltip Content'

export default {
  title: 'Design System Next/Tooltip/TooltipPanel',
  component: BaseTooltipPanel,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=751%3A8634',
    },
  },
  argTypes: {
    direction: {
      defaultValue: BASE_TOOLTIP_CONTENT_DIRECTION.TOP,
      control: {
        type: 'select',
        options: Object.values(BASE_TOOLTIP_CONTENT_DIRECTION),
      },
    },
    arrowSize: {
      defaultValue: 8,
      control: {
        type: 'number',
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
} as Meta<typeof BaseTooltipPanel>

const Template: Story<any> = () => ({
  components: { BaseTooltipPanel },
  setup() {
    const variations = [
      {
        name: 'Top',
        placement: 'top',
      },
      {
        name: 'Bottom',
        placement: 'bottom',
      },
      {
        name: 'Right',
        placement: 'right',
      },
      {
        name: 'Left',
        placement: 'left',
      },
    ]

    return { variations, CONTENT }
  },
  template: `
    <div class="twc-space-y-8">
      <BaseTooltipPanel direction="bottom">
        {{ CONTENT }}
      </BaseTooltipPanel>

      <BaseTooltipPanel direction="top">
        {{ CONTENT }}
      </BaseTooltipPanel>


      <BaseTooltipPanel direction="right">
        {{ CONTENT }}
      </BaseTooltipPanel>

      <BaseTooltipPanel direction="left">
        {{ CONTENT }}
      </BaseTooltipPanel>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const Playground: StoryFn<any> = (args) => ({
  components: {
    BaseTooltipPanel,
  },
  setup() {
    return { args }
  },
  template: `
    <BaseTooltipPanel v-bind="args">
      {{ args.default }}
    </BaseTooltipPanel>
  `,
})

Playground.args = {
  arrowSize: 8,
}
