import { Meta, Story } from '@storybook/vue3'
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import BaseDescriptionList from './BaseDescriptionList.vue'
import BaseDescriptionListItem from './BaseDescriptionListItem.vue'
import { BaseBadge } from '../BaseBadge'
import { BaseTooltip } from '../BaseTooltip'

export default {
  title: 'Design System/Description List',
  component: BaseDescriptionList,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story = (args) => ({
  components: { BaseDescriptionList, BaseDescriptionListItem },
  setup() {
    return { args }
  },
  template: `
    <div>
    <div class="twc-py-4 sm:twc-py-5 twc-border-b twc-border-gray-200">
      <h4> Organization details </h4>
      <p class="twc-mt-1 twc-max-w-2xl twc-text-gray-500">
      Personal details and application.
      </p>
    </div>
    <BaseDescriptionList v-bind="args">
      <BaseDescriptionListItem label="Organization name" >
        ACME Organization
      </BaseDescriptionListItem>
      <BaseDescriptionListItem label="Street address" >
        123 Main str
      </BaseDescriptionListItem>
      <BaseDescriptionListItem label="City, State" >
        Miami, Florida
      </BaseDescriptionListItem>
      <BaseDescriptionListItem label="Postal/Zipcode, Country" >
        12234 United States
      </BaseDescriptionListItem>
    </BaseDescriptionList>
    </div>
  `,
})

const CustomTemplate: Story = (args) => ({
  components: {
    BaseDescriptionList,
    BaseDescriptionListItem,
    BaseBadge,
    ExclamationCircleIcon,
    BaseTooltip,
  },
  setup() {
    return { args }
  },
  template: `
  <div class="sm:twc-rounded-lg twc-shadow">
    <div class="twc-p-4 sm:twc-p-5 twc-border-b twc-border-gray-200">
      <div class="twc-flex twc-justify-between">
        <h4>
          Organization details
        </h4>
        <a class="twc-cursor-pointer">
          Edit
        </a>
      </div>
      <p class="twc-mt-1 twc-max-w-2xl twc-text-gray-500">
        Personal details and application.
      </p>
    </div>
    <BaseDescriptionList v-bind="args">
        <template #action>
        <a
          class="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
        >
          Edit
        </a>
      </template>
        <BaseDescriptionListItem label="Full name" class="twc-px-4 sm:twc-px-5">
          <div class="twc-flex twc-justify-between twc-w-full">
              Tom Cook
            <a class="twc-cursor-pointer">
              Edit
            </a>
          </div>
        </BaseDescriptionListItem>
        <BaseDescriptionListItem label="Phone number" class="twc-px-4 sm:twc-px-5">
          <span class="twc-flex twc-justify-between twc-w-full">
            (123) 304-5678
            <BaseBadge variant="success" rounded>Confirmed</BaseBadge>
          </span>
        </BaseDescriptionListItem>
        <BaseDescriptionListItem class="twc-px-4 sm:twc-px-5">
          <template #label>
          <span class="twc-flex twc-items-center">
            Email address
            <BaseTooltip position="top">
              <ExclamationCircleIcon class=" twc-inline twc-h-4 twc-w-4" />
              <template #content>
                verification required!
              </template>
            </BaseTooltip>
          </span>
          </template>
          tom.cook@gmail.com
        </BaseDescriptionListItem>
      </BaseDescriptionList>
    </div>
  `,
})

export const Default = Template.bind({})

export const Custom = CustomTemplate.bind({})
