import { PencilAltIcon } from '@heroicons/vue/solid'
import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/vue3'
import BaseMenuItem from './BaseMenuItem.vue'
import { BaseMenuItemProps, BASE_MENU_ITEM_TAG } from './BaseMenuItem.types'
import { withDesign } from 'storybook-addon-designs'

const argTypes = {
  id: {
    table: {
      type: { summary: 'string|number' },
    },
  },
  title: {
    type: { name: 'string', required: true },
    defaultValue: 'Add to favorites',
    description: 'Sets the item title text',
    table: { type: { summary: 'string' } },
    control: {
      type: 'text',
    },
  },
  description: {
    type: { name: 'string', required: false },
    defaultValue: undefined,
    table: { type: { summary: 'string' } },
    description: 'Sets the description text of the item',
    control: {
      type: 'text',
    },
  },
  icon: {
    defaultValue: PencilAltIcon,
    description: 'Sets the icon',
    table: { type: { summary: 'Component' } },
  },
  to: {
    type: { name: 'string', required: false },
    defaultValue: undefined,
    table: { type: { summary: 'string|object' } },
    description:
      'Sets the item as a router-link and acts as "to" attribute of the item',
    control: {
      type: 'text',
    },
  },
  tag: {
    table: {
      type: { summary: Object.values(BASE_MENU_ITEM_TAG).join('|') },
    },
    control: {
      type: 'select',
      options: Object.values(BASE_MENU_ITEM_TAG),
    },
  },
  href: {
    table: {
      type: { summary: 'string' },
    },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    table: {
      type: { summary: 'boolean' },
    },
    defaultValue: false,
    description: 'Makes the item disabled (will disable keyboard navigation)',
    control: {
      type: 'boolean',
    },
  },
}

const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=42%3A378',
}

export default {
  title: 'Design System Next/Menu/MenuItem',
  component: BaseMenuItem,
  parameters: {
    layout: 'centered',
    design,
  },
  argTypes,
  decorators: [withDesign],
} as Meta<BaseMenuItemProps>

const Template: StoryFn<BaseMenuItemProps> = (args) => ({
  components: { BaseMenuItem, PencilAltIcon },
  setup() {
    const handleClick = (key: any) => action('@click')(key)

    return { args, handleClick }
  },
  template: `
    <ul class="twc-list-none">
      <BaseMenuItem @click="handleClick(args.id)" v-bind="args"/>
    </ul>
  `,
})

const StatesTemplate: StoryFn<BaseMenuItemProps> = (args) => ({
  components: { BaseMenuItem, PencilAltIcon },
  setup() {
    const handleClick = (key: any) => action('@click')(key)

    return { ...args, handleClick }
  },
  template: `
  <div class="twc-flex twc-gap-10">
    <div class="twc-h-fit">
      <h3 class="twc-mb-3">default</h3>
      <BaseMenuItem @click="handleClick(id)" :title="title"/>
    </div>
    <div class="twc-h-fit">
      <h3 class="twc-mb-3">hovered</h3>
      <BaseMenuItem @click="handleClick(id)" class="__hovered" :title="title"/>
    </div>
    <div class="twc-h-fit">
      <h3 class="twc-mb-3">disabled</h3>
      <BaseMenuItem :title="title" disabled/>
    </div>
  </div>
  `,
})

const defaultArgs = {
  id: 'add',
  title: 'Add to favorites',
}
const description = 'Set preferences for your account'
const icon = PencilAltIcon

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...defaultArgs,
  icon,
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  ...defaultArgs,
  description,
}

export const WithIconAndDescription = Template.bind({})
WithIconAndDescription.args = {
  ...defaultArgs,
  description,
  icon,
}

export const States = StatesTemplate.bind({})
States.args = {
  ...defaultArgs,
  icon,
}
States.parameters = {
  pseudo: {
    hover: ['.__hovered'],
  },
}

export const Playground: StoryFn<BaseMenuItemProps> = (args) => ({
  components: { BaseMenuItem },
  setup() {
    return { args }
  },
  template: `
    <BaseMenuItem v-bind="args"/>
  `,
})
