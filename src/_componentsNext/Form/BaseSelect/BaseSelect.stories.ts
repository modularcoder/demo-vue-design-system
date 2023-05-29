import { Meta, Story, StoryFn } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import { ref } from 'vue'
import BaseSelect from './BaseSelect.vue'
import BaseSelectOption from './BaseSelectOption.vue'
import { BASE_SELECT_VARIANT, BaseSelectProps } from './BaseSelect.types'
import { COUNTRY_LIST } from '../../../_statics/counties'

const CONTENT_PLACEHOLDER = 'Select country'
const CONTENT_OPTIONS = COUNTRY_LIST.map((item) => ({
  id: item,
  name: item,
  value: item,
}))

export default {
  title: 'Design System Next/Form/Select',
  component: BaseSelect,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7wZ9NgbGUR8czcmjB4kg95/AE-Design-system-(based-on-Tailwind)?node-id=5966%3A26648&t=hQGw8eBsR5HqXeaK-0',
    },
  },
  argTypes: {
    variant: {
      options: Object.values(BASE_SELECT_VARIANT),
      defaultValue: BASE_SELECT_VARIANT.DEFAULT,
      control: { type: 'select' },
    },
    options: {
      control: {
        type: null,
      },
    },
    // Slots
    default: {
      name: 'Default',
      description: 'The options slot',
      control: {
        type: null,
      },
    },

    Placeholder: {
      description: 'The placeholder slot',
      control: {
        type: null,
      },
    },

    Value: {
      description: 'The selected value slot',
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof BaseSelect>

export const Variants: StoryFn<BaseSelectProps> = () => ({
  components: { BaseSelect, BaseSelectOption },
  setup() {
    const valueDefaultActiveEmpty = ref('')
    const valueDefaultActiveSelected = ref(COUNTRY_LIST[0])
    const valueDefaultDisabledEmpty = ref('')
    const valueDefaultDisabledSelected = ref(COUNTRY_LIST[0])

    const valueDangerActiveEmpty = ref('')
    const valueDangerActiveSelected = ref(COUNTRY_LIST[0])
    const valueDangerDisabledEmpty = ref('')
    const valueDangerDisabledSelected = ref(COUNTRY_LIST[0])

    return {
      valueDefaultActiveEmpty,
      valueDefaultActiveSelected,
      valueDefaultDisabledEmpty,
      valueDefaultDisabledSelected,
      valueDangerActiveEmpty,
      valueDangerActiveSelected,
      valueDangerDisabledEmpty,
      valueDangerDisabledSelected,
      CONTENT_PLACEHOLDER,
      CONTENT_OPTIONS,
    }
  },
  template: `
    <div style="min-width: 600px;" class="twc-space-y-8">
      <h3>Variant default</h3>
      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">active</h5>
          <BaseSelect
            v-model="valueDefaultActiveEmpty"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS"></BaseSelect>

          <BaseSelect
            v-model="valueDefaultActiveSelected"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS"></BaseSelect>
        </div>
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">disabled</h5>

          <BaseSelect
            v-model="valueDefaultDisabledEmpty"
            :disabled="true"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS"></BaseSelect>

          <BaseSelect
            v-model="valueDefaultDisabledSelected"
            :disabled="true"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS"></BaseSelect>
        </div>
      </div>

      <h3>Variant danger</h3>
      <div class="twc-grid twc-grid-cols-2 twc-gap-8 twc-w-full">
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">active</h5>
          <BaseSelect
            v-model="valueDangerActiveEmpty"
            variant="danger"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS" />

          <BaseSelect
            v-model="valueDangerActiveSelected"
            variant="danger"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS" />
        </div>
        <div class="twc-space-y-4">
          <h5 class="twc-text-gray-500">disabled</h5>
          <BaseSelect
            v-model="valueDangerDisabledEmpty"
            variant="danger"
            :disabled="true"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS" />

          <BaseSelect
            v-model="valueDangerDisabledSelected"
            variant="danger"
            :disabled="true"
            :placeholder="CONTENT_PLACEHOLDER"
            :options="CONTENT_OPTIONS" />
        </div>
      </div>
    </div>
  `,
})

const Template: Story<BaseSelectProps> = () => ({
  components: { BaseSelect, BaseSelectOption },
  setup() {
    const value = ref('')
    return { value, COUNTRY_LIST }
  },
  template: `
      <div style="width: 300px">
        <BaseSelect v-model="value" placeholder="Select country">
          <BaseSelectOption
            v-for="country in COUNTRY_LIST"
            :key="country"
            :value="country"
          >
            {{ country }}
          </BaseSelectOption>
        </BaseSelect>
      </div>
    `,
})

export const WithSlotOptions = Template.bind({})

export const Playground: Story<BaseSelectProps> = (args) => ({
  components: { BaseSelect, BaseSelectOption },
  setup() {
    const value = ref(args.modelValue || '')

    const handleUpdate = (value) => {
      action('@update:model-value')(value)
    }

    return { args, value, handleUpdate, CONTENT_OPTIONS }
  },
  template: `
      <div style="width: 300px">
        <BaseSelect v-bind="args" v-model="value" :options="CONTENT_OPTIONS" @update:model-value="handleUpdate"></BaseSelect>
      </div>
    `,
})

Playground.args = {
  variant: 'default',
  placeholder: 'Select country',
  disabled: false,
  modelValue: '',
}
