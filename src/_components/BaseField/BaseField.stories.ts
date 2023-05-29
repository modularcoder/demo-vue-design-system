import { Story, Meta } from '@storybook/vue3'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { BaseFieldProps } from './BaseFieldTypes'

import BaseField from './BaseField.vue'
import BaseInput from '../BaseInput/BaseInput.vue'
import BaseCheckbox from '../BaseCheckbox/BaseCheckbox.vue'
import BaseRadio from '../BaseRadio/BaseRadio.vue'
import BaseSelect from '../BaseSelect/BaseSelect.vue'
import BaseSelectOption from '../BaseSelect/BaseSelectOption.vue'

import { COUNTRY_LIST } from '../../_statics/counties'
import { ref } from 'vue'

export default {
  title: 'Design System/Forms/Field',
  component: BaseField,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=704%3A3704',
    },
  },
  argTypes: {
    label: { type: 'string' },
    labelHint: { type: 'string' },
    message: { type: 'string' },
    required: { type: 'boolean' },
    variant: {
      options: ['default', 'danger', 'warning', 'success'],
      control: { type: 'select' },
      defaultValue: 'default',
    },
  },
} as Meta

const Template: Story<BaseFieldProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseField, BaseInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="min-width: 300px" >
      <div >
        <BaseField v-bind="args">
          <BaseInput v-if="args.textarea" value="Lorem Ipsum" placeholder="Enter the value..." type="textarea" data-test-id="textarea"></BaseInput>
          <BaseInput v-else value="Lorem Ipsum" placeholder="Enter the value..." data-test-id="input"></BaseInput>
        </BaseField>
      </div>
    </div>

  `,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Basic field',
  textarea: false,
}

export const WithContent = Template.bind({})
WithContent.args = {
  label: 'Basic field',
  textarea: false,
}

WithContent.play = async ({ canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement)

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('input'), 'Hello World!')

  // 👇 Assert DOM structure
  await expect(canvas.getByDisplayValue('Hello World!')).toBeInTheDocument()
}

export const WithMessage = Template.bind({})
WithMessage.args = {
  label: 'Basic field with message',
  message: 'Explanation message',
  textarea: false,
}

export const WithLabelHint = Template.bind({})
WithLabelHint.args = {
  label: 'Basic field with message',
  labelHint: '(Hint text)',
  message: 'Explanation message',
  textarea: false,
}

export const Required = Template.bind({})
Required.args = {
  label: 'Basic field with message',
  message: 'Explanation message',
  required: true,
  textarea: false,
}

export const RequiredWithLabelHint = Template.bind({})
RequiredWithLabelHint.args = {
  label: 'Basic field with message',
  labelHint: '(Hint text)',
  message: 'Explanation message',
  required: true,
  textarea: false,
}

export const StatusSuccess = Template.bind({})
StatusSuccess.args = {
  label: 'Basic field success',
  variant: 'success',
  message: 'This username is available',
  textarea: false,
}

export const StatusWarning = Template.bind({})
StatusWarning.args = {
  label: 'Basic field warning',
  variant: 'warning',
  message: 'This field is required!',
  textarea: false,
}

export const StatusError = Template.bind({})
StatusError.args = {
  label: 'Basic field error',
  variant: 'danger',
  message: 'This field is required!',
  textarea: false,
}

const TemplateGroup: Story<BaseFieldProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseField, BaseInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="min-width: 300px" >
      <div >
        <BaseField v-bind="args">
          <div class="twc--space-y-px">
            <BaseInput value="Lorem Ipsum" class="twc-rounded-t-md twc-rounded-b-none" placeholder="First"></BaseInput>
            <div class="twc-flex twc--space-x-px">
              <BaseInput value="One" class="twc-rounded-none"  placeholder="Second"></BaseInput>
              <BaseInput value="Two" class="twc-rounded-none" placeholder="Third"></BaseInput>
            </div>
            <BaseInput value="Bottom line" class="twc-rounded-b-md twc-rounded-t-none" placeholder="Fourth"></BaseInput>
          </div>
        </BaseField>
      </div>
    </div>

  `,
})

export const InputGroup = TemplateGroup.bind({})

InputGroup.args = {
  label: 'Input group example',
  labelHint: '(Hint)',
  required: true,
  message: 'Make your password short and easy to guess.',
}

export const InputGroupError = TemplateGroup.bind({})

InputGroupError.args = {
  label: 'Input group example',
  labelHint: '(Hint)',
  variant: 'danger',
  required: true,
  message: 'Make your password short and easy to guess.',
}

const CheckboxTemplate: Story<BaseFieldProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseField, BaseCheckbox },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="min-width: 300px" >
      <div >
        <BaseField v-bind="args">
          <BaseCheckbox v-model="args.value">
            <div>
              <p class="twc-font-medium twc-text-gray-700">Agree</p>
              <p class="twc-text-gray-500">
                Do you agree on receiving marketing emails.
              </p>
            </div>
          </BaseCheckbox>
        </BaseField>
      </div>
    </div>
  `,
})

export const Checkbox = CheckboxTemplate.bind({})

Checkbox.args = {
  label: 'CTAs',
  labelHint: '(Hint text)',
}

export const CheckboxNoLabel = CheckboxTemplate.bind({})

CheckboxNoLabel.args = {}

export const CheckboxError = CheckboxTemplate.bind({})

CheckboxError.args = {
  label: 'CTAs',
  required: true,
  variant: 'danger',
  value: false,
  message: 'This field is required!',
}

const RadioTemplate: Story<BaseFieldProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseField, BaseRadio },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const value = ref('')
    return { args, value }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="min-width: 300px" >
      <div >
        <BaseField v-bind="args">
          <BaseRadio v-model="value" native-value="everything">
            <div>
              <p class="twc-font-medium twc-text-gray-700">Everything</p>
              <p class="twc-text-gray-500">
                Receive all notification via SMS
              </p>
            </div>
          </BaseRadio>
          <BaseRadio v-model="value" native-value="asEmail">
            <div>
              <p class="twc-font-medium twc-text-gray-700">Same as email</p>
              <p class="twc-text-gray-500">
                Receive the same notification as in email
              </p>
            </div>
          </BaseRadio>
          <BaseRadio v-model="value" native-value="nothing">
            <div>
              <p class="twc-font-medium twc-text-gray-700">No push notification</p>
              <p class="twc-text-gray-500">
                Receive no notifications via SMS
              </p>
            </div>
          </BaseRadio>
        </BaseField>
      </div>
    </div>`,
})

export const Radio = RadioTemplate.bind({})

Radio.args = {
  label: 'Push Notifications',
  labelHint: '(Hint text)',
}

export const RadioNoLabel = RadioTemplate.bind({})

RadioNoLabel.args = {}

export const RadioError = RadioTemplate.bind({})

RadioError.args = {
  label: 'Push Notifications',
  required: true,
  variant: 'danger',
  value: '',
  message: 'This field is required!',
}

const SelectTemplate: Story<BaseFieldProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BaseField, BaseSelect, BaseSelectOption },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const value = ref('')
    return { args, value, COUNTRY_LIST }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="width: 300px" >
      <div >
        <BaseField v-bind="args">
          <BaseSelect v-bind="args" v-model="value">
            <BaseSelectOption
            v-for="country in COUNTRY_LIST"
            :key="country"
            :value="country"
            >
              {{ country }}
            </BaseSelectOption>
          </BaseSelect>
        </BaseField>
      </div>
    </div>
  `,
})

export const Select = SelectTemplate.bind({})

Select.args = {
  label: 'Country',
  labelHint: '(Hint text)',
  placeholder: 'Select country',
}

export const SelectNoLabel = SelectTemplate.bind({})

SelectNoLabel.args = {
  placeholder: 'Select country',
}

export const SelectError = SelectTemplate.bind({})

SelectError.args = {
  label: 'Country',
  required: true,
  variant: 'danger',
  message: 'This field is required!',
  placeholder: 'Select country',
}
