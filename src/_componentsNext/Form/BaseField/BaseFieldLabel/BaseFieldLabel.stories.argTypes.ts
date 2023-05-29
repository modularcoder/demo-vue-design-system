export default {
  label: {
    name: 'label',
    type: {
      name: 'string',
      required: false,
    },
    description: 'The label text of the form field',
    table: {
      category: 'props',
      type: { summary: 'string' },
      defaultValue: { summary: `` },
    },
  },

  labelHint: {
    name: 'labelHint',
    type: {
      name: 'string',
      required: false,
    },
    description: 'The label hint text of the form field',
    table: {
      category: 'props',
      type: { summary: 'string' },
      defaultValue: { summary: `` },
    },
  },

  required: {
    name: 'required',
    type: {
      name: 'boolean',
      required: false,
    },
    description: 'Shows a red required asterisk in the label',
    table: {
      // category: 'props',
      type: {
        summary: 'boolean',
      },
      defaultValue: { summary: false },
    },
  },

  // Slots
  default: {
    name: 'default',
    description: 'The component slot',
    table: {
      category: 'slots',
      type: null,
    },
    control: {
      type: null,
    },
  },
}
