import { Meta, Story } from '@storybook/vue3'
import BaseInput from './BaseInput.vue'

export default {
  title: 'Design System/Forms/Input',
  component: BaseInput,
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

interface BaseInputProps {
  disabled?: boolean
  value?: string
  type: 'text' | 'textarea' | 'email' | 'password'
  placeholder: string
  variant: 'default' | 'danger' | 'warning' | 'success'
}

const Template: Story<BaseInputProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args, value: args.value || '' }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="min-width: 300px">
      <div >
        <BaseInput v-bind="args" v-model="value" />
      </div>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter the value',
  variant: 'default',
}

export const Disabled = Template.bind({})
Disabled.args = {
  value: 'Disabled value',
  placeholder: 'Enter the value',
  disabled: true,
  variant: 'default',
}

export const Textarea = Template.bind({})
Textarea.args = {
  placeholder: 'Enter the textarea value',
  type: 'textarea',
  variant: 'default',
}

export const TextareaNotResizable = Template.bind({})
TextareaNotResizable.args = {
  placeholder: 'Enter the textarea value',
  type: 'textarea',
  variant: 'default',
  class: 'twc-resize-none',
}

export const Password = Template.bind({})
Password.args = {
  placeholder: 'Enter your password',
  type: 'password',
  variant: 'default',
}

export const Email = Template.bind({})
Email.args = {
  placeholder: 'Enter your email',
  type: 'email',
  variant: 'default',
}
