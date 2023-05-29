import { Story, StoryFn, Meta } from '@storybook/vue3'
import { expect } from '@storybook/jest'
import { within, userEvent, screen } from '@storybook/testing-library'
import { sleep } from '../../_tests/utils'

import BaseBadge from '../BaseBadge/BaseBadge.vue'
import BaseTooltip from './BaseTooltip.vue'
import {
  BaseTooltipProps,
  BASE_TOOLTIP_PLACEMENT,
} from '../../_componentsNext/BaseTooltip/BaseTooltip.types'

export default {
  title: 'Design System Next/Tooltip',
  component: BaseTooltip,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4299%3A8478&t=JGyw6iv5HxhXEzjg-0',
    },
  },
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: Object.values(BASE_TOOLTIP_PLACEMENT),
      },
      table: {
        type: { summary: Object.values(BASE_TOOLTIP_PLACEMENT).join('|') },
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    isOpen: {
      defaultValue: undefined,
      control: {
        type: 'boolean',
      },
    },
    delay: {
      control: {
        type: 'object',
        show: {
          control: {
            type: 'number',
          },
        },
        hide: {
          control: {
            type: 'number',
          },
        },
      },
    },
  },
} as Meta<typeof BaseTooltip>

const argsDefault: BaseTooltipProps = {
  placement: BASE_TOOLTIP_PLACEMENT.TOP,
  label: 'Hello world',
  isOpen: undefined,
  delay: {
    show: 10,
    hide: 100,
  },
}

const Template: Story<any> = () => ({
  components: { BaseBadge, BaseTooltip },
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
        name: 'Left',
        placement: 'left',
      },
      {
        name: 'Right',
        placement: 'right',
      },
    ]

    return { variations }
  },
  template: `
    <div class="twc-p-30 twc-space-x-16 twc-mx-auto">
      <BaseTooltip :placement="item.placement" v-for="item in variations" :key="item.placement">
        <BaseBadge variant="info">
          <span class="twc-cursor-default">
            {{ item.name }}
          </span>
        </BaseBadge>
        <template #Content>
          Hello world <br />
          Demo content!
        </template>
      </BaseTooltip>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const WithExternalControl: StoryFn<any> = (args) => ({
  components: {
    BaseBadge,
    BaseTooltip,
  },
  setup() {
    return { args }
  },
  template: `
    <BaseTooltip v-bind="args">
      <BaseBadge variant="info">
        <span class="twc-cursor-default">
          Hover Me
        </span>
      </BaseBadge>
    </BaseTooltip>
  `,
})

WithExternalControl.args = {
  ...argsDefault,
  isOpen: true,
}

export const WithCustomContent: StoryFn<any> = (args) => ({
  components: {
    BaseBadge,
    BaseTooltip,
  },
  setup() {
    return { args }
  },
  template: `
    <BaseTooltip v-bind="args">
      <BaseBadge variant="info">
        <span class="twc-cursor-default">
          Hover Me
        </span>
      </BaseBadge>
      <template #Content>
        Hello <span class="twc-font-medium twc-text-danger-600 ">world</span>
      </template>
    </BaseTooltip>
  `,
})

WithCustomContent.args = {
  ...argsDefault,
  label: undefined,
}

export const Playground: StoryFn<any> = (args) => ({
  components: {
    BaseBadge,
    BaseTooltip,
  },
  setup() {
    return { args }
  },
  template: `
    <BaseTooltip v-bind="args">
      <BaseBadge variant="info">
        <span class="twc-cursor-default">
          Hover Me
        </span>
      </BaseBadge>
    </BaseTooltip>
  `,
})

Playground.args = {
  ...argsDefault,
}

export const Tests: StoryFn<any> = (args) => ({
  components: {
    BaseBadge,
    BaseTooltip,
  },
  setup() {
    return { args }
  },
  template: `
    <BaseTooltip :placement="args.placement" :label="args.label">
      <BaseBadge variant="info">
        <span class="twc-cursor-default">
          Hover Me
        </span>
      </BaseBadge>
      <template #Content>
        {{ args.default }}
      </template>
    </BaseTooltip>
  `,
})

Tests.args = {
  ...argsDefault,
}

Tests.play = async ({ canvasElement, done }) => {
  const canvas = within(canvasElement)

  const triggerEl = canvas.getByText('Hover Me')
  const tooltipContentElBeforeHover = canvas.queryByText(argsDefault.label)

  await expect(tooltipContentElBeforeHover).not.toBeInTheDocument()

  await userEvent.hover(triggerEl)

  const tooltipContentEl = await canvas.findByText(argsDefault.label)

  await expect(tooltipContentEl).toBeInTheDocument()

  await userEvent.unhover(triggerEl)

  // Wait until animation completes
  await sleep(500)

  const tooltipContentElAfterMouseLeave = canvas.queryByText(argsDefault.label)
  await expect(tooltipContentElAfterMouseLeave).toBeNull()
}
