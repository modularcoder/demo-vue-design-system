import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

import { COUNTRY_LIST } from '../../../_statics/counties'
import { BASE_FIELD_VARIANT } from './BaseField.types'
import BaseField from './BaseField.vue'
import BaseFieldLabel from './BaseFieldLabel/BaseFieldLabel.vue'
import BaseInput from '../BaseInput/BaseInput.vue'
import BaseSelect from '../BaseSelect/BaseSelect.vue'
import BaseCheckbox from '../BaseCheckbox/BaseCheckbox.vue'
import BaseRadio from '../BaseRadio/BaseRadio.vue'
import BaseTextarea from '../BaseTextarea/BaseTextarea.vue'
import argTypes from './BaseField.stories.argTypes'

const CONTENT_OPTIONS = COUNTRY_LIST.map((item) => ({
  name: item,
  value: item,
}))
const LABEL_DEFAULT = 'Label'
const MESSAGE_ERROR = 'Required'
const MESSAGE_DEFAULT = 'Help text'

export default {
  title: 'Design System Next/Form/Field',
  component: BaseField,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=5420%3A8631&t=Q6sha3pSNkSngYpT-0',
    },
  },
  argTypes,
  args: {
    variant: BASE_FIELD_VARIANT.DEFAULT,
    label: '',
    labelHint: '',
    required: false,
    message: '',
  },
} as Meta<typeof BaseField>

const TemplateDefault: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseInput,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <div class="twc-flex twc-rounded twc-h-[38px] twc-flex-row twc-items-center twc-justify-center twc-bg-gray-200 twc-font-medium twc-text-center twc-text-gray-400">
          Content
        </div>
      </BaseField>
    </div>
  `,
})

export const Default = TemplateDefault.bind({})

Default.args = {
  label: LABEL_DEFAULT,
  required: false,
}

export const WithMessage = TemplateDefault.bind({})

WithMessage.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
}

export const Required = TemplateDefault.bind({})

Required.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
  required: true,
}

export const Optional = TemplateDefault.bind({})

Optional.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
  optional: true,
}

export const Error = TemplateDefault.bind({})

Error.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_ERROR,
  variant: BASE_FIELD_VARIANT.DANGER,
  required: true,
}

const TemplateInput: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseInput,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <BaseInput />
      </BaseField>
    </div>
  `,
})

export const Input = TemplateInput.bind({})

Input.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
  optional: true,
}

export const InputError = TemplateInput.bind({})

InputError.args = {
  variant: BASE_FIELD_VARIANT.DANGER,
  label: LABEL_DEFAULT,
  message: MESSAGE_ERROR,
  required: true,
}

const TemplateSelect: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseSelect,
  },
  setup() {
    const value = ref('')

    return { args, value, CONTENT_OPTIONS }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <BaseSelect v-model="value" placeholder="Select country" :options="CONTENT_OPTIONS" />
      </BaseField>
    </div>
  `,
})

export const Select = TemplateSelect.bind({})

Select.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
  optional: true,
}

export const SelectError = TemplateSelect.bind({})

SelectError.args = {
  variant: BASE_FIELD_VARIANT.DANGER,
  label: LABEL_DEFAULT,
  message: MESSAGE_ERROR,
  required: true,
}

const TemplateTextarea: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseTextarea,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <BaseTextarea />
      </BaseField>
    </div>
  `,
})

export const Textarea = TemplateTextarea.bind({})

Textarea.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
  optional: true,
}

export const TextareaError = TemplateTextarea.bind({})

TextareaError.args = {
  variant: BASE_FIELD_VARIANT.DANGER,
  label: LABEL_DEFAULT,
  message: MESSAGE_ERROR,
  required: true,
}

const TemplateInputGroup: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseInput,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <div class="twc--space-y-px">
          <BaseInput class="twc-rounded-b-none" />
          <BaseInput class="twc-rounded-t-none" />
        </div>
      </BaseField>
    </div>
  `,
})

export const InputGroup = TemplateInputGroup.bind({})

InputGroup.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
  optional: true,
}

export const InputGroupError = TemplateInputGroup.bind({})

InputGroupError.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_ERROR,
  variant: BASE_FIELD_VARIANT.DANGER,
  required: true,
}

// Checkbox

const TemplateCheckbox: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseFieldLabel,
    BaseCheckbox,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField :message="args.message" :variant="args.variant">
        <BaseCheckbox :required="true">
          I agree to the <a href="#">Privacy Policy</a>
        </BaseCheckbox>
      </BaseField>
    </div>
  `,
})

export const Checkbox = TemplateCheckbox.bind({})

export const CheckboxError = TemplateCheckbox.bind({})

CheckboxError.args = {
  message: MESSAGE_ERROR,
  variant: BASE_FIELD_VARIANT.DANGER,
}

const TemplateCheckboxGroup: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseFieldLabel,
    BaseCheckbox,
  },
  setup() {
    const value = ref([])

    return { value, args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <div class="twc-space-y-3">
          <BaseCheckbox v-model="value" native-value="one">Option one</BaseCheckbox>
          <BaseCheckbox v-model="value" native-value="two">Option two</BaseCheckbox>
          <BaseCheckbox v-model="value" native-value="three">Option three</BaseCheckbox>
        </div>
      </BaseField>
    </div>
  `,
})

export const CheckboxGroup = TemplateCheckboxGroup.bind({})

CheckboxGroup.args = {
  label: LABEL_DEFAULT,
  optional: true,
  message: MESSAGE_DEFAULT,
}

export const CheckboxGroupError = TemplateCheckboxGroup.bind({})

CheckboxGroupError.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_ERROR,
  variant: BASE_FIELD_VARIANT.DANGER,
  required: true,
}

const TemplateRadioGroup: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseFieldLabel,
    BaseRadio,
  },
  setup() {
    const value = ref('')

    return { value, args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <div class="twc-space-y-3">
          <BaseRadio v-model="value" native-value="one">Option one</BaseRadio>
          <BaseRadio v-model="value" native-value="two">Option two</BaseRadio>
          <BaseRadio v-model="value" native-value="three">Option three</BaseRadio>
        </div>
      </BaseField>
    </div>
  `,
})

export const RadioGroup = TemplateRadioGroup.bind({})

RadioGroup.args = {
  label: LABEL_DEFAULT,
  message: MESSAGE_DEFAULT,
  optional: true,
}

export const RadioGroupError = TemplateRadioGroup.bind({})

RadioGroupError.args = {
  variant: BASE_FIELD_VARIANT.DANGER,
  label: LABEL_DEFAULT,
  message: MESSAGE_ERROR,
  required: true,
}

// Slots
export const WithSlots: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseInput,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
          <BaseInput />
          <template #Label>
            Label <a href="#">read more</a>
          </template>
          <template #LabelHint>
            label hint
            <a href="#">another link</a>
          </template>
          <template #Message>
            Message <a href="#">read more</a>
          </template>
      </BaseField>
    </div>
  `,
})

WithSlots.args = {
  required: true,
}

// With detached label
export const WithDetachedLabel: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseFieldLabel,
    BaseRadio,
  },
  setup() {
    const value = ref('three')

    return { value, args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField :variant="args.variant" :message="args.message">
        <BaseFieldLabel :label="args.label" :required="args.required" :labelHint="args.labelHint" />
        <div class="twc-space-y-3">
          <BaseRadio v-model="value" native-value="one">Option one</BaseRadio>
          <BaseRadio v-model="value" native-value="two">Option two</BaseRadio>
          <BaseRadio v-model="value" native-value="three">Option three</BaseRadio>
        </div>
      </BaseField>
    </div>
  `,
})

WithDetachedLabel.args = {
  label: LABEL_DEFAULT,
  labelHint: 'hint text',
  message: MESSAGE_DEFAULT,
  required: true,
}

// Playground

export const Playground: StoryFn<typeof BaseField> = (args) => ({
  components: {
    BaseField,
    BaseInput,
  },
  setup() {
    return { args }
  },
  template: `
    <div class="twc-w-80">
      <BaseField v-bind="args">
        <BaseInput />
      </BaseField>
    </div>
  `,
})

Playground.args = {
  label: LABEL_DEFAULT,
  // labelHint: 'label hint',
  required: false,
  optional: false,
  message: MESSAGE_DEFAULT,
}
