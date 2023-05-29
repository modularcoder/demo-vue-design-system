import { Meta, StoryFn } from '@storybook/vue3'
import { waitFor, within } from '@storybook/testing-library'
import { withDesign } from 'storybook-addon-designs'
import { BaseDropdown, BaseDropdownPanel, BaseDropdownTrigger } from '.'
import { BaseMenu, BaseMenuItem, BaseMenuSection } from '../BaseMenu'
import { BaseButton } from '../BaseButton'
import {
  DotsVerticalIcon,
  PencilAltIcon,
  ChevronDownIcon,
  ClipboardCopyIcon,
} from '@heroicons/vue/solid'
import {
  positionPlacement,
  positionBehavior,
  BaseDropdownProps,
} from './BaseDropdown.types'

import { userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { BaseCheckbox } from '../Form/BaseCheckbox'
const design = {
  type: 'figma',
  url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=6621%3A9431&t=8H7vNa2mB57o3WE0-4',
}

const argTypes = {
  onChange: {
    action: '@change',
    description:
      '`@change` event triggered when the dropdown open state changes.',
  },
  placement: {
    description: 'Sets the preferred placement of the dropdown',
    control: {
      type: 'select',
      options: positionPlacement,
    },
    table: {
      type: { summary: positionPlacement.join('|') },
    },
  },
  behavior: {
    description: 'Sets the preferred behavior of the dropdown',
    control: {
      type: 'select',
      options: positionBehavior,
    },
    table: {
      type: { summary: positionBehavior.join('|') },
    },
  },
  teleportTarget: {
    description:
      'A selector for which the dropdown should mount on (teleport target)',
    control: { type: 'text' },
    table: {
      type: { summary: 'string' },
    },
  },
  // Slot props
  isOpen: {
    name: 'isOpen',
    description:
      'Slot prop indicates whether the dropdown is open or not `v-slot="{ isOpen }"`.',
    table: {
      type: { summary: 'boolean' },
    },
  },
  close: {
    name: 'close',
    description:
      'Slot prop closes the dropdown when calling  `v-slot="{ close }"`.',
    table: {
      type: { summary: 'function' },
    },
  },
}

export default {
  title: 'Design System Next/Dropdown ',
  component: BaseDropdown,
  parameters: {
    design,
  },
  decorators: [withDesign],
  argTypes,
} as Meta

const menuItems = [
  { title: 'Edit' },
  { title: 'Add' },
  { title: 'Share' },
  { title: 'Settings' },
  { title: 'Add to favorite' },
  { title: 'Logout' },
]

const profileItems = [
  {
    id: 'edit',
    title: 'Edit',
  },
  {
    id: 'duplicate',
    title: 'Duplicate',
  },
  {
    id: 'share',
    title: 'Share',
  },
]

type StoryType = StoryFn<
  BaseDropdownProps & {
    onChange: any
  }
>

const menuTemplate: StoryType = (args) => {
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
    },
    setup: () => {
      return { args, ChevronDownIcon, BaseButton, menuItems, BaseMenu }
    },
    template: `
      <div
        data-test-id="outside"
        style="width: 100%; height: 720px"
        class="twc-flex twc-justify-center twc-items-start twc-p-4"
      >
        <BaseDropdown v-bind="args" v-slot="{ close }">
          <BaseDropdownTrigger
            :is="BaseButton"
            data-test-id="trigger"
            :icon-trailing="ChevronDownIcon"
          >
            Options
          </BaseDropdownTrigger>
          <BaseDropdownPanel
            :is="BaseMenu"
          >
            <BaseMenuItem
              v-for="item in menuItems"
              :key="item.title"
              :title="item.title"
              @click="close"
            />
          </BaseDropdownPanel>
        </BaseDropdown>
      </div>
    `,
  }
}

export const Menu = menuTemplate.bind({})

Menu.args = {}
Menu.parameters = {
  chromatic: { delay: 1500 },
  viewports: [1280],
}
Menu.play = async ({ canvasElement, args }) => {
  const { getByTestId } = within(canvasElement)

  const trigger = getByTestId('trigger')

  await userEvent.click(trigger)
}

const withSectionsTemplate: StoryType = (args) => ({
  components: {
    BaseDropdown,
    BaseDropdownPanel,
    BaseDropdownTrigger,
    BaseButton,
    BaseMenu,
    BaseMenuItem,
    BaseMenuSection,
    DotsVerticalIcon,
    PencilAltIcon,
    ClipboardCopyIcon,
    ChevronDownIcon,
  },
  setup: () => {
    return {
      args,
      ChevronDownIcon,
      BaseButton,
      menuItems,
      BaseMenu,
      profileItems,
    }
  },
  template: `
    <div
      data-test-id="outside"
      style="width: 100%; height: 720px"
      class="twc-flex twc-justify-center twc-items-start twc-p-4"
    >
      <BaseDropdown v-bind="args" v-slot="{ close }">
        <BaseDropdownTrigger
          :is="BaseButton"
          data-test-id="trigger"
          :icon-trailing="ChevronDownIcon"
        >
          Options
        </BaseDropdownTrigger>
        <BaseDropdownPanel
          :is="BaseMenu"
        >
        <BaseMenuSection heading="Profile">
        <BaseMenuItem
          v-for="item in profileItems"
          :title="item.title"
          :id="item.id"
          @click="close"
        />
      </BaseMenuSection>
      <BaseMenuSection heading="Organization">
        <BaseMenuItem id="settings" title="Settings" @click="close"/>
        <BaseMenuItem tag="router-link" to="{}" id="docs" title="Docs" @click="close"/>
        <BaseMenuItem id="users" title="Users" @click="close"/>
      </BaseMenuSection>
      <BaseMenuSection heading="Account">
        <BaseMenuItem id="help" title="Help" description="Contact support team" @click="close"/>
        <BaseMenuItem id="logout" title="Log out" @click="close"/>
      </BaseMenuSection>
        </BaseDropdownPanel>
      </BaseDropdown>
    </div>
  `,
})

export const WithSections = withSectionsTemplate.bind({})
WithSections.args = {}
WithSections.parameters = {
  chromatic: { delay: 1500 },
  viewports: [1280],
}
WithSections.play = async ({ canvasElement, args }) => {
  const { getByTestId } = within(canvasElement)

  const trigger = getByTestId('trigger')

  await userEvent.click(trigger)
}

const customTemplate: StoryType = (args) => {
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
      BaseCheckbox,
    },
    setup: () => {
      return { args, ChevronDownIcon, BaseButton, menuItems }
    },
    template: `
      <div
        data-test-id="outside"
        style="width: 100%; height: 720px"
        class="twc-flex twc-justify-center twc-items-start twc-p-4"
      >
        <BaseDropdown v-slot="{ close }" v-bind="args">
          <BaseDropdownTrigger data-test-id="trigger" :is="BaseButton" :icon-trailing="ChevronDownIcon">
            Options
          </BaseDropdownTrigger>
          <BaseDropdownPanel
            class="twc-w-56 twc-text-sm twc-text-gray-700 twc-rounded twc-border twc-border-gray-100 twc-divide-y twc-shadow focus:twc-outline-none"
          >
            <div class="twc-flex twc-flex-col twc-gap-3 twc-py-3 twc-px-2">
              <BaseCheckbox>Option one</BaseCheckbox>
              <BaseCheckbox>Option two</BaseCheckbox>
              <BaseCheckbox>Option three</BaseCheckbox>
            </div>
            <div class="twc-flex twc-gap-2 twc-justify-end twc-p-2">
              <BaseButton @click="close" size="sm" class="twc-min-w-0"
                >Clear</BaseButton>
                <BaseButton variant="primary" @click="close" size="sm" class="twc-min-w-0"
                >Apply</BaseButton>

            </div>
          </BaseDropdownPanel>
        </BaseDropdown>
      </div>
    `,
  }
}

export const CustomContent = customTemplate.bind({})

CustomContent.args = {}
CustomContent.parameters = {
  chromatic: { delay: 1500 },
  viewports: [1280],
}
CustomContent.play = async ({ canvasElement, args }) => {
  const { getByTestId } = within(canvasElement)

  const trigger = getByTestId('trigger')

  await userEvent.click(trigger)
}

const playgroundTemplate: StoryType = (args) => ({
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
  },
  setup: () => {
    return { args, ChevronDownIcon, BaseButton, menuItems, BaseMenu }
  },
  template: `
    <div
      data-test-id="outside"
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
        <BaseDropdownPanel
          :is="BaseMenu"
        >
          <BaseMenuItem
            v-for="item in menuItems"
            :key="item.title"
            :title="item.title"
            @click="close"
          />
        </BaseDropdownPanel>
      </BaseDropdown>
    </div>
  `,
})

export const Playground = playgroundTemplate.bind({})
Playground.args = {}
Playground.parameters = {
  chromatic: { delay: 1000 },
  viewports: [1280],
}
Playground.play = async ({ canvasElement, args }) => {
  const { getByText, getByTestId } = within(canvasElement)
  const rootCanvas = within(document as any)

  const cleanup = () => {
    args.onChange.mockClear()
  }
  cleanup()
  const openDropdown = async () => {
    await userEvent.click(getByText('Options'))
    await expect(rootCanvas.getByRole('menu')).toBeInTheDocument()
  }

  const expectDropdownClosed = async () => {
    await waitFor(async () => {
      await expect(
        rootCanvas.queryByTestId('dropdown-panel'),
      ).not.toBeInTheDocument()
      await expect(args.onChange).toHaveBeenCalledWith(false)
    })
  }

  // should call @change when clicking on the trigger
  cleanup()
  await openDropdown()
  await expect(args.onChange).toHaveBeenCalledWith(true)

  // should close the dropdown when clicking outside
  cleanup()
  await userEvent.click(getByTestId('outside'))
  await expectDropdownClosed()
  await expect(args.onChange).toHaveBeenCalledWith(false)

  // should close the dropdown when clicking escape key
  cleanup()
  await openDropdown()
  await userEvent.type(canvasElement, '{Escape}')
  await expectDropdownClosed()

  // should close the dropdown when clicking on menu item
  cleanup()
  await openDropdown()
  await userEvent.click(rootCanvas.getByText('Edit'))
  await expectDropdownClosed()
}
