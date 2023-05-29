import { Meta, Story } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import BaseToast from './BaseToast.vue'
import BaseButton from '../BaseButton/BaseButton.vue'
import { BaseToastProps } from './BaseToastTypes'
import { BaseToastService } from './_services/index'

export default {
  title: 'Design System/Toast',
  component: BaseToast,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=2568%3A6171',
    },
  },
  argTypes: {
    variant: {
      options: ['info', 'success', 'danger', 'warning'],
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story<BaseToastProps> = (args) => ({
  components: { BaseToast },
  setup() {
    return {
      args,
    }
  },
  template: `
     <BaseToast v-bind="args" />
   `,
})

export const Default = Template.bind({})
Default.args = {
  variant: 'success',
  message: 'Feed created',
  description:
    'Your feed is created successfully , you can now use it as you wish !',
  actions: [
    { message: 'Retry', action: action('Retry clicked!') },
    {
      message: 'Undo',
      action: action('Undo clicked!'),
      class: '!twc-text-gray-500 twc-font-medium',
    },
  ],
}

const ToastServiceTemplate: Story<
  Parameters<typeof BaseToastService.open>[0]
> = (args) => ({
  components: { BaseButton },
  setup() {
    const openToast = () => {
      BaseToastService.open(args)
    }
    return {
      args,
      openToast,
    }
  },
  template: `
     <BaseButton @click="openToast" variant="primary"> Open Toast Notification </BaseButton>
   `,
})

export const Service = ToastServiceTemplate.bind({})
Service.args = {
  ...Default.args,
  onCloseClick: action('onCloseClick'),
}

export const ExtendedDuration = ToastServiceTemplate.bind({})
ExtendedDuration.args = {
  ...Default.args,
  duration: 5000,
}
