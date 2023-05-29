import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardCopyIcon,
  DotsVerticalIcon,
  PencilAltIcon,
} from '@heroicons/vue/solid'
import { StoryFn } from '@storybook/vue3'
import { BaseDropdown, BaseDropdownPanel, BaseDropdownTrigger } from '..'
import { BaseMenu, BaseMenuItem } from '../../BaseMenu'
import { BaseButton } from '../../BaseButton'

const argTypes = {
  is: {
    description:
      'The element or component the BaseDropdownButton should render as',
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
  component: BaseDropdownTrigger,
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
      DotsVerticalIcon,
      PencilAltIcon,
      ClipboardCopyIcon,
      ChevronDownIcon,
      ChevronUpIcon,
    },
    setup: () => {
      return {
        args,
        ChevronDownIcon,
        ChevronUpIcon,
        BaseButton,
        BaseMenu,
        menuItems,
      }
    },
    template: `
      <div
        data-test-id="outside"
        style="width: 100%; height: 720px"
        class="twc-flex twc-justify-center twc-items-start twc-p-4"
      >
        <BaseDropdown v-slot="{ isOpen, close }">
          <BaseDropdownTrigger
            v-bind="args"
            :icon-trailing="isOpen ? ChevronUpIcon : ChevronDownIcon"
          >
            {{args.default}}
          </BaseDropdownTrigger>
          <BaseDropdownPanel
            :is="BaseMenu"
          >
            <BaseMenuItem
              v-for="item in menuItems"
              :key="item"
              @click="close"
            >
                {{ item }}
            </BaseMenuItem>
          </BaseDropdownPanel>
        </BaseDropdown>
      </div>
    `,
  }
}

export const DropdownTrigger = Template.bind({})

DropdownTrigger.args = {
  default: 'Custom button',
  is: BaseButton,
  disabled: false,
  variant: 'primary',
}
DropdownTrigger.parameters = {
  chromatic: { delay: 1000 },
  viewports: [1280],
}
