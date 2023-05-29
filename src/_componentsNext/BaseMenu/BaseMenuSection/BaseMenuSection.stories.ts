import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/vue3'
import { BaseMenuItem } from '../BaseMenuItem'
import { profileItems } from '../BaseMenu.mocks'
import BaseMenuSection from './BaseMenuSection.vue'
import { BaseMenuSectionProps } from './BaseMenuSection.types'

export default {
  title: 'Design System Next/Menu/MenuSection',
  component: BaseMenuSection,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=5565%3A7938&t=0ZjPk9WdXex1lzx5-4',
    },
  },
} as Meta<BaseMenuSectionProps>

const DefaultTemplate: Story<BaseMenuSectionProps> = (args) => ({
  components: {
    BaseMenuSection,
    BaseMenuItem,
  },
  setup() {
    const handleClick = (key: any) => action('@change')(key)

    return { ...args, handleClick }
  },
  template: `
    <div class="twc-w-60">
      <BaseMenuSection>
        <BaseMenuItem v-for="item in profileItems" :id="item.id" :title="item.title" @click="handleClick(item.id)" />
      </BaseMenuSection>
    </div>
    `,
})

const HeadingTemplate: Story<BaseMenuSectionProps> = (args) => ({
  components: {
    BaseMenuSection,
    BaseMenuItem,
  },
  setup() {
    const handleClick = (key: any) => action('@change')(key)

    return { ...args, handleClick }
  },
  template: `
    <div class="twc-w-60">
      <BaseMenuSection :heading="heading">
        <BaseMenuItem v-for="item in profileItems" :id="item.id" :title="item.title" @click="handleClick(item.id)" />
      </BaseMenuSection>
    </div>
    `,
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  profileItems,
}

export const WithHeading = HeadingTemplate.bind({})
WithHeading.args = {
  heading: 'Options',
  profileItems,
}
