import { Story, Meta } from '@storybook/vue3'
import BaseBadge from './BaseBadge.vue'
import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/vue/solid'

import { BaseBadgeProps } from './BaseBadgeTypes'

export default {
  title: 'Design System/Badge',
  component: BaseBadge,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=278%3A2087',
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'danger', 'warning'],
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    dot: {
      control: {
        type: 'boolean',
        default: false,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rounded: {
      control: {
        type: 'boolean',
        default: false,
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    default: {
      // not a prop!
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
  },
} as Meta

const AllTemplate: Story<BaseBadgeProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseBadge, ArrowSmUpIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <table>
  <thead>
    <tr>
      <th>
        Default
      </th>
      <th>
        Dot
      </th>
      <th>
        Rounded
      </th>
      <th>
        Rounded Dot
      </th>
      <th>
        Rounded + Icon
      </th>
    </tr>

  </thead>
  <tr>
    <td class="twc-p-2">
      <div class="twc-flex twc-justify-center">
        <BaseBadge :variant="args.variant"><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="twc-p-2">
      <div class="flex justify-center">
        <BaseBadge :variant="args.variant" dot><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="twc-p-2">
      <div class="flex justify-center">
        <BaseBadge :variant="args.variant" rounded><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="twc-p-2">
      <div class="flex justify-center">
        <BaseBadge :variant="args.variant" rounded dot><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="twc-p-2">
      <div class="twc-flex twc-justify-center">
        <BaseBadge rounded :variant="args.variant">
          <template v-slot>
            <ArrowSmUpIcon :class="['twc-h-4 twc-w-4 twc-mr-1', args.variant === 'default' ? 'twc-text-gray-500' : 'twc-text-'+ args.variant + '-500']" />{{args.default}}
          </template>
        </BaseBadge>
      </div>
    </td>

  </tr>
  <tr>
    <td class="twc-p-2">
      <div class="twc-flex twc-justify-center">
        <BaseBadge :variant="args.variant" size="small"><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="p-2">
      <div class="twc-flex twc-justify-center">
        <BaseBadge :variant="args.variant" dot size="small"><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="p-2">
      <div class="flex justify-center">
        <BaseBadge :variant="args.variant" rounded size="small"><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="p-2">
      <div class="flex justify-center">
        <BaseBadge :variant="args.variant" rounded dot size="small"><template v-slot>{{args.default}}</template></BaseBadge>
      </div>
    </td>
    <td class="p-2">
      <div class="twc-flex twc-justify-center">
        <BaseBadge :variant="args.variant" rounded size="small">
          <template v-slot>
            <ArrowSmUpIcon :class="['twc-h-4 twc-w-4 twc-mr-1', args.variant === 'default' ? 'twc-text-gray-500' : 'twc-text-'+ args.variant + '-500']" />{{args.default}}
            </template>
        </BaseBadge>
      </div>
    </td>
  </tr>
</table>
  `,
})

const SingleTemplate: Story<BaseBadgeProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseBadge },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <BaseBadge v-bind="args"><template v-slot>{{args.default}}</template></BaseBadge>
  `,
})

export const AllBadges = AllTemplate.bind({})
AllBadges.args = {
  variant: 'default',
  size: 'large',
}

export const Default = SingleTemplate.bind({})
Default.args = {
  variant: 'default',
  size: 'large',
}

export const Primary = SingleTemplate.bind({})
Primary.args = {
  variant: 'primary',
  size: 'large',
}

export const Success = SingleTemplate.bind({})
Success.args = {
  variant: 'success',
  size: 'large',
}

export const Danger = SingleTemplate.bind({})
Danger.args = {
  variant: 'danger',
  size: 'large',
}

export const Warning = SingleTemplate.bind({})
Warning.args = {
  variant: 'warning',
  size: 'large',
}

const TrendTemplate: Story<BaseBadgeProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseBadge, ArrowSmUpIcon, ArrowSmDownIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div>
      <div class="twc-mb-10">
        <h3 class="twc-mb-2">Positive trend</h3>

        <BaseBadge rounded variant="success" class="twc-mr-2">
          <template v-slot>
            <ArrowSmUpIcon class="twc-h-4 twc-w-4 twc-text-success-500 twc-mr-1 " /> 2.2%
          </template>
        </BaseBadge>

        <BaseBadge rounded size="small" variant="success" class="twc-mr-2">
          <template v-slot>
            <ArrowSmUpIcon class="twc-h-4 twc-w-4 twc-text-success-500  twc-mr-1" /> 2.2%
          </template>
        </BaseBadge>
      </div>

      <div class="twc-mb-10">
        <h3 class="twc-mb-2">Negative trend</h3>

        <BaseBadge rounded small variant="danger" class="twc-mr-2">
          <template v-slot>
            <ArrowSmDownIcon class="twc-h-4 twc-w-4 twc-text-danger-500 twc-mr-1" /> 7.2%
          </template>
        </BaseBadge>

        <BaseBadge rounded size="small" variant="danger" class="twc-mr-2">
          <template v-slot>
            <ArrowSmDownIcon class="twc-h-4 twc-w-4 twc-text-danger-500 twc-mr-1" /> 7.2%
          </template>
        </BaseBadge>
      </div>
    </div>
  `,
})

export const Trend = TrendTemplate.bind({})
