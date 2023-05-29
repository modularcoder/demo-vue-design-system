import { ChevronDownIcon, XIcon } from '@heroicons/vue/solid'
import { StoryFn } from '@storybook/vue3'
import { BaseDropdown, BaseDropdownPanel, BaseDropdownTrigger } from '..'
import { BaseMenu, BaseMenuItem } from '../../BaseMenu'
import { BaseButton } from '../../BaseButton'

const argTypes = {
  is: {
    description:
      'The element or component the BaseDropdownPanel should render as.',
    control: {
      type: ['text', 'Component'],
    },
    table: {
      type: { summary: ['string', 'Component'].join('|') },
    },
  },

  // Slots
  default: {
    name: 'Default',
    description: 'The default slot',
  },
}

export default {
  title: 'Design System Next/Dropdown /Components',
  component: BaseDropdownPanel,
  argTypes,
}

const menuItems = [
  'Edit',
  'Add',
  'Share',
  'Settings',
  'Add to favorite',
  'Logout',
]

const Template: StoryFn = (args) => {
  return {
    components: {
      BaseDropdown,
      BaseDropdownPanel,
      BaseDropdownTrigger,
      BaseButton,
      BaseMenu,
      BaseMenuItem,
      ChevronDownIcon,
      XIcon,
    },
    setup: () => {
      return { args, ChevronDownIcon, XIcon, BaseButton, menuItems, BaseMenu }
    },
    template: `
      <div
        style="width: 100%; height: 720px"
        class="twc-flex twc-justify-center twc-items-start twc-p-4"
      >
        <BaseDropdown v-bind="args" v-slot="{ close }">
          <BaseDropdownTrigger
            :is="BaseButton"
            :icon-trailing="ChevronDownIcon"
          >
            Options
          </BaseDropdownTrigger>
          <BaseDropdownPanel class="twc-rounded twc-p-2 twc-border twc-border-gray-300">
            I am a panel <BaseButton @click="close" size="xs" class="twc-min-w-0"> close </BaseButton>
          </BaseDropdownPanel>
        </BaseDropdown>
      </div>
    `,
  }
}
export const DropdownPanel = Template.bind({})

DropdownPanel.args = {}
DropdownPanel.parameters = {
  chromatic: { delay: 1000 },
  viewports: [1280],
}
