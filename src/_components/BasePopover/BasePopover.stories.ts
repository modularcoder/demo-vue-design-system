import { Story, Meta } from '@storybook/vue3'
import BaseBadge from '../BaseBadge/BaseBadge.vue'
import BasePopover from './BasePopover.vue'

export default {
  title: 'Design System/Popover',
  component: BasePopover,
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
  },
} as Meta

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

const Template: Story<any> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  components: { BaseBadge, BasePopover },
  setup() {
    return { variations, args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="twc-p-4 twc-bg-gray-100 twc-mb-8 twc-rounded-lg twc-grid twc-grid-cols-6 twc-w-full twc-mx-auto">
      <div v-for="item in variations" :key="item.placement" class="twc-p-8">
        <BasePopover :placement="item.placement" :variant="args.variant">
          <BaseBadge variant="warning" size="small">
            <span class="twc-cursor-default">
              {{ item.name }}
            </span>
          </BaseBadge>
          <template #content>
            <div class="twc-max-w-[300px]">
              <h6 class="twc-mb-1">Header</h6>
              <p class="twc-mb-2">
                Morbi sit varius nam cras felis eu dolor nunc. Scelerisque nisl in porttitor laoreet dolor at lorem.
              </p>
              <h6 class="twc-mb-1">Header</h6>
              <p class="twc-mb-2">
                Morbi sit varius nam cras felis eu dolor nunc. Scelerisque nisl in porttitor laoreet dolor at lorem.
              </p>
              <h6 class="twc-mb-1">Header</h6>
              <p class="twc-mb-2">
                Morbi sit varius nam cras felis eu dolor nunc. Scelerisque nisl in porttitor laoreet dolor at lorem.
              </p>
            </div>
          </template>
        </BasePopover>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

export const AdvancedLayout: Story<any> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  // The story's `args` need to be mapped into the template through the `setup()` method
  components: { BaseBadge, BasePopover },
  setup() {
    const fields = [
      {
        label: 'Name',
        content: 'Wave Spike',
      },
      {
        label: 'Artist',
        content: 'Golden Mercury',
      },
      {
        label: 'ISRC',
        content: 'DEA811500600',
      },
      {
        label: 'Version',
        content: 'TRACK_RELEASE',
      },
      {
        label: 'Release title',
        content: 'Wave Spike',
      },
      {
        label: 'Release date',
        content: 'Oct 20, 2021',
      },
      {
        label: 'GRid',
        content: 'A10301A00034147920',
      },
      {
        label: 'ICPN (UPC or EAN)',
        content: '886445502787',
      },
      {
        label: 'Custom ID',
        content: '—',
      },
      {
        label: 'Linked composition(s)',
        content: '—',
      },
      {
        label: 'Asset type',
        content: 'Sound recording',
      },
      {
        label: 'Pex ID',
        content: '225218393350997504',
      },
      {
        label: 'Contributing orgs',
        content: '4',
      },
      {
        label: 'Collections',
        content: '1',
      },
    ]

    return { variations, fields, args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="twc-p-4 twc-bg-gray-100 twc-mb-8 twc-rounded-lg twc-grid twc-grid-cols-6 twc-w-full twc-mx-auto">
      <div v-for="item in variations" :key="item.placement" class="twc-p-8">
        <BasePopover :placement="item.placement" :variant="args.variant">
          <BaseBadge variant="warning" size="small">
            <span class="twc-cursor-default">
              {{ item.name }}
            </span>
          </BaseBadge>
          <template #content>
            <dl>
              <div class="twc-mb-2 twc-grid twc-grid-cols-2 twc-gap-4" v-for="field in fields">
                <dt class="twc-font-medium">{{ field.label }}</dt>
                <dd class="twc-font-normal">{{ field.content }}</dd>
              </div>
            </dl>
          </template>
        </BasePopover>
      </div>
    </div>
  `,
})
