import { Meta, Story } from '@storybook/vue3'
import BaseCheckbox from './BaseCheckbox.vue'

export default {
  title: 'Design System/Forms/Checkbox',
  component: BaseCheckbox,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=705%3A4352',
    },
  },
  argTypes: {
    variant: {
      options: ['default', 'danger', 'warning', 'success'],
      control: { type: 'select' },
    },
  },
} as Meta

interface BaseCheckboxProps {
  value?: boolean
  variant: 'default' | 'danger' | 'warning' | 'success'
}

const Template: Story<BaseCheckboxProps> = (args) => ({
  components: { BaseCheckbox },
  setup() {
    return { args, value: args.value || false }
  },
  template: `
    <div style="min-width: 300px">
      <div >
        <BaseCheckbox v-bind="args" v-model="value">
          <p>Check me! </p>
        </BaseCheckbox>
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
  value: false,
}
