import { StoryFn, Meta, Story } from '@storybook/vue3'
import BaseMenu from './BaseMenu.vue'
import { defaultItems, profileItems } from './BaseMenu.mocks'
import { BaseMenuSection } from './BaseMenuSection'
import { BaseMenuItem } from './BaseMenuItem'
import { action } from '@storybook/addon-actions'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'Design System Next/Menu',
  component: BaseMenu,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=4230%3A7598&t=ACo3dA3vU10B1RN1-0',
    },
  },
  argTypes: {
    onClick: { action: '@click' },
  },
} as Meta<typeof BaseMenu>

const DefaultTemplate: StoryFn<typeof BaseMenu> = (args) => ({
  components: { BaseMenu, BaseMenuItem },
  setup() {
    const onClick = (item: string) => args.onClick(item)

    return { ...args, onClick }
  },
  template: `
    <div class="twc-space-y-10" >
      <BaseMenu>
        <BaseMenuItem v-for="item in defaultItems" :id="item.id" :title="item.title" @click="onClick(item.id)" />
      </BaseMenu>
    </div>
  `,
})

const SectionsTemplate: StoryFn<typeof BaseMenu> = (args) => ({
  components: {
    BaseMenu,
    BaseMenuSection,
    BaseMenuItem,
  },
  setup() {
    const onClick = (key: any) => args.onClick(key)

    return { ...args, onClick }
  },
  template: `
      <BaseMenu class="twc-divide-y twc-divide-gray-100">
        <BaseMenuSection heading="Profile">
          <BaseMenuItem
            v-for="item in profileItems"
            :title="item.title"
            :id="item.id"
            :icon="item.icon"
            @click="onClick(item.id)"
          />
        </BaseMenuSection>
        <BaseMenuSection heading="Organization">
          <BaseMenuItem id="settings" title="Settings" @click="onClick('settings')"/>
          <BaseMenuItem tag="router-link" to="{}" id="docs" title="Docs" @click="onClick('docs')"/>
          <BaseMenuItem id="users" title="Users" @click="onClick('users')"/>
        </BaseMenuSection>
        <BaseMenuSection heading="Account">
          <BaseMenuItem id="help" title="Help" description="Contact support team" @click="onClick('help')"/>
          <BaseMenuItem id="logout" title="Log out" @click="onClick('logout')"/>
        </BaseMenuSection>
      </BaseMenu>
  `,
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  defaultItems,
}

export const WithSections = SectionsTemplate.bind({})
WithSections.args = {
  profileItems,
}

const TestTemplate: Story<
  typeof BaseMenu & {
    onClick: jest.MockedFn<() => void>
  }
> = (args) => ({
  components: {
    BaseMenu,
    BaseMenuSection,
    BaseMenuItem,
  },
  setup() {
    const onClick = (key: any) => args.onClick(key)

    return { ...args, onClick }
  },
  template: `
      <BaseMenu class="twc-divide-y twc-divide-gray-100">
          <BaseMenuItem id="settings" title="Settings" @click="onClick('settings')"/>
          <BaseMenuItem tag="router-link" to="{}" id="docs" title="Docs" @click="onClick('docs')"/>
          <BaseMenuItem id="users" title="Users" @click="onClick('users')"/>
      </BaseMenu>
  `,
})

export const InteractionTest = TestTemplate.bind({})
InteractionTest.args = {}
InteractionTest.parameters = {
  chromatic: { delay: 1000 },
  viewports: [1280],
}
InteractionTest.play = async ({ canvasElement, args }) => {
  const { getByText } = within(canvasElement)

  // keyboard navigation
  await userEvent.keyboard('{ArrowDown}')
  await expect(getByText('Settings').closest('li')).toHaveFocus()

  await userEvent.keyboard('{ArrowRight}')
  await expect(getByText('Docs').closest('router-link')).toHaveFocus()

  await userEvent.keyboard('{ArrowDown}')
  await expect(getByText('Users').closest('li')).toHaveFocus()

  await userEvent.keyboard('{ArrowUp}')
  await expect(getByText('Docs').closest('router-link')).toHaveFocus()

  await userEvent.keyboard('{ArrowLeft}')
  const SettingsOption = getByText('Settings').closest('li')
  await expect(SettingsOption).toHaveFocus()

  // keyboard selection
  await userEvent.type(SettingsOption, '{Space}')

  await waitFor(
    async () =>
      await expect(args.onClick).toHaveBeenNthCalledWith(1, 'settings'),
  )

  args.onClick.mockClear()

  await userEvent.type(SettingsOption, '{Enter}')
  await waitFor(
    async () =>
      await expect(args.onClick).toHaveBeenNthCalledWith(1, 'settings'),
  )
}
