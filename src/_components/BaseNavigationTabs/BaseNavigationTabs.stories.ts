import { Story, Meta } from '@storybook/vue3'
import BaseNavigationTabs from './BaseNavigationTabs.vue'
import { userEvent, within, waitFor } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import {
  BaseNavigationTabType,
  BaseNavigationTabsProps,
} from './BaseNavigationTabsTypes'
import { UserIcon } from '@heroicons/vue/solid'
import { computed, ref } from 'vue'
import { VIEW_PORTS } from '../../../.storybook/viewports'

const tabs: BaseNavigationTabType[] = [
  {
    name: 'tab1',
    displayName: 'Tab 1',
    current: false,
  },
  {
    name: 'tab2',
    displayName: 'Tab 2',
    current: true,
    badge: '11',
  },
  {
    name: 'tab3',
    displayName: 'Tab 3',
    current: false,
    icon: UserIcon,
  },
]
const mainInteraction = async ({ canvasElement, args }) => {
  const { queryAllByTestId } = within(canvasElement)

  // click on the first tab
  await userEvent.click(queryAllByTestId('tab-item')[0])
  await expect(args.onChange).toHaveBeenCalledWith({
    ...tabs[0],
    current: expect.anything(),
  })

  // click on the second tab
  await userEvent.click(queryAllByTestId('tab-item')[1])
  await expect(args.onChange).toHaveBeenCalledWith({
    ...tabs[1],
    current: expect.anything(),
  })

  // click on the third tab
  await userEvent.click(queryAllByTestId('tab-item')[2])
  await expect(args.onChange).toHaveBeenCalledWith({
    ...tabs[2],
    current: expect.anything(),
  })
}

export default {
  title: 'Design System/Navigation Tabs',
  component: BaseNavigationTabs,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=595%3A3422',
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['underline', 'pill'],
    },
    onChange: { action: '@change' },
  },
} as Meta

const Template: Story<
  BaseNavigationTabsProps & {
    onChange: jest.MockedFn<() => void>
  }
> = (args) => ({
  components: { UserIcon, BaseNavigationTabs },
  setup() {
    const currentTab = ref(tabs[0].name)
    const computedTabs = computed(() => [
      {
        ...tabs[0],
        current: currentTab.value === tabs[0].name,
      },
      {
        ...tabs[1],
        current: currentTab.value === tabs[1].name,
      },
      {
        ...tabs[2],
        current: currentTab.value === tabs[2].name,
      },
    ])

    const handleChange = (tab) => {
      currentTab.value = tab.name
    }

    return { args, handleChange, computedTabs }
  },
  template: `
    <BaseNavigationTabs v-bind="args" :tabs="computedTabs" @change="handleChange"/>
  `,
})

export const Underline = Template.bind({})
Underline.args = {
  type: 'underline',
  tabs,
}
Underline.play = mainInteraction

export const Pill = Template.bind({})
Pill.args = {
  type: 'pill',
  tabs,
}
Pill.play = mainInteraction

export const Mobile = Template.bind({})
Mobile.args = {
  type: 'underline',
  tabs,
}
Mobile.parameters = {
  layout: 'fullscreen',
  chromatic: { delay: 2000, viewports: [VIEW_PORTS['2xs'].width] },
  viewport: {
    defaultViewport: '2xs',
  },
}

Mobile.play = async ({ canvasElement, args }) => {
  const { getByRole } = within(canvasElement)

  // waiting for the view port to be applied so that the mobile menu is visible
  await new Promise((res) => setTimeout(res, 2000))
  const el = getByRole('button')
  await expect(el).toBeInTheDocument()

  // select button renders the current tab
  const selectButton = await getByRole('button')
  await expect(selectButton).toHaveTextContent(tabs[0].displayName)

  const selectTab = async (tab: BaseNavigationTabType) => {
    await userEvent.click(selectButton)
    const option = await within(getByRole('listbox')).findByText(
      tab.displayName,
    )
    await userEvent.click(option)
  }

  await selectTab(tabs[0])
  await expect(args.onChange).toHaveBeenCalledWith({
    ...tabs[0],
    current: expect.anything(),
  })

  await selectTab(tabs[1])
  await expect(args.onChange).toHaveBeenCalledWith({
    ...tabs[1],
    current: expect.anything(),
  })

  await selectTab(tabs[2])
  await expect(args.onChange).toHaveBeenCalledWith({
    ...tabs[2],
    current: expect.anything(),
  })
}
