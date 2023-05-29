import { Story, Meta } from '@storybook/vue3'
import BaseAlert from './BaseAlert.vue'
import BaseButton from '../BaseButton/BaseButton.vue'
import { AcademicCapIcon } from '@heroicons/vue/solid'
import { BaseAlertProps } from './BaseAlertTypes'

export default {
  title: 'Design System/Alert',
  component: BaseAlert,
  parameters: {
    // layout: 'centered',
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=103%3A1959',
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'success', 'danger'],
      },
    },
  },
} as Meta

const Template: Story<BaseAlertProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseAlert, BaseButton, AcademicCapIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="twc-w-full twc-min-h-screen twc-flex twc-justify-center twc-items-center">
      <div class=" w-3/4 ">
        <BaseAlert v-bind="args" class="twc-mb-2" >Something happened</BaseAlert>

        <BaseAlert v-bind="args" class="twc-mb-2" >
          <template v-slot:default>
            Something happened
          </template>

          <template v-slot:description>
            This is the description of what happened
          </template>
        </BaseAlert>

        <BaseAlert v-bind="args" class="twc-mb-2" >
          <template v-slot:default>
            Something happened
          </template>

          <template v-slot:description>
            This is the description of what happened
          </template>

          <template v-slot:action>
            <BaseButton :variant="args.variant" :inverted="true">
              Try again  →
            </BaseButton>
          </template>
        </BaseAlert>

        <BaseAlert v-bind="args" class="twc-mb-2" >
          <template v-slot:default>
            Something happened
          </template>

          <template v-slot:icon>
            <AcademicCapIcon />
          </template>

          <template v-slot:action>
            <BaseButton :variant="args.variant" :inverted="true">
              Try again  →
            </BaseButton>
          </template>
        </BaseAlert>

        <BaseAlert v-bind="args" class="twc-mb-2" >
          <template v-slot:default>
            Something happened
          </template>

          <template v-slot:icon>
            <AcademicCapIcon />
          </template>

          <template v-slot:description>
            This is the description of what happened
          </template>

          <template v-slot:action>
            <BaseButton :variant="args.variant" :inverted="true">
              Try again  →
            </BaseButton>
          </template>
        </BaseAlert>
      </div>
    </div>
  `,
})

export const Info = Template.bind({})
Info.args = {
  variant: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'warning',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}
