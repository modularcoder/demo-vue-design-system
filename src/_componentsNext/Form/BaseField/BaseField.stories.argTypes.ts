import { BASE_FIELD_VARIANT } from './BaseField.types'

export default {
  variant: {
    description: 'Sets the variant of the form field',
    control: {
      type: 'select',
      options: Object.values(BASE_FIELD_VARIANT),
    },
  },

  label: {
    description: 'The label text of the form field',
  },

  labelHint: {
    description: 'Custom label hint text of the form field',
  },

  message: {
    description: 'The message of the form field.',
  },

  required: {
    description: 'Shows a red required asterisk in the label',
  },

  optional: {
    description:
      'Shows (Optional) near label. labelHint property and LabelHint slots should be undefined',
  },

  // Slots
  default: {
    name: 'Default',
    description: 'The component slot',
    control: {
      type: null,
    },
  },

  Label: {
    description: 'The label slot',
    control: {
      type: null,
    },
  },

  Message: {
    description: 'The message slot',
    control: {
      type: null,
    },
  },
}
